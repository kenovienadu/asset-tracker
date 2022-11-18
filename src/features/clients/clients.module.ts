import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsGateway } from './clients.gateway';
import { Client, ClientSchema } from './schemas/clients.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Client.name,
        schema: ClientSchema,
      },
    ]),
  ],
  providers: [ClientsGateway],
})
export class ClientsModule {}
