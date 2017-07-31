webpackJsonp([10071986123677762000],{

/***/ "./node_modules/css-in-js-utils/lib/hyphenateProperty.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = hyphenateProperty;
	
	var _hyphenateStyleName = __webpack_require__("./node_modules/hyphenate-style-name/index.js");
	
	var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function hyphenateProperty(property) {
	  return (0, _hyphenateStyleName2.default)(property);
	}
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js":
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isPrefixedValue;
	
	var regex = /-webkit-|-moz-|-ms-/;
	
	function isPrefixedValue(value) {
	  return typeof value === 'string' && regex.test(value);
	}
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/deep-equal/index.js":
/***/ (function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__("./node_modules/deep-equal/lib/keys.js");
	var isArguments = __webpack_require__("./node_modules/deep-equal/lib/is_arguments.js");
	
	var deepEqual = module.exports = function (actual, expected, opts) {
	  if (!opts) opts = {};
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;
	
	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();
	
	  // 7.3. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
	    return opts.strict ? actual === expected : actual == expected;
	
	  // 7.4. For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected, opts);
	  }
	}
	
	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}
	
	function isBuffer (x) {
	  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') return false;
	  return true;
	}
	
	function objEquiv(a, b, opts) {
	  var i, key;
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return deepEqual(a, b, opts);
	  }
	  if (isBuffer(a)) {
	    if (!isBuffer(b)) {
	      return false;
	    }
	    if (a.length !== b.length) return false;
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) return false;
	    }
	    return true;
	  }
	  try {
	    var ka = objectKeys(a),
	        kb = objectKeys(b);
	  } catch (e) {//happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], opts)) return false;
	  }
	  return typeof a === typeof b;
	}


/***/ }),

/***/ "./node_modules/deep-equal/lib/is_arguments.js":
/***/ (function(module, exports) {

	var supportsArgumentsClass = (function(){
	  return Object.prototype.toString.call(arguments)
	})() == '[object Arguments]';
	
	exports = module.exports = supportsArgumentsClass ? supported : unsupported;
	
	exports.supported = supported;
	function supported(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	};
	
	exports.unsupported = unsupported;
	function unsupported(object){
	  return object &&
	    typeof object == 'object' &&
	    typeof object.length == 'number' &&
	    Object.prototype.hasOwnProperty.call(object, 'callee') &&
	    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
	    false;
	};


/***/ }),

/***/ "./node_modules/deep-equal/lib/keys.js":
/***/ (function(module, exports) {

	exports = module.exports = typeof Object.keys === 'function'
	  ? Object.keys : shim;
	
	exports.shim = shim;
	function shim (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}


/***/ }),

/***/ "./node_modules/exenv/index.js":
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Based on code that is Copyright 2013-2015, Facebook, Inc.
	  All rights reserved.
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var canUseDOM = !!(
			typeof window !== 'undefined' &&
			window.document &&
			window.document.createElement
		);
	
		var ExecutionEnvironment = {
	
			canUseDOM: canUseDOM,
	
			canUseWorkers: typeof Worker !== 'undefined',
	
			canUseEventListeners:
				canUseDOM && !!(window.addEventListener || window.attachEvent),
	
			canUseViewport: canUseDOM && !!window.screen
	
		};
	
		if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return ExecutionEnvironment;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = ExecutionEnvironment;
		} else {
			window.ExecutionEnvironment = ExecutionEnvironment;
		}
	
	}());


/***/ }),

