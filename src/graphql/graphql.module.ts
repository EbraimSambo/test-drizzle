import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
    imports: [
        GraphQLModule.forRootAsync({
            imports:[],
            inject: [],
            driver: ApolloDriver,
            useFactory: async () =>{
                return{
                    subscriptions: {},
                    autoSchemaFile: join(process.cwd(),'graphql/schema.gql'),
                    sortSchema: true,
                }
            }
        })
    ],
})
export class GraphqlModule {}
