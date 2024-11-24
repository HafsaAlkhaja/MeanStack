import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config'; // Import ConfigService
import { ConfigModule } from '@nestjs/config';  // 

@Module({
  imports: [
  
    ConfigModule,

    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'), 
      }),
      inject: [ConfigService], 
    }),
  ],
})
export class DatabaseModule {}