/***/ "./node_modules/glamor/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

	(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
	/******/ 		(function (module) {
	/******/ 		  if (module.exports
	/******/ 		    && !module.exports.__esModule
	/******/ 		    && module.exports.default === undefined
	/******/ 		  ) {
	/******/ 		    if (module.exports.headers
	/******/ 		      && module.exports.headers.common
	/******/ 		      && module.exports.headers.common.Accept
	/******/ 		      && module.exports.adapter
	/******/ 		      && module.exports.transformRequest
	/******/ 		      && module.exports.transformResponse
	/******/ 		    ) {
	/******/ 		      return;
	/******/ 		    }
	/******/ 		    module.exports.default = module.exports;
	/******/ 		  }
	/******/ 		})(module);
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
	/******/ 	// identity function for calling harmony imports with the correct context
	/******/ 	__webpack_require__.i = function(value) { return value; };
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
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(__webpack_require__.s = 3);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var Simulations_1 = __webpack_require__(1);
	exports.isBrowser = typeof window !== 'undefined';
	exports.isDev = "test" !== 'production';
	exports.isTest = "test" === 'test';
	exports.idRegex = /data\-css\-([a-zA-Z0-9]+)/;
	var hash_1 = __webpack_require__(5);
	exports.hashify = hash_1.hashify;
	var clean_1 = __webpack_require__(4);
	exports.clean = clean_1.clean;
	/**** labels ****/
	// toggle for debug labels.
	// *shouldn't* have to mess with this manually
	exports.hasLabels = exports.isDev;
	function cssLabels(bool) {
	    exports.hasLabels = !!bool;
	}
	exports.cssLabels = cssLabels;
	/**
	 * Check if the passed value is a css rule.
	 * CSS rule object must contain the key 'data-css-<id>'
	 * @param rule
	 */
	function isLikeRule(rule) {
	    var keys = Object.keys(rule).filter(function (x) { return x !== 'toString'; });
	    if (keys.length !== 1) {
	        return false;
	    }
	    return !!/data\-css\-([a-zA-Z0-9]+)/.exec(keys[0]);
	}
	exports.isLikeRule = isLikeRule;
	// extracts id from a { 'data-css-<id>': ''} like object
	/**
	 * Get the id from a rule, the rule looks like { 'data-css-<id>': ''}
	 * @param rule
	 */
	function idFor(rule) {
	    var keys = Object.keys(rule).filter(function (x) { return x !== 'toString'; });
	    if (keys.length !== 1) {
	        throw new Error('not a rule');
	    }
	    var match = exports.idRegex.exec(keys[0]);
	    if (!match) {
	        throw new Error('not a rule');
	    }
	    return match[1];
	}
	exports.idFor = idFor;
	exports.nullRule = {
	    'data-css-nil': ''
	};
	Object.defineProperty(exports.nullRule, 'toString', {
	    enumerable: false, value: function () { return 'css-nil'; }
	});
	/**
	 * Create a selector string. Selector string looks like '.css-1j2tyha,[data-css-1j2tyha]'
	 * @param id
	 * @param path
	 */
	function selector(id, path) {
	    if (id == null) {
	        return path.replace(/\&/g, '');
	    }
	    if (path == null) {
	        return ".css-" + id + ",[data-css-" + id + "]";
	    }
	    var x = path
	        .split(',')
	        .map(function (x) { return x.indexOf('&') >= 0 ?
	        [x.replace(/\&/mg, ".css-" + id), x.replace(/\&/mg, "[data-css-" + id + "]")].join(',') // todo - make sure each sub selector has an &
	        : ".css-" + id + x + ",[data-css-" + id + "]" + x; })
	        .join(',');
	    if (Simulations_1.canSimulate && /^\&\:/.exec(path) && !/\s/.exec(path)) {
	        x += ",.css-" + id + "[data-simulate-" + simple(path) + "],[data-css-" + id + "][data-simulate-" + simple(path) + "]";
	    }
	    return x;
	}
	exports.selector = selector;
	/**
	 * Remove every charachter that is not a letter or a number and turn the capital-case to lowercase.
	 *
	 * Ex: simple('abc$%#12 3abc') => return 'abc123abc'
	 * @param str
	 */
	function simple(str) {
	    return str.toLowerCase().replace(/[^a-z0-9]/g, '');
	}
	exports.simple = simple;
	// flatten a nested array
	/**
	 * Flatten a nasted array, destructure an array of arrays into a single simple array
	 * Example: input is arr1[arr2[val1, val2, val3], val4, val5 ,arr3[val6, val7] ] =>
	 * Output is : arr [val1, val2, val3, val4, val5, val6, val7]
	 * @param inArr
	 */
	function flatten(inArr) {
	    var arr = [];
	    for (var _i = 0, inArr_1 = inArr; _i < inArr_1.length; _i++) {
	        var value = inArr_1[_i];
	        if (Array.isArray(value)) {
	            arr = arr.concat(flatten(value));
	        }
	        else {
	            arr = arr.concat(value);
	        }
	    }
	    return arr;
	}
	exports.flatten = flatten;
	
	
	/***/ }),
	/* 1 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var utils_1 = __webpack_require__(0);
	var clean_1 = __webpack_require__(4);
	// a flag to enable simulation meta tags on dom nodes
	// defaults to true in dev mode. recommend *not* to
	// toggle often.
	exports.canSimulate = utils_1.isDev;
	// we use these flags for issuing warnings when simulate is called
	// in prod / in incorrect order
	var warned1 = false, warned2 = false;
	// toggles simulation activity. shouldn't be needed in most cases
	function simulations(bool) {
	    if (bool === void 0) { bool = true; }
	    exports.canSimulate = !!bool;
	}
	exports.simulations = simulations;
	// use this on dom nodes to 'simulate' pseudoclasses
	// <div {...hover({ color: 'red' })} {...simulate('hover', 'visited')}>...</div>
	// you can even send in some weird ones, as long as it's in simple format
	// and matches an existing rule on the element
	// eg simulate('nthChild2', ':hover:active') etc
	function simulate() {
	    var pseudos = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        pseudos[_i] = arguments[_i];
	    }
	    pseudos = clean_1.clean(pseudos);
	    if (!pseudos) {
	        return {};
	    }
	    if (!exports.canSimulate) {
	        if (!warned1) {
	            console.warn("can't simulate without once calling simulations(true)"); // eslint-disable-line no-console
	            warned1 = true;
	        }
	        if (!utils_1.isDev && !utils_1.isTest && !warned2) {
	            console.warn("don't use simulation outside dev"); // eslint-disable-line no-console
	            warned2 = true;
	        }
	        return {};
	    }
	    return pseudos.reduce(function (o, p) { return (o["data-simulate-" + utils_1.simple(p)] = '', o); }, {});
	}
	exports.simulate = simulate;
	
	
	/***/ }),
	/* 2 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var utils_1 = __webpack_require__(0);
	var GenericCache_1 = __webpack_require__(12);
	exports.GenericCache = GenericCache_1.GenericCache;
	/**
	 * This variable will be used to store each created style object using the hash value of this object (id) as a key
	 */
	exports.registered = new GenericCache_1.GenericCache();
	/**
	 * This vaiable will be used to store each created rule using the hash value of Spec object(id) as a key.
	 *
	 * A cached rule looks like: {data-css-<id>: ''}
	 */
	exports.ruleCache = new GenericCache_1.GenericCache();
	/**
	 * Store if a rule is successfully inserted in the StyleSheet (in <style> tag) using the id as a key
	 */
	exports.inserted = new GenericCache_1.GenericCache();
	function getRegistered(rule) {
	    if (utils_1.isLikeRule(rule)) {
	        var ret = exports.registered.get(utils_1.idFor(rule));
	        if (ret == null) {
	            throw new Error('[glamor] an unexpected rule cache miss occurred. This is probably a sign of multiple glamor instances in your app. See https://github.com/threepointone/glamor/issues/79');
	        }
	        return ret;
	    }
	    return rule;
	}
	exports.getRegistered = getRegistered;
	
	
	/***/ }),
	/* 3 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var PluginSet_1 = __webpack_require__(9);
	var prefix_1 = __webpack_require__(11);
	var fallbacks_1 = __webpack_require__(10);
	var StyleSheet_1 = __webpack_require__(6);
	var utils_1 = __webpack_require__(0);
	exports.isLikeRule = utils_1.isLikeRule;
	exports.cssLabels = utils_1.cssLabels;
	var css_1 = __webpack_require__(8);
	exports.cssFor = css_1.cssFor;
	var cache_1 = __webpack_require__(2);
	var MultiIndexCache_1 = __webpack_require__(7);
	var cachedCss = (typeof WeakMap !== 'undefined') ? MultiIndexCache_1.multiIndexCache(css_1.generateCss, function (spec) { return cache_1.registered.has(spec.toString().substring(4)); }) : css_1.generateCss;
	exports.styleSheet = new StyleSheet_1.StyleSheet();
	exports.styleSheet.inject();
	exports.plugins = new PluginSet_1.PluginSet([prefix_1.prefix, fallbacks_1.fallbacks]);
	exports.keyframesPlugins = new PluginSet_1.PluginSet([prefix_1.prefix]);
	function speedy(bool) {
	    return exports.styleSheet.speedy(bool);
	}
	exports.speedy = speedy;
	function css() {
	    // if (rules[0] && rules[0].length && rules[0].raw) {
	    //   throw new Error('you forgot to include glamor/babel in your babel plugins.')
	    // }
	    var rules = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        rules[_i] = arguments[_i];
	    }
	    var cleanedRules = utils_1.clean(rules);
	    if (!cleanedRules) {
	        return utils_1.nullRule;
	    }
	    return cachedCss(cleanedRules);
	}
	exports.css = css;
	(function (css_2) {
	    function insert(css) {
	        var spec = {
	            id: utils_1.hashify(css),
	            css: css,
	            type: 'raw'
	        };
	        cache_1.registered.add(spec.id, spec);
	        if (!cache_1.inserted.has(spec.id)) {
	            exports.styleSheet.insert(spec.css);
	            cache_1.inserted.add(spec.id, true);
	        }
	    }
	    css_2.insert = insert;
	    function global(selector, style) {
	        return css.insert(css_1.toCSS({ selector: selector, style: style }));
	    }
	    css_2.global = global;
	    function keyframes(arg1, arg2) {
	        var name = 'animation';
	        var kfs;
	        if (arg2 != null) {
	            name = arg1;
	            kfs = arg2;
	        }
	        else {
	            kfs = arg1;
	        }
	        // do not ignore empty keyframe definitions for now.
	        kfs = utils_1.clean(kfs) || {};
	        var spec = {
	            id: utils_1.hashify(name, kfs),
	            type: 'keyframes',
	            name: name,
	            keyframes: kfs
	        };
	        cache_1.registered.add(spec.id, spec);
	        css_1.insertKeyframe(spec);
	        return name + '_' + spec.id;
	    }
	    css_2.keyframes = keyframes;
	    function fontFace(font) {
	        font = utils_1.clean(font);
	        var spec = {
	            id: utils_1.hashify(font),
	            type: 'font-face',
	            font: font
	        };
	        cache_1.registered.add(spec.id, spec);
	        css_1.insertFontFace(spec);
	        return font.fontFamily;
	    }
	    css_2.fontFace = fontFace;
	})(css || (css = {}));
	exports.css = css;
	exports.insertRule = css.insert;
	exports.insertGlobal = css.global;
	exports.keyframes = css.keyframes;
	exports.fontFace = css.fontFace;
	// rehydrate the insertion cache with ids sent from
	// renderStatic / renderStaticOptimized
	function rehydrate(ids) {
	    for (var _i = 0, ids_1 = ids; _i < ids_1.length; _i++) {
	        var id = ids_1[_i];
	        cache_1.inserted.add(id, true);
	    }
	}
	exports.rehydrate = rehydrate;
	function flush() {
	    cache_1.inserted.flush();
	    cache_1.registered.flush();
	    cache_1.ruleCache.flush();
	    exports.styleSheet.flush();
	    exports.styleSheet.inject();
	}
	exports.flush = flush;
	var Simulations_1 = __webpack_require__(1);
	exports.simulate = Simulations_1.simulate;
	exports.simulations = Simulations_1.simulations;
	exports.caches = {
	    inserted: cache_1.inserted,
	    registered: cache_1.registered
	};
	
	
	/***/ }),
	/* 4 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	// Returns true for null, false, undefined and {}
	function isFalsy(value) {
	    return value === null ||
	        value === undefined ||
	        value === false ||
	        (typeof value === 'object' && Object.keys(value).length === 0);
	}
	function cleanObject(object) {
	    if (isFalsy(object)) {
	        return null;
	    }
	    if (typeof object !== 'object') {
	        return object;
	    }
	    var acc = {}, keys = Object.keys(object), hasFalsy = false;
	    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
	        var key = keys_1[_i];
	        var value = object[key];
	        var filteredValue = clean(value);
	        if (filteredValue === null || filteredValue !== value) {
	            hasFalsy = true;
	        }
	        if (filteredValue !== null) {
	            acc[key] = filteredValue;
	        }
	    }
	    return Object.keys(acc).length === 0 ? null : hasFalsy ? acc : object;
	}
	function cleanArray(rules) {
	    var hasFalsy = false;
	    var filtered = [];
	    rules.forEach(function (rule) {
	        var filteredRule = clean(rule);
	        if (filteredRule === null || filteredRule !== rule) {
	            hasFalsy = true;
	        }
	        if (filteredRule !== null) {
	            filtered.push(filteredRule);
	        }
	    });
	    return filtered.length === 0 ? null :
	        hasFalsy ? filtered : rules;
	}
	/**
	 * Takes style array or object provided by user and clears all the falsy data.
	 *
	 *  If there is no styles left after filtration returns null
	 * @param input
	 */
	function clean(input) {
	    return Array.isArray(input) ? cleanArray(input) : cleanObject(input);
	}
	exports.clean = clean;
	
	
	/***/ }),
	/* 5 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	/**
	 * @param str
	 * @param seed
	 *
	 * this function will calculate the hash value and return the value as a number
	 */
	Object.defineProperty(exports, "__esModule", { value: true });
	function calculateHash(str, seed) {
	    var m = 0x5bd1e995;
	    var r = 24;
	    var h = seed ^ str.length;
	    var length = str.length;
	    var currentIndex = 0;
	    while (length >= 4) {
	        var k = UInt32(str, currentIndex);
	        k = Umul32(k, m);
	        k ^= k >>> r;
	        k = Umul32(k, m);
	        h = Umul32(h, m);
	        h ^= k;
	        currentIndex += 4;
	        length -= 4;
	    }
	    switch (length) {
	        case 3:
	            h ^= UInt16(str, currentIndex);
	            h ^= str.charCodeAt(currentIndex + 2) << 16;
	            h = Umul32(h, m);
	            break;
	        case 2:
	            h ^= UInt16(str, currentIndex);
	            h = Umul32(h, m);
	            break;
	        case 1:
	            h ^= str.charCodeAt(currentIndex);
	            h = Umul32(h, m);
	            break;
	    }
	    h ^= h >>> 13;
	    h = Umul32(h, m);
	    h ^= h >>> 15;
	    return h >>> 0;
	}
	function UInt32(str, pos) {
	    return (str.charCodeAt(pos++)) +
	        (str.charCodeAt(pos++) << 8) +
	        (str.charCodeAt(pos++) << 16) +
	        (str.charCodeAt(pos) << 24);
	}
	function UInt16(str, pos) {
	    return (str.charCodeAt(pos++)) +
	        (str.charCodeAt(pos++) << 8);
	}
	function Umul32(n, m) {
	    n = n | 0;
	    m = m | 0;
	    var nlo = n & 0xffff;
	    var nhi = n >>> 16;
	    var res = ((nlo * m) + (((nhi * m) & 0xffff) << 16)) | 0;
	    return res;
	}
	/**
	 *
	 * @param str the value that have to be hashed
	 * @param seed
	 *
	 */
	function doHash(str, seed) {
	    return seed ? calculateHash(str, seed).toString(36) : calculateHash(str).toString(36);
	}
	exports.doHash = doHash;
	/**
	 *
	 * @param objs
	 *
	 * this function accept many objects of different types and calculate the hash value for all of them
	 */
	function hashify() {
	    var objs = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        objs[_i] = arguments[_i];
	    }
	    var str = '';
	    for (var i = 0; i < objs.length; i++) {
	        str += JSON.stringify(objs[i]);
	    }
	    return calculateHash(str).toString(36);
	}
	exports.hashify = hashify;
	
	
	/***/ }),
	/* 6 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	/*
	high performance StyleSheet for css-in-js systems
	
	- uses multiple style tags behind the scenes for millions of rules
	- uses `insertRule` for appending in production for *much* faster performance
	- 'polyfills' on server side
	
	
	// usage
	
	import StyleSheet from 'glamor/lib/sheet'
	let styleSheet = new StyleSheet()
	
	styleSheet.inject()
	- 'injects' the stylesheet into the page (or into memory if on server)
	
	styleSheet.insert('#box { border: 1px solid red; }')
	- appends a css rule into the stylesheet
	
	styleSheet.flush()
	- empties the stylesheet of all its contents
	
	
	*/
	Object.defineProperty(exports, "__esModule", { value: true });
	var utils_1 = __webpack_require__(0);
	var oldIE = (function () {
	    if (utils_1.isBrowser) {
	        var div = document.createElement('div');
	        div.innerHTML = '<!--[if lt IE 10]><i></i><![endif]-->';
	        return div.getElementsByTagName('i').length === 1;
	    }
	})();
	var ServerSheet = (function () {
	    function ServerSheet() {
	        this.cssRules = [];
	    }
	    ServerSheet.prototype.insertRule = function (rule, isImportRule) {
	        if (isImportRule === void 0) { isImportRule = false; }
	        if (isImportRule) {
	            this.cssRules.unshift({ cssText: rule });
	        }
	        else {
	            this.cssRules.push({ cssText: rule });
	        }
	    };
	    ServerSheet.prototype.getCSSRules = function () {
	        return this.cssRules;
	    };
	    ServerSheet.prototype.emptyCssRules = function () {
	        this.cssRules = [];
	    };
	    return ServerSheet;
	}());
	var StyleSheet = (function () {
	    function StyleSheet(speedy, maxRules) {
	        if (speedy === void 0) { speedy = !utils_1.isDev; }
	        if (maxRules === void 0) { maxRules = (utils_1.isBrowser && oldIE) ? 4000 : 65000; }
	        this.tags = []; // all the <style> tags inside our dom
	        this.injected = false; // determine if the <Style> tags are already injected inside the head of the do
	        this.isSpeedy = speedy; // the big drawback here is that the css won't be editable in devtools
	        this.sheet = undefined;
	        this.tags = [];
	        this.maxRules = maxRules;
	        this.ruleCounter = 0;
	    }
	    StyleSheet.prototype.getSheet = function () {
	        return sheetForTag(last(this.tags));
	    };
	    /**
	     * create <style> tag and inject it in the dom if it's browser einvironment
	     * otherwise it will create an array of cssRules within the StyleSheet object
	     */
	    StyleSheet.prototype.inject = function () {
	        if (this.injected) {
	            throw new Error('already injected stylesheet!');
	        }
	        if (utils_1.isBrowser) {
	            this.tags[0] = makeStyleTag();
	        }
	        else {
	            // server side 'polyfill'. just enough behavior to be useful.
	            this.sheet = new ServerSheet();
	        }
	        this.injected = true;
	    };
	    StyleSheet.prototype.speedy = function (speedy) {
	        if (this.ruleCounter !== 0) {
	            throw new Error("cannot change speedy mode after inserting any rule to sheet. Either call speedy(" + speedy + ") earlier in your app, or call flush() before speedy(" + speedy + ")");
	        }
	        this.isSpeedy = !!speedy;
	    };
	    /**
	     * Insert a new css rule into the <style> tag when it's in the browser environment
	     * @param rule
	     */
	    StyleSheet.prototype.insert = function (rule) {
	        if (utils_1.isBrowser) {
	            // this is the ultrafast version, works across browsers
	            if (this.isSpeedy && this.getSheet().insertRule) {
	                this.browInsert(rule);
	            }
	            else {
	                if (rule.indexOf('@import') !== -1) {
	                    var tag = last(this.tags);
	                    tag.insertBefore(document.createTextNode(rule), tag.firstChild);
	                }
	                else {
	                    last(this.tags).appendChild(document.createTextNode(rule));
	                }
	            }
	        }
	        else {
	            // server side is pretty simple
	            this.sheet.insertRule(rule, rule.indexOf('@import') !== -1);
	        }
	        this.ruleCounter++;
	        if (utils_1.isBrowser && this.ruleCounter % this.maxRules === 0) {
	            this.tags.push(makeStyleTag());
	        }
	        return this.ruleCounter - 1;
	    };
	    // delete(index) {
	    //  // we insert a blank rule when 'deleting' so previously returned indexes remain stable
	    //   return this.replace(index, '');
	    // }
	    StyleSheet.prototype.flush = function () {
	        this.injected = false;
	        if (utils_1.isBrowser) {
	            this.tags.forEach(function (tag) { return tag.parentNode.removeChild(tag); });
	            this.tags = [];
	            this.sheet = null;
	            this.ruleCounter = 0;
	            // todo - look for remnants in document.styleSheets
	        }
	        else {
	            // simpler on server
	            //this.sheet.emptyCssRules();
	            this.sheet.emptyCssRules();
	        }
	    };
	    StyleSheet.prototype.rules = function () {
	        if (!utils_1.isBrowser) {
	            return this.sheet.getCSSRules();
	        }
	        var arr = [];
	        this.tags.forEach(function (tag) { return arr.splice.apply(arr, [arr.length, 0].concat(Array.from(sheetForTag(tag).cssRules))); });
	        return arr;
	    };
	    /**
	     * Insert a new css rule into the <style> tag when it's in the browser environment
	     * @param rule
	     */
	    StyleSheet.prototype.browInsert = function (rule) {
	        // this weirdness for perf, and chrome's weird bug
	        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
	        try {
	            var sheet = this.getSheet();
	            sheet.insertRule(rule, rule.indexOf('@import') !== -1 ? 0 : sheet.cssRules.length);
	        }
	        catch (e) {
	            if (utils_1.isDev) {
	                // might need beter dx for this
	                console.warn('whoops, illegal rule inserted', rule); // eslint-disable-line no-console
	            }
	        }
	    };
	    return StyleSheet;
	}());
	exports.StyleSheet = StyleSheet;
	function makeStyleTag() {
	    var tag = document.createElement('style');
	    tag.type = 'text/css';
	    tag.setAttribute('data-glamor', '');
	    tag.appendChild(document.createTextNode(''));
	    (document.head || document.getElementsByTagName('head')[0]).appendChild(tag);
	    return tag;
	}
	function last(arr) {
	    return arr[arr.length - 1];
	}
	function sheetForTag(tag) {
	    if (tag.sheet) {
	        return tag.sheet;
	    }
	    // this weirdness brought to you by firefox
	    // tslint:disable-next-line:prefer-for-of
	    for (var i = 0; i < document.styleSheets.length; i++) {
	        if (document.styleSheets[i].ownerNode === tag) {
	            return document.styleSheets[i];
	        }
	    }
	}
	
	
	/***/ }),
	/* 7 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var index_1 = __webpack_require__(0);
	/**
	 * Optimization: Cache the results of calling a function with multiple parameters, in order to prevent re-excuting the function when it has been called
	 * with the same parameters more than one time.
	 * more explenation can be found here:
	 * https://github.com/threepointone/glamor/blob/master/docs/weakmaps.md
	 *
	 * @param fn the dunction which we want to cache its results
	 * @param check : optional function that returns boolean, when it's not needed do not send anything
	 *
	 * example: if we have a function fn(...args) which sum numbers and return the result
	 * 1- calling fn(1,2,3): the function will be excuted normally and the result will be cached
	 * 2- calling fn(1,3) : the function also will be excuted normally and the result will be cached.
	 * 3- calling fn(1,2,3): the function will not be excuted because we called it one timebefore with the same parameters (in the same order!),
	 * a cached result will be returned in this case
	 */
	// For future aspects and in order to write better typing, looking regularly at this link to implement it when it's finished
	// https://github.com/Microsoft/TypeScript/issues/5453
	function multiIndexCache(fn, check) {
	    if (check === void 0) { check = function (spec) { return true; }; }
	    var inputCaches = typeof WeakMap !== 'undefined' ?
	        [new WeakMap(), new WeakMap(), new WeakMap(), new WeakMap(), new WeakMap(), new WeakMap(), new WeakMap(), new WeakMap()] :
	        [];
	    var warnedWeakMapError = false;
	    return (function () {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i] = arguments[_i];
	        }
	        if (inputCaches[args.length - 1]) {
	            var coi = inputCaches[args.length - 1];
	            var ctr = 0;
	            while (ctr < args.length - 1) {
	                if (coi.has(args[ctr]) === false) {
	                    coi.set(args[ctr], new WeakMap());
	                }
	                coi = coi.get(args[ctr]);
	                ctr++;
	            }
	            if (coi.has(args[args.length - 1])) {
	                var ret = coi.get(args[ctr]);
	                // This if statement is not really important if we want to reuse the MultiIndexCache somewhere else, 
	                // But in our case we need some kind of checking, therefore we send this check function as parameter
	                if (check(ret)) {
	                    return ret;
	                }
	            }
	        }
	        var value = fn.apply(void 0, args);
	        if (inputCaches[args.length - 1]) {
	            var ctr = 0, coi = inputCaches[args.length - 1];
	            while (ctr < args.length - 1) {
	                coi = coi.get(args[ctr]);
	                ctr++;
	            }
	            try {
	                coi.set(args[ctr], value);
	            }
	            catch (err) {
	                if (index_1.isDev && !warnedWeakMapError) {
	                    warnedWeakMapError = true;
	                    console.warn.apply(console, ['failed setting the WeakMap cache for args:'].concat(args)); // eslint-disable-line no-console
	                    console.warn('this should NOT happen, please file a bug on the github repo.'); // eslint-disable-line no-console
	                }
	            }
	        }
	        return value;
	    });
	}
	exports.multiIndexCache = multiIndexCache;
	
	
	/***/ }),
	/* 8 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var index_1 = __webpack_require__(0);
	var index_2 = __webpack_require__(3);
	var react_css_property_operations_1 = __webpack_require__(29);
	var cache_1 = __webpack_require__(2);
	var hash_1 = __webpack_require__(5);
	var helper_1 = __webpack_require__(13);
	/**
	 * A Style object will be destructured into new object style with four main keys { plain:, selects:, medias:, supports:}
	 *
	 * 1- 'plain' contains the plain css styles like (color: red)
	 *
	 * 2- 'selects' contains all css styles that depend on selectors like (. , & , : , > ) ex: &:hover { }
	 *
	 * 3- 'medias' contains all css styles that depend on @media selectors
	 *
	 * 4- 'supports' contains all css styles that depend on @support selectors
	 * @param style
	 *
	 * example:
	 * input {label: [], color: 'red',
	 *        &:hover: {color: 'blue'},
	 *        @media(min-width: 300px): {color: 'green', &:hover: {color: ...}, .a & .c:{color: ...}}}
	 *
	 * output {plain: {color: 'red'},
	 *          selects: {&:hover: {color: 'blue'}},
	 *          medias: {@media(min-width: 300px): {plain: {color: ...}, selects: {&:hover: ..., .a & .c: ...}, medias: null, supports: null}},
	 *          supports: null}
	 *
	 * Notice the deep destructuring in the medias object
	 *
	 */
	function deconstruct(style) {
	    // we can be sure it's not infinitely nested here
	    var plain = null;
	    var selects = null;
	    var medias = null;
	    var supports = null;
	    Object.keys(style).forEach(function (key) {
	        if (key.indexOf('&') >= 0) {
	            selects = selects || {};
	            selects[key] = style[key];
	        }
	        else if (key.indexOf('@media') === 0) {
	            medias = medias || {};
	            medias[key] = deconstruct(style[key]);
	        }
	        else if (key.indexOf('@supports') === 0) {
	            supports = supports || {};
	            supports[key] = deconstruct(style[key]);
	        }
	        else if (key === 'label') {
	            if (style.label.length > 0) {
	                plain = plain || {};
	                plain.label = index_1.hasLabels ? style.label.join('.') : '';
	            }
	        }
	        else {
	            plain = plain || {};
	            plain[key] = style[key];
	        }
	    });
	    return { plain: plain, selects: selects, medias: medias, supports: supports };
	}
	/**
	 * create an array of strings which contains the different styles with its selectors.
	 *
	 * The result could look like:
	 *
	 *  ['.css-1j2tyha,[data-css-1j2tyha]{color:green;}', '.css-1j2tyha:hover,[ data-css-1j2tyha]:hover{color:yellow;}']
	 * @param id the hash value of the style.
	 * @param style
	 */
	function deconstructedStyleToCSS(id, style) {
	    var css = [];
	    // plugins here
	    var plain = style.plain, selects = style.selects, medias = style.medias, supports = style.supports;
	    if (plain) {
	        css.push(toCSS({ style: plain, selector: index_1.selector(id) }));
	    }
	    if (selects) {
	        Object.keys(selects).forEach(function (key) {
	            return css.push(toCSS({ style: selects[key], selector: index_1.selector(id, key) }));
	        });
	    }
	    if (medias) {
	        Object.keys(medias).forEach(function (key) {
	            return css.push(key + "{" + deconstructedStyleToCSS(id, medias[key]).join('') + "}");
	        });
	    }
	    if (supports) {
	        Object.keys(supports).forEach(function (key) {
	            return css.push(key + "{" + deconstructedStyleToCSS(id, supports[key]).join('') + "}");
	        });
	    }
	    return css;
	}
	/**
	 *
	 * @param param0
	 *
	 * example
	 * selector: .css-1j2tyha:hover,[data-css-1j2tyha]:hover'
	 * style: {color: 'blue'}
	 * result:'.css-1j2tyha:hover,[data-css-1j2tyha]:hover{color:blue;}'
	 */
	function toCSS(_a) {
	    var selector = _a.selector, style = _a.style;
	    var result = index_2.plugins.transform({ selector: selector, style: style });
	    return result.selector + "{" + react_css_property_operations_1.createMarkupForStyles(result.style) + "}";
	}
	exports.toCSS = toCSS;
	/**
	 * Insert the style rule into the StyleSheet (in other words: insert the rule into the <style> tag)
	 * @param spec
	 */
	function insert(spec) {
	    if (!cache_1.inserted.has(spec.id)) {
	        cache_1.inserted.add(spec.id, true);
	        var deconstructed = deconstruct(spec.style);
	        deconstructedStyleToCSS(spec.id, deconstructed).map(function (cssRule) { return index_2.styleSheet.insert(cssRule); });
	    }
	}
	// mutable! modifies dest.
	/**
	 * build a simplified style object by combining between corrospending @media and @support queries
	 * at the end we will get an object that is ready to be destructured
	 * @param dest
	 * @param param1
	 */
	function build(dest, _a) {
	    var _b = _a.selector, selector = _b === void 0 ? '' : _b, _c = _a.mq, mq = _c === void 0 ? '' : _c, _d = _a.supp, supp = _d === void 0 ? '' : _d, _e = _a.src, src = _e === void 0 ? {} : _e;
	    var source;
	    if (!Array.isArray(src)) {
	        source = [src];
	    }
	    else {
	        source = src;
	    }
	    source = index_1.flatten(source);
	    source.forEach(function (_src) {
	        if (index_1.isLikeRule(_src)) {
	            var reg = cache_1.getRegistered(_src);
	            if (reg.type !== 'css') {
	                throw new Error('cannot merge this rule');
	            }
	            _src = reg.style;
	        }
	        _src = index_1.clean(_src);
	        if (_src && _src.composes) {
	            build(dest, { selector: selector, mq: mq, supp: supp, src: _src.composes });
	        }
	        Object.keys(_src || {}).forEach(function (key) {
	            if (helper_1.isSelector(key)) {
	                if (key === '::placeholder') {
	                    build(dest, { selector: helper_1.joinSelectors(selector, '::-webkit-input-placeholder'), mq: mq, supp: supp, src: _src[key] });
	                    build(dest, { selector: helper_1.joinSelectors(selector, '::-moz-placeholder'), mq: mq, supp: supp, src: _src[key] });
	                    build(dest, { selector: helper_1.joinSelectors(selector, '::-ms-input-placeholder'), mq: mq, supp: supp, src: _src[key] });
	                }
	                build(dest, { selector: helper_1.joinSelectors(selector, key), mq: mq, supp: supp, src: _src[key] });
	            }
	            else if (helper_1.isMediaQuery(key)) {
	                build(dest, { selector: selector, mq: helper_1.joinMediaQueries(mq, key), supp: supp, src: _src[key] });
	            }
	            else if (helper_1.isSupports(key)) {
	                build(dest, { selector: selector, mq: mq, supp: helper_1.joinSupports(supp, key), src: _src[key] });
	            }
	            else if (key === 'composes') {
	                // ignore, we already dealth with it
	            }
	            else {
	                var _dest = dest;
	                if (supp) {
	                    _dest[supp] = _dest[supp] || {};
	                    _dest = _dest[supp];
	                }
	                if (mq) {
	                    _dest[mq] = _dest[mq] || {};
	                    _dest = _dest[mq];
	                }
	                if (selector) {
	                    _dest[selector] = _dest[selector] || {};
	                    _dest = _dest[selector];
	                }
	                if (key === 'label') {
	                    if (index_1.hasLabels) {
	                        dest.label = dest.label.concat(_src.label);
	                    }
	                }
	                else {
	                    _dest[key] = _src[key];
	                }
	            }
	        });
	    });
	}
	// let cachedCss = (typeof WeakMap !== 'undefined') ? multiIndexCache(_css) : _css;
	function generateCss(rules) {
	    // hard to type because before build() label is a string, after
	    var style = { label: [] };
	    build(style, { src: rules }); // mutative! but worth it.
	    var spec = {
	        id: hash_1.hashify(style),
	        style: style,
	        label: index_1.hasLabels ? style.label.join('.') : '',
	        type: 'css'
	    };
	    return toRule(spec);
	}
	exports.generateCss = generateCss;
	/**
	 * get the actual output for the css function, the result will look similer to:
	 * {data-css-1j2tyha: ''}
	 * @param spec
	 */
	function toRule(spec) {
	    cache_1.registered.add(spec.id, spec);
	    insert(spec);
	    if (cache_1.ruleCache.has(spec.id)) {
	        return cache_1.ruleCache.get(spec.id);
	    }
	    var ret = (_a = {}, _a["data-css-" + spec.id] = index_1.hasLabels ? spec.label || '' : '', _a);
	    Object.defineProperty(ret, 'toString', {
	        enumerable: false, value: function () { return 'css-' + spec.id; }
	    });
	    cache_1.ruleCache.add(spec.id, ret);
	    return ret;
	    var _a;
	}
	function cssFor() {
	    var rules = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        rules[_i] = arguments[_i];
	    }
	    var r = index_1.clean(rules);
	    return r ? r.map(function (r) {
	        var style = { label: [] };
	        build(style, { src: r }); // mutative! but worth it.
	        return deconstructedStyleToCSS(hash_1.hashify(style), deconstruct(style)).join('');
	    }).join('') : '';
	}
	exports.cssFor = cssFor;
	function attribsFor() {
	    var rules = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        rules[_i] = arguments[_i];
	    }
	    var r = index_1.clean(rules);
	    var htmlAttributes = r ? r.map(function (rule) {
	        index_1.idFor(rule); // throwaway check for rule
	        var key = Object.keys(rule)[0], value = rule[key];
	        return key + "=\"" + (value || '') + "\"";
	    }).join(' ') : '';
	    return htmlAttributes;
	}
	exports.attribsFor = attribsFor;
	function insertKeyframe(spec) {
	    if (!cache_1.inserted.has(spec.id)) {
	        var inner_1 = Object.keys(spec.keyframes).map(function (kf) {
	            var result = index_2.keyframesPlugins.transform({ id: spec.id, name: kf, style: spec.keyframes[kf] });
	            return result.name + "{" + react_css_property_operations_1.createMarkupForStyles(result.style) + "}";
	        }).join('');
	        ['-webkit-', '-moz-', '-o-', ''].forEach(function (prefix) {
	            return index_2.styleSheet.insert("@" + prefix + "keyframes " + (spec.name + '_' + spec.id) + "{" + inner_1 + "}");
	        });
	        cache_1.inserted.add(spec.id, true);
	    }
	}
	exports.insertKeyframe = insertKeyframe;
	function insertFontFace(spec) {
	    if (!cache_1.inserted.has(spec.id)) {
	        index_2.styleSheet.insert("@font-face{" + react_css_property_operations_1.createMarkupForStyles(spec.font) + "}");
	        cache_1.inserted.add(spec.id, true);
	    }
	}
	exports.insertFontFace = insertFontFace;
	
	
	/***/ }),
	/* 9 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var PluginSet = (function () {
	    function PluginSet(initial) {
	        if (initial === void 0) { initial = []; }
	        this.fns = initial;
	    }
	    /**
	       * Takes a list of functions(plugins) as an input parameters and add them to the plugin set if they do not exist.
	       *
	       * Can be called like: add(func1, func2, ...)
	       * @param functionsList an array of different functions to add it to
	       */
	    PluginSet.prototype.add = function () {
	        var _this = this;
	        var fns = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            fns[_i] = arguments[_i];
	        }
	        fns.forEach(function (fn) {
	            if (_this.fns.indexOf(fn) >= 0) {
	                if (true) {
	                    console.warn('adding the same plugin again, ignoring');
	                }
	            }
	            else {
	                _this.fns = [fn].concat(_this.fns);
	            }
	        });
	    };
	    PluginSet.prototype.remove = function (fn) {
	        this.fns = this.fns.filter(function (x) { return x !== fn; });
	    };
	    PluginSet.prototype.clear = function () {
	        this.fns = [];
	    };
	    PluginSet.prototype.transform = function (o) {
	        return this.fns.reduce(function (o, fn) { return fn(o); }, o);
	    };
	    return PluginSet;
	}());
	exports.PluginSet = PluginSet;
	
	
	/***/ }),
	/* 10 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var hyphenateStyleName = __webpack_require__(15);
	var memoizeStringOnly = __webpack_require__(16);
	var processStyleName = memoizeStringOnly(hyphenateStyleName);
	function fallbacks(node) {
	    var hasArray = Object.keys(node.style).map(function (x) { return Array.isArray(node.style[x]); }).indexOf(true) >= 0;
	    if (hasArray) {
	        var style_1 = node.style;
	        var flattened = Object.keys(style_1).reduce(function (o, key) {
	            return (__assign({}, o, (_a = {}, _a[key] = Array.isArray(style_1[key]) ? style_1[key].join("; " + processStyleName(key) + ": ") : style_1[key], _a)));
	            var _a;
	        }, {});
	        return __assign({}, node, { style: flattened });
	    }
	    return node;
	}
	exports.fallbacks = fallbacks;
	
	
	/***/ }),
	/* 11 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var createPrefixer = __webpack_require__(17);
	var prefixer_data_1 = __webpack_require__(14);
	var prefixAll = createPrefixer(prefixer_data_1.default);
	function prefix(node) {
	    return __assign({}, node, { style: prefixAll(node.style) });
	}
	exports.prefix = prefix;
	
	
	/***/ }),
	/* 12 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var GenericCache = (function () {
	    function GenericCache() {
	        this.cache = {};
	    }
	    GenericCache.prototype.add = function (key, val) {
	        if (!this.has(key)) {
	            this.cache[key] = val;
	        }
	    };
	    GenericCache.prototype.has = function (key) {
	        return this.cache[key] != null;
	    };
	    GenericCache.prototype.get = function (key) {
	        return this.cache[key];
	    };
	    GenericCache.prototype.flush = function () {
	        this.cache = {};
	    };
	    GenericCache.prototype.counts = function () {
	        return Object.keys(this.cache).length;
	    };
	    GenericCache.prototype.keys = function () {
	        return Object.keys(this.cache);
	    };
	    return GenericCache;
	}());
	exports.GenericCache = GenericCache;
	
	
	/***/ }),
	/* 13 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var possibles = [':', '.', '[', '>', ' '];
	/**
	 * Check if the key is a css selector like (:, ., [, >, ' ' )
	 * @param key
	 */
	function isSelector(key) {
	    var ch = key.charAt(0);
	    var found = false;
	    for (var _i = 0, possibles_1 = possibles; _i < possibles_1.length; _i++) {
	        var possible = possibles_1[_i];
	        if (ch === possible) {
	            found = true;
	            break;
	        }
	    }
	    return found || (key.indexOf('&') >= 0);
	}
	exports.isSelector = isSelector;
	function joinSelectors(a, b) {
	    var as = a.split(',').map(function (a) { return !(a.indexOf('&') >= 0) ? '&' + a : a; });
	    var bs = b.split(',').map(function (b) { return !(b.indexOf('&') >= 0) ? '&' + b : b; });
	    return bs.reduce(function (arr, b) { return arr.concat(as.map(function (a) { return b.replace(/\&/g, a); })); }, []).join(',');
	}
	exports.joinSelectors = joinSelectors;
	/**
	 * Compine two @media quieries with "and" operator, and return one @media query
	 *
	 * ex. a: @media only print
	 * b:@media only screen and (max-device-width: 480px)
	 * => result: @media only print and only screen and (max-device-width: 480px)
	 * @param a
	 * @param b
	 */
	function joinMediaQueries(a, b) {
	    return a ? "@media " + a.substring(6) + " and " + b.substring(6) : b;
	}
	exports.joinMediaQueries = joinMediaQueries;
	/**
	 * Check if the key representing a media query
	 * Media query start with "@media"
	 * @param key
	 */
	function isMediaQuery(key) {
	    return key.indexOf('@media') === 0;
	}
	exports.isMediaQuery = isMediaQuery;
	/**
	 * Check if the key represents a support query
	 * Support query starts with "@supports"
	 * ex: @support (conditions){ some css magic! }
	 * @param key
	 */
	function isSupports(key) {
	    return key.indexOf('@supports') === 0;
	}
	exports.isSupports = isSupports;
	/**
	 * Compine two @support quieries with "and" operator, and return one @support query
	 * @param a
	 * @param b
	 * ex a = @supports (display: flex)'
	 *    b = '@supports (-webkit-appearance: caret)
	 *    result :'@supports  (display: flex) and  (-webkit-appearance: caret)'
	 */
	function joinSupports(a, b) {
	    return a ? "@supports " + a.substring(9) + " and " + b.substring(9) : b;
	}
	exports.joinSupports = joinSupports;
	
	
	/***/ }),
	/* 14 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var crossFade_1 = __webpack_require__(18);
	var cursor_1 = __webpack_require__(19);
	var filter_1 = __webpack_require__(20);
	var flex_1 = __webpack_require__(21);
	var flexboxIE_1 = __webpack_require__(22);
	var flexboxOld_1 = __webpack_require__(23);
	var gradient_1 = __webpack_require__(24);
	var imageSet_1 = __webpack_require__(25);
	var position_1 = __webpack_require__(26);
	var sizing_1 = __webpack_require__(27);
	var transition_1 = __webpack_require__(28);
	var w = ["Webkit"];
	var m = ["Moz"];
	var ms = ["ms"];
	var wm = ["Webkit", "Moz"];
	var wms = ["Webkit", "ms"];
	var wmms = ["Webkit", "Moz", "ms"];
	exports.default = {
	    plugins: [crossFade_1.default, cursor_1.default, filter_1.default, flex_1.default, flexboxIE_1.default, flexboxOld_1.default, gradient_1.default, imageSet_1.default, position_1.default, sizing_1.default, transition_1.default],
	    prefixMap: { "transform": w, "transformOrigin": w, "transformOriginX": w, "transformOriginY": w, "backfaceVisibility": w, "perspective": w, "perspectiveOrigin": w, "transformStyle": w, "transformOriginZ": w, "animation": w, "animationDelay": w, "animationDirection": w, "animationFillMode": w, "animationDuration": w, "animationIterationCount": w, "animationName": w, "animationPlayState": w, "animationTimingFunction": w, "appearance": wm, "userSelect": wmms, "fontKerning": w, "textEmphasisPosition": w, "textEmphasis": w, "textEmphasisStyle": w, "textEmphasisColor": w, "boxDecorationBreak": w, "clipPath": w, "maskImage": w, "maskMode": w, "maskRepeat": w, "maskPosition": w, "maskClip": w, "maskOrigin": w, "maskSize": w, "maskComposite": w, "mask": w, "maskBorderSource": w, "maskBorderMode": w, "maskBorderSlice": w, "maskBorderWidth": w, "maskBorderOutset": w, "maskBorderRepeat": w, "maskBorder": w, "maskType": w, "textDecorationStyle": wm, "textDecorationSkip": wm, "textDecorationLine": wm, "textDecorationColor": wm, "filter": w, "fontFeatureSettings": wm, "breakAfter": wmms, "breakBefore": wmms, "breakInside": wmms, "columnCount": wm, "columnFill": wm, "columnGap": wm, "columnRule": wm, "columnRuleColor": wm, "columnRuleStyle": wm, "columnRuleWidth": wm, "columns": wm, "columnSpan": wm, "columnWidth": wm, "flex": wms, "flexBasis": w, "flexDirection": wms, "flexGrow": w, "flexFlow": wms, "flexShrink": w, "flexWrap": wms, "alignContent": w, "alignItems": w, "alignSelf": w, "justifyContent": w, "order": w, "backdropFilter": w, "scrollSnapType": wms, "scrollSnapPointsX": wms, "scrollSnapPointsY": wms, "scrollSnapDestination": wms, "scrollSnapCoordinate": wms, "shapeImageThreshold": w, "shapeImageMargin": w, "shapeImageOutside": w, "hyphens": wmms, "flowInto": wms, "flowFrom": wms, "regionFragment": wms, "boxSizing": m, "textAlignLast": m, "tabSize": m, "wrapFlow": ms, "wrapThrough": ms, "wrapMargin": ms, "touchAction": ms, "gridTemplateColumns": ms, "gridTemplateRows": ms, "gridTemplateAreas": ms, "gridTemplate": ms, "gridAutoColumns": ms, "gridAutoRows": ms, "gridAutoFlow": ms, "grid": ms, "gridRowStart": ms, "gridColumnStart": ms, "gridRowEnd": ms, "gridRow": ms, "gridColumn": ms, "gridColumnEnd": ms, "gridColumnGap": ms, "gridRowGap": ms, "gridArea": ms, "gridGap": ms, "textSizeAdjust": wms, "borderImage": w, "borderImageOutset": w, "borderImageRepeat": w, "borderImageSlice": w, "borderImageSource": w, "borderImageWidth": w, "transitionDelay": w, "transitionDuration": w, "transitionProperty": w, "transitionTimingFunction": w }
	};
	
	
	/***/ }),
	/* 15 */
	/***/ (function(module, exports) {
	
	module.exports = __webpack_require__("./node_modules/fbjs/lib/hyphenateStyleName.js");
	
	/***/ }),
	/* 16 */
	/***/ (function(module, exports) {
	
	module.exports = __webpack_require__("./node_modules/fbjs/lib/memoizeStringOnly.js");
	
	/***/ }),
	/* 17 */
	/***/ (function(module, exports) {
	
	module.exports = __webpack_require__("./node_modules/inline-style-prefixer/static/createPrefixer.js");
	
	/***/ }),
	/* 18 */
	/***/ (function(module, exports) {
	
	module.exports = __webpack_require__("./node_modules/inline-style-prefixer/static/plugins/crossFade.js");
	
	/***/ }),
	/* 19 */
	/***/ (function(module, exports) {
	
	module.exports = __webpack_require__("./node_modules/inline-style-prefixer/static/plugins/cursor.js");
	
	/***/ }),
	/* 20 */
	/***/ (function(module, exports) {
	
	module.exports = __webpack_require__("./node_modules/inline-style-prefixer/static/plugins/filter.js");
	
	/***/ }),
	/* 21 */
	/***/ (function(module, exports) {
	
	module.exports = __webpack_require__("./node_modules/inline-style-prefixer/static/plugins/flex.js");
	
	/***/ }),
	/* 22 */
	/***/ (function(module, exports) {
	
	module.exports = __webpack_require__("./node_modules/inline-style-prefixer/static/plugins/flexboxIE.js");
	
	/***/ }),
	/* 23 */
	/***/ (function(module, exports) {
	
	module.exports = __webpack_require__("./node_modules/inline-style-prefixer/static/plugins/flexboxOld.js");
	
	/***/ }),
	/* 24 */
	/***/ (function(module, exports) {
	
	module.exports = __webpack_require__("./node_modules/inline-style-prefixer/static/plugins/gradient.js");
	
	/***/ }),
	/* 25 */
	/***/ (function(module, exports) {
	
	module.exports = __webpack_require__("./node_modules/inline-style-prefixer/static/plugins/imageSet.js");
	
	/***/ }),
	/* 26 */
	/***/ (function(module, exports) {
	
	module.exports = __webpack_require__("./node_modules/inline-style-prefixer/static/plugins/position.js");
	
	/***/ }),
	/* 27 */
	/***/ (function(module, exports) {
	
	module.exports = __webpack_require__("./node_modules/inline-style-prefixer/static/plugins/sizing.js");
	
	/***/ }),
	/* 28 */
	/***/ (function(module, exports) {
	
	module.exports = __webpack_require__("./node_modules/inline-style-prefixer/static/plugins/transition.js");
	
	/***/ }),
	/* 29 */
	/***/ (function(module, exports) {
	
	module.exports = __webpack_require__("./node_modules/react-css-property-operations/lib/CSSPropertyOperations.js");
	
	/***/ })
	/******/ ])));

