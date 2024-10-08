import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostResolver } from './post.resolver';
import { PostCreateController } from './controllers/post-create/post-create.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [PostResolver, PostService],
  controllers: [PostCreateController],
})
export class PostModule {}
