import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tuit } from './tuit.entity';

import { TuitsController } from './tuits.controller';
import { TuitsService } from './tuits.service';
import { User } from '../users/entitys';

@Module({
    imports: [TypeOrmModule.forFeature([Tuit, User])],
    controllers: [TuitsController],
    providers: [TuitsService]
})
export class TuitsModule {}
