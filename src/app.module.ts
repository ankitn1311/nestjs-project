import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentController } from './student/student.controller';
import { StudentTeacherController } from './teacher/student.controller';
import { TeacherController } from './teacher/teacher.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    StudentController,
    TeacherController,
    StudentTeacherController,
  ],
  providers: [AppService],
})
export class AppModule {}