/***/ }),

/***/ "./node_modules/glamorous/dist/glamorous.cjs.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }
	
	var React = __webpack_require__("./node_modules/react/react.js");
	var React__default = _interopDefault(React);
	var glamor = __webpack_require__("./node_modules/glamor/lib/index.js");
	
	var htmlTagNames = [
	  "a",
	  "abbr",
	  "acronym",
	  "address",
	  "applet",
	  "area",
	  "article",
	  "aside",
	  "audio",
	  "b",
	  "base",
	  "basefont",
	  "bdi",
	  "bdo",
	  "bgsound",
	  "big",
	  "blink",
	  "blockquote",
	  "body",
	  "br",
	  "button",
	  "canvas",
	  "caption",
	  "center",
	  "cite",
	  "code",
	  "col",
	  "colgroup",
	  "command",
	  "content",
	  "data",
	  "datalist",
	  "dd",
	  "del",
	  "details",
	  "dfn",
	  "dialog",
	  "dir",
	  "div",
	  "dl",
	  "dt",
	  "element",
	  "em",
	  "embed",
	  "fieldset",
	  "figcaption",
	  "figure",
	  "font",
	  "footer",
	  "form",
	  "frame",
	  "frameset",
	  "h1",
	  "h2",
	  "h3",
	  "h4",
	  "h5",
	  "h6",
	  "head",
	  "header",
	  "hgroup",
	  "hr",
	  "html",
	  "i",
	  "iframe",
	  "image",
	  "img",
	  "input",
	  "ins",
	  "isindex",
	  "kbd",
	  "keygen",
	  "label",
	  "legend",
	  "li",
	  "link",
	  "listing",
	  "main",
	  "map",
	  "mark",
	  "marquee",
	  "math",
	  "menu",
	  "menuitem",
	  "meta",
	  "meter",
	  "multicol",
	  "nav",
	  "nextid",
	  "nobr",
	  "noembed",
	  "noframes",
	  "noscript",
	  "object",
	  "ol",
	  "optgroup",
	  "option",
	  "output",
	  "p",
	  "param",
	  "picture",
	  "plaintext",
	  "pre",
	  "progress",
	  "q",
	  "rb",
	  "rbc",
	  "rp",
	  "rt",
	  "rtc",
	  "ruby",
	  "s",
	  "samp",
	  "script",
	  "section",
	  "select",
	  "shadow",
	  "slot",
	  "small",
	  "source",
	  "spacer",
	  "span",
	  "strike",
	  "strong",
	  "style",
	  "sub",
	  "summary",
	  "sup",
	  "svg",
	  "table",
	  "tbody",
	  "td",
	  "template",
	  "textarea",
	  "tfoot",
	  "th",
	  "thead",
	  "time",
	  "title",
	  "tr",
	  "track",
	  "tt",
	  "u",
	  "ul",
	  "var",
	  "video",
	  "wbr",
	  "xmp"
	]
	;
	
	var svgTagNames = [
	  "a",
	  "altGlyph",
	  "altGlyphDef",
	  "altGlyphItem",
	  "animate",
	  "animateColor",
	  "animateMotion",
	  "animateTransform",
	  "animation",
	  "audio",
	  "canvas",
	  "circle",
	  "clipPath",
	  "color-profile",
	  "cursor",
	  "defs",
	  "desc",
	  "discard",
	  "ellipse",
	  "feBlend",
	  "feColorMatrix",
	  "feComponentTransfer",
	  "feComposite",
	  "feConvolveMatrix",
	  "feDiffuseLighting",
	  "feDisplacementMap",
	  "feDistantLight",
	  "feDropShadow",
	  "feFlood",
	  "feFuncA",
	  "feFuncB",
	  "feFuncG",
	  "feFuncR",
	  "feGaussianBlur",
	  "feImage",
	  "feMerge",
	  "feMergeNode",
	  "feMorphology",
	  "feOffset",
	  "fePointLight",
	  "feSpecularLighting",
	  "feSpotLight",
	  "feTile",
	  "feTurbulence",
	  "filter",
	  "font",
	  "font-face",
	  "font-face-format",
	  "font-face-name",
	  "font-face-src",
	  "font-face-uri",
	  "foreignObject",
	  "g",
	  "glyph",
	  "glyphRef",
	  "handler",
	  "hatch",
	  "hatchpath",
	  "hkern",
	  "iframe",
	  "image",
	  "line",
	  "linearGradient",
	  "listener",
	  "marker",
	  "mask",
	  "mesh",
	  "meshgradient",
	  "meshpatch",
	  "meshrow",
	  "metadata",
	  "missing-glyph",
	  "mpath",
	  "path",
	  "pattern",
	  "polygon",
	  "polyline",
	  "prefetch",
	  "radialGradient",
	  "rect",
	  "script",
	  "set",
	  "solidColor",
	  "solidcolor",
	  "stop",
	  "style",
	  "svg",
	  "switch",
	  "symbol",
	  "tbreak",
	  "text",
	  "textArea",
	  "textPath",
	  "title",
	  "tref",
	  "tspan",
	  "unknown",
	  "use",
	  "video",
	  "view",
	  "vkern"
	]
	;
	
	var domElements = htmlTagNames.concat(svgTagNames).filter(function (tag, index, array) {
	  return array.indexOf(tag) === index;
	});
	
	var CHANNEL = '__glamorous__';
	
	var PropTypes = void 0;
	
	/* istanbul ignore next */
	if (parseFloat(React__default.version.slice(0, 4)) >= 15.5) {
	  /* istanbul ignore next */
	  try {
	    PropTypes = __webpack_require__("./node_modules/prop-types/index.js");
	    /* istanbul ignore next */
	  } catch (error) {
	    // ignore
	  }
	}
	/* istanbul ignore next */
	PropTypes = PropTypes || React__default.PropTypes;
	
	
	
	/*
	eslint
	  import/no-mutable-exports:0,
	  import/prefer-default-export:0,
	  react/no-deprecated:0
	 */
	
	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();
	
	
	
	
	
	var defineProperty = function (obj, key, value) {
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
	};
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};
	
	
	
	var inherits = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }
	
	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};
	
	
	
	
	
	
	
	
	
	var objectWithoutProperties = function (obj, keys) {
	  var target = {};
	
	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }
	
	  return target;
	};
	
	var possibleConstructorReturn = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var toConsumableArray = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
	
	    return arr2;
	  } else {
	    return Array.from(arr);
	  }
	};
	
	function generateWarningMessage(Comp) {
	  var componentName = Comp.displayName || Comp.name || 'FunctionComponent';
	  // eslint-disable-next-line max-len
	  return 'glamorous warning: Expected component called "' + componentName + '" which uses withTheme to be within a ThemeProvider but none was found.';
	}
	
	function withTheme(ComponentToTheme) {
	  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	      _ref$noWarn = _ref.noWarn,
	      noWarn = _ref$noWarn === undefined ? false : _ref$noWarn,
	      _ref$createElement = _ref.createElement,
	      createElement = _ref$createElement === undefined ? true : _ref$createElement;
	
	  var ThemedComponent = function (_Component) {
	    inherits(ThemedComponent, _Component);
	
	    function ThemedComponent() {
	      var _ref2;
	
	      var _temp, _this, _ret;
	
	      classCallCheck(this, ThemedComponent);
	
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref2 = ThemedComponent.__proto__ || Object.getPrototypeOf(ThemedComponent)).call.apply(_ref2, [this].concat(args))), _this), _this.warned = noWarn, _this.state = { theme: {} }, _this.setTheme = function (theme) {
	        return _this.setState({ theme: theme });
	      }, _temp), possibleConstructorReturn(_this, _ret);
	    }
	
	    createClass(ThemedComponent, [{
	      key: 'componentWillMount',
	
	
	      // eslint-disable-next-line complexity
	      value: function componentWillMount() {
	        if (!this.context[CHANNEL]) {
	          if (false) {
	            this.warned = true;
	            // eslint-disable-next-line no-console
	            console.warn(generateWarningMessage(ComponentToTheme));
	          }
	        }
	        var theme = this.props.theme;
	
	        if (this.context[CHANNEL]) {
	          // if a theme is provided via props,
	          // it takes precedence over context
	          this.setTheme(theme ? theme : this.context[CHANNEL].getState());
	        } else {
	          this.setTheme(theme || {});
	        }
	      }
	    }, {
	      key: 'componentWillReceiveProps',
	      value: function componentWillReceiveProps(nextProps) {
	        if (this.props.theme !== nextProps.theme) {
	          this.setTheme(nextProps.theme);
	        }
	      }
	    }, {
	      key: 'componentDidMount',
	      value: function componentDidMount() {
	        if (this.context[CHANNEL] && !this.props.theme) {
	          // subscribe to future theme changes
	          this.unsubscribe = this.context[CHANNEL].subscribe(this.setTheme);
	        }
	      }
	    }, {
	      key: 'componentWillUnmount',
	      value: function componentWillUnmount() {
	        // cleanup subscription
	        this.unsubscribe && this.unsubscribe();
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        if (createElement) {
	          return React__default.createElement(ComponentToTheme, _extends({}, this.props, this.state));
	        } else {
	          // this allows us to effectively use the GlamorousComponent
	          // as our `render` method without going through lifecycle hooks.
	          // Also allows us to forward the context in the scenario where
	          // a user wants to add more context.
	          // eslint-disable-next-line babel/new-cap
	          return ComponentToTheme(_extends({}, this.props, this.state), this.context);
	        }
	      }
	    }]);
	    return ThemedComponent;
	  }(React.Component);
	
	  ThemedComponent.propTypes = {
	    theme: PropTypes.object
	  };
	
	
	  var defaultContextTypes = defineProperty({}, CHANNEL, PropTypes.object);
	
	  var userDefinedContextTypes = null;
	
	  // configure the contextTypes to be settable by the user,
	  // however also retaining the glamorous channel.
	  Object.defineProperty(ThemedComponent, 'contextTypes', {
	    enumerable: true,
	    configurable: true,
	    set: function set$$1(value) {
	      userDefinedContextTypes = value;
	    },
	    get: function get$$1() {
	      // if the user has provided a contextTypes definition,
	      // merge the default context types with the provided ones.
	      if (userDefinedContextTypes) {
	        return _extends({}, defaultContextTypes, userDefinedContextTypes);
	      }
	      return defaultContextTypes;
	    }
	  });
	
	  return ThemedComponent;
	}
	
	function createBroadcast (initialState) {
	  var listeners = {};
	  var id = 0;
	  var _state = initialState;
	
	  var getState = function () { return _state; };
	
	  var setState = function (state) {
	    _state = state;
	    Object.keys(listeners).forEach(function (id) { return listeners[id](_state); });
	  };
	
	  var subscribe = function (listener) {
	    var currentId = id;
	    listeners[currentId] = listener;
	    id += 1;
	    return function unsubscribe () {
	      delete listeners[currentId];
	    }
	  };
	
	  return { getState: getState, setState: setState, subscribe: subscribe }
	}
	
	/**
	 * This is a component which will provide a theme to the entire tree
	 * via context and event listener
	 * (because pure components block context updates)
	 * inspired by the styled-components implementation
	 * https://github.com/styled-components/styled-components
	 * @param {Object} theme the theme object..
	 */
	
	var ThemeProvider = function (_Component) {
	  inherits(ThemeProvider, _Component);
	
	  function ThemeProvider() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    classCallCheck(this, ThemeProvider);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ThemeProvider.__proto__ || Object.getPrototypeOf(ThemeProvider)).call.apply(_ref, [this].concat(args))), _this), _this.broadcast = createBroadcast(_this.props.theme), _this.setOuterTheme = function (theme) {
	      _this.outerTheme = theme;
	    }, _temp), possibleConstructorReturn(_this, _ret);
	  }
	
	  createClass(ThemeProvider, [{
	    key: 'getTheme',
	
	
	    // create theme, by merging with outer theme, if present
	    value: function getTheme(passedTheme) {
	      var theme = passedTheme || this.props.theme;
	      return _extends({}, this.outerTheme, theme);
	    }
	  }, {
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return defineProperty({}, CHANNEL, this.broadcast);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      // create a new subscription for keeping track of outer theme, if present
	      if (this.context[CHANNEL]) {
	        this.unsubscribe = this.context[CHANNEL].subscribe(this.setOuterTheme);
	      }
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      // set broadcast state by merging outer theme with own
	      if (this.context[CHANNEL]) {
	        this.setOuterTheme(this.context[CHANNEL].getState());
	        this.broadcast.setState(this.getTheme());
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (this.props.theme !== nextProps.theme) {
	        this.broadcast.setState(this.getTheme(nextProps.theme));
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.unsubscribe && this.unsubscribe();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.props.children ? React__default.Children.only(this.props.children) : null;
	    }
	  }]);
	  return ThemeProvider;
	}(React.Component);
	
	ThemeProvider.childContextTypes = defineProperty({}, CHANNEL, PropTypes.object.isRequired);
	
	ThemeProvider.contextTypes = defineProperty({}, CHANNEL, PropTypes.object);
	
	ThemeProvider.propTypes = {
	  theme: PropTypes.object.isRequired,
	  children: PropTypes.node
	};
	
	/**
	 * This function takes a className string and gets all the
	 * associated glamor styles. It's used to merge glamor styles
	 * from a className to make sure that specificity is not
	 * a problem when passing a className to a component.
	 * @param {String} [className=''] the className string
	 * @return {Object} { glamorStyles, glamorlessClassName }
	 *   - glamorStyles is an array of all the glamor styles objects
	 *   - glamorlessClassName is the rest of the className string
	 *     without the glamor classNames
	 */
	function extractGlamorStyles(className) {
	  var glamorlessClassName = [];
	  var glamorStyles = [];
	  className.toString().split(' ').forEach(function (name) {
	    if (name.indexOf('css-') === 0) {
	      var style = buildGlamorSrcFromClassName(name);
	      glamorStyles.push(style);
	    } else {
	      glamorlessClassName.push(name);
	    }
	  });
	
	  return { glamorlessClassName: glamorlessClassName, glamorStyles: glamorStyles };
	}
	
	/** Glamor's css function returns an object with the shape
	 *
	 * {
	 *   [`data-css-${hash}`]: '',
	 *   toString() { return `css-${hash}` }
	 * }
	 *
	 * Whenever glamor's build function encounters an object with
	 * this shape it just pulls the resulting styles from the cache.
	 *
	 * note: the toString method is not needed to qualify the shape
	**/
	function buildGlamorSrcFromClassName(className) {
	  return defineProperty({}, 'data-' + className, '');
	}
	
	function getGlamorClassName$1(_ref2) {
	  var styles = _ref2.styles,
	      props = _ref2.props,
	      cssOverrides = _ref2.cssOverrides,
	      cssProp = _ref2.cssProp,
	      theme = _ref2.theme,
	      context = _ref2.context;
	
	  var _handleStyles = handleStyles([].concat(toConsumableArray(styles), [props.className, cssOverrides, cssProp]), props, theme, context),
	      mappedArgs = _handleStyles.mappedArgs,
	      nonGlamorClassNames = _handleStyles.nonGlamorClassNames;
	
	  var glamorClassName = glamor.css.apply(undefined, toConsumableArray(mappedArgs)).toString();
	  var extras = nonGlamorClassNames.join(' ').trim();
	  return (glamorClassName + ' ' + extras).trim();
	}
	
	// this next function is on a "hot" code-path
	// so it's pretty complex to make sure it's fast.
	// eslint-disable-next-line complexity
	function handleStyles(styles, props, theme, context) {
	  var current = void 0;
	  var mappedArgs = [];
	  var nonGlamorClassNames = [];
	  for (var i = 0; i < styles.length; i++) {
	    current = styles[i];
	    if (typeof current === 'function') {
	      var result = current(props, theme, context);
	      if (typeof result === 'string') {
	        var _extractGlamorStyles = extractGlamorStyles(result),
	            glamorStyles = _extractGlamorStyles.glamorStyles,
	            glamorlessClassName = _extractGlamorStyles.glamorlessClassName;
	
	        mappedArgs.push.apply(mappedArgs, toConsumableArray(glamorStyles));
	        nonGlamorClassNames.push.apply(nonGlamorClassNames, toConsumableArray(glamorlessClassName));
	      } else {
	        mappedArgs.push(result);
	      }
	    } else if (typeof current === 'string') {
	      var _extractGlamorStyles2 = extractGlamorStyles(current),
	          _glamorStyles = _extractGlamorStyles2.glamorStyles,
	          _glamorlessClassName = _extractGlamorStyles2.glamorlessClassName;
	
	      mappedArgs.push.apply(mappedArgs, toConsumableArray(_glamorStyles));
	      nonGlamorClassNames.push.apply(nonGlamorClassNames, toConsumableArray(_glamorlessClassName));
	    } else if (Array.isArray(current)) {
	      var recursed = handleStyles(current, props, theme, context);
	      mappedArgs.push.apply(mappedArgs, toConsumableArray(recursed.mappedArgs));
	      nonGlamorClassNames.push.apply(nonGlamorClassNames, toConsumableArray(recursed.nonGlamorClassNames));
	    } else {
	      mappedArgs.push(current);
	    }
	  }
	  return { mappedArgs: mappedArgs, nonGlamorClassNames: nonGlamorClassNames };
	}
	
	/*
	 * This is a relatively small abstraction that's ripe for open sourcing.
	 * Documentation is in the README.md
	 */
	function createGlamorous$1(splitProps) {
	  // TODO: in a breaking version, make this default to true
	  glamorous.config = { useDisplayNameInClassName: false };
	
	  return glamorous;
	
	  /**
	  * This is the main export and the function that people
	  * interact with most directly.
	  *
	  * It accepts a component which can be a string or
	  * a React Component and returns
	  * a "glamorousComponentFactory"
	  * @param {String|ReactComponent} comp the component to render
	  * @param {Object} options helpful info for the GlamorousComponents
	  * @return {Function} the glamorousComponentFactory
	  */
	  function glamorous(comp) {
	    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	        rootEl = _ref.rootEl,
	        displayName = _ref.displayName,
	        _ref$forwardProps = _ref.forwardProps,
	        forwardProps = _ref$forwardProps === undefined ? [] : _ref$forwardProps;
	
	    return glamorousComponentFactory;
	
	    /**
	     * This returns a React Component that renders the comp (closure)
	     * with a className based on the given glamor styles object(s)
	     * @param {...Object|Function} styles the styles to create with glamor.
	     *   If any of these are functions, they are invoked with the component
	     *   props and the return value is used.
	     * @return {ReactComponent} the ReactComponent function
	     */
	    function glamorousComponentFactory() {
	      for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
	        styles[_key] = arguments[_key];
	      }
	
	      /**
	       * This is a component which will render the comp (closure)
	       * with the glamorous styles (closure). Forwards any valid
	       * props to the underlying component.
	       */
	      var GlamorousComponent = withTheme(function (props, context) {
	        /* eslint no-use-before-define: 0 */
	        var _splitProps = splitProps(props, GlamorousComponent),
	            toForward = _splitProps.toForward,
	            cssOverrides = _splitProps.cssOverrides,
	            cssProp = _splitProps.cssProp;
	
	        // freeze the theme object in dev mode
	
	
	        var theme =  true ? props.theme : Object.freeze(props.theme);
	
	        // create className to apply
	        var fullClassName = getGlamorClassName$1({
	          styles: GlamorousComponent.styles,
	          props: props,
	          cssOverrides: cssOverrides,
	          cssProp: cssProp,
	          theme: theme,
	          context: context
	        });
	        var debugClassName = glamorous.config.useDisplayNameInClassName ? cleanClassname(GlamorousComponent.displayName) : '';
	        var className = (fullClassName + ' ' + debugClassName).trim();
	
	        return React__default.createElement(GlamorousComponent.comp, _extends({
	          ref: props.innerRef
	        }, toForward, {
	          className: className
	        }));
	      }, { noWarn: true, createElement: false });
	
	      GlamorousComponent.propTypes = {
	        className: PropTypes.string,
	        cssOverrides: PropTypes.object,
	        theme: PropTypes.object,
	        innerRef: PropTypes.func,
	        glam: PropTypes.object
	      };
	
	      function withComponent(newComp) {
	        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	        return glamorous(newComp, _extends({
	          forwardProps: GlamorousComponent.forwardProps
	        }, options))(GlamorousComponent.styles);
	      }
	
	      Object.assign(GlamorousComponent, getGlamorousComponentMetadata({
	        comp: comp,
	        styles: styles,
	        rootEl: rootEl,
	        forwardProps: forwardProps,
	        displayName: displayName
	      }), { withComponent: withComponent, isGlamorousComponent: true });
	      return GlamorousComponent;
	    }
	  }
	
	  function getGlamorousComponentMetadata(_ref2) {
	    var comp = _ref2.comp,
	        styles = _ref2.styles,
	        rootEl = _ref2.rootEl,
	        forwardProps = _ref2.forwardProps,
	        displayName = _ref2.displayName;
	
	    var componentsComp = comp.comp ? comp.comp : comp;
	    return {
	      // join styles together (for anyone doing: glamorous(glamorous.a({}), {}))
	      styles: when(comp.styles, styles),
	      // keep track of the ultimate rootEl to render (we never
	      // actually render anything but
	      // the base component, even when people wrap a glamorous
	      // component in glamorous
	      comp: componentsComp,
	      rootEl: rootEl || componentsComp,
	      // join forwardProps (for anyone doing: glamorous(glamorous.a({}), {}))
	      forwardProps: when(comp.forwardProps, forwardProps),
	      // set the displayName to something that's slightly more
	      // helpful than `GlamorousComponent` :)
	      displayName: displayName || 'glamorous(' + getDisplayName(comp) + ')'
	    };
	  }
	
	  function when(comp, prop) {
	    return comp ? comp.concat(prop) : prop;
	  }
	
	  function getDisplayName(comp) {
	    return typeof comp === 'string' ? comp : comp.displayName || comp.name || 'unknown';
	  }
	}
	
	function cleanClassname(className) {
	  return className.replace(/ /g, '-').replace(/[^A-Za-z0-9\-_]/g, '_');
	}
	
	//
	// Main
	//
	
	var index$1 = function memoize (fn, options) {
	  var cache = options && options.cache
	    ? options.cache
	    : cacheDefault;
	
	  var serializer = options && options.serializer
	    ? options.serializer
	    : serializerDefault;
	
	  var strategy = options && options.strategy
	    ? options.strategy
	    : strategyDefault;
	
	  return strategy(fn, {
	    cache: cache,
	    serializer: serializer
	  })
	};
	
	//
	// Strategy
	//
	
	function isPrimitive (value) {
	  return value == null || (typeof value !== 'function' && typeof value !== 'object')
	}
	
	function monadic (fn, cache, serializer, arg) {
	  var cacheKey = isPrimitive(arg) ? arg : serializer(arg);
	
	  if (!cache.has(cacheKey)) {
	    var computedValue = fn.call(this, arg);
	    cache.set(cacheKey, computedValue);
	    return computedValue
	  }
	
	  return cache.get(cacheKey)
	}
	
	function variadic (fn, cache, serializer) {
	  var args = Array.prototype.slice.call(arguments, 3);
	  var cacheKey = serializer(args);
	
	  if (!cache.has(cacheKey)) {
	    var computedValue = fn.apply(this, args);
	    cache.set(cacheKey, computedValue);
	    return computedValue
	  }
	
	  return cache.get(cacheKey)
	}
	
	function strategyDefault (fn, options) {
	  var memoized = fn.length === 1 ? monadic : variadic;
	
	  memoized = memoized.bind(
	    this,
	    fn,
	    options.cache.create(),
	    options.serializer
	  );
	
	  return memoized
	}
	
	//
	// Serializer
	//
	
	function serializerDefault () {
	  return JSON.stringify(arguments)
	}
	
	//
	// Cache
	//
	
	function ObjectWithoutPrototypeCache () {
	  this.cache = Object.create(null);
	}
	
	ObjectWithoutPrototypeCache.prototype.has = function (key) {
	  return (key in this.cache)
	};
	
	ObjectWithoutPrototypeCache.prototype.get = function (key) {
	  return this.cache[key]
	};
	
	ObjectWithoutPrototypeCache.prototype.set = function (key, value) {
	  this.cache[key] = value;
	};
	
	var cacheDefault = {
	  create: function create () {
	    return new ObjectWithoutPrototypeCache()
	  }
	};
	
	function unwrapExports (x) {
		return x && x.__esModule ? x['default'] : x;
	}
	
	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}
	
	var a = ["coords","download","href","name","rel","shape","target","type"];
	var abbr = ["title"];
	var applet = ["alt","height","name","width"];
	var area = ["alt","coords","download","href","rel","shape","target","type"];
	var audio = ["controls","loop","muted","preload","src"];
	var base = ["href","target"];
	var basefont = ["size"];
	var bdo = ["dir"];
	var blockquote = ["cite"];
	var button = ["disabled","form","name","type","value"];
	var canvas = ["height","width"];
	var col = ["span","width"];
	var colgroup = ["span","width"];
	var data = ["value"];
	var del = ["cite"];
	var details = ["open"];
	var dfn = ["title"];
	var dialog = ["open"];
	var embed = ["height","src","type","width"];
	var fieldset = ["disabled","form","name"];
	var font = ["size"];
	var form = ["accept","action","method","name","target"];
	var frame = ["name","scrolling","src"];
	var frameset = ["cols","rows"];
	var head = ["profile"];
	var hr = ["size","width"];
	var html = ["manifest"];
	var iframe = ["height","name","sandbox","scrolling","src","width"];
	var img = ["alt","height","name","sizes","src","width"];
	var input = ["accept","alt","autoCapitalize","autoCorrect","autoSave","checked","defaultChecked","defaultValue","disabled","form","height","list","max","min","multiple","name","onChange","pattern","placeholder","required","results","size","src","step","title","type","value","width"];
	var ins = ["cite"];
	var keygen = ["challenge","disabled","form","name"];
	var label = ["form"];
	var li = ["type","value"];
	var link = ["color","href","integrity","media","nonce","rel","scope","sizes","target","title","type"];
	var map = ["name"];
	var meta = ["content","name"];
	var meter = ["high","low","max","min","optimum","value"];
	var object = ["data","form","height","name","type","width"];
	var ol = ["reversed","start","type"];
	var optgroup = ["disabled","label"];
	var option = ["disabled","label","selected","value"];
	var output = ["form","name"];
	var param = ["name","type","value"];
	var pre = ["width"];
	var progress = ["max","value"];
	var q = ["cite"];
	var script = ["async","defer","integrity","nonce","src","type"];
	var select = ["defaultValue","disabled","form","multiple","name","onChange","required","size","value"];
	var slot = ["name"];
	var source = ["media","sizes","src","type"];
	var style = ["media","nonce","title","type"];
	var table = ["summary","width"];
	var td = ["headers","height","scope","width"];
	var textarea = ["autoCapitalize","autoCorrect","cols","defaultValue","disabled","form","name","onChange","placeholder","required","rows","value","wrap"];
	var th = ["headers","height","scope","width"];
	var track = ["default","kind","label","src"];
	var ul = ["type"];
	var video = ["controls","height","loop","muted","poster","preload","src","width"];
	var svg = ["accentHeight","accumulate","additive","alignmentBaseline","allowReorder","alphabetic","amplitude","arabicForm","ascent","attributeName","attributeType","autoReverse","azimuth","baseFrequency","baseProfile","baselineShift","bbox","begin","bias","by","calcMode","capHeight","clip","clipPath","clipPathUnits","clipRule","color","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","contentScriptType","contentStyleType","cursor","cx","cy","d","decelerate","descent","diffuseConstant","direction","display","divisor","dominantBaseline","dur","dx","dy","edgeMode","elevation","enableBackground","end","exponent","externalResourcesRequired","fill","fillOpacity","fillRule","filter","filterRes","filterUnits","floodColor","floodOpacity","focusable","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","format","from","fx","fy","g1","g2","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","glyphRef","gradientTransform","gradientUnits","hanging","height","horizAdvX","horizOriginX","ideographic","imageRendering","in","in2","intercept","k","k1","k2","k3","k4","kernelMatrix","kernelUnitLength","kerning","keyPoints","keySplines","keyTimes","lengthAdjust","letterSpacing","lightingColor","limitingConeAngle","local","markerEnd","markerHeight","markerMid","markerStart","markerUnits","markerWidth","mask","maskContentUnits","maskUnits","mathematical","mode","numOctaves","offset","opacity","operator","order","orient","orientation","origin","overflow","overlinePosition","overlineThickness","paintOrder","panose1","pathLength","patternContentUnits","patternTransform","patternUnits","pointerEvents","points","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","r","radius","refX","refY","renderingIntent","repeatCount","repeatDur","requiredExtensions","requiredFeatures","restart","result","rotate","rx","ry","scale","seed","shapeRendering","slope","spacing","specularConstant","specularExponent","speed","spreadMethod","startOffset","stdDeviation","stemh","stemv","stitchTiles","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","string","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","surfaceScale","systemLanguage","tableValues","targetX","targetY","textAnchor","textDecoration","textLength","textRendering","to","transform","u1","u2","underlinePosition","underlineThickness","unicode","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","vHanging","vIdeographic","vMathematical","values","vectorEffect","version","vertAdvY","vertOriginX","vertOriginY","viewBox","viewTarget","visibility","width","widths","wordSpacing","writingMode","x","x1","x2","xChannelSelector","xHeight","xlinkActuate","xlinkArcrole","xlinkHref","xlinkRole","xlinkShow","xlinkTitle","xlinkType","xmlBase","xmlLang","xmlSpace","xmlns","xmlnsXlink","y","y1","y2","yChannelSelector","z","zoomAndPan"];
	var elements = {"html":["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"],"svg":["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"]};
	var reactHtmlAttributes = {
		a: a,
		abbr: abbr,
		applet: applet,
		area: area,
		audio: audio,
		base: base,
		basefont: basefont,
		bdo: bdo,
		blockquote: blockquote,
		button: button,
		canvas: canvas,
		col: col,
		colgroup: colgroup,
		data: data,
		del: del,
		details: details,
		dfn: dfn,
		dialog: dialog,
		embed: embed,
		fieldset: fieldset,
		font: font,
		form: form,
		frame: frame,
		frameset: frameset,
		head: head,
		hr: hr,
		html: html,
		iframe: iframe,
		img: img,
		input: input,
		ins: ins,
		keygen: keygen,
		label: label,
		li: li,
		link: link,
		map: map,
		meta: meta,
		meter: meter,
		object: object,
		ol: ol,
		optgroup: optgroup,
		option: option,
		output: output,
		param: param,
		pre: pre,
		progress: progress,
		q: q,
		script: script,
		select: select,
		slot: slot,
		source: source,
		style: style,
		table: table,
		td: td,
		textarea: textarea,
		th: th,
		track: track,
		ul: ul,
		video: video,
		svg: svg,
		elements: elements,
		"*": ["about","acceptCharset","accessKey","allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","capture","cellPadding","cellSpacing","charSet","classID","className","colSpan","contentEditable","contextMenu","crossOrigin","dangerouslySetInnerHTML","datatype","dateTime","dir","draggable","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hidden","hrefLang","htmlFor","httpEquiv","icon","id","inlist","inputMode","is","itemID","itemProp","itemRef","itemScope","itemType","keyParams","keyType","lang","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","prefix","property","radioGroup","readOnly","resource","role","rowSpan","scoped","seamless","security","spellCheck","srcDoc","srcLang","srcSet","style","suppressContentEditableWarning","tabIndex","title","typeof","unselectable","useMap","vocab","wmode"]
	};
	
	var reactHtmlAttributes$1 = Object.freeze({
		a: a,
		abbr: abbr,
		applet: applet,
		area: area,
		audio: audio,
		base: base,
		basefont: basefont,
		bdo: bdo,
		blockquote: blockquote,
		button: button,
		canvas: canvas,
		col: col,
		colgroup: colgroup,
		data: data,
		del: del,
		details: details,
		dfn: dfn,
		dialog: dialog,
		embed: embed,
		fieldset: fieldset,
		font: font,
		form: form,
		frame: frame,
		frameset: frameset,
		head: head,
		hr: hr,
		html: html,
		iframe: iframe,
		img: img,
		input: input,
		ins: ins,
		keygen: keygen,
		label: label,
		li: li,
		link: link,
		map: map,
		meta: meta,
		meter: meter,
		object: object,
		ol: ol,
		optgroup: optgroup,
		option: option,
		output: output,
		param: param,
		pre: pre,
		progress: progress,
		q: q,
		script: script,
		select: select,
		slot: slot,
		source: source,
		style: style,
		table: table,
		td: td,
		textarea: textarea,
		th: th,
		track: track,
		ul: ul,
		video: video,
		svg: svg,
		elements: elements,
		default: reactHtmlAttributes
	});
	
	var reactHtmlAttributes$2 = ( reactHtmlAttributes$1 && reactHtmlAttributes ) || reactHtmlAttributes$1;
	
	var index$2 = createCommonjsModule(function (module, exports) {
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	
	exports.default = reactHtmlAttributes$2;
	
	module.exports = reactHtmlAttributes$2; // for CommonJS compatibility
	});
	
	var reactHTMLAttributes = unwrapExports(index$2);
	
	/*
	 * This is used to check if a property name is one of the React-specific
	 * properties and determine if that property should be forwarded
	 * to the React component
	 */
	
	/* Logic copied from ReactDOMUnknownPropertyHook */
	var reactProps = ['children', 'dangerouslySetInnerHTML', 'key', 'ref', 'autoFocus', 'defaultValue', 'valueLink', 'defaultChecked', 'checkedLink', 'innerHTML', 'suppressContentEditableWarning', 'onFocusIn', 'onFocusOut', 'className',
	
	/* List copied from https://facebook.github.io/react/docs/events.html */
	'onCopy', 'onCut', 'onPaste', 'onCompositionEnd', 'onCompositionStart', 'onCompositionUpdate', 'onKeyDown', 'onKeyPress', 'onKeyUp', 'onFocus', 'onBlur', 'onChange', 'onInput', 'onSubmit', 'onClick', 'onContextMenu', 'onDoubleClick', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp', 'onSelect', 'onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart', 'onScroll', 'onWheel', 'onAbort', 'onCanPlay', 'onCanPlayThrough', 'onDurationChange', 'onEmptied', 'onEncrypted', 'onEnded', 'onError', 'onLoadedData', 'onLoadedMetadata', 'onLoadStart', 'onPause', 'onPlay', 'onPlaying', 'onProgress', 'onRateChange', 'onSeeked', 'onSeeking', 'onStalled', 'onSuspend', 'onTimeUpdate', 'onVolumeChange', 'onWaiting', 'onLoad', 'onAnimationStart', 'onAnimationEnd', 'onAnimationIteration', 'onTransitionEnd', 'onCopyCapture', 'onCutCapture', 'onPasteCapture', 'onCompositionEndCapture', 'onCompositionStartCapture', 'onCompositionUpdateCapture', 'onKeyDownCapture', 'onKeyPressCapture', 'onKeyUpCapture', 'onFocusCapture', 'onBlurCapture', 'onChangeCapture', 'onInputCapture', 'onSubmitCapture', 'onClickCapture', 'onContextMenuCapture', 'onDoubleClickCapture', 'onDragCapture', 'onDragEndCapture', 'onDragEnterCapture', 'onDragExitCapture', 'onDragLeaveCapture', 'onDragOverCapture', 'onDragStartCapture', 'onDropCapture', 'onMouseDownCapture', 'onMouseEnterCapture', 'onMouseLeaveCapture', 'onMouseMoveCapture', 'onMouseOutCapture', 'onMouseOverCapture', 'onMouseUpCapture', 'onSelectCapture', 'onTouchCancelCapture', 'onTouchEndCapture', 'onTouchMoveCapture', 'onTouchStartCapture', 'onScrollCapture', 'onWheelCapture', 'onAbortCapture', 'onCanPlayCapture', 'onCanPlayThroughCapture', 'onDurationChangeCapture', 'onEmptiedCapture', 'onEncryptedCapture', 'onEndedCapture', 'onErrorCapture', 'onLoadedDataCapture', 'onLoadedMetadataCapture', 'onLoadStartCapture', 'onPauseCapture', 'onPlayCapture', 'onPlayingCapture', 'onProgressCapture', 'onRateChangeCapture', 'onSeekedCapture', 'onSeekingCapture', 'onStalledCapture', 'onSuspendCapture', 'onTimeUpdateCapture', 'onVolumeChangeCapture', 'onWaitingCapture', 'onLoadCapture', 'onAnimationStartCapture', 'onAnimationEndCapture', 'onAnimationIterationCapture', 'onTransitionEndCapture'];
	
	/* eslint max-lines:0, func-style:0 */
	// copied from:
	// https://github.com/styled-components/styled-components/tree/
	// 956e8210b6277860c89404f9cb08735f97eaa7e1/src/utils/validAttr.js
	/* Trying to avoid the unknown-prop errors on glamorous components
	 by filtering by React's attribute whitelist.
	 */
	
	var globalReactHtmlProps = reactHTMLAttributes['*'];
	var supportedSVGTagNames = reactHTMLAttributes.elements.svg;
	var supportedHtmlTagNames = reactHTMLAttributes.elements.html;
	
	// these are valid attributes that have the
	// same name as CSS properties, and is used
	// for css overrides API
	var cssProps = ['color', 'height', 'width'];
	
	/* From DOMProperty */
	var ATTRIBUTE_NAME_START_CHAR =
	// eslint-disable-next-line max-len
	':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
	// eslint-disable-next-line max-len
	var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
	var isCustomAttribute = RegExp.prototype.test.bind(new RegExp('^(data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$'));
	
	var isSvgTag = function isSvgTag(tagName) {
	  return (
	    // in our context, we only say that SVG tags are SVG
	    // if they are not also HTML.
	    // See https://github.com/paypal/glamorous/issues/245
	    // the svg tag will always be treated as svg for
	    // er... obvious reasons
	    tagName === 'svg' || supportedHtmlTagNames.indexOf(tagName) === -1 && supportedSVGTagNames.indexOf(tagName) !== -1
	  );
	};
	var isHtmlProp = function isHtmlProp(name, tagName) {
	  var elementAttributes = void 0;
	
	  if (isSvgTag(tagName)) {
	    // all SVG attributes supported by React are grouped under 'svg'
	    elementAttributes = reactHTMLAttributes.svg;
	  } else {
	    elementAttributes = reactHTMLAttributes[tagName] || [];
	  }
	
	  return globalReactHtmlProps.indexOf(name) !== -1 || elementAttributes.indexOf(name) !== -1;
	};
	var isCssProp = function isCssProp(name) {
	  return cssProps.indexOf(name) !== -1;
	};
	var isReactProp = function isReactProp(name) {
	  return reactProps.indexOf(name) !== -1;
	};
	
	// eslint-disable-next-line complexity
	var shouldForwardProperty = function shouldForwardProperty(tagName, name) {
	  return typeof tagName !== 'string' || (isHtmlProp(name, tagName) || isReactProp(name) || isCustomAttribute(name.toLowerCase())) && (!isCssProp(name) || isSvgTag(tagName));
	};
	
	var shouldForwardProperty$1 = index$1(shouldForwardProperty);
	
	function splitProps(_ref, _ref2) {
	  var propsAreCssOverrides = _ref2.propsAreCssOverrides,
	      rootEl = _ref2.rootEl,
	      forwardProps = _ref2.forwardProps;
	  var cssProp = _ref.css,
	      theme = _ref.theme,
	      className = _ref.className,
	      innerRef = _ref.innerRef,
	      glam = _ref.glam,
	      rest = objectWithoutProperties(_ref, ['css', 'theme', 'className', 'innerRef', 'glam']);
	
	  var returnValue = { toForward: {}, cssProp: cssProp, cssOverrides: {} };
	  if (!propsAreCssOverrides) {
	    if (typeof rootEl !== 'string') {
	      // if it's not a string, then we can forward everything
	      // (because it's a component)
	      returnValue.toForward = rest;
	      return returnValue;
	    }
	  }
	  return Object.keys(rest).reduce(function (split, propName) {
	    if (forwardProps.indexOf(propName) !== -1 || shouldForwardProperty$1(rootEl, propName)) {
	      split.toForward[propName] = rest[propName];
	    } else if (propsAreCssOverrides) {
	      split.cssOverrides[propName] = rest[propName];
	    }
	    return split;
	  }, returnValue);
	}
	
	/* eslint no-unused-vars:0 */
	
	var glamorous$2 = createGlamorous$1(splitProps);
	
	/*
	 * This creates a glamorousComponentFactory for every DOM element so you can
	 * simply do:
	 * const GreenButton = glamorous.button({
	 *   backgroundColor: 'green',
	 *   padding: 20,
	 * })
	 * <GreenButton>Click Me!</GreenButton>
	 */
	Object.assign(glamorous$2, domElements.reduce(function (getters, tag) {
	  // TODO: next breaking change, let's make
	  // the `displayName` be: `glamorous.${tag}`
	  getters[tag] = glamorous$2(tag);
	  return getters;
	}, {}));
	
	/*
	 * This creates a glamorous component for each DOM element so you can
	 * simply do:
	 * <glamorous.Div
	 *   color="green"
	 *   marginLeft={20}
	 * >
	 *   I'm green!
	 * </glamorous.Div>
	 */
	Object.assign(glamorous$2, domElements.reduce(function (comps, tag) {
	  var capitalTag = capitalize(tag);
	  comps[capitalTag] = glamorous$2[tag]();
	  comps[capitalTag].displayName = 'glamorous.' + capitalTag;
	  comps[capitalTag].propsAreCssOverrides = true;
	  return comps;
	}, {}));
	
	function capitalize(s) {
	  return s.slice(0, 1).toUpperCase() + s.slice(1);
	}
	
	/*
	 * Fix importing in typescript after rollup compilation
	 * https://github.com/rollup/rollup/issues/1156
	 * https://github.com/Microsoft/TypeScript/issues/13017#issuecomment-268657860
	 */
	glamorous$2.default = glamorous$2;
	
	
	
	var glamorousStar = Object.freeze({
		default: glamorous$2,
		ThemeProvider: ThemeProvider,
		withTheme: withTheme
	});
	
	var glamorous = glamorous$2;
	
	Object.assign(glamorous, Object.keys(glamorousStar).reduce(function (e, prop) {
	  if (prop !== 'default') {
	    // eslint-disable-next-line import/namespace
	    e[prop] = glamorousStar[prop];
	  }
	  return e;
	}, {}));
	
	module.exports = glamorous;


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/index.js":
/***/ (function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';
	
	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};
	
	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};
	
	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';
	
	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);
	
	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }
	
	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {
	
	                }
	            }
	        }
	    }
	
	    return targetComponent;
	};


