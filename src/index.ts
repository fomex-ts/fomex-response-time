import { Slot } from 'qoq';
import responseTime from 'koa-response-time';

export interface ResponseTimeOptions {
  /**
   * `true` to use time in nanoseconds.
   * `false` to use time in milliseconds. (Default)
   */
  hrtime?: boolean;
}

export class ResponseTime extends Slot<Slot.Web> {
  constructor(options: ResponseTimeOptions = {}) {
    super();
    this.use(responseTime(options));
  }
}
