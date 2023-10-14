import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './entitys'

@Module({
    imports: [TypeOrmModule.forFeature([User])]
})
export class UsersModule {}
