import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { GraphqlModule } from './graphql/graphql.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}), UserModule, DatabaseModule, GraphqlModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
