import {Injectable} from '@angular/core';

@Injectable()
export default class CourseServiceClient {
  findAllCourses = () => fetch('https://tranquil-hamlet-37825.herokuapp.com/api/courses')
  .then(response => response.json())
  // findLessonForModule = (moduleId) => fetch(`https://tranquil-hamlet-37825.herokuapp.com/api/modules/${moduleId}/lessons`)
  // .then(response => response.json())
}
