module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "JkW7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "EBst":
/***/ (function(module, exports, __webpack_require__) {

!function () {
  "use strict";
  function e() {}function t(t, n) {
    var o,
        r,
        i,
        l,
        a = E;for (l = arguments.length; l-- > 2;) {
      W.push(arguments[l]);
    }n && null != n.children && (W.length || W.push(n.children), delete n.children);while (W.length) {
      if ((r = W.pop()) && void 0 !== r.pop) for (l = r.length; l--;) {
        W.push(r[l]);
      } else "boolean" == typeof r && (r = null), (i = "function" != typeof t) && (null == r ? r = "" : "number" == typeof r ? r += "" : "string" != typeof r && (i = !1)), i && o ? a[a.length - 1] += r : a === E ? a = [r] : a.push(r), o = i;
    }var u = new e();return u.nodeName = t, u.children = a, u.attributes = null == n ? void 0 : n, u.key = null == n ? void 0 : n.key, void 0 !== S.vnode && S.vnode(u), u;
  }function n(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function o(e, o) {
    return t(e.nodeName, n(n({}, e.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children);
  }function r(e) {
    !e.__d && (e.__d = !0) && 1 == A.push(e) && (S.debounceRendering || P)(i);
  }function i() {
    var e,
        t = A;A = [];while (e = t.pop()) {
      e.__d && k(e);
    }
  }function l(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && a(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function a(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function u(e) {
    var t = n({}, e.attributes);t.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === t[r] && (t[r] = o[r]);
    }return t;
  }function _(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function p(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function c(e, t, n, o, r) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n && n(null), o && o(e);else if ("class" !== t || r) {
      if ("style" === t) {
        if (o && "string" != typeof o && "string" != typeof n || (e.style.cssText = o || ""), o && "object" == typeof o) {
          if ("string" != typeof n) for (var i in n) {
            i in o || (e.style[i] = "");
          }for (var i in o) {
            e.style[i] = "number" == typeof o[i] && !1 === V.test(i) ? o[i] + "px" : o[i];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) o && (e.innerHTML = o.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var l = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), o ? n || e.addEventListener(t, f, l) : e.removeEventListener(t, f, l), (e.__l || (e.__l = {}))[t] = o;
      } else if ("list" !== t && "type" !== t && !r && t in e) s(e, t, null == o ? "" : o), null != o && !1 !== o || e.removeAttribute(t);else {
        var a = r && t !== (t = t.replace(/^xlink\:?/, ""));null == o || !1 === o ? a ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof o && (a ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), o) : e.setAttribute(t, o));
      }
    } else e.className = o || "";
  }function s(e, t, n) {
    try {
      e[t] = n;
    } catch (e) {}
  }function f(e) {
    return this.__l[e.type](S.event && S.event(e) || e);
  }function d() {
    var e;while (e = D.pop()) {
      S.afterMount && S.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function h(e, t, n, o, r, i) {
    H++ || (R = null != r && void 0 !== r.ownerSVGElement, j = null != e && !("__preactattr_" in e));var l = m(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --H || (j = !1, i || d()), l;
  }function m(e, t, n, o, r) {
    var i = e,
        l = R;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0))), i.__preactattr_ = !0, i;var u = t.nodeName;if ("function" == typeof u) return U(e, t, n, o);if (R = "svg" === u || "foreignObject" !== u && R, u += "", (!e || !a(e, u)) && (i = _(u, R), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0);
    }var p = i.firstChild,
        c = i.__preactattr_,
        s = t.children;if (null == c) {
      c = i.__preactattr_ = {};for (var f = i.attributes, d = f.length; d--;) {
        c[f[d].name] = f[d].value;
      }
    }return !j && s && 1 === s.length && "string" == typeof s[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != s[0] && (p.nodeValue = s[0]) : (s && s.length || null != p) && v(i, s, n, o, j || null != c.dangerouslySetInnerHTML), g(i, t.attributes, c), R = l, i;
  }function v(e, t, n, o, r) {
    var i,
        a,
        u,
        _,
        c,
        s = e.childNodes,
        f = [],
        d = {},
        h = 0,
        v = 0,
        y = s.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = s[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (h++, d[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (f[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      _ = t[C], c = null;var k = _.key;if (null != k) h && void 0 !== d[k] && (c = d[k], d[k] = void 0, h--);else if (!c && v < g) for (i = v; i < g; i++) {
        if (void 0 !== f[i] && l(a = f[i], _, r)) {
          c = a, f[i] = void 0, i === g - 1 && g--, i === v && v++;break;
        }
      }c = m(c, _, n, o), u = s[C], c && c !== e && c !== u && (null == u ? e.appendChild(c) : c === u.nextSibling ? p(u) : e.insertBefore(c, u));
    }if (h) for (var C in d) {
      void 0 !== d[C] && b(d[C], !1);
    }while (v <= g) {
      void 0 !== (c = f[g--]) && b(c, !1);
    }
  }function b(e, t) {
    var n = e._component;n ? L(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || p(e), y(e));
  }function y(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;b(e, !0), e = t;
    }
  }function g(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || c(e, o, n[o], n[o] = void 0, R);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || c(e, o, n[o], n[o] = t[o], R);
    }
  }function w(e) {
    var t = e.constructor.name;(I[t] || (I[t] = [])).push(e);
  }function C(e, t, n) {
    var o,
        r = I[e.name];if (e.prototype && e.prototype.render ? (o = new e(t, n), T.call(o, t, n)) : (o = new T(t, n), o.constructor = e, o.render = x), r) for (var i = r.length; i--;) {
      if (r[i].constructor === e) {
        o.__b = r[i].__b, r.splice(i, 1);break;
      }
    }return o;
  }function x(e, t, n) {
    return this.constructor(e, n);
  }function N(e, t, n, o, i) {
    e.__x || (e.__x = !0, (e.__r = t.ref) && delete t.ref, (e.__k = t.key) && delete t.key, !e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, o), o && o !== e.context && (e.__c || (e.__c = e.context), e.context = o), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== n && (1 !== n && !1 === S.syncComponentUpdates && e.base ? r(e) : k(e, 1, i)), e.__r && e.__r(e));
  }function k(e, t, o, r) {
    if (!e.__x) {
      var i,
          l,
          a,
          _ = e.props,
          p = e.state,
          c = e.context,
          s = e.__p || _,
          f = e.__s || p,
          m = e.__c || c,
          v = e.base,
          y = e.__b,
          g = v || y,
          w = e._component,
          x = !1;if (v && (e.props = s, e.state = f, e.context = m, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(_, p, c) ? x = !0 : e.componentWillUpdate && e.componentWillUpdate(_, p, c), e.props = _, e.state = p, e.context = c), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !x) {
        i = e.render(_, p, c), e.getChildContext && (c = n(n({}, c), e.getChildContext()));var U,
            T,
            M = i && i.nodeName;if ("function" == typeof M) {
          var W = u(i);l = w, l && l.constructor === M && W.key == l.__k ? N(l, W, 1, c, !1) : (U = l, e._component = l = C(M, W, c), l.__b = l.__b || y, l.__u = e, N(l, W, 0, c, !1), k(l, 1, o, !0)), T = l.base;
        } else a = g, U = w, U && (a = e._component = null), (g || 1 === t) && (a && (a._component = null), T = h(a, i, c, o || !v, g && g.parentNode, !0));if (g && T !== g && l !== w) {
          var E = g.parentNode;E && T !== E && (E.replaceChild(T, g), U || (g._component = null, b(g, !1)));
        }if (U && L(U), e.base = T, T && !r) {
          var P = e,
              V = e;while (V = V.__u) {
            (P = V).base = T;
          }T._component = P, T._componentConstructor = P.constructor;
        }
      }if (!v || o ? D.unshift(e) : x || (e.componentDidUpdate && e.componentDidUpdate(s, f, m), S.afterUpdate && S.afterUpdate(e)), null != e.__h) while (e.__h.length) {
        e.__h.pop().call(e);
      }H || r || d();
    }
  }function U(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        a = r && e._componentConstructor === t.nodeName,
        _ = a,
        p = u(t);while (r && !_ && (r = r.__u)) {
      _ = r.constructor === t.nodeName;
    }return r && _ && (!o || r._component) ? (N(r, p, 3, n, o), e = r.base) : (i && !a && (L(i), e = l = null), r = C(t.nodeName, p, n), e && !r.__b && (r.__b = e, l = null), N(r, p, 1, n, o), e = r.base, l && e !== l && (l._component = null, b(l, !1))), e;
  }function L(e) {
    S.beforeUnmount && S.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var n = e._component;n ? L(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.__b = t, p(t), w(e), y(t)), e.__r && e.__r(null);
  }function T(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {};
  }function M(e, t, n) {
    return h(n, e, {}, !1, t, !1);
  }var S = {},
      W = [],
      E = [],
      P = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      V = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      A = [],
      D = [],
      H = 0,
      R = !1,
      j = !1,
      I = {};n(T.prototype, { setState: function setState(e, t) {
      var o = this.state;this.__s || (this.__s = n({}, o)), n(o, "function" == typeof e ? e(o, this.props) : e), t && (this.__h = this.__h || []).push(t), r(this);
    }, forceUpdate: function forceUpdate(e) {
      e && (this.__h = this.__h || []).push(e), k(this, 2);
    }, render: function render() {} });var $ = { h: t, createElement: t, cloneElement: o, Component: T, render: M, rerender: i, options: S }; true ? module.exports = $ : self.preact = $;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "FWi5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("EBst");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// EXTERNAL MODULE: ./style.css
var style_0 = __webpack_require__("FWi5");
var style_default = /*#__PURE__*/__webpack_require__.n(style_0);

// EXTERNAL MODULE: ./assets/skills.json
var assets_skills = __webpack_require__("zg/F");
var skills_default = /*#__PURE__*/__webpack_require__.n(assets_skills);

// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
    d.__proto__ = b;
} || function (d, b) {
    for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
    }
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};

function __rest(s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function sent() {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) {
            try {
                if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [0, t.value];
                switch (op[0]) {
                    case 0:case 1:
                        t = op;break;
                    case 4:
                        _.label++;return { value: op[1], done: false };
                    case 5:
                        _.label++;y = op[1];op = [0];continue;
                    case 7:
                        op = _.ops.pop();_.trys.pop();continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];t = op;break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];_.ops.push(op);break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];y = 0;
            } finally {
                f = t = 0;
            }
        }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator],
        i = 0;
    if (m) return m.call(o);
    return {
        next: function next() {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
        r,
        ar = [],
        e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
            ar.push(r.value);
        }
    } catch (error) {
        e = { error: error };
    } finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
            if (e) throw e.error;
        }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
    }return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []),
        i,
        q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function (v) {
            return new Promise(function (a, b) {
                q.push([n, v, a, b]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function () {
        return this;
    }, i;
    function verb(n, f) {
        if (o[n]) i[n] = function (v) {
            return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v;
        };
    }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
    } else {
        cooked.raw = raw;
    }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    }result.default = mod;
    return result;
}

function __importDefault(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
}
// CONCATENATED MODULE: ./node_modules/preact-range-slider/es5-esm/utils.js
function noop() {
    var _rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        _rest[_i] = arguments[_i];
    }
}
function clampValue(value, _a) {
    var min = _a.min,
        max = _a.max;
    if (value <= min) {
        return min;
    }
    if (value >= max) {
        return max;
    }
    return value;
}
function isValueOutOfRange(value, _a) {
    var min = _a.min,
        max = _a.max;
    return value < min || value > max;
}
function getPrecision(step) {
    var stepString = step.toString();
    var dotIndex = stepString.indexOf('.');
    var precision = 0;
    if (dotIndex !== -1) {
        precision = stepString.length - dotIndex - 1;
    }
    return precision;
}
function getClosestPoint(value, _a) {
    var marks = _a.marks,
        step = _a.step,
        min = _a.min;
    var points = Object.keys(marks).map(Number);
    if (step != null && step > 0) {
        var closestStep = Math.round((value - min) / step) * step + min;
        points.push(closestStep);
    }
    var diffs = points.map(function (point) {
        return Math.abs(value - point);
    });
    return points[diffs.indexOf(Math.min.apply(Math, diffs))] || min;
}
function alignValue(value, props) {
    var step = props.step;
    var closestPoint = getClosestPoint(value, props);
    return step == null || step <= 0 ? closestPoint : Number(closestPoint.toFixed(getPrecision(step)));
}
function getHandleCenterPosition(vertical, handle) {
    var coords = handle.getBoundingClientRect();
    return vertical ? coords.top + coords.height / 2 : coords.left + coords.width / 2;
}
function getMousePosition(vertical, event) {
    return vertical ? event.clientY : event.pageX;
}
function getTouchPosition(vertical, event) {
    return vertical ? event.touches[0].clientY : event.touches[0].pageX;
}
function isEventFromHandle(event, handles) {
    return handles.some(function (handle) {
        return event.target === handle;
    });
}
function isNotCorrectTouchEvent(event) {
    return event.touches.length > 1 || event.type.toLowerCase() === 'touchend' && event.touches.length > 0;
}
function killEvent(event) {
    event.stopPropagation();
    event.preventDefault();
}

//# sourceMappingURL=utils.js.map
// CONCATENATED MODULE: ./node_modules/classjoin/es5-esm/index.js
function classJoin(withConditions, withoutConditions) {
    var classes = [];
    var keys = Object.keys(withConditions);
    for (var i = 0, n = keys.length; i < n; i++) {
        var key = keys[i];
        if (withConditions[key]) {
            classes.push(key);
        }
    }
    if (withoutConditions) {
        classes = withoutConditions.concat(classes);
    }
    return classes.join(' ');
}

//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/preact-range-slider/es5-esm/components/Marks.js


function Marks(_a) {
    var min = _a.min,
        max = _a.max,
        lowerBound = _a.lowerBound,
        upperBound = _a.upperBound,
        marks = _a.marks,
        included = _a.included,
        vertical = _a.vertical,
        classesPrefix = _a.classesPrefix;
    var marksKeys = Object.keys(marks);
    var marksCount = marksKeys.length;
    var unit = 100 / (marksCount - 1);
    var markWidth = unit * 0.9;
    var range = max - min;
    var elements = marksKeys.map(Number).sort(function (a, b) {
        return a - b;
    }).map(function (point) {
        var active = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
        var classes = classJoin((_a = {}, _a[classesPrefix + 'active'] = active, _a), [classesPrefix + 'text']);
        var style = vertical ? {
            marginBottom: '-50%',
            bottom: (point - min) / range * 100 + '%'
        } : {
            width: markWidth + '%',
            marginLeft: -markWidth / 2 + '%',
            left: (point - min) / range * 100 + '%'
        };
        var markPoint = marks[point];
        return Object(preact_min["h"])("span", { class: classes, style: style, key: String(point) }, markPoint);
        var _a;
    });
    return Object(preact_min["h"])("div", { class: classesPrefix + 'marks' }, elements);
}

//# sourceMappingURL=Marks.js.map
// CONCATENATED MODULE: ./node_modules/preact-range-slider/es5-esm/components/Steps.js


function Steps(_a) {
    var min = _a.min,
        max = _a.max,
        step = _a.step,
        lowerBound = _a.lowerBound,
        upperBound = _a.upperBound,
        marks = _a.marks,
        dots = _a.dots,
        included = _a.included,
        vertical = _a.vertical,
        classesPrefix = _a.classesPrefix;
    var range = max - min;
    var elements = calcPoints(marks, dots, step, min, max).map(function (point) {
        var offset = Math.abs(point - min) / range * 100 + '%';
        var style = vertical ? { bottom: offset } : { left: offset };
        var active = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
        var classes = classJoin((_a = {}, _a[classesPrefix + 'active'] = active, _a), [classesPrefix + 'dot']);
        return Object(preact_min["h"])("span", { class: classes, style: style, key: String(point) });
        var _a;
    });
    return Object(preact_min["h"])("div", { class: classesPrefix + 'steps' }, elements);
}
function calcPoints(marks, dots, step, min, max) {
    var points = Object.keys(marks).map(Number);
    if (dots && step > 0) {
        for (var i = min; i <= max; i = i + step) {
            if (points.indexOf(i) === -1) {
                points.push(i);
            }
        }
    }
    return points;
}

//# sourceMappingURL=Steps.js.map
// CONCATENATED MODULE: ./node_modules/preact-range-slider/es5-esm/components/AbstractSlider.js






var AbstractSlider_AbstractSlider = function (_super) {
    __extends(AbstractSlider, _super);
    function AbstractSlider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dragOffset = 0;
        _this.handlesRefs = [];
        _this.saveSlider = function (element) {
            _this.sliderRef = element;
        };
        _this.saveHandle = function (component, index) {
            if (index === void 0) {
                index = 0;
            }
            if (component == null) {
                delete _this.handlesRefs[index];
            } else {
                _this.handlesRefs[index] = component.base;
            }
        };
        _this.onMouseDown = function (event) {
            if (event.button !== 0) {
                return;
            }
            var vertical = _this.props.vertical;
            var position = getMousePosition(vertical, event);
            if (isEventFromHandle(event, _this.handlesRefs)) {
                var handlePosition = getHandleCenterPosition(vertical, event.target);
                _this.dragOffset = position - handlePosition;
                position = handlePosition;
            } else {
                _this.dragOffset = 0;
            }
            _this.onStart(position);
            _this.addDocumentMouseEvents();
            killEvent(event);
        };
        _this.onTouchStart = function (event) {
            if (isNotCorrectTouchEvent(event)) {
                return;
            }
            var vertical = _this.props.vertical;
            var position = getTouchPosition(vertical, event);
            if (isEventFromHandle(event, _this.handlesRefs)) {
                var handlePosition = getHandleCenterPosition(vertical, event.target);
                _this.dragOffset = position - handlePosition;
                position = handlePosition;
            } else {
                _this.dragOffset = 0;
            }
            _this.onStart(position);
            _this.addDocumentTouchEvents();
            killEvent(event);
        };
        _this.onMouseMove = function (event) {
            if (!_this.sliderRef) {
                _this.onEnd();
                return;
            }
            var position = getMousePosition(_this.props.vertical, event);
            _this.onMove(position - _this.dragOffset);
            killEvent(event);
        };
        _this.onTouchMove = function (event) {
            if (!_this.sliderRef || isNotCorrectTouchEvent(event)) {
                _this.onEnd();
                return;
            }
            var position = getTouchPosition(_this.props.vertical, event);
            _this.onMove(position - _this.dragOffset);
            killEvent(event);
        };
        _this.onEventEnd = function () {
            _this.removeDocumentEvents();
            _this.onEnd();
            _this.props.onAfterChange(_this.getValue());
        };
        return _this;
    }
    AbstractSlider.prototype.componentWillUnmount = function () {
        this.removeDocumentEvents();
    };
    AbstractSlider.prototype.renderBase = function (tracks, handles) {
        var _a = this.props,
            min = _a.min,
            max = _a.max,
            step = _a.step,
            marks = _a.marks,
            dots = _a.dots,
            included = _a.included,
            vertical = _a.vertical,
            disabled = _a.disabled,
            className = _a.className,
            classesPrefix = _a.classesPrefix,
            children = _a.children;
        var lowerBound = this.getLowerBound();
        var upperBound = this.getUpperBound();
        var classes = classJoin((_b = {}, _b[classesPrefix + 'with-marks'] = Object.keys(marks).length, _b[classesPrefix + 'vertical'] = vertical, _b[classesPrefix + 'disabled'] = disabled, _b), [className]);
        return Object(preact_min["h"])("div", { class: classes, ref: this.saveSlider, onTouchStart: disabled ? noop : this.onTouchStart, onMouseDown: disabled ? noop : this.onMouseDown }, Object(preact_min["h"])("div", { class: classesPrefix + 'rail' }), tracks, Object(preact_min["h"])(Steps, { vertical: vertical, marks: marks, dots: dots, step: step, included: included, lowerBound: lowerBound, upperBound: upperBound, max: max, min: min, classesPrefix: classesPrefix }), handles, Object(preact_min["h"])(Marks, { vertical: vertical, marks: marks, included: included, lowerBound: lowerBound, upperBound: upperBound, max: max, min: min, classesPrefix: classesPrefix }), children);
        var _b;
    };
    AbstractSlider.prototype.getSliderStart = function () {
        var slider = this.sliderRef;
        if (!slider) {
            return 0;
        }
        var rect = slider.getBoundingClientRect();
        return this.props.vertical ? rect.top : rect.left;
    };
    AbstractSlider.prototype.getSliderLength = function () {
        var slider = this.sliderRef;
        if (!slider) {
            return 0;
        }
        return this.props.vertical ? slider.clientHeight : slider.clientWidth;
    };
    AbstractSlider.prototype.calcValue = function (offset) {
        var _a = this.props,
            vertical = _a.vertical,
            min = _a.min,
            max = _a.max;
        var ratio = Math.abs(Math.max(offset, 0) / this.getSliderLength());
        var value = vertical ? (1 - ratio) * (max - min) + min : ratio * (max - min) + min;
        return value;
    };
    AbstractSlider.prototype.calcValueByPos = function (position) {
        var pixelOffset = position - this.getSliderStart();
        var nextValue = this.clampAlignValue(this.calcValue(pixelOffset));
        return nextValue;
    };
    AbstractSlider.prototype.calcOffset = function (value) {
        var _a = this.props,
            min = _a.min,
            max = _a.max;
        var ratio = (value - min) / (max - min);
        return ratio * 100;
    };
    AbstractSlider.prototype.addDocumentMouseEvents = function () {
        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mouseup', this.onEventEnd);
    };
    AbstractSlider.prototype.addDocumentTouchEvents = function () {
        document.addEventListener('touchmove', this.onTouchMove);
        document.addEventListener('touchend', this.onEventEnd);
    };
    AbstractSlider.prototype.removeDocumentEvents = function () {
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onEventEnd);
        document.removeEventListener('touchmove', this.onTouchMove);
        document.removeEventListener('touchend', this.onEventEnd);
    };
    AbstractSlider.defaultProps = {
        min: 0,
        max: 100,
        step: 1,
        marks: {},
        dots: false,
        included: true,
        vertical: false,
        disabled: false,
        className: 'range-slider',
        classesPrefix: '',
        onBeforeChange: noop,
        onChange: noop,
        onAfterChange: noop,
        tipFormatter: String
    };
    return AbstractSlider;
}(preact_min["Component"]);

//# sourceMappingURL=AbstractSlider.js.map
// CONCATENATED MODULE: ./node_modules/preact-range-slider/es5-esm/components/Handle.js



var Handle_Handle = function (_super) {
    __extends(Handle, _super);
    function Handle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.saveElement = function (element) {
            _this.elementRef = element;
        };
        return _this;
    }
    Handle.prototype.render = function (_a) {
        var min = _a.min,
            max = _a.max,
            value = _a.value,
            vertical = _a.vertical,
            disabled = _a.disabled,
            dragging = _a.dragging,
            index = _a.index,
            offset = _a.offset,
            classesPrefix = _a.classesPrefix,
            children = _a.children;
        var style = vertical ? {
            bottom: offset + '%'
        } : {
            left: offset + '%'
        };
        if (dragging && this.elementRef) {
            this.elementRef.focus();
        }
        var classes = classJoin((_b = {}, _b[classesPrefix + 'dragging'] = dragging, _b), [classesPrefix + 'handle', classesPrefix + "handle-" + index]);
        return Object(preact_min["h"])("div", { class: classes, style: style, role: "slider", tabIndex: disabled ? undefined : 0, "aria-orientation": vertical ? 'vertical' : 'horizontal', "aria-disabled": String(disabled), "aria-valuemin": min, "aria-valuemax": max, "aria-valuenow": value, ref: this.saveElement }, Object(preact_min["h"])("span", { class: classesPrefix + 'tip' }, children));
        var _b;
    };
    return Handle;
}(preact_min["Component"]);

