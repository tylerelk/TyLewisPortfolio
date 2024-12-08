(function () {
  const V = document.createElement("link").relList;
  if (V && V.supports && V.supports("modulepreload")) return;
  for (const G of document.querySelectorAll('link[rel="modulepreload"]')) b(G);
  new MutationObserver((G) => {
    for (const $ of G)
      if ($.type === "childList")
        for (const Ee of $.addedNodes)
          Ee.tagName === "LINK" && Ee.rel === "modulepreload" && b(Ee);
  }).observe(document, { childList: !0, subtree: !0 });
  function m(G) {
    const $ = {};
    return (
      G.integrity && ($.integrity = G.integrity),
      G.referrerPolicy && ($.referrerPolicy = G.referrerPolicy),
      G.crossOrigin === "use-credentials"
        ? ($.credentials = "include")
        : G.crossOrigin === "anonymous"
          ? ($.credentials = "omit")
          : ($.credentials = "same-origin"),
      $
    );
  }
  function b(G) {
    if (G.ep) return;
    G.ep = !0;
    const $ = m(G);
    fetch(G.href, $);
  }
})();
var Ia = { exports: {} },
  Mi = {},
  Fa = { exports: {} },
  ue = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var t1;
function Uc() {
  if (t1) return ue;
  t1 = 1;
  var U = Symbol.for("react.element"),
    V = Symbol.for("react.portal"),
    m = Symbol.for("react.fragment"),
    b = Symbol.for("react.strict_mode"),
    G = Symbol.for("react.profiler"),
    $ = Symbol.for("react.provider"),
    Ee = Symbol.for("react.context"),
    le = Symbol.for("react.forward_ref"),
    ie = Symbol.for("react.suspense"),
    oe = Symbol.for("react.memo"),
    de = Symbol.for("react.lazy"),
    ae = Symbol.iterator;
  function w(f) {
    return f === null || typeof f != "object"
      ? null
      : ((f = (ae && f[ae]) || f["@@iterator"]),
        typeof f == "function" ? f : null);
  }
  var M = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    S = Object.assign,
    x = {};
  function E(f, _, Z) {
    (this.props = f),
      (this.context = _),
      (this.refs = x),
      (this.updater = Z || M);
  }
  (E.prototype.isReactComponent = {}),
    (E.prototype.setState = function (f, _) {
      if (typeof f != "object" && typeof f != "function" && f != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, f, _, "setState");
    }),
    (E.prototype.forceUpdate = function (f) {
      this.updater.enqueueForceUpdate(this, f, "forceUpdate");
    });
  function Me() {}
  Me.prototype = E.prototype;
  function We(f, _, Z) {
    (this.props = f),
      (this.context = _),
      (this.refs = x),
      (this.updater = Z || M);
  }
  var q = (We.prototype = new Me());
  (q.constructor = We), S(q, E.prototype), (q.isPureReactComponent = !0);
  var H = Array.isArray,
    xe = Object.prototype.hasOwnProperty,
    _e = { current: null },
    Le = { key: !0, ref: !0, __self: !0, __source: !0 };
  function be(f, _, Z) {
    var te,
      j = {},
      re = null,
      fe = null;
    if (_ != null)
      for (te in (_.ref !== void 0 && (fe = _.ref),
      _.key !== void 0 && (re = "" + _.key),
      _))
        xe.call(_, te) && !Le.hasOwnProperty(te) && (j[te] = _[te]);
    var pe = arguments.length - 2;
    if (pe === 1) j.children = Z;
    else if (1 < pe) {
      for (var we = Array(pe), Ge = 0; Ge < pe; Ge++)
        we[Ge] = arguments[Ge + 2];
      j.children = we;
    }
    if (f && f.defaultProps)
      for (te in ((pe = f.defaultProps), pe))
        j[te] === void 0 && (j[te] = pe[te]);
    return {
      $$typeof: U,
      type: f,
      key: re,
      ref: fe,
      props: j,
      _owner: _e.current,
    };
  }
  function lt(f, _) {
    return {
      $$typeof: U,
      type: f.type,
      key: _,
      ref: f.ref,
      props: f.props,
      _owner: f._owner,
    };
  }
  function Se(f) {
    return typeof f == "object" && f !== null && f.$$typeof === U;
  }
  function at(f) {
    var _ = { "=": "=0", ":": "=2" };
    return (
      "$" +
      f.replace(/[=:]/g, function (Z) {
        return _[Z];
      })
    );
  }
  var st = /\/+/g;
  function Fe(f, _) {
    return typeof f == "object" && f !== null && f.key != null
      ? at("" + f.key)
      : _.toString(36);
  }
  function He(f, _, Z, te, j) {
    var re = typeof f;
    (re === "undefined" || re === "boolean") && (f = null);
    var fe = !1;
    if (f === null) fe = !0;
    else
      switch (re) {
        case "string":
        case "number":
          fe = !0;
          break;
        case "object":
          switch (f.$$typeof) {
            case U:
            case V:
              fe = !0;
          }
      }
    if (fe)
      return (
        (fe = f),
        (j = j(fe)),
        (f = te === "" ? "." + Fe(fe, 0) : te),
        H(j)
          ? ((Z = ""),
            f != null && (Z = f.replace(st, "$&/") + "/"),
            He(j, _, Z, "", function (Ge) {
              return Ge;
            }))
          : j != null &&
            (Se(j) &&
              (j = lt(
                j,
                Z +
                  (!j.key || (fe && fe.key === j.key)
                    ? ""
                    : ("" + j.key).replace(st, "$&/") + "/") +
                  f
              )),
            _.push(j)),
        1
      );
    if (((fe = 0), (te = te === "" ? "." : te + ":"), H(f)))
      for (var pe = 0; pe < f.length; pe++) {
        re = f[pe];
        var we = te + Fe(re, pe);
        fe += He(re, _, Z, we, j);
      }
    else if (((we = w(f)), typeof we == "function"))
      for (f = we.call(f), pe = 0; !(re = f.next()).done; )
        (re = re.value), (we = te + Fe(re, pe++)), (fe += He(re, _, Z, we, j));
    else if (re === "object")
      throw (
        ((_ = String(f)),
        Error(
          "Objects are not valid as a React child (found: " +
            (_ === "[object Object]"
              ? "object with keys {" + Object.keys(f).join(", ") + "}"
              : _) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return fe;
  }
  function dt(f, _, Z) {
    if (f == null) return f;
    var te = [],
      j = 0;
    return (
      He(f, te, "", "", function (re) {
        return _.call(Z, re, j++);
      }),
      te
    );
  }
  function Ae(f) {
    if (f._status === -1) {
      var _ = f._result;
      (_ = _()),
        _.then(
          function (Z) {
            (f._status === 0 || f._status === -1) &&
              ((f._status = 1), (f._result = Z));
          },
          function (Z) {
            (f._status === 0 || f._status === -1) &&
              ((f._status = 2), (f._result = Z));
          }
        ),
        f._status === -1 && ((f._status = 0), (f._result = _));
    }
    if (f._status === 1) return f._result.default;
    throw f._result;
  }
  var ye = { current: null },
    L = { transition: null },
    I = {
      ReactCurrentDispatcher: ye,
      ReactCurrentBatchConfig: L,
      ReactCurrentOwner: _e,
    };
  function N() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (ue.Children = {
      map: dt,
      forEach: function (f, _, Z) {
        dt(
          f,
          function () {
            _.apply(this, arguments);
          },
          Z
        );
      },
      count: function (f) {
        var _ = 0;
        return (
          dt(f, function () {
            _++;
          }),
          _
        );
      },
      toArray: function (f) {
        return (
          dt(f, function (_) {
            return _;
          }) || []
        );
      },
      only: function (f) {
        if (!Se(f))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return f;
      },
    }),
    (ue.Component = E),
    (ue.Fragment = m),
    (ue.Profiler = G),
    (ue.PureComponent = We),
    (ue.StrictMode = b),
    (ue.Suspense = ie),
    (ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I),
    (ue.act = N),
    (ue.cloneElement = function (f, _, Z) {
      if (f == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            f +
            "."
        );
      var te = S({}, f.props),
        j = f.key,
        re = f.ref,
        fe = f._owner;
      if (_ != null) {
        if (
          (_.ref !== void 0 && ((re = _.ref), (fe = _e.current)),
          _.key !== void 0 && (j = "" + _.key),
          f.type && f.type.defaultProps)
        )
          var pe = f.type.defaultProps;
        for (we in _)
          xe.call(_, we) &&
            !Le.hasOwnProperty(we) &&
            (te[we] = _[we] === void 0 && pe !== void 0 ? pe[we] : _[we]);
      }
      var we = arguments.length - 2;
      if (we === 1) te.children = Z;
      else if (1 < we) {
        pe = Array(we);
        for (var Ge = 0; Ge < we; Ge++) pe[Ge] = arguments[Ge + 2];
        te.children = pe;
      }
      return {
        $$typeof: U,
        type: f.type,
        key: j,
        ref: re,
        props: te,
        _owner: fe,
      };
    }),
    (ue.createContext = function (f) {
      return (
        (f = {
          $$typeof: Ee,
          _currentValue: f,
          _currentValue2: f,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (f.Provider = { $$typeof: $, _context: f }),
        (f.Consumer = f)
      );
    }),
    (ue.createElement = be),
    (ue.createFactory = function (f) {
      var _ = be.bind(null, f);
      return (_.type = f), _;
    }),
    (ue.createRef = function () {
      return { current: null };
    }),
    (ue.forwardRef = function (f) {
      return { $$typeof: le, render: f };
    }),
    (ue.isValidElement = Se),
    (ue.lazy = function (f) {
      return { $$typeof: de, _payload: { _status: -1, _result: f }, _init: Ae };
    }),
    (ue.memo = function (f, _) {
      return { $$typeof: oe, type: f, compare: _ === void 0 ? null : _ };
    }),
    (ue.startTransition = function (f) {
      var _ = L.transition;
      L.transition = {};
      try {
        f();
      } finally {
        L.transition = _;
      }
    }),
    (ue.unstable_act = N),
    (ue.useCallback = function (f, _) {
      return ye.current.useCallback(f, _);
    }),
    (ue.useContext = function (f) {
      return ye.current.useContext(f);
    }),
    (ue.useDebugValue = function () {}),
    (ue.useDeferredValue = function (f) {
      return ye.current.useDeferredValue(f);
    }),
    (ue.useEffect = function (f, _) {
      return ye.current.useEffect(f, _);
    }),
    (ue.useId = function () {
      return ye.current.useId();
    }),
    (ue.useImperativeHandle = function (f, _, Z) {
      return ye.current.useImperativeHandle(f, _, Z);
    }),
    (ue.useInsertionEffect = function (f, _) {
      return ye.current.useInsertionEffect(f, _);
    }),
    (ue.useLayoutEffect = function (f, _) {
      return ye.current.useLayoutEffect(f, _);
    }),
    (ue.useMemo = function (f, _) {
      return ye.current.useMemo(f, _);
    }),
    (ue.useReducer = function (f, _, Z) {
      return ye.current.useReducer(f, _, Z);
    }),
    (ue.useRef = function (f) {
      return ye.current.useRef(f);
    }),
    (ue.useState = function (f) {
      return ye.current.useState(f);
    }),
    (ue.useSyncExternalStore = function (f, _, Z) {
      return ye.current.useSyncExternalStore(f, _, Z);
    }),
    (ue.useTransition = function () {
      return ye.current.useTransition();
    }),
    (ue.version = "18.3.1"),
    ue
  );
}
var n1;
function Xo() {
  return n1 || ((n1 = 1), (Fa.exports = Uc())), Fa.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var r1;
function Dc() {
  if (r1) return Mi;
  r1 = 1;
  var U = Xo(),
    V = Symbol.for("react.element"),
    m = Symbol.for("react.fragment"),
    b = Object.prototype.hasOwnProperty,
    G = U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    $ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ee(le, ie, oe) {
    var de,
      ae = {},
      w = null,
      M = null;
    oe !== void 0 && (w = "" + oe),
      ie.key !== void 0 && (w = "" + ie.key),
      ie.ref !== void 0 && (M = ie.ref);
    for (de in ie) b.call(ie, de) && !$.hasOwnProperty(de) && (ae[de] = ie[de]);
    if (le && le.defaultProps)
      for (de in ((ie = le.defaultProps), ie))
        ae[de] === void 0 && (ae[de] = ie[de]);
    return {
      $$typeof: V,
      type: le,
      key: w,
      ref: M,
      props: ae,
      _owner: G.current,
    };
  }
  return (Mi.Fragment = m), (Mi.jsx = Ee), (Mi.jsxs = Ee), Mi;
}
var i1;
function Vc() {
  return i1 || ((i1 = 1), (Ia.exports = Dc())), Ia.exports;
}
var k = Vc(),
  qo = Xo(),
  Yo = {},
  Aa = { exports: {} },
  gt = {},
  Ra = { exports: {} },
  ba = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var o1;
function Bc() {
  return (
    o1 ||
      ((o1 = 1),
      (function (U) {
        function V(L, I) {
          var N = L.length;
          L.push(I);
          e: for (; 0 < N; ) {
            var f = (N - 1) >>> 1,
              _ = L[f];
            if (0 < G(_, I)) (L[f] = I), (L[N] = _), (N = f);
            else break e;
          }
        }
        function m(L) {
          return L.length === 0 ? null : L[0];
        }
        function b(L) {
          if (L.length === 0) return null;
          var I = L[0],
            N = L.pop();
          if (N !== I) {
            L[0] = N;
            e: for (var f = 0, _ = L.length, Z = _ >>> 1; f < Z; ) {
              var te = 2 * (f + 1) - 1,
                j = L[te],
                re = te + 1,
                fe = L[re];
              if (0 > G(j, N))
                re < _ && 0 > G(fe, j)
                  ? ((L[f] = fe), (L[re] = N), (f = re))
                  : ((L[f] = j), (L[te] = N), (f = te));
              else if (re < _ && 0 > G(fe, N))
                (L[f] = fe), (L[re] = N), (f = re);
              else break e;
            }
          }
          return I;
        }
        function G(L, I) {
          var N = L.sortIndex - I.sortIndex;
          return N !== 0 ? N : L.id - I.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var $ = performance;
          U.unstable_now = function () {
            return $.now();
          };
        } else {
          var Ee = Date,
            le = Ee.now();
          U.unstable_now = function () {
            return Ee.now() - le;
          };
        }
        var ie = [],
          oe = [],
          de = 1,
          ae = null,
          w = 3,
          M = !1,
          S = !1,
          x = !1,
          E = typeof setTimeout == "function" ? setTimeout : null,
          Me = typeof clearTimeout == "function" ? clearTimeout : null,
          We = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function q(L) {
          for (var I = m(oe); I !== null; ) {
            if (I.callback === null) b(oe);
            else if (I.startTime <= L)
              b(oe), (I.sortIndex = I.expirationTime), V(ie, I);
            else break;
            I = m(oe);
          }
        }
        function H(L) {
          if (((x = !1), q(L), !S))
            if (m(ie) !== null) (S = !0), Ae(xe);
            else {
              var I = m(oe);
              I !== null && ye(H, I.startTime - L);
            }
        }
        function xe(L, I) {
          (S = !1), x && ((x = !1), Me(be), (be = -1)), (M = !0);
          var N = w;
          try {
            for (
              q(I), ae = m(ie);
              ae !== null && (!(ae.expirationTime > I) || (L && !at()));

            ) {
              var f = ae.callback;
              if (typeof f == "function") {
                (ae.callback = null), (w = ae.priorityLevel);
                var _ = f(ae.expirationTime <= I);
                (I = U.unstable_now()),
                  typeof _ == "function"
                    ? (ae.callback = _)
                    : ae === m(ie) && b(ie),
                  q(I);
              } else b(ie);
              ae = m(ie);
            }
            if (ae !== null) var Z = !0;
            else {
              var te = m(oe);
              te !== null && ye(H, te.startTime - I), (Z = !1);
            }
            return Z;
          } finally {
            (ae = null), (w = N), (M = !1);
          }
        }
        var _e = !1,
          Le = null,
          be = -1,
          lt = 5,
          Se = -1;
        function at() {
          return !(U.unstable_now() - Se < lt);
        }
        function st() {
          if (Le !== null) {
            var L = U.unstable_now();
            Se = L;
            var I = !0;
            try {
              I = Le(!0, L);
            } finally {
              I ? Fe() : ((_e = !1), (Le = null));
            }
          } else _e = !1;
        }
        var Fe;
        if (typeof We == "function")
          Fe = function () {
            We(st);
          };
        else if (typeof MessageChannel < "u") {
          var He = new MessageChannel(),
            dt = He.port2;
          (He.port1.onmessage = st),
            (Fe = function () {
              dt.postMessage(null);
            });
        } else
          Fe = function () {
            E(st, 0);
          };
        function Ae(L) {
          (Le = L), _e || ((_e = !0), Fe());
        }
        function ye(L, I) {
          be = E(function () {
            L(U.unstable_now());
          }, I);
        }
        (U.unstable_IdlePriority = 5),
          (U.unstable_ImmediatePriority = 1),
          (U.unstable_LowPriority = 4),
          (U.unstable_NormalPriority = 3),
          (U.unstable_Profiling = null),
          (U.unstable_UserBlockingPriority = 2),
          (U.unstable_cancelCallback = function (L) {
            L.callback = null;
          }),
          (U.unstable_continueExecution = function () {
            S || M || ((S = !0), Ae(xe));
          }),
          (U.unstable_forceFrameRate = function (L) {
            0 > L || 125 < L
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (lt = 0 < L ? Math.floor(1e3 / L) : 5);
          }),
          (U.unstable_getCurrentPriorityLevel = function () {
            return w;
          }),
          (U.unstable_getFirstCallbackNode = function () {
            return m(ie);
          }),
          (U.unstable_next = function (L) {
            switch (w) {
              case 1:
              case 2:
              case 3:
                var I = 3;
                break;
              default:
                I = w;
            }
            var N = w;
            w = I;
            try {
              return L();
            } finally {
              w = N;
            }
          }),
          (U.unstable_pauseExecution = function () {}),
          (U.unstable_requestPaint = function () {}),
          (U.unstable_runWithPriority = function (L, I) {
            switch (L) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                L = 3;
            }
            var N = w;
            w = L;
            try {
              return I();
            } finally {
              w = N;
            }
          }),
          (U.unstable_scheduleCallback = function (L, I, N) {
            var f = U.unstable_now();
            switch (
              (typeof N == "object" && N !== null
                ? ((N = N.delay),
                  (N = typeof N == "number" && 0 < N ? f + N : f))
                : (N = f),
              L)
            ) {
              case 1:
                var _ = -1;
                break;
              case 2:
                _ = 250;
                break;
              case 5:
                _ = 1073741823;
                break;
              case 4:
                _ = 1e4;
                break;
              default:
                _ = 5e3;
            }
            return (
              (_ = N + _),
              (L = {
                id: de++,
                callback: I,
                priorityLevel: L,
                startTime: N,
                expirationTime: _,
                sortIndex: -1,
              }),
              N > f
                ? ((L.sortIndex = N),
                  V(oe, L),
                  m(ie) === null &&
                    L === m(oe) &&
                    (x ? (Me(be), (be = -1)) : (x = !0), ye(H, N - f)))
                : ((L.sortIndex = _), V(ie, L), S || M || ((S = !0), Ae(xe))),
              L
            );
          }),
          (U.unstable_shouldYield = at),
          (U.unstable_wrapCallback = function (L) {
            var I = w;
            return function () {
              var N = w;
              w = I;
              try {
                return L.apply(this, arguments);
              } finally {
                w = N;
              }
            };
          });
      })(ba)),
    ba
  );
}
var l1;
function Wc() {
  return l1 || ((l1 = 1), (Ra.exports = Bc())), Ra.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var a1;
function Hc() {
  if (a1) return gt;
  a1 = 1;
  var U = Xo(),
    V = Wc();
  function m(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var b = new Set(),
    G = {};
  function $(e, t) {
    Ee(e, t), Ee(e + "Capture", t);
  }
  function Ee(e, t) {
    for (G[e] = t, e = 0; e < t.length; e++) b.add(t[e]);
  }
  var le = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    ie = Object.prototype.hasOwnProperty,
    oe =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    de = {},
    ae = {};
  function w(e) {
    return ie.call(ae, e)
      ? !0
      : ie.call(de, e)
        ? !1
        : oe.test(e)
          ? (ae[e] = !0)
          : ((de[e] = !0), !1);
  }
  function M(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function S(e, t, n, r) {
    if (t === null || typeof t > "u" || M(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function x(e, t, n, r, i, o, l) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = i),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = l);
  }
  var E = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      E[e] = new x(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      E[t] = new x(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        E[e] = new x(e, 2, !1, e.toLowerCase(), null, !1, !1);
      }
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      E[e] = new x(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        E[e] = new x(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      E[e] = new x(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      E[e] = new x(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      E[e] = new x(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      E[e] = new x(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var Me = /[\-:]([a-z])/g;
  function We(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(Me, We);
      E[t] = new x(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(Me, We);
        E[t] = new x(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(Me, We);
      E[t] = new x(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      E[e] = new x(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (E.xlinkHref = new x(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      E[e] = new x(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function q(e, t, n, r) {
    var i = E.hasOwnProperty(t) ? E[t] : null;
    (i !== null
      ? i.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (S(t, n, i, r) && (n = null),
      r || i === null
        ? w(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : i.mustUseProperty
          ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
          : ((t = i.attributeName),
            (r = i.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((i = i.type),
                (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var H = U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    xe = Symbol.for("react.element"),
    _e = Symbol.for("react.portal"),
    Le = Symbol.for("react.fragment"),
    be = Symbol.for("react.strict_mode"),
    lt = Symbol.for("react.profiler"),
    Se = Symbol.for("react.provider"),
    at = Symbol.for("react.context"),
    st = Symbol.for("react.forward_ref"),
    Fe = Symbol.for("react.suspense"),
    He = Symbol.for("react.suspense_list"),
    dt = Symbol.for("react.memo"),
    Ae = Symbol.for("react.lazy"),
    ye = Symbol.for("react.offscreen"),
    L = Symbol.iterator;
  function I(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (L && e[L]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var N = Object.assign,
    f;
  function _(e) {
    if (f === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        f = (t && t[1]) || "";
      }
    return (
      `
` +
      f +
      e
    );
  }
  var Z = !1;
  function te(e, t) {
    if (!e || Z) return "";
    Z = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (g) {
            var r = g;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (g) {
            r = g;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (g) {
          r = g;
        }
        e();
      }
    } catch (g) {
      if (g && r && typeof g.stack == "string") {
        for (
          var i = g.stack.split(`
`),
            o = r.stack.split(`
`),
            l = i.length - 1,
            s = o.length - 1;
          1 <= l && 0 <= s && i[l] !== o[s];

        )
          s--;
        for (; 1 <= l && 0 <= s; l--, s--)
          if (i[l] !== o[s]) {
            if (l !== 1 || s !== 1)
              do
                if ((l--, s--, 0 > s || i[l] !== o[s])) {
                  var c =
                    `
` + i[l].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      c.includes("<anonymous>") &&
                      (c = c.replace("<anonymous>", e.displayName)),
                    c
                  );
                }
              while (1 <= l && 0 <= s);
            break;
          }
      }
    } finally {
      (Z = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? _(e) : "";
  }
  function j(e) {
    switch (e.tag) {
      case 5:
        return _(e.type);
      case 16:
        return _("Lazy");
      case 13:
        return _("Suspense");
      case 19:
        return _("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = te(e.type, !1)), e;
      case 11:
        return (e = te(e.type.render, !1)), e;
      case 1:
        return (e = te(e.type, !0)), e;
      default:
        return "";
    }
  }
  function re(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Le:
        return "Fragment";
      case _e:
        return "Portal";
      case lt:
        return "Profiler";
      case be:
        return "StrictMode";
      case Fe:
        return "Suspense";
      case He:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case at:
          return (e.displayName || "Context") + ".Consumer";
        case Se:
          return (e._context.displayName || "Context") + ".Provider";
        case st:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case dt:
          return (
            (t = e.displayName || null), t !== null ? t : re(e.type) || "Memo"
          );
        case Ae:
          (t = e._payload), (e = e._init);
          try {
            return re(e(t));
          } catch {}
      }
    return null;
  }
  function fe(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return re(t);
      case 8:
        return t === be ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function pe(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function we(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Ge(e) {
    var t = we(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var i = n.get,
        o = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return i.call(this);
          },
          set: function (l) {
            (r = "" + l), o.call(this, l);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (l) {
            r = "" + l;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function nn(e) {
    e._valueTracker || (e._valueTracker = Ge(e));
  }
  function tr(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = we(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Ft(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function vn(e, t) {
    var n = t.checked;
    return N({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function _t(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = pe(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function Ln(e, t) {
    (t = t.checked), t != null && q(e, "checked", t, !1);
  }
  function Gt(e, t) {
    Ln(e, t);
    var n = pe(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? yt(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && yt(e, t.type, pe(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function At(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function yt(e, t, n) {
    (t !== "number" || Ft(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var $t = Array.isArray;
  function Ct(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        (i = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== i && (e[n].selected = i),
          i && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + pe(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          (e[i].selected = !0), r && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function rn(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(m(91));
    return N({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Ke(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(m(92));
        if ($t(n)) {
          if (1 < n.length) throw Error(m(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: pe(n) };
  }
  function Tt(e, t) {
    var n = pe(t.value),
      r = pe(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function Qt(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function ne(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function se(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? ne(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var X,
    he = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, i) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, i);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          X = X || document.createElement("div"),
            X.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = X.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function $e(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var De = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    ce = ["Webkit", "ms", "Moz", "O"];
  Object.keys(De).forEach(function (e) {
    ce.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (De[t] = De[e]);
    });
  });
  function K(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (De.hasOwnProperty(e) && De[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Je(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          i = K(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
      }
  }
  var gn = N(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Rt(e, t) {
    if (t) {
      if (gn[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(m(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(m(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(m(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(m(62));
    }
  }
  function nr(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var rr = null;
  function ir(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var or = null,
    on = null,
    ln = null;
  function Dr(e) {
    if ((e = mi(e))) {
      if (typeof or != "function") throw Error(m(280));
      var t = e.stateNode;
      t && ((t = so(t)), or(e.stateNode, e.type, t));
    }
  }
  function Vr(e) {
    on ? (ln ? ln.push(e) : (ln = [e])) : (on = e);
  }
  function Br() {
    if (on) {
      var e = on,
        t = ln;
      if (((ln = on = null), Dr(e), t)) for (e = 0; e < t.length; e++) Dr(t[e]);
    }
  }
  function Wr(e, t) {
    return e(t);
  }
  function Hr() {}
  var lr = !1;
  function Gr(e, t, n) {
    if (lr) return e(t, n);
    lr = !0;
    try {
      return Wr(e, t, n);
    } finally {
      (lr = !1), (on !== null || ln !== null) && (Hr(), Br());
    }
  }
  function zt(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = so(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(m(231, t, typeof n));
    return n;
  }
  var ar = !1;
  if (le)
    try {
      var et = {};
      Object.defineProperty(et, "passive", {
        get: function () {
          ar = !0;
        },
      }),
        window.addEventListener("test", et, et),
        window.removeEventListener("test", et, et);
    } catch {
      ar = !1;
    }
  function ji(e, t, n, r, i, o, l, s, c) {
    var g = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, g);
    } catch (z) {
      this.onError(z);
    }
  }
  var yn = !1,
    In = null,
    Fn = !1,
    sr = null,
    Li = {
      onError: function (e) {
        (yn = !0), (In = e);
      },
    };
  function Ii(e, t, n, r, i, o, l, s, c) {
    (yn = !1), (In = null), ji.apply(Li, arguments);
  }
  function Zo(e, t, n, r, i, o, l, s, c) {
    if ((Ii.apply(this, arguments), yn)) {
      if (yn) {
        var g = In;
        (yn = !1), (In = null);
      } else throw Error(m(198));
      Fn || ((Fn = !0), (sr = g));
    }
  }
  function an(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Fi(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function An(e) {
    if (an(e) !== e) throw Error(m(188));
  }
  function Ai(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = an(e)), t === null)) throw Error(m(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var i = n.return;
      if (i === null) break;
      var o = i.alternate;
      if (o === null) {
        if (((r = i.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (i.child === o.child) {
        for (o = i.child; o; ) {
          if (o === n) return An(i), e;
          if (o === r) return An(i), t;
          o = o.sibling;
        }
        throw Error(m(188));
      }
      if (n.return !== r.return) (n = i), (r = o);
      else {
        for (var l = !1, s = i.child; s; ) {
          if (s === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          if (s === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!l) {
          for (s = o.child; s; ) {
            if (s === n) {
              (l = !0), (n = o), (r = i);
              break;
            }
            if (s === r) {
              (l = !0), (r = o), (n = i);
              break;
            }
            s = s.sibling;
          }
          if (!l) throw Error(m(189));
        }
      }
      if (n.alternate !== r) throw Error(m(190));
    }
    if (n.tag !== 3) throw Error(m(188));
    return n.stateNode.current === n ? e : t;
  }
  function $r(e) {
    return (e = Ai(e)), e !== null ? Qr(e) : null;
  }
  function Qr(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Qr(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ri = V.unstable_scheduleCallback,
    Yr = V.unstable_cancelCallback,
    bi = V.unstable_shouldYield,
    Ui = V.unstable_requestPaint,
    Oe = V.unstable_now,
    Jo = V.unstable_getCurrentPriorityLevel,
    qr = V.unstable_ImmediatePriority,
    Di = V.unstable_UserBlockingPriority,
    Rn = V.unstable_NormalPriority,
    el = V.unstable_LowPriority,
    Vi = V.unstable_IdlePriority,
    ur = null,
    Pt = null;
  function tl(e) {
    if (Pt && typeof Pt.onCommitFiberRoot == "function")
      try {
        Pt.onCommitFiberRoot(ur, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var wt = Math.clz32 ? Math.clz32 : il,
    nl = Math.log,
    rl = Math.LN2;
  function il(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((nl(e) / rl) | 0)) | 0;
  }
  var cr = 64,
    dr = 4194304;
  function bn(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function fr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      i = e.suspendedLanes,
      o = e.pingedLanes,
      l = n & 268435455;
    if (l !== 0) {
      var s = l & ~i;
      s !== 0 ? (r = bn(s)) : ((o &= l), o !== 0 && (r = bn(o)));
    } else (l = n & ~i), l !== 0 ? (r = bn(l)) : o !== 0 && (r = bn(o));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & i) &&
      ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - wt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
    return r;
  }
  function ol(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ll(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        i = e.expirationTimes,
        o = e.pendingLanes;
      0 < o;

    ) {
      var l = 31 - wt(o),
        s = 1 << l,
        c = i[l];
      c === -1
        ? (!(s & n) || s & r) && (i[l] = ol(s, t))
        : c <= t && (e.expiredLanes |= s),
        (o &= ~s);
    }
  }
  function Kr(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Bi() {
    var e = cr;
    return (cr <<= 1), !(cr & 4194240) && (cr = 64), e;
  }
  function Xr(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Un(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - wt(t)),
      (e[t] = n);
  }
  function al(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var i = 31 - wt(n),
        o = 1 << i;
      (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
    }
  }
  function Zr(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - wt(n),
        i = 1 << r;
      (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
    }
  }
  var ge = 0;
  function Wi(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var Hi,
    Jr,
    Gi,
    $i,
    Qi,
    ei = !1,
    pr = [],
    Yt = null,
    qt = null,
    Kt = null,
    Dn = new Map(),
    Vn = new Map(),
    Xt = [],
    sl =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Yi(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Yt = null;
        break;
      case "dragenter":
      case "dragleave":
        qt = null;
        break;
      case "mouseover":
      case "mouseout":
        Kt = null;
        break;
      case "pointerover":
      case "pointerout":
        Dn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Vn.delete(t.pointerId);
    }
  }
  function Bn(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [i],
        }),
        t !== null && ((t = mi(t)), t !== null && Jr(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e);
  }
  function qi(e, t, n, r, i) {
    switch (t) {
      case "focusin":
        return (Yt = Bn(Yt, e, t, n, r, i)), !0;
      case "dragenter":
        return (qt = Bn(qt, e, t, n, r, i)), !0;
      case "mouseover":
        return (Kt = Bn(Kt, e, t, n, r, i)), !0;
      case "pointerover":
        var o = i.pointerId;
        return Dn.set(o, Bn(Dn.get(o) || null, e, t, n, r, i)), !0;
      case "gotpointercapture":
        return (
          (o = i.pointerId), Vn.set(o, Bn(Vn.get(o) || null, e, t, n, r, i)), !0
        );
    }
    return !1;
  }
  function Ki(e) {
    var t = Wn(e.target);
    if (t !== null) {
      var n = an(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Fi(n)), t !== null)) {
            (e.blockedOn = t),
              Qi(e.priority, function () {
                Gi(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function p(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = vr(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (rr = r), n.target.dispatchEvent(r), (rr = null);
      } else return (t = mi(n)), t !== null && Jr(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function a(e, t, n) {
    p(e) && n.delete(t);
  }
  function u() {
    (ei = !1),
      Yt !== null && p(Yt) && (Yt = null),
      qt !== null && p(qt) && (qt = null),
      Kt !== null && p(Kt) && (Kt = null),
      Dn.forEach(a),
      Vn.forEach(a);
  }
  function y(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      ei ||
        ((ei = !0), V.unstable_scheduleCallback(V.unstable_NormalPriority, u)));
  }
  function C(e) {
    function t(i) {
      return y(i, e);
    }
    if (0 < pr.length) {
      y(pr[0], e);
      for (var n = 1; n < pr.length; n++) {
        var r = pr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Yt !== null && y(Yt, e),
        qt !== null && y(qt, e),
        Kt !== null && y(Kt, e),
        Dn.forEach(t),
        Vn.forEach(t),
        n = 0;
      n < Xt.length;
      n++
    )
      (r = Xt[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Xt.length && ((n = Xt[0]), n.blockedOn === null); )
      Ki(n), n.blockedOn === null && Xt.shift();
  }
  var ee = H.ReactCurrentBatchConfig,
    Ce = !0;
  function tt(e, t, n, r) {
    var i = ge,
      o = ee.transition;
    ee.transition = null;
    try {
      (ge = 1), ti(e, t, n, r);
    } finally {
      (ge = i), (ee.transition = o);
    }
  }
  function mr(e, t, n, r) {
    var i = ge,
      o = ee.transition;
    ee.transition = null;
    try {
      (ge = 4), ti(e, t, n, r);
    } finally {
      (ge = i), (ee.transition = o);
    }
  }
  function ti(e, t, n, r) {
    if (Ce) {
      var i = vr(e, t, n, r);
      if (i === null) _l(e, t, r, hr, n), Yi(e, r);
      else if (qi(i, e, t, n, r)) r.stopPropagation();
      else if ((Yi(e, r), t & 4 && -1 < sl.indexOf(e))) {
        for (; i !== null; ) {
          var o = mi(i);
          if (
            (o !== null && Hi(o),
            (o = vr(e, t, n, r)),
            o === null && _l(e, t, r, hr, n),
            o === i)
          )
            break;
          i = o;
        }
        i !== null && r.stopPropagation();
      } else _l(e, t, r, null, n);
    }
  }
  var hr = null;
  function vr(e, t, n, r) {
    if (((hr = null), (e = ir(r)), (e = Wn(e)), e !== null))
      if (((t = an(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Fi(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (hr = e), null;
  }
  function ni(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Jo()) {
          case qr:
            return 1;
          case Di:
            return 4;
          case Rn:
          case el:
            return 16;
          case Vi:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var bt = null,
    gr = null,
    Xi = null;
  function Ba() {
    if (Xi) return Xi;
    var e,
      t = gr,
      n = t.length,
      r,
      i = "value" in bt ? bt.value : bt.textContent,
      o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var l = n - e;
    for (r = 1; r <= l && t[n - r] === i[o - r]; r++);
    return (Xi = i.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Zi(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Ji() {
    return !0;
  }
  function Wa() {
    return !1;
  }
  function xt(e) {
    function t(n, r, i, o, l) {
      (this._reactName = n),
        (this._targetInst = i),
        (this.type = r),
        (this.nativeEvent = o),
        (this.target = l),
        (this.currentTarget = null);
      for (var s in e)
        e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? Ji
          : Wa),
        (this.isPropagationStopped = Wa),
        this
      );
    }
    return (
      N(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Ji));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Ji));
        },
        persist: function () {},
        isPersistent: Ji,
      }),
      t
    );
  }
  var yr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ul = xt(yr),
    ri = N({}, yr, { view: 0, detail: 0 }),
    f1 = xt(ri),
    cl,
    dl,
    ii,
    eo = N({}, ri, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: pl,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== ii &&
              (ii && e.type === "mousemove"
                ? ((cl = e.screenX - ii.screenX), (dl = e.screenY - ii.screenY))
                : (dl = cl = 0),
              (ii = e)),
            cl);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : dl;
      },
    }),
    Ha = xt(eo),
    p1 = N({}, eo, { dataTransfer: 0 }),
    m1 = xt(p1),
    h1 = N({}, ri, { relatedTarget: 0 }),
    fl = xt(h1),
    v1 = N({}, yr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    g1 = xt(v1),
    y1 = N({}, yr, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    w1 = xt(y1),
    x1 = N({}, yr, { data: 0 }),
    Ga = xt(x1),
    S1 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    k1 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    E1 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function _1(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = E1[e])
        ? !!t[e]
        : !1;
  }
  function pl() {
    return _1;
  }
  var C1 = N({}, ri, {
      key: function (e) {
        if (e.key) {
          var t = S1[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Zi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? k1[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: pl,
      charCode: function (e) {
        return e.type === "keypress" ? Zi(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Zi(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    T1 = xt(C1),
    z1 = N({}, eo, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    $a = xt(z1),
    P1 = N({}, ri, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: pl,
    }),
    M1 = xt(P1),
    O1 = N({}, yr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    N1 = xt(O1),
    j1 = N({}, eo, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    L1 = xt(j1),
    I1 = [9, 13, 27, 32],
    ml = le && "CompositionEvent" in window,
    oi = null;
  le && "documentMode" in document && (oi = document.documentMode);
  var F1 = le && "TextEvent" in window && !oi,
    Qa = le && (!ml || (oi && 8 < oi && 11 >= oi)),
    Ya = " ",
    qa = !1;
  function Ka(e, t) {
    switch (e) {
      case "keyup":
        return I1.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Xa(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var wr = !1;
  function A1(e, t) {
    switch (e) {
      case "compositionend":
        return Xa(t);
      case "keypress":
        return t.which !== 32 ? null : ((qa = !0), Ya);
      case "textInput":
        return (e = t.data), e === Ya && qa ? null : e;
      default:
        return null;
    }
  }
  function R1(e, t) {
    if (wr)
      return e === "compositionend" || (!ml && Ka(e, t))
        ? ((e = Ba()), (Xi = gr = bt = null), (wr = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Qa && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var b1 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Za(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!b1[e.type] : t === "textarea";
  }
  function Ja(e, t, n, r) {
    Vr(r),
      (t = oo(t, "onChange")),
      0 < t.length &&
        ((n = new ul("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var li = null,
    ai = null;
  function U1(e) {
    gs(e, 0);
  }
  function to(e) {
    var t = _r(e);
    if (tr(t)) return e;
  }
  function D1(e, t) {
    if (e === "change") return t;
  }
  var es = !1;
  if (le) {
    var hl;
    if (le) {
      var vl = "oninput" in document;
      if (!vl) {
        var ts = document.createElement("div");
        ts.setAttribute("oninput", "return;"),
          (vl = typeof ts.oninput == "function");
      }
      hl = vl;
    } else hl = !1;
    es = hl && (!document.documentMode || 9 < document.documentMode);
  }
  function ns() {
    li && (li.detachEvent("onpropertychange", rs), (ai = li = null));
  }
  function rs(e) {
    if (e.propertyName === "value" && to(ai)) {
      var t = [];
      Ja(t, ai, e, ir(e)), Gr(U1, t);
    }
  }
  function V1(e, t, n) {
    e === "focusin"
      ? (ns(), (li = t), (ai = n), li.attachEvent("onpropertychange", rs))
      : e === "focusout" && ns();
  }
  function B1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return to(ai);
  }
  function W1(e, t) {
    if (e === "click") return to(t);
  }
  function H1(e, t) {
    if (e === "input" || e === "change") return to(t);
  }
  function G1(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Ut = typeof Object.is == "function" ? Object.is : G1;
  function si(e, t) {
    if (Ut(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!ie.call(t, i) || !Ut(e[i], t[i])) return !1;
    }
    return !0;
  }
  function is(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function os(e, t) {
    var n = is(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = is(n);
    }
  }
  function ls(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? ls(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function as() {
    for (var e = window, t = Ft(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Ft(e.document);
    }
    return t;
  }
  function gl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function $1(e) {
    var t = as(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      ls(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && gl(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var i = n.textContent.length,
            o = Math.min(r.start, i);
          (r = r.end === void 0 ? o : Math.min(r.end, i)),
            !e.extend && o > r && ((i = r), (r = o), (o = i)),
            (i = os(n, o));
          var l = os(n, r);
          i &&
            l &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== i.node ||
              e.anchorOffset !== i.offset ||
              e.focusNode !== l.node ||
              e.focusOffset !== l.offset) &&
            ((t = t.createRange()),
            t.setStart(i.node, i.offset),
            e.removeAllRanges(),
            o > r
              ? (e.addRange(t), e.extend(l.node, l.offset))
              : (t.setEnd(l.node, l.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Q1 = le && "documentMode" in document && 11 >= document.documentMode,
    xr = null,
    yl = null,
    ui = null,
    wl = !1;
  function ss(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    wl ||
      xr == null ||
      xr !== Ft(r) ||
      ((r = xr),
      "selectionStart" in r && gl(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (ui && si(ui, r)) ||
        ((ui = r),
        (r = oo(yl, "onSelect")),
        0 < r.length &&
          ((t = new ul("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = xr))));
  }
  function no(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Sr = {
      animationend: no("Animation", "AnimationEnd"),
      animationiteration: no("Animation", "AnimationIteration"),
      animationstart: no("Animation", "AnimationStart"),
      transitionend: no("Transition", "TransitionEnd"),
    },
    xl = {},
    us = {};
  le &&
    ((us = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Sr.animationend.animation,
      delete Sr.animationiteration.animation,
      delete Sr.animationstart.animation),
    "TransitionEvent" in window || delete Sr.transitionend.transition);
  function ro(e) {
    if (xl[e]) return xl[e];
    if (!Sr[e]) return e;
    var t = Sr[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in us) return (xl[e] = t[n]);
    return e;
  }
  var cs = ro("animationend"),
    ds = ro("animationiteration"),
    fs = ro("animationstart"),
    ps = ro("transitionend"),
    ms = new Map(),
    hs =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function wn(e, t) {
    ms.set(e, t), $(t, [e]);
  }
  for (var Sl = 0; Sl < hs.length; Sl++) {
    var kl = hs[Sl],
      Y1 = kl.toLowerCase(),
      q1 = kl[0].toUpperCase() + kl.slice(1);
    wn(Y1, "on" + q1);
  }
  wn(cs, "onAnimationEnd"),
    wn(ds, "onAnimationIteration"),
    wn(fs, "onAnimationStart"),
    wn("dblclick", "onDoubleClick"),
    wn("focusin", "onFocus"),
    wn("focusout", "onBlur"),
    wn(ps, "onTransitionEnd"),
    Ee("onMouseEnter", ["mouseout", "mouseover"]),
    Ee("onMouseLeave", ["mouseout", "mouseover"]),
    Ee("onPointerEnter", ["pointerout", "pointerover"]),
    Ee("onPointerLeave", ["pointerout", "pointerover"]),
    $(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    $(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    $("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    $(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    $(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    $(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var ci =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    K1 = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(ci)
    );
  function vs(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Zo(r, t, void 0, e), (e.currentTarget = null);
  }
  function gs(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        i = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var l = r.length - 1; 0 <= l; l--) {
            var s = r[l],
              c = s.instance,
              g = s.currentTarget;
            if (((s = s.listener), c !== o && i.isPropagationStopped()))
              break e;
            vs(i, s, g), (o = c);
          }
        else
          for (l = 0; l < r.length; l++) {
            if (
              ((s = r[l]),
              (c = s.instance),
              (g = s.currentTarget),
              (s = s.listener),
              c !== o && i.isPropagationStopped())
            )
              break e;
            vs(i, s, g), (o = c);
          }
      }
    }
    if (Fn) throw ((e = sr), (Fn = !1), (sr = null), e);
  }
  function Te(e, t) {
    var n = t[Ol];
    n === void 0 && (n = t[Ol] = new Set());
    var r = e + "__bubble";
    n.has(r) || (ys(t, e, 2, !1), n.add(r));
  }
  function El(e, t, n) {
    var r = 0;
    t && (r |= 4), ys(n, e, r, t);
  }
  var io = "_reactListening" + Math.random().toString(36).slice(2);
  function di(e) {
    if (!e[io]) {
      (e[io] = !0),
        b.forEach(function (n) {
          n !== "selectionchange" && (K1.has(n) || El(n, !1, e), El(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[io] || ((t[io] = !0), El("selectionchange", !1, t));
    }
  }
  function ys(e, t, n, r) {
    switch (ni(t)) {
      case 1:
        var i = tt;
        break;
      case 4:
        i = mr;
        break;
      default:
        i = ti;
    }
    (n = i.bind(null, t, n, e)),
      (i = void 0),
      !ar ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (i = !0),
      r
        ? i !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: i })
          : e.addEventListener(t, n, !0)
        : i !== void 0
          ? e.addEventListener(t, n, { passive: i })
          : e.addEventListener(t, n, !1);
  }
  function _l(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var l = r.tag;
        if (l === 3 || l === 4) {
          var s = r.stateNode.containerInfo;
          if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
          if (l === 4)
            for (l = r.return; l !== null; ) {
              var c = l.tag;
              if (
                (c === 3 || c === 4) &&
                ((c = l.stateNode.containerInfo),
                c === i || (c.nodeType === 8 && c.parentNode === i))
              )
                return;
              l = l.return;
            }
          for (; s !== null; ) {
            if (((l = Wn(s)), l === null)) return;
            if (((c = l.tag), c === 5 || c === 6)) {
              r = o = l;
              continue e;
            }
            s = s.parentNode;
          }
        }
        r = r.return;
      }
    Gr(function () {
      var g = o,
        z = ir(n),
        P = [];
      e: {
        var T = ms.get(e);
        if (T !== void 0) {
          var F = ul,
            D = e;
          switch (e) {
            case "keypress":
              if (Zi(n) === 0) break e;
            case "keydown":
            case "keyup":
              F = T1;
              break;
            case "focusin":
              (D = "focus"), (F = fl);
              break;
            case "focusout":
              (D = "blur"), (F = fl);
              break;
            case "beforeblur":
            case "afterblur":
              F = fl;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              F = Ha;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              F = m1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              F = M1;
              break;
            case cs:
            case ds:
            case fs:
              F = g1;
              break;
            case ps:
              F = N1;
              break;
            case "scroll":
              F = f1;
              break;
            case "wheel":
              F = L1;
              break;
            case "copy":
            case "cut":
            case "paste":
              F = w1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              F = $a;
          }
          var B = (t & 4) !== 0,
            Re = !B && e === "scroll",
            h = B ? (T !== null ? T + "Capture" : null) : T;
          B = [];
          for (var d = g, v; d !== null; ) {
            v = d;
            var O = v.stateNode;
            if (
              (v.tag === 5 &&
                O !== null &&
                ((v = O),
                h !== null &&
                  ((O = zt(d, h)), O != null && B.push(fi(d, O, v)))),
              Re)
            )
              break;
            d = d.return;
          }
          0 < B.length &&
            ((T = new F(T, D, null, n, z)), P.push({ event: T, listeners: B }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((T = e === "mouseover" || e === "pointerover"),
            (F = e === "mouseout" || e === "pointerout"),
            T &&
              n !== rr &&
              (D = n.relatedTarget || n.fromElement) &&
              (Wn(D) || D[sn]))
          )
            break e;
          if (
            (F || T) &&
            ((T =
              z.window === z
                ? z
                : (T = z.ownerDocument)
                  ? T.defaultView || T.parentWindow
                  : window),
            F
              ? ((D = n.relatedTarget || n.toElement),
                (F = g),
                (D = D ? Wn(D) : null),
                D !== null &&
                  ((Re = an(D)), D !== Re || (D.tag !== 5 && D.tag !== 6)) &&
                  (D = null))
              : ((F = null), (D = g)),
            F !== D)
          ) {
            if (
              ((B = Ha),
              (O = "onMouseLeave"),
              (h = "onMouseEnter"),
              (d = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((B = $a),
                (O = "onPointerLeave"),
                (h = "onPointerEnter"),
                (d = "pointer")),
              (Re = F == null ? T : _r(F)),
              (v = D == null ? T : _r(D)),
              (T = new B(O, d + "leave", F, n, z)),
              (T.target = Re),
              (T.relatedTarget = v),
              (O = null),
              Wn(z) === g &&
                ((B = new B(h, d + "enter", D, n, z)),
                (B.target = v),
                (B.relatedTarget = Re),
                (O = B)),
              (Re = O),
              F && D)
            )
              t: {
                for (B = F, h = D, d = 0, v = B; v; v = kr(v)) d++;
                for (v = 0, O = h; O; O = kr(O)) v++;
                for (; 0 < d - v; ) (B = kr(B)), d--;
                for (; 0 < v - d; ) (h = kr(h)), v--;
                for (; d--; ) {
                  if (B === h || (h !== null && B === h.alternate)) break t;
                  (B = kr(B)), (h = kr(h));
                }
                B = null;
              }
            else B = null;
            F !== null && ws(P, T, F, B, !1),
              D !== null && Re !== null && ws(P, Re, D, B, !0);
          }
        }
        e: {
          if (
            ((T = g ? _r(g) : window),
            (F = T.nodeName && T.nodeName.toLowerCase()),
            F === "select" || (F === "input" && T.type === "file"))
          )
            var W = D1;
          else if (Za(T))
            if (es) W = H1;
            else {
              W = B1;
              var Q = V1;
            }
          else
            (F = T.nodeName) &&
              F.toLowerCase() === "input" &&
              (T.type === "checkbox" || T.type === "radio") &&
              (W = W1);
          if (W && (W = W(e, g))) {
            Ja(P, W, n, z);
            break e;
          }
          Q && Q(e, T, g),
            e === "focusout" &&
              (Q = T._wrapperState) &&
              Q.controlled &&
              T.type === "number" &&
              yt(T, "number", T.value);
        }
        switch (((Q = g ? _r(g) : window), e)) {
          case "focusin":
            (Za(Q) || Q.contentEditable === "true") &&
              ((xr = Q), (yl = g), (ui = null));
            break;
          case "focusout":
            ui = yl = xr = null;
            break;
          case "mousedown":
            wl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (wl = !1), ss(P, n, z);
            break;
          case "selectionchange":
            if (Q1) break;
          case "keydown":
          case "keyup":
            ss(P, n, z);
        }
        var Y;
        if (ml)
          e: {
            switch (e) {
              case "compositionstart":
                var J = "onCompositionStart";
                break e;
              case "compositionend":
                J = "onCompositionEnd";
                break e;
              case "compositionupdate":
                J = "onCompositionUpdate";
                break e;
            }
            J = void 0;
          }
        else
          wr
            ? Ka(e, n) && (J = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (J = "onCompositionStart");
        J &&
          (Qa &&
            n.locale !== "ko" &&
            (wr || J !== "onCompositionStart"
              ? J === "onCompositionEnd" && wr && (Y = Ba())
              : ((bt = z),
                (gr = "value" in bt ? bt.value : bt.textContent),
                (wr = !0))),
          (Q = oo(g, J)),
          0 < Q.length &&
            ((J = new Ga(J, e, null, n, z)),
            P.push({ event: J, listeners: Q }),
            Y ? (J.data = Y) : ((Y = Xa(n)), Y !== null && (J.data = Y)))),
          (Y = F1 ? A1(e, n) : R1(e, n)) &&
            ((g = oo(g, "onBeforeInput")),
            0 < g.length &&
              ((z = new Ga("onBeforeInput", "beforeinput", null, n, z)),
              P.push({ event: z, listeners: g }),
              (z.data = Y)));
      }
      gs(P, t);
    });
  }
  function fi(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function oo(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var i = e,
        o = i.stateNode;
      i.tag === 5 &&
        o !== null &&
        ((i = o),
        (o = zt(e, n)),
        o != null && r.unshift(fi(e, o, i)),
        (o = zt(e, t)),
        o != null && r.push(fi(e, o, i))),
        (e = e.return);
    }
    return r;
  }
  function kr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function ws(e, t, n, r, i) {
    for (var o = t._reactName, l = []; n !== null && n !== r; ) {
      var s = n,
        c = s.alternate,
        g = s.stateNode;
      if (c !== null && c === r) break;
      s.tag === 5 &&
        g !== null &&
        ((s = g),
        i
          ? ((c = zt(n, o)), c != null && l.unshift(fi(n, c, s)))
          : i || ((c = zt(n, o)), c != null && l.push(fi(n, c, s)))),
        (n = n.return);
    }
    l.length !== 0 && e.push({ event: t, listeners: l });
  }
  var X1 = /\r\n?/g,
    Z1 = /\u0000|\uFFFD/g;
  function xs(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        X1,
        `
`
      )
      .replace(Z1, "");
  }
  function lo(e, t, n) {
    if (((t = xs(t)), xs(e) !== t && n)) throw Error(m(425));
  }
  function ao() {}
  var Cl = null,
    Tl = null;
  function zl(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Pl = typeof setTimeout == "function" ? setTimeout : void 0,
    J1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ss = typeof Promise == "function" ? Promise : void 0,
    ec =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ss < "u"
          ? function (e) {
              return Ss.resolve(null).then(e).catch(tc);
            }
          : Pl;
  function tc(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Ml(e, t) {
    var n = t,
      r = 0;
    do {
      var i = n.nextSibling;
      if ((e.removeChild(n), i && i.nodeType === 8))
        if (((n = i.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(i), C(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = i;
    } while (n);
    C(t);
  }
  function xn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function ks(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Er = Math.random().toString(36).slice(2),
    Zt = "__reactFiber$" + Er,
    pi = "__reactProps$" + Er,
    sn = "__reactContainer$" + Er,
    Ol = "__reactEvents$" + Er,
    nc = "__reactListeners$" + Er,
    rc = "__reactHandles$" + Er;
  function Wn(e) {
    var t = e[Zt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[sn] || n[Zt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = ks(e); e !== null; ) {
            if ((n = e[Zt])) return n;
            e = ks(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function mi(e) {
    return (
      (e = e[Zt] || e[sn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function _r(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function so(e) {
    return e[pi] || null;
  }
  var Nl = [],
    Cr = -1;
  function Sn(e) {
    return { current: e };
  }
  function ze(e) {
    0 > Cr || ((e.current = Nl[Cr]), (Nl[Cr] = null), Cr--);
  }
  function ke(e, t) {
    Cr++, (Nl[Cr] = e.current), (e.current = t);
  }
  var kn = {},
    nt = Sn(kn),
    ft = Sn(!1),
    Hn = kn;
  function Tr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return kn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
      o;
    for (o in n) i[o] = t[o];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      i
    );
  }
  function pt(e) {
    return (e = e.childContextTypes), e != null;
  }
  function uo() {
    ze(ft), ze(nt);
  }
  function Es(e, t, n) {
    if (nt.current !== kn) throw Error(m(168));
    ke(nt, t), ke(ft, n);
  }
  function _s(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(m(108, fe(e) || "Unknown", i));
    return N({}, n, r);
  }
  function co(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        kn),
      (Hn = nt.current),
      ke(nt, e),
      ke(ft, ft.current),
      !0
    );
  }
  function Cs(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    n
      ? ((e = _s(e, t, Hn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ze(ft),
        ze(nt),
        ke(nt, e))
      : ze(ft),
      ke(ft, n);
  }
  var un = null,
    fo = !1,
    jl = !1;
  function Ts(e) {
    un === null ? (un = [e]) : un.push(e);
  }
  function ic(e) {
    (fo = !0), Ts(e);
  }
  function En() {
    if (!jl && un !== null) {
      jl = !0;
      var e = 0,
        t = ge;
      try {
        var n = un;
        for (ge = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (un = null), (fo = !1);
      } catch (i) {
        throw (un !== null && (un = un.slice(e + 1)), Ri(qr, En), i);
      } finally {
        (ge = t), (jl = !1);
      }
    }
    return null;
  }
  var zr = [],
    Pr = 0,
    po = null,
    mo = 0,
    Mt = [],
    Ot = 0,
    Gn = null,
    cn = 1,
    dn = "";
  function $n(e, t) {
    (zr[Pr++] = mo), (zr[Pr++] = po), (po = e), (mo = t);
  }
  function zs(e, t, n) {
    (Mt[Ot++] = cn), (Mt[Ot++] = dn), (Mt[Ot++] = Gn), (Gn = e);
    var r = cn;
    e = dn;
    var i = 32 - wt(r) - 1;
    (r &= ~(1 << i)), (n += 1);
    var o = 32 - wt(t) + i;
    if (30 < o) {
      var l = i - (i % 5);
      (o = (r & ((1 << l) - 1)).toString(32)),
        (r >>= l),
        (i -= l),
        (cn = (1 << (32 - wt(t) + i)) | (n << i) | r),
        (dn = o + e);
    } else (cn = (1 << o) | (n << i) | r), (dn = e);
  }
  function Ll(e) {
    e.return !== null && ($n(e, 1), zs(e, 1, 0));
  }
  function Il(e) {
    for (; e === po; )
      (po = zr[--Pr]), (zr[Pr] = null), (mo = zr[--Pr]), (zr[Pr] = null);
    for (; e === Gn; )
      (Gn = Mt[--Ot]),
        (Mt[Ot] = null),
        (dn = Mt[--Ot]),
        (Mt[Ot] = null),
        (cn = Mt[--Ot]),
        (Mt[Ot] = null);
  }
  var St = null,
    kt = null,
    Pe = !1,
    Dt = null;
  function Ps(e, t) {
    var n = It(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function Ms(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (St = e), (kt = xn(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (St = e), (kt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Gn !== null ? { id: cn, overflow: dn } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = It(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (St = e),
              (kt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Fl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Al(e) {
    if (Pe) {
      var t = kt;
      if (t) {
        var n = t;
        if (!Ms(e, t)) {
          if (Fl(e)) throw Error(m(418));
          t = xn(n.nextSibling);
          var r = St;
          t && Ms(e, t)
            ? Ps(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (Pe = !1), (St = e));
        }
      } else {
        if (Fl(e)) throw Error(m(418));
        (e.flags = (e.flags & -4097) | 2), (Pe = !1), (St = e);
      }
    }
  }
  function Os(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    St = e;
  }
  function ho(e) {
    if (e !== St) return !1;
    if (!Pe) return Os(e), (Pe = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !zl(e.type, e.memoizedProps))),
      t && (t = kt))
    ) {
      if (Fl(e)) throw (Ns(), Error(m(418)));
      for (; t; ) Ps(e, t), (t = xn(t.nextSibling));
    }
    if ((Os(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(m(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                kt = xn(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        kt = null;
      }
    } else kt = St ? xn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ns() {
    for (var e = kt; e; ) e = xn(e.nextSibling);
  }
  function Mr() {
    (kt = St = null), (Pe = !1);
  }
  function Rl(e) {
    Dt === null ? (Dt = [e]) : Dt.push(e);
  }
  var oc = H.ReactCurrentBatchConfig;
  function hi(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(m(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(m(147, e));
        var i = r,
          o = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === o
          ? t.ref
          : ((t = function (l) {
              var s = i.refs;
              l === null ? delete s[o] : (s[o] = l);
            }),
            (t._stringRef = o),
            t);
      }
      if (typeof e != "string") throw Error(m(284));
      if (!n._owner) throw Error(m(290, e));
    }
    return e;
  }
  function vo(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        m(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function js(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Ls(e) {
    function t(h, d) {
      if (e) {
        var v = h.deletions;
        v === null ? ((h.deletions = [d]), (h.flags |= 16)) : v.push(d);
      }
    }
    function n(h, d) {
      if (!e) return null;
      for (; d !== null; ) t(h, d), (d = d.sibling);
      return null;
    }
    function r(h, d) {
      for (h = new Map(); d !== null; )
        d.key !== null ? h.set(d.key, d) : h.set(d.index, d), (d = d.sibling);
      return h;
    }
    function i(h, d) {
      return (h = Nn(h, d)), (h.index = 0), (h.sibling = null), h;
    }
    function o(h, d, v) {
      return (
        (h.index = v),
        e
          ? ((v = h.alternate),
            v !== null
              ? ((v = v.index), v < d ? ((h.flags |= 2), d) : v)
              : ((h.flags |= 2), d))
          : ((h.flags |= 1048576), d)
      );
    }
    function l(h) {
      return e && h.alternate === null && (h.flags |= 2), h;
    }
    function s(h, d, v, O) {
      return d === null || d.tag !== 6
        ? ((d = Pa(v, h.mode, O)), (d.return = h), d)
        : ((d = i(d, v)), (d.return = h), d);
    }
    function c(h, d, v, O) {
      var W = v.type;
      return W === Le
        ? z(h, d, v.props.children, O, v.key)
        : d !== null &&
            (d.elementType === W ||
              (typeof W == "object" &&
                W !== null &&
                W.$$typeof === Ae &&
                js(W) === d.type))
          ? ((O = i(d, v.props)), (O.ref = hi(h, d, v)), (O.return = h), O)
          : ((O = Do(v.type, v.key, v.props, null, h.mode, O)),
            (O.ref = hi(h, d, v)),
            (O.return = h),
            O);
    }
    function g(h, d, v, O) {
      return d === null ||
        d.tag !== 4 ||
        d.stateNode.containerInfo !== v.containerInfo ||
        d.stateNode.implementation !== v.implementation
        ? ((d = Ma(v, h.mode, O)), (d.return = h), d)
        : ((d = i(d, v.children || [])), (d.return = h), d);
    }
    function z(h, d, v, O, W) {
      return d === null || d.tag !== 7
        ? ((d = er(v, h.mode, O, W)), (d.return = h), d)
        : ((d = i(d, v)), (d.return = h), d);
    }
    function P(h, d, v) {
      if ((typeof d == "string" && d !== "") || typeof d == "number")
        return (d = Pa("" + d, h.mode, v)), (d.return = h), d;
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case xe:
            return (
              (v = Do(d.type, d.key, d.props, null, h.mode, v)),
              (v.ref = hi(h, null, d)),
              (v.return = h),
              v
            );
          case _e:
            return (d = Ma(d, h.mode, v)), (d.return = h), d;
          case Ae:
            var O = d._init;
            return P(h, O(d._payload), v);
        }
        if ($t(d) || I(d))
          return (d = er(d, h.mode, v, null)), (d.return = h), d;
        vo(h, d);
      }
      return null;
    }
    function T(h, d, v, O) {
      var W = d !== null ? d.key : null;
      if ((typeof v == "string" && v !== "") || typeof v == "number")
        return W !== null ? null : s(h, d, "" + v, O);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case xe:
            return v.key === W ? c(h, d, v, O) : null;
          case _e:
            return v.key === W ? g(h, d, v, O) : null;
          case Ae:
            return (W = v._init), T(h, d, W(v._payload), O);
        }
        if ($t(v) || I(v)) return W !== null ? null : z(h, d, v, O, null);
        vo(h, v);
      }
      return null;
    }
    function F(h, d, v, O, W) {
      if ((typeof O == "string" && O !== "") || typeof O == "number")
        return (h = h.get(v) || null), s(d, h, "" + O, W);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case xe:
            return (
              (h = h.get(O.key === null ? v : O.key) || null), c(d, h, O, W)
            );
          case _e:
            return (
              (h = h.get(O.key === null ? v : O.key) || null), g(d, h, O, W)
            );
          case Ae:
            var Q = O._init;
            return F(h, d, v, Q(O._payload), W);
        }
        if ($t(O) || I(O)) return (h = h.get(v) || null), z(d, h, O, W, null);
        vo(d, O);
      }
      return null;
    }
    function D(h, d, v, O) {
      for (
        var W = null, Q = null, Y = d, J = (d = 0), qe = null;
        Y !== null && J < v.length;
        J++
      ) {
        Y.index > J ? ((qe = Y), (Y = null)) : (qe = Y.sibling);
        var ve = T(h, Y, v[J], O);
        if (ve === null) {
          Y === null && (Y = qe);
          break;
        }
        e && Y && ve.alternate === null && t(h, Y),
          (d = o(ve, d, J)),
          Q === null ? (W = ve) : (Q.sibling = ve),
          (Q = ve),
          (Y = qe);
      }
      if (J === v.length) return n(h, Y), Pe && $n(h, J), W;
      if (Y === null) {
        for (; J < v.length; J++)
          (Y = P(h, v[J], O)),
            Y !== null &&
              ((d = o(Y, d, J)),
              Q === null ? (W = Y) : (Q.sibling = Y),
              (Q = Y));
        return Pe && $n(h, J), W;
      }
      for (Y = r(h, Y); J < v.length; J++)
        (qe = F(Y, h, J, v[J], O)),
          qe !== null &&
            (e &&
              qe.alternate !== null &&
              Y.delete(qe.key === null ? J : qe.key),
            (d = o(qe, d, J)),
            Q === null ? (W = qe) : (Q.sibling = qe),
            (Q = qe));
      return (
        e &&
          Y.forEach(function (jn) {
            return t(h, jn);
          }),
        Pe && $n(h, J),
        W
      );
    }
    function B(h, d, v, O) {
      var W = I(v);
      if (typeof W != "function") throw Error(m(150));
      if (((v = W.call(v)), v == null)) throw Error(m(151));
      for (
        var Q = (W = null), Y = d, J = (d = 0), qe = null, ve = v.next();
        Y !== null && !ve.done;
        J++, ve = v.next()
      ) {
        Y.index > J ? ((qe = Y), (Y = null)) : (qe = Y.sibling);
        var jn = T(h, Y, ve.value, O);
        if (jn === null) {
          Y === null && (Y = qe);
          break;
        }
        e && Y && jn.alternate === null && t(h, Y),
          (d = o(jn, d, J)),
          Q === null ? (W = jn) : (Q.sibling = jn),
          (Q = jn),
          (Y = qe);
      }
      if (ve.done) return n(h, Y), Pe && $n(h, J), W;
      if (Y === null) {
        for (; !ve.done; J++, ve = v.next())
          (ve = P(h, ve.value, O)),
            ve !== null &&
              ((d = o(ve, d, J)),
              Q === null ? (W = ve) : (Q.sibling = ve),
              (Q = ve));
        return Pe && $n(h, J), W;
      }
      for (Y = r(h, Y); !ve.done; J++, ve = v.next())
        (ve = F(Y, h, J, ve.value, O)),
          ve !== null &&
            (e &&
              ve.alternate !== null &&
              Y.delete(ve.key === null ? J : ve.key),
            (d = o(ve, d, J)),
            Q === null ? (W = ve) : (Q.sibling = ve),
            (Q = ve));
      return (
        e &&
          Y.forEach(function (bc) {
            return t(h, bc);
          }),
        Pe && $n(h, J),
        W
      );
    }
    function Re(h, d, v, O) {
      if (
        (typeof v == "object" &&
          v !== null &&
          v.type === Le &&
          v.key === null &&
          (v = v.props.children),
        typeof v == "object" && v !== null)
      ) {
        switch (v.$$typeof) {
          case xe:
            e: {
              for (var W = v.key, Q = d; Q !== null; ) {
                if (Q.key === W) {
                  if (((W = v.type), W === Le)) {
                    if (Q.tag === 7) {
                      n(h, Q.sibling),
                        (d = i(Q, v.props.children)),
                        (d.return = h),
                        (h = d);
                      break e;
                    }
                  } else if (
                    Q.elementType === W ||
                    (typeof W == "object" &&
                      W !== null &&
                      W.$$typeof === Ae &&
                      js(W) === Q.type)
                  ) {
                    n(h, Q.sibling),
                      (d = i(Q, v.props)),
                      (d.ref = hi(h, Q, v)),
                      (d.return = h),
                      (h = d);
                    break e;
                  }
                  n(h, Q);
                  break;
                } else t(h, Q);
                Q = Q.sibling;
              }
              v.type === Le
                ? ((d = er(v.props.children, h.mode, O, v.key)),
                  (d.return = h),
                  (h = d))
                : ((O = Do(v.type, v.key, v.props, null, h.mode, O)),
                  (O.ref = hi(h, d, v)),
                  (O.return = h),
                  (h = O));
            }
            return l(h);
          case _e:
            e: {
              for (Q = v.key; d !== null; ) {
                if (d.key === Q)
                  if (
                    d.tag === 4 &&
                    d.stateNode.containerInfo === v.containerInfo &&
                    d.stateNode.implementation === v.implementation
                  ) {
                    n(h, d.sibling),
                      (d = i(d, v.children || [])),
                      (d.return = h),
                      (h = d);
                    break e;
                  } else {
                    n(h, d);
                    break;
                  }
                else t(h, d);
                d = d.sibling;
              }
              (d = Ma(v, h.mode, O)), (d.return = h), (h = d);
            }
            return l(h);
          case Ae:
            return (Q = v._init), Re(h, d, Q(v._payload), O);
        }
        if ($t(v)) return D(h, d, v, O);
        if (I(v)) return B(h, d, v, O);
        vo(h, v);
      }
      return (typeof v == "string" && v !== "") || typeof v == "number"
        ? ((v = "" + v),
          d !== null && d.tag === 6
            ? (n(h, d.sibling), (d = i(d, v)), (d.return = h), (h = d))
            : (n(h, d), (d = Pa(v, h.mode, O)), (d.return = h), (h = d)),
          l(h))
        : n(h, d);
    }
    return Re;
  }
  var Or = Ls(!0),
    Is = Ls(!1),
    go = Sn(null),
    yo = null,
    Nr = null,
    bl = null;
  function Ul() {
    bl = Nr = yo = null;
  }
  function Dl(e) {
    var t = go.current;
    ze(go), (e._currentValue = t);
  }
  function Vl(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function jr(e, t) {
    (yo = e),
      (bl = Nr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (mt = !0), (e.firstContext = null));
  }
  function Nt(e) {
    var t = e._currentValue;
    if (bl !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Nr === null)) {
        if (yo === null) throw Error(m(308));
        (Nr = e), (yo.dependencies = { lanes: 0, firstContext: e });
      } else Nr = Nr.next = e;
    return t;
  }
  var Qn = null;
  function Bl(e) {
    Qn === null ? (Qn = [e]) : Qn.push(e);
  }
  function Fs(e, t, n, r) {
    var i = t.interleaved;
    return (
      i === null ? ((n.next = n), Bl(t)) : ((n.next = i.next), (i.next = n)),
      (t.interleaved = n),
      fn(e, r)
    );
  }
  function fn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var _n = !1;
  function Wl(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function As(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function pn(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Cn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), me & 2)) {
      var i = r.pending;
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (r.pending = t),
        fn(e, n)
      );
    }
    return (
      (i = r.interleaved),
      i === null ? ((t.next = t), Bl(r)) : ((t.next = i.next), (i.next = t)),
      (r.interleaved = t),
      fn(e, n)
    );
  }
  function wo(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Zr(e, n);
    }
  }
  function Rs(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var i = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var l = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          o === null ? (i = o = l) : (o = o.next = l), (n = n.next);
        } while (n !== null);
        o === null ? (i = o = t) : (o = o.next = t);
      } else i = o = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: o,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function xo(e, t, n, r) {
    var i = e.updateQueue;
    _n = !1;
    var o = i.firstBaseUpdate,
      l = i.lastBaseUpdate,
      s = i.shared.pending;
    if (s !== null) {
      i.shared.pending = null;
      var c = s,
        g = c.next;
      (c.next = null), l === null ? (o = g) : (l.next = g), (l = c);
      var z = e.alternate;
      z !== null &&
        ((z = z.updateQueue),
        (s = z.lastBaseUpdate),
        s !== l &&
          (s === null ? (z.firstBaseUpdate = g) : (s.next = g),
          (z.lastBaseUpdate = c)));
    }
    if (o !== null) {
      var P = i.baseState;
      (l = 0), (z = g = c = null), (s = o);
      do {
        var T = s.lane,
          F = s.eventTime;
        if ((r & T) === T) {
          z !== null &&
            (z = z.next =
              {
                eventTime: F,
                lane: 0,
                tag: s.tag,
                payload: s.payload,
                callback: s.callback,
                next: null,
              });
          e: {
            var D = e,
              B = s;
            switch (((T = t), (F = n), B.tag)) {
              case 1:
                if (((D = B.payload), typeof D == "function")) {
                  P = D.call(F, P, T);
                  break e;
                }
                P = D;
                break e;
              case 3:
                D.flags = (D.flags & -65537) | 128;
              case 0:
                if (
                  ((D = B.payload),
                  (T = typeof D == "function" ? D.call(F, P, T) : D),
                  T == null)
                )
                  break e;
                P = N({}, P, T);
                break e;
              case 2:
                _n = !0;
            }
          }
          s.callback !== null &&
            s.lane !== 0 &&
            ((e.flags |= 64),
            (T = i.effects),
            T === null ? (i.effects = [s]) : T.push(s));
        } else
          (F = {
            eventTime: F,
            lane: T,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          }),
            z === null ? ((g = z = F), (c = P)) : (z = z.next = F),
            (l |= T);
        if (((s = s.next), s === null)) {
          if (((s = i.shared.pending), s === null)) break;
          (T = s),
            (s = T.next),
            (T.next = null),
            (i.lastBaseUpdate = T),
            (i.shared.pending = null);
        }
      } while (!0);
      if (
        (z === null && (c = P),
        (i.baseState = c),
        (i.firstBaseUpdate = g),
        (i.lastBaseUpdate = z),
        (t = i.shared.interleaved),
        t !== null)
      ) {
        i = t;
        do (l |= i.lane), (i = i.next);
        while (i !== t);
      } else o === null && (i.shared.lanes = 0);
      (Kn |= l), (e.lanes = l), (e.memoizedState = P);
    }
  }
  function bs(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          i = r.callback;
        if (i !== null) {
          if (((r.callback = null), (r = n), typeof i != "function"))
            throw Error(m(191, i));
          i.call(r);
        }
      }
  }
  var vi = {},
    Jt = Sn(vi),
    gi = Sn(vi),
    yi = Sn(vi);
  function Yn(e) {
    if (e === vi) throw Error(m(174));
    return e;
  }
  function Hl(e, t) {
    switch ((ke(yi, t), ke(gi, e), ke(Jt, vi), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = se(t, e));
    }
    ze(Jt), ke(Jt, t);
  }
  function Lr() {
    ze(Jt), ze(gi), ze(yi);
  }
  function Us(e) {
    Yn(yi.current);
    var t = Yn(Jt.current),
      n = se(t, e.type);
    t !== n && (ke(gi, e), ke(Jt, n));
  }
  function Gl(e) {
    gi.current === e && (ze(Jt), ze(gi));
  }
  var Ne = Sn(0);
  function So(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var $l = [];
  function Ql() {
    for (var e = 0; e < $l.length; e++)
      $l[e]._workInProgressVersionPrimary = null;
    $l.length = 0;
  }
  var ko = H.ReactCurrentDispatcher,
    Yl = H.ReactCurrentBatchConfig,
    qn = 0,
    je = null,
    Ve = null,
    Qe = null,
    Eo = !1,
    wi = !1,
    xi = 0,
    lc = 0;
  function rt() {
    throw Error(m(321));
  }
  function ql(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Ut(e[n], t[n])) return !1;
    return !0;
  }
  function Kl(e, t, n, r, i, o) {
    if (
      ((qn = o),
      (je = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ko.current = e === null || e.memoizedState === null ? cc : dc),
      (e = n(r, i)),
      wi)
    ) {
      o = 0;
      do {
        if (((wi = !1), (xi = 0), 25 <= o)) throw Error(m(301));
        (o += 1),
          (Qe = Ve = null),
          (t.updateQueue = null),
          (ko.current = fc),
          (e = n(r, i));
      } while (wi);
    }
    if (
      ((ko.current = To),
      (t = Ve !== null && Ve.next !== null),
      (qn = 0),
      (Qe = Ve = je = null),
      (Eo = !1),
      t)
    )
      throw Error(m(300));
    return e;
  }
  function Xl() {
    var e = xi !== 0;
    return (xi = 0), e;
  }
  function en() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Qe === null ? (je.memoizedState = Qe = e) : (Qe = Qe.next = e), Qe;
  }
  function jt() {
    if (Ve === null) {
      var e = je.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ve.next;
    var t = Qe === null ? je.memoizedState : Qe.next;
    if (t !== null) (Qe = t), (Ve = e);
    else {
      if (e === null) throw Error(m(310));
      (Ve = e),
        (e = {
          memoizedState: Ve.memoizedState,
          baseState: Ve.baseState,
          baseQueue: Ve.baseQueue,
          queue: Ve.queue,
          next: null,
        }),
        Qe === null ? (je.memoizedState = Qe = e) : (Qe = Qe.next = e);
    }
    return Qe;
  }
  function Si(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Zl(e) {
    var t = jt(),
      n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = Ve,
      i = r.baseQueue,
      o = n.pending;
    if (o !== null) {
      if (i !== null) {
        var l = i.next;
        (i.next = o.next), (o.next = l);
      }
      (r.baseQueue = i = o), (n.pending = null);
    }
    if (i !== null) {
      (o = i.next), (r = r.baseState);
      var s = (l = null),
        c = null,
        g = o;
      do {
        var z = g.lane;
        if ((qn & z) === z)
          c !== null &&
            (c = c.next =
              {
                lane: 0,
                action: g.action,
                hasEagerState: g.hasEagerState,
                eagerState: g.eagerState,
                next: null,
              }),
            (r = g.hasEagerState ? g.eagerState : e(r, g.action));
        else {
          var P = {
            lane: z,
            action: g.action,
            hasEagerState: g.hasEagerState,
            eagerState: g.eagerState,
            next: null,
          };
          c === null ? ((s = c = P), (l = r)) : (c = c.next = P),
            (je.lanes |= z),
            (Kn |= z);
        }
        g = g.next;
      } while (g !== null && g !== o);
      c === null ? (l = r) : (c.next = s),
        Ut(r, t.memoizedState) || (mt = !0),
        (t.memoizedState = r),
        (t.baseState = l),
        (t.baseQueue = c),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      i = e;
      do (o = i.lane), (je.lanes |= o), (Kn |= o), (i = i.next);
      while (i !== e);
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Jl(e) {
    var t = jt(),
      n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      i = n.pending,
      o = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var l = (i = i.next);
      do (o = e(o, l.action)), (l = l.next);
      while (l !== i);
      Ut(o, t.memoizedState) || (mt = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o);
    }
    return [o, r];
  }
  function Ds() {}
  function Vs(e, t) {
    var n = je,
      r = jt(),
      i = t(),
      o = !Ut(r.memoizedState, i);
    if (
      (o && ((r.memoizedState = i), (mt = !0)),
      (r = r.queue),
      ea(Hs.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (Qe !== null && Qe.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        ki(9, Ws.bind(null, n, r, i, t), void 0, null),
        Ye === null)
      )
        throw Error(m(349));
      qn & 30 || Bs(n, t, i);
    }
    return i;
  }
  function Bs(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = je.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (je.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function Ws(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Gs(t) && $s(e);
  }
  function Hs(e, t, n) {
    return n(function () {
      Gs(t) && $s(e);
    });
  }
  function Gs(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Ut(e, n);
    } catch {
      return !0;
    }
  }
  function $s(e) {
    var t = fn(e, 1);
    t !== null && Ht(t, e, 1, -1);
  }
  function Qs(e) {
    var t = en();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Si,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = uc.bind(null, je, e)),
      [t.memoizedState, e]
    );
  }
  function ki(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = je.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (je.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Ys() {
    return jt().memoizedState;
  }
  function _o(e, t, n, r) {
    var i = en();
    (je.flags |= e),
      (i.memoizedState = ki(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function Co(e, t, n, r) {
    var i = jt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Ve !== null) {
      var l = Ve.memoizedState;
      if (((o = l.destroy), r !== null && ql(r, l.deps))) {
        i.memoizedState = ki(t, n, o, r);
        return;
      }
    }
    (je.flags |= e), (i.memoizedState = ki(1 | t, n, o, r));
  }
  function qs(e, t) {
    return _o(8390656, 8, e, t);
  }
  function ea(e, t) {
    return Co(2048, 8, e, t);
  }
  function Ks(e, t) {
    return Co(4, 2, e, t);
  }
  function Xs(e, t) {
    return Co(4, 4, e, t);
  }
  function Zs(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Js(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), Co(4, 4, Zs.bind(null, t, e), n)
    );
  }
  function ta() {}
  function eu(e, t) {
    var n = jt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ql(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function tu(e, t) {
    var n = jt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ql(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function nu(e, t, n) {
    return qn & 21
      ? (Ut(n, t) ||
          ((n = Bi()), (je.lanes |= n), (Kn |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (mt = !0)), (e.memoizedState = n));
  }
  function ac(e, t) {
    var n = ge;
    (ge = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = Yl.transition;
    Yl.transition = {};
    try {
      e(!1), t();
    } finally {
      (ge = n), (Yl.transition = r);
    }
  }
  function ru() {
    return jt().memoizedState;
  }
  function sc(e, t, n) {
    var r = Mn(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      iu(e))
    )
      ou(t, n);
    else if (((n = Fs(e, t, n, r)), n !== null)) {
      var i = ct();
      Ht(n, e, r, i), lu(n, t, r);
    }
  }
  function uc(e, t, n) {
    var r = Mn(e),
      i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (iu(e)) ou(t, i);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var l = t.lastRenderedState,
            s = o(l, n);
          if (((i.hasEagerState = !0), (i.eagerState = s), Ut(s, l))) {
            var c = t.interleaved;
            c === null
              ? ((i.next = i), Bl(t))
              : ((i.next = c.next), (c.next = i)),
              (t.interleaved = i);
            return;
          }
        } catch {
        } finally {
        }
      (n = Fs(e, t, i, r)),
        n !== null && ((i = ct()), Ht(n, e, r, i), lu(n, t, r));
    }
  }
  function iu(e) {
    var t = e.alternate;
    return e === je || (t !== null && t === je);
  }
  function ou(e, t) {
    wi = Eo = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function lu(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Zr(e, n);
    }
  }
  var To = {
      readContext: Nt,
      useCallback: rt,
      useContext: rt,
      useEffect: rt,
      useImperativeHandle: rt,
      useInsertionEffect: rt,
      useLayoutEffect: rt,
      useMemo: rt,
      useReducer: rt,
      useRef: rt,
      useState: rt,
      useDebugValue: rt,
      useDeferredValue: rt,
      useTransition: rt,
      useMutableSource: rt,
      useSyncExternalStore: rt,
      useId: rt,
      unstable_isNewReconciler: !1,
    },
    cc = {
      readContext: Nt,
      useCallback: function (e, t) {
        return (en().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: Nt,
      useEffect: qs,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          _o(4194308, 4, Zs.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return _o(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return _o(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = en();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = en();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = sc.bind(null, je, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = en();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Qs,
      useDebugValue: ta,
      useDeferredValue: function (e) {
        return (en().memoizedState = e);
      },
      useTransition: function () {
        var e = Qs(!1),
          t = e[0];
        return (e = ac.bind(null, e[1])), (en().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = je,
          i = en();
        if (Pe) {
          if (n === void 0) throw Error(m(407));
          n = n();
        } else {
          if (((n = t()), Ye === null)) throw Error(m(349));
          qn & 30 || Bs(r, t, n);
        }
        i.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (i.queue = o),
          qs(Hs.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          ki(9, Ws.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = en(),
          t = Ye.identifierPrefix;
        if (Pe) {
          var n = dn,
            r = cn;
          (n = (r & ~(1 << (32 - wt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = xi++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = lc++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    dc = {
      readContext: Nt,
      useCallback: eu,
      useContext: Nt,
      useEffect: ea,
      useImperativeHandle: Js,
      useInsertionEffect: Ks,
      useLayoutEffect: Xs,
      useMemo: tu,
      useReducer: Zl,
      useRef: Ys,
      useState: function () {
        return Zl(Si);
      },
      useDebugValue: ta,
      useDeferredValue: function (e) {
        var t = jt();
        return nu(t, Ve.memoizedState, e);
      },
      useTransition: function () {
        var e = Zl(Si)[0],
          t = jt().memoizedState;
        return [e, t];
      },
      useMutableSource: Ds,
      useSyncExternalStore: Vs,
      useId: ru,
      unstable_isNewReconciler: !1,
    },
    fc = {
      readContext: Nt,
      useCallback: eu,
      useContext: Nt,
      useEffect: ea,
      useImperativeHandle: Js,
      useInsertionEffect: Ks,
      useLayoutEffect: Xs,
      useMemo: tu,
      useReducer: Jl,
      useRef: Ys,
      useState: function () {
        return Jl(Si);
      },
      useDebugValue: ta,
      useDeferredValue: function (e) {
        var t = jt();
        return Ve === null ? (t.memoizedState = e) : nu(t, Ve.memoizedState, e);
      },
      useTransition: function () {
        var e = Jl(Si)[0],
          t = jt().memoizedState;
        return [e, t];
      },
      useMutableSource: Ds,
      useSyncExternalStore: Vs,
      useId: ru,
      unstable_isNewReconciler: !1,
    };
  function Vt(e, t) {
    if (e && e.defaultProps) {
      (t = N({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function na(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : N({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var zo = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? an(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = ct(),
        i = Mn(e),
        o = pn(r, i);
      (o.payload = t),
        n != null && (o.callback = n),
        (t = Cn(e, o, i)),
        t !== null && (Ht(t, e, i, r), wo(t, e, i));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = ct(),
        i = Mn(e),
        o = pn(r, i);
      (o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = Cn(e, o, i)),
        t !== null && (Ht(t, e, i, r), wo(t, e, i));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = ct(),
        r = Mn(e),
        i = pn(n, r);
      (i.tag = 2),
        t != null && (i.callback = t),
        (t = Cn(e, i, r)),
        t !== null && (Ht(t, e, r, n), wo(t, e, r));
    },
  };
  function au(e, t, n, r, i, o, l) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, o, l)
        : t.prototype && t.prototype.isPureReactComponent
          ? !si(n, r) || !si(i, o)
          : !0
    );
  }
  function su(e, t, n) {
    var r = !1,
      i = kn,
      o = t.contextType;
    return (
      typeof o == "object" && o !== null
        ? (o = Nt(o))
        : ((i = pt(t) ? Hn : nt.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? Tr(e, i) : kn)),
      (t = new t(n, o)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = zo),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = i),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function uu(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && zo.enqueueReplaceState(t, t.state, null);
  }
  function ra(e, t, n, r) {
    var i = e.stateNode;
    (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Wl(e);
    var o = t.contextType;
    typeof o == "object" && o !== null
      ? (i.context = Nt(o))
      : ((o = pt(t) ? Hn : nt.current), (i.context = Tr(e, o))),
      (i.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == "function" && (na(e, t, o, n), (i.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function" ||
        (typeof i.UNSAFE_componentWillMount != "function" &&
          typeof i.componentWillMount != "function") ||
        ((t = i.state),
        typeof i.componentWillMount == "function" && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == "function" &&
          i.UNSAFE_componentWillMount(),
        t !== i.state && zo.enqueueReplaceState(i, i.state, null),
        xo(e, n, i, r),
        (i.state = e.memoizedState)),
      typeof i.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Ir(e, t) {
    try {
      var n = "",
        r = t;
      do (n += j(r)), (r = r.return);
      while (r);
      var i = n;
    } catch (o) {
      i =
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
  }
  function ia(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function oa(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var pc = typeof WeakMap == "function" ? WeakMap : Map;
  function cu(e, t, n) {
    (n = pn(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        Io || ((Io = !0), (xa = r)), oa(e, t);
      }),
      n
    );
  }
  function du(e, t, n) {
    (n = pn(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var i = t.value;
      (n.payload = function () {
        return r(i);
      }),
        (n.callback = function () {
          oa(e, t);
        });
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == "function" &&
        (n.callback = function () {
          oa(e, t),
            typeof r != "function" &&
              (zn === null ? (zn = new Set([this])) : zn.add(this));
          var l = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: l !== null ? l : "",
          });
        }),
      n
    );
  }
  function fu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new pc();
      var i = new Set();
      r.set(t, i);
    } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
    i.has(n) || (i.add(n), (e = zc.bind(null, e, t, n)), t.then(e, e));
  }
  function pu(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function mu(e, t, n, r, i) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = i), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = pn(-1, 1)), (t.tag = 2), Cn(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var mc = H.ReactCurrentOwner,
    mt = !1;
  function ut(e, t, n, r) {
    t.child = e === null ? Is(t, null, n, r) : Or(t, e.child, n, r);
  }
  function hu(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return (
      jr(t, i),
      (r = Kl(e, t, n, r, o, i)),
      (n = Xl()),
      e !== null && !mt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~i),
          mn(e, t, i))
        : (Pe && n && Ll(t), (t.flags |= 1), ut(e, t, r, i), t.child)
    );
  }
  function vu(e, t, n, r, i) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" &&
        !za(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), gu(e, t, o, r, i))
        : ((e = Do(n.type, null, r, t, t.mode, i)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((o = e.child), !(e.lanes & i))) {
      var l = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : si), n(l, r) && e.ref === t.ref)
      )
        return mn(e, t, i);
    }
    return (
      (t.flags |= 1),
      (e = Nn(o, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function gu(e, t, n, r, i) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (si(o, r) && e.ref === t.ref)
        if (((mt = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
          e.flags & 131072 && (mt = !0);
        else return (t.lanes = e.lanes), mn(e, t, i);
    }
    return la(e, t, n, r, i);
  }
  function yu(e, t, n) {
    var r = t.pendingProps,
      i = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          ke(Ar, Et),
          (Et |= n);
      else {
        if (!(n & 1073741824))
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            ke(Ar, Et),
            (Et |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = o !== null ? o.baseLanes : n),
          ke(Ar, Et),
          (Et |= r);
      }
    else
      o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        ke(Ar, Et),
        (Et |= r);
    return ut(e, t, i, n), t.child;
  }
  function wu(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function la(e, t, n, r, i) {
    var o = pt(n) ? Hn : nt.current;
    return (
      (o = Tr(t, o)),
      jr(t, i),
      (n = Kl(e, t, n, r, o, i)),
      (r = Xl()),
      e !== null && !mt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~i),
          mn(e, t, i))
        : (Pe && r && Ll(t), (t.flags |= 1), ut(e, t, n, i), t.child)
    );
  }
  function xu(e, t, n, r, i) {
    if (pt(n)) {
      var o = !0;
      co(t);
    } else o = !1;
    if ((jr(t, i), t.stateNode === null))
      Mo(e, t), su(t, n, r), ra(t, n, r, i), (r = !0);
    else if (e === null) {
      var l = t.stateNode,
        s = t.memoizedProps;
      l.props = s;
      var c = l.context,
        g = n.contextType;
      typeof g == "object" && g !== null
        ? (g = Nt(g))
        : ((g = pt(n) ? Hn : nt.current), (g = Tr(t, g)));
      var z = n.getDerivedStateFromProps,
        P =
          typeof z == "function" ||
          typeof l.getSnapshotBeforeUpdate == "function";
      P ||
        (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
          typeof l.componentWillReceiveProps != "function") ||
        ((s !== r || c !== g) && uu(t, l, r, g)),
        (_n = !1);
      var T = t.memoizedState;
      (l.state = T),
        xo(t, r, l, i),
        (c = t.memoizedState),
        s !== r || T !== c || ft.current || _n
          ? (typeof z == "function" && (na(t, n, z, r), (c = t.memoizedState)),
            (s = _n || au(t, n, s, r, T, c, g))
              ? (P ||
                  (typeof l.UNSAFE_componentWillMount != "function" &&
                    typeof l.componentWillMount != "function") ||
                  (typeof l.componentWillMount == "function" &&
                    l.componentWillMount(),
                  typeof l.UNSAFE_componentWillMount == "function" &&
                    l.UNSAFE_componentWillMount()),
                typeof l.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof l.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = c)),
            (l.props = r),
            (l.state = c),
            (l.context = g),
            (r = s))
          : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (l = t.stateNode),
        As(e, t),
        (s = t.memoizedProps),
        (g = t.type === t.elementType ? s : Vt(t.type, s)),
        (l.props = g),
        (P = t.pendingProps),
        (T = l.context),
        (c = n.contextType),
        typeof c == "object" && c !== null
          ? (c = Nt(c))
          : ((c = pt(n) ? Hn : nt.current), (c = Tr(t, c)));
      var F = n.getDerivedStateFromProps;
      (z =
        typeof F == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function") ||
        (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
          typeof l.componentWillReceiveProps != "function") ||
        ((s !== P || T !== c) && uu(t, l, r, c)),
        (_n = !1),
        (T = t.memoizedState),
        (l.state = T),
        xo(t, r, l, i);
      var D = t.memoizedState;
      s !== P || T !== D || ft.current || _n
        ? (typeof F == "function" && (na(t, n, F, r), (D = t.memoizedState)),
          (g = _n || au(t, n, g, r, T, D, c) || !1)
            ? (z ||
                (typeof l.UNSAFE_componentWillUpdate != "function" &&
                  typeof l.componentWillUpdate != "function") ||
                (typeof l.componentWillUpdate == "function" &&
                  l.componentWillUpdate(r, D, c),
                typeof l.UNSAFE_componentWillUpdate == "function" &&
                  l.UNSAFE_componentWillUpdate(r, D, c)),
              typeof l.componentDidUpdate == "function" && (t.flags |= 4),
              typeof l.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof l.componentDidUpdate != "function" ||
                (s === e.memoizedProps && T === e.memoizedState) ||
                (t.flags |= 4),
              typeof l.getSnapshotBeforeUpdate != "function" ||
                (s === e.memoizedProps && T === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = D)),
          (l.props = r),
          (l.state = D),
          (l.context = c),
          (r = g))
        : (typeof l.componentDidUpdate != "function" ||
            (s === e.memoizedProps && T === e.memoizedState) ||
            (t.flags |= 4),
          typeof l.getSnapshotBeforeUpdate != "function" ||
            (s === e.memoizedProps && T === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return aa(e, t, n, r, o, i);
  }
  function aa(e, t, n, r, i, o) {
    wu(e, t);
    var l = (t.flags & 128) !== 0;
    if (!r && !l) return i && Cs(t, n, !1), mn(e, t, o);
    (r = t.stateNode), (mc.current = t);
    var s =
      l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && l
        ? ((t.child = Or(t, e.child, null, o)), (t.child = Or(t, null, s, o)))
        : ut(e, t, s, o),
      (t.memoizedState = r.state),
      i && Cs(t, n, !0),
      t.child
    );
  }
  function Su(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Es(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Es(e, t.context, !1),
      Hl(e, t.containerInfo);
  }
  function ku(e, t, n, r, i) {
    return Mr(), Rl(i), (t.flags |= 256), ut(e, t, n, r), t.child;
  }
  var sa = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ua(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Eu(e, t, n) {
    var r = t.pendingProps,
      i = Ne.current,
      o = !1,
      l = (t.flags & 128) !== 0,
      s;
    if (
      ((s = l) ||
        (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
      s
        ? ((o = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (i |= 1),
      ke(Ne, i & 1),
      e === null)
    )
      return (
        Al(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((l = r.children),
            (e = r.fallback),
            o
              ? ((r = t.mode),
                (o = t.child),
                (l = { mode: "hidden", children: l }),
                !(r & 1) && o !== null
                  ? ((o.childLanes = 0), (o.pendingProps = l))
                  : (o = Vo(l, r, 0, null)),
                (e = er(e, r, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = ua(n)),
                (t.memoizedState = sa),
                e)
              : ca(t, l))
      );
    if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
      return hc(e, t, l, r, s, i, n);
    if (o) {
      (o = r.fallback), (l = t.mode), (i = e.child), (s = i.sibling);
      var c = { mode: "hidden", children: r.children };
      return (
        !(l & 1) && t.child !== i
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = c),
            (t.deletions = null))
          : ((r = Nn(i, c)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
        s !== null ? (o = Nn(s, o)) : ((o = er(o, l, n, null)), (o.flags |= 2)),
        (o.return = t),
        (r.return = t),
        (r.sibling = o),
        (t.child = r),
        (r = o),
        (o = t.child),
        (l = e.child.memoizedState),
        (l =
          l === null
            ? ua(n)
            : {
                baseLanes: l.baseLanes | n,
                cachePool: null,
                transitions: l.transitions,
              }),
        (o.memoizedState = l),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = sa),
        r
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (r = Nn(o, { mode: "visible", children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function ca(e, t) {
    return (
      (t = Vo({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Po(e, t, n, r) {
    return (
      r !== null && Rl(r),
      Or(t, e.child, null, n),
      (e = ca(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function hc(e, t, n, r, i, o, l) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = ia(Error(m(422)))), Po(e, t, l, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((o = r.fallback),
            (i = t.mode),
            (r = Vo({ mode: "visible", children: r.children }, i, 0, null)),
            (o = er(o, i, l, null)),
            (o.flags |= 2),
            (r.return = t),
            (o.return = t),
            (r.sibling = o),
            (t.child = r),
            t.mode & 1 && Or(t, e.child, null, l),
            (t.child.memoizedState = ua(l)),
            (t.memoizedState = sa),
            o);
    if (!(t.mode & 1)) return Po(e, t, l, null);
    if (i.data === "$!") {
      if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst;
      return (
        (r = s), (o = Error(m(419))), (r = ia(o, r, void 0)), Po(e, t, l, r)
      );
    }
    if (((s = (l & e.childLanes) !== 0), mt || s)) {
      if (((r = Ye), r !== null)) {
        switch (l & -l) {
          case 4:
            i = 2;
            break;
          case 16:
            i = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            i = 32;
            break;
          case 536870912:
            i = 268435456;
            break;
          default:
            i = 0;
        }
        (i = i & (r.suspendedLanes | l) ? 0 : i),
          i !== 0 &&
            i !== o.retryLane &&
            ((o.retryLane = i), fn(e, i), Ht(r, e, i, -1));
      }
      return Ta(), (r = ia(Error(m(421)))), Po(e, t, l, r);
    }
    return i.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Pc.bind(null, e)),
        (i._reactRetry = t),
        null)
      : ((e = o.treeContext),
        (kt = xn(i.nextSibling)),
        (St = t),
        (Pe = !0),
        (Dt = null),
        e !== null &&
          ((Mt[Ot++] = cn),
          (Mt[Ot++] = dn),
          (Mt[Ot++] = Gn),
          (cn = e.id),
          (dn = e.overflow),
          (Gn = t)),
        (t = ca(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function _u(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Vl(e.return, t, n);
  }
  function da(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: i,
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = r),
        (o.tail = n),
        (o.tailMode = i));
  }
  function Cu(e, t, n) {
    var r = t.pendingProps,
      i = r.revealOrder,
      o = r.tail;
    if ((ut(e, t, r.children, n), (r = Ne.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && _u(e, n, t);
          else if (e.tag === 19) _u(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((ke(Ne, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (i) {
        case "forwards":
          for (n = t.child, i = null; n !== null; )
            (e = n.alternate),
              e !== null && So(e) === null && (i = n),
              (n = n.sibling);
          (n = i),
            n === null
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null)),
            da(t, !1, i, n, o);
          break;
        case "backwards":
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (((e = i.alternate), e !== null && So(e) === null)) {
              t.child = i;
              break;
            }
            (e = i.sibling), (i.sibling = n), (n = i), (i = e);
          }
          da(t, !0, n, null, o);
          break;
        case "together":
          da(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Mo(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function mn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Kn |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(m(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Nn(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = Nn(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function vc(e, t, n) {
    switch (t.tag) {
      case 3:
        Su(t), Mr();
        break;
      case 5:
        Us(t);
        break;
      case 1:
        pt(t.type) && co(t);
        break;
      case 4:
        Hl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          i = t.memoizedProps.value;
        ke(go, r._currentValue), (r._currentValue = i);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (ke(Ne, Ne.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
              ? Eu(e, t, n)
              : (ke(Ne, Ne.current & 1),
                (e = mn(e, t, n)),
                e !== null ? e.sibling : null);
        ke(Ne, Ne.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return Cu(e, t, n);
          t.flags |= 128;
        }
        if (
          ((i = t.memoizedState),
          i !== null &&
            ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          ke(Ne, Ne.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), yu(e, t, n);
    }
    return mn(e, t, n);
  }
  var Tu, fa, zu, Pu;
  (Tu = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (fa = function () {}),
    (zu = function (e, t, n, r) {
      var i = e.memoizedProps;
      if (i !== r) {
        (e = t.stateNode), Yn(Jt.current);
        var o = null;
        switch (n) {
          case "input":
            (i = vn(e, i)), (r = vn(e, r)), (o = []);
            break;
          case "select":
            (i = N({}, i, { value: void 0 })),
              (r = N({}, r, { value: void 0 })),
              (o = []);
            break;
          case "textarea":
            (i = rn(e, i)), (r = rn(e, r)), (o = []);
            break;
          default:
            typeof i.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = ao);
        }
        Rt(n, r);
        var l;
        n = null;
        for (g in i)
          if (!r.hasOwnProperty(g) && i.hasOwnProperty(g) && i[g] != null)
            if (g === "style") {
              var s = i[g];
              for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
            } else
              g !== "dangerouslySetInnerHTML" &&
                g !== "children" &&
                g !== "suppressContentEditableWarning" &&
                g !== "suppressHydrationWarning" &&
                g !== "autoFocus" &&
                (G.hasOwnProperty(g)
                  ? o || (o = [])
                  : (o = o || []).push(g, null));
        for (g in r) {
          var c = r[g];
          if (
            ((s = i != null ? i[g] : void 0),
            r.hasOwnProperty(g) && c !== s && (c != null || s != null))
          )
            if (g === "style")
              if (s) {
                for (l in s)
                  !s.hasOwnProperty(l) ||
                    (c && c.hasOwnProperty(l)) ||
                    (n || (n = {}), (n[l] = ""));
                for (l in c)
                  c.hasOwnProperty(l) &&
                    s[l] !== c[l] &&
                    (n || (n = {}), (n[l] = c[l]));
              } else n || (o || (o = []), o.push(g, n)), (n = c);
            else
              g === "dangerouslySetInnerHTML"
                ? ((c = c ? c.__html : void 0),
                  (s = s ? s.__html : void 0),
                  c != null && s !== c && (o = o || []).push(g, c))
                : g === "children"
                  ? (typeof c != "string" && typeof c != "number") ||
                    (o = o || []).push(g, "" + c)
                  : g !== "suppressContentEditableWarning" &&
                    g !== "suppressHydrationWarning" &&
                    (G.hasOwnProperty(g)
                      ? (c != null && g === "onScroll" && Te("scroll", e),
                        o || s === c || (o = []))
                      : (o = o || []).push(g, c));
        }
        n && (o = o || []).push("style", n);
        var g = o;
        (t.updateQueue = g) && (t.flags |= 4);
      }
    }),
    (Pu = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function Ei(e, t) {
    if (!Pe)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function it(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var i = e.child; i !== null; )
        (n |= i.lanes | i.childLanes),
          (r |= i.subtreeFlags & 14680064),
          (r |= i.flags & 14680064),
          (i.return = e),
          (i = i.sibling);
    else
      for (i = e.child; i !== null; )
        (n |= i.lanes | i.childLanes),
          (r |= i.subtreeFlags),
          (r |= i.flags),
          (i.return = e),
          (i = i.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function gc(e, t, n) {
    var r = t.pendingProps;
    switch ((Il(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return it(t), null;
      case 1:
        return pt(t.type) && uo(), it(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Lr(),
          ze(ft),
          ze(nt),
          Ql(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (ho(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), Dt !== null && (Ea(Dt), (Dt = null)))),
          fa(e, t),
          it(t),
          null
        );
      case 5:
        Gl(t);
        var i = Yn(yi.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          zu(e, t, n, r, i),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(m(166));
            return it(t), null;
          }
          if (((e = Yn(Jt.current)), ho(t))) {
            (r = t.stateNode), (n = t.type);
            var o = t.memoizedProps;
            switch (((r[Zt] = t), (r[pi] = o), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                Te("cancel", r), Te("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Te("load", r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < ci.length; i++) Te(ci[i], r);
                break;
              case "source":
                Te("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Te("error", r), Te("load", r);
                break;
              case "details":
                Te("toggle", r);
                break;
              case "input":
                _t(r, o), Te("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!o.multiple }),
                  Te("invalid", r);
                break;
              case "textarea":
                Ke(r, o), Te("invalid", r);
            }
            Rt(n, o), (i = null);
            for (var l in o)
              if (o.hasOwnProperty(l)) {
                var s = o[l];
                l === "children"
                  ? typeof s == "string"
                    ? r.textContent !== s &&
                      (o.suppressHydrationWarning !== !0 &&
                        lo(r.textContent, s, e),
                      (i = ["children", s]))
                    : typeof s == "number" &&
                      r.textContent !== "" + s &&
                      (o.suppressHydrationWarning !== !0 &&
                        lo(r.textContent, s, e),
                      (i = ["children", "" + s]))
                  : G.hasOwnProperty(l) &&
                    s != null &&
                    l === "onScroll" &&
                    Te("scroll", r);
              }
            switch (n) {
              case "input":
                nn(r), At(r, o, !0);
                break;
              case "textarea":
                nn(r), Qt(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = ao);
            }
            (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (l = i.nodeType === 9 ? i : i.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = ne(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = l.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                    ? (e = l.createElement(n, { is: r.is }))
                    : ((e = l.createElement(n)),
                      n === "select" &&
                        ((l = e),
                        r.multiple
                          ? (l.multiple = !0)
                          : r.size && (l.size = r.size)))
                : (e = l.createElementNS(e, n)),
              (e[Zt] = t),
              (e[pi] = r),
              Tu(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((l = nr(n, r)), n)) {
                case "dialog":
                  Te("cancel", e), Te("close", e), (i = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Te("load", e), (i = r);
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < ci.length; i++) Te(ci[i], e);
                  i = r;
                  break;
                case "source":
                  Te("error", e), (i = r);
                  break;
                case "img":
                case "image":
                case "link":
                  Te("error", e), Te("load", e), (i = r);
                  break;
                case "details":
                  Te("toggle", e), (i = r);
                  break;
                case "input":
                  _t(e, r), (i = vn(e, r)), Te("invalid", e);
                  break;
                case "option":
                  i = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (i = N({}, r, { value: void 0 })),
                    Te("invalid", e);
                  break;
                case "textarea":
                  Ke(e, r), (i = rn(e, r)), Te("invalid", e);
                  break;
                default:
                  i = r;
              }
              Rt(n, i), (s = i);
              for (o in s)
                if (s.hasOwnProperty(o)) {
                  var c = s[o];
                  o === "style"
                    ? Je(e, c)
                    : o === "dangerouslySetInnerHTML"
                      ? ((c = c ? c.__html : void 0), c != null && he(e, c))
                      : o === "children"
                        ? typeof c == "string"
                          ? (n !== "textarea" || c !== "") && $e(e, c)
                          : typeof c == "number" && $e(e, "" + c)
                        : o !== "suppressContentEditableWarning" &&
                          o !== "suppressHydrationWarning" &&
                          o !== "autoFocus" &&
                          (G.hasOwnProperty(o)
                            ? c != null && o === "onScroll" && Te("scroll", e)
                            : c != null && q(e, o, c, l));
                }
              switch (n) {
                case "input":
                  nn(e), At(e, r, !1);
                  break;
                case "textarea":
                  nn(e), Qt(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + pe(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? Ct(e, !!r.multiple, o, !1)
                      : r.defaultValue != null &&
                        Ct(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof i.onClick == "function" && (e.onclick = ao);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return it(t), null;
      case 6:
        if (e && t.stateNode != null) Pu(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(m(166));
          if (((n = Yn(yi.current)), Yn(Jt.current), ho(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Zt] = t),
              (o = r.nodeValue !== n) && ((e = St), e !== null))
            )
              switch (e.tag) {
                case 3:
                  lo(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    lo(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[Zt] = t),
              (t.stateNode = r);
        }
        return it(t), null;
      case 13:
        if (
          (ze(Ne),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Pe && kt !== null && t.mode & 1 && !(t.flags & 128))
            Ns(), Mr(), (t.flags |= 98560), (o = !1);
          else if (((o = ho(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(m(318));
              if (
                ((o = t.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
              )
                throw Error(m(317));
              o[Zt] = t;
            } else
              Mr(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            it(t), (o = !1);
          } else Dt !== null && (Ea(Dt), (Dt = null)), (o = !0);
          if (!o) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || Ne.current & 1 ? Be === 0 && (Be = 3) : Ta())),
            t.updateQueue !== null && (t.flags |= 4),
            it(t),
            null);
      case 4:
        return (
          Lr(),
          fa(e, t),
          e === null && di(t.stateNode.containerInfo),
          it(t),
          null
        );
      case 10:
        return Dl(t.type._context), it(t), null;
      case 17:
        return pt(t.type) && uo(), it(t), null;
      case 19:
        if ((ze(Ne), (o = t.memoizedState), o === null)) return it(t), null;
        if (((r = (t.flags & 128) !== 0), (l = o.rendering), l === null))
          if (r) Ei(o, !1);
          else {
            if (Be !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((l = So(e)), l !== null)) {
                  for (
                    t.flags |= 128,
                      Ei(o, !1),
                      r = l.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (o = n),
                      (e = r),
                      (o.flags &= 14680066),
                      (l = o.alternate),
                      l === null
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = l.childLanes),
                          (o.lanes = l.lanes),
                          (o.child = l.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = l.memoizedProps),
                          (o.memoizedState = l.memoizedState),
                          (o.updateQueue = l.updateQueue),
                          (o.type = l.type),
                          (e = l.dependencies),
                          (o.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return ke(Ne, (Ne.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null &&
              Oe() > Rr &&
              ((t.flags |= 128), (r = !0), Ei(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = So(l)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Ei(o, !0),
                o.tail === null &&
                  o.tailMode === "hidden" &&
                  !l.alternate &&
                  !Pe)
              )
                return it(t), null;
            } else
              2 * Oe() - o.renderingStartTime > Rr &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), Ei(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((l.sibling = t.child), (t.child = l))
            : ((n = o.last),
              n !== null ? (n.sibling = l) : (t.child = l),
              (o.last = l));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = Oe()),
            (t.sibling = null),
            (n = Ne.current),
            ke(Ne, r ? (n & 1) | 2 : n & 1),
            t)
          : (it(t), null);
      case 22:
      case 23:
        return (
          Ca(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? Et & 1073741824 &&
              (it(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : it(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, t.tag));
  }
  function yc(e, t) {
    switch ((Il(t), t.tag)) {
      case 1:
        return (
          pt(t.type) && uo(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Lr(),
          ze(ft),
          ze(nt),
          Ql(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return Gl(t), null;
      case 13:
        if (
          (ze(Ne), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(m(340));
          Mr();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return ze(Ne), null;
      case 4:
        return Lr(), null;
      case 10:
        return Dl(t.type._context), null;
      case 22:
      case 23:
        return Ca(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Oo = !1,
    ot = !1,
    wc = typeof WeakSet == "function" ? WeakSet : Set,
    R = null;
  function Fr(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          Ie(e, t, r);
        }
      else n.current = null;
  }
  function pa(e, t, n) {
    try {
      n();
    } catch (r) {
      Ie(e, t, r);
    }
  }
  var Mu = !1;
  function xc(e, t) {
    if (((Cl = Ce), (e = as()), gl(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var i = r.anchorOffset,
              o = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, o.nodeType;
            } catch {
              n = null;
              break e;
            }
            var l = 0,
              s = -1,
              c = -1,
              g = 0,
              z = 0,
              P = e,
              T = null;
            t: for (;;) {
              for (
                var F;
                P !== n || (i !== 0 && P.nodeType !== 3) || (s = l + i),
                  P !== o || (r !== 0 && P.nodeType !== 3) || (c = l + r),
                  P.nodeType === 3 && (l += P.nodeValue.length),
                  (F = P.firstChild) !== null;

              )
                (T = P), (P = F);
              for (;;) {
                if (P === e) break t;
                if (
                  (T === n && ++g === i && (s = l),
                  T === o && ++z === r && (c = l),
                  (F = P.nextSibling) !== null)
                )
                  break;
                (P = T), (T = P.parentNode);
              }
              P = F;
            }
            n = s === -1 || c === -1 ? null : { start: s, end: c };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Tl = { focusedElem: e, selectionRange: n }, Ce = !1, R = t;
      R !== null;

    )
      if (((t = R), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (R = e);
      else
        for (; R !== null; ) {
          t = R;
          try {
            var D = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (D !== null) {
                    var B = D.memoizedProps,
                      Re = D.memoizedState,
                      h = t.stateNode,
                      d = h.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? B : Vt(t.type, B),
                        Re
                      );
                    h.__reactInternalSnapshotBeforeUpdate = d;
                  }
                  break;
                case 3:
                  var v = t.stateNode.containerInfo;
                  v.nodeType === 1
                    ? (v.textContent = "")
                    : v.nodeType === 9 &&
                      v.documentElement &&
                      v.removeChild(v.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(m(163));
              }
          } catch (O) {
            Ie(t, t.return, O);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (R = e);
            break;
          }
          R = t.return;
        }
    return (D = Mu), (Mu = !1), D;
  }
  function _i(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var i = (r = r.next);
      do {
        if ((i.tag & e) === e) {
          var o = i.destroy;
          (i.destroy = void 0), o !== void 0 && pa(t, n, o);
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function No(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function ma(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function Ou(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Ou(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Zt],
          delete t[pi],
          delete t[Ol],
          delete t[nc],
          delete t[rc])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Nu(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ju(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Nu(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ha(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = ao));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ha(e, t, n), e = e.sibling; e !== null; )
        ha(e, t, n), (e = e.sibling);
  }
  function va(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (va(e, t, n), e = e.sibling; e !== null; )
        va(e, t, n), (e = e.sibling);
  }
  var Xe = null,
    Bt = !1;
  function Tn(e, t, n) {
    for (n = n.child; n !== null; ) Lu(e, t, n), (n = n.sibling);
  }
  function Lu(e, t, n) {
    if (Pt && typeof Pt.onCommitFiberUnmount == "function")
      try {
        Pt.onCommitFiberUnmount(ur, n);
      } catch {}
    switch (n.tag) {
      case 5:
        ot || Fr(n, t);
      case 6:
        var r = Xe,
          i = Bt;
        (Xe = null),
          Tn(e, t, n),
          (Xe = r),
          (Bt = i),
          Xe !== null &&
            (Bt
              ? ((e = Xe),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : Xe.removeChild(n.stateNode));
        break;
      case 18:
        Xe !== null &&
          (Bt
            ? ((e = Xe),
              (n = n.stateNode),
              e.nodeType === 8
                ? Ml(e.parentNode, n)
                : e.nodeType === 1 && Ml(e, n),
              C(e))
            : Ml(Xe, n.stateNode));
        break;
      case 4:
        (r = Xe),
          (i = Bt),
          (Xe = n.stateNode.containerInfo),
          (Bt = !0),
          Tn(e, t, n),
          (Xe = r),
          (Bt = i);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !ot &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          i = r = r.next;
          do {
            var o = i,
              l = o.destroy;
            (o = o.tag),
              l !== void 0 && (o & 2 || o & 4) && pa(n, t, l),
              (i = i.next);
          } while (i !== r);
        }
        Tn(e, t, n);
        break;
      case 1:
        if (
          !ot &&
          (Fr(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (s) {
            Ie(n, t, s);
          }
        Tn(e, t, n);
        break;
      case 21:
        Tn(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((ot = (r = ot) || n.memoizedState !== null), Tn(e, t, n), (ot = r))
          : Tn(e, t, n);
        break;
      default:
        Tn(e, t, n);
    }
  }
  function Iu(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new wc()),
        t.forEach(function (r) {
          var i = Mc.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(i, i));
        });
    }
  }
  function Wt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        try {
          var o = e,
            l = t,
            s = l;
          e: for (; s !== null; ) {
            switch (s.tag) {
              case 5:
                (Xe = s.stateNode), (Bt = !1);
                break e;
              case 3:
                (Xe = s.stateNode.containerInfo), (Bt = !0);
                break e;
              case 4:
                (Xe = s.stateNode.containerInfo), (Bt = !0);
                break e;
            }
            s = s.return;
          }
          if (Xe === null) throw Error(m(160));
          Lu(o, l, i), (Xe = null), (Bt = !1);
          var c = i.alternate;
          c !== null && (c.return = null), (i.return = null);
        } catch (g) {
          Ie(i, t, g);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Fu(t, e), (t = t.sibling);
  }
  function Fu(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Wt(t, e), tn(e), r & 4)) {
          try {
            _i(3, e, e.return), No(3, e);
          } catch (B) {
            Ie(e, e.return, B);
          }
          try {
            _i(5, e, e.return);
          } catch (B) {
            Ie(e, e.return, B);
          }
        }
        break;
      case 1:
        Wt(t, e), tn(e), r & 512 && n !== null && Fr(n, n.return);
        break;
      case 5:
        if (
          (Wt(t, e),
          tn(e),
          r & 512 && n !== null && Fr(n, n.return),
          e.flags & 32)
        ) {
          var i = e.stateNode;
          try {
            $e(i, "");
          } catch (B) {
            Ie(e, e.return, B);
          }
        }
        if (r & 4 && ((i = e.stateNode), i != null)) {
          var o = e.memoizedProps,
            l = n !== null ? n.memoizedProps : o,
            s = e.type,
            c = e.updateQueue;
          if (((e.updateQueue = null), c !== null))
            try {
              s === "input" && o.type === "radio" && o.name != null && Ln(i, o),
                nr(s, l);
              var g = nr(s, o);
              for (l = 0; l < c.length; l += 2) {
                var z = c[l],
                  P = c[l + 1];
                z === "style"
                  ? Je(i, P)
                  : z === "dangerouslySetInnerHTML"
                    ? he(i, P)
                    : z === "children"
                      ? $e(i, P)
                      : q(i, z, P, g);
              }
              switch (s) {
                case "input":
                  Gt(i, o);
                  break;
                case "textarea":
                  Tt(i, o);
                  break;
                case "select":
                  var T = i._wrapperState.wasMultiple;
                  i._wrapperState.wasMultiple = !!o.multiple;
                  var F = o.value;
                  F != null
                    ? Ct(i, !!o.multiple, F, !1)
                    : T !== !!o.multiple &&
                      (o.defaultValue != null
                        ? Ct(i, !!o.multiple, o.defaultValue, !0)
                        : Ct(i, !!o.multiple, o.multiple ? [] : "", !1));
              }
              i[pi] = o;
            } catch (B) {
              Ie(e, e.return, B);
            }
        }
        break;
      case 6:
        if ((Wt(t, e), tn(e), r & 4)) {
          if (e.stateNode === null) throw Error(m(162));
          (i = e.stateNode), (o = e.memoizedProps);
          try {
            i.nodeValue = o;
          } catch (B) {
            Ie(e, e.return, B);
          }
        }
        break;
      case 3:
        if (
          (Wt(t, e), tn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            C(t.containerInfo);
          } catch (B) {
            Ie(e, e.return, B);
          }
        break;
      case 4:
        Wt(t, e), tn(e);
        break;
      case 13:
        Wt(t, e),
          tn(e),
          (i = e.child),
          i.flags & 8192 &&
            ((o = i.memoizedState !== null),
            (i.stateNode.isHidden = o),
            !o ||
              (i.alternate !== null && i.alternate.memoizedState !== null) ||
              (wa = Oe())),
          r & 4 && Iu(e);
        break;
      case 22:
        if (
          ((z = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((ot = (g = ot) || z), Wt(t, e), (ot = g)) : Wt(t, e),
          tn(e),
          r & 8192)
        ) {
          if (
            ((g = e.memoizedState !== null),
            (e.stateNode.isHidden = g) && !z && e.mode & 1)
          )
            for (R = e, z = e.child; z !== null; ) {
              for (P = R = z; R !== null; ) {
                switch (((T = R), (F = T.child), T.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    _i(4, T, T.return);
                    break;
                  case 1:
                    Fr(T, T.return);
                    var D = T.stateNode;
                    if (typeof D.componentWillUnmount == "function") {
                      (r = T), (n = T.return);
                      try {
                        (t = r),
                          (D.props = t.memoizedProps),
                          (D.state = t.memoizedState),
                          D.componentWillUnmount();
                      } catch (B) {
                        Ie(r, n, B);
                      }
                    }
                    break;
                  case 5:
                    Fr(T, T.return);
                    break;
                  case 22:
                    if (T.memoizedState !== null) {
                      bu(P);
                      continue;
                    }
                }
                F !== null ? ((F.return = T), (R = F)) : bu(P);
              }
              z = z.sibling;
            }
          e: for (z = null, P = e; ; ) {
            if (P.tag === 5) {
              if (z === null) {
                z = P;
                try {
                  (i = P.stateNode),
                    g
                      ? ((o = i.style),
                        typeof o.setProperty == "function"
                          ? o.setProperty("display", "none", "important")
                          : (o.display = "none"))
                      : ((s = P.stateNode),
                        (c = P.memoizedProps.style),
                        (l =
                          c != null && c.hasOwnProperty("display")
                            ? c.display
                            : null),
                        (s.style.display = K("display", l)));
                } catch (B) {
                  Ie(e, e.return, B);
                }
              }
            } else if (P.tag === 6) {
              if (z === null)
                try {
                  P.stateNode.nodeValue = g ? "" : P.memoizedProps;
                } catch (B) {
                  Ie(e, e.return, B);
                }
            } else if (
              ((P.tag !== 22 && P.tag !== 23) ||
                P.memoizedState === null ||
                P === e) &&
              P.child !== null
            ) {
              (P.child.return = P), (P = P.child);
              continue;
            }
            if (P === e) break e;
            for (; P.sibling === null; ) {
              if (P.return === null || P.return === e) break e;
              z === P && (z = null), (P = P.return);
            }
            z === P && (z = null),
              (P.sibling.return = P.return),
              (P = P.sibling);
          }
        }
        break;
      case 19:
        Wt(t, e), tn(e), r & 4 && Iu(e);
        break;
      case 21:
        break;
      default:
        Wt(t, e), tn(e);
    }
  }
  function tn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Nu(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(m(160));
        }
        switch (r.tag) {
          case 5:
            var i = r.stateNode;
            r.flags & 32 && ($e(i, ""), (r.flags &= -33));
            var o = ju(e);
            va(e, o, i);
            break;
          case 3:
          case 4:
            var l = r.stateNode.containerInfo,
              s = ju(e);
            ha(e, s, l);
            break;
          default:
            throw Error(m(161));
        }
      } catch (c) {
        Ie(e, e.return, c);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Sc(e, t, n) {
    (R = e), Au(e);
  }
  function Au(e, t, n) {
    for (var r = (e.mode & 1) !== 0; R !== null; ) {
      var i = R,
        o = i.child;
      if (i.tag === 22 && r) {
        var l = i.memoizedState !== null || Oo;
        if (!l) {
          var s = i.alternate,
            c = (s !== null && s.memoizedState !== null) || ot;
          s = Oo;
          var g = ot;
          if (((Oo = l), (ot = c) && !g))
            for (R = i; R !== null; )
              (l = R),
                (c = l.child),
                l.tag === 22 && l.memoizedState !== null
                  ? Uu(i)
                  : c !== null
                    ? ((c.return = l), (R = c))
                    : Uu(i);
          for (; o !== null; ) (R = o), Au(o), (o = o.sibling);
          (R = i), (Oo = s), (ot = g);
        }
        Ru(e);
      } else
        i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (R = o)) : Ru(e);
    }
  }
  function Ru(e) {
    for (; R !== null; ) {
      var t = R;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                ot || No(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !ot)
                  if (n === null) r.componentDidMount();
                  else {
                    var i =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : Vt(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      i,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var o = t.updateQueue;
                o !== null && bs(t, o, r);
                break;
              case 3:
                var l = t.updateQueue;
                if (l !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  bs(t, l, n);
                }
                break;
              case 5:
                var s = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = s;
                  var c = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      c.autoFocus && n.focus();
                      break;
                    case "img":
                      c.src && (n.src = c.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var g = t.alternate;
                  if (g !== null) {
                    var z = g.memoizedState;
                    if (z !== null) {
                      var P = z.dehydrated;
                      P !== null && C(P);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(m(163));
            }
          ot || (t.flags & 512 && ma(t));
        } catch (T) {
          Ie(t, t.return, T);
        }
      }
      if (t === e) {
        R = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (R = n);
        break;
      }
      R = t.return;
    }
  }
  function bu(e) {
    for (; R !== null; ) {
      var t = R;
      if (t === e) {
        R = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (R = n);
        break;
      }
      R = t.return;
    }
  }
  function Uu(e) {
    for (; R !== null; ) {
      var t = R;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              No(4, t);
            } catch (c) {
              Ie(t, n, c);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var i = t.return;
              try {
                r.componentDidMount();
              } catch (c) {
                Ie(t, i, c);
              }
            }
            var o = t.return;
            try {
              ma(t);
            } catch (c) {
              Ie(t, o, c);
            }
            break;
          case 5:
            var l = t.return;
            try {
              ma(t);
            } catch (c) {
              Ie(t, l, c);
            }
        }
      } catch (c) {
        Ie(t, t.return, c);
      }
      if (t === e) {
        R = null;
        break;
      }
      var s = t.sibling;
      if (s !== null) {
        (s.return = t.return), (R = s);
        break;
      }
      R = t.return;
    }
  }
  var kc = Math.ceil,
    jo = H.ReactCurrentDispatcher,
    ga = H.ReactCurrentOwner,
    Lt = H.ReactCurrentBatchConfig,
    me = 0,
    Ye = null,
    Ue = null,
    Ze = 0,
    Et = 0,
    Ar = Sn(0),
    Be = 0,
    Ci = null,
    Kn = 0,
    Lo = 0,
    ya = 0,
    Ti = null,
    ht = null,
    wa = 0,
    Rr = 1 / 0,
    hn = null,
    Io = !1,
    xa = null,
    zn = null,
    Fo = !1,
    Pn = null,
    Ao = 0,
    zi = 0,
    Sa = null,
    Ro = -1,
    bo = 0;
  function ct() {
    return me & 6 ? Oe() : Ro !== -1 ? Ro : (Ro = Oe());
  }
  function Mn(e) {
    return e.mode & 1
      ? me & 2 && Ze !== 0
        ? Ze & -Ze
        : oc.transition !== null
          ? (bo === 0 && (bo = Bi()), bo)
          : ((e = ge),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : ni(e.type))),
            e)
      : 1;
  }
  function Ht(e, t, n, r) {
    if (50 < zi) throw ((zi = 0), (Sa = null), Error(m(185)));
    Un(e, n, r),
      (!(me & 2) || e !== Ye) &&
        (e === Ye && (!(me & 2) && (Lo |= n), Be === 4 && On(e, Ze)),
        vt(e, r),
        n === 1 &&
          me === 0 &&
          !(t.mode & 1) &&
          ((Rr = Oe() + 500), fo && En()));
  }
  function vt(e, t) {
    var n = e.callbackNode;
    ll(e, t);
    var r = fr(e, e === Ye ? Ze : 0);
    if (r === 0)
      n !== null && Yr(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Yr(n), t === 1))
        e.tag === 0 ? ic(Vu.bind(null, e)) : Ts(Vu.bind(null, e)),
          ec(function () {
            !(me & 6) && En();
          }),
          (n = null);
      else {
        switch (Wi(r)) {
          case 1:
            n = qr;
            break;
          case 4:
            n = Di;
            break;
          case 16:
            n = Rn;
            break;
          case 536870912:
            n = Vi;
            break;
          default:
            n = Rn;
        }
        n = qu(n, Du.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function Du(e, t) {
    if (((Ro = -1), (bo = 0), me & 6)) throw Error(m(327));
    var n = e.callbackNode;
    if (br() && e.callbackNode !== n) return null;
    var r = fr(e, e === Ye ? Ze : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Uo(e, r);
    else {
      t = r;
      var i = me;
      me |= 2;
      var o = Wu();
      (Ye !== e || Ze !== t) && ((hn = null), (Rr = Oe() + 500), Zn(e, t));
      do
        try {
          Cc();
          break;
        } catch (s) {
          Bu(e, s);
        }
      while (!0);
      Ul(),
        (jo.current = o),
        (me = i),
        Ue !== null ? (t = 0) : ((Ye = null), (Ze = 0), (t = Be));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((i = Kr(e)), i !== 0 && ((r = i), (t = ka(e, i)))),
        t === 1)
      )
        throw ((n = Ci), Zn(e, 0), On(e, r), vt(e, Oe()), n);
      if (t === 6) On(e, r);
      else {
        if (
          ((i = e.current.alternate),
          !(r & 30) &&
            !Ec(i) &&
            ((t = Uo(e, r)),
            t === 2 && ((o = Kr(e)), o !== 0 && ((r = o), (t = ka(e, o)))),
            t === 1))
        )
          throw ((n = Ci), Zn(e, 0), On(e, r), vt(e, Oe()), n);
        switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            Jn(e, ht, hn);
            break;
          case 3:
            if (
              (On(e, r),
              (r & 130023424) === r && ((t = wa + 500 - Oe()), 10 < t))
            ) {
              if (fr(e, 0) !== 0) break;
              if (((i = e.suspendedLanes), (i & r) !== r)) {
                ct(), (e.pingedLanes |= e.suspendedLanes & i);
                break;
              }
              e.timeoutHandle = Pl(Jn.bind(null, e, ht, hn), t);
              break;
            }
            Jn(e, ht, hn);
            break;
          case 4:
            if ((On(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var l = 31 - wt(r);
              (o = 1 << l), (l = t[l]), l > i && (i = l), (r &= ~o);
            }
            if (
              ((r = i),
              (r = Oe() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * kc(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Pl(Jn.bind(null, e, ht, hn), r);
              break;
            }
            Jn(e, ht, hn);
            break;
          case 5:
            Jn(e, ht, hn);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return vt(e, Oe()), e.callbackNode === n ? Du.bind(null, e) : null;
  }
  function ka(e, t) {
    var n = Ti;
    return (
      e.current.memoizedState.isDehydrated && (Zn(e, t).flags |= 256),
      (e = Uo(e, t)),
      e !== 2 && ((t = ht), (ht = n), t !== null && Ea(t)),
      e
    );
  }
  function Ea(e) {
    ht === null ? (ht = e) : ht.push.apply(ht, e);
  }
  function Ec(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              o = i.getSnapshot;
            i = i.value;
            try {
              if (!Ut(o(), i)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function On(e, t) {
    for (
      t &= ~ya,
        t &= ~Lo,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - wt(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function Vu(e) {
    if (me & 6) throw Error(m(327));
    br();
    var t = fr(e, 0);
    if (!(t & 1)) return vt(e, Oe()), null;
    var n = Uo(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Kr(e);
      r !== 0 && ((t = r), (n = ka(e, r)));
    }
    if (n === 1) throw ((n = Ci), Zn(e, 0), On(e, t), vt(e, Oe()), n);
    if (n === 6) throw Error(m(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Jn(e, ht, hn),
      vt(e, Oe()),
      null
    );
  }
  function _a(e, t) {
    var n = me;
    me |= 1;
    try {
      return e(t);
    } finally {
      (me = n), me === 0 && ((Rr = Oe() + 500), fo && En());
    }
  }
  function Xn(e) {
    Pn !== null && Pn.tag === 0 && !(me & 6) && br();
    var t = me;
    me |= 1;
    var n = Lt.transition,
      r = ge;
    try {
      if (((Lt.transition = null), (ge = 1), e)) return e();
    } finally {
      (ge = r), (Lt.transition = n), (me = t), !(me & 6) && En();
    }
  }
  function Ca() {
    (Et = Ar.current), ze(Ar);
  }
  function Zn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), J1(n)), Ue !== null))
      for (n = Ue.return; n !== null; ) {
        var r = n;
        switch ((Il(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && uo();
            break;
          case 3:
            Lr(), ze(ft), ze(nt), Ql();
            break;
          case 5:
            Gl(r);
            break;
          case 4:
            Lr();
            break;
          case 13:
            ze(Ne);
            break;
          case 19:
            ze(Ne);
            break;
          case 10:
            Dl(r.type._context);
            break;
          case 22:
          case 23:
            Ca();
        }
        n = n.return;
      }
    if (
      ((Ye = e),
      (Ue = e = Nn(e.current, null)),
      (Ze = Et = t),
      (Be = 0),
      (Ci = null),
      (ya = Lo = Kn = 0),
      (ht = Ti = null),
      Qn !== null)
    ) {
      for (t = 0; t < Qn.length; t++)
        if (((n = Qn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var i = r.next,
            o = n.pending;
          if (o !== null) {
            var l = o.next;
            (o.next = i), (r.next = l);
          }
          n.pending = r;
        }
      Qn = null;
    }
    return e;
  }
  function Bu(e, t) {
    do {
      var n = Ue;
      try {
        if ((Ul(), (ko.current = To), Eo)) {
          for (var r = je.memoizedState; r !== null; ) {
            var i = r.queue;
            i !== null && (i.pending = null), (r = r.next);
          }
          Eo = !1;
        }
        if (
          ((qn = 0),
          (Qe = Ve = je = null),
          (wi = !1),
          (xi = 0),
          (ga.current = null),
          n === null || n.return === null)
        ) {
          (Be = 1), (Ci = t), (Ue = null);
          break;
        }
        e: {
          var o = e,
            l = n.return,
            s = n,
            c = t;
          if (
            ((t = Ze),
            (s.flags |= 32768),
            c !== null && typeof c == "object" && typeof c.then == "function")
          ) {
            var g = c,
              z = s,
              P = z.tag;
            if (!(z.mode & 1) && (P === 0 || P === 11 || P === 15)) {
              var T = z.alternate;
              T
                ? ((z.updateQueue = T.updateQueue),
                  (z.memoizedState = T.memoizedState),
                  (z.lanes = T.lanes))
                : ((z.updateQueue = null), (z.memoizedState = null));
            }
            var F = pu(l);
            if (F !== null) {
              (F.flags &= -257),
                mu(F, l, s, o, t),
                F.mode & 1 && fu(o, g, t),
                (t = F),
                (c = g);
              var D = t.updateQueue;
              if (D === null) {
                var B = new Set();
                B.add(c), (t.updateQueue = B);
              } else D.add(c);
              break e;
            } else {
              if (!(t & 1)) {
                fu(o, g, t), Ta();
                break e;
              }
              c = Error(m(426));
            }
          } else if (Pe && s.mode & 1) {
            var Re = pu(l);
            if (Re !== null) {
              !(Re.flags & 65536) && (Re.flags |= 256),
                mu(Re, l, s, o, t),
                Rl(Ir(c, s));
              break e;
            }
          }
          (o = c = Ir(c, s)),
            Be !== 4 && (Be = 2),
            Ti === null ? (Ti = [o]) : Ti.push(o),
            (o = l);
          do {
            switch (o.tag) {
              case 3:
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var h = cu(o, c, t);
                Rs(o, h);
                break e;
              case 1:
                s = c;
                var d = o.type,
                  v = o.stateNode;
                if (
                  !(o.flags & 128) &&
                  (typeof d.getDerivedStateFromError == "function" ||
                    (v !== null &&
                      typeof v.componentDidCatch == "function" &&
                      (zn === null || !zn.has(v))))
                ) {
                  (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                  var O = du(o, s, t);
                  Rs(o, O);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Gu(n);
      } catch (W) {
        (t = W), Ue === n && n !== null && (Ue = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Wu() {
    var e = jo.current;
    return (jo.current = To), e === null ? To : e;
  }
  function Ta() {
    (Be === 0 || Be === 3 || Be === 2) && (Be = 4),
      Ye === null || (!(Kn & 268435455) && !(Lo & 268435455)) || On(Ye, Ze);
  }
  function Uo(e, t) {
    var n = me;
    me |= 2;
    var r = Wu();
    (Ye !== e || Ze !== t) && ((hn = null), Zn(e, t));
    do
      try {
        _c();
        break;
      } catch (i) {
        Bu(e, i);
      }
    while (!0);
    if ((Ul(), (me = n), (jo.current = r), Ue !== null)) throw Error(m(261));
    return (Ye = null), (Ze = 0), Be;
  }
  function _c() {
    for (; Ue !== null; ) Hu(Ue);
  }
  function Cc() {
    for (; Ue !== null && !bi(); ) Hu(Ue);
  }
  function Hu(e) {
    var t = Yu(e.alternate, e, Et);
    (e.memoizedProps = e.pendingProps),
      t === null ? Gu(e) : (Ue = t),
      (ga.current = null);
  }
  function Gu(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = yc(n, t)), n !== null)) {
          (n.flags &= 32767), (Ue = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Be = 6), (Ue = null);
          return;
        }
      } else if (((n = gc(n, t, Et)), n !== null)) {
        Ue = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Ue = t;
        return;
      }
      Ue = t = e;
    } while (t !== null);
    Be === 0 && (Be = 5);
  }
  function Jn(e, t, n) {
    var r = ge,
      i = Lt.transition;
    try {
      (Lt.transition = null), (ge = 1), Tc(e, t, n, r);
    } finally {
      (Lt.transition = i), (ge = r);
    }
    return null;
  }
  function Tc(e, t, n, r) {
    do br();
    while (Pn !== null);
    if (me & 6) throw Error(m(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(m(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = n.lanes | n.childLanes;
    if (
      (al(e, o),
      e === Ye && ((Ue = Ye = null), (Ze = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        Fo ||
        ((Fo = !0),
        qu(Rn, function () {
          return br(), null;
        })),
      (o = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || o)
    ) {
      (o = Lt.transition), (Lt.transition = null);
      var l = ge;
      ge = 1;
      var s = me;
      (me |= 4),
        (ga.current = null),
        xc(e, n),
        Fu(n, e),
        $1(Tl),
        (Ce = !!Cl),
        (Tl = Cl = null),
        (e.current = n),
        Sc(n),
        Ui(),
        (me = s),
        (ge = l),
        (Lt.transition = o);
    } else e.current = n;
    if (
      (Fo && ((Fo = !1), (Pn = e), (Ao = i)),
      (o = e.pendingLanes),
      o === 0 && (zn = null),
      tl(n.stateNode),
      vt(e, Oe()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
    if (Io) throw ((Io = !1), (e = xa), (xa = null), e);
    return (
      Ao & 1 && e.tag !== 0 && br(),
      (o = e.pendingLanes),
      o & 1 ? (e === Sa ? zi++ : ((zi = 0), (Sa = e))) : (zi = 0),
      En(),
      null
    );
  }
  function br() {
    if (Pn !== null) {
      var e = Wi(Ao),
        t = Lt.transition,
        n = ge;
      try {
        if (((Lt.transition = null), (ge = 16 > e ? 16 : e), Pn === null))
          var r = !1;
        else {
          if (((e = Pn), (Pn = null), (Ao = 0), me & 6)) throw Error(m(331));
          var i = me;
          for (me |= 4, R = e.current; R !== null; ) {
            var o = R,
              l = o.child;
            if (R.flags & 16) {
              var s = o.deletions;
              if (s !== null) {
                for (var c = 0; c < s.length; c++) {
                  var g = s[c];
                  for (R = g; R !== null; ) {
                    var z = R;
                    switch (z.tag) {
                      case 0:
                      case 11:
                      case 15:
                        _i(8, z, o);
                    }
                    var P = z.child;
                    if (P !== null) (P.return = z), (R = P);
                    else
                      for (; R !== null; ) {
                        z = R;
                        var T = z.sibling,
                          F = z.return;
                        if ((Ou(z), z === g)) {
                          R = null;
                          break;
                        }
                        if (T !== null) {
                          (T.return = F), (R = T);
                          break;
                        }
                        R = F;
                      }
                  }
                }
                var D = o.alternate;
                if (D !== null) {
                  var B = D.child;
                  if (B !== null) {
                    D.child = null;
                    do {
                      var Re = B.sibling;
                      (B.sibling = null), (B = Re);
                    } while (B !== null);
                  }
                }
                R = o;
              }
            }
            if (o.subtreeFlags & 2064 && l !== null) (l.return = o), (R = l);
            else
              e: for (; R !== null; ) {
                if (((o = R), o.flags & 2048))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _i(9, o, o.return);
                  }
                var h = o.sibling;
                if (h !== null) {
                  (h.return = o.return), (R = h);
                  break e;
                }
                R = o.return;
              }
          }
          var d = e.current;
          for (R = d; R !== null; ) {
            l = R;
            var v = l.child;
            if (l.subtreeFlags & 2064 && v !== null) (v.return = l), (R = v);
            else
              e: for (l = d; R !== null; ) {
                if (((s = R), s.flags & 2048))
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        No(9, s);
                    }
                  } catch (W) {
                    Ie(s, s.return, W);
                  }
                if (s === l) {
                  R = null;
                  break e;
                }
                var O = s.sibling;
                if (O !== null) {
                  (O.return = s.return), (R = O);
                  break e;
                }
                R = s.return;
              }
          }
          if (
            ((me = i),
            En(),
            Pt && typeof Pt.onPostCommitFiberRoot == "function")
          )
            try {
              Pt.onPostCommitFiberRoot(ur, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (ge = n), (Lt.transition = t);
      }
    }
    return !1;
  }
  function $u(e, t, n) {
    (t = Ir(n, t)),
      (t = cu(e, t, 1)),
      (e = Cn(e, t, 1)),
      (t = ct()),
      e !== null && (Un(e, 1, t), vt(e, t));
  }
  function Ie(e, t, n) {
    if (e.tag === 3) $u(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          $u(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (zn === null || !zn.has(r)))
          ) {
            (e = Ir(n, e)),
              (e = du(t, e, 1)),
              (t = Cn(t, e, 1)),
              (e = ct()),
              t !== null && (Un(t, 1, e), vt(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function zc(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = ct()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Ye === e &&
        (Ze & n) === n &&
        (Be === 4 || (Be === 3 && (Ze & 130023424) === Ze && 500 > Oe() - wa)
          ? Zn(e, 0)
          : (ya |= n)),
      vt(e, t);
  }
  function Qu(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = dr), (dr <<= 1), !(dr & 130023424) && (dr = 4194304))
        : (t = 1));
    var n = ct();
    (e = fn(e, t)), e !== null && (Un(e, t, n), vt(e, n));
  }
  function Pc(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Qu(e, n);
  }
  function Mc(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(m(314));
    }
    r !== null && r.delete(t), Qu(e, n);
  }
  var Yu;
  Yu = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || ft.current) mt = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (mt = !1), vc(e, t, n);
        mt = !!(e.flags & 131072);
      }
    else (mt = !1), Pe && t.flags & 1048576 && zs(t, mo, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Mo(e, t), (e = t.pendingProps);
        var i = Tr(t, nt.current);
        jr(t, n), (i = Kl(null, t, r, e, i, n));
        var o = Xl();
        return (
          (t.flags |= 1),
          typeof i == "object" &&
          i !== null &&
          typeof i.render == "function" &&
          i.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              pt(r) ? ((o = !0), co(t)) : (o = !1),
              (t.memoizedState =
                i.state !== null && i.state !== void 0 ? i.state : null),
              Wl(t),
              (i.updater = zo),
              (t.stateNode = i),
              (i._reactInternals = t),
              ra(t, r, e, n),
              (t = aa(null, t, r, !0, o, n)))
            : ((t.tag = 0), Pe && o && Ll(t), ut(null, t, i, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Mo(e, t),
            (e = t.pendingProps),
            (i = r._init),
            (r = i(r._payload)),
            (t.type = r),
            (i = t.tag = Nc(r)),
            (e = Vt(r, e)),
            i)
          ) {
            case 0:
              t = la(null, t, r, e, n);
              break e;
            case 1:
              t = xu(null, t, r, e, n);
              break e;
            case 11:
              t = hu(null, t, r, e, n);
              break e;
            case 14:
              t = vu(null, t, r, Vt(r.type, e), n);
              break e;
          }
          throw Error(m(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : Vt(r, i)),
          la(e, t, r, i, n)
        );
      case 1:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : Vt(r, i)),
          xu(e, t, r, i, n)
        );
      case 3:
        e: {
          if ((Su(t), e === null)) throw Error(m(387));
          (r = t.pendingProps),
            (o = t.memoizedState),
            (i = o.element),
            As(e, t),
            xo(t, r, null, n);
          var l = t.memoizedState;
          if (((r = l.element), o.isDehydrated))
            if (
              ((o = {
                element: r,
                isDehydrated: !1,
                cache: l.cache,
                pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                transitions: l.transitions,
              }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              (i = Ir(Error(m(423)), t)), (t = ku(e, t, r, n, i));
              break e;
            } else if (r !== i) {
              (i = Ir(Error(m(424)), t)), (t = ku(e, t, r, n, i));
              break e;
            } else
              for (
                kt = xn(t.stateNode.containerInfo.firstChild),
                  St = t,
                  Pe = !0,
                  Dt = null,
                  n = Is(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Mr(), r === i)) {
              t = mn(e, t, n);
              break e;
            }
            ut(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Us(t),
          e === null && Al(t),
          (r = t.type),
          (i = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (l = i.children),
          zl(r, i) ? (l = null) : o !== null && zl(r, o) && (t.flags |= 32),
          wu(e, t),
          ut(e, t, l, n),
          t.child
        );
      case 6:
        return e === null && Al(t), null;
      case 13:
        return Eu(e, t, n);
      case 4:
        return (
          Hl(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Or(t, null, r, n)) : ut(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : Vt(r, i)),
          hu(e, t, r, i, n)
        );
      case 7:
        return ut(e, t, t.pendingProps, n), t.child;
      case 8:
        return ut(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return ut(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (i = t.pendingProps),
            (o = t.memoizedProps),
            (l = i.value),
            ke(go, r._currentValue),
            (r._currentValue = l),
            o !== null)
          )
            if (Ut(o.value, l)) {
              if (o.children === i.children && !ft.current) {
                t = mn(e, t, n);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var s = o.dependencies;
                if (s !== null) {
                  l = o.child;
                  for (var c = s.firstContext; c !== null; ) {
                    if (c.context === r) {
                      if (o.tag === 1) {
                        (c = pn(-1, n & -n)), (c.tag = 2);
                        var g = o.updateQueue;
                        if (g !== null) {
                          g = g.shared;
                          var z = g.pending;
                          z === null
                            ? (c.next = c)
                            : ((c.next = z.next), (z.next = c)),
                            (g.pending = c);
                        }
                      }
                      (o.lanes |= n),
                        (c = o.alternate),
                        c !== null && (c.lanes |= n),
                        Vl(o.return, n, t),
                        (s.lanes |= n);
                      break;
                    }
                    c = c.next;
                  }
                } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((l = o.return), l === null)) throw Error(m(341));
                  (l.lanes |= n),
                    (s = l.alternate),
                    s !== null && (s.lanes |= n),
                    Vl(l, n, t),
                    (l = o.sibling);
                } else l = o.child;
                if (l !== null) l.return = o;
                else
                  for (l = o; l !== null; ) {
                    if (l === t) {
                      l = null;
                      break;
                    }
                    if (((o = l.sibling), o !== null)) {
                      (o.return = l.return), (l = o);
                      break;
                    }
                    l = l.return;
                  }
                o = l;
              }
          ut(e, t, i.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (i = t.type),
          (r = t.pendingProps.children),
          jr(t, n),
          (i = Nt(i)),
          (r = r(i)),
          (t.flags |= 1),
          ut(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (i = Vt(r, t.pendingProps)),
          (i = Vt(r.type, i)),
          vu(e, t, r, i, n)
        );
      case 15:
        return gu(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : Vt(r, i)),
          Mo(e, t),
          (t.tag = 1),
          pt(r) ? ((e = !0), co(t)) : (e = !1),
          jr(t, n),
          su(t, r, i),
          ra(t, r, i, n),
          aa(null, t, r, !0, e, n)
        );
      case 19:
        return Cu(e, t, n);
      case 22:
        return yu(e, t, n);
    }
    throw Error(m(156, t.tag));
  };
  function qu(e, t) {
    return Ri(e, t);
  }
  function Oc(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function It(e, t, n, r) {
    return new Oc(e, t, n, r);
  }
  function za(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Nc(e) {
    if (typeof e == "function") return za(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === st)) return 11;
      if (e === dt) return 14;
    }
    return 2;
  }
  function Nn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = It(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Do(e, t, n, r, i, o) {
    var l = 2;
    if (((r = e), typeof e == "function")) za(e) && (l = 1);
    else if (typeof e == "string") l = 5;
    else
      e: switch (e) {
        case Le:
          return er(n.children, i, o, t);
        case be:
          (l = 8), (i |= 8);
          break;
        case lt:
          return (
            (e = It(12, n, t, i | 2)), (e.elementType = lt), (e.lanes = o), e
          );
        case Fe:
          return (e = It(13, n, t, i)), (e.elementType = Fe), (e.lanes = o), e;
        case He:
          return (e = It(19, n, t, i)), (e.elementType = He), (e.lanes = o), e;
        case ye:
          return Vo(n, i, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Se:
                l = 10;
                break e;
              case at:
                l = 9;
                break e;
              case st:
                l = 11;
                break e;
              case dt:
                l = 14;
                break e;
              case Ae:
                (l = 16), (r = null);
                break e;
            }
          throw Error(m(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = It(l, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
    );
  }
  function er(e, t, n, r) {
    return (e = It(7, e, r, t)), (e.lanes = n), e;
  }
  function Vo(e, t, n, r) {
    return (
      (e = It(22, e, r, t)),
      (e.elementType = ye),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Pa(e, t, n) {
    return (e = It(6, e, null, t)), (e.lanes = n), e;
  }
  function Ma(e, t, n) {
    return (
      (t = It(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function jc(e, t, n, r, i) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Xr(0)),
      (this.expirationTimes = Xr(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Xr(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = i),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Oa(e, t, n, r, i, o, l, s, c) {
    return (
      (e = new jc(e, t, n, s, c)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = It(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Wl(o),
      e
    );
  }
  function Lc(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: _e,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Ku(e) {
    if (!e) return kn;
    e = e._reactInternals;
    e: {
      if (an(e) !== e || e.tag !== 1) throw Error(m(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (pt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(m(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (pt(n)) return _s(e, n, t);
    }
    return t;
  }
  function Xu(e, t, n, r, i, o, l, s, c) {
    return (
      (e = Oa(n, r, !0, e, i, o, l, s, c)),
      (e.context = Ku(null)),
      (n = e.current),
      (r = ct()),
      (i = Mn(n)),
      (o = pn(r, i)),
      (o.callback = t ?? null),
      Cn(n, o, i),
      (e.current.lanes = i),
      Un(e, i, r),
      vt(e, r),
      e
    );
  }
  function Bo(e, t, n, r) {
    var i = t.current,
      o = ct(),
      l = Mn(i);
    return (
      (n = Ku(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = pn(o, l)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Cn(i, t, l)),
      e !== null && (Ht(e, i, l, o), wo(e, i, l)),
      l
    );
  }
  function Wo(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Zu(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Na(e, t) {
    Zu(e, t), (e = e.alternate) && Zu(e, t);
  }
  function Ic() {
    return null;
  }
  var Ju =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function ja(e) {
    this._internalRoot = e;
  }
  (Ho.prototype.render = ja.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(m(409));
      Bo(e, t, null, null);
    }),
    (Ho.prototype.unmount = ja.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          Xn(function () {
            Bo(null, e, null, null);
          }),
            (t[sn] = null);
        }
      });
  function Ho(e) {
    this._internalRoot = e;
  }
  Ho.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = $i();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Xt.length && t !== 0 && t < Xt[n].priority; n++);
      Xt.splice(n, 0, e), n === 0 && Ki(e);
    }
  };
  function La(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Go(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function e1() {}
  function Fc(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var o = r;
        r = function () {
          var g = Wo(l);
          o.call(g);
        };
      }
      var l = Xu(t, r, e, 0, null, !1, !1, "", e1);
      return (
        (e._reactRootContainer = l),
        (e[sn] = l.current),
        di(e.nodeType === 8 ? e.parentNode : e),
        Xn(),
        l
      );
    }
    for (; (i = e.lastChild); ) e.removeChild(i);
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var g = Wo(c);
        s.call(g);
      };
    }
    var c = Oa(e, 0, !1, null, null, !1, !1, "", e1);
    return (
      (e._reactRootContainer = c),
      (e[sn] = c.current),
      di(e.nodeType === 8 ? e.parentNode : e),
      Xn(function () {
        Bo(t, c, n, r);
      }),
      c
    );
  }
  function $o(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
      var l = o;
      if (typeof i == "function") {
        var s = i;
        i = function () {
          var c = Wo(l);
          s.call(c);
        };
      }
      Bo(t, l, e, i);
    } else l = Fc(n, t, e, i, r);
    return Wo(l);
  }
  (Hi = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = bn(t.pendingLanes);
          n !== 0 &&
            (Zr(t, n | 1), vt(t, Oe()), !(me & 6) && ((Rr = Oe() + 500), En()));
        }
        break;
      case 13:
        Xn(function () {
          var r = fn(e, 1);
          if (r !== null) {
            var i = ct();
            Ht(r, e, 1, i);
          }
        }),
          Na(e, 1);
    }
  }),
    (Jr = function (e) {
      if (e.tag === 13) {
        var t = fn(e, 134217728);
        if (t !== null) {
          var n = ct();
          Ht(t, e, 134217728, n);
        }
        Na(e, 134217728);
      }
    }),
    (Gi = function (e) {
      if (e.tag === 13) {
        var t = Mn(e),
          n = fn(e, t);
        if (n !== null) {
          var r = ct();
          Ht(n, e, t, r);
        }
        Na(e, t);
      }
    }),
    ($i = function () {
      return ge;
    }),
    (Qi = function (e, t) {
      var n = ge;
      try {
        return (ge = e), t();
      } finally {
        ge = n;
      }
    }),
    (or = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Gt(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var i = so(r);
                if (!i) throw Error(m(90));
                tr(r), Gt(r, i);
              }
            }
          }
          break;
        case "textarea":
          Tt(e, n);
          break;
        case "select":
          (t = n.value), t != null && Ct(e, !!n.multiple, t, !1);
      }
    }),
    (Wr = _a),
    (Hr = Xn);
  var Ac = { usingClientEntryPoint: !1, Events: [mi, _r, so, Vr, Br, _a] },
    Pi = {
      findFiberByHostInstance: Wn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Rc = {
      bundleType: Pi.bundleType,
      version: Pi.version,
      rendererPackageName: Pi.rendererPackageName,
      rendererConfig: Pi.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: H.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = $r(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Pi.findFiberByHostInstance || Ic,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qo.isDisabled && Qo.supportsFiber)
      try {
        (ur = Qo.inject(Rc)), (Pt = Qo);
      } catch {}
  }
  return (
    (gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ac),
    (gt.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!La(t)) throw Error(m(200));
      return Lc(e, t, null, n);
    }),
    (gt.createRoot = function (e, t) {
      if (!La(e)) throw Error(m(299));
      var n = !1,
        r = "",
        i = Ju;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = Oa(e, 1, !1, null, null, n, !1, r, i)),
        (e[sn] = t.current),
        di(e.nodeType === 8 ? e.parentNode : e),
        new ja(t)
      );
    }),
    (gt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(m(188))
          : ((e = Object.keys(e).join(",")), Error(m(268, e)));
      return (e = $r(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (gt.flushSync = function (e) {
      return Xn(e);
    }),
    (gt.hydrate = function (e, t, n) {
      if (!Go(t)) throw Error(m(200));
      return $o(null, e, t, !0, n);
    }),
    (gt.hydrateRoot = function (e, t, n) {
      if (!La(e)) throw Error(m(405));
      var r = (n != null && n.hydratedSources) || null,
        i = !1,
        o = "",
        l = Ju;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (i = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
        (t = Xu(t, null, e, 1, n ?? null, i, !1, o, l)),
        (e[sn] = t.current),
        di(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (i = n._getVersion),
            (i = i(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, i])
              : t.mutableSourceEagerHydrationData.push(n, i);
      return new Ho(t);
    }),
    (gt.render = function (e, t, n) {
      if (!Go(t)) throw Error(m(200));
      return $o(null, e, t, !1, n);
    }),
    (gt.unmountComponentAtNode = function (e) {
      if (!Go(e)) throw Error(m(40));
      return e._reactRootContainer
        ? (Xn(function () {
            $o(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[sn] = null);
            });
          }),
          !0)
        : !1;
    }),
    (gt.unstable_batchedUpdates = _a),
    (gt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Go(n)) throw Error(m(200));
      if (e == null || e._reactInternals === void 0) throw Error(m(38));
      return $o(e, t, n, !1, r);
    }),
    (gt.version = "18.3.1-next-f1338f8080-20240426"),
    gt
  );
}
var s1;
function Gc() {
  if (s1) return Aa.exports;
  s1 = 1;
  function U() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(U);
      } catch (V) {
        console.error(V);
      }
  }
  return U(), (Aa.exports = Hc()), Aa.exports;
}
var u1;
function $c() {
  if (u1) return Yo;
  u1 = 1;
  var U = Gc();
  return (Yo.createRoot = U.createRoot), (Yo.hydrateRoot = U.hydrateRoot), Yo;
}
var Qc = $c();
function Yc() {
  return k.jsx(k.Fragment, {
    children: k.jsxs("div", {
      className: "background",
      children: [
        k.jsx("span", {}),
        k.jsx("span", {}),
        k.jsx("span", {}),
        k.jsx("span", {}),
        k.jsx("span", {}),
        k.jsx("span", {}),
        k.jsx("span", {}),
        k.jsx("span", {}),
        k.jsx("span", {}),
        k.jsx("span", {}),
        k.jsx("span", {}),
        k.jsx("span", {}),
        k.jsx("span", {}),
        k.jsx("span", {}),
        k.jsx("span", {}),
        k.jsx("span", {}),
        k.jsx("span", {}),
        k.jsx("span", {}),
        k.jsx("span", {}),
        k.jsx("span", {}),
        k.jsx("span", {}),
        k.jsx("span", {}),
        k.jsx("span", {}),
        k.jsx("span", {}),
        k.jsx("span", {}),
        k.jsx("span", {}),
        k.jsx("span", {}),
        k.jsx("span", {}),
        k.jsx("span", {}),
        k.jsx("span", {}),
        k.jsx("span", {}),
        k.jsx("span", {}),
        k.jsx("span", {}),
        k.jsx("span", {}),
        k.jsx("span", {}),
        k.jsx("span", {}),
        k.jsx("span", {}),
        k.jsx("span", {}),
        k.jsx("span", {}),
      ],
    }),
  });
}
var A = {},
  Ni = { exports: {} },
  qc = Ni.exports,
  c1;
function Kc() {
  return (
    c1 ||
      ((c1 = 1),
      (function (U, V) {
        (function (m, b) {
          var G = "1.0.39",
            $ = "",
            Ee = "?",
            le = "function",
            ie = "undefined",
            oe = "object",
            de = "string",
            ae = "major",
            w = "model",
            M = "name",
            S = "type",
            x = "vendor",
            E = "version",
            Me = "architecture",
            We = "console",
            q = "mobile",
            H = "tablet",
            xe = "smarttv",
            _e = "wearable",
            Le = "embedded",
            be = 500,
            lt = "Amazon",
            Se = "Apple",
            at = "ASUS",
            st = "BlackBerry",
            Fe = "Browser",
            He = "Chrome",
            dt = "Edge",
            Ae = "Firefox",
            ye = "Google",
            L = "Huawei",
            I = "LG",
            N = "Microsoft",
            f = "Motorola",
            _ = "Opera",
            Z = "Samsung",
            te = "Sharp",
            j = "Sony",
            re = "Xiaomi",
            fe = "Zebra",
            pe = "Facebook",
            we = "Chromium OS",
            Ge = "Mac OS",
            nn = " Browser",
            tr = function (ne, se) {
              var X = {};
              for (var he in ne)
                se[he] && se[he].length % 2 === 0
                  ? (X[he] = se[he].concat(ne[he]))
                  : (X[he] = ne[he]);
              return X;
            },
            Ft = function (ne) {
              for (var se = {}, X = 0; X < ne.length; X++)
                se[ne[X].toUpperCase()] = ne[X];
              return se;
            },
            vn = function (ne, se) {
              return typeof ne === de ? _t(se).indexOf(_t(ne)) !== -1 : !1;
            },
            _t = function (ne) {
              return ne.toLowerCase();
            },
            Ln = function (ne) {
              return typeof ne === de
                ? ne.replace(/[^\d\.]/g, $).split(".")[0]
                : b;
            },
            Gt = function (ne, se) {
              if (typeof ne === de)
                return (
                  (ne = ne.replace(/^\s\s*/, $)),
                  typeof se === ie ? ne : ne.substring(0, be)
                );
            },
            At = function (ne, se) {
              for (var X = 0, he, $e, De, ce, K, Je; X < se.length && !K; ) {
                var gn = se[X],
                  Rt = se[X + 1];
                for (he = $e = 0; he < gn.length && !K && gn[he]; )
                  if (((K = gn[he++].exec(ne)), K))
                    for (De = 0; De < Rt.length; De++)
                      (Je = K[++$e]),
                        (ce = Rt[De]),
                        typeof ce === oe && ce.length > 0
                          ? ce.length === 2
                            ? typeof ce[1] == le
                              ? (this[ce[0]] = ce[1].call(this, Je))
                              : (this[ce[0]] = ce[1])
                            : ce.length === 3
                              ? typeof ce[1] === le &&
                                !(ce[1].exec && ce[1].test)
                                ? (this[ce[0]] = Je
                                    ? ce[1].call(this, Je, ce[2])
                                    : b)
                                : (this[ce[0]] = Je
                                    ? Je.replace(ce[1], ce[2])
                                    : b)
                              : ce.length === 4 &&
                                (this[ce[0]] = Je
                                  ? ce[3].call(this, Je.replace(ce[1], ce[2]))
                                  : b)
                          : (this[ce] = Je || b);
                X += 2;
              }
            },
            yt = function (ne, se) {
              for (var X in se)
                if (typeof se[X] === oe && se[X].length > 0) {
                  for (var he = 0; he < se[X].length; he++)
                    if (vn(se[X][he], ne)) return X === Ee ? b : X;
                } else if (vn(se[X], ne)) return X === Ee ? b : X;
              return se.hasOwnProperty("*") ? se["*"] : ne;
            },
            $t = {
              "1.0": "/8",
              1.2: "/1",
              1.3: "/3",
              "2.0": "/412",
              "2.0.2": "/416",
              "2.0.3": "/417",
              "2.0.4": "/419",
              "?": "/",
            },
            Ct = {
              ME: "4.90",
              "NT 3.11": "NT3.51",
              "NT 4.0": "NT4.0",
              2e3: "NT 5.0",
              XP: ["NT 5.1", "NT 5.2"],
              Vista: "NT 6.0",
              7: "NT 6.1",
              8: "NT 6.2",
              8.1: "NT 6.3",
              10: ["NT 6.4", "NT 10.0"],
              RT: "ARM",
            },
            rn = {
              browser: [
                [/\b(?:crmo|crios)\/([\w\.]+)/i],
                [E, [M, "Chrome"]],
                [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                [E, [M, "Edge"]],
                [
                  /(opera mini)\/([-\w\.]+)/i,
                  /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                  /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
                ],
                [M, E],
                [/opios[\/ ]+([\w\.]+)/i],
                [E, [M, _ + " Mini"]],
                [/\bop(?:rg)?x\/([\w\.]+)/i],
                [E, [M, _ + " GX"]],
                [/\bopr\/([\w\.]+)/i],
                [E, [M, _]],
                [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
                [E, [M, "Baidu"]],
                [
                  /(kindle)\/([\w\.]+)/i,
                  /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
                  /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,
                  /(?:ms|\()(ie) ([\w\.]+)/i,
                  /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio)\/([-\w\.]+)/i,
                  /(heytap|ovi)browser\/([\d\.]+)/i,
                  /(weibo)__([\d\.]+)/i,
                ],
                [M, E],
                [/quark(?:pc)?\/([-\w\.]+)/i],
                [E, [M, "Quark"]],
                [/\bddg\/([\w\.]+)/i],
                [E, [M, "DuckDuckGo"]],
                [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                [E, [M, "UC" + Fe]],
                [
                  /microm.+\bqbcore\/([\w\.]+)/i,
                  /\bqbcore\/([\w\.]+).+microm/i,
                  /micromessenger\/([\w\.]+)/i,
                ],
                [E, [M, "WeChat"]],
                [/konqueror\/([\w\.]+)/i],
                [E, [M, "Konqueror"]],
                [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                [E, [M, "IE"]],
                [/ya(?:search)?browser\/([\w\.]+)/i],
                [E, [M, "Yandex"]],
                [/slbrowser\/([\w\.]+)/i],
                [E, [M, "Smart Lenovo " + Fe]],
                [/(avast|avg)\/([\w\.]+)/i],
                [[M, /(.+)/, "$1 Secure " + Fe], E],
                [/\bfocus\/([\w\.]+)/i],
                [E, [M, Ae + " Focus"]],
                [/\bopt\/([\w\.]+)/i],
                [E, [M, _ + " Touch"]],
                [/coc_coc\w+\/([\w\.]+)/i],
                [E, [M, "Coc Coc"]],
                [/dolfin\/([\w\.]+)/i],
                [E, [M, "Dolphin"]],
                [/coast\/([\w\.]+)/i],
                [E, [M, _ + " Coast"]],
                [/miuibrowser\/([\w\.]+)/i],
                [E, [M, "MIUI " + Fe]],
                [/fxios\/([-\w\.]+)/i],
                [E, [M, Ae]],
                [/\bqihu|(qi?ho?o?|360)browser/i],
                [[M, "360" + nn]],
                [/\b(qq)\/([\w\.]+)/i],
                [[M, /(.+)/, "$1Browser"], E],
                [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
                [[M, /(.+)/, "$1" + nn], E],
                [/samsungbrowser\/([\w\.]+)/i],
                [E, [M, Z + " Internet"]],
                [/(comodo_dragon)\/([\w\.]+)/i],
                [[M, /_/g, " "], E],
                [/metasr[\/ ]?([\d\.]+)/i],
                [E, [M, "Sogou Explorer"]],
                [/(sogou)mo\w+\/([\d\.]+)/i],
                [[M, "Sogou Mobile"], E],
                [
                  /(electron)\/([\w\.]+) safari/i,
                  /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                  /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i,
                ],
                [M, E],
                [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
                [M],
                [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                [[M, pe], E],
                [
                  /(Klarna)\/([\w\.]+)/i,
                  /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                  /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                  /safari (line)\/([\w\.]+)/i,
                  /\b(line)\/([\w\.]+)\/iab/i,
                  /(alipay)client\/([\w\.]+)/i,
                  /(twitter)(?:and| f.+e\/([\w\.]+))/i,
                  /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i,
                ],
                [M, E],
                [/\bgsa\/([\w\.]+) .*safari\//i],
                [E, [M, "GSA"]],
                [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                [E, [M, "TikTok"]],
                [/headlesschrome(?:\/([\w\.]+)| )/i],
                [E, [M, He + " Headless"]],
                [/ wv\).+(chrome)\/([\w\.]+)/i],
                [[M, He + " WebView"], E],
                [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                [E, [M, "Android " + Fe]],
                [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                [M, E],
                [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                [E, [M, "Mobile Safari"]],
                [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                [E, M],
                [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                [M, [E, yt, $t]],
                [/(webkit|khtml)\/([\w\.]+)/i],
                [M, E],
                [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                [[M, "Netscape"], E],
                [/(wolvic)\/([\w\.]+)/i],
                [M, E],
                [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                [E, [M, Ae + " Reality"]],
                [
                  /ekiohf.+(flow)\/([\w\.]+)/i,
                  /(swiftfox)/i,
                  /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
                  /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                  /(firefox)\/([\w\.]+)/i,
                  /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                  /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                  /(links) \(([\w\.]+)/i,
                ],
                [M, [E, /_/g, "."]],
                [/(cobalt)\/([\w\.]+)/i],
                [M, [E, /master.|lts./, ""]],
              ],
              cpu: [
                [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                [[Me, "amd64"]],
                [/(ia32(?=;))/i],
                [[Me, _t]],
                [/((?:i[346]|x)86)[;\)]/i],
                [[Me, "ia32"]],
                [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                [[Me, "arm64"]],
                [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                [[Me, "armhf"]],
                [/windows (ce|mobile); ppc;/i],
                [[Me, "arm"]],
                [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                [[Me, /ower/, $, _t]],
                [/(sun4\w)[;\)]/i],
                [[Me, "sparc"]],
                [
                  /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
                ],
                [[Me, _t]],
              ],
              device: [
                [
                  /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
                ],
                [w, [x, Z], [S, H]],
                [
                  /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                  /samsung[- ]((?!sm-[lr])[-\w]+)/i,
                  /sec-(sgh\w+)/i,
                ],
                [w, [x, Z], [S, q]],
                [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                [w, [x, Se], [S, q]],
                [
                  /\((ipad);[-\w\),; ]+apple/i,
                  /applecoremedia\/[\w\.]+ \((ipad)/i,
                  /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
                ],
                [w, [x, Se], [S, H]],
                [/(macintosh);/i],
                [w, [x, Se]],
                [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                [w, [x, te], [S, q]],
                [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                [w, [x, L], [S, H]],
                [
                  /(?:huawei|honor)([-\w ]+)[;\)]/i,
                  /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
                ],
                [w, [x, L], [S, q]],
                [
                  /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
                  /\b; (\w+) build\/hm\1/i,
                  /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                  /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                  /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
                  /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,
                ],
                [
                  [w, /_/g, " "],
                  [x, re],
                  [S, q],
                ],
                [
                  /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,
                  /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i,
                ],
                [
                  [w, /_/g, " "],
                  [x, re],
                  [S, H],
                ],
                [
                  /; (\w+) bui.+ oppo/i,
                  /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
                ],
                [w, [x, "OPPO"], [S, q]],
                [/\b(opd2\d{3}a?) bui/i],
                [w, [x, "OPPO"], [S, H]],
                [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                [w, [x, "Vivo"], [S, q]],
                [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
                [w, [x, "Realme"], [S, q]],
                [
                  /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                  /\bmot(?:orola)?[- ](\w*)/i,
                  /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
                ],
                [w, [x, f], [S, q]],
                [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                [w, [x, f], [S, H]],
                [
                  /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i,
                ],
                [w, [x, I], [S, H]],
                [
                  /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                  /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                  /\blg-?([\d\w]+) bui/i,
                ],
                [w, [x, I], [S, q]],
                [
                  /(ideatab[-\w ]+)/i,
                  /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
                ],
                [w, [x, "Lenovo"], [S, H]],
                [
                  /(?:maemo|nokia).*(n900|lumia \d+)/i,
                  /nokia[-_ ]?([-\w\.]*)/i,
                ],
                [
                  [w, /_/g, " "],
                  [x, "Nokia"],
                  [S, q],
                ],
                [/(pixel c)\b/i],
                [w, [x, ye], [S, H]],
                [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                [w, [x, ye], [S, q]],
                [
                  /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
                ],
                [w, [x, j], [S, q]],
                [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                [
                  [w, "Xperia Tablet"],
                  [x, j],
                  [S, H],
                ],
                [
                  / (kb2005|in20[12]5|be20[12][59])\b/i,
                  /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
                ],
                [w, [x, "OnePlus"], [S, q]],
                [
                  /(alexa)webm/i,
                  /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
                  /(kf[a-z]+)( bui|\)).+silk\//i,
                ],
                [w, [x, lt], [S, H]],
                [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                [
                  [w, /(.+)/g, "Fire Phone $1"],
                  [x, lt],
                  [S, q],
                ],
                [/(playbook);[-\w\),; ]+(rim)/i],
                [w, x, [S, H]],
                [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                [w, [x, st], [S, q]],
                [
                  /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
                ],
                [w, [x, at], [S, H]],
                [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                [w, [x, at], [S, q]],
                [/(nexus 9)/i],
                [w, [x, "HTC"], [S, H]],
                [
                  /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                  /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                  /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
                ],
                [x, [w, /_/g, " "], [S, q]],
                [
                  /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i,
                ],
                [w, [x, "TCL"], [S, H]],
                [/(itel) ((\w+))/i],
                [
                  [x, _t],
                  w,
                  [S, yt, { tablet: ["p10001l", "w7001"], "*": "mobile" }],
                ],
                [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                [w, [x, "Acer"], [S, H]],
                [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                [w, [x, "Meizu"], [S, q]],
                [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
                [w, [x, "Ulefone"], [S, q]],
                [/droid.+; (a(?:015|06[35]|142p?))/i],
                [w, [x, "Nothing"], [S, q]],
                [
                  /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,
                  /(hp) ([\w ]+\w)/i,
                  /(asus)-?(\w+)/i,
                  /(microsoft); (lumia[\w ]+)/i,
                  /(lenovo)[-_ ]?([-\w]+)/i,
                  /(jolla)/i,
                  /(oppo) ?([\w ]+) bui/i,
                ],
                [x, w, [S, q]],
                [
                  /(kobo)\s(ereader|touch)/i,
                  /(archos) (gamepad2?)/i,
                  /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                  /(kindle)\/([\w\.]+)/i,
                  /(nook)[\w ]+build\/(\w+)/i,
                  /(dell) (strea[kpr\d ]*[\dko])/i,
                  /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                  /(trinity)[- ]*(t\d{3}) bui/i,
                  /(gigaset)[- ]+(q\w{1,9}) bui/i,
                  /(vodafone) ([\w ]+)(?:\)| bui)/i,
                ],
                [x, w, [S, H]],
                [/(surface duo)/i],
                [w, [x, N], [S, H]],
                [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                [w, [x, "Fairphone"], [S, q]],
                [/(u304aa)/i],
                [w, [x, "AT&T"], [S, q]],
                [/\bsie-(\w*)/i],
                [w, [x, "Siemens"], [S, q]],
                [/\b(rct\w+) b/i],
                [w, [x, "RCA"], [S, H]],
                [/\b(venue[\d ]{2,7}) b/i],
                [w, [x, "Dell"], [S, H]],
                [/\b(q(?:mv|ta)\w+) b/i],
                [w, [x, "Verizon"], [S, H]],
                [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                [w, [x, "Barnes & Noble"], [S, H]],
                [/\b(tm\d{3}\w+) b/i],
                [w, [x, "NuVision"], [S, H]],
                [/\b(k88) b/i],
                [w, [x, "ZTE"], [S, H]],
                [/\b(nx\d{3}j) b/i],
                [w, [x, "ZTE"], [S, q]],
                [/\b(gen\d{3}) b.+49h/i],
                [w, [x, "Swiss"], [S, q]],
                [/\b(zur\d{3}) b/i],
                [w, [x, "Swiss"], [S, H]],
                [/\b((zeki)?tb.*\b) b/i],
                [w, [x, "Zeki"], [S, H]],
                [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                [[x, "Dragon Touch"], w, [S, H]],
                [/\b(ns-?\w{0,9}) b/i],
                [w, [x, "Insignia"], [S, H]],
                [/\b((nxa|next)-?\w{0,9}) b/i],
                [w, [x, "NextBook"], [S, H]],
                [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                [[x, "Voice"], w, [S, q]],
                [/\b(lvtel\-)?(v1[12]) b/i],
                [[x, "LvTel"], w, [S, q]],
                [/\b(ph-1) /i],
                [w, [x, "Essential"], [S, q]],
                [/\b(v(100md|700na|7011|917g).*\b) b/i],
                [w, [x, "Envizen"], [S, H]],
                [/\b(trio[-\w\. ]+) b/i],
                [w, [x, "MachSpeed"], [S, H]],
                [/\btu_(1491) b/i],
                [w, [x, "Rotor"], [S, H]],
                [/(shield[\w ]+) b/i],
                [w, [x, "Nvidia"], [S, H]],
                [/(sprint) (\w+)/i],
                [x, w, [S, q]],
                [/(kin\.[onetw]{3})/i],
                [
                  [w, /\./g, " "],
                  [x, N],
                  [S, q],
                ],
                [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                [w, [x, fe], [S, H]],
                [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                [w, [x, fe], [S, q]],
                [/smart-tv.+(samsung)/i],
                [x, [S, xe]],
                [/hbbtv.+maple;(\d+)/i],
                [
                  [w, /^/, "SmartTV"],
                  [x, Z],
                  [S, xe],
                ],
                [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                [
                  [x, I],
                  [S, xe],
                ],
                [/(apple) ?tv/i],
                [x, [w, Se + " TV"], [S, xe]],
                [/crkey/i],
                [
                  [w, He + "cast"],
                  [x, ye],
                  [S, xe],
                ],
                [/droid.+aft(\w+)( bui|\))/i],
                [w, [x, lt], [S, xe]],
                [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                [w, [x, te], [S, xe]],
                [/(bravia[\w ]+)( bui|\))/i],
                [w, [x, j], [S, xe]],
                [/(mitv-\w{5}) bui/i],
                [w, [x, re], [S, xe]],
                [/Hbbtv.*(technisat) (.*);/i],
                [x, w, [S, xe]],
                [
                  /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                  /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
                ],
                [
                  [x, Gt],
                  [w, Gt],
                  [S, xe],
                ],
                [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                [[S, xe]],
                [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                [x, w, [S, We]],
                [/droid.+; (shield) bui/i],
                [w, [x, "Nvidia"], [S, We]],
                [/(playstation [345portablevi]+)/i],
                [w, [x, j], [S, We]],
                [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                [w, [x, N], [S, We]],
                [/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],
                [w, [x, Z], [S, _e]],
                [/((pebble))app/i],
                [x, w, [S, _e]],
                [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                [w, [x, Se], [S, _e]],
                [/droid.+; (glass) \d/i],
                [w, [x, ye], [S, _e]],
                [/droid.+; (wt63?0{2,3})\)/i],
                [w, [x, fe], [S, _e]],
                [/(quest( \d| pro)?)/i],
                [w, [x, pe], [S, _e]],
                [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                [x, [S, Le]],
                [/(aeobc)\b/i],
                [w, [x, lt], [S, Le]],
                [
                  /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i,
                ],
                [w, [S, q]],
                [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                [w, [S, H]],
                [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                [[S, H]],
                [
                  /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i,
                ],
                [[S, q]],
                [/(android[-\w\. ]{0,9});.+buil/i],
                [w, [x, "Generic"]],
              ],
              engine: [
                [/windows.+ edge\/([\w\.]+)/i],
                [E, [M, dt + "HTML"]],
                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                [E, [M, "Blink"]],
                [
                  /(presto)\/([\w\.]+)/i,
                  /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                  /ekioh(flow)\/([\w\.]+)/i,
                  /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                  /(icab)[\/ ]([23]\.[\d\.]+)/i,
                  /\b(libweb)/i,
                ],
                [M, E],
                [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                [E, M],
              ],
              os: [
                [/microsoft (windows) (vista|xp)/i],
                [M, E],
                [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
                [M, [E, yt, Ct]],
                [
                  /windows nt 6\.2; (arm)/i,
                  /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
                  /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i,
                ],
                [
                  [E, yt, Ct],
                  [M, "Windows"],
                ],
                [
                  /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                  /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
                  /cfnetwork\/.+darwin/i,
                ],
                [
                  [E, /_/g, "."],
                  [M, "iOS"],
                ],
                [
                  /(mac os x) ?([\w\. ]*)/i,
                  /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
                ],
                [
                  [M, Ge],
                  [E, /_/g, "."],
                ],
                [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                [E, M],
                [
                  /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                  /(blackberry)\w*\/([\w\.]*)/i,
                  /(tizen|kaios)[\/ ]([\w\.]+)/i,
                  /\((series40);/i,
                ],
                [M, E],
                [/\(bb(10);/i],
                [E, [M, st]],
                [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                [E, [M, "Symbian"]],
                [
                  /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
                ],
                [E, [M, Ae + " OS"]],
                [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                [E, [M, "webOS"]],
                [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                [E, [M, "watchOS"]],
                [/crkey\/([\d\.]+)/i],
                [E, [M, He + "cast"]],
                [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                [[M, we], E],
                [
                  /panasonic;(viera)/i,
                  /(netrange)mmh/i,
                  /(nettv)\/(\d+\.[\w\.]+)/i,
                  /(nintendo|playstation) ([wids345portablevuch]+)/i,
                  /(xbox); +xbox ([^\);]+)/i,
                  /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                  /(mint)[\/\(\) ]?(\w*)/i,
                  /(mageia|vectorlinux)[; ]/i,
                  /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                  /(hurd|linux) ?([\w\.]*)/i,
                  /(gnu) ?([\w\.]*)/i,
                  /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                  /(haiku) (\w+)/i,
                ],
                [M, E],
                [/(sunos) ?([\w\.\d]*)/i],
                [[M, "Solaris"], E],
                [
                  /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                  /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                  /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                  /(unix) ?([\w\.]*)/i,
                ],
                [M, E],
              ],
            },
            Ke = function (ne, se) {
              if (
                (typeof ne === oe && ((se = ne), (ne = b)),
                !(this instanceof Ke))
              )
                return new Ke(ne, se).getResult();
              var X = typeof m !== ie && m.navigator ? m.navigator : b,
                he = ne || (X && X.userAgent ? X.userAgent : $),
                $e = X && X.userAgentData ? X.userAgentData : b,
                De = se ? tr(rn, se) : rn,
                ce = X && X.userAgent == he;
              return (
                (this.getBrowser = function () {
                  var K = {};
                  return (
                    (K[M] = b),
                    (K[E] = b),
                    At.call(K, he, De.browser),
                    (K[ae] = Ln(K[E])),
                    ce &&
                      X &&
                      X.brave &&
                      typeof X.brave.isBrave == le &&
                      (K[M] = "Brave"),
                    K
                  );
                }),
                (this.getCPU = function () {
                  var K = {};
                  return (K[Me] = b), At.call(K, he, De.cpu), K;
                }),
                (this.getDevice = function () {
                  var K = {};
                  return (
                    (K[x] = b),
                    (K[w] = b),
                    (K[S] = b),
                    At.call(K, he, De.device),
                    ce && !K[S] && $e && $e.mobile && (K[S] = q),
                    ce &&
                      K[w] == "Macintosh" &&
                      X &&
                      typeof X.standalone !== ie &&
                      X.maxTouchPoints &&
                      X.maxTouchPoints > 2 &&
                      ((K[w] = "iPad"), (K[S] = H)),
                    K
                  );
                }),
                (this.getEngine = function () {
                  var K = {};
                  return (K[M] = b), (K[E] = b), At.call(K, he, De.engine), K;
                }),
                (this.getOS = function () {
                  var K = {};
                  return (
                    (K[M] = b),
                    (K[E] = b),
                    At.call(K, he, De.os),
                    ce &&
                      !K[M] &&
                      $e &&
                      $e.platform &&
                      $e.platform != "Unknown" &&
                      (K[M] = $e.platform
                        .replace(/chrome os/i, we)
                        .replace(/macos/i, Ge)),
                    K
                  );
                }),
                (this.getResult = function () {
                  return {
                    ua: this.getUA(),
                    browser: this.getBrowser(),
                    engine: this.getEngine(),
                    os: this.getOS(),
                    device: this.getDevice(),
                    cpu: this.getCPU(),
                  };
                }),
                (this.getUA = function () {
                  return he;
                }),
                (this.setUA = function (K) {
                  return (
                    (he = typeof K === de && K.length > be ? Gt(K, be) : K),
                    this
                  );
                }),
                this.setUA(he),
                this
              );
            };
          (Ke.VERSION = G),
            (Ke.BROWSER = Ft([M, E, ae])),
            (Ke.CPU = Ft([Me])),
            (Ke.DEVICE = Ft([w, x, S, We, q, xe, H, _e, Le])),
            (Ke.ENGINE = Ke.OS = Ft([M, E])),
            U.exports && (V = U.exports = Ke),
            (V.UAParser = Ke);
          var Tt = typeof m !== ie && (m.jQuery || m.Zepto);
          if (Tt && !Tt.ua) {
            var Qt = new Ke();
            (Tt.ua = Qt.getResult()),
              (Tt.ua.get = function () {
                return Qt.getUA();
              }),
              (Tt.ua.set = function (ne) {
                Qt.setUA(ne);
                var se = Qt.getResult();
                for (var X in se) Tt.ua[X] = se[X];
              });
          }
        })(typeof window == "object" ? window : qc);
      })(Ni, Ni.exports)),
    Ni.exports
  );
}
var d1;
function Xc() {
  if (d1) return A;
  (d1 = 1), Object.defineProperty(A, "__esModule", { value: !0 });
  function U(p) {
    return p && typeof p == "object" && "default" in p ? p.default : p;
  }
  var V = Xo(),
    m = U(V),
    b = Kc(),
    G = new b(),
    $ = G.getBrowser(),
    Ee = G.getCPU(),
    le = G.getDevice(),
    ie = G.getEngine(),
    oe = G.getOS(),
    de = G.getUA(),
    ae = function (a) {
      return G.setUA(a);
    },
    w = function (a) {
      if (!a) {
        console.error("No userAgent string was provided");
        return;
      }
      var u = new b(a);
      return {
        UA: u,
        browser: u.getBrowser(),
        cpu: u.getCPU(),
        device: u.getDevice(),
        engine: u.getEngine(),
        os: u.getOS(),
        ua: u.getUA(),
        setUserAgent: function (C) {
          return u.setUA(C);
        },
      };
    },
    M = Object.freeze({
      ClientUAInstance: G,
      browser: $,
      cpu: Ee,
      device: le,
      engine: ie,
      os: oe,
      ua: de,
      setUa: ae,
      parseUserAgent: w,
    });
  function S(p, a) {
    var u = Object.keys(p);
    if (Object.getOwnPropertySymbols) {
      var y = Object.getOwnPropertySymbols(p);
      a &&
        (y = y.filter(function (C) {
          return Object.getOwnPropertyDescriptor(p, C).enumerable;
        })),
        u.push.apply(u, y);
    }
    return u;
  }
  function x(p) {
    for (var a = 1; a < arguments.length; a++) {
      var u = arguments[a] != null ? arguments[a] : {};
      a % 2
        ? S(Object(u), !0).forEach(function (y) {
            H(p, y, u[y]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(u))
          : S(Object(u)).forEach(function (y) {
              Object.defineProperty(
                p,
                y,
                Object.getOwnPropertyDescriptor(u, y)
              );
            });
    }
    return p;
  }
  function E(p) {
    "@babel/helpers - typeof";
    return (
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? (E = function (a) {
            return typeof a;
          })
        : (E = function (a) {
            return a &&
              typeof Symbol == "function" &&
              a.constructor === Symbol &&
              a !== Symbol.prototype
              ? "symbol"
              : typeof a;
          }),
      E(p)
    );
  }
  function Me(p, a) {
    if (!(p instanceof a))
      throw new TypeError("Cannot call a class as a function");
  }
  function We(p, a) {
    for (var u = 0; u < a.length; u++) {
      var y = a[u];
      (y.enumerable = y.enumerable || !1),
        (y.configurable = !0),
        "value" in y && (y.writable = !0),
        Object.defineProperty(p, y.key, y);
    }
  }
  function q(p, a, u) {
    return a && We(p.prototype, a), p;
  }
  function H(p, a, u) {
    return (
      a in p
        ? Object.defineProperty(p, a, {
            value: u,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (p[a] = u),
      p
    );
  }
  function xe() {
    return (
      (xe =
        Object.assign ||
        function (p) {
          for (var a = 1; a < arguments.length; a++) {
            var u = arguments[a];
            for (var y in u)
              Object.prototype.hasOwnProperty.call(u, y) && (p[y] = u[y]);
          }
          return p;
        }),
      xe.apply(this, arguments)
    );
  }
  function _e(p, a) {
    if (typeof a != "function" && a !== null)
      throw new TypeError("Super expression must either be null or a function");
    (p.prototype = Object.create(a && a.prototype, {
      constructor: { value: p, writable: !0, configurable: !0 },
    })),
      a && be(p, a);
  }
  function Le(p) {
    return (
      (Le = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (u) {
            return u.__proto__ || Object.getPrototypeOf(u);
          }),
      Le(p)
    );
  }
  function be(p, a) {
    return (
      (be =
        Object.setPrototypeOf ||
        function (y, C) {
          return (y.__proto__ = C), y;
        }),
      be(p, a)
    );
  }
  function lt(p, a) {
    if (p == null) return {};
    var u = {},
      y = Object.keys(p),
      C,
      ee;
    for (ee = 0; ee < y.length; ee++)
      (C = y[ee]), !(a.indexOf(C) >= 0) && (u[C] = p[C]);
    return u;
  }
  function Se(p, a) {
    if (p == null) return {};
    var u = lt(p, a),
      y,
      C;
    if (Object.getOwnPropertySymbols) {
      var ee = Object.getOwnPropertySymbols(p);
      for (C = 0; C < ee.length; C++)
        (y = ee[C]),
          !(a.indexOf(y) >= 0) &&
            Object.prototype.propertyIsEnumerable.call(p, y) &&
            (u[y] = p[y]);
    }
    return u;
  }
  function at(p) {
    if (p === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return p;
  }
  function st(p, a) {
    if (a && (typeof a == "object" || typeof a == "function")) return a;
    if (a !== void 0)
      throw new TypeError(
        "Derived constructors may only return object or undefined"
      );
    return at(p);
  }
  function Fe(p, a) {
    return He(p) || dt(p, a) || Ae(p, a) || L();
  }
  function He(p) {
    if (Array.isArray(p)) return p;
  }
  function dt(p, a) {
    var u =
      p == null
        ? null
        : (typeof Symbol < "u" && p[Symbol.iterator]) || p["@@iterator"];
    if (u != null) {
      var y = [],
        C = !0,
        ee = !1,
        Ce,
        tt;
      try {
        for (
          u = u.call(p);
          !(C = (Ce = u.next()).done) &&
          (y.push(Ce.value), !(a && y.length === a));
          C = !0
        );
      } catch (mr) {
        (ee = !0), (tt = mr);
      } finally {
        try {
          !C && u.return != null && u.return();
        } finally {
          if (ee) throw tt;
        }
      }
      return y;
    }
  }
  function Ae(p, a) {
    if (p) {
      if (typeof p == "string") return ye(p, a);
      var u = Object.prototype.toString.call(p).slice(8, -1);
      if (
        (u === "Object" && p.constructor && (u = p.constructor.name),
        u === "Map" || u === "Set")
      )
        return Array.from(p);
      if (
        u === "Arguments" ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)
      )
        return ye(p, a);
    }
  }
  function ye(p, a) {
    (a == null || a > p.length) && (a = p.length);
    for (var u = 0, y = new Array(a); u < a; u++) y[u] = p[u];
    return y;
  }
  function L() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var I = {
      Mobile: "mobile",
      Tablet: "tablet",
      SmartTv: "smarttv",
      Console: "console",
      Wearable: "wearable",
      Embedded: "embedded",
      Browser: void 0,
    },
    N = {
      Chrome: "Chrome",
      Firefox: "Firefox",
      Opera: "Opera",
      Yandex: "Yandex",
      Safari: "Safari",
      InternetExplorer: "Internet Explorer",
      Edge: "Edge",
      Chromium: "Chromium",
      Ie: "IE",
      MobileSafari: "Mobile Safari",
      EdgeChromium: "Edge Chromium",
      MIUI: "MIUI Browser",
      SamsungBrowser: "Samsung Browser",
    },
    f = {
      IOS: "iOS",
      Android: "Android",
      WindowsPhone: "Windows Phone",
      Windows: "Windows",
      MAC_OS: "Mac OS",
    },
    _ = {
      isMobile: !1,
      isTablet: !1,
      isBrowser: !1,
      isSmartTV: !1,
      isConsole: !1,
      isWearable: !1,
    },
    Z = function (a) {
      switch (a) {
        case I.Mobile:
          return { isMobile: !0 };
        case I.Tablet:
          return { isTablet: !0 };
        case I.SmartTv:
          return { isSmartTV: !0 };
        case I.Console:
          return { isConsole: !0 };
        case I.Wearable:
          return { isWearable: !0 };
        case I.Browser:
          return { isBrowser: !0 };
        case I.Embedded:
          return { isEmbedded: !0 };
        default:
          return _;
      }
    },
    te = function (a) {
      return ae(a);
    },
    j = function (a) {
      var u =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "none";
      return a || u;
    },
    re = function () {
      return typeof window < "u" && (window.navigator || navigator)
        ? window.navigator || navigator
        : !1;
    },
    fe = function (a) {
      var u = re();
      return (
        u &&
        u.platform &&
        (u.platform.indexOf(a) !== -1 ||
          (u.platform === "MacIntel" &&
            u.maxTouchPoints > 1 &&
            !window.MSStream))
      );
    },
    pe = function (a, u, y, C, ee) {
      return {
        isBrowser: a,
        browserMajorVersion: j(u.major),
        browserFullVersion: j(u.version),
        browserName: j(u.name),
        engineName: j(y.name),
        engineVersion: j(y.version),
        osName: j(C.name),
        osVersion: j(C.version),
        userAgent: j(ee),
      };
    },
    we = function (a, u, y, C) {
      return x({}, a, {
        vendor: j(u.vendor),
        model: j(u.model),
        os: j(y.name),
        osVersion: j(y.version),
        ua: j(C),
      });
    },
    Ge = function (a, u, y, C) {
      return {
        isSmartTV: a,
        engineName: j(u.name),
        engineVersion: j(u.version),
        osName: j(y.name),
        osVersion: j(y.version),
        userAgent: j(C),
      };
    },
    nn = function (a, u, y, C) {
      return {
        isConsole: a,
        engineName: j(u.name),
        engineVersion: j(u.version),
        osName: j(y.name),
        osVersion: j(y.version),
        userAgent: j(C),
      };
    },
    tr = function (a, u, y, C) {
      return {
        isWearable: a,
        engineName: j(u.name),
        engineVersion: j(u.version),
        osName: j(y.name),
        osVersion: j(y.version),
        userAgent: j(C),
      };
    },
    Ft = function (a, u, y, C, ee) {
      return {
        isEmbedded: a,
        vendor: j(u.vendor),
        model: j(u.model),
        engineName: j(y.name),
        engineVersion: j(y.version),
        osName: j(C.name),
        osVersion: j(C.version),
        userAgent: j(ee),
      };
    };
  function vn(p) {
    var a = p ? w(p) : M,
      u = a.device,
      y = a.browser,
      C = a.engine,
      ee = a.os,
      Ce = a.ua,
      tt = Z(u.type),
      mr = tt.isBrowser,
      ti = tt.isMobile,
      hr = tt.isTablet,
      vr = tt.isSmartTV,
      ni = tt.isConsole,
      bt = tt.isWearable,
      gr = tt.isEmbedded;
    if (mr) return pe(mr, y, C, ee, Ce);
    if (vr) return Ge(vr, C, ee, Ce);
    if (ni) return nn(ni, C, ee, Ce);
    if (ti || hr) return we(tt, u, ee, Ce);
    if (bt) return tr(bt, C, ee, Ce);
    if (gr) return Ft(gr, u, C, ee, Ce);
  }
  var _t = function (a) {
      var u = a.type;
      return u === I.Mobile;
    },
    Ln = function (a) {
      var u = a.type;
      return u === I.Tablet;
    },
    Gt = function (a) {
      var u = a.type;
      return u === I.Mobile || u === I.Tablet;
    },
    At = function (a) {
      var u = a.type;
      return u === I.SmartTv;
    },
    yt = function (a) {
      var u = a.type;
      return u === I.Browser;
    },
    $t = function (a) {
      var u = a.type;
      return u === I.Wearable;
    },
    Ct = function (a) {
      var u = a.type;
      return u === I.Console;
    },
    rn = function (a) {
      var u = a.type;
      return u === I.Embedded;
    },
    Ke = function (a) {
      var u = a.vendor;
      return j(u);
    },
    Tt = function (a) {
      var u = a.model;
      return j(u);
    },
    Qt = function (a) {
      var u = a.type;
      return j(u, "browser");
    },
    ne = function (a) {
      var u = a.name;
      return u === f.Android;
    },
    se = function (a) {
      var u = a.name;
      return u === f.Windows;
    },
    X = function (a) {
      var u = a.name;
      return u === f.MAC_OS;
    },
    he = function (a) {
      var u = a.name;
      return u === f.WindowsPhone;
    },
    $e = function (a) {
      var u = a.name;
      return u === f.IOS;
    },
    De = function (a) {
      var u = a.version;
      return j(u);
    },
    ce = function (a) {
      var u = a.name;
      return j(u);
    },
    K = function (a) {
      var u = a.name;
      return u === N.Chrome;
    },
    Je = function (a) {
      var u = a.name;
      return u === N.Firefox;
    },
    gn = function (a) {
      var u = a.name;
      return u === N.Chromium;
    },
    Rt = function (a) {
      var u = a.name;
      return u === N.Edge;
    },
    nr = function (a) {
      var u = a.name;
      return u === N.Yandex;
    },
    rr = function (a) {
      var u = a.name;
      return u === N.Safari || u === N.MobileSafari;
    },
    ir = function (a) {
      var u = a.name;
      return u === N.MobileSafari;
    },
    or = function (a) {
      var u = a.name;
      return u === N.Opera;
    },
    on = function (a) {
      var u = a.name;
      return u === N.InternetExplorer || u === N.Ie;
    },
    ln = function (a) {
      var u = a.name;
      return u === N.MIUI;
    },
    Dr = function (a) {
      var u = a.name;
      return u === N.SamsungBrowser;
    },
    Vr = function (a) {
      var u = a.version;
      return j(u);
    },
    Br = function (a) {
      var u = a.major;
      return j(u);
    },
    Wr = function (a) {
      var u = a.name;
      return j(u);
    },
    Hr = function (a) {
      var u = a.name;
      return j(u);
    },
    lr = function (a) {
      var u = a.version;
      return j(u);
    },
    Gr = function () {
      var a = re(),
        u = a && a.userAgent && a.userAgent.toLowerCase();
      return typeof u == "string" ? /electron/.test(u) : !1;
    },
    zt = function (a) {
      return typeof a == "string" && a.indexOf("Edg/") !== -1;
    },
    ar = function () {
      var a = re();
      return (
        a &&
        (/iPad|iPhone|iPod/.test(a.platform) ||
          (a.platform === "MacIntel" && a.maxTouchPoints > 1)) &&
        !window.MSStream
      );
    },
    et = function () {
      return fe("iPad");
    },
    ji = function () {
      return fe("iPhone");
    },
    yn = function () {
      return fe("iPod");
    },
    In = function (a) {
      return j(a);
    };
  function Fn(p) {
    var a = p || M,
      u = a.device,
      y = a.browser,
      C = a.os,
      ee = a.engine,
      Ce = a.ua;
    return {
      isSmartTV: At(u),
      isConsole: Ct(u),
      isWearable: $t(u),
      isEmbedded: rn(u),
      isMobileSafari: ir(y) || et(),
      isChromium: gn(y),
      isMobile: Gt(u) || et(),
      isMobileOnly: _t(u),
      isTablet: Ln(u) || et(),
      isBrowser: yt(u),
      isDesktop: yt(u),
      isAndroid: ne(C),
      isWinPhone: he(C),
      isIOS: $e(C) || et(),
      isChrome: K(y),
      isFirefox: Je(y),
      isSafari: rr(y),
      isOpera: or(y),
      isIE: on(y),
      osVersion: De(C),
      osName: ce(C),
      fullBrowserVersion: Vr(y),
      browserVersion: Br(y),
      browserName: Wr(y),
      mobileVendor: Ke(u),
      mobileModel: Tt(u),
      engineName: Hr(ee),
      engineVersion: lr(ee),
      getUA: In(Ce),
      isEdge: Rt(y) || zt(Ce),
      isYandex: nr(y),
      deviceType: Qt(u),
      isIOS13: ar(),
      isIPad13: et(),
      isIPhone13: ji(),
      isIPod13: yn(),
      isElectron: Gr(),
      isEdgeChromium: zt(Ce),
      isLegacyEdge: Rt(y) && !zt(Ce),
      isWindows: se(C),
      isMacOs: X(C),
      isMIUI: ln(y),
      isSamsungBrowser: Dr(y),
    };
  }
  var sr = At(le),
    Li = Ct(le),
    Ii = $t(le),
    Zo = rn(le),
    an = ir($) || et(),
    Fi = gn($),
    An = Gt(le) || et(),
    Ai = _t(le),
    $r = Ln(le) || et(),
    Qr = yt(le),
    Ri = yt(le),
    Yr = ne(oe),
    bi = he(oe),
    Ui = $e(oe) || et(),
    Oe = K($),
    Jo = Je($),
    qr = rr($),
    Di = or($),
    Rn = on($),
    el = De(oe),
    Vi = ce(oe),
    ur = Vr($),
    Pt = Br($),
    tl = Wr($),
    wt = Ke(le),
    nl = Tt(le),
    rl = Hr(ie),
    il = lr(ie),
    cr = In(de),
    dr = Rt($) || zt(de),
    bn = nr($),
    fr = Qt(le),
    ol = ar(),
    ll = et(),
    Kr = ji(),
    Bi = yn(),
    Xr = Gr(),
    Un = zt(de),
    al = Rt($) && !zt(de),
    Zr = se(oe),
    ge = X(oe),
    Wi = ln($),
    Hi = Dr($),
    Jr = function (a) {
      if (!a || typeof a != "string") {
        console.error("No valid user agent string was provided");
        return;
      }
      var u = w(a),
        y = u.device,
        C = u.browser,
        ee = u.os,
        Ce = u.engine,
        tt = u.ua;
      return Fn({ device: y, browser: C, os: ee, engine: Ce, ua: tt });
    },
    Gi = function (a) {
      var u = a.renderWithFragment,
        y = a.children,
        C = Se(a, ["renderWithFragment", "children"]);
      return Yr
        ? u
          ? m.createElement(V.Fragment, null, y)
          : m.createElement("div", C, y)
        : null;
    },
    $i = function (a) {
      var u = a.renderWithFragment,
        y = a.children,
        C = Se(a, ["renderWithFragment", "children"]);
      return Qr
        ? u
          ? m.createElement(V.Fragment, null, y)
          : m.createElement("div", C, y)
        : null;
    },
    Qi = function (a) {
      var u = a.renderWithFragment,
        y = a.children,
        C = Se(a, ["renderWithFragment", "children"]);
      return Rn
        ? u
          ? m.createElement(V.Fragment, null, y)
          : m.createElement("div", C, y)
        : null;
    },
    ei = function (a) {
      var u = a.renderWithFragment,
        y = a.children,
        C = Se(a, ["renderWithFragment", "children"]);
      return Ui
        ? u
          ? m.createElement(V.Fragment, null, y)
          : m.createElement("div", C, y)
        : null;
    },
    pr = function (a) {
      var u = a.renderWithFragment,
        y = a.children,
        C = Se(a, ["renderWithFragment", "children"]);
      return An
        ? u
          ? m.createElement(V.Fragment, null, y)
          : m.createElement("div", C, y)
        : null;
    },
    Yt = function (a) {
      var u = a.renderWithFragment,
        y = a.children,
        C = Se(a, ["renderWithFragment", "children"]);
      return $r
        ? u
          ? m.createElement(V.Fragment, null, y)
          : m.createElement("div", C, y)
        : null;
    },
    qt = function (a) {
      var u = a.renderWithFragment,
        y = a.children,
        C = Se(a, ["renderWithFragment", "children"]);
      return bi
        ? u
          ? m.createElement(V.Fragment, null, y)
          : m.createElement("div", C, y)
        : null;
    },
    Kt = function (a) {
      var u = a.renderWithFragment,
        y = a.children;
      a.viewClassName, a.style;
      var C = Se(a, [
        "renderWithFragment",
        "children",
        "viewClassName",
        "style",
      ]);
      return Ai
        ? u
          ? m.createElement(V.Fragment, null, y)
          : m.createElement("div", C, y)
        : null;
    },
    Dn = function (a) {
      var u = a.renderWithFragment,
        y = a.children,
        C = Se(a, ["renderWithFragment", "children"]);
      return sr
        ? u
          ? m.createElement(V.Fragment, null, y)
          : m.createElement("div", C, y)
        : null;
    },
    Vn = function (a) {
      var u = a.renderWithFragment,
        y = a.children,
        C = Se(a, ["renderWithFragment", "children"]);
      return Li
        ? u
          ? m.createElement(V.Fragment, null, y)
          : m.createElement("div", C, y)
        : null;
    },
    Xt = function (a) {
      var u = a.renderWithFragment,
        y = a.children,
        C = Se(a, ["renderWithFragment", "children"]);
      return Ii
        ? u
          ? m.createElement(V.Fragment, null, y)
          : m.createElement("div", C, y)
        : null;
    },
    sl = function (a) {
      var u = a.renderWithFragment,
        y = a.children;
      a.viewClassName, a.style;
      var C = a.condition,
        ee = Se(a, [
          "renderWithFragment",
          "children",
          "viewClassName",
          "style",
          "condition",
        ]);
      return C
        ? u
          ? m.createElement(V.Fragment, null, y)
          : m.createElement("div", ee, y)
        : null;
    };
  function Yi(p) {
    return (function (a) {
      _e(u, a);
      function u(y) {
        var C;
        return (
          Me(this, u),
          (C = st(this, Le(u).call(this, y))),
          (C.isEventListenerAdded = !1),
          (C.handleOrientationChange = C.handleOrientationChange.bind(at(C))),
          (C.onOrientationChange = C.onOrientationChange.bind(at(C))),
          (C.onPageLoad = C.onPageLoad.bind(at(C))),
          (C.state = { isLandscape: !1, isPortrait: !1 }),
          C
        );
      }
      return (
        q(u, [
          {
            key: "handleOrientationChange",
            value: function () {
              this.isEventListenerAdded || (this.isEventListenerAdded = !0);
              var C = window.innerWidth > window.innerHeight ? 90 : 0;
              this.setState({ isPortrait: C === 0, isLandscape: C === 90 });
            },
          },
          {
            key: "onOrientationChange",
            value: function () {
              this.handleOrientationChange();
            },
          },
          {
            key: "onPageLoad",
            value: function () {
              this.handleOrientationChange();
            },
          },
          {
            key: "componentDidMount",
            value: function () {
              (typeof window > "u" ? "undefined" : E(window)) !== void 0 &&
                An &&
                (this.isEventListenerAdded
                  ? window.removeEventListener("load", this.onPageLoad, !1)
                  : (this.handleOrientationChange(),
                    window.addEventListener("load", this.onPageLoad, !1)),
                window.addEventListener(
                  "resize",
                  this.onOrientationChange,
                  !1
                ));
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              window.removeEventListener(
                "resize",
                this.onOrientationChange,
                !1
              );
            },
          },
          {
            key: "render",
            value: function () {
              return m.createElement(
                p,
                xe({}, this.props, {
                  isLandscape: this.state.isLandscape,
                  isPortrait: this.state.isPortrait,
                })
              );
            },
          },
        ]),
        u
      );
    })(m.Component);
  }
  function Bn() {
    var p = V.useState(function () {
        var ee = window.innerWidth > window.innerHeight ? 90 : 0;
        return {
          isPortrait: ee === 0,
          isLandscape: ee === 90,
          orientation: ee === 0 ? "portrait" : "landscape",
        };
      }),
      a = Fe(p, 2),
      u = a[0],
      y = a[1],
      C = V.useCallback(
        function () {
          var ee = window.innerWidth > window.innerHeight ? 90 : 0,
            Ce = {
              isPortrait: ee === 0,
              isLandscape: ee === 90,
              orientation: ee === 0 ? "portrait" : "landscape",
            };
          u.orientation !== Ce.orientation && y(Ce);
        },
        [u.orientation]
      );
    return (
      V.useEffect(
        function () {
          return (
            (typeof window > "u" ? "undefined" : E(window)) !== void 0 &&
              An &&
              (C(),
              window.addEventListener("load", C, !1),
              window.addEventListener("resize", C, !1)),
            function () {
              window.removeEventListener("resize", C, !1),
                window.removeEventListener("load", C, !1);
            }
          );
        },
        [C]
      ),
      u
    );
  }
  function qi(p) {
    var a = p || window.navigator.userAgent;
    return w(a);
  }
  function Ki(p) {
    var a = p || window.navigator.userAgent,
      u = qi(a),
      y = Fn(u);
    return [y, u];
  }
  return (
    (A.AndroidView = Gi),
    (A.BrowserTypes = N),
    (A.BrowserView = $i),
    (A.ConsoleView = Vn),
    (A.CustomView = sl),
    (A.IEView = Qi),
    (A.IOSView = ei),
    (A.MobileOnlyView = Kt),
    (A.MobileView = pr),
    (A.OsTypes = f),
    (A.SmartTVView = Dn),
    (A.TabletView = Yt),
    (A.WearableView = Xt),
    (A.WinPhoneView = qt),
    (A.browserName = tl),
    (A.browserVersion = Pt),
    (A.deviceDetect = vn),
    (A.deviceType = fr),
    (A.engineName = rl),
    (A.engineVersion = il),
    (A.fullBrowserVersion = ur),
    (A.getSelectorsByUserAgent = Jr),
    (A.getUA = cr),
    (A.isAndroid = Yr),
    (A.isBrowser = Qr),
    (A.isChrome = Oe),
    (A.isChromium = Fi),
    (A.isConsole = Li),
    (A.isDesktop = Ri),
    (A.isEdge = dr),
    (A.isEdgeChromium = Un),
    (A.isElectron = Xr),
    (A.isEmbedded = Zo),
    (A.isFirefox = Jo),
    (A.isIE = Rn),
    (A.isIOS = Ui),
    (A.isIOS13 = ol),
    (A.isIPad13 = ll),
    (A.isIPhone13 = Kr),
    (A.isIPod13 = Bi),
    (A.isLegacyEdge = al),
    (A.isMIUI = Wi),
    (A.isMacOs = ge),
    (A.isMobile = An),
    (A.isMobileOnly = Ai),
    (A.isMobileSafari = an),
    (A.isOpera = Di),
    (A.isSafari = qr),
    (A.isSamsungBrowser = Hi),
    (A.isSmartTV = sr),
    (A.isTablet = $r),
    (A.isWearable = Ii),
    (A.isWinPhone = bi),
    (A.isWindows = Zr),
    (A.isYandex = bn),
    (A.mobileModel = nl),
    (A.mobileVendor = wt),
    (A.osName = Vi),
    (A.osVersion = el),
    (A.parseUserAgent = w),
    (A.setUserAgent = te),
    (A.useDeviceData = qi),
    (A.useDeviceSelectors = Ki),
    (A.useMobileOrientation = Bn),
    (A.withOrientationChange = Yi),
    A
  );
}
var Ur = Xc();
const Oi = ({ children: U, title: V, id: m }) =>
    k.jsx(k.Fragment, {
      children: k.jsxs("div", {
        className: `card relative min-h-96 bg-card-background rounded-2xl m-auto shadow-2xl p-8 ${Ur.isDesktop ? "w-1/2" : "w-11/12"}`,
        id: m,
        children: [
          k.jsx("div", {
            className: "card-title mb-3",
            children: k.jsx("p", {
              className:
                "text-5xl  text-black font-thin border-b-2 border-pink-300 text-left",
              children: V,
            }),
          }),
          k.jsx("div", {
            className: "card-content flex flex-col text-black",
            children: U,
          }),
        ],
      }),
    }),
  Zc =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23FFFFFF'%20width='100%25'%20height='auto'%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m15.86%209.16-1.43-5.31a1.88%201.88%200%200%200-1.81-1.37h-.44v1.26h.44a.63.63%200%200%201%20.6.46L14%207.06a3.9%203.9%200%200%200-1.71-.39%203.64%203.64%200%200%200-3.7%203H7.42a3.64%203.64%200%200%200-3.7-3A3.87%203.87%200%200%200%202%207.06l.78-2.86a.63.63%200%200%201%20.6-.46h.44V2.48h-.44a1.88%201.88%200%200%200-1.81%201.37L.14%209.16a3.19%203.19%200%200%200-.14.94%203.59%203.59%200%200%200%203.72%203.42%203.71%203.71%200%200%200%203.62-2.59h1.32a3.71%203.71%200%200%200%203.62%202.59A3.59%203.59%200%200%200%2016%2010.1a3.19%203.19%200%200%200-.14-.94zm-12.14%203.1a2.33%202.33%200%200%201-2.46-2.16%202.33%202.33%200%200%201%202.46-2.17%202.34%202.34%200%200%201%202.47%202.17%202.34%202.34%200%200%201-2.47%202.16zm8.56%200a2.34%202.34%200%200%201-2.47-2.16%202.34%202.34%200%200%201%202.47-2.17%202.33%202.33%200%200%201%202.46%202.17%202.33%202.33%200%200%201-2.46%202.16z'/%3e%3c/svg%3e",
  Jc =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23FFFFFF'%20width='800px'%20height='800px'%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m15.18%206.14-3.81-4.23a1.24%201.24%200%200%200-.93-.41H1.75A1.25%201.25%200%200%200%20.5%202.75v10.5a1.25%201.25%200%200%200%201.25%201.25h12.5a1.25%201.25%200%200%200%201.25-1.25V7a1.24%201.24%200%200%200-.32-.86zm-6-3.39v2H4.25v-2zm5.05%2010.5H1.75V2.75H3v2A1.25%201.25%200%200%200%204.25%206H9.2a1.25%201.25%200%200%200%201.25-1.25v-2L14.25%207z'/%3e%3cpath%20d='M8%207.56a2.43%202.43%200%200%200-2.5%202.35A2.43%202.43%200%200%200%208%2012.25a2.43%202.43%200%200%200%202.5-2.34A2.43%202.43%200%200%200%208%207.56zM8%2011a1.18%201.18%200%200%201-1.25-1.09A1.18%201.18%200%200%201%208%208.81a1.18%201.18%200%200%201%201.25%201.1A1.18%201.18%200%200%201%208%2011z'/%3e%3c/svg%3e",
  e0 =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23FFFFFF'%20width='800px'%20height='800px'%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.32%2015.653a.812.812%200%200%201-.086-.855c.176-.342.245-.733.2-1.118a2.106%202.106%200%200%200-.267-.779%202.027%202.027%200%200%200-.541-.606%203.96%203.96%200%200%201-1.481-2.282c-1.708%202.239-1.053%203.51-.235%204.63a.748.748%200%200%201-.014.901.87.87%200%200%201-.394.283.838.838%200%200%201-.478.023c-1.105-.27-2.145-.784-2.85-1.603a4.686%204.686%200%200%201-.906-1.555%204.811%204.811%200%200%201-.263-1.797s-.133-2.463%202.837-4.876c0%200%203.51-2.978%202.292-5.18a.621.621%200%200%201%20.112-.653.558.558%200%200%201%20.623-.147l.146.058a7.63%207.63%200%200%201%202.96%203.5c.58%201.413.576%203.06.184%204.527.325-.292.596-.641.801-1.033l.029-.064c.198-.477.821-.325%201.055-.013.086.137%202.292%203.343%201.107%206.048a5.516%205.516%200%200%201-1.84%202.027%206.127%206.127%200%200%201-2.138.893.834.834%200%200%201-.472-.038.867.867%200%200%201-.381-.29zM7.554%207.892a.422.422%200%200%201%20.55.146c.04.059.066.126.075.198l.045.349c.02.511.014%201.045.213%201.536.206.504.526.95.932%201.298a3.06%203.06%200%200%201%201.16%201.422c.22.564.25%201.19.084%201.773a4.123%204.123%200%200%200%201.39-.757l.103-.084c.336-.277.613-.623.813-1.017.201-.393.322-.825.354-1.269.065-1.025-.284-2.054-.827-2.972-.248.36-.59.639-.985.804-.247.105-.509.17-.776.19a.792.792%200%200%201-.439-.1.832.832%200%200%201-.321-.328.825.825%200%200%201-.035-.729c.412-.972.54-2.05.365-3.097a5.874%205.874%200%200%200-1.642-3.16c-.156%202.205-2.417%204.258-2.881%204.7a3.537%203.537%200%200%201-.224.194c-2.426%201.965-2.26%203.755-2.26%203.834a3.678%203.678%200%200%200%20.459%202.043c.365.645.89%201.177%201.52%201.54C4.5%2012.808%204.5%2010.89%207.183%208.14l.372-.25z'/%3e%3c/svg%3e",
  t0 =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23FFFFFF'%20width='800px'%20height='800px'%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.13%204.13%209.37.37A1.26%201.26%200%200%200%208.48%200H3.75A1.25%201.25%200%200%200%202.5%201.25v13.5A1.25%201.25%200%200%200%203.75%2016h8.5a1.25%201.25%200%200%200%201.25-1.25V5a1.26%201.26%200%200%200-.37-.87zm-.88%2010.62h-8.5V1.25h3.48V5a1.25%201.25%200%200%200%201.25%201.27h3.77zm0-9.73H8.48V1.25L12.25%205z'/%3e%3cpath%20d='M5%207.5h6v1.25H5zM5%2010h6v1.25H5z'/%3e%3c/svg%3e",
  n0 =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23FFFFFF'%20width='800px'%20height='800px'%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%202.19c3.13%200%205.68%202.25%205.68%205s-2.55%205-5.68%205a5.65%205.65%200%200%201-1.89-.29l-.75-.26-.56.56a13.78%2013.78%200%200%201-2%201.55.13.13%200%200%201-.07%200v-.06a6.58%206.58%200%200%200%20.15-4.29%205.25%205.25%200%200%201-.55-2.16c0-2.77%202.55-5%205.68-5M8%20.94c-3.83%200-6.93%202.81-6.93%206.27a6.42%206.42%200%200%200%20.64%202.64%205.53%205.53%200%200%201-.18%203.48%201.32%201.32%200%200%200%202%201.5%2014.93%2014.93%200%200%200%202.16-1.71%206.78%206.78%200%200%200%202.31.36c3.83%200%206.93-2.81%206.93-6.27S11.83.94%208%20.94z'/%3e%3cellipse%20cx='5.2'%20cy='7.7'%20rx='.8'%20ry='.75'/%3e%3cellipse%20cx='8'%20cy='7.7'%20rx='.8'%20ry='.75'/%3e%3cellipse%20cx='10.8'%20cy='7.7'%20rx='.8'%20ry='.75'/%3e%3c/svg%3e",
  Ua = [
    { path: "about", name: "About", icon: Zc },
    { path: "tech", name: "Technology", icon: Jc },
    { path: "projects", name: "Projects", icon: e0 },
    { path: "resume", name: "Resume", icon: t0 },
    { path: "contact", name: "Contact", icon: n0 },
  ];
function r0() {
  var ie;
  const [U, V] = qo.useState(0),
    [m, b] = qo.useState(0),
    G = qo.useRef([]),
    $ =
      (ie = document.getElementById("navbar-sections")) == null
        ? void 0
        : ie.getBoundingClientRect(),
    Ee = (oe) => {
      if ((V(oe), G.current[oe])) {
        const ae = G.current[oe].getBoundingClientRect().left - $.left;
        b(ae);
      }
    },
    le = (oe, de) => {
      oe.preventDefault();
      const ae = document.getElementById(Ua[de].path);
      ae && window.scrollTo({ top: ae.offsetTop - 10, behavior: "smooth" });
    };
  return k.jsxs("div", {
    className: `mx-auto my-4 p-1 bg-gray-600 border-transparent border-2 transition duration-200 rounded-full ${Ur.isDesktop ? "w-1/3 bg-opacity-30 hover:border-gray-200" : "w-full absolute bottom-0 left-0"}`,
    children: [
      k.jsxs("ul", {
        id: "navbar-sections",
        className: "relative flex gap-2 p-2 justify-around",
        children: [
          Ua.map((oe, de) =>
            k.jsx(
              "li",
              {
                className:
                  "relative flex justify-center items-center w-10 h-10",
                onMouseOver: () => Ee(de),
                ref: (ae) => (G.current[de] = ae),
                children: k.jsx("a", {
                  href: oe.path,
                  onClick: (ae) => le(ae, de),
                  className: "flex items-center justify-center w-full h-full",
                  children: k.jsx("img", {
                    src: oe.icon,
                    className: `block ${Ur.isDesktop ? "w-8 h-8" : "w-10 h-10 bg-white bg-opacity-50 rounded-full p-1"}`,
                    alt: oe.name,
                  }),
                }),
              },
              oe.name
            )
          ),
          k.jsx("span", {
            id: "navbar-ball",
            className: `rounded-full w-10 h-10 bg-white absolute translate-x-0 -z-10 left-auto ${Ur.isDesktop ? "bg-opacity-50" : "bg-opacity-0"}`,
            style: {
              left: m,
              transition: "left 300ms cubic-bezier(.36,.61,.31,1.4)",
            },
          }),
        ],
      }),
      k.jsx("div", {
        children:
          U !== null &&
          k.jsx("div", {
            className:
              "text-white text-2xl w-full text-center font-thin tracking-widest",
            children: Ua[U].name,
          }),
      }),
    ],
  });
}
const i0 = `
            <svg viewBox="0 0 128 128">
            
	<path fill="#252f3e" d="M36.379 53.64c0 1.56.168 2.825.465 3.75.336.926.758 1.938 1.347 3.032.207.336.293.672.293.969 0 .418-.254.84-.8 1.261l-2.653 1.77c-.379.25-.758.379-1.093.379-.422 0-.844-.211-1.266-.59a13.28 13.28 0 0 1-1.516-1.98 34.153 34.153 0 0 1-1.304-2.485c-3.282 3.875-7.41 5.813-12.38 5.813-3.535 0-6.355-1.012-8.421-3.032-2.063-2.023-3.114-4.718-3.114-8.086 0-3.578 1.262-6.484 3.833-8.671 2.566-2.192 5.976-3.286 10.316-3.286 1.43 0 2.902.125 4.46.336 1.56.211 3.161.547 4.845.926v-3.074c0-3.2-.676-5.43-1.98-6.734C26.061 32.633 23.788 32 20.546 32c-1.473 0-2.988.168-4.547.547a33.416 33.416 0 0 0-4.547 1.433c-.676.293-1.18.461-1.473.547-.296.082-.507.125-.675.125-.59 0-.883-.422-.883-1.304v-2.063c0-.676.082-1.18.293-1.476.21-.293.59-.586 1.18-.883 1.472-.758 3.242-1.39 5.304-1.895 2.063-.547 4.254-.8 6.57-.8 5.008 0 8.672 1.136 11.032 3.41 2.316 2.273 3.492 5.726 3.492 10.359v13.64Zm-17.094 6.403c1.387 0 2.82-.254 4.336-.758 1.516-.508 2.863-1.433 4-2.695.672-.8 1.18-1.684 1.43-2.695.254-1.012.422-2.23.422-3.665v-1.765a34.401 34.401 0 0 0-3.871-.719 31.816 31.816 0 0 0-3.961-.25c-2.82 0-4.883.547-6.274 1.684-1.387 1.136-2.062 2.734-2.062 4.84 0 1.98.504 3.453 1.558 4.464 1.012 1.051 2.485 1.559 4.422 1.559Zm33.809 4.547c-.758 0-1.262-.125-1.598-.422-.34-.254-.633-.84-.887-1.64L40.715 29.98c-.25-.843-.38-1.39-.38-1.687 0-.672.337-1.05 1.013-1.05h4.125c.8 0 1.347.124 1.644.421.336.25.59.84.84 1.64l7.074 27.876 6.57-27.875c.208-.84.462-1.39.797-1.64.34-.255.93-.423 1.688-.423h3.367c.8 0 1.348.125 1.684.422.336.25.633.84.8 1.64l6.653 28.212 7.285-28.211c.25-.84.547-1.39.84-1.64.336-.255.887-.423 1.644-.423h3.914c.676 0 1.055.336 1.055 1.051 0 .21-.043.422-.086.676-.043.254-.125.59-.293 1.05L80.801 62.57c-.254.84-.547 1.387-.887 1.64-.336.255-.883.423-1.598.423h-3.62c-.801 0-1.348-.13-1.684-.422-.34-.297-.633-.844-.801-1.684l-6.527-27.16-6.485 27.117c-.21.844-.46 1.391-.8 1.684-.337.297-.926.422-1.684.422Zm54.105 1.137c-2.187 0-4.379-.254-6.484-.758-2.106-.504-3.746-1.055-4.84-1.684-.676-.379-1.137-.8-1.305-1.18a2.919 2.919 0 0 1-.254-1.18v-2.148c0-.882.336-1.304.97-1.304.25 0 .503.043.757.129.25.082.629.25 1.05.418a23.102 23.102 0 0 0 4.634 1.476c1.683.336 3.324.504 5.011.504 2.653 0 4.715-.465 6.145-1.39 1.433-.926 2.191-2.274 2.191-4 0-1.18-.379-2.145-1.136-2.946-.758-.8-2.192-1.516-4.254-2.191l-6.106-1.895c-3.074-.969-5.348-2.398-6.734-4.293-1.39-1.855-2.106-3.918-2.106-6.105 0-1.77.38-3.328 1.137-4.676a10.829 10.829 0 0 1 3.031-3.453c1.262-.965 2.696-1.684 4.38-2.188 1.683-.504 3.452-.715 5.304-.715.926 0 1.894.043 2.82.168.969.125 1.852.293 2.738.461.84.211 1.641.422 2.399.676.758.254 1.348.504 1.77.758.59.336 1.011.672 1.261 1.05.254.34.379.802.379 1.391v1.98c0 .884-.336 1.348-.969 1.348-.336 0-.883-.171-1.597-.507-2.403-1.094-5.098-1.641-8.086-1.641-2.399 0-4.293.379-5.598 1.18-1.309.797-1.98 2.02-1.98 3.746 0 1.18.421 2.191 1.261 2.988.844.8 2.403 1.602 4.633 2.316l5.98 1.895c3.032.969 5.22 2.316 6.524 4.043 1.305 1.727 1.938 3.707 1.938 5.895 0 1.812-.38 3.453-1.094 4.882-.758 1.434-1.77 2.696-3.074 3.707-1.305 1.051-2.864 1.809-4.672 2.36-1.895.586-3.875.883-6.024.883Zm0 0"></path>
	<path fill="#f90" d="M118 73.348c-4.432.063-9.664 1.052-13.621 3.832-1.223.883-1.012 2.062.336 1.894 4.508-.547 14.44-1.726 16.21.547 1.77 2.23-1.976 11.62-3.663 15.79-.504 1.26.59 1.769 1.726.8 7.41-6.231 9.348-19.242 7.832-21.137-.757-.925-4.388-1.79-8.82-1.726zM1.63 75.859c-.927.116-1.347 1.236-.368 2.121 16.508 14.902 38.359 23.872 62.613 23.872 17.305 0 37.43-5.43 51.281-15.66 2.273-1.688.297-4.254-2.02-3.204-15.534 6.57-32.421 9.77-47.788 9.77-22.778 0-44.8-6.273-62.653-16.633-.39-.231-.755-.304-1.064-.266z"></path>

            </svg>
          `,
  o0 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: i0 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  l0 = `
            <svg viewBox="0 0 128 128">
            <defs><linearGradient id="azure-original-a" x1="60.919" y1="9.602" x2="18.667" y2="134.423" gradientUnits="userSpaceOnUse"><stop stop-color="#114A8B"></stop><stop offset="1" stop-color="#0669BC"></stop></linearGradient><linearGradient id="azure-original-b" x1="74.117" y1="67.772" x2="64.344" y2="71.076" gradientUnits="userSpaceOnUse"><stop stop-opacity=".3"></stop><stop offset=".071" stop-opacity=".2"></stop><stop offset=".321" stop-opacity=".1"></stop><stop offset=".623" stop-opacity=".05"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><linearGradient id="azure-original-c" x1="68.742" y1="5.961" x2="115.122" y2="129.525" gradientUnits="userSpaceOnUse"><stop stop-color="#3CCBF4"></stop><stop offset="1" stop-color="#2892DF"></stop></linearGradient></defs><path d="M46.09.002h40.685L44.541 125.137a6.485 6.485 0 01-6.146 4.413H6.733a6.482 6.482 0 01-5.262-2.699 6.474 6.474 0 01-.876-5.848L39.944 4.414A6.488 6.488 0 0146.09 0z" fill="url(#azure-original-a)" transform="translate(.587 4.468) scale(.91904)"></path><path d="M97.28 81.607H37.987a2.743 2.743 0 00-1.874 4.751l38.1 35.562a5.991 5.991 0 004.087 1.61h33.574z" fill="#0078d4"></path><path d="M46.09.002A6.434 6.434 0 0039.93 4.5L.644 120.897a6.469 6.469 0 006.106 8.653h32.48a6.942 6.942 0 005.328-4.531l7.834-23.089 27.985 26.101a6.618 6.618 0 004.165 1.519h36.396l-15.963-45.616-46.533.011L86.922.002z" fill="url(#azure-original-b)" transform="translate(.587 4.468) scale(.91904)"></path><path d="M98.055 4.408A6.476 6.476 0 0091.917.002H46.575a6.478 6.478 0 016.137 4.406l39.35 116.594a6.476 6.476 0 01-6.137 8.55h45.344a6.48 6.48 0 006.136-8.55z" fill="url(#azure-original-c)" transform="translate(.587 4.468) scale(.91904)"></path>
            </svg>
          `,
  a0 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: l0 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  s0 = `
            <svg viewBox="0 0 128 128">
            <path fill="#5c2d91" d="M127.352 43.199c-5.727 35.891-36.562 62.379-72.902 62.633-3.566.137-7.137-.082-10.656-.648-15.18-2.574-26.496-15.402-27.16-30.785.125-17.336 14.148-31.359 31.488-31.484S79.68 56.617 80.047 73.953c.129 5.254-2.145 9.871-6.824 10-5 0-7.344-3.57-7.344-8.379V62.215c.004-4.496-3.621-8.156-8.117-8.191H46.559c-8.977-.062-16.832 6.012-19.035 14.715s1.824 17.781 9.75 21.996a19.5 19.5 0 0 0 23.688-4.223l.391-.582.391.645c2.738 3.719 7.152 5.82 11.762 5.602A15.54 15.54 0 0 0 87.902 75.93c.039-3.48-.348-6.949-1.16-10.328a39.57 39.57 0 0 0-42.969-30.926C23.645 36.879 8.43 53.922 8.512 74.168c.262 21.543 17.512 39.023 39.047 39.566 0 0 2.93.266 6.242.195a84.49 84.49 0 0 0 45.289-13.516c.191-.125.383.129.254.328a66.49 66.49 0 0 1-51.785 21.18c-12.75.23-25.039-4.762-34.02-13.812S-.332 86.723 0 73.977a48.37 48.37 0 0 1 19.426-38.73 47.38 47.38 0 0 1 27.941-9.223h15.031a42.29 42.29 0 0 0 31.203-13.777.59.59 0 0 1 .68-.141c.238.102.379.344.359.598-.637 6.758-2.887 13.262-6.562 18.969-.109.203-.09.453.051.633a.58.58 0 0 0 .598.215 45.45 45.45 0 0 0 31.602-26.055.8.8 0 0 1 1.367 0 57.58 57.58 0 0 1 5.656 36.734zM46.52 61.824c-6.422 0-11.633 5.207-11.633 11.633A11.64 11.64 0 0 0 46.52 85.09c6.426 0 11.633-5.211 11.633-11.633V62.602a.84.84 0 0 0-.801-.801zm0 0"></path>
            </svg>
          `,
  u0 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: s0 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  c0 = `
            <svg viewBox="0 0 128 128">
            <path fill="#9B4F96" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"></path><path fill="#68217A" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"></path><path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z"></path>
            </svg>
          `,
  d0 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: c0 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  f0 = `
            <svg viewBox="0 0 128 128">
            <path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"></path><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"></path><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"></path><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"></path><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"></path><path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"></path>
            </svg>
          `,
  p0 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: f0 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  m0 = `
            <svg viewBox="0 0 128 128">
            <linearGradient id="dot-net-original-a" gradientUnits="userSpaceOnUse" x1="61.631" y1="563.347" x2="62.022" y2="563.347" gradientTransform="matrix(0 149.735 149.735 0 -84296.266 -9188.014)"><stop offset="0" stop-color="#0994DC"></stop><stop offset=".35" stop-color="#66CEF5"></stop><stop offset=".35" stop-color="#66CEF5"></stop><stop offset=".846" stop-color="#127BCA"></stop><stop offset=".846" stop-color="#127BCA"></stop><stop offset="1" stop-color="#127BCA"></stop></linearGradient><path fill="url(#dot-net-original-a)" d="M45.288 49.559c4.417 13.507 6.09 37.601 19.006 37.601.982 0 1.977-.096 2.974-.286-11.74-2.737-13.132-26.569-20.297-38.912a61.601 61.601 0 00-1.683 1.597"></path><linearGradient id="dot-net-original-b" gradientUnits="userSpaceOnUse" x1="61.705" y1="563.34" x2="62.095" y2="563.34" gradientTransform="matrix(0 153.551 153.551 0 -86442.719 -9435.969)"><stop offset="0" stop-color="#0E76BC"></stop><stop offset=".36" stop-color="#36AEE8"></stop><stop offset=".36" stop-color="#36AEE8"></stop><stop offset=".846" stop-color="#00ADEF"></stop><stop offset=".846" stop-color="#00ADEF"></stop><stop offset="1" stop-color="#00ADEF"></stop></linearGradient><path fill="url(#dot-net-original-b)" d="M46.971 47.962c7.165 12.342 8.557 36.174 20.297 38.912a18.621 18.621 0 002.773-.749C59.502 80.961 56.59 57.819 48.453 46.678c-.492.41-.987.839-1.482 1.284"></path><path fill="#14559A" d="M57.294 40.623c-.98 0-1.977.096-2.977.286-2.612.493-5.268 1.618-7.944 3.321.73.722 1.427 1.547 2.081 2.448 2.723-2.259 5.427-3.928 8.12-4.932a18.177 18.177 0 013.029-.842 9.393 9.393 0 00-2.309-.281"></path><linearGradient id="dot-net-original-c" gradientUnits="userSpaceOnUse" x1="67.486" y1="564.985" x2="67.876" y2="564.985" gradientTransform="matrix(0 -122.178 -122.178 0 69099.289 8331.043)"><stop offset="0" stop-color="#1C63B7"></stop><stop offset=".5" stop-color="#33BDF2"></stop><stop offset="1" stop-color="#33BDF2" stop-opacity=".42"></stop></linearGradient><path fill="url(#dot-net-original-c)" d="M78.268 81.366a47.16 47.16 0 003.24-2.84c-4.488-13.443-6.095-37.883-19.101-37.883-.93 0-1.868.087-2.804.26C71.45 43.85 72.968 69.625 78.268 81.366"></path><path fill="#3092C4" d="M59.604 40.904a9.355 9.355 0 00-2.311-.282l5.114.019c-.929 0-1.867.086-2.803.263"></path><path fill="#1969BC" d="M78.04 84.221a19.441 19.441 0 01-1.466-1.584c-2.188 1.549-4.368 2.724-6.533 3.489.771.376 1.578.656 2.436.829.664.136 1.353.206 2.075.206 2.431 0 4.353-.288 5.987-1.072-.9-.488-1.726-1.118-2.499-1.868"></path><linearGradient id="dot-net-original-d" gradientUnits="userSpaceOnUse" x1="61.852" y1="563.281" x2="62.243" y2="563.281" gradientTransform="matrix(0 159.425 159.425 0 -89733.742 -9828.116)"><stop offset="0" stop-color="#166AB8"></stop><stop offset=".4" stop-color="#36AEE8"></stop><stop offset=".4" stop-color="#36AEE8"></stop><stop offset=".846" stop-color="#0798DD"></stop><stop offset=".846" stop-color="#0798DD"></stop><stop offset="1" stop-color="#0798DD"></stop></linearGradient><path fill="url(#dot-net-original-d)" d="M56.573 41.748c10.611 5.55 11.534 30.684 20.001 40.889.568-.4 1.13-.824 1.691-1.271-5.3-11.741-6.815-37.519-18.66-40.463-1.011.189-2.02.469-3.032.845"></path><linearGradient id="dot-net-original-e" gradientUnits="userSpaceOnUse" x1="61.975" y1="563.367" x2="62.366" y2="563.367" gradientTransform="matrix(0 169.528 169.528 0 -95443.742 -10473.372)"><stop offset="0" stop-color="#124379"></stop><stop offset=".39" stop-color="#1487CB"></stop><stop offset=".39" stop-color="#1487CB"></stop><stop offset=".78" stop-color="#165197"></stop><stop offset=".78" stop-color="#165197"></stop><stop offset="1" stop-color="#165197"></stop></linearGradient><path fill="url(#dot-net-original-e)" d="M48.453 46.678c8.137 11.141 11.049 34.284 21.588 39.448 2.166-.765 4.346-1.939 6.533-3.489-8.467-10.205-9.39-35.338-20.001-40.889-2.693 1.002-5.397 2.671-8.12 4.93"></path><linearGradient id="dot-net-original-f" gradientUnits="userSpaceOnUse" x1="1006.454" y1="-1412.08" x2="1008.771" y2="-1412.08" gradientTransform="matrix(4.038 0 0 -4.038 -4028.633 -5649.283)"><stop offset="0" stop-color="#33BDF2" stop-opacity=".698"></stop><stop offset="1" stop-color="#1DACD8"></stop></linearGradient><path fill="url(#dot-net-original-f)" d="M40.083 49.234c-1.275 2.883-2.578 6.674-4.152 11.621 3.131-4.413 6.253-8.214 9.357-11.295a33.873 33.873 0 00-1.382-3.606 46.113 46.113 0 00-3.823 3.28"></path><path fill="#2B74B1" d="M45.037 45.121c-.374.268-.751.542-1.13.832.495 1.08.953 2.292 1.38 3.607a66.502 66.502 0 011.684-1.597 22.346 22.346 0 00-1.934-2.842"></path><path fill="#125A9E" d="M46.373 44.229c-.445.282-.888.58-1.337.891.695.855 1.333 1.81 1.936 2.844.495-.448.989-.879 1.482-1.287-.654-.9-1.35-1.726-2.081-2.448"></path><linearGradient id="dot-net-original-g" gradientUnits="userSpaceOnUse" x1="67.564" y1="565.48" x2="67.954" y2="565.48" gradientTransform="matrix(0 -119.018 -119.018 0 67408.578 8125.832)"><stop offset="0" stop-color="#136AB4"></stop><stop offset=".6" stop-color="#59CAF5" stop-opacity=".549"></stop><stop offset="1" stop-color="#59CAF5" stop-opacity=".235"></stop></linearGradient><path fill="url(#dot-net-original-g)" d="M118.751 39.594c-6.001 23.144-18.536 41.734-29.044 46.42h-.021l-.567.243-.069.027-.161.062-.072.03-.263.093-.108.038-.131.043-.126.044-.112.038-.224.068-.096.025-.151.041-.103.028-.165.043-.201.044c.475.175.97.264 1.503.264 9.965 0 20.013-17.858 36.638-47.556h-6.528l.001.005z"></path><linearGradient id="dot-net-original-h" gradientUnits="userSpaceOnUse" x1="998.231" y1="-1414.829" x2="1006.826" y2="-1414.829" gradientTransform="matrix(4.038 0 0 -4.038 -4028.633 -5649.283)"><stop offset="0" stop-color="#05A1E6" stop-opacity=".247"></stop><stop offset="1" stop-color="#05A1E6"></stop></linearGradient><path fill="url(#dot-net-original-h)" d="M33.766 41.563l.019-.016.023-.015h.013l.161-.062.032-.016.042-.017.173-.062h.009l.383-.134.057-.015.164-.049.075-.024.165-.049.063-.017.548-.142.075-.017.16-.031.078-.024.161-.03h.038l.333-.062h.066l.154-.027.087-.015.147-.022.081-.016.358-.032a11.467 11.467 0 00-1.061-.054c-11.223 0-26.685 20.822-33.649 47.788h1.343a390.312 390.312 0 006.062-11.266c4.879-19.1 14.814-32.126 23.64-35.577"></path><path fill="#0D82CA" d="M40.083 49.234a46.488 46.488 0 013.823-3.281 17.961 17.961 0 00-.911-1.761c-1.026 1.246-1.964 2.89-2.912 5.042"></path><path fill="#0D82CA" d="M41.005 41.72c.733.614 1.39 1.46 1.99 2.473.189-.232.381-.447.58-.649a11.263 11.263 0 00-2.712-1.897l.12.057.022.016"></path><linearGradient id="dot-net-original-i" gradientUnits="userSpaceOnUse" x1="67.491" y1="564.359" x2="67.881" y2="564.359" gradientTransform="matrix(0 -121.865 -121.865 0 68797.742 8310.488)"><stop offset="0" stop-color="#318ED5"></stop><stop offset="1" stop-color="#38A7E4"></stop></linearGradient><path fill="url(#dot-net-original-i)" d="M10.127 77.138c10.233-19.719 15.081-32.199 23.64-35.577-8.825 3.454-18.762 16.479-23.64 35.577"></path><path fill="#127BCA" d="M43.574 43.544c-.199.204-.389.417-.58.649.322.538.621 1.124.913 1.76.378-.29.756-.563 1.129-.832a15.351 15.351 0 00-1.462-1.577"></path><linearGradient id="dot-net-original-j" gradientUnits="userSpaceOnUse" x1="67.593" y1="564.41" x2="67.984" y2="564.41" gradientTransform="matrix(0 -118.46 -118.46 0 66884.703 8093.017)"><stop offset="0" stop-color="#05A1E6"></stop><stop offset="1" stop-color="#05A1E6" stop-opacity=".549"></stop></linearGradient><path fill="url(#dot-net-original-j)" d="M14.773 88.315l-.186.022h-.035l-.158.016h-.026l-.376.025h-.039c10.356-.29 15.091-5.475 17.44-12.997 1.785-5.701 3.252-10.505 4.537-14.535-4.338 6.106-8.696 13.384-13.077 21.539-2.112 3.93-5.325 5.572-8.08 5.922"></path><linearGradient id="dot-net-original-k" gradientUnits="userSpaceOnUse" x1="68.291" y1="564.525" x2="68.682" y2="564.525" gradientTransform="matrix(0 -100.1 -100.1 0 56536.551 6924.301)"><stop offset="0" stop-color="#1959A6"></stop><stop offset=".5" stop-color="#05A1E6"></stop><stop offset=".5" stop-color="#05A1E6"></stop><stop offset=".918" stop-color="#7EC5EA"></stop><stop offset="1" stop-color="#7EC5EA"></stop></linearGradient><path fill="url(#dot-net-original-k)" d="M14.773 88.311c2.755-.351 5.968-1.991 8.08-5.923 4.381-8.151 8.741-15.431 13.075-21.538 1.577-4.949 2.878-8.737 4.154-11.621-8.639 8.223-17.311 21.896-25.31 39.077"></path><path fill="#05A1E6" d="M10.127 77.139a388.004 388.004 0 01-6.063 11.266h3.904a95.502 95.502 0 012.158-11.264"></path><linearGradient id="dot-net-original-l" gradientUnits="userSpaceOnUse" x1="67.892" y1="563.82" x2="68.282" y2="563.82" gradientTransform="scale(-110.211 110.211) rotate(-80 -301.688 322.91)"><stop offset="0" stop-color="#165096"></stop><stop offset="1" stop-color="#0D82CA"></stop></linearGradient><path fill="url(#dot-net-original-l)" d="M37.073 40.709l-.083.016-.146.021-.086.015-.154.027-.066.016-.333.058h-.038l-.162.032-.081.022-.157.031-.074.018-.549.142-.063.018-.166.049-.075.021-.163.049-.06.016-.381.134-.173.06-.072.03-.161.06-.054.026c-8.558 3.377-13.406 15.857-23.639 35.576A94.655 94.655 0 007.979 88.41h.547l3.755-.016h1.723l.375-.025h.024l.158-.016h.037l.186-.022c8-17.182 16.672-30.854 25.31-39.077.95-2.152 1.887-3.796 2.911-5.04-.6-1.013-1.256-1.861-1.988-2.476l-.021-.016-.122-.059-.121-.061-.117-.057-.139-.058-.108-.047-.227-.095-.097-.036-.169-.068-.091-.03-.235-.081h-.019l-.272-.077-.061-.019-.229-.064-.053-.015a7.851 7.851 0 00-.569-.125l-.059-.016-.247-.04-.049-.015-.292-.039h-.051l-.226-.025-.358.033"></path><linearGradient id="dot-net-original-m" gradientUnits="userSpaceOnUse" x1="70.847" y1="566.882" x2="71.237" y2="566.882" gradientTransform="matrix(0 -56.721 -56.721 0 32252.127 4080.282)"><stop offset="0" stop-color="#05A1E6"></stop><stop offset=".874" stop-color="#0495D6"></stop><stop offset="1" stop-color="#0495D6"></stop></linearGradient><path fill="url(#dot-net-original-m)" d="M95.311 52.407c-1.97 6.307-3.563 11.51-4.952 15.791 5.403-7.435 10.725-16.787 15.792-27.579-5.913 1.857-9.065 6.107-10.84 11.788"></path><linearGradient id="dot-net-original-n" gradientUnits="userSpaceOnUse" x1="61.634" y1="562.213" x2="62.024" y2="562.213" gradientTransform="scale(-132.813 132.813) rotate(80 365.248 244.034)"><stop offset="0" stop-color="#38A7E4" stop-opacity=".329"></stop><stop offset=".962" stop-color="#0E88D3"></stop><stop offset=".962" stop-color="#0E88D3"></stop><stop offset="1" stop-color="#0E88D3"></stop></linearGradient><path fill="url(#dot-net-original-n)" d="M90.53 85.621c-.275.14-.552.273-.823.394 10.508-4.687 23.044-23.277 29.044-46.421h-1.216c-13.788 24.631-18.222 41.12-27.005 46.027"></path><path fill="#079AE1" d="M83.668 83.552c2.287-2.791 4.148-7.535 6.691-15.354-2.933 4.029-5.885 7.492-8.84 10.316l-.015.025c.645 1.931 1.352 3.636 2.158 5.012"></path><path fill="#1969BC" d="M83.668 83.552c-.778.95-1.603 1.673-2.519 2.209-.2.117-.404.227-.61.327a8.839 8.839 0 003.206 1.011l.524.046h.031l.252.016h.855l.097-.016.189-.016h.092l.205-.022h.017l.063-.015.219-.034h.064l.246-.041h.04l.491-.104c-1.357-.496-2.492-1.667-3.469-3.334"></path><path fill="#1E5CB3" d="M64.295 87.161c.982 0 1.976-.096 2.973-.288a18.309 18.309 0 002.773-.747c.771.376 1.579.656 2.435.831.664.135 1.354.205 2.077.205H64.295zM74.553 87.161c2.429 0 4.353-.288 5.986-1.073a8.84 8.84 0 003.206 1.012l.524.045h.031l.252.016h.302-10.301z"></path><path fill="#1D60B5" d="M84.854 87.161h.561l.097-.016.191-.016h.092l.204-.022h.017l.062-.016.219-.033.067-.015.247-.04h.039l.491-.104c.475.175.97.264 1.503.264l-3.788.016-.002-.018z"></path><path fill="#175FAB" d="M81.511 78.54v-.016a47.16 47.16 0 01-3.24 2.84 36.81 36.81 0 01-1.693 1.271c.476.568.959 1.1 1.468 1.585.772.749 1.597 1.38 2.498 1.867.205-.101.41-.211.609-.327.918-.536 1.741-1.26 2.52-2.209-.806-1.376-1.513-3.082-2.157-5.012"></path><linearGradient id="dot-net-original-o" gradientUnits="userSpaceOnUse" x1="61.149" y1="562.654" x2="61.539" y2="562.654" gradientTransform="matrix(0 123.742 123.742 0 -69523.625 -7527.189)"><stop offset="0" stop-color="#168CD4"></stop><stop offset=".5" stop-color="#1C87CC"></stop><stop offset="1" stop-color="#154B8D"></stop></linearGradient><path fill="url(#dot-net-original-o)" d="M113.685 39.594h-6.121l-.97.047-.451.966c-5.068 10.793-10.388 20.145-15.791 27.58-2.54 7.818-4.404 12.563-6.69 15.353.977 1.668 2.114 2.84 3.466 3.337l.106-.023h.022l.075-.016.17-.042.101-.029.151-.039.094-.027.226-.068.112-.038.126-.046.13-.041.106-.04.264-.093.073-.027.162-.063.068-.025.568-.243h.02c.271-.119.547-.254.821-.394 8.785-4.908 13.22-21.396 27.008-46.026h-3.851l.005-.003z"></path><path fill="#7DCBEC" d="M37.433 40.677l.063.016.16.017h.054l.292.038.049.016.246.041.062.015.567.126.052.016.228.064.063.019.271.077.021.016.237.081.09.029.17.069.096.034.226.094.11.047.136.059.12.057.119.062c.979.48 1.879 1.121 2.713 1.898.308-.323.628-.613.962-.874-1.823-1.293-3.89-2.03-6.271-2.03-.276 0-.552.016-.832.037"></path><path fill="#5EC5ED" d="M43.574 43.544c.511.475 1 1.005 1.462 1.577.448-.311.892-.611 1.337-.891a14.13 14.13 0 00-1.839-1.56c-.333.26-.652.552-.96.874"></path><g transform="matrix(5.048 0 0 -5.048 -9064.26 2270.61)"><linearGradient id="dot-net-original-p" gradientUnits="userSpaceOnUse" x1="1806.96" y1="336.158" x2="1807.35" y2="336.158" gradientTransform="scale(30.857 -30.857) rotate(22.527 1812.675 -4228.953)"><stop offset="0" stop-color="#97D6EE"></stop><stop offset=".703" stop-color="#55C1EA"></stop><stop offset="1" stop-color="#55C1EA"></stop></linearGradient><path fill="url(#dot-net-original-p)" d="M1802.977 441.733l.165.007c.472 0 .881-.146 1.242-.402.381.301.842.406 1.482.406h-3.099l.21-.011"></path></g><g transform="matrix(5.048 0 0 -5.048 -9064.26 2270.61)"><linearGradient id="dot-net-original-q" gradientUnits="userSpaceOnUse" x1="1808.848" y1="335.171" x2="1809.238" y2="335.171" gradientTransform="scale(24.717 -24.717) rotate(-24.385 124.122 4175.416)"><stop offset="0" stop-color="#7ACCEC"></stop><stop offset="1" stop-color="#3FB7ED"></stop></linearGradient><path fill="url(#dot-net-original-q)" d="M1805.866 441.744c-.64 0-1.1-.105-1.482-.406.126-.089.248-.193.364-.309.531.337 1.056.561 1.574.658.198.037.395.056.589.056h-1.045v.001z"></path></g><linearGradient id="dot-net-original-r" gradientUnits="userSpaceOnUse" x1="61.049" y1="562.706" x2="61.439" y2="562.706" gradientTransform="matrix(0 121.032 121.032 0 -68011.711 -7346.748)"><stop offset="0" stop-color="#1DA7E7"></stop><stop offset="1" stop-color="#37ABE7" stop-opacity="0"></stop></linearGradient><path fill="url(#dot-net-original-r)" d="M90.359 68.202c1.391-4.284 2.98-9.485 4.954-15.794 1.777-5.684 4.925-9.934 10.835-11.788l.456-.966c-9.636.577-14.14 5.479-16.405 12.738-3.964 12.673-6.365 20.888-8.677 26.123 2.952-2.823 5.904-6.288 8.837-10.313"></path>
            </svg>
          `,
  h0 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: m0 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  v0 = `
            <svg viewBox="0 0 128 128">
            <path fill="#F34F29" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"></path>
            </svg>
          `,
  g0 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: v0 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  y0 = `
            <svg viewBox="0 0 128 128">
            <g fill="#181616"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>
            </svg>
          `,
  w0 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: y0 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  x0 = `
            <svg viewBox="0 0 128 128">
            <path fill="#E24329" d="m124.755 51.382-.177-.452L107.47 6.282a4.459 4.459 0 0 0-1.761-2.121 4.581 4.581 0 0 0-5.236.281 4.578 4.578 0 0 0-1.518 2.304L87.404 42.088H40.629L29.077 6.746a4.492 4.492 0 0 0-1.518-2.31 4.581 4.581 0 0 0-5.236-.281 4.502 4.502 0 0 0-1.761 2.121L3.422 50.904l-.17.452c-5.059 13.219-.763 28.192 10.537 36.716l.059.046.157.111 26.061 19.516 12.893 9.758 7.854 5.93a5.283 5.283 0 0 0 6.388 0l7.854-5.93 12.893-9.758 26.218-19.634.065-.052c11.273-8.526 15.562-23.472 10.524-36.677z"></path><path fill="#FC6D26" d="m124.755 51.382-.177-.452a57.79 57.79 0 0 0-23.005 10.341L64 89.682c12.795 9.68 23.934 18.09 23.934 18.09l26.218-19.634.065-.052c11.291-8.527 15.586-23.488 10.538-36.704z"></path><path fill="#FCA326" d="m40.066 107.771 12.893 9.758 7.854 5.93a5.283 5.283 0 0 0 6.388 0l7.854-5.93 12.893-9.758s-11.152-8.436-23.947-18.09a18379.202 18379.202 0 0 0-23.935 18.09z"></path><path fill="#FC6D26" d="M26.42 61.271A57.73 57.73 0 0 0 3.422 50.904l-.17.452c-5.059 13.219-.763 28.192 10.537 36.716l.059.046.157.111 26.061 19.516L64 89.655 26.42 61.271z"></path>
            </svg>
          `,
  S0 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: x0 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  k0 = `
            <svg viewBox="0 0 128 128">
            <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"></path><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"></path><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"></path><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"></path>
            </svg>
          `,
  E0 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: k0 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  _0 = `
            <svg viewBox="0 0 128 128">
            <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
            </svg>
          `,
  C0 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: _0 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  T0 = `
            <svg viewBox="0 0 128 128">
            <g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
            </svg>
          `,
  z0 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: T0 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  P0 = `
            <svg viewBox="0 0 128 128">
            
    <defs>
        <radialGradient id="b" cx="9.36" cy="10.57" fx="9.36" fy="10.57" r="7.07" gradientTransform="matrix(73.03125 0 0 37.1875 29.797 56.535)">
            <stop offset="0" style="stop-color:#f2f2f2;stop-opacity:1"></stop>
            <stop offset=".58" style="stop-color:#eee;stop-opacity:1"></stop>
            <stop offset="1" style="stop-color:#e6e6e6;stop-opacity:1"></stop>
        </radialGradient>
        <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="2.59" y1="10.16" x2="15.41" y2="10.16" gradientTransform="scale(7.11111)">
            <stop offset="0" style="stop-color:#005ba1;stop-opacity:1"></stop>
            <stop offset=".07" style="stop-color:#0060a9;stop-opacity:1"></stop>
            <stop offset=".36" style="stop-color:#0071c8;stop-opacity:1"></stop>
            <stop offset=".52" style="stop-color:#0078d4;stop-opacity:1"></stop>
            <stop offset=".64" style="stop-color:#0074cd;stop-opacity:1"></stop>
            <stop offset=".82" style="stop-color:#006abb;stop-opacity:1"></stop>
            <stop offset="1" style="stop-color:#005ba1;stop-opacity:1"></stop>
        </linearGradient>
    </defs>
    <path style="stroke:none;fill-rule:nonzero;fill:url(#a)" d="M64 36.55c-25.172 0-45.582-7.109-45.582-16.495v87.89c0 9.032 20.055 16.356 44.941 16.5H64c25.172 0 45.582-7.113 45.582-16.5v-87.89c0 9.172-20.41 16.496-45.582 16.496Zm0 0"></path>
    <path style="stroke:none;fill-rule:nonzero;fill:#e8e8e8;fill-opacity:1" d="M109.582 20.055c0 9.172-20.41 16.496-45.582 16.496s-45.582-7.11-45.582-16.496c0-9.387 20.41-16.5 45.582-16.5s45.582 7.113 45.582 16.5"></path>
    <path style="stroke:none;fill-rule:nonzero;fill:#50e6ff;fill-opacity:1" d="M98.988 18.703c0 5.832-15.718 10.524-34.988 10.524s-34.988-4.692-34.988-10.524C29.012 12.871 44.73 8.25 64 8.25s34.988 4.691 34.988 10.453"></path>
    <path style="stroke:none;fill-rule:nonzero;fill:#198ab3;fill-opacity:1" d="M64 21.332a82.193 82.193 0 0 0-27.664 4.055A81.213 81.213 0 0 0 64 29.227a79.334 79.334 0 0 0 27.664-4.125A84.332 84.332 0 0 0 64 21.332Zm0 0"></path>
    <path style="stroke:none;fill-rule:nonzero;fill:url(#b)" d="M91.734 81.066V56.891h-6.402v29.367h17.496v-5.192ZM40.961 69.191a13.064 13.064 0 0 1-3.629-2.203 3.13 3.13 0 0 1-.852-2.277 2.418 2.418 0 0 1 1.067-2.133 4.847 4.847 0 0 1 2.988-.855 11.533 11.533 0 0 1 7.11 2.062v-6.113a18.236 18.236 0 0 0-7.11-1.137 11.67 11.67 0 0 0-7.754 2.414 7.68 7.68 0 0 0-2.984 6.332c0 3.625 2.273 6.469 7.11 8.602 1.57.668 3.05 1.527 4.41 2.562a2.982 2.982 0 0 1 1.066 2.274c0 .879-.426 1.699-1.137 2.207a5.786 5.786 0 0 1-3.203.781 11.801 11.801 0 0 1-7.75-2.988v6.613a15.411 15.411 0 0 0 7.61 1.707c2.98.176 5.933-.648 8.39-2.348a7.681 7.681 0 0 0 2.348-6.468 7.458 7.458 0 0 0-1.778-4.977 17.225 17.225 0 0 0-5.902-4.055Zm37.262 11.305a16.634 16.634 0 0 0 2.347-8.957A16.509 16.509 0 0 0 78.223 64a12.87 12.87 0 0 0-4.977-5.332 14.228 14.228 0 0 0-7.113-1.852 15.015 15.015 0 0 0-7.68 1.922A13.217 13.217 0 0 0 53.262 64a17.48 17.48 0 0 0-1.848 8.105 16.06 16.06 0 0 0 1.707 7.114 12.526 12.526 0 0 0 4.906 5.261 14.679 14.679 0 0 0 7.11 2.133l6.117 7.11h8.605l-8.75-7.82a12.736 12.736 0 0 0 7.114-5.407Zm-7.114-1.777a6.673 6.673 0 0 1-5.402 2.488 6.538 6.538 0 0 1-5.406-2.559 10.842 10.842 0 0 1-2.063-7.109 10.903 10.903 0 0 1 2.063-7.113 7.104 7.104 0 0 1 5.547-2.63 6.181 6.181 0 0 1 5.336 2.63 11.533 11.533 0 0 1 1.918 7.113 10.353 10.353 0 0 1-1.993 7.18Zm0 0"></path>

            </svg>
          `,
  M0 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: P0 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  O0 = `
            <svg viewBox="0 0 128 128">
            <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" fill="#38bdf8"></path>
            </svg>
          `,
  N0 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: O0 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  j0 = `
            <svg viewBox="0 0 128 128">
            <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path><path data-name="original" fill="#007acc" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"></path>
            </svg>
          `,
  L0 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: j0 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  I0 = {
    name: "Ty Lewis",
    headline: "Software Engineer",
    email: "tylerlewisrn@gmail.com",
    phone: "(805) 464-1751",
    location: "Stamford, CT",
    url: { label: "", href: "" },
    customFields: [],
    picture: {
      url: "https://lh3.googleusercontent.com/a/ACg8ocI4dZtflU4zPVvgyyIoz8mFwKZ23yizkxyfuc9LbXuUqSKX3AjK=s96-c",
      size: 64,
      aspectRatio: 1,
      borderRadius: 0,
      effects: { hidden: !0, border: !1, grayscale: !1 },
    },
  },
  F0 = {
    summary: {
      name: "Summary",
      columns: 1,
      separateLinks: !0,
      visible: !0,
      id: "summary",
      content:
        "<p>Recent Software Engineering graduate with a background in healthcare, skilled in full-stack web and mobile application development across multiple languages and frameworks. Strong critical thinking and problem-solving abilities, with leadership experience in high-stress settings. Eager to apply technical expertise in an entry-level software engineering role.</p>",
    },
    awards: {
      name: "Awards",
      columns: 1,
      separateLinks: !0,
      visible: !0,
      id: "awards",
      items: [],
    },
    certifications: {
      name: "Certifications",
      columns: 1,
      separateLinks: !0,
      visible: !0,
      id: "certifications",
      items: [
        {
          id: "r49okc6yx3tj9hzkqx8owgjc",
          visible: !0,
          name: "AWS Certified Cloud Practitioner",
          issuer: "Amazon Web Services",
          date: "",
          summary: "",
          url: { label: "", href: "" },
        },
        {
          id: "jzbo2jj5o5yy8n60sg5w5rzv",
          visible: !0,
          name: "ITIL Foundation",
          issuer: "Axelos",
          date: "",
          summary: "",
          url: { label: "", href: "" },
        },
      ],
    },
    education: {
      name: "Education",
      columns: 1,
      separateLinks: !0,
      visible: !0,
      id: "education",
      items: [
        {
          id: "d6we8439tc9rw2xpi1bbal0h",
          visible: !0,
          institution: "Western Governors University",
          studyType: "Bachelor of Science",
          area: "Software Engineering",
          score: "",
          date: "2024",
          summary: "",
          url: { label: "", href: "" },
        },
        {
          id: "ll4bghyfzsbqswaa91dctol4",
          visible: !0,
          institution: "Adelphi University",
          studyType: "Bachelor of Science",
          area: "Nursing",
          score: "",
          date: "2012-2015",
          summary: "",
          url: { label: "", href: "" },
        },
      ],
    },
    experience: {
      name: "Experience",
      columns: 1,
      separateLinks: !0,
      visible: !0,
      id: "experience",
      items: [
        {
          id: "qrvzvyg0zvchu7ilae90xby6",
          visible: !0,
          company: "Lenox Hill Hospital",
          position: "Assistant Nurse Manager",
          location: "New York, NY",
          date: "October 2024 - Present",
          summary:
            "<p>Managed staff pool of 15-20 FTEs in busy orthopedic surgery unit. Responsible for daily staffing, supply-chain, patient care, and sterile processing operations.</p>",
          url: { label: "", href: "" },
        },
        {
          id: "nvzue5cd26ofyy2e6ek6szih",
          visible: !0,
          company: "Cedars-Sinai Marina",
          position: "Charge Nurse",
          location: "Los Angeles, CA",
          date: "July 2023 - September 2024",
          summary:
            "<p>Responsible for daily staffing and assignments of the main surgical unit in a busy community hospital. Reacted to scheduled and emergent requests from interdisciplinary team.</p>",
          url: { label: "", href: "" },
        },
        {
          id: "k1b9kh08jogpxv46wruxj1hv",
          visible: !0,
          company: "NYP Weill-Cornell",
          position: "Clinical Nurse Manager",
          location: "New York, NY",
          date: "February 2022 - June 2023",
          summary:
            "<p>Manager for transplant, robotic, and urological surgeries in NYCs most active transplant center. Managed 15 FTEs in scheduling, training, and organizational leadership.</p>",
          url: { label: "", href: "" },
        },
        {
          id: "egjk5vo06actfp1bbtaxybm4",
          visible: !0,
          company: "NYU Langone Health",
          position: "Nurse Clinician",
          location: "New York, NY",
          date: "May 2016 - February 2022",
          summary:
            "<p>Provided direct patient care in multiple settings including ICU and surgery.</p>",
          url: { label: "", href: "" },
        },
      ],
    },
    volunteer: {
      name: "Volunteering",
      columns: 1,
      separateLinks: !0,
      visible: !0,
      id: "volunteer",
      items: [],
    },
    interests: {
      name: "Interests",
      columns: 1,
      separateLinks: !0,
      visible: !0,
      id: "interests",
      items: [],
    },
    languages: {
      name: "Technology",
      columns: 2,
      separateLinks: !0,
      visible: !0,
      id: "languages",
      items: [
        {
          id: "obqte9tvtzkgab0k4siub8br",
          visible: !0,
          name: "C#",
          description: "",
          level: 4,
        },
        {
          id: "sxiq4mk44zvrmwm7iakq62eu",
          visible: !0,
          name: "JavaScript",
          description: "",
          level: 3,
        },
        {
          id: "npz3h2j45f9lcsw6u1dy2vp8",
          visible: !0,
          name: "TypeScript",
          description: "",
          level: 2,
        },
        {
          id: "bex069r8287owgk269xqovpi",
          visible: !0,
          name: "Python",
          description: "",
          level: 2,
        },
        {
          id: "pkp8ikqq6aszgcsohhiri265",
          visible: !0,
          name: "SQL",
          description: "",
          level: 3,
        },
        {
          id: "jtauorx3bjrfpqt9h78irl4t",
          visible: !0,
          name: "AWS",
          description: "",
          level: 2,
        },
        {
          id: "prfh9sycm348lookebfazb8t",
          visible: !0,
          name: "Azure",
          description: "",
          level: 3,
        },
        {
          id: "xajefbemz33naooyqef86ny0",
          visible: !0,
          name: "HTML/CSS",
          description: "",
          level: 4,
        },
      ],
    },
    profiles: {
      name: "Profiles",
      columns: 1,
      separateLinks: !0,
      visible: !0,
      id: "profiles",
      items: [
        {
          id: "ltjrpu7k033479673hatoj7y",
          visible: !0,
          network: "LinkedIn",
          username: "ty-lewis",
          icon: "linkedin",
          url: { label: "", href: "https://www.linkedin.com/in/ty-lewis/" },
        },
        {
          id: "j6fuyqq1cddpsiziki1swrvb",
          visible: !0,
          network: "GitHub",
          username: "tylerelk",
          icon: "GitHub",
          url: { label: "", href: "https://github.com/tylerelk" },
        },
      ],
    },
    projects: {
      name: "Projects",
      columns: 1,
      separateLinks: !0,
      visible: !0,
      id: "projects",
      items: [
        {
          id: "spc39krlcq7aosyku1o0x0et",
          visible: !0,
          name: "inCharge",
          description: "OR Scheduling App",
          date: "",
          summary:
            "<p>Web application designed for use by Operating Room managers to efficiently manage their surgical schedules, units, and staff.</p>",
          keywords: [],
          url: { label: "", href: "https://incharge.azurewebsites.net/" },
        },
      ],
    },
    publications: {
      name: "Publications",
      columns: 1,
      separateLinks: !0,
      visible: !0,
      id: "publications",
      items: [],
    },
    references: {
      name: "References",
      columns: 1,
      separateLinks: !0,
      visible: !0,
      id: "references",
      items: [],
    },
    skills: {
      name: "Skills",
      columns: 2,
      separateLinks: !0,
      visible: !0,
      id: "skills",
      items: [
        {
          id: "bg09tmedvqhx1cayfv9xf4i2",
          visible: !0,
          name: "Critical Thought",
          description: "",
          level: 5,
          keywords: [],
        },
        {
          id: "abf8ji7f4oxeh6rbu5bv6a2p",
          visible: !0,
          name: "Collaboration",
          description: "",
          level: 5,
          keywords: [],
        },
        {
          id: "ddlg19a6mv8nr5008aeeo7qs",
          visible: !0,
          name: "Leadership",
          description: "",
          level: 4,
          keywords: [],
        },
        {
          id: "r4cxpl6n7gvkow64clu9stjd",
          visible: !0,
          name: "Time Management",
          description: "",
          level: 5,
          keywords: [],
        },
      ],
    },
    custom: {},
  },
  A0 = {
    template: "gengar",
    layout: [
      [
        [
          "summary",
          "education",
          "experience",
          "projects",
          "volunteer",
          "references",
        ],
        [
          "profiles",
          "skills",
          "languages",
          "interests",
          "certifications",
          "awards",
          "publications",
        ],
      ],
    ],
    css: {
      value: `.section {
	outline: 1px solid #000;
	outline-offset: 4px;
}`,
      visible: !1,
    },
    page: {
      margin: 10,
      format: "a4",
      options: { breakLine: !0, pageNumbers: !0 },
    },
    theme: { background: "#ffffff", text: "#000000", primary: "#475569" },
    typography: {
      font: {
        family: "IBM Plex Sans",
        subset: "latin",
        variants: ["regular"],
        size: 14.9,
      },
      lineHeight: 1.5,
      hideIcons: !1,
      underlineLinks: !1,
    },
    notes: "",
  },
  Ko = { basics: I0, sections: F0, metadata: A0 },
  R0 = () => {
    const U = Ko.sections.languages.items,
      V = (m) => {
        const b = [];
        for (let G = 0; G < 5; G++)
          b.push(
            k.jsx("span", {
              className: `h-4 w-4 rounded-full border-gray-400 border-2 ${G < m ? "bg-yellow-300" : "bg-transparent"}`,
            })
          );
        return k.jsx("div", { className: "flex gap-1", children: b });
      };
    return k.jsx("div", {
      className: "flex flex-wrap justify-center gap-2 w-full my-6",
      children: U.map((m) =>
        k.jsxs(
          "div",
          {
            className:
              "w-1/3 h-auto flex justify-between items-center p-4 rounded-lg",
            children: [
              k.jsx("p", { className: "text-sm", children: m.name }),
              V(m.level),
            ],
          },
          m.id
        )
      ),
    });
  };
function b0() {
  const U = Object.values([
    o0,
    a0,
    u0,
    d0,
    p0,
    h0,
    g0,
    w0,
    S0,
    E0,
    C0,
    z0,
    M0,
    N0,
    L0,
  ]);
  return k.jsxs(k.Fragment, {
    children: [
      k.jsx("p", {
        className: "text-xl text-left",
        children: "Here's what I'm good at",
      }),
      k.jsx(R0, {}),
      k.jsx("p", {
        className: "text-xl text-left",
        children: "Here's what I've worked with",
      }),
      k.jsx("div", {
        className: "m-auto flex flex-wrap justify-center gap-2 w-9/12",
        children: U.map((V, m) =>
          k.jsx(
            "div",
            {
              dangerouslySetInnerHTML: { __html: V.default },
              className:
                "iconSquare w-40 h-32 flex justify-center items-center p-8 border-8 border-gray-100 rounded-3xl transition-all duration-200 grayscale",
            },
            m
          )
        ),
      }),
    ],
  });
}
const Da = ({
    id: U,
    header: V,
    description: m,
    location: b,
    subheader: G,
    dates: $,
  }) =>
    k.jsx(k.Fragment, {
      children: k.jsxs("div", {
        id: U,
        className: "w-full gap-3 my-4",
        children: [
          k.jsxs("span", {
            className: "text-left",
            children: [
              k.jsx("h2", { className: "text-2xl", children: V }),
              G && k.jsx("h3", { className: "text-sm font-mono", children: G }),
              $ &&
                k.jsx("h3", {
                  className: "italic text-gray-600 text-left",
                  children: $,
                }),
            ],
          }),
          b && k.jsx("h3", { children: b }),
          m &&
            k.jsx("div", {
              className:
                " w-3/4 mx-auto my-3 p-3 border-2 border-x-slate-500 border-y-transparent rounded-3xl text-left",
              dangerouslySetInnerHTML: {
                __html: typeof m == "string" ? m : "",
              },
            }),
        ],
      }),
    }),
  Va = ({ title: U, startColor: V, endColor: m }) =>
    k.jsx("h1", {
      className: `w-full mb-4 font-black text-transparent bg-clip-text bg-gradient-to-r ${V} ${m} ${Ur.isMobile ? "text-center text-4xl" : "text-right text-6xl"}`,
      children: U,
    });
function U0() {
  const U = Ko.sections.education.items,
    V = Ko.sections.experience.items,
    m = Ko.sections.certifications.items;
  return k.jsx(k.Fragment, {
    children: k.jsxs("div", {
      className: "rounded-2xl w-full bg-white p-4 border-4 border-slate-500",
      children: [
        k.jsx(Va, {
          title: "Education",
          startColor: "from-pink-500",
          endColor: "to-yellow-500",
        }),
        U.map((b) =>
          k.jsx(
            Da,
            {
              id: b.id,
              header: b.institution,
              subheader: `${b.studyType} - ${b.area}`,
              dates: b.date,
            },
            b.id
          )
        ),
        k.jsx(Va, {
          title: "Certs",
          startColor: "from-yellow-500",
          endColor: "to-teal-300",
        }),
        m.map((b) =>
          k.jsx(Da, { id: b.id, header: b.name, subheader: b.issuer }, b.id)
        ),
        k.jsx(Va, {
          title: "Experience",
          startColor: "from-teal-300",
          endColor: "to-purple-600",
        }),
        V.map((b) =>
          k.jsx(
            Da,
            {
              id: b.id,
              header: b.company,
              dates: b.date,
              description: b.summary,
              subheader: b.position,
            },
            b.id
          )
        ),
      ],
    }),
  });
}
const D0 = [
    "As a registered nurse with extensive experience in the operating room, I've spent years working directly with cutting-edge medical technology—from electronic medical records to surgical robots and imaging systems. My journey in healthcare led me to a natural curiosity about the tech behind the tools I use every day, which is why I made the transition to software engineering. I'm now focused on building solutions that bridge the gap between technology and healthcare.",
    "I specialize in front-end development using JavaScript and TypeScript, leveraging React to create intuitive, user-friendly applications. Additionally, I've spent time exploring the .NET ecosystem and have had a lot of fun with Blazor and MAUI. While I've gravitated primarily towards front-end development, I also spent considerable time during my education learning back-end, primarily with Node.js and Python.",
    "My background in nursing has equipped me with critical skills such as organizational leadership, high-pressure problem solving, collaboration, and multitasking — skills I bring to my work as a developer. I'm a naturally detail-oriented and focused individual, and I approach every project with a dedication to delivering high-quality, polished results.",
    "I'm excited to apply my unique perspective to a software engineering role, ideally with a company that uses technology to improve the way we care for one another. Outside of my professional work, I'm also exploring game development and continuing to build a strong portfolio of projects to showcase my skills.",
  ],
  V0 = { paragraphs: D0 },
  B0 = "/assets/booboo-BlVWhaqA.jpeg",
  W0 = "/assets/ty-and-chloe-line-art-olV_N3nm.svg";
function H0() {
  return k.jsx(k.Fragment, {
    children: k.jsx("div", {
      className:
        "w-screen h-screen bg-hero-background flex items-center justify-center",
      children: k.jsxs("div", {
        className:
          "w-9/12 bg-gray-50 rounded-3xl shadow-2xl shadow-pink-300 p-4 flex justify-between items-center",
        children: [
          k.jsxs("div", {
            className: "flex flex-col items-center",
            children: [
              k.jsxs("div", {
                className: "flex gap-2",
                children: [
                  k.jsx("h1", {
                    className:
                      "text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-pink-500 to-teal-400",
                    children: "Hi!",
                  }),
                  k.jsx("span", { className: "text-9xl", children: "👋" }),
                ],
              }),
              k.jsx("p", {
                className: "m-auto text-lg w-3/4 text-black",
                children:
                  "I'm Ty, a software engineer with hands-on experience in healthcare, I now specialize in front-end development using JavaScript, TypeScript, and React. I'm passionate about creating intuitive solutions that bridge the gap between healthcare and technology.",
              }),
            ],
          }),
          k.jsx("img", {
            src: W0,
            className:
              "rotate-90 w-96 h-72 rounded-3xl border-2 border-slate-500 bg-slate-200 object-cover",
          }),
        ],
      }),
    }),
  });
}
function G0() {
  const U = V0.paragraphs;
  return k.jsxs(k.Fragment, {
    children: [
      k.jsx(Yc, {}),
      k.jsx(H0, {}),
      k.jsx(r0, {}),
      k.jsxs("div", {
        className: "flex flex-col items-center gap-4",
        children: [
          k.jsx(Oi, {
            title: "Ty Lewis",
            id: "about",
            children: k.jsxs("div", {
              children: [
                k.jsx("img", {
                  src: B0,
                  className: ` ${Ur.isDesktop ? "w-52" : "w-24"} float-right mx-4 bg-inherit rounded-3xl transition duration-300 shadow-lg hover:shadow-2xl`,
                }),
                U.map((V) =>
                  k.jsx("p", {
                    className: "text-left indent-4 text-xl leading-tight my-4",
                    children: V,
                  })
                ),
              ],
            }),
          }),
          k.jsx(Oi, {
            title: "Technology",
            id: "tech",
            children: k.jsx(b0, {}),
          }),
          k.jsx(Oi, {
            title: "Projects",
            id: "projects",
            children: k.jsx("p", {
              children:
                "This section will contain highlights of projects I've built",
            }),
          }),
          k.jsx(Oi, { title: "Resume", id: "resume", children: k.jsx(U0, {}) }),
          k.jsx(Oi, {
            title: "Contact",
            id: "contact",
            children: k.jsx("p", {
              children: "This section will contain contact information",
            }),
          }),
        ],
      }),
    ],
  });
}
Qc.createRoot(document.getElementById("root")).render(
  k.jsx(qo.StrictMode, { children: k.jsx(G0, {}) })
);
