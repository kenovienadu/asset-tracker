import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client, ClientDocument } from './schemas/clients.schema';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel(Client.name)
    private clientModel: Model<ClientDocument>,
  ) {}

  async getClientsInDistance(distance: number, long: number, lat: number) {
    const targetCordinates: [number, number] = [long, lat];

    const clients = await this.clientModel.aggregate([
      {
        $geoNear: {
          near: {
            type: 'Point',
            coordinates: targetCordinates,
          },
          maxDistance: distance,
          distanceField: 'location',
        },
      },
    ]);

    return clients;
  }
}
