# lwc-event-stream

Compile-time and runtime types for integrating with Nextdoc Stream LWC components.

## What's included

- **TypeScript types** (`dist/stream3EventStreamTypes.d.ts`) -- type definitions for outbound and inbound events on the
  Nextdoc EventStream contract v1.
- **JSON Schema** (`dist/stream3EventStreamSchemas.json`) -- the same contract as a JSON Schema (draft 2020-12), useful
  for runtime validation.

## Installation

```bash
npm install nextdoc/lwc-event-stream
```

## Usage

### TypeScript

```typescript
import type {EventStreamOutbound, EventStreamInbound} from 'lwc-event-stream';
```

### JSON Schema

```javascript
const schema = require('lwc-event-stream');
```

## Event types

### Outbound (Nextdoc -> Customer)

| Type                      | Description                              |
|---------------------------|------------------------------------------|
| `action.started`          | A deployed action has been initiated     |
| `action.succeeded`        | A deployed action completed successfully |
| `action.failed`           | A deployed action failed                 |
| `send.started`            | E-signature send has been initiated      |
| `send.sent`               | E-signature send completed successfully  |
| `send.failed`             | E-signature send failed                  |
| `custom.{name}.started`   | A custom action has been initiated       |
| `custom.{name}.succeeded` | A custom action completed successfully   |
| `custom.{name}.failed`    | A custom action failed                   |

### Inbound (Customer -> Nextdoc)

Inbound events are sent via the `publishEvent` `@api` method and currently support action invocations:

```typescript
{
    actionName: string
}
```

## License

Apache-2.0 -- Nextdoc Pty Ltd
