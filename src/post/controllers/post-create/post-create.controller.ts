import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatePostInput } from 'src/post/dto/create-post.input';
import { PostService } from 'src/post/post.service';

@Controller('post')
export class PostCreateController {

    constructor(
        private readonly postService: PostService
    ){}

    @Post(":id")
    async create(@Body()fields: CreatePostInput,@Param("id") id: string){
        return await this.postService.create(fields, +id)
    }

    @Get()
    async findAll(){
        return await this.postService.findAll()
    }
}
