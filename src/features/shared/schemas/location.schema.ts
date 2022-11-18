import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type LocationDocument = HydratedDocument<Location>;

type LocationData = {
  type: 'Point';
  coordinates: [number, number];
};

@Schema({ timestamps: true })
export class Location extends Document {
  @Prop({
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
    },
  })
  data: LocationData;
}

export const LocationSchema = SchemaFactory.createForClass(Location);
