import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { createUserDto } from './user.dto';
import { prisma } from '@lib/prisma';

@Injectable()
export class UserService {
  async getAllUsers() {
    const data = await prisma.user.findMany({
      select: { id: true, name: true, email: true, age: true },
    });
    return data;
  }

  async getUserById(id: string) {
    const user = await prisma.user.findUnique({
      where: { id },
      select: { id: true, name: true, email: true, age: true, role: true },
    });
    if (!user) {
      throw new UnauthorizedException('Unauthorized');
    }
    return user;
  }

  async createUser(dto: createUserDto) {
    try {
      const { password, ...rest } = dto;
      const hashedPassword = await bcrypt.hash(password, 10);
      const data = await prisma.user.create({
        data: { ...rest, password: hashedPassword },
      });
      return data.id;
    } catch (error) {
      throw new Error('Error creating user');
    }
  }

  async login(email: string, password: string) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid password');
    }
    const { password: _, ...safeUser } = user;
    return safeUser;
  }
}
