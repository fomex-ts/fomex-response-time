# Response Time
X-Response-Time middleware based on [koa-response-time](https://github.com/koajs/response-time) for qoq.

# Installation

```bash
yarn add qoq-response-time
```

# Usage
```typescript
import { WebSlotManager } from 'qoq';
import { ResponseTime } from 'qoq-response-time';

export webSlots = WebSlotManager.use(new ResponseTime());
```

If you need response high resolution in nano time, set hrtime option to true:

```typescript
new ResponseTime({ hrtime: true });
```

Sample of response header with `hrtime=false` (default):

```
X-Response-Time: 153ms
```

Sample of response header with `hrtime=true`:

```
X-Response-Time: 153.123581ms
```
