import {Injectable} from '@angular/core';

@Injectable()
export default class ModuleServiceClient {
  findAllModulesForCourse = courseId =>
    fetch(`https://tranquil-hamlet-37825.herokuapp.com/api/courses/${courseId}/modules`)
    .then(response => response.json())
}
