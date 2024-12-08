import { Module } from '@nestjs/common';
import { RestaurantsController } from './controllers/restaurants.controller';

@Module({
  controllers: [RestaurantsController],
  providers: [],
})
export class AppModule {}
