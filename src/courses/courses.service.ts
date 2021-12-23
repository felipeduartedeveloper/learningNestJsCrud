import { Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Fundamentos do framework NestJs',
      description: 'Fundamentos do framework NestJs',
      tags: ['node.js', 'nestjs', 'javascript'],
    },
  ];

  findAll() {
    return this.courses;
  }
  findOne(id: string) {
    return this.courses.find((course) => course.id === Number(id));
  }
  create(createCourseDto: any) {
    this.courses.push(createCourseDto);
  }
}
