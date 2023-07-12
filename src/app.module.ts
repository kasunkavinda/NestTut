import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjasModule } from './ninjas/ninjas.module';
import { ArmyModule } from './army/army.module';

@Module({
  imports: [NinjasModule, ArmyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
