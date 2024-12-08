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

  @Get('sort')
  @ApiOperation({ summary: 'Sort Restaurants' })
  @ApiQuery({ name: 'location', type: String, required: true, description: 'Location to sort restaurants in.' })
  @ApiQuery({ name: 'sort_by', type: String, required: false, description: 'Sort by criteria, e.g., rating, name.' })
  @ApiResponse({ status: 200, description: 'A sorted list of restaurants.' })
  sortRestaurants(@Query() query: any) {
    return { message: 'Sorted restaurants', query };
  }

  @Get('featured')
  @ApiOperation({ summary: 'Get Featured Restaurants' })
  @ApiQuery({ name: 'user_id', type: String, required: true, description: 'User ID for personalized recommendations.' })
  @ApiResponse({ status: 200, description: 'A list of featured restaurants for the user.' })
  getFeaturedRestaurants(@Query() query: any) {
    return { message: 'Featured restaurants for user', query };
  }

  @Get('recommendations')
  @ApiOperation({ summary: 'Get Recommended Restaurants' })
  @ApiQuery({ name: 'user_id', type: String, required: true, description: 'User ID for personalized recommendations.' })
  @ApiQuery({ name: 'preferences', type: String, required: false, description: 'User preferences for restaurant recommendations.' })
  @ApiResponse({ status: 200, description: 'A list of recommended restaurants.' })
  getRecommendedRestaurants(@Query() query: any) {
    return { message: 'Recommended restaurants for user', query };
  }
}