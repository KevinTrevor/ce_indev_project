import { Test, TestingModule } from '@nestjs/testing';
import { PackageDetailController } from './package_detail.controller';
import { PackageDetailService } from './package_detail.service';

describe('PackageDetailController', () => {
  let controller: PackageDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PackageDetailController],
      providers: [PackageDetailService],
    }).compile();

    controller = module.get<PackageDetailController>(PackageDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
