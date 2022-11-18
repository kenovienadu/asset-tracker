import { WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway(80, { namespace: 'events' })
export class ClientsGateway {
  registerClient(id: string, long: number, lat: number) {
    // Save client information
  }

  broadcastProximityNotification() {
    // logic goes here
  }
}
