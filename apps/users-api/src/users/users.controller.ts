import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor() {}

  @Get(':id')
  getUser(@Param('id') id: string) {
    return `This action returns all data from user ${id}`;
  }

  @Get(':id/contents')
  getUserContents(@Param('id') id: string) {
    return `This action returns all contents from user ${id}`;
  }

  @Post()
  createUser() {
    return 'This action creates a new user';
  }

  @Post(':id/licenses')
  setUserLicenses() {
    return 'This action sets licenses to user';
  }
}