/***/ }),

/***/ "./node_modules/hyphenate-style-name/index.js":
/***/ (function(module, exports) {

	'use strict';
	
	var uppercasePattern = /[A-Z]/g;
	var msPattern = /^ms-/;
	var cache = {};
	
	function hyphenateStyleName(string) {
	    return string in cache
	    ? cache[string]
	    : cache[string] = string
	      .replace(uppercasePattern, '-$&')
	      .toLowerCase()
	      .replace(msPattern, '-ms-');
	}
	
	module.exports = hyphenateStyleName;


/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/createPrefixer.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createPrefixer;
	
	var _prefixProperty = __webpack_require__("./node_modules/inline-style-prefixer/utils/prefixProperty.js");
	
	var _prefixProperty2 = _interopRequireDefault(_prefixProperty);
	
	var _prefixValue = __webpack_require__("./node_modules/inline-style-prefixer/utils/prefixValue.js");
	
	var _prefixValue2 = _interopRequireDefault(_prefixValue);
	
	var _addNewValuesOnly = __webpack_require__("./node_modules/inline-style-prefixer/utils/addNewValuesOnly.js");
	
	var _addNewValuesOnly2 = _interopRequireDefault(_addNewValuesOnly);
	
	var _isObject = __webpack_require__("./node_modules/inline-style-prefixer/utils/isObject.js");
	
	var _isObject2 = _interopRequireDefault(_isObject);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function createPrefixer(_ref) {
	  var prefixMap = _ref.prefixMap,
	      plugins = _ref.plugins;
	
	  function prefixAll(style) {
	    for (var property in style) {
	      var value = style[property];
	
	      // handle nested objects
	      if ((0, _isObject2.default)(value)) {
	        style[property] = prefixAll(value
	        // handle array values
	        );
	      } else if (Array.isArray(value)) {
	        var combinedValue = [];
	
	        for (var i = 0, len = value.length; i < len; ++i) {
	          var processedValue = (0, _prefixValue2.default)(plugins, property, value[i], style, prefixMap);
	          (0, _addNewValuesOnly2.default)(combinedValue, processedValue || value[i]);
	        }
	
	        // only modify the value if it was touched
	        // by any plugin to prevent unnecessary mutations
	        if (combinedValue.length > 0) {
	          style[property] = combinedValue;
	        }
	      } else {
	        var _processedValue = (0, _prefixValue2.default)(plugins, property, value, style, prefixMap
	
	        // only modify the value if it was touched
	        // by any plugin to prevent unnecessary mutations
	        );if (_processedValue) {
	          style[property] = _processedValue;
	        }
	
	        (0, _prefixProperty2.default)(prefixMap, property, style);
	      }
	    }
	
	    return style;
	  }
	
	  return prefixAll;
	}
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/crossFade.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = crossFade;
	
	var _isPrefixedValue = __webpack_require__("./node_modules/css-in-js-utils/lib/isPrefixedValue.js");
	
	var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// http://caniuse.com/#search=cross-fade
	var prefixes = ['-webkit-', ''];
	function crossFade(property, value) {
	  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('cross-fade(') > -1) {
	    return prefixes.map(function (prefix) {
	      return value.replace(/cross-fade\(/g, prefix + 'cross-fade(');
	    });
	  }
	}
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/cursor.js":
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = cursor;
	var prefixes = ['-webkit-', '-moz-', ''];
	
	var values = {
	  'zoom-in': true,
	  'zoom-out': true,
	  grab: true,
	  grabbing: true
	};
	
	function cursor(property, value) {
	  if (property === 'cursor' && values.hasOwnProperty(value)) {
	    return prefixes.map(function (prefix) {
	      return prefix + value;
	    });
	  }
	}
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/filter.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = filter;
	
	var _isPrefixedValue = __webpack_require__("./node_modules/css-in-js-utils/lib/isPrefixedValue.js");
	
	var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// http://caniuse.com/#feat=css-filter-function
	var prefixes = ['-webkit-', ''];
	function filter(property, value) {
	  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('filter(') > -1) {
	    return prefixes.map(function (prefix) {
	      return value.replace(/filter\(/g, prefix + 'filter(');
	    });
	  }
	}
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/flex.js":
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flex;
	var values = {
	  flex: ['-webkit-box', '-moz-box', '-ms-flexbox', '-webkit-flex', 'flex'],
	  'inline-flex': ['-webkit-inline-box', '-moz-inline-box', '-ms-inline-flexbox', '-webkit-inline-flex', 'inline-flex']
	};
	
	function flex(property, value) {
	  if (property === 'display' && values.hasOwnProperty(value)) {
	    return values[value];
	  }
	}
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/flexboxIE.js":
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flexboxIE;
	var alternativeValues = {
	  'space-around': 'distribute',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end'
	};
	var alternativeProps = {
	  alignContent: 'msFlexLinePack',
	  alignSelf: 'msFlexItemAlign',
	  alignItems: 'msFlexAlign',
	  justifyContent: 'msFlexPack',
	  order: 'msFlexOrder',
	  flexGrow: 'msFlexPositive',
	  flexShrink: 'msFlexNegative',
	  flexBasis: 'msFlexPreferredSize'
	};
	
	function flexboxIE(property, value, style) {
	  if (alternativeProps.hasOwnProperty(property)) {
	    style[alternativeProps[property]] = alternativeValues[value] || value;
	  }
	}
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/flexboxOld.js":
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flexboxOld;
	var alternativeValues = {
	  'space-around': 'justify',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  'wrap-reverse': 'multiple',
	  wrap: 'multiple'
	};
	
	var alternativeProps = {
	  alignItems: 'WebkitBoxAlign',
	  justifyContent: 'WebkitBoxPack',
	  flexWrap: 'WebkitBoxLines'
	};
	
	function flexboxOld(property, value, style) {
	  if (property === 'flexDirection' && typeof value === 'string') {
	    if (value.indexOf('column') > -1) {
	      style.WebkitBoxOrient = 'vertical';
	    } else {
	      style.WebkitBoxOrient = 'horizontal';
	    }
	    if (value.indexOf('reverse') > -1) {
	      style.WebkitBoxDirection = 'reverse';
	    } else {
	      style.WebkitBoxDirection = 'normal';
	    }
	  }
	  if (alternativeProps.hasOwnProperty(property)) {
	    style[alternativeProps[property]] = alternativeValues[value] || value;
	  }
	}
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/gradient.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = gradient;
	
	var _isPrefixedValue = __webpack_require__("./node_modules/css-in-js-utils/lib/isPrefixedValue.js");
	
	var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var prefixes = ['-webkit-', '-moz-', ''];
	
	var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;
	
	function gradient(property, value) {
	  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && values.test(value)) {
	    return prefixes.map(function (prefix) {
	      return prefix + value;
	    });
	  }
	}
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/imageSet.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = imageSet;
	
	var _isPrefixedValue = __webpack_require__("./node_modules/css-in-js-utils/lib/isPrefixedValue.js");
	
	var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// http://caniuse.com/#feat=css-image-set
	var prefixes = ['-webkit-', ''];
	function imageSet(property, value) {
	  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('image-set(') > -1) {
	    return prefixes.map(function (prefix) {
	      return value.replace(/image-set\(/g, prefix + 'image-set(');
	    });
	  }
	}
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/position.js":
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = position;
	function position(property, value) {
	  if (property === 'position' && value === 'sticky') {
	    return ['-webkit-sticky', 'sticky'];
	  }
	}
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/sizing.js":
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = sizing;
	var prefixes = ['-webkit-', '-moz-', ''];
	
	var properties = {
	  maxHeight: true,
	  maxWidth: true,
	  width: true,
	  height: true,
	  columnWidth: true,
	  minWidth: true,
	  minHeight: true
	};
	var values = {
	  'min-content': true,
	  'max-content': true,
	  'fill-available': true,
	  'fit-content': true,
	  'contain-floats': true
	};
	
	function sizing(property, value) {
	  if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
	    return prefixes.map(function (prefix) {
	      return prefix + value;
	    });
	  }
	}
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/transition.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = transition;
	
	var _hyphenateProperty = __webpack_require__("./node_modules/css-in-js-utils/lib/hyphenateProperty.js");
	
	var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);
	
	var _isPrefixedValue = __webpack_require__("./node_modules/css-in-js-utils/lib/isPrefixedValue.js");
	
	var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);
	
	var _capitalizeString = __webpack_require__("./node_modules/inline-style-prefixer/utils/capitalizeString.js");
	
	var _capitalizeString2 = _interopRequireDefault(_capitalizeString);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var properties = {
	  transition: true,
	  transitionProperty: true,
	  WebkitTransition: true,
	  WebkitTransitionProperty: true,
	  MozTransition: true,
	  MozTransitionProperty: true
	};
	
	
	var prefixMapping = {
	  Webkit: '-webkit-',
	  Moz: '-moz-',
	  ms: '-ms-'
	};
	
	function prefixValue(value, propertyPrefixMap) {
	  if ((0, _isPrefixedValue2.default)(value)) {
	    return value;
	  }
	
	  // only split multi values, not cubic beziers
	  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);
	
	  for (var i = 0, len = multipleValues.length; i < len; ++i) {
	    var singleValue = multipleValues[i];
	    var values = [singleValue];
	    for (var property in propertyPrefixMap) {
	      var dashCaseProperty = (0, _hyphenateProperty2.default)(property);
	
	      if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
	        var prefixes = propertyPrefixMap[property];
	        for (var j = 0, pLen = prefixes.length; j < pLen; ++j) {
	          // join all prefixes and create a new value
	          values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes[j]] + dashCaseProperty));
	        }
	      }
	    }
	
	    multipleValues[i] = values.join(',');
	  }
	
	  return multipleValues.join(',');
	}
	
	function transition(property, value, style, propertyPrefixMap) {
	  // also check for already prefixed transitions
	  if (typeof value === 'string' && properties.hasOwnProperty(property)) {
	    var outputValue = prefixValue(value, propertyPrefixMap
	    // if the property is already prefixed
	    );var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
	      return !/-moz-|-ms-/.test(val);
	    }).join(',');
	
	    if (property.indexOf('Webkit') > -1) {
	      return webkitOutput;
	    }
	
	    var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
	      return !/-webkit-|-ms-/.test(val);
	    }).join(',');
	
	    if (property.indexOf('Moz') > -1) {
	      return mozOutput;
	    }
	
	    style['Webkit' + (0, _capitalizeString2.default)(property)] = webkitOutput;
	    style['Moz' + (0, _capitalizeString2.default)(property)] = mozOutput;
	    return outputValue;
	  }
	}
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/addNewValuesOnly.js":
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = addNewValuesOnly;
	function addIfNew(list, value) {
	  if (list.indexOf(value) === -1) {
	    list.push(value);
	  }
	}
	
	function addNewValuesOnly(list, values) {
	  if (Array.isArray(values)) {
	    for (var i = 0, len = values.length; i < len; ++i) {
	      addIfNew(list, values[i]);
	    }
	  } else {
	    addIfNew(list, values);
	  }
	}
	module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/capitalizeString.js":
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = capitalizeString;
	function capitalizeString(str) {
	  return str.charAt(0).toUpperCase() + str.slice(1);
	}
	module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/isObject.js":
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isObject;
	function isObject(value) {
	  return value instanceof Object && !Array.isArray(value);
	}
	module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/prefixProperty.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = prefixProperty;
	
	var _capitalizeString = __webpack_require__("./node_modules/inline-style-prefixer/utils/capitalizeString.js");
	
	var _capitalizeString2 = _interopRequireDefault(_capitalizeString);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function prefixProperty(prefixProperties, property, style) {
	  if (prefixProperties.hasOwnProperty(property)) {
	    var requiredPrefixes = prefixProperties[property];
	    for (var i = 0, len = requiredPrefixes.length; i < len; ++i) {
	      style[requiredPrefixes[i] + (0, _capitalizeString2.default)(property)] = style[property];
	    }
	  }
	}
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/prefixValue.js":
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = prefixValue;
	function prefixValue(plugins, property, value, style, metaData) {
	  for (var i = 0, len = plugins.length; i < len; ++i) {
	    var processedValue = plugins[i](property, value, style, metaData
	
	    // we can stop processing if a value is returned
	    // as all plugin criteria are unique
	    );if (processedValue) {
	      return processedValue;
	    }
	  }
	}
	module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-css-property-operations/lib/CSSPropertyOperations.js":
