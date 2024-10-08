import { Module } from '@nestjs/common';
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { ConfigService } from '@nestjs/config';
import * as schema from 'src/database/schemas/index.schema';
import { DrizzleMySqlModule } from '@knaadh/nestjs-drizzle-mysql2';
export const DRIZZLE = Symbol("'drizzle-connection'")
@Module({
    providers: [],
    imports: [
        DrizzleMySqlModule.register({
            tag: 'DB_DEV',
            mysql: {
                connection: 'client',
                config: {
                    host: 'srv1672.hstgr.io',
                    user: 'u151028130_drizzle',
                    database: 'u151028130_drizzle',
                    password: 'Deezycheezy@2'
                },
            },
            config: { schema: { ...schema }, mode: 'default' },
        }),],
    exports: [],
})
export class DatabaseModule { }
