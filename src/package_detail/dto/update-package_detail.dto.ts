import { PartialType } from '@nestjs/swagger';
import { CreatePackageDetailDto } from './create-package_detail.dto';

export class UpdatePackageDetailDto extends PartialType(CreatePackageDetailDto) {}
