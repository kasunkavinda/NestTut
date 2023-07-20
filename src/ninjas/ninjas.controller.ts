import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Param,
  Query,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjaService: NinjasService) {}
  @Get()
  getNinjas(@Query('weapon') weapon: 'stars' | 'nunchucks') {
    return this.ninjaService.getNinjas(weapon);
  }

  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return this.ninjaService.getSingleNinja(id);
  }

  // Without pipe validations

  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return {
      data: createNinjaDto,
    };
  }

  // With pipe validations
  // @Post()
  // createNinja(
  //   @Body('id', ParseIntPipe) id: number,
  //   @Body('name') name: string,
  // ) {
  //   return {
  //     data: {
  //       id,
  //       name,
  //       typeofId: typeof id,
  //     },
  //   };
  // }

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
