'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var reactDom = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal$1=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal$1,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});
reactIs_development.AsyncMode;
reactIs_development.ConcurrentMode;
reactIs_development.ContextConsumer;
reactIs_development.ContextProvider;
reactIs_development.Element;
reactIs_development.ForwardRef;
reactIs_development.Fragment;
reactIs_development.Lazy;
reactIs_development.Memo;
reactIs_development.Portal;
reactIs_development.Profiler;
reactIs_development.StrictMode;
reactIs_development.Suspense;
reactIs_development.isAsyncMode;
reactIs_development.isConcurrentMode;
reactIs_development.isContextConsumer;
reactIs_development.isContextProvider;
reactIs_development.isElement;
reactIs_development.isForwardRef;
reactIs_development.isFragment;
reactIs_development.isLazy;
reactIs_development.isMemo;
reactIs_development.isPortal;
reactIs_development.isProfiler;
reactIs_development.isStrictMode;
reactIs_development.isSuspense;
reactIs_development.isValidElementType;
reactIs_development.typeOf;

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has$1(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$1(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning$1(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var _templateObject;
var ToastWrapper = styled__default['default'].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .notification-container {\n    font-size: 14px;\n    box-sizing: border-box;\n    position: fixed;\n    z-index: 999999;\n  }\n\n  .top-right {\n    top: 12px;\n    right: 12px;\n    transition: transform 0.6s ease-in-out;\n    animation: ", "\n      0.7s;\n  }\n\n  .bottom-right {\n    bottom: 12px;\n    right: 12px;\n    transition: transform 0.6s ease-in-out;\n    animation: ", "\n      0.7s;\n  }\n\n  .top-left {\n    top: 12px;\n    left: 12px;\n    transition: transform 0.6s ease-in;\n    animation: ", "\n      0.7s;\n  }\n\n  .bottom-left {\n    bottom: 12px;\n    left: 12px;\n    transition: transform 0.6s ease-in;\n    animation: ", "\n      0.7s;\n  }\n\n  .notification {\n    background: #fff;\n    transition: 0.3s ease;\n    position: relative;\n    pointer-events: auto;\n    overflow: hidden;\n    margin: 0 0 6px;\n    padding: 30px;\n    margin-bottom: 15px;\n    width: 668px;\n    max-height: 181px;\n    border-radius: 3px 3px 3px 3px;\n    box-shadow: 4px 4px 8px #00000029;\n    border-radius: 24px;\n    color: #000;\n    opacity: 0.9;\n    background-position: 15px;\n    background-repeat: no-repeat;\n  }\n\n  .notification:hover {\n    box-shadow: 0 0 12px #fff;\n    opacity: 1;\n    cursor: pointer;\n  }\n\n  .notification-title {\n    font-family: Helvetica;\n    font-weight: 700;\n    font-size: 24px;\n    text-align: left;\n    margin-top: 0;\n    margin-bottom: 6px;\n    width: 300px;\n    height: 18px;\n  }\n\n  .notification-message {\n    font-family: Helvetica;\n    margin-top: 5px;\n    font-size: 16px;\n    text-align: left;\n    height: 18px;\n    margin-left: -1px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  .notification-image {\n    float: left;\n    margin-right: 15px;\n    margin-bottom: 15px;\n    margin-top: 7px;\n  }\n\n  .notification-image img {\n    width: 30px;\n    height: 30px;\n  }\n\n  .toast {\n    height: 50px;\n    width: 365px;\n    color: #fff;\n  }\n\n  .notification-container button {\n    position: relative;\n    right: -0.3em;\n    top: -0.3em;\n    float: right;\n    font-weight: 700;\n    color: #fff;\n    outline: none;\n    border: none;\n    text-shadow: 0 1px 0 #fff;\n    opacity: 0.8;\n    line-height: 1;\n    font-size: 16px;\n    padding: 0;\n    cursor: pointer;\n    background: 0 0;\n    border: 0;\n  }\n\n  @keyframes toast-in-right {\n    from {\n      transform: translateX(100%);\n    }\n    to {\n      transform: translateX(0);\n    }\n  }\n\n  @keyframes toast-from-top {\n    from {\n      transform: translateY(-100%);\n    }\n    to {\n      transform: translateY(0);\n    }\n  }\n\n  @keyframes toast-from-bottom {\n    from {\n      transform: translateY(100%);\n    }\n    to {\n      transform: translateY(0);\n    }\n  }\n\n  @keyframes toast-in-left {\n    from {\n      transform: translateX(-100%);\n    }\n    to {\n      transform: translateX(0);\n    }\n  }\n"])), function (props) {
  return props.animation ? props.animation : "toast-in-right";
}, function (props) {
  return props.animation ? props.animation : "toast-in-right";
}, function (props) {
  return props.animation ? props.animation : "toast-in-left";
}, function (props) {
  return props.animation ? props.animation : "toast-in-left";
});

var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  var _super = _createSuper(ErrorBoundary);

  function ErrorBoundary(props) {
    var _this;

    _classCallCheck(this, ErrorBoundary);

    _this = _super.call(this, props);
    _this.state = {
      hasError: false,
      error: '',
      errorInfo: ''
    };
    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      this.setState({
        error: error,
        errorInfo: errorInfo
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        return /*#__PURE__*/React__default['default'].createElement("h1", null, "You have some problems: ", this.state.error, ", more info: ", this.state.errorInfo);
      }

      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError() {
      return {
        hasError: true
      };
    }
  }]);

  return ErrorBoundary;
}(React__default['default'].Component);

