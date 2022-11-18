import { Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket } from 'dgram';
import { Server } from 'http';

@WebSocketGateway()
export class ClientsGateway implements OnGatewayConnection, OnGatewayInit {
  private readonly logger = new Logger();

  connectedClients: Socket[] = [];

  @WebSocketServer()
  server: Server;

  afterInit() {
    this.logger.log('Socket Gateway Initialized');
  }

  handleConnection(client: Socket) {
    this.logger.log(`client connected`);
    console.log({ client });
  }

  @SubscribeMessage('init')
  handleEvent(
    @MessageBody() data: Record<string, string>,
    @ConnectedSocket() client: Socket,
  ) {
    this.connectedClients.push(client);
    this.logger.log('Client Initialized');
    this.logger.log(data);
  }

  registerClient(id: string, long: number, lat: number) {
    // Save client information
  }

  // @Cron(CronExpression.EVERY_5_SECONDS)
  broadcastProximityNotification() {
    // logic goes here
    // this.connectedClients.forEach();
    this.server.emit('proximity', {});
  }
}
