import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import TopicServiceClient from '../services/TopicServiceClient';

@Component({
  selector: 'app-topic-pills',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.css']
})
export class TopicPillsComponent implements OnInit {

  constructor(private router: ActivatedRoute,
              private service: TopicServiceClient) {
  }

  courseId = '';
  moduleId = '';
  lessonId = '';
  topicId = '';
  topics = [];

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.courseId = params.get('cid');
      this.moduleId = params.get('mid');
      this.lessonId = params.get('lid');
      this.topicId = params.get('tid');
      this.service.findTopicsForLesson(this.lessonId)
      .then(topics => this.topics = topics);
    });
  }

}
