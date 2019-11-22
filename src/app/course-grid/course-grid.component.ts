import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import CourseServiceClient from '../services/CourseServiceClient';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

  constructor(private router: ActivatedRoute,
              private service: CourseServiceClient) {
  }

  courseId = '';

  courses = [];

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.courseId = params.get('cid');

      this.service.findAllCourses()
      .then(courses => this.courses = courses);
    });
  }

}
