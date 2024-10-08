import { Inject, Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import * as schema from "../database/schemas/user.schema"
import { DrizzleDB } from '../database/types/schema';
import { DRIZZLE } from 'src/database/database.module';

@Injectable()
export class UserService {
  constructor(
    @Inject(DRIZZLE)
    private readonly database: DrizzleDB
  ){}
  async create(createUserInput: CreateUserInput) {
    const {email,name,password} = createUserInput
    return await this.database.insert(schema.users).values({
      name,
      email,
      password
    });
  }

  async findAll() {
    return await this.database.query.users.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
