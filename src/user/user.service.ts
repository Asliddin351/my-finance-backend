import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { createUserDto } from './user.dto';
import { prisma } from '@lib/prisma';

@Injectable()
export class UserService {
    async create(dto: createUserDto) {
        const { confirm_password, password, ...rest } = dto;
        const hashedPassword = await bcrypt.hash(password, 10);
        const data = await prisma.user.create({ data: { ...rest, password: hashedPassword } });
        return data.id;
    }
}
