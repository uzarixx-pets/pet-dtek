import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {getDatabseConfig} from './database.config'

@Module({
imports: [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: getDatabseConfig
  })
],
exports: [TypeOrmModule]
})
export class DatabaseModule {}
