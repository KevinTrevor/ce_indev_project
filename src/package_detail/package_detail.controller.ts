import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PackageDetailService } from './package_detail.service';
import { CreatePackageDetailDto } from './dto/create-package_detail.dto';
import { UpdatePackageDetailDto } from './dto/update-package_detail.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('details')
@Controller('package-detail')
export class PackageDetailController {
  constructor(private readonly packageDetailService: PackageDetailService) {}

  @Post()
  create(@Body() createPackageDetailDto: CreatePackageDetailDto) {
    return this.packageDetailService.create(createPackageDetailDto);
  }

  @Get()
  findAll() {
    return this.packageDetailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.packageDetailService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePackageDetailDto: UpdatePackageDetailDto,
  ) {
    return this.packageDetailService.update(id, updatePackageDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.packageDetailService.remove(id);
  }
}
