import { Module } from '@nestjs/common';
import { DATABASE_CONNECTION } from './database-connection';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { ConfigService } from '@nestjs/config';
import { users as userSchema} from 'src/user/schemas/schema';

@Module({
    providers: [
        {
          provide: DATABASE_CONNECTION,
          useFactory: (configService: ConfigService) => {
            const pool = new Pool({
              connectionString: configService.getOrThrow('DATABASE_URL'),
            });
            return drizzle(pool, {
              schema: {
                ...userSchema
              },
            });
          },
          inject: [ConfigService],
        },
      ],
      exports: [DATABASE_CONNECTION],
})
export class DatabaseModule {}
