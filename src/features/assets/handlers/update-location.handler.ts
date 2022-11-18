import { Injectable } from '@nestjs/common';
import { AssetsService } from '../assets.service';
import { UpdateLocationDTO } from '../dtos/update-location.dto';

@Injectable()
export class UpdateAssetLocationHandler {
  constructor(private assetService: AssetsService) {}

  async handle(dto: UpdateLocationDTO) {
    const { id, longitude, latitude } = dto;
    const assetInfo = await this.assetService.updateLocation(
      id,
      longitude,
      latitude,
    );

    return assetInfo;
  }

  private onLocationUpdated() {
    // find clients within 100m of the asset and send a notification to them
    // notify clients of the change in location (proximity)
  }
}
