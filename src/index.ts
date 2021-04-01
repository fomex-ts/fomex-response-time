import { Slot } from 'qoq';
import responseTime from 'koa-response-time';

export type Options = NonNullable<Parameters<typeof responseTime>[0]>;

export class ResponseTime extends Slot<Slot.Web> {
  constructor(options: Options = {}) {
    super();
    this.use(responseTime(options));
  }
}
