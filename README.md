# erte

![erte](doc/woman.jpg)

`erte` is an npm package to show string difference with colour.

```sh
yarn add erte
```

## `erte(source: string, target: string): string`

This function will compare the strings using [`diff`][2] package, and color the
differences with green or red.

```js
import erte from 'etre'

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

---

(c) [Art Deco Code][1] 2018

[Artwork by Erte][3].

[1]: https://artdeco.bz
[2]: https://npmjs.org/package/diff
[3]: http://www.erte.com