var Toast = function Toast(props) {
  var toastList = props.toastList,
      position = props.position,
      autoDelete = props.autoDelete,
      autoDeleteTime = props.autoDeleteTime,
      animation = props.animation;

  var _useState = React.useState([toastList]),
      _useState2 = _slicedToArray(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  React.useEffect(function () {
    setList(_toConsumableArray(toastList));
  }, [toastList]);
  React.useEffect(function () {
    var interval = setInterval(function () {
      if (autoDelete && toastList.length && list.length) {
        deleteToast(toastList[0].id);
      }
    }, autoDeleteTime);
    return function () {
      clearInterval(interval);
    };
  }, [toastList, autoDelete, autoDeleteTime, list]);

  var deleteToast = function deleteToast(id) {
    var listItemIndex = list.findIndex(function (e) {
      return e.id === id;
    });
    var toastListItem = toastList.findIndex(function (e) {
      return e.id === id;
    });
    list.splice(listItemIndex, 1);
    toastList.splice(toastListItem, 1);
    setList(_toConsumableArray(list));
  };

  return /*#__PURE__*/React__default['default'].createElement(ErrorBoundary, null, /*#__PURE__*/React__default['default'].createElement(ToastWrapper, {
    animation: animation
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "notification-container ".concat(position)
  }, list.map(function (toast) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      key: toast.id + 1,
      className: "notification toast ".concat(position),
      style: {
        backgroundColor: toast.backgroundColor,
        padding: toast.toastPadding
      }
    }, /*#__PURE__*/React__default['default'].createElement("button", {
      onClick: function onClick() {
        return deleteToast(toast.id);
      },
      style: {
        color: toast.titleColor
      }
    }, "X"), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "notification-image"
    }, /*#__PURE__*/React__default['default'].createElement("img", {
      src: toast.icon
    })), /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("p", {
      className: "notification-title",
      style: {
        color: toast.titleColor
      }
    }, toast.title), /*#__PURE__*/React__default['default'].createElement("p", {
      className: "notification-message"
    }, toast.description)));
  }))));
};
Toast.defaultProps = {
  position: "bottom-right",
  autoDelete: true,
  autoDeleteTime: 3000
};
Toast.propTypes = {
  toastList: propTypes.array.isRequired,
  position: propTypes.string,
  autoDelete: propTypes.bool,
  autoDeleteTime: propTypes.number,
  animation: propTypes.string
};

