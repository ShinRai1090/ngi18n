import { configuration } from '@common/properties/config';

export class HttpModel {
  partialURL: string;
  dataJSON: any;
  dataType: string;
  callType: string;
  customHeaders: Map<string, string>;
  triggerFlask: boolean;
  responseType: any;

  constructor(
    partURL: string = '',
    dJSON: any = [],
    callType: string = configuration.callType.GET,
    customHeaders: Map<string, string> = null,
    triggerFlask: boolean = false,
    responseType: any = 'json',
    dataType: string = 'json'
  ) {
    this.partialURL = partURL;
    this.dataJSON = dJSON;
    this.dataType = dataType;
    this.callType = callType;
    this.triggerFlask = triggerFlask;
    this.responseType = responseType;

    this.customHeaders = customHeaders != null && customHeaders.size > 0 ? new Map<string, string>(customHeaders.entries()) : null;
  }
}
