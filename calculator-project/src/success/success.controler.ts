import { Controller, Get, Post, Body } from '@nestjs/common';
import { SuccessService } from './success.service';
import { Success } from './success.entity';

@Controller('success')
export class SuccessController {

    constructor(private readonly successService: SuccessService) {}

    @Post()
    createValid(
        @Body('timeTakenMs') timeTakenMs: number,
    ): Promise<Valide> {
        return this.SuccessService.createValid(timeTakenMs);
    }

    @Get()
    getMoyenne(): Promise<number> {
        return this.successService.getMoyenne();
    }

}