//# sourceMappingURL=Handle.js.map
// CONCATENATED MODULE: ./node_modules/preact-range-slider/es5-esm/components/Track.js


var Track_Track = function (_super) {
    __extends(Track, _super);
    function Track() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Track.prototype.render = function (_a) {
        var vertical = _a.vertical,
            included = _a.included,
            index = _a.index,
            offset = _a.offset,
            length = _a.length,
            classesPrefix = _a.classesPrefix;
        var style = {};
        if (!included) {
            style.visibility = 'hidden';
        }
        if (vertical) {
            style.bottom = offset + '%';
            style.height = length + '%';
        } else {
            style.left = offset + '%';
            style.width = length + '%';
        }
        return Object(preact_min["h"])("div", { class: classesPrefix + "track " + classesPrefix + "track-" + index, style: style });
    };
    return Track;
}(preact_min["Component"]);

//# sourceMappingURL=Track.js.map
// CONCATENATED MODULE: ./node_modules/preact-range-slider/es5-esm/components/Slider.js






var Slider_Slider = function (_super) {
    __extends(Slider, _super);
    function Slider(props) {
        var _this = _super.call(this, props) || this;
        var value = props.value != null ? props.value : props.defaultValue != null ? props.defaultValue : props.min;
        _this.state = {
            dragging: false,
            value: _this.clampAlignValue(value)
        };
        return _this;
    }
    Slider.prototype.componentWillReceiveProps = function (nextProps) {
        if (!('value' in nextProps || 'min' in nextProps || 'max' in nextProps)) {
            return;
        }
        var prevValue = this.state.value;
        var value = nextProps.value == null ? prevValue : nextProps.value;
        var nextValue = this.clampAlignValue(value, nextProps);
        if (nextValue === prevValue) {
            return;
        }
        this.setState({ value: nextValue });
        if (isValueOutOfRange(value, nextProps)) {
            this.props.onChange(nextValue);
        }
    };
    Slider.prototype.render = function (_a, _b) {
        var min = _a.min,
            max = _a.max,
            vertical = _a.vertical,
            included = _a.included,
            disabled = _a.disabled,
            classesPrefix = _a.classesPrefix,
            tipFormatter = _a.tipFormatter;
        var value = _b.value,
            dragging = _b.dragging;
        var offset = this.calcOffset(value);
        var handle = Object(preact_min["h"])(Handle_Handle, { vertical: vertical, disabled: disabled, dragging: dragging, min: min, max: max, value: value, index: 1, offset: offset, classesPrefix: classesPrefix, ref: this.saveHandle, key: 'handle-0' }, tipFormatter(value));
        var track = Object(preact_min["h"])(Track_Track, { vertical: vertical, included: included, index: 1, offset: 0, length: offset, classesPrefix: classesPrefix, key: 'track-0' });
        return this.renderBase(track, handle);
    };
    Slider.prototype.getValue = function () {
        return this.state.value;
    };
    Slider.prototype.getLowerBound = function () {
        return this.props.min;
    };
    Slider.prototype.getUpperBound = function () {
        return this.state.value;
    };
    Slider.prototype.onChange = function (state) {
        var props = this.props;
        var isNotControlled = !('value' in props);
        if (isNotControlled) {
            this.setState(state);
        }
        props.onChange(state.value);
    };
    Slider.prototype.onStart = function (position) {
        this.setState({ dragging: true });
        var prevValue = this.getValue();
        this.props.onBeforeChange(prevValue);
        var value = this.calcValueByPos(position);
        if (value === prevValue) {
            return;
        }
        this.onChange({ value: value });
    };
    Slider.prototype.onMove = function (position) {
        var value = this.calcValueByPos(position);
        var oldValue = this.state.value;
        if (value === oldValue) {
            return;
        }
        this.onChange({ value: value });
    };
    Slider.prototype.onEnd = function () {
        this.setState({ dragging: false });
    };
    Slider.prototype.clampAlignValue = function (value, nextProps) {
        if (nextProps === void 0) {
            nextProps = {};
        }
        var mergedProps = __assign({}, this.props, nextProps);
        return alignValue(clampValue(value, mergedProps), mergedProps);
    };
    return Slider;
}(AbstractSlider_AbstractSlider);

