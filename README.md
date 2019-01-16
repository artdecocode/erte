<a href="https://artdeco.bz/erte"><img align="right" src="doc/woman.jpg" width="225" alt="erte" />

# erte</a>

[![npm version](https://badge.fury.io/js/depack.svg)](https://npmjs.org/package/depack)

`erte` Colors Strings' Foreground And Background And Shows String Difference With Color.

```sh
yarn add -E erte
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
  * [`Color`](#type-color)
- [`erte(source: string, target: string): string`](#ertesource-stringtarget-string-string)
- [`c(string: string, color: Color): string`](#cstring-stringcolor-color-string)
- [`b(string: string, color: Color): string`](#bstring-stringcolor-color-string)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## API

The package is available by importing its default and named functions:

```js
import erte, { c, b } from 'erte'
```

`('black'|'red'|'green'|'yellow'|'blue'|'magenta'|'cyan'|'white'|'grey')` __<a name="type-color">`Color`</a>__: The color.

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## `erte(`<br/>&nbsp;&nbsp;`source: string,`<br/>&nbsp;&nbsp;`target: string,`<br/>`): string`

Compares the strings using the [`diff`][2] package, and colors the differences with green or red.

```js
import erte from 'erte'

const s = 'test this string'
const e = 'test this string with extra data'
const m = 'test this'

const green = erte(s, e)
console.log(green)

const red = erte(s, m)
console.log(red)

const grey = erte(s, s)
console.log(grey)
```
```
[90mtest this string[0m[32m[0m[42m [0m[32mwith[0m[42m [0m[32mextra[0m[42m [0m[32mdata[0m
[90mtest this[0m[31m[0m[41m [0m[31mstring[0m
[90mtest this string[0m
```

![extra](doc/extra.png)

![missing](doc/missing.png)

![same](doc/same.png)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/3.svg?sanitize=true"></a></p>

## `c(`<br/>&nbsp;&nbsp;`string: string,`<br/>&nbsp;&nbsp;`color: Color,`<br/>`): string`

Colors the foreground using an ANSI sequence.

```js
/** yarn example-c */
import { c } from '..'

const redText = c('RED ALERT', 'red')
console.log(redText)
```

![c](doc/c.png)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/4.svg?sanitize=true"></a></p>

## `b(`<br/>&nbsp;&nbsp;`string: string,`<br/>&nbsp;&nbsp;`color: Color,`<br/>`): string`

Colors the background with specified ANSI color.

```js
/** yarn example-b */
import { b } from 'erte'

const greenText = b('VEGAN', 'green')
console.log(greenText)
```

![b](doc/b.png)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/5.svg?sanitize=true"></a></p>

## Copyright

(c) [Art Deco][1] 2019

[Artwork by Erte][3].

[1]: https://artd.eco
[2]: https://npmjs.org/package/diff
[3]: http://www.erte.com

%-1%