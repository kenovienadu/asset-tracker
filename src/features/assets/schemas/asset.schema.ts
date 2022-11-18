import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Schema as SchemaType } from 'mongoose';
import { Location } from '../../shared/schemas/location.schema';

export type AssetDocument = HydratedDocument<Asset>;

@Schema({ timestamps: true })
export class Asset extends Document {
  @Prop({
    type: SchemaType.Types.ObjectId,
    ref: Location.name,
  })
  location: Location;
}

export const AssetSchema = SchemaFactory.createForClass(Asset);