//# sourceMappingURL=Slider.js.map
// CONCATENATED MODULE: ./node_modules/preact-range-slider/es5-esm/components/MultiSlider.js






var MultiSlider_MultiSlider = function (_super) {
    __extends(MultiSlider, _super);
    function MultiSlider(props) {
        var _this = _super.call(this, props) || this;
        var count = props.count,
            min = props.min,
            max = props.max;
        var initialValue = Array(count + 1).slice().map(function () {
            return min;
        });
        var values = props.value != null ? props.value : props.defaultValue != null ? props.defaultValue : initialValue;
        var bounds = values.map(function (value) {
            return _this.clampAlignValue(value);
        });
        var recent = bounds[0] === max ? 0 : bounds.length - 1;
        _this.state = {
            handle: null,
            recent: recent,
            bounds: bounds
        };
        return _this;
    }
    MultiSlider.prototype.componentWillReceiveProps = function (nextProps) {
        var _this = this;
        if (!('value' in nextProps || 'min' in nextProps || 'max' in nextProps)) {
            return;
        }
        var bounds = this.state.bounds;
        var value = nextProps.value || bounds;
        var nextBounds = value.map(function (singleValue) {
            return _this.clampAlignValue(singleValue, nextProps);
        });
        if (nextBounds.length === bounds.length && nextBounds.every(function (singleValue, index) {
            return singleValue === bounds[index];
        })) {
            return;
        }
        this.setState({ bounds: nextBounds });
        if (bounds.some(function (singleValue) {
            return isValueOutOfRange(singleValue, nextProps);
        })) {
            this.props.onChange(nextBounds);
        }
    };
    MultiSlider.prototype.render = function (_a, _b) {
        var _this = this;
        var min = _a.min,
            max = _a.max,
            vertical = _a.vertical,
            included = _a.included,
            disabled = _a.disabled,
            classesPrefix = _a.classesPrefix,
            tipFormatter = _a.tipFormatter;
        var handle = _b.handle,
            bounds = _b.bounds;
        var offsets = bounds.map(function (value) {
            return _this.calcOffset(value);
        });
        var handles = bounds.map(function (value, index) {
            return Object(preact_min["h"])(Handle_Handle, { vertical: vertical, disabled: disabled, dragging: handle === index, min: min, max: max, value: value, index: index + 1, offset: offsets[index], classesPrefix: classesPrefix, ref: function ref(component) {
                    return _this.saveHandle(component, index);
                }, key: "handle-" + index }, tipFormatter(value));
        });
        var tracks = bounds.slice(0, -1).map(function (_value, index) {
            var nextIndex = index + 1;
            return Object(preact_min["h"])(Track_Track, { vertical: vertical, included: included, index: nextIndex, offset: offsets[index], length: offsets[nextIndex] - offsets[index], classesPrefix: classesPrefix, key: "track-" + index });
        });
        return this.renderBase(tracks, handles);
    };
    MultiSlider.prototype.getValue = function () {
        return this.state.bounds;
    };
    MultiSlider.prototype.getLowerBound = function () {
        return this.state.bounds[0];
    };
    MultiSlider.prototype.getUpperBound = function () {
        var bounds = this.state.bounds;
        return bounds[bounds.length - 1];
    };
    MultiSlider.prototype.onChange = function (state) {
        var props = this.props;
        var isNotControlled = !('value' in props);
        if (isNotControlled) {
            this.setState(state);
        } else if (typeof state.handle !== 'undefined') {
            this.setState({ handle: state.handle });
        }
        var data = __assign({}, this.state, state);
        props.onChange(data.bounds);
    };
    MultiSlider.prototype.onStart = function (position) {
        var props = this.props;
        var state = this.state;
        var bounds = this.getValue();
        props.onBeforeChange(bounds);
        var value = this.calcValueByPos(position);
        var closestBound = this.getClosestBound(value);
        var boundNeedMoving = this.getBoundNeedMoving(value, closestBound);
        this.setState({
            handle: boundNeedMoving,
            recent: boundNeedMoving
        });
        var prevValue = bounds[boundNeedMoving];
        if (value === prevValue) {
            return;
        }
        var nextBounds = state.bounds.slice();
        nextBounds[boundNeedMoving] = value;
        this.onChange({ bounds: nextBounds });
    };
    MultiSlider.prototype.onMove = function (position) {
        var props = this.props;
        var state = this.state;
        if (state.handle == null) {
            return;
        }
        var value = this.calcValueByPos(position);
        var oldValue = state.bounds[state.handle];
        if (value === oldValue) {
            return;
        }
        var nextBounds = state.bounds.slice();
        nextBounds[state.handle] = value;
        var nextHandle = state.handle;
        if (props.pushable !== false) {
            var originalValue = state.bounds[nextHandle];
            this.pushSurroundingHandles(nextBounds, nextHandle, originalValue);
        } else if (props.allowCross) {
            nextBounds.sort(function (a, b) {
                return a - b;
            });
            nextHandle = nextBounds.indexOf(value);
        }
        this.onChange({
            handle: nextHandle,
            bounds: nextBounds
        });
    };
    MultiSlider.prototype.onEnd = function () {
        this.setState({ handle: null });
    };
    MultiSlider.prototype.clampAlignValue = function (value, nextProps) {
        if (nextProps === void 0) {
            nextProps = {};
        }
        var mergedProps = __assign({}, this.props, nextProps);
        return alignValue(this.clampValueToSurroundingHandles(clampValue(value, mergedProps), mergedProps), mergedProps);
    };
    MultiSlider.prototype.getClosestBound = function (value) {
        var bounds = this.state.bounds;
        var closestBound = 0;
        for (var i = 1, n = bounds.length - 1; i < n; i++) {
            if (value > bounds[i]) {
                closestBound = i;
            }
        }
        if (Math.abs(bounds[closestBound + 1] - value) < Math.abs(bounds[closestBound] - value)) {
            closestBound += 1;
        }
        return closestBound;
    };
    MultiSlider.prototype.getBoundNeedMoving = function (value, closestBound) {
        var _a = this.state,
            bounds = _a.bounds,
            recent = _a.recent;
        var boundNeedMoving = closestBound;
        var nextBound = closestBound + 1;
        var atTheSamePoint = bounds[nextBound] === bounds[closestBound];
        if (atTheSamePoint) {
            if (bounds[recent] === bounds[closestBound]) {
                boundNeedMoving = recent;
            } else {
                boundNeedMoving = nextBound;
            }
            if (value !== bounds[nextBound]) {
                boundNeedMoving = value < bounds[nextBound] ? closestBound : nextBound;
            }
        }
        return boundNeedMoving;
    };
    MultiSlider.prototype.pushSurroundingHandles = function (bounds, handle, originalValue) {
        var threshold = Number(this.props.pushable);
        var value = bounds[handle];
        var direction = 0;
        if (bounds[handle + 1] - value < threshold) {
            direction = +1;
        }
        if (value - bounds[handle - 1] < threshold) {
            direction = -1;
        }
        if (direction === 0) {
            return;
        }
        var nextHandle = handle + direction;
        var diffToNext = direction * (bounds[nextHandle] - value);
        if (!this.pushHandle(bounds, nextHandle, direction, threshold - diffToNext)) {
            bounds[handle] = originalValue;
        }
    };
    MultiSlider.prototype.pushHandle = function (bounds, handle, direction, amount) {
        var originalValue = bounds[handle];
        var currentValue = bounds[handle];
        while (direction * (currentValue - originalValue) < amount) {
            if (!this.pushHandleOnePoint(bounds, handle, direction)) {
                bounds[handle] = originalValue;
                return false;
            }
            currentValue = bounds[handle];
        }
        return true;
    };
    MultiSlider.prototype.pushHandleOnePoint = function (bounds, handle, direction) {
        var points = this.getPoints();
        var pointIndex = points.indexOf(bounds[handle]);
        var nextPointIndex = pointIndex + direction;
        if (nextPointIndex >= points.length || nextPointIndex < 0) {
            return false;
        }
        var nextHandle = handle + direction;
        var nextValue = points[nextPointIndex];
        var threshold = Number(this.props.pushable);
        var diffToNext = direction * (bounds[nextHandle] - nextValue);
        if (!this.pushHandle(bounds, nextHandle, direction, threshold - diffToNext)) {
            return false;
        }
        bounds[handle] = nextValue;
        return true;
    };
    MultiSlider.prototype.getPoints = function () {
        var _a = this.props,
            marks = _a.marks,
            step = _a.step,
            min = _a.min,
            max = _a.max;
        var cache = this.pointsCache;
        if (!cache || cache.marks !== marks || cache.step !== step) {
            var pointsObject = __assign({}, marks);
            if (step != null && step > 0) {
                for (var point = min; point <= max; point += step) {
                    pointsObject[point] = String(point);
                }
            }
            var points = Object.keys(pointsObject).map(Number);
            points.sort(function (a, b) {
                return a - b;
            });
            this.pointsCache = { marks: marks, step: step, points: points };
        }
        return this.pointsCache.points;
    };
    MultiSlider.prototype.clampValueToSurroundingHandles = function (value, _a) {
        var allowCross = _a.allowCross;
        var _b = this.state,
            handle = _b.handle,
            bounds = _b.bounds;
        if (!allowCross && handle != null) {
            if (handle > 0 && value <= bounds[handle - 1]) {
                return bounds[handle - 1];
            }
            if (handle < bounds.length - 1 && value >= bounds[handle + 1]) {
                return bounds[handle + 1];
            }
        }
        return value;
    };
    MultiSlider.defaultProps = __assign({}, AbstractSlider_AbstractSlider.defaultProps, { count: 1, allowCross: true, pushable: false });
    return MultiSlider;
}(AbstractSlider_AbstractSlider);

