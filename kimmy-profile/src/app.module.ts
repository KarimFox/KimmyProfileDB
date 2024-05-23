import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SkillsResolver } from './skills/skills.resolver';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot(process.env.FOX_Url)],
  controllers: [AppController],
  providers: [AppService, SkillsResolver],
})
export class AppModule {}
