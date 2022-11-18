import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LocationService } from './location.service';
import { Location, LocationSchema } from './schemas/location.schema';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Location.name,
        schema: LocationSchema,
      },
    ]),
  ],
  providers: [LocationService],
  exports: [MongooseModule, LocationService],
})
export class SharedModule {}
