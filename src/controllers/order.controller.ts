import { Controller, Get, Param, Query, Post, Body, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam, ApiQuery } from '@nestjs/swagger'; // Đảm bảo import tất cả các decorator cần thiết

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {

  @Post('carts')
  @ApiOperation({ summary: 'Add Item to Cart' })
  @ApiBody({ schema: { example: { item_id: 1, quantity: 2, user_id: 123 } } })
  @ApiResponse({ status: 200, description: 'Item added to cart successfully.' })
  addToCart(@Body() body: any) {
    const { item_id, quantity, user_id } = body;
    // Logic to add item to cart
    return { cart_id: 10, cart_total: 150.75 };
  }

  @Put('carts')
  @ApiOperation({ summary: 'Update Cart Item Quantity' })
  @ApiBody({ schema: { example: { item_id: 1, quantity: 3, user_id: 123 } } })
  @ApiResponse({ status: 200, description: 'Cart item updated successfully.' })
  updateCart(@Body() body: any) {
    const { item_id, quantity, user_id } = body;
    // Logic to update item in cart
    return { cart_id: 10, updated_cart_total: 200.5 };
  }

  @Get('carts/:id')
  @ApiOperation({ summary: 'Retrieve Cart Details' })
  @ApiParam({ name: 'id', type: String, required: true, description: 'Cart ID.' })
  @ApiQuery({ name: 'user_id', type: String, required: true, description: 'User ID to retrieve cart details.' })
  @ApiResponse({ status: 200, description: 'Cart details retrieved successfully.' })
  getCartDetails(@Param('id') id: string, @Query('user_id') user_id: string) {
    // Logic to retrieve cart details
    return {
      items_in_cart: [{ item_id: 101, name: 'Item Name', price: 50.25 }],
      quantities: [2],
      total_cost: 100.5,
    };
  }

  @Post('schedule/delivery')
  @ApiOperation({ summary: 'Schedule Delivery' })
  @ApiBody({ schema: { example: { user_id: 123, cart_id: 10, delivery_time: '2024-12-09T14:00:00' } } })
  @ApiResponse({ status: 200, description: 'Delivery scheduled successfully.' })
  scheduleDelivery(@Body() body: any) {
    const { user_id, cart_id, delivery_time } = body;
    // Logic to schedule delivery
    return { delivery_id: 12345, status: 'Scheduled' };
  }

  @Post('schedule/pickup')
  @ApiOperation({ summary: 'Schedule Pickup' })
  @ApiBody({ schema: { example: { user_id: 123, cart_id: 10, pickup_time: '2024-12-09T15:00:00' } } })
  @ApiResponse({ status: 200, description: 'Pickup scheduled successfully.' })
  schedulePickup(@Body() body: any) {
    const { user_id, cart_id, pickup_time } = body;
    // Logic to schedule pickup
    return { pickup_id: 67890, status: 'Scheduled' };
  }

  @Get('history')
  @ApiOperation({ summary: 'Get Order History' })
  @ApiQuery({ name: 'user_id', type: String, required: true, description: 'User ID to retrieve order history.' })
  @ApiQuery({ name: 'date_range', type: String, required: false, description: 'Date range for order history.' })
  @ApiResponse({ status: 200, description: 'Order history retrieved successfully.' })
  getOrderHistory(@Query('user_id') user_id: string, @Query('date_range') date_range: string) {
    // Logic to retrieve order history
    return {
      orders: [{ order_id: '123', date: '2023-01-01', total: 50.75 }],
      total_count: 1,
    };
  }

  @Post('reorder/:order_id')
  @ApiOperation({ summary: 'Reorder an Order' })
  @ApiParam({ name: 'order_id', type: String, required: true, description: 'Order ID to reorder.' })
  @ApiResponse({ status: 201, description: 'Reorder created successfully.' })
  reorder(@Param('order_id') order_id: string) {
    // Logic to reorder
    return { new_order_id: '456', status: 'Processing' };
  }

  @Get('history/:order_id')
  @ApiOperation({ summary: 'Get Detailed Order Breakdown' })
  @ApiParam({ name: 'order_id', type: String, required: true, description: 'Order ID to retrieve details.' })
  @ApiResponse({ status: 200, description: 'Order details retrieved successfully.' })
  getOrderDetails(@Param('order_id') order_id: string) {
    // Logic to retrieve detailed order breakdown
    return {
      order_id: order_id,
      order_items: [
        { item_name: 'Item Name', quantity: 1, price: 25.75, nutritional_info: '100 calories' }
      ],
      total_cost: 25.75,
    };
  }
}

export default OrdersController;