//# sourceMappingURL=MultiSlider.js.map
// CONCATENATED MODULE: ./node_modules/preact-range-slider/es5-esm/index.js


//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/preact-range-slider/assets/index.css
var assets = __webpack_require__("kgqg");
var assets_default = /*#__PURE__*/__webpack_require__.n(assets);

// CONCATENATED MODULE: ./components/Calculator.js




var Calculator_marks = {
	0: 'Não tenho',
	1: 'Normal',
	2: 'Épico',
	3: 'Lendário'
};

var getPowerLevel = function getPowerLevel(values, skills) {
	return values.reduce(function (previousValue, value) {
		var skill = skills.find(function (s) {
			return s.id === value.skillId;
		});
		var points = skill.levels.reduce(function (prev, level, idx) {
			return value.value > idx ? prev + level.value : prev;
		}, 0);
		return previousValue + points * skill.weight;
	}, 0);
};

var getSalary = function getSalary(powerLevel) {
	return 450 + 1050 * powerLevel / 10000;
};

var _ref2 = Object(preact_min["h"])(
	'b',
	null,
	'Normal:'
);

var _ref3 = Object(preact_min["h"])(
	'b',
	null,
	'\xC9pico:'
);

var _ref4 = Object(preact_min["h"])(
	'b',
	null,
	'Lend\xE1rio:'
);

