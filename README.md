# Nest js notes

## Installation

`npm i -g @nestjs/cli`

## Controller

The only task of controller is to accept http request and send response.

**To create controller use following nest cli command**

`nest g controller name-of-controller`

Example of a controller

```
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
```

@Controller, @Get, @Post, @Put, @Delete decorators are provided by nest js


## Create a resource with everything realated to that

`nest g resourse student`

# Important links and software

Select Query Builder[typeorm.io/#/select-query-builder]

AdminJS / Admin Bro - [https://docs.adminjs.co/]
