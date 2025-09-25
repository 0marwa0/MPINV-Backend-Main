import { Controller } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Body, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { Category } from './category.entity';
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Post()
  create(@Body() data: Partial<Category>): Promise<Category> {
    return this.categoryService.create(data);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() data: Partial<Category>,
  ): Promise<Category> {
    return this.categoryService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.categoryService.remove(id);
  }
}