/***/ (function(module, exports) {

	module.exports =
	/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	
	
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = __webpack_require__(1);
	
	
	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {
	
		/* WEBPACK VAR INJECTION */(function(process) {/**
		 * Copyright 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 */
	
		'use strict';
	
		var CSSProperty = __webpack_require__(3);
		var ExecutionEnvironment = __webpack_require__(4);
		var ReactInstrumentation = __webpack_require__(5);
	
		var camelizeStyleName = __webpack_require__(17);
		var dangerousStyleValue = __webpack_require__(19);
		var hyphenateStyleName = __webpack_require__(20);
		var memoizeStringOnly = __webpack_require__(22);
		var warning = __webpack_require__(8);
	
		var processStyleName = memoizeStringOnly(function (styleName) {
		  return hyphenateStyleName(styleName);
		});
	
		var hasShorthandPropertyBug = false;
		var styleFloatAccessor = 'cssFloat';
		if (ExecutionEnvironment.canUseDOM) {
		  var tempStyle = document.createElement('div').style;
		  try {
		    // IE8 throws "Invalid argument." if resetting shorthand style properties.
		    tempStyle.font = '';
		  } catch (e) {
		    hasShorthandPropertyBug = true;
		  }
		  // IE8 only supports accessing cssFloat (standard) as styleFloat
		  if (document.documentElement.style.cssFloat === undefined) {
		    styleFloatAccessor = 'styleFloat';
		  }
		}
	
		if (process.env.NODE_ENV !== 'production') {
		  // 'msTransform' is correct, but the other prefixes should be capitalized
		  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
	
		  // style values shouldn't contain a semicolon
		  var badStyleValueWithSemicolonPattern = /;\s*$/;
	
		  var warnedStyleNames = {};
		  var warnedStyleValues = {};
		  var warnedForNaNValue = false;
	
		  var warnHyphenatedStyleName = function (name, owner) {
		    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
		      return;
		    }
	
		    warnedStyleNames[name] = true;
		    process.env.NODE_ENV !== 'production' ? warning(false, 'Unsupported style property %s. Did you mean %s?%s', name, camelizeStyleName(name), checkRenderMessage(owner)) : void 0;
		  };
	
		  var warnBadVendoredStyleName = function (name, owner) {
		    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
		      return;
		    }
	
		    warnedStyleNames[name] = true;
		    process.env.NODE_ENV !== 'production' ? warning(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?%s', name, name.charAt(0).toUpperCase() + name.slice(1), checkRenderMessage(owner)) : void 0;
		  };
	
		  var warnStyleValueWithSemicolon = function (name, value, owner) {
		    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
		      return;
		    }
	
		    warnedStyleValues[value] = true;
		    process.env.NODE_ENV !== 'production' ? warning(false, 'Style property values shouldn\'t contain a semicolon.%s ' + 'Try "%s: %s" instead.', checkRenderMessage(owner), name, value.replace(badStyleValueWithSemicolonPattern, '')) : void 0;
		  };
	
		  var warnStyleValueIsNaN = function (name, value, owner) {
		    if (warnedForNaNValue) {
		      return;
		    }
	
		    warnedForNaNValue = true;
		    process.env.NODE_ENV !== 'production' ? warning(false, '`NaN` is an invalid value for the `%s` css style property.%s', name, checkRenderMessage(owner)) : void 0;
		  };
	
		  var checkRenderMessage = function (owner) {
		    if (owner) {
		      var name = owner.getName();
		      if (name) {
		        return ' Check the render method of `' + name + '`.';
		      }
		    }
		    return '';
		  };
	
		  /**
		   * @param {string} name
		   * @param {*} value
		   * @param {ReactDOMComponent} component
		   */
		  var warnValidStyle = function (name, value, component) {
		    var owner;
		    if (component) {
		      owner = component._currentElement._owner;
		    }
		    if (name.indexOf('-') > -1) {
		      warnHyphenatedStyleName(name, owner);
		    } else if (badVendoredStyleNamePattern.test(name)) {
		      warnBadVendoredStyleName(name, owner);
		    } else if (badStyleValueWithSemicolonPattern.test(value)) {
		      warnStyleValueWithSemicolon(name, value, owner);
		    }
	
		    if (typeof value === 'number' && isNaN(value)) {
		      warnStyleValueIsNaN(name, value, owner);
		    }
		  };
		}
	
		/**
		 * Operations for dealing with CSS properties.
		 */
		var CSSPropertyOperations = {
	
		  /**
		   * Serializes a mapping of style properties for use as inline styles:
		   *
		   *   > createMarkupForStyles({width: '200px', height: 0})
		   *   "width:200px;height:0;"
		   *
		   * Undefined values are ignored so that declarative programming is easier.
		   * The result should be HTML-escaped before insertion into the DOM.
		   *
		   * @param {object} styles
		   * @param {ReactDOMComponent} component
		   * @return {?string}
		   */
		  createMarkupForStyles: function (styles, component) {
		    var serialized = '';
		    for (var styleName in styles) {
		      if (!styles.hasOwnProperty(styleName)) {
		        continue;
		      }
		      var styleValue = styles[styleName];
		      if (process.env.NODE_ENV !== 'production') {
		        warnValidStyle(styleName, styleValue, component);
		      }
		      if (styleValue != null) {
		        serialized += processStyleName(styleName) + ':';
		        serialized += dangerousStyleValue(styleName, styleValue, component) + ';';
		      }
		    }
		    return serialized || null;
		  },
	
		  /**
		   * Sets the value for multiple styles on a node.  If a value is specified as
		   * '' (empty string), the corresponding style property will be unset.
		   *
		   * @param {DOMElement} node
		   * @param {object} styles
		   * @param {ReactDOMComponent} component
		   */
		  setValueForStyles: function (node, styles, component) {
		    if (process.env.NODE_ENV !== 'production') {
		      ReactInstrumentation.debugTool.onHostOperation({
		        instanceID: component._debugID,
		        type: 'update styles',
		        payload: styles
		      });
		    }
	
		    var style = node.style;
		    for (var styleName in styles) {
		      if (!styles.hasOwnProperty(styleName)) {
		        continue;
		      }
		      if (process.env.NODE_ENV !== 'production') {
		        warnValidStyle(styleName, styles[styleName], component);
		      }
		      var styleValue = dangerousStyleValue(styleName, styles[styleName], component);
		      if (styleName === 'float' || styleName === 'cssFloat') {
		        styleName = styleFloatAccessor;
		      }
		      if (styleValue) {
		        style[styleName] = styleValue;
		      } else {
		        var expansion = hasShorthandPropertyBug && CSSProperty.shorthandPropertyExpansions[styleName];
		        if (expansion) {
		          // Shorthand property that IE8 won't like unsetting, so unset each
		          // component to placate it
		          for (var individualStyleName in expansion) {
		            style[individualStyleName] = '';
		          }
		        } else {
		          style[styleName] = '';
		        }
		      }
		    }
		  }
	
		};
	
		module.exports = CSSPropertyOperations;
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
		// shim for using process in browser
		var process = module.exports = {};
	
		// cached from whatever global is present so that test runners that stub it
		// don't break things.  But we need to wrap it in a try catch in case it is
		// wrapped in strict mode code which doesn't define any globals.  It's inside a
		// function because try/catches deoptimize in certain engines.
	
		var cachedSetTimeout;
		var cachedClearTimeout;
	
		function defaultSetTimout() {
		    throw new Error('setTimeout has not been defined');
		}
		function defaultClearTimeout () {
		    throw new Error('clearTimeout has not been defined');
		}
		(function () {
		    try {
		        if (typeof setTimeout === 'function') {
		            cachedSetTimeout = setTimeout;
		        } else {
		            cachedSetTimeout = defaultSetTimout;
		        }
		    } catch (e) {
		        cachedSetTimeout = defaultSetTimout;
		    }
		    try {
		        if (typeof clearTimeout === 'function') {
		            cachedClearTimeout = clearTimeout;
		        } else {
		            cachedClearTimeout = defaultClearTimeout;
		        }
		    } catch (e) {
		        cachedClearTimeout = defaultClearTimeout;
		    }
		} ())
		function runTimeout(fun) {
		    if (cachedSetTimeout === setTimeout) {
		        //normal enviroments in sane situations
		        return setTimeout(fun, 0);
		    }
		    // if setTimeout wasn't available but was latter defined
		    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
		        cachedSetTimeout = setTimeout;
		        return setTimeout(fun, 0);
		    }
		    try {
		        // when when somebody has screwed with setTimeout but no I.E. maddness
		        return cachedSetTimeout(fun, 0);
		    } catch(e){
		        try {
		            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
		            return cachedSetTimeout.call(null, fun, 0);
		        } catch(e){
		            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
		            return cachedSetTimeout.call(this, fun, 0);
		        }
		    }
	
	
		}
		function runClearTimeout(marker) {
		    if (cachedClearTimeout === clearTimeout) {
		        //normal enviroments in sane situations
		        return clearTimeout(marker);
		    }
		    // if clearTimeout wasn't available but was latter defined
		    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
		        cachedClearTimeout = clearTimeout;
		        return clearTimeout(marker);
		    }
		    try {
		        // when when somebody has screwed with setTimeout but no I.E. maddness
		        return cachedClearTimeout(marker);
		    } catch (e){
		        try {
		            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
		            return cachedClearTimeout.call(null, marker);
		        } catch (e){
		            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
		            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
		            return cachedClearTimeout.call(this, marker);
		        }
		    }
	
	
	
		}
		var queue = [];
		var draining = false;
		var currentQueue;
		var queueIndex = -1;
	
		function cleanUpNextTick() {
		    if (!draining || !currentQueue) {
		        return;
		    }
		    draining = false;
		    if (currentQueue.length) {
		        queue = currentQueue.concat(queue);
		    } else {
		        queueIndex = -1;
		    }
		    if (queue.length) {
		        drainQueue();
		    }
		}
	
		function drainQueue() {
		    if (draining) {
		        return;
		    }
		    var timeout = runTimeout(cleanUpNextTick);
		    draining = true;
	
		    var len = queue.length;
		    while(len) {
		        currentQueue = queue;
		        queue = [];
		        while (++queueIndex < len) {
		            if (currentQueue) {
		                currentQueue[queueIndex].run();
		            }
		        }
		        queueIndex = -1;
		        len = queue.length;
		    }
		    currentQueue = null;
		    draining = false;
		    runClearTimeout(timeout);
		}
	
		process.nextTick = function (fun) {
		    var args = new Array(arguments.length - 1);
		    if (arguments.length > 1) {
		        for (var i = 1; i < arguments.length; i++) {
		            args[i - 1] = arguments[i];
		        }
		    }
		    queue.push(new Item(fun, args));
		    if (queue.length === 1 && !draining) {
		        runTimeout(drainQueue);
		    }
		};
	
		// v8 likes predictible objects
		function Item(fun, array) {
		    this.fun = fun;
		    this.array = array;
		}
		Item.prototype.run = function () {
		    this.fun.apply(null, this.array);
		};
		process.title = 'browser';
		process.browser = true;
		process.env = {};
		process.argv = [];
		process.version = ''; // empty string to avoid regexp issues
		process.versions = {};
	
		function noop() {}
	
		process.on = noop;
		process.addListener = noop;
		process.once = noop;
		process.off = noop;
		process.removeListener = noop;
		process.removeAllListeners = noop;
		process.emit = noop;
	
		process.binding = function (name) {
		    throw new Error('process.binding is not supported');
		};
	
		process.cwd = function () { return '/' };
		process.chdir = function (dir) {
		    throw new Error('process.chdir is not supported');
		};
		process.umask = function() { return 0; };
	
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
		/**
		 * Copyright 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 */
	
		'use strict';
	
		/**
		 * CSS properties which accept numbers but are not in units of "px".
		 */
	
		var isUnitlessNumber = {
		  animationIterationCount: true,
		  borderImageOutset: true,
		  borderImageSlice: true,
		  borderImageWidth: true,
		  boxFlex: true,
		  boxFlexGroup: true,
		  boxOrdinalGroup: true,
		  columnCount: true,
		  flex: true,
		  flexGrow: true,
		  flexPositive: true,
		  flexShrink: true,
		  flexNegative: true,
		  flexOrder: true,
		  gridRow: true,
		  gridColumn: true,
		  fontWeight: true,
		  lineClamp: true,
		  lineHeight: true,
		  opacity: true,
		  order: true,
		  orphans: true,
		  tabSize: true,
		  widows: true,
		  zIndex: true,
		  zoom: true,
	
		  // SVG-related properties
		  fillOpacity: true,
		  floodOpacity: true,
		  stopOpacity: true,
		  strokeDasharray: true,
		  strokeDashoffset: true,
		  strokeMiterlimit: true,
		  strokeOpacity: true,
		  strokeWidth: true
		};
	
		/**
		 * @param {string} prefix vendor-specific prefix, eg: Webkit
		 * @param {string} key style name, eg: transitionDuration
		 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
		 * WebkitTransitionDuration
		 */
		function prefixKey(prefix, key) {
		  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
		}
	
		/**
		 * Support style names that may come passed in prefixed by adding permutations
		 * of vendor prefixes.
		 */
		var prefixes = ['Webkit', 'ms', 'Moz', 'O'];
	
		// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
		// infinite loop, because it iterates over the newly added props too.
		Object.keys(isUnitlessNumber).forEach(function (prop) {
		  prefixes.forEach(function (prefix) {
		    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
		  });
		});
	
		/**
		 * Most style properties can be unset by doing .style[prop] = '' but IE8
		 * doesn't like doing that with shorthand properties so for the properties that
		 * IE8 breaks on, which are listed here, we instead unset each of the
		 * individual properties. See http://bugs.jquery.com/ticket/12385.
		 * The 4-value 'clock' properties like margin, padding, border-width seem to
		 * behave without any problems. Curiously, list-style works too without any
		 * special prodding.
		 */
		var shorthandPropertyExpansions = {
		  background: {
		    backgroundAttachment: true,
		    backgroundColor: true,
		    backgroundImage: true,
		    backgroundPositionX: true,
		    backgroundPositionY: true,
		    backgroundRepeat: true
		  },
		  backgroundPosition: {
		    backgroundPositionX: true,
		    backgroundPositionY: true
		  },
		  border: {
		    borderWidth: true,
		    borderStyle: true,
		    borderColor: true
		  },
		  borderBottom: {
		    borderBottomWidth: true,
		    borderBottomStyle: true,
		    borderBottomColor: true
		  },
		  borderLeft: {
		    borderLeftWidth: true,
		    borderLeftStyle: true,
		    borderLeftColor: true
		  },
		  borderRight: {
		    borderRightWidth: true,
		    borderRightStyle: true,
		    borderRightColor: true
		  },
		  borderTop: {
		    borderTopWidth: true,
		    borderTopStyle: true,
		    borderTopColor: true
		  },
		  font: {
		    fontStyle: true,
		    fontVariant: true,
		    fontWeight: true,
		    fontSize: true,
		    lineHeight: true,
		    fontFamily: true
		  },
		  outline: {
		    outlineWidth: true,
		    outlineStyle: true,
		    outlineColor: true
		  }
		};
	
		var CSSProperty = {
		  isUnitlessNumber: isUnitlessNumber,
		  shorthandPropertyExpansions: shorthandPropertyExpansions
		};
	
		module.exports = CSSProperty;
	
	/***/ },
	/* 4 */
	/***/ function(module, exports) {
	
		/**
		 * Copyright (c) 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 */
	
		'use strict';
	
		var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	
		/**
		 * Simple, lightweight module assisting with the detection and context of
		 * Worker. Helps avoid circular dependencies and allows code to reason about
		 * whether or not they are in a Worker, even if they never include the main
		 * `ReactWorker` dependency.
		 */
		var ExecutionEnvironment = {
	
		  canUseDOM: canUseDOM,
	
		  canUseWorkers: typeof Worker !== 'undefined',
	
		  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
	
		  canUseViewport: canUseDOM && !!window.screen,
	
		  isInWorker: !canUseDOM // For now, this is true - might change in the future.
	
		};
	
		module.exports = ExecutionEnvironment;
	
	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {
	
		/* WEBPACK VAR INJECTION */(function(process) {/**
		 * Copyright 2016-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * 
		 */
	
		'use strict';
	
		// Trust the developer to only use ReactInstrumentation with a __DEV__ check
	
		var debugTool = null;
	
		if (process.env.NODE_ENV !== 'production') {
		  var ReactDebugTool = __webpack_require__(6);
		  debugTool = ReactDebugTool;
		}
	
		module.exports = { debugTool: debugTool };
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))
	
	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {
	
		/* WEBPACK VAR INJECTION */(function(process) {/**
		 * Copyright 2016-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * 
		 */
	
		'use strict';
	
		var ReactInvalidSetStateWarningHook = __webpack_require__(7);
		var ReactHostOperationHistoryHook = __webpack_require__(10);
		var ReactComponentTreeHook = __webpack_require__(11);
		var ExecutionEnvironment = __webpack_require__(4);
	
		var performanceNow = __webpack_require__(15);
		var warning = __webpack_require__(8);
	
		var hooks = [];
		var didHookThrowForEvent = {};
	
		function callHook(event, fn, context, arg1, arg2, arg3, arg4, arg5) {
		  try {
		    fn.call(context, arg1, arg2, arg3, arg4, arg5);
		  } catch (e) {
		    process.env.NODE_ENV !== 'production' ? warning(didHookThrowForEvent[event], 'Exception thrown by hook while handling %s: %s', event, e + '\n' + e.stack) : void 0;
		    didHookThrowForEvent[event] = true;
		  }
		}
	
		function emitEvent(event, arg1, arg2, arg3, arg4, arg5) {
		  for (var i = 0; i < hooks.length; i++) {
		    var hook = hooks[i];
		    var fn = hook[event];
		    if (fn) {
		      callHook(event, fn, hook, arg1, arg2, arg3, arg4, arg5);
		    }
		  }
		}
	
		var isProfiling = false;
		var flushHistory = [];
		var lifeCycleTimerStack = [];
		var currentFlushNesting = 0;
		var currentFlushMeasurements = [];
		var currentFlushStartTime = 0;
		var currentTimerDebugID = null;
		var currentTimerStartTime = 0;
		var currentTimerNestedFlushDuration = 0;
		var currentTimerType = null;
	
		var lifeCycleTimerHasWarned = false;
	
		function clearHistory() {
		  ReactComponentTreeHook.purgeUnmountedComponents();
		  ReactHostOperationHistoryHook.clearHistory();
		}
	
		function getTreeSnapshot(registeredIDs) {
		  return registeredIDs.reduce(function (tree, id) {
		    var ownerID = ReactComponentTreeHook.getOwnerID(id);
		    var parentID = ReactComponentTreeHook.getParentID(id);
		    tree[id] = {
		      displayName: ReactComponentTreeHook.getDisplayName(id),
		      text: ReactComponentTreeHook.getText(id),
		      updateCount: ReactComponentTreeHook.getUpdateCount(id),
		      childIDs: ReactComponentTreeHook.getChildIDs(id),
		      // Text nodes don't have owners but this is close enough.
		      ownerID: ownerID || parentID && ReactComponentTreeHook.getOwnerID(parentID) || 0,
		      parentID: parentID
		    };
		    return tree;
		  }, {});
		}
	
		function resetMeasurements() {
		  var previousStartTime = currentFlushStartTime;
		  var previousMeasurements = currentFlushMeasurements;
		  var previousOperations = ReactHostOperationHistoryHook.getHistory();
	
		  if (currentFlushNesting === 0) {
		    currentFlushStartTime = 0;
		    currentFlushMeasurements = [];
		    clearHistory();
		    return;
		  }
	
		  if (previousMeasurements.length || previousOperations.length) {
		    var registeredIDs = ReactComponentTreeHook.getRegisteredIDs();
		    flushHistory.push({
		      duration: performanceNow() - previousStartTime,
		      measurements: previousMeasurements || [],
		      operations: previousOperations || [],
		      treeSnapshot: getTreeSnapshot(registeredIDs)
		    });
		  }
	
		  clearHistory();
		  currentFlushStartTime = performanceNow();
		  currentFlushMeasurements = [];
		}
	
		function checkDebugID(debugID) {
		  var allowRoot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
		  if (allowRoot && debugID === 0) {
		    return;
		  }
		  if (!debugID) {
		    process.env.NODE_ENV !== 'production' ? warning(false, 'ReactDebugTool: debugID may not be empty.') : void 0;
		  }
		}
	
		function beginLifeCycleTimer(debugID, timerType) {
		  if (currentFlushNesting === 0) {
		    return;
		  }
		  if (currentTimerType && !lifeCycleTimerHasWarned) {
		    process.env.NODE_ENV !== 'production' ? warning(false, 'There is an internal error in the React performance measurement code. ' + 'Did not expect %s timer to start while %s timer is still in ' + 'progress for %s instance.', timerType, currentTimerType || 'no', debugID === currentTimerDebugID ? 'the same' : 'another') : void 0;
		    lifeCycleTimerHasWarned = true;
		  }
		  currentTimerStartTime = performanceNow();
		  currentTimerNestedFlushDuration = 0;
		  currentTimerDebugID = debugID;
		  currentTimerType = timerType;
		}
	
		function endLifeCycleTimer(debugID, timerType) {
		  if (currentFlushNesting === 0) {
		    return;
		  }
		  if (currentTimerType !== timerType && !lifeCycleTimerHasWarned) {
		    process.env.NODE_ENV !== 'production' ? warning(false, 'There is an internal error in the React performance measurement code. ' + 'We did not expect %s timer to stop while %s timer is still in ' + 'progress for %s instance. Please report this as a bug in React.', timerType, currentTimerType || 'no', debugID === currentTimerDebugID ? 'the same' : 'another') : void 0;
		    lifeCycleTimerHasWarned = true;
		  }
		  if (isProfiling) {
		    currentFlushMeasurements.push({
		      timerType: timerType,
		      instanceID: debugID,
		      duration: performanceNow() - currentTimerStartTime - currentTimerNestedFlushDuration
		    });
		  }
		  currentTimerStartTime = 0;
		  currentTimerNestedFlushDuration = 0;
		  currentTimerDebugID = null;
		  currentTimerType = null;
		}
	
		function pauseCurrentLifeCycleTimer() {
		  var currentTimer = {
		    startTime: currentTimerStartTime,
		    nestedFlushStartTime: performanceNow(),
		    debugID: currentTimerDebugID,
		    timerType: currentTimerType
		  };
		  lifeCycleTimerStack.push(currentTimer);
		  currentTimerStartTime = 0;
		  currentTimerNestedFlushDuration = 0;
		  currentTimerDebugID = null;
		  currentTimerType = null;
		}
	
		function resumeCurrentLifeCycleTimer() {
		  var _lifeCycleTimerStack$ = lifeCycleTimerStack.pop(),
		      startTime = _lifeCycleTimerStack$.startTime,
		      nestedFlushStartTime = _lifeCycleTimerStack$.nestedFlushStartTime,
		      debugID = _lifeCycleTimerStack$.debugID,
		      timerType = _lifeCycleTimerStack$.timerType;
	
		  var nestedFlushDuration = performanceNow() - nestedFlushStartTime;
		  currentTimerStartTime = startTime;
		  currentTimerNestedFlushDuration += nestedFlushDuration;
		  currentTimerDebugID = debugID;
		  currentTimerType = timerType;
		}
	
		var lastMarkTimeStamp = 0;
		var canUsePerformanceMeasure =
		// $FlowFixMe https://github.com/facebook/flow/issues/2345
		typeof performance !== 'undefined' && typeof performance.mark === 'function' && typeof performance.clearMarks === 'function' && typeof performance.measure === 'function' && typeof performance.clearMeasures === 'function';
	
		function shouldMark(debugID) {
		  if (!isProfiling || !canUsePerformanceMeasure) {
		    return false;
		  }
		  var element = ReactComponentTreeHook.getElement(debugID);
		  if (element == null || typeof element !== 'object') {
		    return false;
		  }
		  var isHostElement = typeof element.type === 'string';
		  if (isHostElement) {
		    return false;
		  }
		  return true;
		}
	
		function markBegin(debugID, markType) {
		  if (!shouldMark(debugID)) {
		    return;
		  }
	
		  var markName = debugID + '::' + markType;
		  lastMarkTimeStamp = performanceNow();
		  performance.mark(markName);
		}
	
		function markEnd(debugID, markType) {
		  if (!shouldMark(debugID)) {
		    return;
		  }
	
		  var markName = debugID + '::' + markType;
		  var displayName = ReactComponentTreeHook.getDisplayName(debugID) || 'Unknown';
	
		  // Chrome has an issue of dropping markers recorded too fast:
		  // https://bugs.chromium.org/p/chromium/issues/detail?id=640652
		  // To work around this, we will not report very small measurements.
		  // I determined the magic number by tweaking it back and forth.
		  // 0.05ms was enough to prevent the issue, but I set it to 0.1ms to be safe.
		  // When the bug is fixed, we can `measure()` unconditionally if we want to.
		  var timeStamp = performanceNow();
		  if (timeStamp - lastMarkTimeStamp > 0.1) {
		    var measurementName = displayName + ' [' + markType + ']';
		    performance.measure(measurementName, markName);
		  }
	
		  performance.clearMarks(markName);
		  performance.clearMeasures(measurementName);
		}
	
		var ReactDebugTool = {
		  addHook: function (hook) {
		    hooks.push(hook);
		  },
		  removeHook: function (hook) {
		    for (var i = 0; i < hooks.length; i++) {
		      if (hooks[i] === hook) {
		        hooks.splice(i, 1);
		        i--;
		      }
		    }
		  },
		  isProfiling: function () {
		    return isProfiling;
		  },
		  beginProfiling: function () {
		    if (isProfiling) {
		      return;
		    }
	
		    isProfiling = true;
		    flushHistory.length = 0;
		    resetMeasurements();
		    ReactDebugTool.addHook(ReactHostOperationHistoryHook);
		  },
		  endProfiling: function () {
		    if (!isProfiling) {
		      return;
		    }
	
		    isProfiling = false;
		    resetMeasurements();
		    ReactDebugTool.removeHook(ReactHostOperationHistoryHook);
		  },
		  getFlushHistory: function () {
		    return flushHistory;
		  },
		  onBeginFlush: function () {
		    currentFlushNesting++;
		    resetMeasurements();
		    pauseCurrentLifeCycleTimer();
		    emitEvent('onBeginFlush');
		  },
		  onEndFlush: function () {
		    resetMeasurements();
		    currentFlushNesting--;
		    resumeCurrentLifeCycleTimer();
		    emitEvent('onEndFlush');
		  },
		  onBeginLifeCycleTimer: function (debugID, timerType) {
		    checkDebugID(debugID);
		    emitEvent('onBeginLifeCycleTimer', debugID, timerType);
		    markBegin(debugID, timerType);
		    beginLifeCycleTimer(debugID, timerType);
		  },
		  onEndLifeCycleTimer: function (debugID, timerType) {
		    checkDebugID(debugID);
		    endLifeCycleTimer(debugID, timerType);
		    markEnd(debugID, timerType);
		    emitEvent('onEndLifeCycleTimer', debugID, timerType);
		  },
		  onBeginProcessingChildContext: function () {
		    emitEvent('onBeginProcessingChildContext');
		  },
		  onEndProcessingChildContext: function () {
		    emitEvent('onEndProcessingChildContext');
		  },
		  onHostOperation: function (operation) {
		    checkDebugID(operation.instanceID);
		    emitEvent('onHostOperation', operation);
		  },
		  onSetState: function () {
		    emitEvent('onSetState');
		  },
		  onSetChildren: function (debugID, childDebugIDs) {
		    checkDebugID(debugID);
		    childDebugIDs.forEach(checkDebugID);
		    emitEvent('onSetChildren', debugID, childDebugIDs);
		  },
		  onBeforeMountComponent: function (debugID, element, parentDebugID) {
		    checkDebugID(debugID);
		    checkDebugID(parentDebugID, true);
		    emitEvent('onBeforeMountComponent', debugID, element, parentDebugID);
		    markBegin(debugID, 'mount');
		  },
		  onMountComponent: function (debugID) {
		    checkDebugID(debugID);
		    markEnd(debugID, 'mount');
		    emitEvent('onMountComponent', debugID);
		  },
		  onBeforeUpdateComponent: function (debugID, element) {
		    checkDebugID(debugID);
		    emitEvent('onBeforeUpdateComponent', debugID, element);
		    markBegin(debugID, 'update');
		  },
		  onUpdateComponent: function (debugID) {
		    checkDebugID(debugID);
		    markEnd(debugID, 'update');
		    emitEvent('onUpdateComponent', debugID);
		  },
		  onBeforeUnmountComponent: function (debugID) {
		    checkDebugID(debugID);
		    emitEvent('onBeforeUnmountComponent', debugID);
		    markBegin(debugID, 'unmount');
		  },
		  onUnmountComponent: function (debugID) {
		    checkDebugID(debugID);
		    markEnd(debugID, 'unmount');
		    emitEvent('onUnmountComponent', debugID);
		  },
		  onTestEvent: function () {
		    emitEvent('onTestEvent');
		  }
		};
	
		// TODO remove these when RN/www gets updated
		ReactDebugTool.addDevtool = ReactDebugTool.addHook;
		ReactDebugTool.removeDevtool = ReactDebugTool.removeHook;
	
		ReactDebugTool.addHook(ReactInvalidSetStateWarningHook);
		ReactDebugTool.addHook(ReactComponentTreeHook);
		var url = ExecutionEnvironment.canUseDOM && window.location.href || '';
		if (/[?&]react_perf\b/.test(url)) {
		  ReactDebugTool.beginProfiling();
		}
	
		module.exports = ReactDebugTool;
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))
	
	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {
	
		/* WEBPACK VAR INJECTION */(function(process) {/**
		 * Copyright 2016-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * 
		 */
	
		'use strict';
	
		var warning = __webpack_require__(8);
	
		if (process.env.NODE_ENV !== 'production') {
		  var processingChildContext = false;
	
		  var warnInvalidSetState = function () {
		    process.env.NODE_ENV !== 'production' ? warning(!processingChildContext, 'setState(...): Cannot call setState() inside getChildContext()') : void 0;
		  };
		}
	
		var ReactInvalidSetStateWarningHook = {
		  onBeginProcessingChildContext: function () {
		    processingChildContext = true;
		  },
		  onEndProcessingChildContext: function () {
		    processingChildContext = false;
		  },
		  onSetState: function () {
		    warnInvalidSetState();
		  }
		};
	
		module.exports = ReactInvalidSetStateWarningHook;
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))
	
	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {
	
		/* WEBPACK VAR INJECTION */(function(process) {/**
		 * Copyright 2014-2015, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 */
	
		'use strict';
	
		var emptyFunction = __webpack_require__(9);
	
		/**
		 * Similar to invariant but only logs a warning if the condition is not met.
		 * This can be used to log issues in development environments in critical
		 * paths. Removing the logging code for production environments will keep the
		 * same logic and follow the same code paths.
		 */
	
		var warning = emptyFunction;
	
		if (process.env.NODE_ENV !== 'production') {
		  (function () {
		    var printWarning = function printWarning(format) {
		      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		        args[_key - 1] = arguments[_key];
		      }
	
		      var argIndex = 0;
		      var message = 'Warning: ' + format.replace(/%s/g, function () {
		        return args[argIndex++];
		      });
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
	
		    warning = function warning(condition, format) {
		      if (format === undefined) {
		        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
		      }
	
		      if (format.indexOf('Failed Composite propType: ') === 0) {
		        return; // Ignore CompositeComponent proptype check.
		      }
	
		      if (!condition) {
		        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
		          args[_key2 - 2] = arguments[_key2];
		        }
	
		        printWarning.apply(undefined, [format].concat(args));
		      }
		    };
		  })();
		}
	
		module.exports = warning;
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))
	
	/***/ },
	/* 9 */
	/***/ function(module, exports) {
	
		"use strict";
	
		/**
		 * Copyright (c) 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * 
		 */
	
		function makeEmptyFunction(arg) {
		  return function () {
		    return arg;
		  };
		}
	
		/**
		 * This function accepts and discards inputs; it has no side effects. This is
		 * primarily useful idiomatically for overridable function endpoints which
		 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
		 */
		var emptyFunction = function emptyFunction() {};
	
		emptyFunction.thatReturns = makeEmptyFunction;
		emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
		emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
		emptyFunction.thatReturnsNull = makeEmptyFunction(null);
		emptyFunction.thatReturnsThis = function () {
		  return this;
		};
		emptyFunction.thatReturnsArgument = function (arg) {
		  return arg;
		};
	
		module.exports = emptyFunction;
	
	/***/ },
	/* 10 */
	/***/ function(module, exports) {
	
		/**
		 * Copyright 2016-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * 
		 */
	
		'use strict';
	
		var history = [];
	
		var ReactHostOperationHistoryHook = {
		  onHostOperation: function (operation) {
		    history.push(operation);
		  },
		  clearHistory: function () {
		    if (ReactHostOperationHistoryHook._preventClearing) {
		      // Should only be used for tests.
		      return;
		    }
	
		    history = [];
		  },
		  getHistory: function () {
		    return history;
		  }
		};
	
		module.exports = ReactHostOperationHistoryHook;
	
	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {
	
		/* WEBPACK VAR INJECTION */(function(process) {/**
		 * Copyright 2016-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * 
		 */
	
		'use strict';
	
		var _prodInvariant = __webpack_require__(12);
	
		var ReactCurrentOwner = __webpack_require__(13);
	
		var invariant = __webpack_require__(14);
		var warning = __webpack_require__(8);
	
		function isNative(fn) {
		  // Based on isNative() from Lodash
		  var funcToString = Function.prototype.toString;
		  var hasOwnProperty = Object.prototype.hasOwnProperty;
		  var reIsNative = RegExp('^' + funcToString
		  // Take an example native function source for comparison
		  .call(hasOwnProperty)
		  // Strip regex characters so we can use it for regex
		  .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
		  // Remove hasOwnProperty from the template to make it generic
		  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
		  try {
		    var source = funcToString.call(fn);
		    return reIsNative.test(source);
		  } catch (err) {
		    return false;
		  }
		}
	
		var canUseCollections =
		// Array.from
		typeof Array.from === 'function' &&
		// Map
		typeof Map === 'function' && isNative(Map) &&
		// Map.prototype.keys
		Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
		// Set
		typeof Set === 'function' && isNative(Set) &&
		// Set.prototype.keys
		Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);
	
		var setItem;
		var getItem;
		var removeItem;
		var getItemIDs;
		var addRoot;
		var removeRoot;
		var getRootIDs;
	
		if (canUseCollections) {
		  var itemMap = new Map();
		  var rootIDSet = new Set();
	
		  setItem = function (id, item) {
		    itemMap.set(id, item);
		  };
		  getItem = function (id) {
		    return itemMap.get(id);
		  };
		  removeItem = function (id) {
		    itemMap['delete'](id);
		  };
		  getItemIDs = function () {
		    return Array.from(itemMap.keys());
		  };
	
		  addRoot = function (id) {
		    rootIDSet.add(id);
		  };
		  removeRoot = function (id) {
		    rootIDSet['delete'](id);
		  };
		  getRootIDs = function () {
		    return Array.from(rootIDSet.keys());
		  };
		} else {
		  var itemByKey = {};
		  var rootByKey = {};
	
		  // Use non-numeric keys to prevent V8 performance issues:
		  // https://github.com/facebook/react/pull/7232
		  var getKeyFromID = function (id) {
		    return '.' + id;
		  };
		  var getIDFromKey = function (key) {
		    return parseInt(key.substr(1), 10);
		  };
	
		  setItem = function (id, item) {
		    var key = getKeyFromID(id);
		    itemByKey[key] = item;
		  };
		  getItem = function (id) {
		    var key = getKeyFromID(id);
		    return itemByKey[key];
		  };
		  removeItem = function (id) {
		    var key = getKeyFromID(id);
		    delete itemByKey[key];
		  };
		  getItemIDs = function () {
		    return Object.keys(itemByKey).map(getIDFromKey);
		  };
	
		  addRoot = function (id) {
		    var key = getKeyFromID(id);
		    rootByKey[key] = true;
		  };
		  removeRoot = function (id) {
		    var key = getKeyFromID(id);
		    delete rootByKey[key];
		  };
		  getRootIDs = function () {
		    return Object.keys(rootByKey).map(getIDFromKey);
		  };
		}
	
		var unmountedIDs = [];
	
		function purgeDeep(id) {
		  var item = getItem(id);
		  if (item) {
		    var childIDs = item.childIDs;
	
		    removeItem(id);
		    childIDs.forEach(purgeDeep);
		  }
		}
	
		function describeComponentFrame(name, source, ownerName) {
		  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
		}
	
		function getDisplayName(element) {
		  if (element == null) {
		    return '#empty';
		  } else if (typeof element === 'string' || typeof element === 'number') {
		    return '#text';
		  } else if (typeof element.type === 'string') {
		    return element.type;
		  } else {
		    return element.type.displayName || element.type.name || 'Unknown';
		  }
		}
	
		function describeID(id) {
		  var name = ReactComponentTreeHook.getDisplayName(id);
		  var element = ReactComponentTreeHook.getElement(id);
		  var ownerID = ReactComponentTreeHook.getOwnerID(id);
		  var ownerName;
		  if (ownerID) {
		    ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
		  }
		  process.env.NODE_ENV !== 'production' ? warning(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id) : void 0;
		  return describeComponentFrame(name, element && element._source, ownerName);
		}
	
		var ReactComponentTreeHook = {
		  onSetChildren: function (id, nextChildIDs) {
		    var item = getItem(id);
		    !item ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
		    item.childIDs = nextChildIDs;
	
		    for (var i = 0; i < nextChildIDs.length; i++) {
		      var nextChildID = nextChildIDs[i];
		      var nextChild = getItem(nextChildID);
		      !nextChild ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('140') : void 0;
		      !(nextChild.childIDs != null || typeof nextChild.element !== 'object' || nextChild.element == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : _prodInvariant('141') : void 0;
		      !nextChild.isMounted ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('71') : void 0;
		      if (nextChild.parentID == null) {
		        nextChild.parentID = id;
		        // TODO: This shouldn't be necessary but mounting a new root during in
		        // componentWillMount currently causes not-yet-mounted components to
		        // be purged from our tree data so their parent id is missing.
		      }
		      !(nextChild.parentID === id) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : _prodInvariant('142', nextChildID, nextChild.parentID, id) : void 0;
		    }
		  },
		  onBeforeMountComponent: function (id, element, parentID) {
		    var item = {
		      element: element,
		      parentID: parentID,
		      text: null,
		      childIDs: [],
		      isMounted: false,
		      updateCount: 0
		    };
		    setItem(id, item);
		  },
		  onBeforeUpdateComponent: function (id, element) {
		    var item = getItem(id);
		    if (!item || !item.isMounted) {
		      // We may end up here as a result of setState() in componentWillUnmount().
		      // In this case, ignore the element.
		      return;
		    }
		    item.element = element;
		  },
		  onMountComponent: function (id) {
		    var item = getItem(id);
		    !item ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
		    item.isMounted = true;
		    var isRoot = item.parentID === 0;
		    if (isRoot) {
		      addRoot(id);
		    }
		  },
		  onUpdateComponent: function (id) {
		    var item = getItem(id);
		    if (!item || !item.isMounted) {
		      // We may end up here as a result of setState() in componentWillUnmount().
		      // In this case, ignore the element.
		      return;
		    }
		    item.updateCount++;
		  },
		  onUnmountComponent: function (id) {
		    var item = getItem(id);
		    if (item) {
		      // We need to check if it exists.
		      // `item` might not exist if it is inside an error boundary, and a sibling
		      // error boundary child threw while mounting. Then this instance never
		      // got a chance to mount, but it still gets an unmounting event during
		      // the error boundary cleanup.
		      item.isMounted = false;
		      var isRoot = item.parentID === 0;
		      if (isRoot) {
		        removeRoot(id);
		      }
		    }
		    unmountedIDs.push(id);
		  },
		  purgeUnmountedComponents: function () {
		    if (ReactComponentTreeHook._preventPurging) {
		      // Should only be used for testing.
		      return;
		    }
	
		    for (var i = 0; i < unmountedIDs.length; i++) {
		      var id = unmountedIDs[i];
		      purgeDeep(id);
		    }
		    unmountedIDs.length = 0;
		  },
		  isMounted: function (id) {
		    var item = getItem(id);
		    return item ? item.isMounted : false;
		  },
		  getCurrentStackAddendum: function (topElement) {
		    var info = '';
		    if (topElement) {
		      var name = getDisplayName(topElement);
		      var owner = topElement._owner;
		      info += describeComponentFrame(name, topElement._source, owner && owner.getName());
		    }
	
		    var currentOwner = ReactCurrentOwner.current;
		    var id = currentOwner && currentOwner._debugID;
	
		    info += ReactComponentTreeHook.getStackAddendumByID(id);
		    return info;
		  },
		  getStackAddendumByID: function (id) {
		    var info = '';
		    while (id) {
		      info += describeID(id);
		      id = ReactComponentTreeHook.getParentID(id);
		    }
		    return info;
		  },
		  getChildIDs: function (id) {
		    var item = getItem(id);
		    return item ? item.childIDs : [];
		  },
		  getDisplayName: function (id) {
		    var element = ReactComponentTreeHook.getElement(id);
		    if (!element) {
		      return null;
		    }
		    return getDisplayName(element);
		  },
		  getElement: function (id) {
		    var item = getItem(id);
		    return item ? item.element : null;
		  },
		  getOwnerID: function (id) {
		    var element = ReactComponentTreeHook.getElement(id);
		    if (!element || !element._owner) {
		      return null;
		    }
		    return element._owner._debugID;
		  },
		  getParentID: function (id) {
		    var item = getItem(id);
		    return item ? item.parentID : null;
		  },
		  getSource: function (id) {
		    var item = getItem(id);
		    var element = item ? item.element : null;
		    var source = element != null ? element._source : null;
		    return source;
		  },
		  getText: function (id) {
		    var element = ReactComponentTreeHook.getElement(id);
		    if (typeof element === 'string') {
		      return element;
		    } else if (typeof element === 'number') {
		      return '' + element;
		    } else {
		      return null;
		    }
		  },
		  getUpdateCount: function (id) {
		    var item = getItem(id);
		    return item ? item.updateCount : 0;
		  },
	
	
		  getRootIDs: getRootIDs,
		  getRegisteredIDs: getItemIDs
		};
	
		module.exports = ReactComponentTreeHook;
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))
	
	/***/ },
	/* 12 */
	/***/ function(module, exports) {
	
		/**
		 * Copyright (c) 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * 
		 */
		'use strict';
	
		/**
		 * WARNING: DO NOT manually require this module.
		 * This is a replacement for `invariant(...)` used by the error code system
		 * and will _only_ be required by the corresponding babel pass.
		 * It always throws.
		 */
	
		function reactProdInvariant(code) {
		  var argCount = arguments.length - 1;
	
		  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;
	
		  for (var argIdx = 0; argIdx < argCount; argIdx++) {
		    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
		  }
	
		  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';
	
		  var error = new Error(message);
		  error.name = 'Invariant Violation';
		  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame
	
		  throw error;
		}
	
		module.exports = reactProdInvariant;
	
	/***/ },
	/* 13 */
	/***/ function(module, exports) {
	
		/**
		 * Copyright 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * 
		 */
	
		'use strict';
	
		/**
		 * Keeps track of the current owner.
		 *
		 * The current owner is the component who should own any components that are
		 * currently being constructed.
		 */
		var ReactCurrentOwner = {
	
		  /**
		   * @internal
		   * @type {ReactComponent}
		   */
		  current: null
	
		};
	
		module.exports = ReactCurrentOwner;
	
	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {
	
		/* WEBPACK VAR INJECTION */(function(process) {/**
		 * Copyright (c) 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 */
	
		'use strict';
	
		/**
		 * Use invariant() to assert state which your program assumes to be true.
		 *
		 * Provide sprintf-style format (only %s is supported) and arguments
		 * to provide information about what broke and what you were
		 * expecting.
		 *
		 * The invariant message will be stripped in production, but the invariant
		 * will remain to ensure logic does not differ in production.
		 */
	
		function invariant(condition, format, a, b, c, d, e, f) {
		  if (process.env.NODE_ENV !== 'production') {
		    if (format === undefined) {
		      throw new Error('invariant requires an error message argument');
		    }
		  }
	
		  if (!condition) {
		    var error;
		    if (format === undefined) {
		      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
		    } else {
		      var args = [a, b, c, d, e, f];
		      var argIndex = 0;
		      error = new Error(format.replace(/%s/g, function () {
		        return args[argIndex++];
		      }));
		      error.name = 'Invariant Violation';
		    }
	
		    error.framesToPop = 1; // we don't care about invariant's own frame
		    throw error;
		  }
		}
	
		module.exports = invariant;
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))
	
	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		/**
		 * Copyright (c) 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @typechecks
		 */
	
		var performance = __webpack_require__(16);
	
		var performanceNow;
	
		/**
		 * Detect if we can use `window.performance.now()` and gracefully fallback to
		 * `Date.now()` if it doesn't exist. We need to support Firefox < 15 for now
		 * because of Facebook's testing infrastructure.
		 */
		if (performance.now) {
		  performanceNow = function performanceNow() {
		    return performance.now();
		  };
		} else {
		  performanceNow = function performanceNow() {
		    return Date.now();
		  };
		}
	
		module.exports = performanceNow;
	
	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {
	
		/**
		 * Copyright (c) 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @typechecks
		 */
	
		'use strict';
	
		var ExecutionEnvironment = __webpack_require__(4);
	
		var performance;
	
		if (ExecutionEnvironment.canUseDOM) {
		  performance = window.performance || window.msPerformance || window.webkitPerformance;
		}
	
		module.exports = performance || {};
	
	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {
	
		/**
		 * Copyright (c) 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @typechecks
		 */
	
		'use strict';
	
		var camelize = __webpack_require__(18);
	
		var msPattern = /^-ms-/;
	
		/**
		 * Camelcases a hyphenated CSS property name, for example:
		 *
		 *   > camelizeStyleName('background-color')
		 *   < "backgroundColor"
		 *   > camelizeStyleName('-moz-transition')
		 *   < "MozTransition"
		 *   > camelizeStyleName('-ms-transition')
		 *   < "msTransition"
		 *
		 * As Andi Smith suggests
		 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
		 * is converted to lowercase `ms`.
		 *
		 * @param {string} string
		 * @return {string}
		 */
		function camelizeStyleName(string) {
		  return camelize(string.replace(msPattern, 'ms-'));
		}
	
		module.exports = camelizeStyleName;
	
	/***/ },
	/* 18 */
	/***/ function(module, exports) {
	
		"use strict";
	
		/**
		 * Copyright (c) 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @typechecks
		 */
	
		var _hyphenPattern = /-(.)/g;
	
		/**
		 * Camelcases a hyphenated string, for example:
		 *
		 *   > camelize('background-color')
		 *   < "backgroundColor"
		 *
		 * @param {string} string
		 * @return {string}
		 */
		function camelize(string) {
		  return string.replace(_hyphenPattern, function (_, character) {
		    return character.toUpperCase();
		  });
		}
	
		module.exports = camelize;
	
	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {
	
		/* WEBPACK VAR INJECTION */(function(process) {/**
		 * Copyright 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 */
	
		'use strict';
	
		var CSSProperty = __webpack_require__(3);
		var warning = __webpack_require__(8);
	
		var isUnitlessNumber = CSSProperty.isUnitlessNumber;
		var styleWarnings = {};
	
		/**
		 * Convert a value into the proper css writable value. The style name `name`
		 * should be logical (no hyphens), as specified
		 * in `CSSProperty.isUnitlessNumber`.
		 *
		 * @param {string} name CSS property name such as `topMargin`.
		 * @param {*} value CSS property value such as `10px`.
		 * @param {ReactDOMComponent} component
		 * @return {string} Normalized style value with dimensions applied.
		 */
		function dangerousStyleValue(name, value, component) {
		  // Note that we've removed escapeTextForBrowser() calls here since the
		  // whole string will be escaped when the attribute is injected into
		  // the markup. If you provide unsafe user data here they can inject
		  // arbitrary CSS which may be problematic (I couldn't repro this):
		  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
		  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
		  // This is not an XSS hole but instead a potential CSS injection issue
		  // which has lead to a greater discussion about how we're going to
		  // trust URLs moving forward. See #2115901
	
		  var isEmpty = value == null || typeof value === 'boolean' || value === '';
		  if (isEmpty) {
		    return '';
		  }
	
		  var isNonNumeric = isNaN(value);
		  if (isNonNumeric || value === 0 || isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
		    return '' + value; // cast to string
		  }
	
		  if (typeof value === 'string') {
		    if (process.env.NODE_ENV !== 'production') {
		      // Allow '0' to pass through without warning. 0 is already special and
		      // doesn't require units, so we don't need to warn about it.
		      if (component && value !== '0') {
		        var owner = component._currentElement._owner;
		        var ownerName = owner ? owner.getName() : null;
		        if (ownerName && !styleWarnings[ownerName]) {
		          styleWarnings[ownerName] = {};
		        }
		        var warned = false;
		        if (ownerName) {
		          var warnings = styleWarnings[ownerName];
		          warned = warnings[name];
		          if (!warned) {
		            warnings[name] = true;
		          }
		        }
		        if (!warned) {
		          process.env.NODE_ENV !== 'production' ? warning(false, 'a `%s` tag (owner: `%s`) was passed a numeric string value ' + 'for CSS property `%s` (value: `%s`) which will be treated ' + 'as a unitless number in a future version of React.', component._currentElement.type, ownerName || 'unknown', name, value) : void 0;
		        }
		      }
		    }
		    value = value.trim();
		  }
		  return value + 'px';
		}
	
		module.exports = dangerousStyleValue;
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))
	
	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {
	
		/**
		 * Copyright (c) 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @typechecks
		 */
	
		'use strict';
	
		var hyphenate = __webpack_require__(21);
	
		var msPattern = /^ms-/;
	
		/**
		 * Hyphenates a camelcased CSS property name, for example:
		 *
		 *   > hyphenateStyleName('backgroundColor')
		 *   < "background-color"
		 *   > hyphenateStyleName('MozTransition')
		 *   < "-moz-transition"
		 *   > hyphenateStyleName('msTransition')
		 *   < "-ms-transition"
		 *
		 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
		 * is converted to `-ms-`.
		 *
		 * @param {string} string
		 * @return {string}
		 */
		function hyphenateStyleName(string) {
		  return hyphenate(string).replace(msPattern, '-ms-');
		}
	
		module.exports = hyphenateStyleName;
	
	/***/ },
	/* 21 */
	/***/ function(module, exports) {
	
		'use strict';
	
		/**
		 * Copyright (c) 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @typechecks
		 */
	
		var _uppercasePattern = /([A-Z])/g;
	
		/**
		 * Hyphenates a camelcased string, for example:
		 *
		 *   > hyphenate('backgroundColor')
		 *   < "background-color"
		 *
		 * For CSS style names, use `hyphenateStyleName` instead which works properly
		 * with all vendor prefixes, including `ms`.
		 *
		 * @param {string} string
		 * @return {string}
		 */
		function hyphenate(string) {
		  return string.replace(_uppercasePattern, '-$1').toLowerCase();
		}
	
		module.exports = hyphenate;
	
	/***/ },
	/* 22 */
	/***/ function(module, exports) {
	
		/**
		 * Copyright (c) 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * 
		 * @typechecks static-only
		 */
	
		'use strict';
	
		/**
		 * Memoizes the return value of a function that accepts one string argument.
		 */
	
		function memoizeStringOnly(callback) {
		  var cache = {};
		  return function (string) {
		    if (!cache.hasOwnProperty(string)) {
		      cache[string] = callback.call(this, string);
		    }
		    return cache[string];
		  };
		}
	
		module.exports = memoizeStringOnly;
	
	/***/ }
	/******/ ]);

/***/ }),

/***/ "./node_modules/react-helmet/lib/Helmet.js":
/***/ (function(module, exports, __webpack_require__) {

	exports.__esModule = true;
	exports.Helmet = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactSideEffect = __webpack_require__("./node_modules/react-side-effect/lib/index.js");
	
	var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);
	
	var _deepEqual = __webpack_require__("./node_modules/deep-equal/index.js");
	
	var _deepEqual2 = _interopRequireDefault(_deepEqual);
	
	var _HelmetUtils = __webpack_require__("./node_modules/react-helmet/lib/HelmetUtils.js");
	
	var _HelmetConstants = __webpack_require__("./node_modules/react-helmet/lib/HelmetConstants.js");
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Helmet = function Helmet(Component) {
	    var _class, _temp;
	
	    return _temp = _class = function (_React$Component) {
	        _inherits(HelmetWrapper, _React$Component);
	
	        function HelmetWrapper() {
	            _classCallCheck(this, HelmetWrapper);
	
	            return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	        }
	
	        HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	            return !(0, _deepEqual2.default)(this.props, nextProps);
	        };
	
	        HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {
	            if (!nestedChildren) {
	                return null;
	            }
	
	            switch (child.type) {
	                case _HelmetConstants.TAG_NAMES.SCRIPT:
	                case _HelmetConstants.TAG_NAMES.NOSCRIPT:
	                    return {
	                        innerHTML: nestedChildren
	                    };
	
	                case _HelmetConstants.TAG_NAMES.STYLE:
	                    return {
	                        cssText: nestedChildren
	                    };
	            }
	
	            throw new Error("<" + child.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
	        };
	
	        HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {
	            var _extends2;
	
	            var child = _ref.child,
	                arrayTypeChildren = _ref.arrayTypeChildren,
	                newChildProps = _ref.newChildProps,
	                nestedChildren = _ref.nestedChildren;
	
	            return _extends({}, arrayTypeChildren, (_extends2 = {}, _extends2[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _extends2));
	        };
	
	        HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {
	            var _extends3, _extends4;
	
	            var child = _ref2.child,
	                newProps = _ref2.newProps,
	                newChildProps = _ref2.newChildProps,
	                nestedChildren = _ref2.nestedChildren;
	
	            switch (child.type) {
	                case _HelmetConstants.TAG_NAMES.TITLE:
	                    return _extends({}, newProps, (_extends3 = {}, _extends3[child.type] = nestedChildren, _extends3.titleAttributes = _extends({}, newChildProps), _extends3));
	
	                case _HelmetConstants.TAG_NAMES.BODY:
	                    return _extends({}, newProps, {
	                        bodyAttributes: _extends({}, newChildProps)
	                    });
	
	                case _HelmetConstants.TAG_NAMES.HTML:
	                    return _extends({}, newProps, {
	                        htmlAttributes: _extends({}, newChildProps)
	                    });
	            }
	
	            return _extends({}, newProps, (_extends4 = {}, _extends4[child.type] = _extends({}, newChildProps), _extends4));
	        };
	
	        HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
	            var newFlattenedProps = _extends({}, newProps);
	
	            Object.keys(arrayTypeChildren).forEach(function (arrayChildName) {
	                var _extends5;
	
	                newFlattenedProps = _extends({}, newFlattenedProps, (_extends5 = {}, _extends5[arrayChildName] = arrayTypeChildren[arrayChildName], _extends5));
	            });
	
	            return newFlattenedProps;
	        };
	
	        HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {
	            if (false) {
	                if (!_HelmetConstants.VALID_TAG_NAMES.some(function (name) {
	                    return child.type === name;
	                })) {
	                    if (typeof child.type === "function") {
	                        return (0, _HelmetUtils.warn)("You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.");
	                    }
	
	                    return (0, _HelmetUtils.warn)("Only elements types " + _HelmetConstants.VALID_TAG_NAMES.join(", ") + " are allowed. Helmet does not support rendering <" + child.type + "> elements. Refer to our API for more information.");
	                }
	
	                if (nestedChildren && typeof nestedChildren !== "string" && (!Array.isArray(nestedChildren) || nestedChildren.some(function (nestedChild) {
	                    return typeof nestedChild !== "string";
	                }))) {
	                    throw new Error("Helmet expects a string as a child of <" + child.type + ">. Did you forget to wrap your children in braces? ( <" + child.type + ">{``}</" + child.type + "> ) Refer to our API for more information.");
	                }
	            }
	
	            return true;
	        };
	
	        HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {
	            var _this2 = this;
	
	            var arrayTypeChildren = {};
	
	            _react2.default.Children.forEach(children, function (child) {
	                if (!child || !child.props) {
	                    return;
	                }
	
	                var _child$props = child.props,
	                    nestedChildren = _child$props.children,
	                    childProps = _objectWithoutProperties(_child$props, ["children"]);
	
	                var newChildProps = (0, _HelmetUtils.convertReactPropstoHtmlAttributes)(childProps);
	
	                _this2.warnOnInvalidChildren(child, nestedChildren);
	
	                switch (child.type) {
	                    case _HelmetConstants.TAG_NAMES.LINK:
	                    case _HelmetConstants.TAG_NAMES.META:
	                    case _HelmetConstants.TAG_NAMES.NOSCRIPT:
	                    case _HelmetConstants.TAG_NAMES.SCRIPT:
	                    case _HelmetConstants.TAG_NAMES.STYLE:
	                        arrayTypeChildren = _this2.flattenArrayTypeChildren({
	                            child: child,
	                            arrayTypeChildren: arrayTypeChildren,
	                            newChildProps: newChildProps,
	                            nestedChildren: nestedChildren
	                        });
	                        break;
	
	                    default:
	                        newProps = _this2.mapObjectTypeChildren({
	                            child: child,
	                            newProps: newProps,
	                            newChildProps: newChildProps,
	                            nestedChildren: nestedChildren
	                        });
	                        break;
	                }
	            });
	
	            newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
	            return newProps;
	        };
	
	        HelmetWrapper.prototype.render = function render() {
	            var _props = this.props,
	                children = _props.children,
	                props = _objectWithoutProperties(_props, ["children"]);
	
	            var newProps = _extends({}, props);
	
	            if (children) {
	                newProps = this.mapChildrenToProps(children, newProps);
	            }
	
	            return _react2.default.createElement(Component, newProps);
	        };
	
	        _createClass(HelmetWrapper, null, [{
	            key: "canUseDOM",
	
	
	            // Component.peek comes from react-side-effect:
	            // For testing, you may use a static peek() method available on the returned component.
	            // It lets you get the current state without resetting the mounted instance stack.
	            // Don’t use it for anything other than testing.
	
	            /**
	             * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
	             * @param {Object} bodyAttributes: {"className": "root"}
	             * @param {String} defaultTitle: "Default Title"
	             * @param {Boolean} encodeSpecialCharacters: true
	             * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
	             * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
	             * @param {Array} meta: [{"name": "description", "content": "Test description"}]
	             * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
	             * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
	             * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
	             * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
	             * @param {String} title: "Title"
	             * @param {Object} titleAttributes: {"itemprop": "name"}
	             * @param {String} titleTemplate: "MySite.com - %s"
	             */
	            set: function set(canUseDOM) {
	                Component.canUseDOM = canUseDOM;
	            }
	        }]);
	
	        return HelmetWrapper;
	    }(_react2.default.Component), _class.propTypes = {
	        base: _propTypes2.default.object,
	        bodyAttributes: _propTypes2.default.object,
	        children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
	        defaultTitle: _propTypes2.default.string,
	        encodeSpecialCharacters: _propTypes2.default.bool,
	        htmlAttributes: _propTypes2.default.object,
	        link: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        meta: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        noscript: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        onChangeClientState: _propTypes2.default.func,
	        script: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        style: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        title: _propTypes2.default.string,
	        titleAttributes: _propTypes2.default.object,
	        titleTemplate: _propTypes2.default.string
	    }, _class.defaultProps = {
	        encodeSpecialCharacters: true
	    }, _class.peek = Component.peek, _class.rewind = function () {
	        var mappedState = Component.rewind();
	        if (!mappedState) {
	            // provide fallback if mappedState is undefined
	            mappedState = (0, _HelmetUtils.mapStateOnServer)({
	                baseTag: [],
	                bodyAttributes: {},
	                encodeSpecialCharacters: true,
	                htmlAttributes: {},
	                linkTags: [],
	                metaTags: [],
	                noscriptTags: [],
	                scriptTags: [],
	                styleTags: [],
	                title: "",
	                titleAttributes: {}
	            });
	        }
	
	        return mappedState;
	    }, _temp;
	};
	
	var NullComponent = function NullComponent() {
	    return null;
	};
	
	var HelmetSideEffects = (0, _reactSideEffect2.default)(_HelmetUtils.reducePropsToState, _HelmetUtils.handleClientStateChange, _HelmetUtils.mapStateOnServer)(NullComponent);
	
	var HelmetExport = Helmet(HelmetSideEffects);
	HelmetExport.renderStatic = HelmetExport.rewind;
	
	exports.Helmet = HelmetExport;
	exports.default = HelmetExport;

/***/ }),

/***/ "./node_modules/react-helmet/lib/HelmetConstants.js":
/***/ (function(module, exports) {

	exports.__esModule = true;
	var ATTRIBUTE_NAMES = exports.ATTRIBUTE_NAMES = {
	    BODY: "bodyAttributes",
	    HTML: "htmlAttributes",
	    TITLE: "titleAttributes"
	};
	
	var TAG_NAMES = exports.TAG_NAMES = {
	    BASE: "base",
	    BODY: "body",
	    HEAD: "head",
	    HTML: "html",
	    LINK: "link",
	    META: "meta",
	    NOSCRIPT: "noscript",
	    SCRIPT: "script",
	    STYLE: "style",
	    TITLE: "title"
	};
	
	var VALID_TAG_NAMES = exports.VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function (name) {
	    return TAG_NAMES[name];
	});
	
	var TAG_PROPERTIES = exports.TAG_PROPERTIES = {
	    CHARSET: "charset",
	    CSS_TEXT: "cssText",
	    HREF: "href",
	    HTTPEQUIV: "http-equiv",
	    INNER_HTML: "innerHTML",
	    ITEM_PROP: "itemprop",
	    NAME: "name",
	    PROPERTY: "property",
	    REL: "rel",
	    SRC: "src"
	};
	
	var REACT_TAG_MAP = exports.REACT_TAG_MAP = {
	    "accesskey": "accessKey",
	    "charset": "charSet",
	    "class": "className",
	    "contenteditable": "contentEditable",
	    "contextmenu": "contextMenu",
	    "http-equiv": "httpEquiv",
	    "itemprop": "itemProp",
	    "tabindex": "tabIndex"
	};
	
	var HELMET_PROPS = exports.HELMET_PROPS = {
	    DEFAULT_TITLE: "defaultTitle",
	    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
	    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
	    TITLE_TEMPLATE: "titleTemplate"
	};
	
	var HTML_TAG_MAP = exports.HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (obj, key) {
	    obj[REACT_TAG_MAP[key]] = key;
	    return obj;
	}, {});
	
	var SELF_CLOSING_TAGS = exports.SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];
	
	var HELMET_ATTRIBUTE = exports.HELMET_ATTRIBUTE = "data-react-helmet";

/***/ }),

/***/ "./node_modules/react-helmet/lib/HelmetUtils.js":
/***/ (function(module, exports, __webpack_require__) {

	exports.__esModule = true;
	exports.warn = exports.requestIdleCallback = exports.reducePropsToState = exports.mapStateOnServer = exports.handleClientStateChange = exports.convertReactPropstoHtmlAttributes = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _objectAssign = __webpack_require__("./node_modules/object-assign/index.js");
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _HelmetConstants = __webpack_require__("./node_modules/react-helmet/lib/HelmetConstants.js");
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
	    var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	    if (encode === false) {
	        return String(str);
	    }
	
	    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
	};
	
	var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
	    var innermostTitle = getInnermostProperty(propsList, _HelmetConstants.TAG_NAMES.TITLE);
	    var innermostTemplate = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.TITLE_TEMPLATE);
	
	    if (innermostTemplate && innermostTitle) {
	        // use function arg to avoid need to escape $ characters
	        return innermostTemplate.replace(/%s/g, function () {
	            return innermostTitle;
	        });
	    }
	
	    var innermostDefaultTitle = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFAULT_TITLE);
	
	    return innermostTitle || innermostDefaultTitle || undefined;
	};
	
	var getOnChangeClientState = function getOnChangeClientState(propsList) {
	    return getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
	};
	
	var getAttributesFromPropsList = function getAttributesFromPropsList(tagType, propsList) {
	    return propsList.filter(function (props) {
	        return typeof props[tagType] !== "undefined";
	    }).map(function (props) {
	        return props[tagType];
	    }).reduce(function (tagAttrs, current) {
	        return _extends({}, tagAttrs, current);
	    }, {});
	};
	
	var getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {
	    return propsList.filter(function (props) {
	        return typeof props[_HelmetConstants.TAG_NAMES.BASE] !== "undefined";
	    }).map(function (props) {
	        return props[_HelmetConstants.TAG_NAMES.BASE];
	    }).reverse().reduce(function (innermostBaseTag, tag) {
	        if (!innermostBaseTag.length) {
	            var keys = Object.keys(tag);
	
	            for (var i = 0; i < keys.length; i++) {
	                var attributeKey = keys[i];
	                var lowerCaseAttributeKey = attributeKey.toLowerCase();
	
	                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
	                    return innermostBaseTag.concat(tag);
	                }
	            }
	        }
	
	        return innermostBaseTag;
	    }, []);
	};
	
	var getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {
	    // Calculate list of tags, giving priority innermost component (end of the propslist)
	    var approvedSeenTags = {};
	
	    return propsList.filter(function (props) {
	        if (Array.isArray(props[tagName])) {
	            return true;
	        }
	        if (typeof props[tagName] !== "undefined") {
	            warn("Helmet: " + tagName + " should be of type \"Array\". Instead found type \"" + _typeof(props[tagName]) + "\"");
	        }
	        return false;
	    }).map(function (props) {
	        return props[tagName];
	    }).reverse().reduce(function (approvedTags, instanceTags) {
	        var instanceSeenTags = {};
	
	        instanceTags.filter(function (tag) {
	            var primaryAttributeKey = void 0;
	            var keys = Object.keys(tag);
	            for (var i = 0; i < keys.length; i++) {
	                var attributeKey = keys[i];
	                var lowerCaseAttributeKey = attributeKey.toLowerCase();
	
	                // Special rule with link tags, since rel and href are both primary tags, rel takes priority
	                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
	                    primaryAttributeKey = lowerCaseAttributeKey;
	                }
	                // Special case for innerHTML which doesn't work lowercased
	                if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attributeKey === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT || attributeKey === _HelmetConstants.TAG_PROPERTIES.ITEM_PROP)) {
	                    primaryAttributeKey = attributeKey;
	                }
	            }
	
	            if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
	                return false;
	            }
	
	            var value = tag[primaryAttributeKey].toLowerCase();
	
	            if (!approvedSeenTags[primaryAttributeKey]) {
	                approvedSeenTags[primaryAttributeKey] = {};
	            }
	
	            if (!instanceSeenTags[primaryAttributeKey]) {
	                instanceSeenTags[primaryAttributeKey] = {};
	            }
	
	            if (!approvedSeenTags[primaryAttributeKey][value]) {
	                instanceSeenTags[primaryAttributeKey][value] = true;
	                return true;
	            }
	
	            return false;
	        }).reverse().forEach(function (tag) {
	            return approvedTags.push(tag);
	        });
	
	        // Update seen tags with tags from this instance
	        var keys = Object.keys(instanceSeenTags);
	        for (var i = 0; i < keys.length; i++) {
	            var attributeKey = keys[i];
	            var tagUnion = (0, _objectAssign2.default)({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);
	
	            approvedSeenTags[attributeKey] = tagUnion;
	        }
	
	        return approvedTags;
	    }, []).reverse();
	};
	
	var getInnermostProperty = function getInnermostProperty(propsList, property) {
	    for (var i = propsList.length - 1; i >= 0; i--) {
	        var props = propsList[i];
	
	        if (props.hasOwnProperty(property)) {
	            return props[property];
	        }
	    }
	
	    return null;
	};
	
	var reducePropsToState = function reducePropsToState(propsList) {
	    return {
	        baseTag: getBaseTagFromPropsList([_HelmetConstants.TAG_PROPERTIES.HREF], propsList),
	        bodyAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.BODY, propsList),
	        encode: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
	        htmlAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.HTML, propsList),
	        linkTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.LINK, [_HelmetConstants.TAG_PROPERTIES.REL, _HelmetConstants.TAG_PROPERTIES.HREF], propsList),
	        metaTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.META, [_HelmetConstants.TAG_PROPERTIES.NAME, _HelmetConstants.TAG_PROPERTIES.CHARSET, _HelmetConstants.TAG_PROPERTIES.HTTPEQUIV, _HelmetConstants.TAG_PROPERTIES.PROPERTY, _HelmetConstants.TAG_PROPERTIES.ITEM_PROP], propsList),
	        noscriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.NOSCRIPT, [_HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
	        onChangeClientState: getOnChangeClientState(propsList),
	        scriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.SCRIPT, [_HelmetConstants.TAG_PROPERTIES.SRC, _HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
	        styleTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.STYLE, [_HelmetConstants.TAG_PROPERTIES.CSS_TEXT], propsList),
	        title: getTitleFromPropsList(propsList),
	        titleAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.TITLE, propsList)
	    };
	};
	
	var requestIdleCallback = function () {
	    if (typeof window !== "undefined" && typeof window.requestIdleCallback !== "undefined") {
	        return window.requestIdleCallback;
	    }
	
	    return function (cb) {
	        var start = Date.now();
	        return setTimeout(function () {
	            cb({
	                didTimeout: false,
	                timeRemaining: function timeRemaining() {
	                    return Math.max(0, 50 - (Date.now() - start));
	                }
	            });
	        }, 1);
	    };
	}();
	
	var cancelIdleCallback = function () {
	    if (typeof window !== "undefined" && typeof window.cancelIdleCallback !== "undefined") {
	        return window.cancelIdleCallback;
	    }
	
	    return function (id) {
	        return clearTimeout(id);
	    };
	}();
	
	var warn = function warn(msg) {
	    return console && typeof console.warn === "function" && console.warn(msg);
	};
	
	var _helmetIdleCallback = null;
	
	var handleClientStateChange = function handleClientStateChange(newState) {
	    var baseTag = newState.baseTag,
	        bodyAttributes = newState.bodyAttributes,
	        htmlAttributes = newState.htmlAttributes,
	        linkTags = newState.linkTags,
	        metaTags = newState.metaTags,
	        noscriptTags = newState.noscriptTags,
	        onChangeClientState = newState.onChangeClientState,
	        scriptTags = newState.scriptTags,
	        styleTags = newState.styleTags,
	        title = newState.title,
	        titleAttributes = newState.titleAttributes;
	
	
	    if (_helmetIdleCallback) {
	        cancelIdleCallback(_helmetIdleCallback);
	    }
	
	    _helmetIdleCallback = requestIdleCallback(function () {
	        updateAttributes(_HelmetConstants.TAG_NAMES.BODY, bodyAttributes);
	        updateAttributes(_HelmetConstants.TAG_NAMES.HTML, htmlAttributes);
	
	        updateTitle(title, titleAttributes);
	
	        var tagUpdates = {
	            baseTag: updateTags(_HelmetConstants.TAG_NAMES.BASE, baseTag),
	            linkTags: updateTags(_HelmetConstants.TAG_NAMES.LINK, linkTags),
	            metaTags: updateTags(_HelmetConstants.TAG_NAMES.META, metaTags),
	            noscriptTags: updateTags(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags),
	            scriptTags: updateTags(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags),
	            styleTags: updateTags(_HelmetConstants.TAG_NAMES.STYLE, styleTags)
	        };
	
	        var addedTags = {};
	        var removedTags = {};
	
	        Object.keys(tagUpdates).forEach(function (tagType) {
	            var _tagUpdates$tagType = tagUpdates[tagType],
	                newTags = _tagUpdates$tagType.newTags,
	                oldTags = _tagUpdates$tagType.oldTags;
	
	
	            if (newTags.length) {
	                addedTags[tagType] = newTags;
	            }
	            if (oldTags.length) {
	                removedTags[tagType] = tagUpdates[tagType].oldTags;
	            }
	        });
	
	        _helmetIdleCallback = null;
	        onChangeClientState(newState, addedTags, removedTags);
	    });
	};
	
	var updateTitle = function updateTitle(title, attributes) {
	    if (typeof title !== "undefined" && document.title !== title) {
	        document.title = Array.isArray(title) ? title.join("") : title;
	    }
	
	    updateAttributes(_HelmetConstants.TAG_NAMES.TITLE, attributes);
	};
	
	var updateAttributes = function updateAttributes(tagName, attributes) {
	    var elementTag = document.getElementsByTagName(tagName)[0];
	
	    if (!elementTag) {
	        return;
	    }
	
	    var helmetAttributeString = elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
	    var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
	    var attributesToRemove = [].concat(helmetAttributes);
	    var attributeKeys = Object.keys(attributes);
	
	    for (var i = 0; i < attributeKeys.length; i++) {
	        var attribute = attributeKeys[i];
	        var value = attributes[attribute] || "";
	
	        if (elementTag.getAttribute(attribute) !== value) {
	            elementTag.setAttribute(attribute, value);
	        }
	
	        if (helmetAttributes.indexOf(attribute) === -1) {
	            helmetAttributes.push(attribute);
	        }
	
	        var indexToSave = attributesToRemove.indexOf(attribute);
	        if (indexToSave !== -1) {
	            attributesToRemove.splice(indexToSave, 1);
	        }
	    }
	
	    for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
	        elementTag.removeAttribute(attributesToRemove[_i]);
	    }
	
	    if (helmetAttributes.length === attributesToRemove.length) {
	        elementTag.removeAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
	    } else if (elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
	        elementTag.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, attributeKeys.join(","));
	    }
	};
	
	var updateTags = function updateTags(type, tags) {
	    var headElement = document.head || document.querySelector(_HelmetConstants.TAG_NAMES.HEAD);
	    var tagNodes = headElement.querySelectorAll(type + "[" + _HelmetConstants.HELMET_ATTRIBUTE + "]");
	    var oldTags = Array.prototype.slice.call(tagNodes);
	    var newTags = [];
	    var indexToDelete = void 0;
	
	    if (tags && tags.length) {
	        tags.forEach(function (tag) {
	            var newElement = document.createElement(type);
	
	            for (var attribute in tag) {
	                if (tag.hasOwnProperty(attribute)) {
	                    if (attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML) {
	                        newElement.innerHTML = tag.innerHTML;
	                    } else if (attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
	                        if (newElement.styleSheet) {
	                            newElement.styleSheet.cssText = tag.cssText;
	                        } else {
	                            newElement.appendChild(document.createTextNode(tag.cssText));
	                        }
	                    } else {
	                        var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
	                        newElement.setAttribute(attribute, value);
	                    }
	                }
	            }
	
	            newElement.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, "true");
	
	            // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.
	            if (oldTags.some(function (existingTag, index) {
	                indexToDelete = index;
	                return newElement.isEqualNode(existingTag);
	            })) {
	                oldTags.splice(indexToDelete, 1);
	            } else {
	                newTags.push(newElement);
	            }
	        });
	    }
	
	    oldTags.forEach(function (tag) {
	        return tag.parentNode.removeChild(tag);
	    });
	    newTags.forEach(function (tag) {
	        return headElement.appendChild(tag);
	    });
	
	    return {
	        oldTags: oldTags,
	        newTags: newTags
	    };
	};
	
	var generateElementAttributesAsString = function generateElementAttributesAsString(attributes) {
	    return Object.keys(attributes).reduce(function (str, key) {
	        var attr = typeof attributes[key] !== "undefined" ? key + "=\"" + attributes[key] + "\"" : "" + key;
	        return str ? str + " " + attr : attr;
	    }, "");
	};
	
	var generateTitleAsString = function generateTitleAsString(type, title, attributes, encode) {
	    var attributeString = generateElementAttributesAsString(attributes);
	    return attributeString ? "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeString + ">" + encodeSpecialCharacters(title, encode) + "</" + type + ">" : "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(title, encode) + "</" + type + ">";
	};
	
	var generateTagsAsString = function generateTagsAsString(type, tags, encode) {
	    return tags.reduce(function (str, tag) {
	        var attributeHtml = Object.keys(tag).filter(function (attribute) {
	            return !(attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT);
	        }).reduce(function (string, attribute) {
	            var attr = typeof tag[attribute] === "undefined" ? attribute : attribute + "=\"" + encodeSpecialCharacters(tag[attribute], encode) + "\"";
	            return string ? string + " " + attr : attr;
	        }, "");
	
	        var tagContent = tag.innerHTML || tag.cssText || "";
	
	        var isSelfClosing = _HelmetConstants.SELF_CLOSING_TAGS.indexOf(type) === -1;
	
	        return str + "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
	    }, "");
	};
	
	var convertElementAttributestoReactProps = function convertElementAttributestoReactProps(attributes) {
	    var initProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    return Object.keys(attributes).reduce(function (obj, key) {
	        obj[_HelmetConstants.REACT_TAG_MAP[key] || key] = attributes[key];
	        return obj;
	    }, initProps);
	};
	
	var convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes(props) {
	    var initAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    return Object.keys(props).reduce(function (obj, key) {
	        obj[_HelmetConstants.HTML_TAG_MAP[key] || key] = props[key];
	        return obj;
	    }, initAttributes);
	};
	
	var generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title, attributes) {
	    var _initProps;
	
	    // assigning into an array to define toString function on it
	    var initProps = (_initProps = {
	        key: title
	    }, _initProps[_HelmetConstants.HELMET_ATTRIBUTE] = true, _initProps);
	    var props = convertElementAttributestoReactProps(attributes, initProps);
	
	    return [_react2.default.createElement(_HelmetConstants.TAG_NAMES.TITLE, props, title)];
	};
	
	var generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
	    return tags.map(function (tag, i) {
	        var _mappedTag;
	
	        var mappedTag = (_mappedTag = {
	            key: i
	        }, _mappedTag[_HelmetConstants.HELMET_ATTRIBUTE] = true, _mappedTag);
	
	        Object.keys(tag).forEach(function (attribute) {
	            var mappedAttribute = _HelmetConstants.REACT_TAG_MAP[attribute] || attribute;
	
	            if (mappedAttribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || mappedAttribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
	                var content = tag.innerHTML || tag.cssText;
	                mappedTag.dangerouslySetInnerHTML = { __html: content };
	            } else {
	                mappedTag[mappedAttribute] = tag[attribute];
	            }
	        });
	
	        return _react2.default.createElement(type, mappedTag);
	    });
	};
	
	var getMethodsForTag = function getMethodsForTag(type, tags, encode) {
	    switch (type) {
	        case _HelmetConstants.TAG_NAMES.TITLE:
	            return {
	                toComponent: function toComponent() {
	                    return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes, encode);
	                },
	                toString: function toString() {
	                    return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);
	                }
	            };
	        case _HelmetConstants.ATTRIBUTE_NAMES.BODY:
	        case _HelmetConstants.ATTRIBUTE_NAMES.HTML:
	            return {
	                toComponent: function toComponent() {
	                    return convertElementAttributestoReactProps(tags);
	                },
	                toString: function toString() {
	                    return generateElementAttributesAsString(tags);
	                }
	            };
	        default:
	            return {
	                toComponent: function toComponent() {
	                    return generateTagsAsReactComponent(type, tags);
	                },
	                toString: function toString() {
	                    return generateTagsAsString(type, tags, encode);
	                }
	            };
	    }
	};
	
	var mapStateOnServer = function mapStateOnServer(_ref) {
	    var baseTag = _ref.baseTag,
	        bodyAttributes = _ref.bodyAttributes,
	        encode = _ref.encode,
	        htmlAttributes = _ref.htmlAttributes,
	        linkTags = _ref.linkTags,
	        metaTags = _ref.metaTags,
	        noscriptTags = _ref.noscriptTags,
	        scriptTags = _ref.scriptTags,
	        styleTags = _ref.styleTags,
	        _ref$title = _ref.title,
	        title = _ref$title === undefined ? "" : _ref$title,
	        titleAttributes = _ref.titleAttributes;
	    return {
	        base: getMethodsForTag(_HelmetConstants.TAG_NAMES.BASE, baseTag, encode),
	        bodyAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),
	        htmlAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),
	        link: getMethodsForTag(_HelmetConstants.TAG_NAMES.LINK, linkTags, encode),
	        meta: getMethodsForTag(_HelmetConstants.TAG_NAMES.META, metaTags, encode),
	        noscript: getMethodsForTag(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags, encode),
	        script: getMethodsForTag(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags, encode),
	        style: getMethodsForTag(_HelmetConstants.TAG_NAMES.STYLE, styleTags, encode),
	        title: getMethodsForTag(_HelmetConstants.TAG_NAMES.TITLE, { title: title, titleAttributes: titleAttributes }, encode)
	    };
	};
	
	exports.convertReactPropstoHtmlAttributes = convertReactPropstoHtmlAttributes;
	exports.handleClientStateChange = handleClientStateChange;
	exports.mapStateOnServer = mapStateOnServer;
	exports.reducePropsToState = reducePropsToState;
	exports.requestIdleCallback = requestIdleCallback;
	exports.warn = warn;

