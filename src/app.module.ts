import { Module } from '@nestjs/common';
import { RestaurantsController } from './controllers/restaurants.controller';
import { OrdersController } from './controllers/order.controller';

@Module({
  controllers: [
    RestaurantsController,
    OrdersController
  ],
  providers: [],
})
export class AppModule {}
