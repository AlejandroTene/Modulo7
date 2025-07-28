import { Component, Input } from '@angular/core';
import { Course } from '../../model/Course';
import { Student } from '../../model/Student';
import { StudentItem } from '../student-item/student-item';

@Component({
  selector: 'student-list',
  imports: [StudentItem],
  templateUrl: './student-list.html',
})
export class StudentList {
  @Input()items!:Student[];

}