var Portal = function Portal(_ref) {
  var children = _ref.children;
  var mount = document.createElement("div");
  document.body.appendChild(mount);
  mount.setAttribute("id", "toast-root");
  var el = document.createElement("div");
  el.setAttribute("id", "notification-wrapper");
  React.useEffect(function () {
    mount.appendChild(el);
    return function () {
      mount.removeChild(el);
      document.getElementById("toast-root").remove();
    };
  }, [el, mount]);
  return /*#__PURE__*/reactDom.createPortal(children, el);
};

var ToastContainer = function ToastContainer(props) {
  return /*#__PURE__*/React__default['default'].createElement(Portal, null, props.children);
};

var errorIcon = "function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nimport * as React from \"react\";\n\nvar _ref = /*#__PURE__*/React.createElement(\"defs\", null, /*#__PURE__*/React.createElement(\"style\", null, \".error_svg__a{fill:#fff}\"));\n\nvar _ref2 = /*#__PURE__*/React.createElement(\"path\", {\n  className: \"error_svg__a\",\n  d: \"M63.998 60.184L52.519 48.698a29.7 29.7 0 10-3.816 3.816l11.483 11.484zM5.46 29.731a24.271 24.271 0 1124.271 24.267A24.271 24.271 0 015.46 29.731z\"\n});\n\nvar _ref3 = /*#__PURE__*/React.createElement(\"path\", {\n  className: \"error_svg__a\",\n  d: \"M45.891 39.852a2.734 2.734 0 00-2.445-1.511h-.784a18.942 18.942 0 00.59-2.734h5.661v-5.468h-5.661a18.941 18.941 0 00-.59-2.734h.784a2.734 2.734 0 002.445-1.511l2.734-5.468-4.891-2.44-1.978 3.956h-1.8a14.916 14.916 0 00-2.49-2.619 8.2 8.2 0 10-15.375 0 14.924 14.924 0 00-2.489 2.619h-1.8l-1.983-3.956-4.89 2.445 2.734 5.468a2.734 2.734 0 002.445 1.511h.784a18.942 18.942 0 00-.59 2.734H10.64v5.468h5.661a18.942 18.942 0 00.59 2.734h-.784a2.734 2.734 0 00-2.445 1.511l-2.734 5.468 4.89 2.445 1.978-3.956h1.8a12.778 12.778 0 0010.181 5.462 12.778 12.778 0 0010.177-5.468h1.8l1.978 3.956 4.89-2.445zM27.04 16.47a2.734 2.734 0 015.468 0 2.768 2.768 0 01-.025.325 11.461 11.461 0 00-5.417 0 2.766 2.766 0 01-.026-.325zm2.734 27.338c-4.522 0-8.2-4.905-8.2-10.935s3.679-10.935 8.2-10.935 8.2 4.905 8.2 10.935-3.675 10.935-8.197 10.935z\"\n});\n\nfunction SvgError(props) {\n  return /*#__PURE__*/React.createElement(\"svg\", _extends({\n    xmlns: \"http://www.w3.org/2000/svg\",\n    width: 64,\n    height: 64\n  }, props), _ref, _ref2, _ref3);\n}\n\nexport default \"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2264%22%20height%3D%2264%22%20viewBox%3D%220%200%2064%2064%22%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill%3A%23fff%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20transform%3D%22translate%280.198%200.198%29%22%3E%3Cpath%20class%3D%22a%22%20d%3D%22M63.8%2C59.986%2C52.321%2C48.5a29.7%2C29.7%2C0%2C1%2C0-3.816%2C3.816L59.988%2C63.8ZM5.262%2C29.533A24.271%2C24.271%2C0%2C1%2C1%2C29.533%2C53.8%2C24.271%2C24.271%2C0%2C0%2C1%2C5.262%2C29.533Z%22%20transform%3D%22translate%280%200%29%22%2F%3E%3Cpath%20class%3D%22a%22%20d%3D%22M67.251%2C55.566a2.734%2C2.734%2C0%2C0%2C0-2.445-1.511h-.784a18.942%2C18.942%2C0%2C0%2C0%2C.59-2.734h5.661V45.853H64.612a18.941%2C18.941%2C0%2C0%2C0-.59-2.734h.784a2.734%2C2.734%2C0%2C0%2C0%2C2.445-1.511l2.734-5.468L65.094%2C33.7l-1.978%2C3.956h-1.8a14.916%2C14.916%2C0%2C0%2C0-2.49-2.619%2C8.2%2C8.2%2C0%2C1%2C0-15.375%2C0%2C14.924%2C14.924%2C0%2C0%2C0-2.489%2C2.619h-1.8L37.179%2C33.7l-4.89%2C2.445%2C2.734%2C5.468a2.734%2C2.734%2C0%2C0%2C0%2C2.445%2C1.511h.784a18.942%2C18.942%2C0%2C0%2C0-.59%2C2.734H32v5.468h5.661a18.942%2C18.942%2C0%2C0%2C0%2C.59%2C2.734h-.784a2.734%2C2.734%2C0%2C0%2C0-2.445%2C1.511l-2.734%2C5.468%2C4.89%2C2.445%2C1.978-3.956h1.8A12.778%2C12.778%2C0%2C0%2C0%2C51.137%2C64.99a12.778%2C12.778%2C0%2C0%2C0%2C10.177-5.468h1.8l1.978%2C3.956%2C4.89-2.445ZM48.4%2C32.184a2.734%2C2.734%2C0%2C0%2C1%2C5.468%2C0%2C2.768%2C2.768%2C0%2C0%2C1-.025.325%2C11.461%2C11.461%2C0%2C0%2C0-5.417%2C0A2.766%2C2.766%2C0%2C0%2C1%2C48.4%2C32.184Zm2.734%2C27.338c-4.522%2C0-8.2-4.905-8.2-10.935s3.679-10.935%2C8.2-10.935%2C8.2%2C4.905%2C8.2%2C10.935S55.659%2C59.522%2C51.137%2C59.522Z%22%20transform%3D%22translate%28-21.558%20-15.912%29%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\";\nexport { SvgError as ReactComponent };";

