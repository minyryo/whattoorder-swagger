import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiQuery } from '@nestjs/swagger';

@ApiTags('restaurants')
@Controller('restaurants')
export class RestaurantsController {
  @Get('search')
  @ApiOperation({ summary: 'Search Restaurants' })
  @ApiQuery({ name: 'location', type: String, required: true, description: 'Location to search in.' })
  @ApiQuery({ name: 'cuisine_type', type: String, required: false, description: 'Type of cuisine.' })
  @ApiResponse({ status: 200, description: 'A list of matching restaurants.' })
  searchRestaurants(@Query() query: any) {
    return { message: 'Search results for restaurants', query };
  }

  @Get(':restaurant_id')
  @ApiOperation({ summary: 'View Restaurant Profile' })
  @ApiParam({ name: 'restaurant_id', type: String, required: true, description: 'Restaurant ID.' })
  @ApiResponse({ status: 200, description: 'Detailed restaurant profile.' })
  getRestaurantProfile(@Param('restaurant_id') restaurantId: string) {
    return { message: 'Restaurant profile', restaurantId };
  }

  @Post(':restaurant_id/reviews')
  @ApiOperation({ summary: 'Submit User Review' })
  @ApiParam({ name: 'restaurant_id', type: String, description: 'Restaurant ID.' })
  @ApiResponse({ status: 200, description: 'Review submitted successfully.' })
  submitReview(@Param('restaurant_id') restaurantId: string, @Body() body: any) {
    return { message: 'Review submitted', restaurantId, body };
  }
}
