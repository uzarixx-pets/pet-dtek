import {ConfigService} from '@nestjs/config'
import {TypeOrmModuleOptions} from '@nestjs/typeorm'
import {DataSource, DataSourceOptions} from 'typeorm'
import { config } from 'dotenv'
import {DistrictEntity} from '@entities/district.entity';
import * as path from 'path';
import * as appPath from 'app-root-path';
config()
const entities = [DistrictEntity]
export const getDatabseConfig= (configSevice: ConfigService): TypeOrmModuleOptions  => {
    const isDev = configSevice.get<string>('NODE_ENV') === 'development'
    return {
        type: 'postgres',
        url: configSevice.get<string>('POSTGRES_URI'),
        ssl: false,
        synchronize: false,
        entities: entities,
        migrations: [path.resolve(appPath.path, isDev  ? 'dist/' : '', 'migrations/*-mgr.{ts,js}')],
        migrationsTableName: 'migrations',
        migrationsRun: true
    }
}

const configSevice = new ConfigService()
export default new DataSource(getDatabseConfig(configSevice) as DataSourceOptions)
