## API

The package is available by importing its default and named functions:

```js
import erte, { c, b } from 'erte'
```

%TYPEDEF types/index.xml%

%~%

```## erte => string
[
  ["source", "string"],
  ["target", "string"]
]
```

Compares the strings using the [`diff`][2] package, and colors the differences with green or red.

%EXAMPLE: example/example.js, ../src => erte%
%FORK example example/example%

![extra](doc/extra.png)

![missing](doc/missing.png)

![same](doc/same.png)

%~%