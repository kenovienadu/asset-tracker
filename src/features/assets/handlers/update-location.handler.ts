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
}
