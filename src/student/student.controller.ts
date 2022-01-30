import { Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('students')
export class StudentController {
  @Get()
  getStudents(@Req() req: Request) {
    console.log(req);
    return 'All students';
  }
  @Get(':studentId')
  getStudentById(@Param('studentId') studentId: string) {
    return 'student by id' + studentId;
  }
  @Post()
  createStudent() {
    return 'Student Created';
  }

  @Put(':studentId')
  updateStudent() {
    return 'Student Updated';
  }

  @Delete(':studentId')
  deleteStudent() {
    return 'Student Deleted';
  }
}
