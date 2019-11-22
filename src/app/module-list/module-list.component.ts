import {Component, OnInit} from '@angular/core';
// import {ModuleServiceClient} from '../services/ModuleServiceClient';
import {ActivatedRoute, Router} from '@angular/router';
import ModuleServiceClient from '../services/ModuleServiceClient';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private  service: ModuleServiceClient) {
  }


  courseId = '';
  moduleId = '';
  modules = [];

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.courseId = params.get('cid');
        this.service.findAllModulesForCourse(this.courseId)
        .then(modules => this.modules = modules);
      });
  }


}
