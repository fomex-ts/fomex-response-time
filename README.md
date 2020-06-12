# Fomex Response Time
X-Response-Time plugin based on [koa-response-time](https://github.com/koajs/response-time) for fomex

# Installation

```bash
yarn add fomex-response-time
```

# Usage
```typescript
import { baseWebRouter } from 'fomex';
import { PluginResponseTime } from 'fomex-response-time';

export webRouter = baseWebRouter.global(new PluginResponseTime());
```

If you need response high resolution in nano time, set hrtime option to true:

```typescript
new PluginResponseTime()({ hrtime: true });
```

Sample response header with hrtime = false (default):

```
X-Response-Time: 153ms
```

Sample response header with hrtime = true:

```
X-Response-Time: 153.123581ms
```