/* harmony default export */ var Calculator = (function (_ref) {
	var values = _ref.values,
	    skills = _ref.skills,
	    onRequestChangeValue = _ref.onRequestChangeValue;
	return Object(preact_min["h"])(
		'div',
		null,
		skills.map(function (skill, idx) {
			return Object(preact_min["h"])(
				'div',
				{ key: idx },
				Object(preact_min["h"])(
					'h3',
					null,
					skill.name
				),
				Object(preact_min["h"])(
					'ul',
					null,
					Object(preact_min["h"])(
						'li',
						null,
						_ref2,
						' ',
						Object(preact_min["h"])(
							'em',
							null,
							skill.levels[0].label
						)
					),
					Object(preact_min["h"])(
						'li',
						null,
						_ref3,
						' ',
						Object(preact_min["h"])(
							'em',
							null,
							skill.levels[1].label
						),
						' +',
						' ',
						skill.levels[0].label
					),
					Object(preact_min["h"])(
						'li',
						null,
						_ref4,
						' ',
						Object(preact_min["h"])(
							'em',
							null,
							skill.levels[2].label
						),
						' +',
						' ',
						skill.levels[1].label,
						' + ',
						skill.levels[0].label
					)
				),
				Object(preact_min["h"])(
					'div',
					{ 'class': 'px3' },
					Object(preact_min["h"])(Slider_Slider, {
						value: values.find(function (v) {
							return v.skillId === skill.id;
						}).value,
						min: 0,
						max: 3,
						dots: true,
						marks: Calculator_marks,
						onChange: function onChange(v) {
							return onRequestChangeValue({ skillId: skill.id, value: v });
						}
					})
				)
			);
		}),
		Object(preact_min["h"])(
			'h3',
			{ 'class': 'center' },
			'Proposta estimada: R$ ',
			getSalary(getPowerLevel(values, skills))
		)
	);
});
// CONCATENATED MODULE: ./index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index_App; });


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var index__ref = Object(preact_min["h"])(
	'header',
	null,
	Object(preact_min["h"])(
		'div',
		{ 'class': 'header-content' },
		Object(preact_min["h"])('img', { src: 'assets/logo.png' })
	)
);

