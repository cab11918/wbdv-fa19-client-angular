import {Injectable} from '@angular/core';

@Injectable()
export default class WidgetServiceClient {
  findWidgetsForTopic = topicId =>
    fetch(`https://tranquil-hamlet-37825.herokuapp.com/api/topics/${topicId}/widgets`)
    .then(response => response.json());
}
