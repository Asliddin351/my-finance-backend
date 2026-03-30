import { Injectable } from '@nestjs/common';
import { CategotyDto, CreateOrUpdateCategoryDto } from './dto/category.dto';
import { prisma } from '@lib/prisma';

@Injectable()
export class CategoryService {
  async getCategories() {
    const response = await prisma.category.findMany();
    return response;
  }

  async createCategory(data: CreateOrUpdateCategoryDto) {
    const response = await prisma.category.create({ data });
    return response.id;
  }
}
