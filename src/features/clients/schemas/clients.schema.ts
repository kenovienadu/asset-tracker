import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Schema as SchemaType } from 'mongoose';
import { Location } from '../../shared/schemas/location.schema';

export type ClientDocument = HydratedDocument<Client>;

@Schema({ timestamps: true })
export class Client extends Document {
  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    type: SchemaType.Types.ObjectId,
    ref: Location.name,
  })
  location: Location;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
