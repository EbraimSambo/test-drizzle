import { Inject, Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { DRIZZLE } from 'src/database/database.module';
import { DrizzleDB } from 'src/database/types/schema';
import * as schema from "../database/schemas/index.schema";
import { MySql2Database } from 'drizzle-orm/mysql2';

@Injectable()
export class PostService {

  constructor(
    @Inject('DB_DEV')
    private readonly database: MySql2Database<typeof schema>
  ){}

  create(createPostInput: CreatePostInput, userId: number) {

    const {description,title} = createPostInput

    return this.database.insert(schema.posts).values({
        description,
        title,
        userId
    });
  }

  async findAll() {
    return this.database.query.posts.findMany({
      with:{
        user: true
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostInput: UpdatePostInput) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
