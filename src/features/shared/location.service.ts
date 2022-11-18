import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LocationDocument, Location } from '../shared/schemas/location.schema';

@Injectable()
export class LocationService {
  constructor(
    @InjectModel(Location.name)
    private locationModel: Model<LocationDocument>,
  ) {}

  async updateLocation(id: string, coordinates: [number, number]) {
    const location = await this.locationModel.findById(id);
    location.data = {
      type: 'Point',
      coordinates,
    };
    await location.save();
    return location;
  }

  async create(coordinates: [number, number]) {
    const location = new this.locationModel();
    location.data = {
      type: 'Point',
      coordinates,
    };

    await location.save();
    return location;
  }
}
