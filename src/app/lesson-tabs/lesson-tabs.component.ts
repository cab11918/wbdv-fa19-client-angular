import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import LessonServiceClient from '../services/LessonServiceClient';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  constructor(private router: ActivatedRoute,
              private service: LessonServiceClient) {
  }

  courseId = '';
  moduleId = '';
  lessonId = '';
  lessons = [];

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.courseId = params.get('cid');
      this.moduleId = params.get('mid');
      this.lessonId = params.get('lid');
      this.service.findAllLessonsForModule(this.moduleId)
      .then(lessons => this.lessons = lessons);
    });


  }



}
