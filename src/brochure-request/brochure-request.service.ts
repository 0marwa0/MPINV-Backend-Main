import { Injectable } from '@nestjs/common';
import { BrochureRequestDto } from './brochure-request.dto';
@Injectable()
export class BrochureRequestService {
  private requests: BrochureRequestDto[] = [];
  create(brochureRequestDto: BrochureRequestDto) {
    this.requests.push(brochureRequestDto);
    return { success: true, message: 'Brochure request received!' };
  }

  findAll() {
    return this.requests;
  }
}