/***/ }),

/***/ "./node_modules/react-side-effect/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _exenv = __webpack_require__("./node_modules/exenv/index.js");
	
	var _exenv2 = _interopRequireDefault(_exenv);
	
	var _shallowequal = __webpack_require__("./node_modules/shallowequal/index.js");
	
	var _shallowequal2 = _interopRequireDefault(_shallowequal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	module.exports = function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
	  if (typeof reducePropsToState !== 'function') {
	    throw new Error('Expected reducePropsToState to be a function.');
	  }
	  if (typeof handleStateChangeOnClient !== 'function') {
	    throw new Error('Expected handleStateChangeOnClient to be a function.');
	  }
	  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
	    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
	  }
	
	  function getDisplayName(WrappedComponent) {
	    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	  }
	
	  return function wrap(WrappedComponent) {
	    if (typeof WrappedComponent !== 'function') {
	      throw new Error('Expected WrappedComponent to be a React component.');
	    }
	
	    var mountedInstances = [];
	    var state = void 0;
	
	    function emitChange() {
	      state = reducePropsToState(mountedInstances.map(function (instance) {
	        return instance.props;
	      }));
	
	      if (SideEffect.canUseDOM) {
	        handleStateChangeOnClient(state);
	      } else if (mapStateOnServer) {
	        state = mapStateOnServer(state);
	      }
	    }
	
	    var SideEffect = function (_Component) {
	      _inherits(SideEffect, _Component);
	
	      function SideEffect() {
	        _classCallCheck(this, SideEffect);
	
	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	      }
	
	      // Try to use displayName of wrapped component
	      SideEffect.peek = function peek() {
	        return state;
	      };
	
	      // Expose canUseDOM so tests can monkeypatch it
	
	
	      SideEffect.rewind = function rewind() {
	        if (SideEffect.canUseDOM) {
	          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
	        }
	
	        var recordedState = state;
	        state = undefined;
	        mountedInstances = [];
	        return recordedState;
	      };
	
	      SideEffect.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	        return !(0, _shallowequal2.default)(nextProps, this.props);
	      };
	
	      SideEffect.prototype.componentWillMount = function componentWillMount() {
	        mountedInstances.push(this);
	        emitChange();
	      };
	
	      SideEffect.prototype.componentDidUpdate = function componentDidUpdate() {
	        emitChange();
	      };
	
	      SideEffect.prototype.componentWillUnmount = function componentWillUnmount() {
	        var index = mountedInstances.indexOf(this);
	        mountedInstances.splice(index, 1);
	        emitChange();
	      };
	
	      SideEffect.prototype.render = function render() {
	        return _react2.default.createElement(WrappedComponent, this.props);
	      };
	
	      return SideEffect;
	    }(_react.Component);
	
	    SideEffect.displayName = 'SideEffect(' + getDisplayName(WrappedComponent) + ')';
	    SideEffect.canUseDOM = _exenv2.default.canUseDOM;
	
	
	    return SideEffect;
	  };
	};