var infoIcon = "function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nimport * as React from \"react\";\n\nvar _ref = /*#__PURE__*/React.createElement(\"defs\", null, /*#__PURE__*/React.createElement(\"style\", null, \".info_svg__a{fill:#fff}\"));\n\nvar _ref2 = /*#__PURE__*/React.createElement(\"circle\", {\n  className: \"info_svg__a\",\n  cx: 3.442,\n  cy: 3.442,\n  r: 3.442,\n  transform: \"translate(28.558 43.702)\"\n});\n\nvar _ref3 = /*#__PURE__*/React.createElement(\"path\", {\n  className: \"info_svg__a\",\n  d: \"M32 0a32 32 0 1032 32A31.983 31.983 0 0032 0zm0 59a27 27 0 1127-27 26.985 26.985 0 01-27 27z\"\n});\n\nvar _ref4 = /*#__PURE__*/React.createElement(\"path\", {\n  className: \"info_svg__a\",\n  d: \"M32 14.928a11.028 11.028 0 00-11.016 11.016 2.754 2.754 0 005.508 0A5.508 5.508 0 1132 31.452a2.754 2.754 0 00-2.754 2.754v6.885a2.754 2.754 0 005.508 0v-4.479A11.016 11.016 0 0032 14.929z\"\n});\n\nfunction SvgInfo(props) {\n  return /*#__PURE__*/React.createElement(\"svg\", _extends({\n    xmlns: \"http://www.w3.org/2000/svg\",\n    width: 64,\n    height: 64\n  }, props), _ref, _ref2, _ref3, _ref4);\n}\n\nexport default \"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2264%22%20height%3D%2264%22%20viewBox%3D%220%200%2064%2064%22%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill%3A%23fff%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ccircle%20class%3D%22a%22%20cx%3D%223.442%22%20cy%3D%223.442%22%20r%3D%223.442%22%20transform%3D%22translate%2828.558%2043.702%29%22%2F%3E%3Cpath%20class%3D%22a%22%20d%3D%22M32%2C0A32%2C32%2C0%2C1%2C0%2C64%2C32%2C31.983%2C31.983%2C0%2C0%2C0%2C32%2C0Zm0%2C59A27%2C27%2C0%2C1%2C1%2C59%2C32%2C26.985%2C26.985%2C0%2C0%2C1%2C32%2C59Z%22%2F%3E%3Cpath%20class%3D%22a%22%20d%3D%22M187.016%2C128.5A11.028%2C11.028%2C0%2C0%2C0%2C176%2C139.516a2.754%2C2.754%2C0%2C0%2C0%2C5.508%2C0%2C5.508%2C5.508%2C0%2C1%2C1%2C5.508%2C5.508%2C2.754%2C2.754%2C0%2C0%2C0-2.754%2C2.754v6.885a2.754%2C2.754%2C0%2C0%2C0%2C5.508%2C0v-4.479a11.016%2C11.016%2C0%2C0%2C0-2.754-21.683Z%22%20transform%3D%22translate%28-155.016%20-113.572%29%22%2F%3E%3C%2Fsvg%3E\";\nexport { SvgInfo as ReactComponent };";

