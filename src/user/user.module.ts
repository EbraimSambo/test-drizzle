import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { DatabaseModule } from 'src/database/database.module';
import { UserReadController } from './controllers/user-read/user-read.controller';

@Module({
  imports: [DatabaseModule],
  providers: [UserResolver, UserService],
  controllers: [UserReadController],
})
export class UserModule {}
