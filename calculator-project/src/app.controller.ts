import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  @Render('calculatrice')
  calculatrice() {
    return { message: 'S\'affiche correctement' };
  }
}