var warningIcon = "function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nimport * as React from \"react\";\n\nvar _ref = /*#__PURE__*/React.createElement(\"path\", {\n  d: \"M32.003 44.974a3.6 3.6 0 000 7.2 3.6 3.6 0 000-7.2z\"\n});\n\nvar _ref2 = /*#__PURE__*/React.createElement(\"path\", {\n  d: \"M62.442 57.725a13.288 13.288 0 00.026-12.434l-20.6-39.03a10.891 10.891 0 00-19.708-.014L1.529 45.318a13.4 13.4 0 00.039 12.506A11.117 11.117 0 0011.4 64h41.149a11.2 11.2 0 009.893-6.275zm-4.473-2.821a6.142 6.142 0 01-5.433 3.44H11.383a6.054 6.054 0 01-5.368-3.368A7.366 7.366 0 016 48.111L26.631 9.052a5.944 5.944 0 0110.762.014l20.616 39.06a7.268 7.268 0 01-.04 6.778z\"\n});\n\nvar _ref3 = /*#__PURE__*/React.createElement(\"path\", {\n  d: \"M31.108 19.717a3.913 3.913 0 00-2.778 3.929c.086 1.137.158 2.288.245 3.425.245 4.332.489 8.577.734 12.909A2.636 2.636 0 0032 42.513a2.691 2.691 0 002.691-2.619c0-.892 0-1.713.086-2.619.158-2.778.331-5.555.489-8.333.086-1.8.245-3.6.331-5.4a4.444 4.444 0 00-.331-1.8 3.607 3.607 0 00-4.158-2.025z\"\n});\n\nfunction SvgWarning(props) {\n  return /*#__PURE__*/React.createElement(\"svg\", _extends({\n    xmlns: \"http://www.w3.org/2000/svg\",\n    width: 64,\n    height: 64\n  }, props), _ref, _ref2, _ref3);\n}\n\nexport default \"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2264%22%20height%3D%2264%22%20viewBox%3D%220%200%2064%2064%22%3E%3Cg%20transform%3D%22translate%280%20-20.882%29%22%3E%3Cg%20transform%3D%22translate%280%2020.882%29%22%3E%3Cpath%20d%3D%22M221.823%2C333.382a3.6%2C3.6%2C0%2C0%2C0%2C0%2C7.2%2C3.6%2C3.6%2C0%2C0%2C0%2C0-7.2Z%22%20transform%3D%22translate%28-189.82%20-288.408%29%22%2F%3E%3Cpath%20d%3D%22M62.442%2C78.607a13.288%2C13.288%2C0%2C0%2C0%2C.026-12.434l-20.6-39.03a10.891%2C10.891%2C0%2C0%2C0-19.708-.014L1.529%2C66.2a13.4%2C13.4%2C0%2C0%2C0%2C.039%2C12.506A11.117%2C11.117%2C0%2C0%2C0%2C11.4%2C84.882H52.549A11.2%2C11.2%2C0%2C0%2C0%2C62.442%2C78.607Zm-4.473-2.821a6.142%2C6.142%2C0%2C0%2C1-5.433%2C3.44H11.383a6.054%2C6.054%2C0%2C0%2C1-5.368-3.368A7.366%2C7.366%2C0%2C0%2C1%2C6%2C68.993L26.631%2C29.934a5.944%2C5.944%2C0%2C0%2C1%2C10.762.014L58.009%2C69.008A7.268%2C7.268%2C0%2C0%2C1%2C57.969%2C75.786Z%22%20transform%3D%22translate%280%20-20.882%29%22%2F%3E%3Cpath%20d%3D%22M220.5%2C157.278a3.913%2C3.913%2C0%2C0%2C0-2.778%2C3.929c.086%2C1.137.158%2C2.288.245%2C3.425.245%2C4.332.489%2C8.577.734%2C12.909a2.636%2C2.636%2C0%2C0%2C0%2C2.691%2C2.533%2C2.691%2C2.691%2C0%2C0%2C0%2C2.691-2.619c0-.892%2C0-1.713.086-2.619.158-2.778.331-5.555.489-8.333.086-1.8.245-3.6.331-5.4a4.444%2C4.444%2C0%2C0%2C0-.331-1.8A3.607%2C3.607%2C0%2C0%2C0%2C220.5%2C157.278Z%22%20transform%3D%22translate%28-189.392%20-137.561%29%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\";\nexport { SvgWarning as ReactComponent };";

