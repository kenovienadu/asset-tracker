import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SharedModule } from './features/shared/shared.module';
import { AssetsModule } from './features/assets/assets.module';
import { ClientsModule } from './features/clients/clients.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://admin:admin@localhost:27017/', {
      dbName: 'asset-tracker',
    }),
    SharedModule,
    AssetsModule,
    ClientsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
