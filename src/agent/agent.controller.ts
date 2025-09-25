import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AgentService } from './agent.service';
import { Agent } from './agent.entities';
import { FileInterceptor } from '@nestjs/platform-express';
@Controller('agent')
export class AgentController {
  constructor(private readonly agentService: AgentService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(
    @Body() data: Partial<Agent>,
    @UploadedFile() file: any,
  ): Promise<Agent> {
    const payload = { ...data };
    if (file) {
      payload.image = `uploads/agents/${file.filename}`;
    }
    return this.agentService.create(payload);
  }
  @Get()
  findAll() {
    return this.agentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.agentService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.agentService.remove(id);
  }
}