var succsessIcon = "function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nimport * as React from \"react\";\n\nvar _ref = /*#__PURE__*/React.createElement(\"defs\", null, /*#__PURE__*/React.createElement(\"style\", null, \".success_svg__a{fill:#fff}\"));\n\nvar _ref2 = /*#__PURE__*/React.createElement(\"path\", {\n  className: \"success_svg__a\",\n  d: \"M32 0a32 32 0 1032 32A32.036 32.036 0 0032 0zm0 61.538A29.538 29.538 0 1161.538 32 29.573 29.573 0 0132 61.538z\"\n});\n\nvar _ref3 = /*#__PURE__*/React.createElement(\"path\", {\n  className: \"success_svg__a\",\n  d: \"M49.5 20.961l-21.953 17.29-13.227-7.407a1.873 1.873 0 00-2.007.156.817.817 0 00.223 1.406l14.286 8a1.846 1.846 0 00.893.219 1.748 1.748 0 001.069-.336l22.857-18a.809.809 0 00-.119-1.411 1.882 1.882 0 00-2.022.083z\"\n});\n\nfunction SvgSuccess(props) {\n  return /*#__PURE__*/React.createElement(\"svg\", _extends({\n    xmlns: \"http://www.w3.org/2000/svg\",\n    width: 64,\n    height: 64\n  }, props), _ref, _ref2, _ref3);\n}\n\nexport default \"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2264%22%20height%3D%2264%22%20viewBox%3D%220%200%2064%2064%22%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill%3A%23fff%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cpath%20class%3D%22a%22%20d%3D%22M32%2C0A32%2C32%2C0%2C1%2C0%2C64%2C32%2C32.036%2C32.036%2C0%2C0%2C0%2C32%2C0Zm0%2C61.538A29.538%2C29.538%2C0%2C1%2C1%2C61.538%2C32%2C29.573%2C29.573%2C0%2C0%2C1%2C32%2C61.538Z%22%2F%3E%3Cpath%20class%3D%22a%22%20d%3D%22M49.5%2C15.336%2C27.547%2C32.626%2C14.32%2C25.219a1.873%2C1.873%2C0%2C0%2C0-2.007.156.817.817%2C0%2C0%2C0%2C.223%2C1.406l14.286%2C8a1.846%2C1.846%2C0%2C0%2C0%2C.893.219%2C1.748%2C1.748%2C0%2C0%2C0%2C1.069-.336l22.857-18a.809.809%2C0%2C0%2C0-.119-1.411A1.882%2C1.882%2C0%2C0%2C0%2C49.5%2C15.336Z%22%20transform%3D%22translate%280%205.625%29%22%2F%3E%3C%2Fsvg%3E\";\nexport { SvgSuccess as ReactComponent };";