/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/***/ (function(module, exports) {

	module.exports = function shallowEqual(objA, objB, compare, compareContext) {
	
	    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
	
	    if(ret !== void 0) {
	        return !!ret;
	    }
	
	    if(objA === objB) {
	        return true;
	    }
	
	    if(typeof objA !== 'object' || !objA ||
	       typeof objB !== 'object' || !objB) {
	        return false;
	    }
	
	    var keysA = Object.keys(objA);
	    var keysB = Object.keys(objB);
	
	    if(keysA.length !== keysB.length) {
	        return false;
	    }
	
	    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
	
	    // Test for A's keys different from B.
	    for(var idx = 0; idx < keysA.length; idx++) {
	
	        var key = keysA[idx];
	
	        if(!bHasOwnProperty(key)) {
	            return false;
	        }
	
	        var valueA = objA[key];
	        var valueB = objB[key];
	
	        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
	
	        if(ret === false ||
	           ret === void 0 && valueA !== valueB) {
	            return false;
	        }
	
	    }
	
	    return true;
	
	};


/***/ }),

/***/ "./src/components/Link.tsx":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const React = __webpack_require__("./node_modules/react/react.js");
	const LinkSrc = __webpack_require__("./node_modules/gatsby-link/index.js").default;
	exports.Link = props => {
	    if (props.href) {
	        return React.createElement("a", { href: props.href, className: props.className, target: "_blank", rel: "noopener", role: props.role }, props.children);
	    } else if (props.activeClassName || props.activeStyle) {
	        return React.createElement(LinkSrc, { className: props.className, to: props.to, role: props.role, activeClassName: props.activeClassName, activeStyle: props.activeStyle, exact: props.exact }, props.children);
	    } else {
	        return React.createElement(LinkSrc, { className: props.className, to: props.to, role: props.role }, props.children);
	    }
	};

