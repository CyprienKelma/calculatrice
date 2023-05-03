import { Module } from '@nestjs/common';
import { SuccessController } from './success.controller';
import { SuccessService } from './success.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Success } from './success.entity';

@Module({
  imports:[
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'Calculatrice',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: false,
    }), TypeOrmModule.forFeature([Success]),
  ],
  controllers: [successControler],
  providers: [successService]
})
export class SuccessModule {}
  
