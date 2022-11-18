import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LocationService } from '../shared/location.service';
import { Asset, AssetDocument } from './schemas/asset.schema';

@Injectable()
export class AssetsService {
  constructor(
    @InjectModel(Asset.name)
    private assetModel: Model<AssetDocument>,
    private locationService: LocationService,
  ) {}

  async addAsset() {
    const asset = new this.assetModel();
    const location = await this.locationService.create([0, 0]);
    asset.location = location;

    await location.save();
    await asset.save();
    return asset;
  }

  async updateLocation(id: string, long: number, lat: number) {
    let asset = await this.assetModel.findById(id).populate('location').exec();

    if (!asset) {
      asset = await this.addAsset();
      return this.updateLocation(asset.id, long, lat);
    }

    const location = await this.locationService.updateLocation(
      asset.location.id,
      [long, lat],
    );

    asset.location = location;
    return asset;
  }
}