var index__ref2 = Object(preact_min["h"])(
	'h1',
	null,
	'Est\xE1gio para Indie Dev em Teresina'
);

var index__ref3 = Object(preact_min["h"])(
	'div',
	{ 'class': 'box overflow-auto' },
	Object(preact_min["h"])(
		'p',
		null,
		'As inscri\xE7\xF5es para essa vaga j\xE1 est\xE3o encerradas. Para receber futuras oportunidades,',
		' ',
		Object(preact_min["h"])(
			'a',
			{
				href: 'http://eepurl.com/dtaxTr',
				target: '_blank',
				style: 'color: #fff; font-weight: bold;'
			},
			'junte-se \xE0 nossa lista de e-mail'
		),
		'.'
	)
);

var index__ref4 = Object(preact_min["h"])(
	'ul',
	null,
	Object(preact_min["h"])(
		'li',
		null,
		Object(preact_min["h"])(
			'a',
			{ href: '#sobre-a-empresa' },
			'Sobre a empresa'
		)
	),
	Object(preact_min["h"])(
		'li',
		null,
		Object(preact_min["h"])(
			'a',
			{ href: '#timeline' },
			'Timeline da sele\xE7\xE3o'
		)
	),
	Object(preact_min["h"])(
		'li',
		null,
		Object(preact_min["h"])(
			'a',
			{ href: '#tarefas' },
			'Tarefas'
		)
	),
	Object(preact_min["h"])(
		'li',
		null,
		Object(preact_min["h"])(
			'a',
			{ href: '#local' },
			'Local'
		)
	),
	Object(preact_min["h"])(
		'li',
		null,
		Object(preact_min["h"])(
			'a',
			{ href: '#horario' },
			'Hor\xE1rio'
		)
	),
	Object(preact_min["h"])(
		'li',
		null,
		Object(preact_min["h"])(
			'a',
			{ href: '#equipamento' },
			'Equipamento'
		)
	),
	Object(preact_min["h"])(
		'li',
		null,
		Object(preact_min["h"])(
			'a',
			{ href: '#medidor-de-poder' },
			'Medidor de Poder'
		)
	),
	Object(preact_min["h"])(
		'li',
		null,
		Object(preact_min["h"])(
			'a',
			{ href: '#habilidades-passivas' },
			'Habilidades Passivas'
		)
	),
	Object(preact_min["h"])(
		'li',
		null,
		Object(preact_min["h"])(
			'a',
			{ href: '#beneficios' },
			'Benef\xEDcios'
		)
	),
	Object(preact_min["h"])(
		'li',
		null,
		Object(preact_min["h"])(
			'a',
			{ href: '#como-se-candidatar' },
			'Como se Candidatar'
		)
	)
);

