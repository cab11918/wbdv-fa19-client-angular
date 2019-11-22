import {Injectable} from '@angular/core';

@Injectable()
export default class LessonServiceClient {
  findAllLessonsForModule = moduleId =>
    fetch(`https://tranquil-hamlet-37825.herokuapp.com/api/modules/${moduleId}/lessons`)
    .then(response => response.json());

  findLessonsById = lessonId =>
    fetch(`https://tranquil-hamlet-37825.herokuapp.com/api/lessons/${lessonId}`)
    .then(response => response.json());
}
