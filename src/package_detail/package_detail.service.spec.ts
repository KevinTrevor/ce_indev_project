import { Test, TestingModule } from '@nestjs/testing';
import { PackageDetailService } from './package_detail.service';

describe('PackageDetailService', () => {
  let service: PackageDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PackageDetailService],
    }).compile();

    service = module.get<PackageDetailService>(PackageDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
