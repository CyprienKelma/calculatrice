import { Module } from '@nestjs/common';
import { ValideController } from './valide.controller';
import { ValideService } from './valide.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Valide } from './valide.entity';

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
    }), TypeOrmModule.forFeature([Valide]),
  ],
  controllers: [ValideController],
  providers: [ValideService]
})
export class ValideModule {}
  