var _ref5 = Object(preact_min["h"])(
	'h2',
	{ id: 'sobre-a-empresa' },
	'Sobre a empresa'
);

var _ref6 = Object(preact_min["h"])(
	'p',
	null,
	'N\xF3s somos a Bloom Games, uma empresa de games para PC e smartphones fundada em 2017. N\xF3s somos a desenvolvedora por tr\xE1s do',
	' ',
	Object(preact_min["h"])(
		'a',
		{ href: '//splashwars.io', target: 'blank' },
		'Splash Wars'
	),
	' ',
	'e do',
	' ',
	Object(preact_min["h"])(
		'a',
		{
			href: 'https://play.google.com/store/apps/details?id=com.billiardswizards',
			target: 'blank'
		},
		'Billiards Wizards'
	),
	'. Nossos principais valores s\xE3o a positividade, a honestidade, o respeito e o bom humor.'
);

var _ref7 = Object(preact_min["h"])('img', { src: 'assets/team.jpg', style: 'max-width: 100%;' });

var _ref8 = Object(preact_min["h"])(
	'div',
	{ style: 'margin-top: 1rem; padding-top: 1rem;' },
	Object(preact_min["h"])(
		'div',
		{ 'class': 'flex' },
		Object(preact_min["h"])('img', { 'class': 'avatar', src: 'assets/luis.png' }),
		Object(preact_min["h"])(
			'div',
			{ 'class': 'ml2' },
			Object(preact_min["h"])(
				'h2',
				{ 'class': 'mt0 pt0' },
				'Luis Felipe (Louizard)'
			),
			Object(preact_min["h"])(
				'p',
				{ 'class': 'mt0 mb0' },
				'Artista e Programador'
			),
			Object(preact_min["h"])(
				'p',
				{ 'class': 'mt0 mb0' },
				'Jogos Favoritos: Shovel Knight e Castlevania'
			),
			Object(preact_min["h"])(
				'p',
				null,
				Object(preact_min["h"])(
					'a',
					{ href: 'https://twitter.com/lousousaa', target: 'blank' },
					'Twitter'
				)
			)
		)
	),
	Object(preact_min["h"])(
		'div',
		{ 'class': 'flex', style: 'margin-top: 2rem;' },
		Object(preact_min["h"])('img', { 'class': 'avatar', src: 'assets/flic.jpg' }),
		Object(preact_min["h"])(
			'div',
			{ 'class': 'ml2' },
			Object(preact_min["h"])(
				'h2',
				{ 'class': 'mt0 pt0' },
				'Feliciano Santana (Ozymandias)'
			),
			Object(preact_min["h"])(
				'p',
				{ 'class': 'mt0 mb0' },
				'Game Designer e Programador'
			),
			Object(preact_min["h"])(
				'p',
				{ 'class': 'mt0 mb0' },
				'Jogos Favoritos: Sonic 3 e Dark Souls (Praise the Sun!)'
			),
			Object(preact_min["h"])(
				'p',
				null,
				Object(preact_min["h"])(
					'a',
					{ href: 'https://twitter.com/thenameisflic', target: 'blank' },
					'Twitter'
				)
			)
		)
	),
	Object(preact_min["h"])(
		'div',
		{ 'class': 'flex', style: 'margin-top: 2rem;' },
		Object(preact_min["h"])('img', { 'class': 'avatar', src: 'assets/artur.png' }),
		Object(preact_min["h"])(
			'div',
			{ 'class': 'ml2' },
			Object(preact_min["h"])(
				'h2',
				{ 'class': 'mt0 pt0' },
				'Artur Lima de Miranda (Arturing)'
			),
			Object(preact_min["h"])(
				'p',
				{ 'class': 'mt0 mb0' },
				'M\xFAsico e Programador'
			),
			Object(preact_min["h"])(
				'p',
				{ 'class': 'mt0 mb0' },
				'Jogos Favoritos: Super Mario World e Donkey Kong'
			),
			Object(preact_min["h"])(
				'p',
				null,
				Object(preact_min["h"])(
					'a',
					{ href: 'https://twitter.com/ldm_artur', target: 'blank' },
					'Twitter'
				)
			)
		)
	)
);

var _ref9 = Object(preact_min["h"])(
	'h2',
	{ id: 'timeline' },
	'Timeline da sele\xE7\xE3o'
);

var _ref10 = Object(preact_min["h"])(
	'ul',
	null,
	Object(preact_min["h"])(
		'li',
		null,
		Object(preact_min["h"])(
			'b',
			null,
			'At\xE9 29 de Abril de 2018'
		),
		': Envio de curr\xEDculos'
	),
	Object(preact_min["h"])(
		'li',
		null,
		Object(preact_min["h"])(
			'b',
			null,
			'30 de Abril at\xE9 02 de Maio de 2018'
		),
		': An\xE1lise dos curr\xEDculos'
	),
	Object(preact_min["h"])(
		'li',
		null,
		Object(preact_min["h"])(
			'b',
			null,
			'03 de Maio at\xE9 06 de Maio de 2018'
		),
		': Teste t\xE9cnico'
	),
	Object(preact_min["h"])(
		'li',
		null,
		Object(preact_min["h"])(
			'b',
			null,
			'07 de Maio de 2018'
		),
		': Entrevistas'
	)
);

var _ref11 = Object(preact_min["h"])(
	'h2',
	{ id: 'tarefas' },
	'Tarefas'
);

var _ref12 = Object(preact_min["h"])(
	'ul',
	null,
	Object(preact_min["h"])(
		'li',
		null,
		'Colaborar no',
		' ',
		Object(preact_min["h"])(
			'a',
			{ href: '//splashwars.io', target: '_blank' },
			'Splash Wars'
		),
		' ',
		'com HTML, CSS, Typescript e SVG'
	),
	Object(preact_min["h"])(
		'li',
		null,
		'Coletar e analisar dados estat\xEDsticos de jogabilidade (e desenvolver ferramentas para simplificar esse processo)'
	),
	Object(preact_min["h"])(
		'li',
		null,
		'Prover suporte a jogadores atrav\xE9s do chat in-game, Twitter e Facebook'
	)
);

var _ref13 = Object(preact_min["h"])(
	'h2',
	{ id: 'local' },
	'Local'
);

var _ref14 = Object(preact_min["h"])(
	'p',
	null,
	'Somente presencial, na 3P Coworking',
	' ',
	Object(preact_min["h"])(
		'a',
		{
			href: 'https://www.google.com/maps/place/Euro+Business+building/@-5.0773229,-42.7988982,17z/data=!4m8!1m2!2m1!1sEurobusiness+Teresina!3m4!1s0x78e39ede819aa95:0x2c926c2b627d303f!8m2!3d-5.0773229!4d-42.7967095',
			target: '_blank'
		},
		'(Eurobusiness, Av. J\xF3quei Clube 299, Cobertura, Sala 04)'
	)
);

var _ref15 = Object(preact_min["h"])(
	'h2',
	{ id: 'horario' },
	'Hor\xE1rio'
);

