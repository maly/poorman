Poor Man's Utilities
====================

Serial
------

Ensures serial calling of functions.

```var serial = require("serial.js");```

Calling:

```serial(fns,callback);```

Where:
- FNS is an array of functions in the form `function(cb)`. Callback function is standard `function(error,data)`.
- callback is the final callback.

See test\serial.js for detail.

Parallel
--------

Parallel call functions, perform callback at the very end, after all functions are done.

```var parallel = require("parallel.js");```

Calling:

```parallel(fns,callback);```

Where:
- FNS is an array of functions in the form `function(cb)`. Callback function is standard `function(error,data)`.
- callback is the final callback.

See test\parallel.js for detail.

Broker
------

MQTT-like message broker with pub-sub pattern.

```var broker = require("broker.js");```

Publish:
```broker.pub(topic, message)```

Subscribe:
```broker.sub(pattern,callback)```

Callback is ```function(message,topic,matchedPattern)```