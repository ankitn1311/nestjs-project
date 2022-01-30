import { Controller, Get, Put } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudents() {
    return 'All Students for a teacher';
  }

  @Put(':studentId')
  updateStudentTeacher() {
    return 'Update student for a teacher ';
  }
}
