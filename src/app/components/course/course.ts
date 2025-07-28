import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/Course';
import { CourseService } from '../../services/course';
import { StudentList } from "../student-list/student-list";

@Component({
  selector: 'app-course',
  imports: [StudentList],
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
