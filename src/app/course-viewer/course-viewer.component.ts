import {Component, OnInit} from '@angular/core';
import CourseServiceClient from '../services/CourseServiceClient';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {
  //
  // courses = [];
  // modules = [];
  // lessons = [];
  // topics = [];
  // widgets = [];

  constructor(
    private service: CourseServiceClient
  ) {
  }
  //
  // selectCourse(course) {
  //    this.modules = [];
  //   this.lessons = [];
  //   this.topics = [];
  //   this.widgets = [];
  //
  //   fetch(`https://tranquil-hamlet-37825.herokuapp.com/api/courses/${course.id}/modules`)
  //   .then(response => response.json())
  //   .then(modules => this.modules = modules);
  // }
  //
  //
  // selectModule(module) {
  //   fetch(`https://tranquil-hamlet-37825.herokuapp.com/api/modules/${module.id}/lessons`)
  //   .then(response => response.json())
  //   .then(lessons => this.lessons = lessons);
  // }
  //
  //
  // selectLesson(lesson) {
  //   fetch(`https://tranquil-hamlet-37825.herokuapp.com/api/lessons/${lesson.id}/topics`)
  //   .then(response => response.json())
  //   .then(topics => this.topics = topics);
  // }
  //
  // selectTopic(topic) {
  //   fetch(`https://tranquil-hamlet-37825.herokuapp.com/api/topics/${topic.id}/widgets`)
  //   .then(response => response.json())
  //   .then(widgets => this.widgets = widgets);
  // }


  ngOnInit() {
    // this.service.findAllCourses().then(courses => this.courses = courses);


    // fetch('https://tranquil-hamlet-37825.herokuapp.com/api/courses')
    // .then(response => response.json())
    // .then(courses => this.courses = courses);
  }

}
