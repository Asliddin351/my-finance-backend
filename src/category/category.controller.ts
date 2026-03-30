import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateOrUpdateCategoryDto } from './dto/category.dto';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService){}

    @Get()
    async getCategories() {
        return this.categoryService.getCategories()
    }

    @Post()
    async createCategory(@Body() dto: CreateOrUpdateCategoryDto) {
        return this.categoryService.createCategory(dto)
    }
}
