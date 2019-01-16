<a href="https://artdeco.bz/erte"><img align="right" src="doc/woman.jpg" width="225" alt="erte" />

# erte</a>

[![npm version](https://badge.fury.io/js/depack.svg)](https://npmjs.org/package/depack)

`erte` is an npm package to show string difference with colour.

```sh
yarn add erte
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`erte(source: string, target: string): string`](#ertesource-string-target-string-string)
- [c(s: string, t:'red'|'green'|'grey'): string](#cs-string-tredgreengrey-string)
- [b(s: string, t:'red'|'green'): string](#bs-string-tredgreen-string)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>



## API

The package is available by importing its default function:

```js
import erte from 'erte'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## `erte(source: string, target: string): string`

This function will compare the strings using [`diff`][2] package, and color the differences with green or red.

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

![extra](doc/extra.png)

![missing](doc/missing.png)

![same](doc/same.png)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/3.svg?sanitize=true"></a></p>

## c(s: string, t:'red'|'green'|'grey'): string

This function will color the foreground with red, green or grey colors.

```js
/** yarn example-c */
import { c } from 'erte'

const redText = c('RED ALERT', 'red')
console.log(`.${redText}`) // eslint-disable-line
```

```sh
yarn example-c
```

![c](doc/c.png)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/4.svg?sanitize=true"></a></p>

## b(s: string, t:'red'|'green'): string

This function will color the background with red or green colors.

```js
/** yarn example-b */
import { b } from 'erte'

const greenText = b('VEGAN', 'green')
console.log(`.${greenText}`) // eslint-disable-line
```

```sh
yarn example-b
```

![b](doc/b.png)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/5.svg?sanitize=true"></a></p>


## Copyright

(c) [Art Deco][1] 2019

[Artwork by Erte][3].

[1]: https://artd.eco
[2]: https://npmjs.org/package/diff
[3]: http://www.erte.com
