import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import WidgetServiceClient from '../services/WidgetServiceClient';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  constructor(private router: ActivatedRoute,
              private service: WidgetServiceClient) {
  }

  courseId = '';
  moduleId = '';
  lessonId = '';
  topicId = '';
  widgetId = ''
  widgets = [];

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.courseId = params.get('cid');
      this.moduleId = params.get('mid');
      this.lessonId = params.get('lid');
      this.topicId = params.get('tid');
      this.widgetId = params.get('wid');
      this.service.findWidgetsForTopic(this.topicId)
      .then(widgets => this.widgets = widgets);
    });
  }

}
