import {Injectable} from '@angular/core';

@Injectable()
export default class TopicServiceClient {
  findTopicsForLesson = lessonId =>
    fetch(`https://tranquil-hamlet-37825.herokuapp.com/api/lessons/${lessonId}/topics`)
    .then(response => response.json());

  findTopicById = topicId =>
    fetch(`https://tranquil-hamlet-37825.herokuapp.com/api/topics/${topicId}`)
    .then(response => response.json());
}