var WHITE = "#FFFFFF";
var GREEN = "#5cb85c";
var RED = "#d9534f";
var PURPLE = "#9A40D3";
var BLACK = "#000000";
var YELOW = "#F4E048";
var GREY = "#f2f2f2";

var SUCCESS = "success";
var ERROR = "error";
var INFO = "info";
var WARNING = "warning";

var SUCCESS_TITLE = "Success";
var ERROR_TITLE = "Error";
var INFO_TITLE = "Info";
var WARNING_TITLE = "Warning";
var CUSTOM_TITLE = "Custom";

var toastList = [];

var _Toast = /*#__PURE__*/function () {
  function _Toast(toastList) {
    _classCallCheck(this, _Toast);

    if (_Toast.singleton) {
      throw new Error('Singleton classes cant be instantiated more than once.');
    }

    _Toast.singleton = this;
    this.toastList = toastList;
  }

  _createClass(_Toast, [{
    key: "showToast",
    value: function showToast(toastType, toastProperties, toastPosition, toastIsAutoDelete, toastAutoDeleteTime, animation) {
      var _toastProperties = toastProperties,
          toastId = _toastProperties.toastId,
          title = _toastProperties.title,
          titleColor = _toastProperties.titleColor,
          description = _toastProperties.description,
          backgroundColor = _toastProperties.backgroundColor,
          icon = _toastProperties.icon,
          padding = _toastProperties.padding;
      var id = Math.floor(Math.random() * 101 + 1);

      switch (toastType) {
        case SUCCESS:
          toastProperties = _objectSpread2(_objectSpread2({}, toastProperties), {}, {
            id: toastId || id,
            title: title || SUCCESS_TITLE,
            titleColor: titleColor || WHITE,
            description: description || "",
            backgroundColor: backgroundColor || GREEN,
            icon: icon || succsessIcon,
            toastPadding: padding
          });
          break;

        case ERROR:
          toastProperties = _objectSpread2(_objectSpread2({}, toastProperties), {}, {
            id: toastId || id,
            title: title || ERROR_TITLE,
            titleColor: titleColor || WHITE,
            description: description || "",
            backgroundColor: backgroundColor || RED,
            icon: icon || errorIcon,
            toastPadding: padding
          });
          break;

        case INFO:
          toastProperties = _objectSpread2(_objectSpread2({}, toastProperties), {}, {
            id: toastId || id,
            title: title || INFO_TITLE,
            titleColor: titleColor || WHITE,
            description: description || "",
            backgroundColor: backgroundColor || PURPLE,
            icon: icon || infoIcon,
            toastPadding: padding
          });
          break;

        case WARNING:
          toastProperties = _objectSpread2(_objectSpread2({}, toastProperties), {}, {
            id: toastId || id,
            title: title || WARNING_TITLE,
            titleColor: titleColor || BLACK,
            description: description || "",
            backgroundColor: backgroundColor || YELOW,
            icon: icon || warningIcon,
            toastPadding: padding
          });
          break;

        default:
          toastProperties = _objectSpread2(_objectSpread2({}, toastProperties), {}, {
            id: toastId || id,
            title: title || CUSTOM_TITLE,
            titleColor: titleColor || BLACK,
            description: description || "",
            backgroundColor: backgroundColor || GREY,
            icon: icon || succsessIcon,
            toastPadding: padding
          });
      }

      if (toastList.length < 3) toastList = [].concat(_toConsumableArray(toastList), [toastProperties]);
      return /*#__PURE__*/React__default['default'].createElement(ToastContainer, null, /*#__PURE__*/React__default['default'].createElement(Toast, {
        toastList: toastList,
        position: toastPosition,
        autoDelete: toastIsAutoDelete,
        autoDeleteTime: toastAutoDeleteTime,
        animation: animation
      }));
    }
  }]);

  return _Toast;
}();

var toast = new _Toast(toastList);

exports.toast = toast;
