import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';

@Module({
  
  imports: [ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
    type: process.env.TYPEORM_CONNECTION,
    host: process.env.TYPEORM_HOST,
    port: process.env.TYPEORM_PORT,
    username: process.env.TYPEORM_USER,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [__dirname + '/**/*.entity{.js,.ts}'],
    synchronize: true,
  } as TypeOrmModuleOptions),
    UsersModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}
