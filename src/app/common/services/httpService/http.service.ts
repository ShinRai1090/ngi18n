import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';

import { SecurityService } from '@common/services/securityService/security.service';

import { HttpModel } from '@common/models/http-detail';

import { configuration } from '@common/properties/config';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private httpClient: HttpClient,
    private securityService: SecurityService
  ) { }

  invokeHttp(httpObj: HttpModel): Observable<HttpResponse<Object>> {

    const serviceURL = (httpObj.triggerFlask ? environment.flaskURL : environment.serviceURL) + httpObj.partialURL;

    if (httpObj.callType == configuration.callType.GET) {
      return this.httpClient.get(serviceURL, {
        headers: this.securityService.fetchHeader(httpObj.triggerFlask, httpObj.customHeaders),
        observe: 'response'
      });
    } else {
      return this.httpClient.post(serviceURL, httpObj.dataJSON, {
        headers: this.securityService.fetchHeader(httpObj.triggerFlask, httpObj.customHeaders),
        observe: 'response',
        responseType: httpObj.responseType
      });
    }
  }
}