/***/ }),

/***/ "./src/components/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__("./src/components/primitives.tsx"));
	__export(__webpack_require__("./src/components/Link.tsx"));

/***/ }),

/***/ "./src/components/primitives.tsx":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const React = __webpack_require__("./node_modules/react/react.js");
	const G = __webpack_require__("./node_modules/glamorous/dist/glamorous.cjs.js");
	exports.Block = props => React.createElement(G.Div, Object.assign({ display: "block" }, props));
	exports.InlineBlock = props => React.createElement(G.Div, Object.assign({ display: "inline-block" }, props));
	exports.Flex = props => React.createElement(G.Div, Object.assign({ display: "flex" }, props));
	exports.Row = props => React.createElement(G.Div, Object.assign({ display: "flex", flexDirection: "row" }, props));
	exports.Col = props => React.createElement(G.Div, Object.assign({ display: "flex", flexDirection: "column" }, props));
	exports.Button = props => React.createElement(G.Button, Object.assign({}, props));
	exports.A = props => React.createElement(G.A, Object.assign({}, props));
	exports.H1 = props => React.createElement(G.H1, Object.assign({}, props));
	exports.H2 = props => React.createElement(G.H2, Object.assign({}, props));
	exports.H3 = props => React.createElement(G.H3, Object.assign({}, props));
	exports.H4 = props => React.createElement(G.H4, Object.assign({}, props));
	exports.H5 = props => React.createElement(G.H5, Object.assign({}, props));
	exports.H6 = props => React.createElement(G.H6, Object.assign({}, props));
	exports.Input = props => React.createElement(G.Input, Object.assign({}, props));
	exports.Textarea = props => React.createElement(G.Textarea, Object.assign({}, props));
	exports.Label = props => React.createElement(G.Label, Object.assign({}, props));
	exports.Span = props => React.createElement(G.Span, Object.assign({}, props));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"plugins\":[\"/Users/jared/workspace/github/jaredpalmer/jaredpalmer.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\"]}!./node_modules/ts-loader/index.js?{\"compilerOptions\":{\"target\":\"esnext\",\"experimentalDecorators\":true,\"jsx\":\"react\",\"module\":\"commonjs\"},\"transpileOnly\":true}!./src/pages/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const React = __webpack_require__("./node_modules/react/react.js");
	const components_1 = __webpack_require__("./src/components/index.tsx");
	const theme_1 = __webpack_require__("./src/theme.tsx");
	const react_helmet_1 = __webpack_require__("./node_modules/react-helmet/lib/Helmet.js");
	const talks = [{
	    title: 'An Introduction to Formik',
	    link: 'https://www.meetup.com/ReactNYC/events/241682836/',
	    date: 'August 15th, 2017',
	    location: 'Spotify'
	}, {
	    title: 'From Styled Components to JsxStyle',
	    link: 'https://www.meetup.com/ReactNYC/events/240949398/',
	    date: 'August 9th, 2017',
	    location: 'Interbrand Corporation'
	}, {
	    title: 'The Road to ReasonML',
	    link: 'https://youtu.be/0GMOHeKkfKM?t=2m2s',
	    date: 'June 20th, 2017',
	    location: 'ReasonML NYC'
	}];
	const oss = [{
	    title: 'Formik',
	    description: 'Forms in React, without tears',
	    link: 'https://github.com/jaredpalmer/formik'
	}, {
	    title: 'Razzle',
	    description: 'Create server-rendered universal React, Preact, and Reason React applications with no build configuration',
	    link: 'https://github.com/jaredpalmer/razzle'
	}, {
	    title: 'Backpack',
	    description: 'A mimimalistic build system for Node.js applications',
	    link: 'https://github.com/palmerhq/backpack'
	}];
	class Index extends React.Component {
	    render() {
	        return React.createElement(components_1.Block, { padding: "1rem", backgroundColor: "#000", height: "100%" }, React.createElement(react_helmet_1.default, null, React.createElement("body", { className: "bg-black" })), React.createElement(components_1.Block, { marginBottom: "4rem" }, React.createElement(components_1.H1, { marginBottom: "1rem", fontFamily: theme_1.FONTS.monospace, fontWeight: "600", fontSize: "1rem" }, "@jaredpalmer"), React.createElement(components_1.Block, null, React.createElement(components_1.A, { marginRight: "1rem", href: "https://facebook.com/jaredpalmer", target: "_blank", rel: "noopener" }, React.createElement("svg", { className: "svg-1 svg-gray", viewBox: "0 0 38 38", "aria-hidden": "true" }, React.createElement("title", null, "Facebook"), React.createElement("path", { d: "M36.5 0h-35C.3 0 0 .3 0 1.5v34.9C0 37.7.3 38 1.5 38h18.9V23.4h-5.8v-5.8h5.8v-4.4c0-5.1 2.8-7.8 7.4-7.8 2.2 0 4.3.2 4.3.2v4.7h-2.8c-2.5 0-3.1 1.8-3.1 3.5v3.8h6l-.8 5.8h-5.3V38h10.2c1.2 0 1.5-.3 1.5-1.5v-35C38 .3 37.7 0 36.5 0z" }))), React.createElement(components_1.A, { marginRight: "1rem", href: "https://twitter.com/jaredpalmer", target: "_blank", rel: "noopener" }, React.createElement("svg", { className: "svg-1 svg-gray", viewBox: "0 0 38 38", "aria-hidden": "true" }, React.createElement("title", null, "Twitter"), React.createElement("path", { d: "M37.9 8c-1.4.6-2.9 1-4.4 1.2 1.6-1 2.8-2.5 3.4-4.3-1.5.9-3.1 1.5-4.9 1.9-1.4-1.5-3.4-2.4-5.6-2.4-4.3 0-7.7 3.5-7.7 7.7 0 .6.1 1.2.2 1.8-6.4-.3-12.1-3.4-15.9-8.1-.7 1.1-1 2.5-1 3.9 0 2.7 1.2 5 3.2 6.4-1.3 0-2.3-.4-3.7-1v.1c0 3.7 2.9 6.9 6.4 7.6-.9.2-1.4.3-2.1.3-.5 0-.9 0-1.4-.1 1 3.1 3.9 5.3 7.2 5.4-2.6 2.1-6 3.3-9.6 3.3-.6 0-1.2 0-1.8-.1C3.6 33.7 7.7 35 12 35c14.2 0 22-11.8 22-22v-1c1.5-1.1 2.8-2.5 3.9-4" }))), React.createElement(components_1.A, { marginRight: "1rem", href: "https://github.com/jaredpalmer", target: "_blank", rel: "noopener" }, React.createElement("svg", { className: "svg-1", viewBox: "0 0 33 32", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, React.createElement("g", { id: "Page-1", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" }, React.createElement("g", { id: "github", fill: "#000" }, React.createElement("path", { d: "M16.3,0 C7.3,0 -3.55271368e-15,7.3 -3.55271368e-15,16.3 C-3.55271368e-15,23.5 4.7,29.6 11.1,31.8 C11.9,31.9 12.2,31.4 12.2,31 L12.2,28.2 C7.7,29.2 6.7,26 6.7,26 C6,24.2 5,23.7 5,23.7 C3.5,22.7 5.1,22.7 5.1,22.7 C6.7,22.8 7.6,24.4 7.6,24.4 C9.1,26.9 11.4,26.2 12.3,25.8 C12.4,24.7 12.9,24 13.3,23.6 C9.7,23.2 5.9,21.8 5.9,15.5 C5.9,13.7 6.5,12.3 7.6,11.1 C7.4,10.7 6.9,9 7.8,6.8 C7.8,6.8 9.2,6.4 12.3,8.5 C13.6,8.1 15,8 16.4,8 C17.8,8 19.2,8.2 20.5,8.5 C23.6,6.4 25,6.8 25,6.8 C25.9,9 25.3,10.7 25.2,11.1 C26.2,12.2 26.9,13.7 26.9,15.5 C26.9,21.8 23.1,23.1 19.5,23.5 C20.1,24 20.6,25 20.6,26.5 L20.6,31 C20.6,31.4 20.9,31.9 21.7,31.8 C28.2,29.6 32.8,23.5 32.8,16.3 C32.6,7.3 25.3,0 16.3,0 L16.3,0 Z", id: "Shape" }))))))), React.createElement(components_1.H2, { margin: "1rem 0 2rem", fontSize: "1.5rem" }, "Events / Talks"), talks.map((talk, i) => React.createElement(components_1.Block, { key: `talk=${i}`, marginBottom: "1rem", css: {
	                ':hover h3': {
	                    textDecoration: 'underline'
	                }
	            } }, React.createElement(components_1.A, { href: talk.link, target: "_blank", rel: "noopener" }, React.createElement(components_1.H3, { marginBottom: ".25rem", fontSize: "1rem", color: "#fff" }, talk.title), React.createElement(components_1.Block, { color: "#ababab", fontSize: "85%" }, React.createElement(components_1.Span, null, talk.date), " @ ", React.createElement(components_1.Span, null, talk.location))))), React.createElement(components_1.Block, { maxWidth: "30rem" }, React.createElement(components_1.H2, { margin: "4rem 0 2rem", fontSize: "1.5rem" }, "Open Source Projects"), oss.map((repo, i) => React.createElement(components_1.Block, { key: `repo-${i}`, marginBottom: "1rem", css: {
	                ':hover h3': {
	                    textDecoration: 'underline'
	                }
	            } }, React.createElement(components_1.A, { href: repo.link, target: "_blank", rel: "noopener" }, React.createElement(components_1.H3, { marginBottom: ".25rem", fontSize: "1rem", color: "#fff" }, repo.title), React.createElement(components_1.Block, { color: "#ababab", fontSize: "85%" }, repo.description))))));
	    }
	}
	exports.default = Index;

/***/ }),

/***/ "./src/theme.tsx":
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.FONTS = {
	    sans: 'system-ui, "San Francisco", -apple-system, BlinkMacSystemFont, ".SFNSText-Regular", "Helvetica Neue", Helvetica, sans-serif',
	    monospace: '"SFMono-Regular", "SF Mono", Consolas, "Liberation Mono", Menlo, Courier, monospace'
	};

/***/ })

});
//# sourceMappingURL=page-component---src-pages-index-tsx-c044c7515dcc2315a174.js.map