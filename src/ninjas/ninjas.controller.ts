import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Param,
  Query,
  Body,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Controller('ninjas')
export class NinjasController {
  @Get()
  getNinjas(@Query('type') type: string) {
    return type;
  }

  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return {
      id,
    };
  }

  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return {
      data: createNinjaDto,
    };
  }

  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
    return {
      id: id,
      name: updateNinjaDto.name,
    };
  }

  @Delete(':id')
  removeNinja() {
    return {};
  }
}