var _ref16 = Object(preact_min["h"])(
	'p',
	null,
	'A sua jornada de trabalho ter\xE1 a dura\xE7\xE3o de 30h por semana, preferencialmente no turno da tarde. Dependendo da sua disponibilidade, podemos negociar outros hor\xE1rios.'
);

var _ref17 = Object(preact_min["h"])(
	'h2',
	{ id: 'equipamento' },
	'Equipamento'
);

var _ref18 = Object(preact_min["h"])(
	'p',
	null,
	'Voc\xEA vai precisar trazer o seu pr\xF3prio laptop e possuir uma conta no GitHub.'
);

var _ref19 = Object(preact_min["h"])(
	'h2',
	{ id: 'bolsa' },
	'Bolsa'
);

var _ref20 = Object(preact_min["h"])(
	'p',
	null,
	'Voc\xEA receber\xE1 uma bolsa entre R$ 450 e R$ 1500 de acordo com suas habilidades. Use o medidor de poder abaixo para ter uma ideia do valor que voc\xEA poder\xE1 receber.'
);

var _ref21 = Object(preact_min["h"])(
	'p',
	null,
	'Depois de admitido, sua bolsa aumenta \xE0 medida que voc\xEA evolui suas habilidades!'
);

var _ref22 = Object(preact_min["h"])(
	'h2',
	{ id: 'medidor-de-poder' },
	'Medidor de Poder'
);

var _ref23 = Object(preact_min["h"])(
	'p',
	null,
	'Use o medidor de poder para ter uma ideia de qu\xE3o preparado voc\xEA est\xE1 para a vaga, e uma ideia do valor da proposta da sua bolsa.'
);

var _ref24 = Object(preact_min["h"])(
	'p',
	null,
	'Note que o resultado \xE9 apenas uma estimativa e o valor da proposta pode ser um pouco maior ou menor que o indicado.'
);

var _ref25 = Object(preact_min["h"])(
	'h2',
	{ id: 'habilidades' },
	'Habilidades passivas'
);

var _ref26 = Object(preact_min["h"])(
	'ul',
	null,
	Object(preact_min["h"])(
		'li',
		null,
		'Comunica\xE7\xE3o: Ouvir e transmitir ideias com clareza.'
	),
	Object(preact_min["h"])(
		'li',
		null,
		'Criatividade: Positividade, capacidade de mudar de perspectiva e encontrar similaridades e diferen\xE7as entre v\xE1rias ideias.'
	)
);

var _ref27 = Object(preact_min["h"])(
	'h2',
	{ id: 'beneficios' },
	'Benef\xEDcios'
);

var _ref28 = Object(preact_min["h"])(
	'ul',
	null,
	Object(preact_min["h"])(
		'li',
		null,
		'Aprendizagem: N\xF3s vamos ensinar a voc\xEA tudo que voc\xEA precisa saber para criar jogos.'
	),
	Object(preact_min["h"])(
		'li',
		null,
		'Bolsa que aumenta com seu n\xEDvel: \xC0 medida que voc\xEA aprende e melhora suas habilidades, sua bolsa aumentar\xE1.'
	),
	Object(preact_min["h"])(
		'li',
		null,
		'Aulas de Ingl\xEAs: Voc\xEA ter\xE1 acesso a aulas presenciais no turno da tarde para aperfei\xE7oar seu ingl\xEAs.'
	),
	Object(preact_min["h"])(
		'li',
		null,
		'Biblioteca: Temos v\xE1rios livros de programa\xE7\xE3o e empreendedorismo para voc\xEA ler, levar pra casa e se inspirar.'
	),
	Object(preact_min["h"])(
		'li',
		null,
		'Caf\xE9: Todo por nossa conta!'
	)
);

var _ref29 = Object(preact_min["h"])(
	'div',
	{ id: 'como-se-candidatar', 'class': 'box overflow-auto' },
	Object(preact_min["h"])(
		'p',
		null,
		'As inscri\xE7\xF5es para essa vaga j\xE1 est\xE3o encerradas. Para receber futuras oportunidades,',
		' ',
		Object(preact_min["h"])(
			'a',
			{
				href: 'http://eepurl.com/dtaxTr',
				target: '_blank',
				style: 'color: #fff; font-weight: bold;'
			},
			'junte-se \xE0 nossa lista de e-mail'
		),
		'.'
	)
);

var index_App = function (_Component) {
	_inherits(App, _Component);

	function App() {
		var _temp, _this, _ret;

		_classCallCheck(this, App);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
			skillValues: skills_default.a.map(function (skill) {
				return { skillId: skill.id, value: 1 };
			})
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	App.prototype.onRequestChangeValue = function onRequestChangeValue(value) {
		this.setState({
			skillValues: this.state.skillValues.map(function (v) {
				return {
					skillId: v.skillId,
					value: value.skillId === v.skillId ? value.value : v.value
				};
			})
		});
	};

	App.prototype.render = function render() {
		return Object(preact_min["h"])(
			'div',
			null,
			index__ref,
			Object(preact_min["h"])(
				'main',
				{ 'class': 'app-body' },
				index__ref2,
				index__ref3,
				index__ref4,
				_ref5,
				_ref6,
				_ref7,
				_ref8,
				_ref9,
				_ref10,
				_ref11,
				_ref12,
				_ref13,
				_ref14,
				_ref15,
				_ref16,
				_ref17,
				_ref18,
				_ref19,
				_ref20,
				_ref21,
				_ref22,
				_ref23,
				_ref24,
				Object(preact_min["h"])(Calculator, {
					skills: skills_default.a,
					values: this.state.skillValues,
					onRequestChangeValue: this.onRequestChangeValue.bind(this)
				}),
				_ref25,
				_ref26,
				_ref27,
				_ref28,
				_ref29
			)
		);
	};

	return App;
}(preact_min["Component"]);



/***/ }),

/***/ "kgqg":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "zg/F":
/***/ (function(module, exports) {

module.exports = [{"id":"ENGLISH","name":"Inglês","weight":10,"levels":[{"label":"Reading","value":30},{"label":"Writing","value":40},{"label":"Listening + Speaking","value":30}]},{"id":"PROGRAMMING","name":"Programação","weight":20,"levels":[{"label":"Orientação a objetos","value":10},{"label":"Javascript","value":60},{"label":"Typescript","value":30}]},{"id":"WEBDESIGN","name":"Web Design","weight":10,"levels":[{"label":"HTML","value":10},{"label":"CSS","value":60},{"label":"SASS","value":30}]},{"id":"DATABASES","name":"Bancos de Dados","weight":10,"levels":[{"label":"SQL","value":10},{"label":"NoSQL","value":30},{"label":"MongoDB","value":60}]},{"id":"NETWORKING","name":"Redes","weight":20,"levels":[{"label":"HTTP","value":10},{"label":"WebSockets","value":60},{"label":"P2P","value":30}]},{"id":"STATISTICS","name":"Estatística","weight":20,"levels":[{"label":"Porcentagens e Probabilidade","value":10},{"label":"Análise de Coortes","value":60},{"label":"Correlação Estatística","value":30}]},{"id":"DESIGN","name":"Design e Ilustração","weight":10,"levels":[{"label":"Cortar e Redimensionar","value":10},{"label":"Illustrator ou Inkscape","value":60},{"label":"Photoshop ou Gimp","value":30}]}]

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map