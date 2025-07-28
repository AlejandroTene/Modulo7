import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/Course';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-course',
  imports: [],
  templateUrl: './course.html',
  styleUrl: './course.css'
})
export class CourseComponent implements OnInit{
  course!:Course;
  constructor(private service:CourseService){}

  ngOnInit(): void {
    this.course=this.service.getCourse();
  }

}
