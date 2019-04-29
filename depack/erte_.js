/*
 diff package https://github.com/kpdecker/jsdiff
 BSD License
 Copyright (c) 2009-2015, Kevin Decker <kpdecker@gmail.com>
*/
'use strict';
function p(b, a, d) {
  let h = b[b.length - 1];
  h && h.b === a && h.f === d ? b[b.length - 1] = {count:h.count + 1, b:a, f:d} : b.push({count:1, b:a, f:d});
}
function q(b, a, d, h, e) {
  let f = d.length, n = h.length, g = a.a;
  e = g - e;
  let c = 0;
  for (; g + 1 < f && e + 1 < n && b.equals(d[g + 1], h[e + 1]);) {
    g++, e++, c++;
  }
  c && a.c.push({count:c});
  a.a = g;
  return e;
}
function r(b) {
  let a = [];
  for (let d = 0; d < b.length; d++) {
    b[d] && a.push(b[d]);
  }
  return a;
}
function t(b, a) {
  var d = r("test this string".split(""));
  a = r(a.split(""));
  let h = a.length, e = d.length, f = 1, n = h + e, g = [{a:-1, c:[]}];
  var c = q(b, g[0], a, d, 0);
  if (g[0].a + 1 >= h && c + 1 >= e) {
    return [{value:b.join(a), count:a.length}];
  }
  for (; f <= n;) {
    a: {
      for (c = -1 * f; c <= f; c += 2) {
        var k = g[c - 1];
        let l = g[c + 1];
        var m = (l ? l.a : 0) - c;
        k && (g[c - 1] = void 0);
        let v = k && k.a + 1 < h;
        m = l && 0 <= m && m < e;
        if (v || m) {
          !v || m && k.a < l.a ? (k = {a:l.a, c:l.c.slice(0)}, p(k.c, void 0, !0)) : (k.a++, p(k.c, !0, void 0));
          m = q(b, k, a, d, c);
          if (k.a + 1 >= h && m + 1 >= e) {
            c = u(b, k.c, a, d);
            break a;
          }
          g[c] = k;
        } else {
          g[c] = void 0;
        }
      }
      f++;
      c = void 0;
    }
    if (c) {
      return c;
    }
  }
}
class w {
  equals(b, a) {
    return b === a;
  }
  join(b) {
    return b.join("");
  }
}
function u(b, a, d, h) {
  let e = 0, f = a.length, n = 0, g = 0;
  for (; e < f; e++) {
    var c = a[e];
    if (c.f) {
      c.value = b.join(h.slice(g, g + c.count)), g += c.count, e && a[e - 1].b && (c = a[e - 1], a[e - 1] = a[e], a[e] = c);
    } else {
      if (c.b) {
        c.value = b.join(d.slice(n, n + c.count));
      } else {
        let k = d.slice(n, n + c.count);
        k = k.map(function(m, l) {
          l = h[g + l];
          return l.length > m.length ? l : m;
        });
        c.value = b.join(k);
      }
      n += c.count;
      c.b || (g += c.count);
    }
  }
  d = a[f - 1];
  1 < f && "string" === typeof d.value && (d.b || d.f) && b.equals("", d.value) && (a[f - 2].value += d.value, a.pop());
  return a;
}
;const x = {black:30, red:31, green:32, yellow:33, blue:34, magenta:35, cyan:36, white:37, grey:90}, y = {black:40, red:41, green:42, yellow:43, blue:44, magenta:45, cyan:46, white:47};
function z(b, a) {
  return (a = x[a]) ? `\x1b[${a}m${b}\x1b[0m` : b;
}
function A(b) {
  return (b = y[b]) ? `\x1b[${b}m${" "}\x1b[0m` : " ";
}
function B(b) {
  return t(new w, b).map(({b:a, f:d, value:h}) => {
    const e = h.split(" ");
    return a ? e.map(f => f.replace(/\n$/mg, "\u23ce\n")).map(f => z(f, "green")).join(A("green")) : d ? e.map(f => f.replace(/\n$/mg, "\u23ce\n")).map(f => z(f, "red")).join(A("red")) : z(h, "grey");
  }).join("");
}
;const C = B("test this string with extra data");
console.log(C);
const D = B("test this");
console.log(D);
const E = B("test this string");
console.log(E);


//# sourceMappingURL=erte_.js.map