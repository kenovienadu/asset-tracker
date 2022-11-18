import { Body, Controller, Post } from '@nestjs/common';
import { UpdateLocationDTO } from './dtos/update-location.dto';
import { UpdateAssetLocationHandler } from './handlers/update-location.handler';

@Controller('assets')
export class AssetsController {
  constructor(private updateLocationHandler: UpdateAssetLocationHandler) {}

  @Post('location')
  updateAssetLocation(@Body() dto: UpdateLocationDTO) {
    return this.updateLocationHandler.handle(dto);
  }
}
