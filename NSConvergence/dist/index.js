(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"), (function webpackLoadOptionalExternalModule() { try { return require("framer-package-loader!@framer/framer.default"); } catch(e) {} }()), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["framer", "framer-package-loader!@framer/framer.default", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer"), (function webpackLoadOptionalExternalModule() { try { return require("framer-package-loader!@framer/framer.default"); } catch(e) {} }()), require("react")) : factory(root["Framer"], root["framer-package-loader!@framer/framer.default"], root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_default__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		try { modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); } catch (error) { module.exports = { error } }
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	// asset url
/******/ 	var __module_i = eval("typeof module !== 'undefined' ? module.i : ''");
/******/ 	var __framer_package = (/(node_modules\/.*)\/(?:build|dist)\/index\.js$/.exec(__module_i) || [])[1];
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./PageLink.tsx": "./code/PageLink.tsx",
	"./PageScroller.tsx": "./code/PageScroller.tsx",
	"./Pagging.tsx": "./code/Pagging.tsx",
	"./PaggingLink.tsx": "./code/PaggingLink.tsx",
	"./PresentationFrame.tsx": "./code/PresentationFrame.tsx",
	"./PresentationOptions.tsx": "./code/PresentationOptions.tsx",
	"./ScrollIndicator.tsx": "./code/ScrollIndicator.tsx",
	"./ScrollLink.tsx": "./code/ScrollLink.tsx",
	"./StaticScroller.tsx": "./code/StaticScroller.tsx",
	"./Timer.tsx": "./code/Timer.tsx",
	"./VideoPlayer.tsx": "./code/VideoPlayer.tsx",
	"./_Overrides.tsx": "./code/_Overrides.tsx",
	"./canvas.tsx": "./code/canvas.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./code sync recursive \\.(t|j)s(x?)|\\.css$";

/***/ }),

/***/ "./code/PageLink.tsx":
/*!***************************!*\
  !*** ./code/PageLink.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZUxpbmsuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL1BhZ2VMaW5rLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUE4QjtBQUM5QixtQ0FBNEU7QUFRNUUsU0FBZ0IsUUFBUSxDQUFDLEtBQVk7O0lBQ2pDLE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsS0FBYyxLQUFLLEVBQWpCLHVEQUFpQixDQUFBO0lBQ3BELE1BQU0sQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO0lBRTNFLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFOztRQUNqQixLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNyQyxDQUFDLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDO1lBQ3RDLENBQUMsQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtRQUM3QyxRQUFRLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFBO0tBQ3BFLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtJQUVwQixNQUFNLEtBQUssR0FBRyxHQUFHLEVBQUU7O1FBQ2YsU0FBUyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQTtLQUN0QixDQUFBO0lBRUQsT0FBTyxDQUNILG9CQUFDLGNBQUssb0JBQUssSUFBSSxJQUFFLFVBQVUsRUFBRSxVQUFVO1FBQ2xDLEtBQUssQ0FBQyxRQUFRO1FBQ2Ysb0JBQUMsY0FBSyxJQUNGLFVBQVUsRUFBRSxxQkFBcUIsRUFDakMsR0FBRyxFQUFFLENBQUMsRUFDTixNQUFNLEVBQUUsQ0FBQyxFQUNULEtBQUssRUFBRSxDQUFDLEVBQ1IsSUFBSSxFQUFFLENBQUMsRUFDUCxLQUFLLEVBQUUsS0FBSyxHQUNkLENBQ0UsQ0FDWCxDQUFBO0NBQ0o7QUE1QkQsNEJBNEJDO0FBRUQsUUFBUSxDQUFDLFlBQVksR0FBRztJQUNwQixNQUFNLEVBQUUsR0FBRztJQUNYLEtBQUssRUFBRSxHQUFHO0lBQ1YsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUk7SUFDckIsUUFBUSxFQUFFLE9BQU87SUFDakIsSUFBSSxFQUFFLENBQUM7Q0FDVixDQUFBO0FBRUQsNEJBQW1CLENBQUMsUUFBUSxFQUFFO0lBQzFCLElBQUksRUFBRTtRQUNGLEtBQUssRUFBRSxTQUFTO1FBQ2hCLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsWUFBWSxFQUFFLENBQUM7S0FDbEI7SUFDRCxRQUFRLEVBQUU7UUFDTixLQUFLLEVBQUUsTUFBTTtRQUNiLElBQUksRUFBRSxvQkFBVyxDQUFDLElBQUk7UUFDdEIsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztRQUMzQixZQUFZLEVBQUUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDO1FBQzVDLFlBQVksRUFBRSxPQUFPO0tBQ3hCO0NBQ0osQ0FBQyxDQUFBIn0=

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function PageLink(props) {
    window["__checkComponentBudget__"]();
    const { page, onTapLink, linkType } = props, rest = __rest(props, ["page", "onTapLink", "linkType"]);
    const [background, setBackground] = React.useState("rgba(255,255,255,0.5)");
    React.useEffect(() => {
        window["__checkBudget__"]();
        React.Children.count(props.children) != 0
            ? setBackground("rgba(255,255,255,0)")
            : setBackground("rgba(17, 153, 238,0.5)");
        linkType == "empty" ? setBackground("rgba(255,255,255,0)") : null;
    }, [props.children]);
    const doTap = () => {
        window["__checkBudget__"]();
        onTapLink(page - 1);
    };
    return (React.createElement(framer_1.Frame, Object.assign({}, rest, { background: background }),
        props.children,
        React.createElement(framer_1.Frame, { background: "rgba(255,255,255,0)", top: 0, bottom: 0, right: 0, left: 0, onTap: doTap })));
}
exports.PageLink = PageLink;
PageLink.defaultProps = {
    height: 128,
    width: 240,
    onTapLink: () => null,
    linkType: "child",
    page: 0,
};
framer_1.addPropertyControls(PageLink, {
    page: {
        title: "Page To",
        type: framer_1.ControlType.Number,
        defaultValue: 0,
    },
    linkType: {
        title: "Type",
        type: framer_1.ControlType.Enum,
        options: ["empty", "child"],
        optionTitles: ["Empty Frame", "Child Frame"],
        defaultValue: "child",
    },
});
exports.__info__ = [{ "name": "PageLink", "children": true, "type": "component" }];


/***/ }),

/***/ "./code/PageScroller.tsx":
/*!*******************************!*\
  !*** ./code/PageScroller.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZVNjcm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9QYWdlU2Nyb2xsZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQThCO0FBQzlCLG1DQVNlO0FBV2YsU0FBZ0IsWUFBWSxDQUFDLEtBQVk7O0lBQ3JDLE1BQU0sRUFDRixRQUFRLEVBQ1IsTUFBTSxFQUNOLE9BQU8sRUFDUCxPQUFPLEVBQ1AsUUFBUSxFQUNSLGNBQWMsS0FFZCxLQUFLLEVBREwsZ0dBQ0ssQ0FBQTtJQUNULE1BQU0sV0FBVyxHQUFHLHFCQUFZLEVBQUUsQ0FBQTtJQUNsQyxNQUFNLGNBQWMsR0FBRyxvQkFBVyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3JDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUN2RCxNQUFNLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDbkQsTUFBTSxXQUFXLEdBQUcsR0FBRyxFQUFFOztRQUNyQixNQUFNLElBQUksR0FBRyxxQkFBWSxDQUNyQixjQUFjLEVBQ2QsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLE1BQU0sR0FBRyxXQUFXLENBQUMsRUFDOUIsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQ3pEO1lBQ0ksS0FBSyxFQUFFLElBQUk7U0FDZCxDQUNKLENBQUE7UUFDRCxPQUFPLElBQUksQ0FBQTtLQUNkLENBQUE7SUFDRCxNQUFNLFlBQVksR0FBRztRQUNqQixJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFO1FBQ3BCLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7S0FDdkIsQ0FBQTtJ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

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function PageScroller(props) {
    window["__checkComponentBudget__"]();
    const { children, height, bgcolor, padding, barWidth, autoHideScroll } = props, rest = __rest(props, ["children", "height", "bgcolor", "padding", "barWidth", "autoHideScroll"]);
    const animControl = framer_1.useAnimation();
    const contentOffsetY = framer_1.motionValue(0);
    const [childHeight, setChildHeight] = React.useState(0);
    const [barHeight, setBarHeight] = React.useState(0);
    const srollBarPos = () => {
        window["__checkBudget__"]();
        const newY = framer_1.useTransform(contentOffsetY, [800, 0, height - childHeight], [padding, padding, height - getBarHeight(null) - padding], {
            clamp: true,
        });
        return newY;
    };
    const animVariants = {
        show: { opacity: 1 },
        hide: { opacity: 0 },
    };
    const getBarHeight = (contentHeight) => {
        window["__checkBudget__"]();
        if (contentHeight && height < contentHeight) {
            return Math.ceil((height - padding * 2) *
                ((height - padding * 2) / contentHeight));
        }
        else if (height < childHeight) {
            return Math.ceil((height - padding * 2) * ((height - padding * 2) / childHeight));
        }
        else {
            return 0;
        }
    };
    React.useEffect(() => {
        window["__checkBudget__"]();
        setChildHeight(children[0].props["height"]);
        setBarHeight(getBarHeight(children[0].props["height"]));
    }, [children, props.height]);
    const doScroll = (show) => {
        window["__checkBudget__"]();
        if (autoHideScroll) {
            show
                ? animControl.start("show", {
                    transition: { duration: 1.5, delay: 0.5 },
                })
                : animControl.start("hide", {
                    transition: { durtion: 1.5, delay: 1.5 },
                });
        }
    };
    return (React.createElement(framer_1.Frame, Object.assign({}, rest, { width: "100%", height: "100%" }),
        React.createElement(framer_1.Scroll, { direction: "vertical", directionLock: true, dragEnabled: true, background: "none", contentOffsetY: contentOffsetY, onScrollStart: () => {
                window["__checkBudget__"]();
                doScroll(true);
            }, onScrollEnd: () => {
                window["__checkBudget__"]();
                doScroll(false);
            }, left: 0, right: 0, top: 0, bottom: 0 }, props.children),
        React.createElement(framer_1.Frame, { variants: animVariants, initial: autoHideScroll ? "hide" : "show", animate: animControl, width: barWidth, height: barHeight, background: bgcolor, y: srollBarPos(), right: padding, radius: 100 })));
}
exports.PageScroller = PageScroller;
PageScroller.defaultProps = {
    height: 900,
    background: "none",
    bgcolor: "rgba(0,0,0,1)",
    barWidth: 8,
    padding: 8,
    autoHideScroll: false,
};
framer_1.addPropertyControls(PageScroller, {
    bgcolor: {
        type: framer_1.ControlType.Color,
        title: "Bar Color",
        defaultValue: "rgba(0,0,0,1)",
    },
    barWidth: {
        type: framer_1.ControlType.Number,
        title: "Bar Size",
        defaultValue: 8,
        min: 0,
        max: 50,
        step: 1,
    },
    padding: {
        type: framer_1.ControlType.Number,
        title: "Padding",
        defaultValue: 6,
        min: 0,
        max: 50,
        step: 1,
    },
    autoHideScroll: {
        type: framer_1.ControlType.Boolean,
        title: "Auto Hide",
        defaultValue: false,
    },
});
exports.__info__ = [{ "name": "PageScroller", "children": true, "type": "component" }];


/***/ }),

/***/ "./code/Pagging.tsx":
/*!**************************!*\
  !*** ./code/Pagging.tsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZ2luZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvUGFnZ2luZy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBOEI7QUFDOUIsbUNBUWU7QUFnQmYsU0FBZ0IsT0FBTyxDQUFDLEtBQVk7O0lBQ2hDLE1BQU0sRUFDRixPQUFPLEVBQ1AsTUFBTSxFQUNOLFVBQVUsRUFDVixRQUFRLEVBQ1IsV0FBVyxFQUNYLFNBQVMsRUFDVCxXQUFXLEVBQ1gsY0FBYyxFQUNkLE9BQU8sRUFDUCxHQUFHLEVBQ0gsT0FBTyxLQUVQLEtBQUssRUFETCwrSkFDSyxDQUFBO0lBRVQsTUFBTSxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQzdELE1BQU0sQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUV2RCxNQUFNLGNBQWMsR0FBRztRQUNuQixNQUFNLEVBQUU7WUFDSixNQUFNLEVBQUUsNEJBQTRCO1lBQ3BDLFVBQVUsRUFBRSxxQkFBcUI7U0FDcEM7UUFDRCxPQUFPLEVBQUU7WUFDTCxNQUFNLEVBQUUsNEJBQTRCO1lBQ3BDLFVBQVUsRUFBRSxxQkFBcUI7U0FDcEM7UUFDRCxPQUFPLEVBQUU7WUFDTCxNQUFNLEVBQUUsc0JBQXNCO1lBQzlCLFVBQVUsRUFBRSxlQUFlO1NBQzlCO1FBQ0QsUUFBUSxFQUFFO1lBQ04sTUFBTSxFQUFFLHNCQUFzQjtZQUM5QixVQUFVLEVBQUUsZUFBZTtTQUM5QjtLQUNKLENBQUE7SUFFRCxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTs7UUFDakIsY0FBYyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUMvQixJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMv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

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function Pagging(props) {
    window["__checkComponentBudget__"]();
    const { current, darkbg, pageChange, children, dragEnabled, direction, showPagging, pageTransition, pageGap, pos, padding } = props, rest = __rest(props, ["current", "darkbg", "pageChange", "children", "dragEnabled", "direction", "showPagging", "pageTransition", "pageGap", "pos", "padding"]);
    const [currentPage, setCurrentPage] = React.useState(current);
    const [numberPages, setNumberPages] = React.useState(0);
    const bulletVariants = {
        darkOn: {
            border: "1px solid rgb(255,255,255)",
            background: "rgba(255,255,255,1)",
        },
        darkOff: {
            border: "1px solid rgb(255,255,255)",
            background: "rgba(255,255,255,0)",
        },
        lightOn: {
            border: "1px solid rgb(0,0,0)",
            background: "rgba(0,0,0,1)",
        },
        lightOff: {
            border: "1px solid rgb(0,0,0)",
            background: "rgba(0,0,0,0)",
        },
    };
    React.useEffect(() => {
        window["__checkBudget__"]();
        setNumberPages(children.length);
        if (current > children.length - 1) {
            setCurrentPage(0);
        }
        else if (current < 0) {
            setCurrentPage(0);
        }
        else {
            setCurrentPage(current);
        }
    }, [children, darkbg, current, showPagging]);
    const animTransition = {
        duration: 0.5,
    };
    const changePage = (currentIndex, previousIndex) => {
        window["__checkBudget__"]();
        setCurrentPage(currentIndex);
        pageChange ? pageChange(currentIndex) : null;
    };
    const setPage = (pageIndex) => {
        window["__checkBudget__"]();
        setCurrentPage(pageIndex);
        pageChange ? pageChange(pageIndex) : null;
    };
    const setDark = (darkPages) => {
        window["__checkBudget__"]();
        return darkPages[currentPage] == "1" ? true : false;
    };
    const getPaggingPos = (pos, value) => {
        window["__checkBudget__"]();
        if (value == "top") {
            if (pos == "topleft") {
                return 40;
            }
        }
    };
    return (React.createElement(framer_1.Frame, Object.assign({}, rest, { background: "none", width: "100%", height: "100%" }),
        React.createElement(framer_1.Page, { background: "none", width: "100%", height: "100%", currentPage: currentPage, onChangePage: changePage, dragEnabled: dragEnabled, direction: direction == "vertical" ? "vertical" : "horizontal", directionLock: true, gap: pageGap, defaultEffect: pageTransition == "none"
                ? "none"
                : pageTransition == "cube"
                    ? "cube"
                    : pageTransition == "coverflow"
                        ? "coverflow"
                        : pageTransition == "wheel"
                            ? "wheel"
                            : "pile" }, props.children),
        React.createElement(framer_1.Frame, { visible: showPagging ? true : false, background: "none", top: pos != "bottom" ? padding : null, left: pos != "right" ? padding : null, right: pos != "left" ? padding : null, bottom: pos != "top" ? padding : null, width: pos == "left" || pos == "right" ? 20 : null, height: pos == "top" || pos == "bottom" ? 20 : null },
            React.createElement(framer_1.Stack, { direction: pos == "top" || pos == "bottom"
                    ? "horizontal"
                    : "vertical", distribution: "center", alignment: "center", left: 0, right: 0, top: 0, bottom: 0, gap: 0 }, children.map((data, index) => {
                window["__checkBudget__"]();
                return (React.createElement(framer_1.Frame, { key: "presentPage_" + index, width: direction == "vertical" ? 15 : 20, height: direction == "vertical" ? 20 : 15, background: "none", onTap: () => {
                        window["__checkBudget__"]();
                        setPage(index);
                    } },
                    React.createElement(framer_1.Frame, { variants: bulletVariants, initial: currentPage == index
                            ? darkbg
                                ? "darkOn"
                                : "lightOn"
                            : darkbg
                                ? "darkOff"
                                : "lightOff", animate: currentPage == index
                            ? darkbg
                                ? "darkOn"
                                : "lightOn"
                            : darkbg
                                ? "darkOff"
                                : "lightOff", transition: animTransition, size: 6, center: true, radius: "100%" })));
            })))));
}
exports.Pagging = Pagging;
Pagging.defaultProps = {
    height: 900,
    width: 1440,
    background: "none",
    pages: 1,
    current: 0,
    darkbg: false,
    dragEnabled: true,
    direction: "vertical",
    showPagging: true,
    pageGap: 0,
    pageTransition: "none",
    pageChange: () => null,
    pos: "top",
    padding: 40,
};
// Learn more: https://framer.com/api/property-controls/
framer_1.addPropertyControls(Pagging, {
    pageTransition: {
        title: "Page Transition",
        type: framer_1.ControlType.Enum,
        options: ["none", "cube", "cover_flow", "wheel", "pile"],
        optionTitles: ["None", "Cube", "Cover Flow", "Wheel", "Pile"],
        defaultValue: "none",
    },
    pageGap: {
        title: "Page Gap",
        type: framer_1.ControlType.Number,
        defaultValue: 0,
    },
    current: {
        title: "Current Page",
        type: framer_1.ControlType.Number,
        defaultValue: 0,
    },
    darkbg: {
        title: "Dark BG",
        type: framer_1.ControlType.Boolean,
        defaultValue: false,
    },
    dragEnabled: {
        title: "Draggable",
        type: framer_1.ControlType.Boolean,
        defaultValue: true,
    },
    direction: {
        title: "Advance",
        type: framer_1.ControlType.Enum,
        options: ["horixontal", "vertical"],
        optionTitles: ["Horizontally", "Vertically"],
        defaultValue: "vertical",
    },
    pos: {
        title: "Pagging Position",
        type: framer_1.ControlType.Enum,
        options: ["top", "bottom", "left", "right"],
        optionTitles: ["Top", "Bottom", "Left", "Right"],
        defaultValue: "top",
    },
    padding: {
        title: "Padding Pagging",
        type: framer_1.ControlType.Number,
        defaultValue: 40,
    },
    showPagging: {
        title: "Hide Indicators",
        type: framer_1.ControlType.Boolean,
        defaultValue: true,
    },
    children: {
        type: framer_1.ControlType.Array,
        title: "Content",
        propertyControl: {
            type: framer_1.ControlType.ComponentInstance,
            title: "Frame",
        },
    },
});
exports.__info__ = [{ "name": "Pagging", "children": true, "type": "component" }];


/***/ }),

/***/ "./code/PaggingLink.tsx":
/*!******************************!*\
  !*** ./code/PaggingLink.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZ2luZ0xpbmsuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL1BhZ2dpbmdMaW5rLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUE4QjtBQUM5QixtQ0FBNEU7QUFZNUUsU0FBZ0IsV0FBVyxDQUFDLEtBQVk7O0lBQ3BDLE1BQU0sRUFDRixJQUFJLEVBQ0osU0FBUyxFQUNULFFBQVEsRUFDUixTQUFTLEVBQ1QsV0FBVyxFQUNYLE9BQU8sRUFDUCxLQUFLLEtBRUwsS0FBSyxFQURMLHVHQUNLLENBQUE7SUFDVCxNQUFNLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsQ0FBQTtJQUUzRSxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTs7UUFDakIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDckMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztZQUN0QyxDQUFDLENBQUMsYUFBYSxDQUFDLHdCQUF3QixDQUFDLENBQUE7UUFDN0MsUUFBUSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtLQUNwRSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7SUFFcEIsTUFBTSxLQUFLLEdBQUcsR0FBRyxFQUFFOztRQUNmLElBQUksU0FBUyxJQUFJLE1BQU0sRUFBRTtZQUNyQixXQUFXLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFBO1NBQzlEO2FBQU0sSUFBSSxTQUFTLElBQUksVUFBVSxFQUFFO1lBQ2hDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtTQUN0RDthQUFNO1lBQ0gsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUE7U0FDekQ7S0FDSixDQUFBO0lBRUQsTUFBTSxVQUFVLEdBQUcsR0FBRyxFQUFFOztRQUNwQixJQUFJLFNBQVMsSUFBSSxNQUFNLEVBQUU7WUFDckIsT0FBTyxXQUFXLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUE7U0FDNUM7YUFBTSxJQUFJLFNBQVMsSUFBSSxVQUFVLEVBQUU7WUFDaEMsT0FBTyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtTQUNwQzthQUFNO1lBQ0gsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtTQUNsRDtLQUNKLENBQUE7SUFFRCxPQUFPLENBQ0gsb0JBQUMsY0FBSyxvQkFBSyxJQUFJLElBQUUsVUFBVSxFQUFFLFVBQVU7UUFDbEMsS0FBSyxDQUFDLFFBQVE7UUFDZixvQkFBQyxjQUFLLElBQ0YsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUNyQixVQUFVLEVBQUUsbUJBQW1CLEVBQy9CLEdBQUcsRUFBRSxDQUFDLEVBQ04sTUFBTSxFQUFFLENBQUMsRUFDVCxLQUFLLEVBQUUsQ0FBQyxFQUNSLElBQUksRUFBRSxDQUFDLEVBQ1AsS0FBSyxFQUFFLEtBQUssR0FDZCxDQUNFLENBQ1gsQ0FBQTtDQUNKO0FBdERELGtDQXNEQztBQUVELFdBQVcsQ0FBQyxZQUFZLEdBQUc7SUFDdkIsTUFBTSxFQUFFLEdBQUc7SUFDWCxLQUFLLEVBQUUsR0FBRztJQUNWLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJO0lBQ3JCLFFBQVEsRUFBRSxPQUFPO0lBQ2pCLElBQUksRUFBRSxDQUFDO0lBQ1AsU0FBUyxFQUFFLE1BQU07SUFDakIsV0FBVyxFQUFFLENBQUM7SUFDZCxLQUFLLEVBQUUsQ0FBQztDQUNYLENBQUE7QUFFRCw0QkFBbUIsQ0FBQyxXQUFXLEVBQUU7SUFDN0IsU0FBUyxFQUFFO1FBQ1AsS0FBSyxFQUFFLFdBQVc7UUFDbEIsSUFBSSxFQUFFLG9CQUFXLENBQUMsSUFBSTtRQUN0QixPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQztRQUNyQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsQ0FBQztRQUMvQyxZQUFZLEVBQUUsTUFBTTtLQUN2QjtJQUNELElBQUksRUFBRTtRQUNGLEtBQUssRUFBRSxTQUFTO1FBQ2hCLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsWUFBWSxFQUFFLENBQUM7S0FDbEI7SUFDRCxXQUFXLEVBQUU7UUFDVCxLQUFLLEVBQUUsY0FBYztRQUNyQixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO1FBQ3hCLFlBQVksRUFBRSxDQUFDO0tBQ2xCO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsS0FBSyxFQUFFLFlBQVk7UUFDbkIsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTTtRQUN4QixZQUFZLEVBQUUsQ0FBQztLQUNsQjtJQUNELE9BQU8sRUFBRTtRQUNMLEtBQUssRUFBRSxVQUFVO1FBQ2pCLElBQUksRUFBRSxvQkFBVyxDQUFDLEtBQUs7UUFDdkIsWUFBWSxFQUFFLGtCQUFrQjtLQUNuQztJQUNELFFBQVEsRUFBRTtRQUNOLEtBQUssRUFBRSxNQUFNO1FBQ2IsSUFBSSxFQUFFLG9CQUFXLENBQUMsSUFBSTtRQUN0QixPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO1FBQzNCLFlBQVksRUFBRSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUM7UUFDNUMsWUFBWSxFQUFFLE9BQU87S0FDeEI7Q0FDSixDQUFDLENBQUEifQ==

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function PaggingLink(props) {
    window["__checkComponentBudget__"]();
    const { page, onTapLink, linkType, increment, currentPage, bgColor, pages } = props, rest = __rest(props, ["page", "onTapLink", "linkType", "increment", "currentPage", "bgColor", "pages"]);
    const [background, setBackground] = React.useState("rgba(255,255,255,0.5)");
    React.useEffect(() => {
        window["__checkBudget__"]();
        React.Children.count(props.children) != 0
            ? setBackground("rgba(255,255,255,0)")
            : setBackground("rgba(17, 153, 238,0.5)");
        linkType == "empty" ? setBackground("rgba(255,255,255,0)") : null;
    }, [props.children]);
    const doTap = () => {
        window["__checkBudget__"]();
        if (increment == "next") {
            currentPage < pages - 1 ? onTapLink(currentPage + 1) : null;
        }
        else if (increment == "previous") {
            currentPage > 0 ? onTapLink(currentPage - 1) : null;
        }
        else {
            page >= 0 && page < pages - 1 ? onTapLink(page) : null;
        }
    };
    const getOpacity = () => {
        window["__checkBudget__"]();
        if (increment == "next") {
            return currentPage < pages - 1 ? 0 : 0.75;
        }
        else if (increment == "previous") {
            return currentPage > 0 ? 0 : 0.75;
        }
        else {
            return page >= 0 && page < pages - 1 ? 0 : 0.75;
        }
    };
    return (React.createElement(framer_1.Frame, Object.assign({}, rest, { background: background }),
        props.children,
        React.createElement(framer_1.Frame, { opacity: getOpacity(), background: "rgba(255,255,255)", top: 0, bottom: 0, right: 0, left: 0, onTap: doTap })));
}
exports.PaggingLink = PaggingLink;
PaggingLink.defaultProps = {
    height: 128,
    width: 240,
    onTapLink: () => null,
    linkType: "child",
    page: 0,
    increment: "next",
    currentPage: 0,
    pages: 3,
};
framer_1.addPropertyControls(PaggingLink, {
    increment: {
        title: "Link Type",
        type: framer_1.ControlType.Enum,
        options: ["next", "previous", "page"],
        optionTitles: ["Next", "Previous", "Goto Page"],
        defaultValue: "next",
    },
    page: {
        title: "Page To",
        type: framer_1.ControlType.Number,
        defaultValue: 0,
    },
    currentPage: {
        title: "Current Page",
        type: framer_1.ControlType.Number,
        defaultValue: 0,
    },
    pages: {
        title: "Page Count",
        type: framer_1.ControlType.Number,
        defaultValue: 3,
    },
    bgColor: {
        title: "BG Color",
        type: framer_1.ControlType.Color,
        defaultValue: "rgb(255,255,255)",
    },
    linkType: {
        title: "Type",
        type: framer_1.ControlType.Enum,
        options: ["empty", "child"],
        optionTitles: ["Empty Frame", "Child Frame"],
        defaultValue: "child",
    },
});
exports.__info__ = [{ "name": "PaggingLink", "children": true, "type": "component" }];


/***/ }),

/***/ "./code/PresentationFrame.tsx":
/*!************************************!*\
  !*** ./code/PresentationFrame.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJlc2VudGF0aW9uRnJhbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL1ByZXNlbnRhdGlvbkZyYW1lLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUE4QjtBQUM5QixtQ0FTZTtBQUNmLG1DQUErQjtBQUMvQiwrREFBMkQ7QUFxQjNELFNBQWdCLGlCQUFpQixDQUFDLEtBQVk7O0lBQzFDLE1BQU0sRUFDRixPQUFPLEVBQ1AsTUFBTSxFQUNOLFVBQVUsRUFDVixnQkFBZ0IsRUFDaEIsUUFBUSxFQUNSLFdBQVcsRUFDWCxTQUFTLEVBQ1QsV0FBVyxFQUNYLGNBQWMsRUFDZCxPQUFPLEVBQ1AsU0FBUyxFQUNULFNBQVMsRUFDVCxLQUFLLEVBQ0wsWUFBWSxFQUNaLFVBQVUsRUFDVixRQUFRLEtBRVIsS0FBSyxFQURMOzsrTkFDSyxDQUFBO0lBQ1QsZ0RBQWdEO0lBQ2hELE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRTs7UUFDL0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDWCxJQUNJLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7Z0JBQ3BDLFdBQVcsR0FBRyxDQUFDLEdBQUcsV0FBVyxFQUMvQjtnQkFDRSxjQUFjLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFBO2dCQUMvQixVQUFVLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFBO2FBQzlCO2lCQUFNLElBQ0gsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztnQkFDcEMsV0FBVyxHQUFHLENBQUMsRUFDakI7Z0JBQ0UsY0FBYyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQTtnQkFDL0IsVUFBVSxDQUFDLFdBQVcsR0FBRyxDQUFDLENB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

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const Timer_1 = __webpack_require__(/*! ./Timer */ "./code/Timer.tsx");
const PresentationOptions_1 = __webpack_require__(/*! ./PresentationOptions */ "./code/PresentationOptions.tsx");
function PresentationFrame(props) {
    window["__checkComponentBudget__"]();
    const { current, darkbg, pageChange, presentationSize, children, dragEnabled, direction, autoHideNav, pageTransition, pageGap, showTimer, showClock, title, persistTitle, showBorder, keepDots } = props, rest = __rest(props
    // use for keyboard to navigate the presentation
    , ["current", "darkbg", "pageChange", "presentationSize", "children", "dragEnabled", "direction", "autoHideNav", "pageTransition", "pageGap", "showTimer", "showClock", "title", "persistTitle", "showBorder", "keepDots"]);
    // use for keyboard to navigate the presentation
    const navigatePresentation = (e) => {
        window["__checkBudget__"]();
        if (!e.repeat) {
            if ((e.keyCode == 40 || e.keyCode == 39) &&
                currentPage + 1 < numberPages) {
                setCurrentPage(currentPage + 1);
                pageChange(currentPage + 1);
            }
            else if ((e.keyCode == 38 || e.keyCode == 37) &&
                currentPage > 0) {
                setCurrentPage(currentPage - 1);
                pageChange(currentPage - 1);
            }
        }
    };
    const [currentPage, setCurrentPage] = React.useState(current);
    const [numberPages, setNumberPages] = React.useState(0);
    const [darkPages, setDarkPages] = React.useState(darkbg.split(","));
    const [presentationFormat, setPresentationFormat] = React.useState(presentationSize);
    const [autoHide, setAutoHide] = React.useState(autoHideNav);
    const [viewOptions, setViewOptions] = React.useState(false);
    const controls = framer_1.useAnimation();
    const controlsOptions = framer_1.useAnimation();
    const controlsBullets = framer_1.useAnimation();
    const titleStyle = {
        fontFamily: "GDSherpa-Semibold",
        fontSize: "10px",
        lineHeight: "1.2em",
    };
    const dimensions = [
        { format: "macbookpro", width: 1440, height: 900 },
        { format: "4K", width: 1600, height: 1200 },
        { format: "HD", width: 1280, height: 720 },
    ];
    const iconArrow = (color) => {
        window["__checkBudget__"]();
        return (React.createElement("svg", { viewBox: "0,0,14,8" },
            React.createElement("path", { d: "M 1 1 L 7 7 L 13 1", fill: "transparent", strokeWidth: "1.5", stroke: color, strokeLinecap: "round", strokeLinejoin: "round" })));
    };
    const arrowVariants = {
        enabled: { opacity: 1 },
        disabled: { opacity: 0.25 },
    };
    const navVariants = {
        show: { opacity: 1 },
        hide: { opacity: 0 },
    };
    const optionsVariants = {
        show: { top: [5000, 0, 0], opacity: [0, 0, 1] },
        hide: { top: [0, 0, 5000], opacity: [1, 0, 0] },
    };
    const bulletVariants = {
        darkOn: {
            border: "1px solid rgb(255,255,255)",
            background: "rgba(255,255,255,1)",
        },
        darkOff: {
            border: "1px solid rgb(255,255,255)",
            background: "rgba(255,255,255,0)",
        },
        lightOn: {
            border: "1px solid rgb(0,0,0)",
            background: "rgba(0,0,0,1)",
        },
        lightOff: {
            border: "1px solid rgb(0,0,0)",
            background: "rgba(0,0,0,0)",
        },
    };
    const animTransition = {
        duration: 0.5,
    };
    React.useEffect(() => {
        window["__checkBudget__"]();
        window.addEventListener("keydown", navigatePresentation);
        return () => {
            window["__checkBudget__"]();
            window.removeEventListener("keydown", navigatePresentation);
        };
    }, [navigatePresentation]);
    React.useEffect(() => {
        window["__checkBudget__"]();
        setNumberPages(children.length);
        setDarkPages(darkbg.split(","));
        setCurrentPage(current);
        setPresentationFormat(presentationSize);
        autoHide ? controls.start("hide") : null;
        !keepDots ? controlsBullets.start("hide") : null;
    }, [children, darkbg, current, autoHideNav, presentationSize]);
    const navigate = (next) => {
        window["__checkBudget__"]();
        if (next && currentPage < numberPages - 1) {
            setCurrentPage(currentPage + 1);
            pageChange(currentPage + 1);
        }
        else if (!next && currentPage > 0) {
            setCurrentPage(currentPage - 1);
            pageChange(currentPage - 1);
        }
    };
    const getPresentationSize = (dimension, format) => {
        window["__checkBudget__"]();
        if (format == "responsive") {
            return "100%";
        }
        else {
            const formatSize = dimensions.filter((item) => item.format == presentationFormat);
            return dimension == "height"
                ? formatSize[0].height
                : formatSize[0].width;
        }
    };
    const changePage = (currentIndex, previousIndex) => {
        window["__checkBudget__"]();
        setCurrentPage(currentIndex);
        pageChange ? pageChange(currentIndex) : null;
    };
    const setPage = (pageIndex) => {
        window["__checkBudget__"]();
        setCurrentPage(pageIndex);
        pageChange ? pageChange(pageIndex) : null;
    };
    const setDark = (darkPages) => {
        window["__checkBudget__"]();
        return darkPages[currentPage] == "1" ? true : false;
    };
    const showNav = (show) => {
        window["__checkBudget__"]();
        !show && autoHide ? controls.start("hide") : null;
        show && autoHide ? controls.start("show") : null;
        !keepDots
            ? controlsBullets.start("hide")
            : controlsBullets.start("show");
    };
    const setEffect = (effect) => {
        window["__checkBudget__"]();
        return effect == "None" ? "None" : "Cube";
    };
    const updateOptions = (format, hide) => {
        window["__checkBudget__"]();
        setAutoHide(hide);
        hide ? controls.start("hide") : controls.start("show");
        !keepDots
            ? controlsBullets.start("hide")
            : controlsBullets.start("show");
        setPresentationFormat(format);
    };
    const showOptions = () => {
        window["__checkBudget__"]();
        controlsOptions.start("show");
    };
    const closeOptions = (action) => {
        window["__checkBudget__"]();
        controlsOptions.start("hide");
    };
    const settingsIcon = (color) => {
        window["__checkBudget__"]();
        return (React.createElement("svg", { viewBox: "0,0,24,24" },
            React.createElement("path", { d: "M 12 8 C 9.8 8 8 9.8 8 12 C 8 14.2 9.8 16 12 16 C 14.2 16 16 14.2 16 12 C 16 9.8 14.2 8 12 8 Z M 12 14 C 10.9 14 10 13.1 10 12 C 10 10.9 10.9 10 12 10 C 13.1 10 14 10.9 14 12 C 14 13.1 13.1 14 12 14 Z M 19.9 12 C 19.9 11.6 19.9 11.1 19.8 10.7 L 21.8 9.2 L 19.3 5 L 17 5.9 C 16.3 5.3 15.6 4.9 14.7 4.6 L 14.4 2 L 9.5 2 L 9.2 4.6 C 8.4 4.9 7.6 5.3 6.9 5.9 L 4.6 5 L 2.2 9.2 L 4.2 10.7 C 4.1 11.1 4.1 11.6 4.1 12 C 4.1 12.4 4.1 12.9 4.2 13.3 L 2.2 14.8 L 4.6 19 L 6.9 18.1 C 7.6 18.7 8.3 19.1 9.2 19.4 L 9.5 22 L 14.4 22 L 14.8 19.4 C 15.6 19.1 16.4 18.6 17.1 18.1 L 19.4 19 L 21.8 14.8 L 19.8 13.3 C 19.9 12.9 19.9 12.4 19.9 12 Z M 17.7 10.5 C 17.8 11.1 17.9 11.5 17.9 12 C 17.9 12.5 17.8 12.9 17.7 13.5 L 17.5 14.1 L 19.1 15.3 L 18.4 16.5 L 16.5 15.8 L 16 16.2 C 15.3 16.9 14.4 17.4 13.5 17.7 L 13 17.9 L 12.7 20 L 11.3 20 L 11 17.9 L 10.4 17.7 C 9.4 17.4 8.6 16.9 7.9 16.2 L 7.4 15.7 L 5.5 16.5 L 4.8 15.3 L 6.4 14 L 6.2 13.4 C 6.1 12.9 6 12.4 6 11.9 C 6 11.4 6.1 10.9 6.2 10.4 L 6.4 9.8 L 4.8 8.6 L 5.5 7.4 L 7.4 8.2 L 7.9 7.7 C 8.6 7 9.5 6.5 10.4 6.2 L 11 6.1 L 11.3 4 L 12.7 4 L 13 6.1 L 13.6 6.3 C 14.5 6.6 15.4 7.1 16.1 7.8 L 16.6 8.2 L 18.5 7.5 L 19.2 8.7 L 17.6 9.9 Z", fill: color })));
    };
    const GoDaddyIcon = (color) => {
        window["__checkBudget__"]();
        return (React.createElement("svg", { viewBox: "0,0,10,9" },
            React.createElement("path", { d: "M 8.628 0.41 C 7.591 -0.244 6.226 -0.089 5.01 0.685 C 3.795 -0.089 2.429 -0.244 1.392 0.41 C -0.246 1.445 -0.445 4.11 0.948 6.362 C 1.976 8.022 3.581 8.995 5.01 8.977 C 6.44 8.995 8.046 8.023 9.073 6.362 C 10.466 4.11 10.267 1.445 8.628 0.41 Z M 1.701 5.887 C 1.408 5.413 1.192 4.912 1.059 4.399 C 0.933 3.916 0.886 3.444 0.92 2.997 C 0.982 2.165 1.317 1.517 1.863 1.171 C 2.41 0.826 3.134 0.806 3.901 1.114 C 4.017 1.161 4.131 1.215 4.244 1.274 C 3.835 1.648 3.459 2.099 3.139 2.615 C 2.293 3.984 2.036 5.505 2.33 6.719 C 2.095 6.463 1.885 6.184 1.701 5.887 Z M 8.963 4.399 C 8.829 4.912 8.613 5.413 8.32 5.887 C 8.132 6.189 7.922 6.468 7.691 6.72 C 7.954 5.632 7.776 4.3 7.128 3.051 C 7.082 2.963 6.977 2.934 6.894 2.986 L 4.877 4.26 C 4.84 4.284 4.813 4.321 4.803 4.364 C 4.794 4.407 4.801 4.452 4.824 4.49 L 5.12 4.968 C 5.143 5.005 5.18 5.032 5.223 5.042 C 5.265 5.052 5.31 5.044 5.347 5.021 L 6.655 4.195 C 6.699 4.322 6.738 4.45 6.772 4.579 C 6.897 5.062 6.944 5.534 6.911 5.981 C 6.848 6.813 6.513 7.461 5.967 7.806 C 5.693 7.978 5.376 8.07 5.032 8.08 L 4.99 8.08 C 4.645 8.07 4.328 7.978 4.055 7.806 C 3.508 7.461 3.173 6.813 3.111 5.981 C 3.077 5.534 3.124 5.062 3.25 4.579 C 3.383 4.065 3.6 3.565 3.893 3.091 C 4.186 2.617 4.536 2.201 4.934 1.855 C 5.309 1.529 5.708 1.28 6.12 1.114 C 6.888 0.806 7.611 0.826 8.158 1.171 C 8.705 1.517 9.04 2.165 9.102 2.997 C 9.135 3.444 9.088 3.916 8.963 4.399 Z", fill: color })));
    };
    return (React.createElement(framer_1.Frame, Object.assign({}, rest, { height: getPresentationSize("height", presentationFormat), width: getPresentationSize("width", presentationFormat) }),
        React.createElement(framer_1.Page, { background: "none", height: getPresentationSize("height", presentationFormat), width: getPresentationSize("width", presentationFormat), currentPage: currentPage, onChangePage: changePage, dragEnabled: dragEnabled, direction: direction == "vertical" ? "vertical" : "horizontal", directionLock: true, gap: pageGap, defaultEffect: pageTransition == "none"
                ? "none"
                : pageTransition == "cube"
                    ? "cube"
                    : pageTransition == "coverflow"
                        ? "coverflow"
                        : pageTransition == "wheel"
                            ? "wheel"
                            : "pile" }, props.children),
        React.createElement(framer_1.Stack, { direction: "horizontal", alignment: "center", distribution: "end", gap: 15, height: 28, top: 30, right: 40 },
            React.createElement(framer_1.Frame, { variants: navVariants, initial: showTimer ? "show" : "hide", animate: controls, transition: animTransition, background: "none", height: 28, width: showClock ? 270 : 140, onMouseOver: () => {
                    window["__checkBudget__"]();
                    showNav(true);
                }, onMouseOut: () => {
                    window["__checkBudget__"]();
                    showNav(false);
                } },
                React.createElement(Timer_1.Timer, { active: false, darkbg: setDark(darkPages), showClock: showClock })),
            React.createElement(framer_1.Frame, { variants: navVariants, initial: "show", transition: animTransition, animate: controls, background: "none", height: 24, width: 24, top: 3, onTap: showOptions, onMouseOver: () => {
                    window["__checkBudget__"]();
                    showNav(true);
                }, onMouseOut: () => {
                    window["__checkBudget__"]();
                    showNav(false);
                } }, settingsIcon(setDark(darkPages) ? "#ffffff" : "#000000"))),
        React.createElement(framer_1.Frame, { background: "none", width: direction == "vertical" ? 100 : null, height: direction == "vertical" ? null : 100, top: direction == "vertical" ? 0 : null, bottom: 0, left: 0, right: direction == "vertical" ? null : 0, onMouseOver: () => {
                window["__checkBudget__"]();
                showNav(true);
            }, onMouseOut: () => {
                window["__checkBudget__"]();
                showNav(false);
            } },
            React.createElement(framer_1.Stack, { variants: navVariants, initial: "show", transition: animTransition, animate: controlsBullets, direction: direction == "vertical" ? "vertical" : "horizontal", distribution: "start", alignment: "start", top: direction == "vertical" ? 70 : null, bottom: direction == "vertical" ? null : 40, left: 40, gap: 0 }, children.map((data, index) => {
                window["__checkBudget__"]();
                return (React.createElement(framer_1.Frame, { key: "presentPage_" + index, width: direction == "vertical" ? 15 : 20, height: direction == "vertical" ? 20 : 15, background: "none", onTap: () => {
                        window["__checkBudget__"]();
                        setPage(index);
                    } },
                    React.createElement(framer_1.Frame, { variants: bulletVariants, initial: currentPage == index
                            ? setDark(darkPages)
                                ? "darkOn"
                                : "lightOn"
                            : setDark(darkPages)
                                ? "darkOff"
                                : "lightOff", animate: currentPage == index
                            ? setDark(darkPages)
                                ? "darkOn"
                                : "lightOn"
                            : setDark(darkPages)
                                ? "darkOff"
                                : "lightOff", transition: animTransition, size: 6, center: true, radius: "100%" })));
            })),
            React.createElement(framer_1.Stack, { variants: navVariants, initial: "show", transition: animTransition, animate: controls, direction: direction == "vertical" ? "vertical" : "horizontal", alignment: "center", distribution: "center", width: 14, height: 12 * 2, gap: 10, bottom: direction == "vertical" ? 40 : 35, left: direction == "vertical" ? 40 : null, right: direction == "vertical" ? null : 55 },
                React.createElement(framer_1.Frame, { variants: arrowVariants, initial: "disabled", animate: currentPage > 0 ? "enabled" : "disabled", transition: animTransition, background: "none", width: 14, height: 12, rotate: direction == "vertical" ? 180 : 90, onTap: () => {
                        window["__checkBudget__"]();
                        navigate(false);
                    } }, iconArrow(setDark(darkPages) ? "#ffffff" : "#000000")),
                React.createElement(framer_1.Frame, { variants: arrowVariants, initial: "enabled", animate: currentPage < numberPages - 1
                        ? "enabled"
                        : "disabled", transition: animTransition, opacity: 1, background: "none", width: 14, height: 12, rotate: direction == "vertical" ? 0 : -90, onTap: () => {
                        window["__checkBudget__"]();
                        navigate(true);
                    } }, iconArrow(setDark(darkPages) ? "#ffffff" : "#000000")))),
        React.createElement(framer_1.Frame, { variants: navVariants, initial: "show", transition: animTransition, animate: currentPage != 0 && persistTitle
                ? "show"
                : currentPage == 0
                    ? "show"
                    : "hide", background: "none", top: 40, left: 43, height: 10 * 1.2 },
            React.createElement(framer_1.Stack, { direction: "horizontal", distribution: "start", alignment: "center", gap: 4, width: "100%", height: "100%" },
                React.createElement(framer_1.Frame, { background: "none", top: -4, width: 10, height: 9 }, GoDaddyIcon(setDark(darkPages) ? "#ffffff" : "#000000")),
                React.createElement(framer_1.Frame, { background: "none", width: "auto", height: "10*1.2", style: Object.assign(Object.assign({}, titleStyle), { color: setDark(darkPages) ? "#ffffff" : "#000000" }) }, title))),
        React.createElement(PresentationOptions_1.PresentationOptions, { variants: optionsVariants, initial: "hide", animate: controlsOptions, transition: animTransition, autoHide: autoHide, presentationFormat: presentationFormat, updateOptions: updateOptions, closeOptions: closeOptions }),
        React.createElement(framer_1.Frame, { visible: showBorder ? true : false, top: 1, right: 1, left: 1, bottom: 1, background: "none", border: "1px solid black" })));
}
exports.PresentationFrame = PresentationFrame;
PresentationFrame.defaultProps = {
    height: 900,
    width: 1440,
    background: "white",
    presentationSize: "macbookpro",
    pages: 2,
    current: 1,
    darkbg: "1",
    dragEnabled: true,
    direction: "vertical",
    autoHideNav: false,
    pageGap: 0,
    pageTransition: "none",
    pageChange: () => null,
    showTimer: true,
    showClock: true,
    title: "GoDaDdy Product Design © 2020",
    showBorder: true,
    persistTitle: true,
    keepDots: true,
};
// Learn more: https://framer.com/api/property-controls/
framer_1.addPropertyControls(PresentationFrame, {
    title: {
        title: "Title",
        type: framer_1.ControlType.String,
        defaultValue: "GoDaDdy Product Design © 2020",
    },
    persistTitle: {
        title: "Show Title Inner Pages",
        type: framer_1.ControlType.Boolean,
        defaultValue: true,
    },
    presentationSize: {
        title: "Size",
        type: framer_1.ControlType.Enum,
        options: ["macbookpro", "HD", "4K", "responsive"],
        optionTitles: ["Macbook Pro", "HD", "4K", "Responsive"],
        defaultValue: "#0099ff",
    },
    pageTransition: {
        title: "Page Transition",
        type: framer_1.ControlType.Enum,
        options: ["none", "cube", "cover_flow", "wheel", "pile"],
        optionTitles: ["None", "Cube", "Cover Flow", "Wheel", "Pile"],
        defaultValue: "none",
    },
    pageGap: {
        title: "Page Gap",
        type: framer_1.ControlType.Number,
        defaultValue: 0,
    },
    current: {
        title: "Current Page",
        type: framer_1.ControlType.Number,
        defaultValue: 0,
    },
    darkbg: {
        title: "Dark Pages",
        type: framer_1.ControlType.String,
        defaultValue: "1",
    },
    showTimer: {
        title: "Timer",
        type: framer_1.ControlType.Boolean,
        defaultValue: true,
    },
    showClock: {
        title: "Clock",
        type: framer_1.ControlType.Boolean,
        defaultValue: true,
        hidden(props) {
            window["__checkBudget__"]();
            return props.showTimer === false;
        },
    },
    showBorder: {
        title: "Border",
        type: framer_1.ControlType.Boolean,
        defaultValue: true,
    },
    dragEnabled: {
        title: "Draggable",
        type: framer_1.ControlType.Boolean,
        defaultValue: true,
    },
    direction: {
        title: "Advance",
        type: framer_1.ControlType.Enum,
        options: ["horixontal", "vertical"],
        optionTitles: ["Horizontally", "Vertically"],
        defaultValue: "vertical",
    },
    autoHideNav: {
        title: "Auto Hide Nav.",
        type: framer_1.ControlType.Boolean,
        defaultValue: false,
    },
    keepDots: {
        title: "Dots Persistent",
        type: framer_1.ControlType.Boolean,
        defaultValue: true,
        hidden(props) {
            window["__checkBudget__"]();
            return props.autoHideNav === false;
        },
    },
    children: {
        type: framer_1.ControlType.Array,
        title: "Content",
        propertyControl: {
            type: framer_1.ControlType.ComponentInstance,
            title: "Frame",
        },
    },
});
exports.__info__ = [{ "name": "PresentationFrame", "children": true, "type": "component" }];


/***/ }),

/***/ "./code/PresentationOptions.tsx":
/*!**************************************!*\
  !*** ./code/PresentationOptions.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJlc2VudGF0aW9uT3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvUHJlc2VudGF0aW9uT3B0aW9ucy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBOEI7QUFDOUIsbUNBT2U7QUFTZixTQUFnQixtQkFBbUIsQ0FBQyxLQUFLOztJQUNyQyxNQUFNLEVBQ0Ysa0JBQWtCLEVBQ2xCLFFBQVEsRUFDUixhQUFhLEVBQ2IsWUFBWSxLQUVaLEtBQUssRUFETCx5RkFDSyxDQUFBO0lBQ1QsTUFBTSxhQUFhLEdBQUc7UUFDbEIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRTtRQUNyRSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFO1FBQ3JFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUU7UUFDcEQsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTtLQUNoRCxDQUFBO0lBQ0QsTUFBTSxlQUFlLEdBQUc7UUFDcEIsRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRTtRQUN0RCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFO0tBQ3RELENBQUE7SUFDRCxNQUFNLFNBQVMsR0FBRyxDQUFDLEtBQWEsRUFBRSxFQUFFOztRQUNoQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7WUFDM0MsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxL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

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function PresentationOptions(props) {
    window["__checkComponentBudget__"]();
    const { presentationFormat, autoHide, updateOptions, closeOptions } = props, rest = __rest(props, ["presentationFormat", "autoHide", "updateOptions", "closeOptions"]);
    const formatOptions = [
        { format: "responsive", title: "Responsive", caption: "100% x 100%" },
        { format: "macbookpro", title: "Macbook Pro", caption: "1440 x 900" },
        { format: "HD", title: "HD", caption: "1080 x 720" },
        { format: "4K", title: "4K", caption: "TBD" },
    ];
    const autoHideOptions = [
        { format: "Auto Hide Nav", caption: "Auto hides nav" },
        { format: "Show Nav", caption: "Shows nav always" },
    ];
    const getFormat = (value) => {
        window["__checkBudget__"]();
        for (let i = 0; i < formatOptions.length; i++) {
            window["__checkBudget__"]();
            if (formatOptions[i].format === value) {
                return i;
            }
        }
    };
    const [currentFormat, setCurrentFormat] = React.useState(getFormat(presentationFormat));
    const [currentAutoHide, setAutoHide] = React.useState(autoHide ? 0 : 1);
    const optionsVariants = {
        selected: { color: "rgba(0,0,0,1)" },
        unselected: { color: "rgba(0,0,0,0.3)" },
    };
    const transtion = {
        duration: 0.15,
        ease: "easeOut",
    };
    const styleText = {
        fontFamily: "GDSherpa=Semibold",
        fontSize: "30px",
        lineHeight: "1.2",
    };
    const styleCaption = {
        fontFamily: "GDSherpa=Semibold",
        fontSize: "15px",
        lineHeight: "1.2",
    };
    const boxStyle = {
        borderTop: "1px solid rgba(0,0,0,0.3)",
        borderBottom: "1px solid rgba(0,0,0,0.3)",
    };
    const closeIcon = (color) => {
        window["__checkBudget__"]();
        return (React.createElement("svg", { viewBox: "0,0,24,24" },
            React.createElement("path", { d: "M 13.41 12 L 17.41 16 L 16 17.41 L 12 13.41 L 8 17.41 L 6.59 16 L 10.59 12 L 6.59 8 L 8 6.59 L 12 10.59 L 16 6.59 L 17.41 8 Z", fill: color })));
    };
    // behaviors and methods
    const updateFormat = (currentIndex, previousIndex) => {
        window["__checkBudget__"]();
        if (currentIndex != currentFormat) {
            setCurrentFormat(currentIndex);
            updateOptions(formatOptions[currentIndex].format, currentAutoHide == 0 ? true : false);
        }
    };
    const updateAutoHide = (currentIndex, previousIndex) => {
        window["__checkBudget__"]();
        if (currentIndex != currentAutoHide) {
            setAutoHide(currentIndex);
            updateOptions(formatOptions[currentFormat].format, currentIndex == 0 ? true : false);
        }
    };
    const closeOptionsPanel = () => {
        window["__checkBudget__"]();
        closeOptions(true);
    };
    return (React.createElement(framer_1.Frame, Object.assign({}, rest, { width: "100%", height: "100%", background: "rgb(255,255,255)", style: styleText }),
        React.createElement(framer_1.Frame, { background: "none", right: 40, top: 40, width: 24, height: 24, onTap: closeOptionsPanel }, closeIcon("#000000")),
        React.createElement(framer_1.Stack, { center: true, direction: "horizontal", alignment: "center", distribution: "center", gap: 100, width: "100%", height: 100 },
            React.createElement(framer_1.Frame, { background: "none", width: 250, height: "100%", style: boxStyle },
                React.createElement(framer_1.Page, { overflow: "visible", direction: "vertical", currentPage: currentFormat, defaultEffect: "wheel", top: 0, bottom: 0, left: 20, right: 20, gap: 30, onChangePage: updateFormat }, formatOptions.map((data, index) => {
                    window["__checkBudget__"]();
                    return (React.createElement(framer_1.Stack, { variants: optionsVariants, initial: "unselected", animate: currentFormat == index
                            ? "selected"
                            : "unselected", transition: transtion, key: "format_option_" + index, direction: "vertical", alignment: "start", distribution: "center", width: "100%", gap: 0 },
                        React.createElement(framer_1.Frame, { background: "none", width: "100%", height: 30 * 1.2, style: { textAlign: "left" } },
                            React.createElement("span", null, data.title)),
                        React.createElement(framer_1.Frame, { background: "none", width: "100%", height: 15 * 1.2, style: Object.assign(Object.assign({}, styleCaption), { textAlign: "left" }) },
                            React.createElement("span", null, data.caption))));
                }))),
            React.createElement(framer_1.Frame, { background: "none", width: 250, height: "100%", style: boxStyle },
                React.createElement(framer_1.Page, { overflow: "visible", direction: "vertical", currentPage: currentAutoHide, defaultEffect: "wheel", top: 0, bottom: 0, left: 20, right: 20, gap: 30, onChangePage: updateAutoHide }, autoHideOptions.map((data, index) => {
                    window["__checkBudget__"]();
                    return (React.createElement(framer_1.Stack, { variants: optionsVariants, initial: "unselected", animate: currentAutoHide == index
                            ? "selected"
                            : "unselected", transition: transtion, key: "autohide_option_" + index, direction: "vertical", alignment: "start", distribution: "center", width: "100%", gap: 0 },
                        React.createElement(framer_1.Frame, { background: "none", width: "100%", height: 30 * 1.2, style: { textAlign: "left" } },
                            React.createElement("span", null, data.format)),
                        React.createElement(framer_1.Frame, { background: "none", width: "100%", height: 15 * 1.2, style: Object.assign(Object.assign({}, styleCaption), { textAlign: "left" }) },
                            React.createElement("span", null, data.caption))));
                }))))));
}
exports.PresentationOptions = PresentationOptions;
PresentationOptions.defaultProps = {
    height: "100%",
    width: "100%",
    presentationFormat: "Macbook Pro",
    autoHide: false,
    updateOptions: () => null,
    closeOptions: () => null,
};
// Learn more: https://framer.com/api/property-controls/
framer_1.addPropertyControls(PresentationOptions, {
    presentationFormat: {
        title: "Format",
        type: framer_1.ControlType.String,
        defaultValue: "Macbook Pro",
    },
    autoHide: {
        title: "Auto Hide",
        type: framer_1.ControlType.Boolean,
        defaultValue: false,
    },
});
exports.__info__ = [{ "name": "PresentationOptions", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/ScrollIndicator.tsx":
/*!**********************************!*\
  !*** ./code/ScrollIndicator.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2Nyb2xsSW5kaWNhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9TY3JvbGxJbmRpY2F0b3IudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQThCO0FBQzlCLG1DQU9lO0FBVWYsU0FBZ0IsZUFBZSxDQUFDLEtBQVk7O0lBQ3hDLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxLQUFjLEtBQUssRUFBakIsc0VBQWlCLENBQUE7SUFDL0QsTUFBTSxRQUFRLEdBQUc7UUFDYixPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUU7UUFDL0IsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtLQUMvRCxDQUFBO0lBQ0QsTUFBTSxjQUFjLEdBQUc7UUFDbkIsUUFBUSxFQUFFLEdBQUc7UUFDYixJQUFJLEVBQUUsTUFBTSxHQUFHLENBQUM7S0FDbkIsQ0FBQTtJQUNELE1BQU0saUJBQWlCLEdBQUc7UUFDdEIsUUFBUSxFQUFFLENBQUM7UUFDWCxJQUFJLEVBQUUsQ0FBQztLQUNWLENBQUE7SUFDRCxNQUFNLFFBQVEsR0FBRyxxQkFBWSxFQUFFLENBQUE7SUFDL0IsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7O1FBQ2pCLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUMzRCxNQUFNLFFBQVEsR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFOztZQUM5QixJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUE7U0FDOUQsRUFBRSxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUE7UUFDZixPQUFPLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtLQUN2QyxFQUFFLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFBO0lBQ3pCLE1BQU0sS0FBSyxHQUFHLEdBQUcsRUFBRTs7UUFDZixTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7S0FDbEIsQ0FBQTtJQUNELE9BQU8sQ0FDSCxvQkFBQyxjQUFLLG9CQUNFLElBQUksSUFDUixNQUFNLEVBQUUsc0JBQXNCLEVBQzlCLE1BQU0sRUFBRSxHQUFHLEVBQ1gsS0FBSyxFQUFFLEdBQUcsRUFBRTs7WUFDUixLQUFLLEVBQUUsQ0FBQTtTQUNWO1FBRUQsb0JBQUMsY0FBSyxJQUNGLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLE9BQU8sRUFBRSxTQUFTLEVBQ2xCLE9BQU8sRUFBRSxRQUFRLEVBQ2pCLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQ3JELEdBQUcsRUFBRSxDQUFDLEVBQ04sSUFBSSxFQUFFLENBQUMsRUFDUCxNQUFNLEVBQUMsTUFBTSxFQUNiLElBQUksRUFBRSxDQUFDLEVBQ1AsVUFBVSxFQUFFLFlBQVksR0FDMUIsQ0FDRSxDQUNYLENBQUE7Q0FDSjtBQS9DRCwwQ0ErQ0M7QUFFRCxlQUFlLENBQUMsWUFBWSxHQUFHO0lBQzNCLE1BQU0sRUFBRSxFQUFFO0lBQ1YsS0FBSyxFQUFFLEVBQUU7SUFDVCxVQUFVLEVBQUUsTUFBTTtJQUNsQixJQUFJLEVBQUUsSUFBSTtJQUNWLEtBQUssRUFBRSxDQUFDO0lBQ1IsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUk7SUFDckIsSUFBSSxFQUFFLENBQUM7Q0FDVixDQUFBO0FBRUQsd0RBQXdEO0FBQ3hELDRCQUFtQixDQUFDLGVBQWUsRUFBRTtJQUNqQyxJQUFJLEVBQUU7UUFDRixLQUFLLEVBQUUsTUFBTTtRQUNiLElBQUksRUFBRSxvQkFBVyxDQUFDLE9BQU87UUFDekIsWUFBWSxFQUFFLElBQUk7S0FDckI7SUFDRCxNQUFNLEVBQUU7UUFDSixLQUFLLEVBQUUsUUFBUTtRQUNmLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsWUFBWSxFQUFFLENBQUM7UUFDZixHQUFHLEVBQUUsQ0FBQztRQUNOLEdBQUcsRUFBRSxDQUFDO1FBQ04sSUFBSSxFQUFFLENBQUM7S0FDVjtJQUNELEtBQUssRUFBRTtRQUNILEtBQUssRUFBRSxPQUFPO1FBQ2QsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTTtRQUN4QixZQUFZLEVBQUUsQ0FBQztRQUNmLEdBQUcsRUFBRSxDQUFDO1FBQ04sR0FBRyxFQUFFLEVBQUU7UUFDUCxJQUFJLEVBQUUsR0FBRztLQUNaO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsS0FBSyxFQUFFLGlCQUFpQjtRQUN4QixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO1FBQ3hCLFlBQVksRUFBRSxDQUFDO0tBQ2xCO0NBQ0osQ0FBQyxDQUFBIn0=

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function ScrollIndicator(props) {
    window["__checkComponentBudget__"]();
    const { play, repeat, delay, onTapLink, page } = props, rest = __rest(props, ["play", "repeat", "delay", "onTapLink", "page"]);
    const variants = {
        default: { opacity: 1, top: 5 },
        scroll: { opacity: [1, 1, 0, 0, 1], top: [5, 15, 20, 5, 5] },
    };
    const loopTransition = {
        duration: 1.5,
        loop: repeat - 1,
    };
    const defaultTransition = {
        duration: 0,
        loop: 0,
    };
    const controls = framer_1.useAnimation();
    React.useEffect(() => {
        window["__checkBudget__"]();
        play ? controls.start("scroll") : controls.start("default");
        const interval = setInterval(() => {
            window["__checkBudget__"]();
            play ? controls.start("scroll") : controls.start("default");
        }, delay * 750);
        return () => clearInterval(interval);
    }, [play, repeat, delay]);
    const doTap = () => {
        window["__checkBudget__"]();
        onTapLink(page);
    };
    return (React.createElement(framer_1.Frame, Object.assign({}, rest, { border: "2px solid rgb(0,0,0)", radius: 100, onTap: () => {
            window["__checkBudget__"]();
            doTap();
        } }),
        React.createElement(framer_1.Frame, { variants: variants, initial: "default", animate: controls, transition: play ? loopTransition : defaultTransition, top: 0, left: 6, radius: "100%", size: 3, background: "rgb(0,0,0)" })));
}
exports.ScrollIndicator = ScrollIndicator;
ScrollIndicator.defaultProps = {
    height: 30,
    width: 19,
    background: "none",
    play: true,
    delay: 7,
    onTapLink: () => null,
    page: 1,
};
// Learn more: https://framer.com/api/property-controls/
framer_1.addPropertyControls(ScrollIndicator, {
    play: {
        title: "Play",
        type: framer_1.ControlType.Boolean,
        defaultValue: true,
    },
    repeat: {
        title: "Repeat",
        type: framer_1.ControlType.Number,
        defaultValue: 2,
        min: 1,
        max: 5,
        step: 1,
    },
    delay: {
        title: "Delay",
        type: framer_1.ControlType.Number,
        defaultValue: 7,
        min: 1,
        max: 20,
        step: 0.1,
    },
    page: {
        title: "Section to Link",
        type: framer_1.ControlType.Number,
        defaultValue: 1,
    },
});
exports.__info__ = [{ "name": "ScrollIndicator", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/ScrollLink.tsx":
/*!*****************************!*\
  !*** ./code/ScrollLink.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2Nyb2xsTGluay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvU2Nyb2xsTGluay50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBOEI7QUFDOUIsbUNBQTRFO0FBUzVFLFNBQWdCLFVBQVUsQ0FBQyxLQUFZOztJQUNuQyxNQUFNLEVBQ0YsWUFBWSxFQUNaLFNBQVMsRUFDVCxlQUFlLEVBQ2YsUUFBUSxLQUVSLEtBQUssRUFETCxrRkFDSyxDQUFBO0lBQ1QsTUFBTSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLENBQUE7SUFFM0UsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7O1FBQ2pCLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ3JDLENBQUMsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUM7WUFDdEMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO1FBQzdDLFFBQVEsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUE7S0FDcEUsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO0lBRXBCLE1BQU0sS0FBSyxHQUFHLEdBQUcsRUFBRTs7UUFDZixTQUFTLENBQUMsZUFBZSxFQUFFLFlBQVksQ0FBQyxDQUFBO0tBQzNDLENBQUE7SUFFRCxPQUFPLENBQ0gsb0JBQUMsY0FBSyxvQkFBSyxJQUFJLElBQUUsVUFBVSxFQUFFLFVBQVU7UUFDbEMsS0FBSyxDQUFDLFFBQVE7UUFDZixvQkFBQyxjQUFLLElBQ0YsVUFBVSxFQUFFLHFCQUFxQixFQUNqQyxHQUFHLEVBQUUsQ0FBQyxFQUNOLE1BQU0sRUFBRSxDQUFDLEVBQ1QsS0FBSyxFQUFFLENBQUMsRUFDUixJQUFJLEVBQUUsQ0FBQyxFQUNQLEtBQUssRUFBRSxLQUFLLEdBQ2QsQ0FDRSxDQUNYLENBQUE7Q0FDSjtBQWxDRCxnQ0FrQ0M7QUFFRCxVQUFVLENBQUMsWUFBWSxHQUFHO0lBQ3RCLE1BQU0sRUFBRSxHQUFHO0lBQ1gsS0FBSyxFQUFFLEdBQUc7SUFDVixZQUFZLEVBQUUsQ0FBQztJQUNmLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJO0lBQ3JCLFFBQVEsRUFBRSxPQUFPO0NBQ3BCLENBQUE7QUFFRCw0QkFBbUIsQ0FBQyxVQUFVLEVBQUU7SUFDNUIsZUFBZSxFQUFFO1FBQ2IsS0FBSyxFQUFFLGNBQWM7UUFDckIsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTTtRQUN4QixZQUFZLEVBQUUsbUJBQW1CO0tBQ3BDO0lBQ0QsWUFBWSxFQUFFO1FBQ1YsS0FBSyxFQUFFLFdBQVc7UUFDbEIsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTTtRQUN4QixZQUFZLEVBQUUsQ0FBQztRQUNmLEdBQUcsRUFBRSxDQUFDO1FBQ04sR0FBRyxFQUFFLEtBQUs7UUFDVixJQUFJLEVBQUUsQ0FBQztLQUNWO0lBQ0QsUUFBUSxFQUFFO1FBQ04sS0FBSyxFQUFFLE1BQU07UUFDYixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxJQUFJO1FBQ3RCLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7UUFDM0IsWUFBWSxFQUFFLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQztRQUM1QyxZQUFZLEVBQUUsT0FBTztLQUN4QjtDQUNKLENBQUMsQ0FBQSJ9

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function ScrollLink(props) {
    window["__checkComponentBudget__"]();
    const { scrollToYPos, onTapLink, scrollComponent, linkType } = props, rest = __rest(props, ["scrollToYPos", "onTapLink", "scrollComponent", "linkType"]);
    const [background, setBackground] = React.useState("rgba(255,255,255,0.5)");
    React.useEffect(() => {
        window["__checkBudget__"]();
        React.Children.count(props.children) != 0
            ? setBackground("rgba(255,255,255,0)")
            : setBackground("rgba(17, 153, 238,0.5)");
        linkType == "empty" ? setBackground("rgba(255,255,255,0)") : null;
    }, [props.children]);
    const doTap = () => {
        window["__checkBudget__"]();
        onTapLink(scrollComponent, scrollToYPos);
    };
    return (React.createElement(framer_1.Frame, Object.assign({}, rest, { background: background }),
        props.children,
        React.createElement(framer_1.Frame, { background: "rgba(255,255,255,0)", top: 0, bottom: 0, right: 0, left: 0, onTap: doTap })));
}
exports.ScrollLink = ScrollLink;
ScrollLink.defaultProps = {
    height: 128,
    width: 240,
    scrollToYPos: 0,
    onTapLink: () => null,
    linkType: "child",
};
framer_1.addPropertyControls(ScrollLink, {
    scrollComponent: {
        title: "Scroll Frame",
        type: framer_1.ControlType.String,
        defaultValue: "Scroll Frame Name",
    },
    scrollToYPos: {
        title: "Scroll To",
        type: framer_1.ControlType.Number,
        defaultValue: 0,
        min: 0,
        max: 10000,
        step: 1,
    },
    linkType: {
        title: "Type",
        type: framer_1.ControlType.Enum,
        options: ["empty", "child"],
        optionTitles: ["Empty Frame", "Child Frame"],
        defaultValue: "child",
    },
});
exports.__info__ = [{ "name": "ScrollLink", "children": true, "type": "component" }];


/***/ }),

/***/ "./code/StaticScroller.tsx":
/*!*********************************!*\
  !*** ./code/StaticScroller.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdGljU2Nyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL1N0YXRpY1Njcm9sbGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUE4QjtBQUM5QixtQ0FPZTtBQU1mLFNBQWdCLFlBQVksQ0FBQyxLQUFZOztJQUNyQyxNQUFNLEVBQUUsUUFBUSxLQUFjLEtBQUssRUFBakIsa0NBQWlCLENBQUE7SUFDbkMsTUFBTSxRQUFRLEdBQUcscUJBQVksRUFBRSxDQUFBO0lBQy9CLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFOztRQUNqQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ1gsQ0FBQyxFQUFFLENBQUMsUUFBUTtZQUNaLFVBQVUsRUFBRTtnQkFDUixLQUFLLEVBQUUsQ0FBQztnQkFDUixJQUFJLEVBQUUsT0FBTztnQkFDYixJQUFJLEVBQUUsU0FBUztnQkFDZixRQUFRLEVBQUUsSUFBSTthQUNqQjtTQUNKLENBQUMsQ0FBQTtLQUNMLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO0lBQ2QsT0FBTyxDQUNILG9CQUFDLGNBQUssb0JBQUssSUFBSSxJQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07UUFDMUMsb0JBQUMsZUFBTSxJQUNILGFBQWEsRUFBRSxRQUFRLEVBQ3ZCLFNBQVMsRUFBRSxVQUFVLEVBQ3JCLGFBQWEsRUFBRSxJQUFJLEVBQ25CLFdBQVcsRUFBRSxJQUFJLEVBQ2pCLFVBQVUsRUFBRSxNQUFNLEVBQ2xCLElBQUksRUFBRSxDQUFDLEVBQ1AsS0FBSyxFQUFFLENBQUMsRUFDUixHQUFHLEVBQUUsQ0FBQyxFQUNOLE1BQU0sRUFBRSxDQUFDLElBRVIsS0FBSyxDQUFDLFFBQVEsQ0FDVixDQUNMLENBQ1gsQ0FBQTtDQUNKO0FBL0JELG9DQStCQztBQUVELFlBQVksQ0FBQyxZQUFZLEdBQUc7SUFDeEIsUUFBUSxFQUFFLENBQUM7SUFDWCxVQUFVLEVBQUUsTUFBTTtDQUNyQixDQUFBO0FBRUQsNEJBQW1CLENBQUMsWUFBWSxFQUFFO0lBQzlCLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUU7Q0FDOUUsQ0FBQyxDQUFBIn0=

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function PageScroller(props) {
    window["__checkComponentBudget__"]();
    const { scrollTo } = props, rest = __rest(props, ["scrollTo"]);
    const doScroll = framer_1.useAnimation();
    React.useEffect(() => {
        window["__checkBudget__"]();
        doScroll.start({
            y: -scrollTo,
            transition: {
                delay: 0,
                type: "tween",
                ease: "easeOut",
                duration: 0.75,
            },
        });
    }, [scrollTo]);
    return (React.createElement(framer_1.Frame, Object.assign({}, rest, { width: "100%", height: "100%" }),
        React.createElement(framer_1.Scroll, { scrollAnimate: doScroll, direction: "vertical", directionLock: true, dragEnabled: true, background: "none", left: 0, right: 0, top: 0, bottom: 0 }, props.children)));
}
exports.PageScroller = PageScroller;
PageScroller.defaultProps = {
    scrollTo: 0,
    background: "none",
};
framer_1.addPropertyControls(PageScroller, {
    scrollTo: { type: framer_1.ControlType.Number, title: "Scroll To", defaultValue: 0 },
});
exports.__info__ = [{ "name": "PageScroller", "children": true, "type": "component" }];


/***/ }),

/***/ "./code/Timer.tsx":
/*!************************!*\
  !*** ./code/Timer.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL1RpbWVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUE4QjtBQUM5QixtQ0FBNEU7QUFRNUUsU0FBZ0IsS0FBSyxDQUFDLEtBQVk7O0lBQzlCLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsS0FBYyxLQUFLLEVBQWpCLHVEQUFpQixDQUFBO0lBQ3BELE1BQU0sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUMvQyxNQUFNLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDdEQsTUFBTSxXQUFXLEdBQUcsQ0FBQyxPQUFlLEVBQUUsRUFBRTs7UUFDcEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUE7UUFDeEMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUE7UUFDekQsTUFBTSxPQUFPLEdBQUcsT0FBTyxHQUFHLEtBQUssR0FBRyxJQUFJLEdBQUcsT0FBTyxHQUFHLEVBQUUsQ0FBQTtRQUNyRCxNQUFNLFdBQVcsR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUE7UUFDcEQsTUFBTSxhQUFhLEdBQUcsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFBO1FBQzVELE1BQU0sYUFBYSxHQUFHLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxD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

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function Timer(props) {
    window["__checkComponentBudget__"]();
    const { active, darkbg, showClock } = props, rest = __rest(props, ["active", "darkbg", "showClock"]);
    const [seconds, setSeconds] = React.useState(0);
    const [isActive, setIsActive] = React.useState(active);
    const timerFormat = (elapsed) => {
        window["__checkBudget__"]();
        const hours = Math.floor(elapsed / 3600);
        const minutes = Math.floor((elapsed - hours * 3600) / 60);
        const seconds = elapsed - hours * 3600 - minutes * 60;
        const stringHours = hours < 10 ? "0" + hours : hours;
        const stringMinutes = minutes < 10 ? "0" + minutes : minutes;
        const stringSeconds = seconds < 10 ? "0" + seconds : seconds;
        return stringHours + ":" + stringMinutes + ":" + stringSeconds;
    };
    const formatAMPM = (date) => {
        window["__checkBudget__"]();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? "pm" : "am";
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? "0" + minutes : minutes;
        var strTime = hours + ":" + minutes + " " + ampm;
        return strTime;
    };
    const style = {
        fontFamily: "GDSherpa-Medium",
        fontSize: "28px",
        lineHeight: "1.2em",
    };
    const variants = {
        light: { color: "rgb(255,255,255)" },
        dark: { color: "rgb(0,0,0)" },
    };
    const animTransition = {
        duration: 0.5,
    };
    React.useEffect(() => {
        window["__checkBudget__"]();
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                window["__checkBudget__"]();
                setSeconds((seconds) => seconds + 1);
            }, 1000);
        }
        else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);
    React.useEffect(() => {
        window["__checkBudget__"]();
        setSeconds(0);
    }, [active]);
    const toggle = () => {
        window["__checkBudget__"]();
        setIsActive(!isActive);
    };
    return (React.createElement(framer_1.Frame, Object.assign({ variants: variants, initial: darkbg ? "light" : "dark", animate: darkbg ? "light" : "dark", transition: animTransition }, rest, { onTap: toggle, width: showClock ? 270 : 140, height: 28 * 1.2, style: style }),
        React.createElement("span", { style: { display: "block", textAlign: "right" } }, !showClock
            ? timerFormat(seconds)
            : timerFormat(seconds) + " • " + formatAMPM(new Date()))));
}
exports.Timer = Timer;
Timer.defaultProps = {
    height: 128,
    width: 240,
    background: "none",
    active: true,
    darkbg: true,
    showClock: true,
};
// Learn more: https://framer.com/api/property-controls/
framer_1.addPropertyControls(Timer, {
    active: {
        title: "Active",
        type: framer_1.ControlType.Boolean,
        defaultValue: true,
    },
    darkbg: {
        title: "Dark BG",
        type: framer_1.ControlType.Boolean,
        defaultValue: true,
    },
    showClock: {
        title: "Clock",
        type: framer_1.ControlType.Boolean,
        defaultValue: true,
    },
});
exports.__info__ = [{ "name": "Timer", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/VideoPlayer.tsx":
/*!******************************!*\
  !*** ./code/VideoPlayer.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlkZW9QbGF5ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL1ZpZGVvUGxheWVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwrQkFBOEI7QUFDOUIsbUNBQW9FO0FBRXBFLElBQUssT0FHSjtBQUhELFdBQUssT0FBTztJQUNSLDBCQUFlLENBQUE7SUFDZixzQkFBVyxDQUFBO0FBQ2YsQ0FBQyxFQUhJLE9BQU8sS0FBUCxPQUFPLFFBR1g7QUFjRCxNQUFhLFdBQVksU0FBUSxLQUFLLENBQUMsU0FBZ0I7SUF5Q25ELE1BQU07O1FBQ0YsSUFBSSxFQUNBLEtBQUssRUFDTCxNQUFNLEVBQ04sT0FBTyxFQUNQLEdBQUcsRUFDSCxLQUFLLEVBQ0wsUUFBUSxFQUNSLElBQUksRUFDSixLQUFLLEVBQ0wsUUFBUSxHQUNYLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtRQUVkLElBQUkscUJBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxxQkFBWSxDQUFDLE9BQU8sRUFBRTtZQUNoRCxRQUFRLEdBQUcsS0FBSyxDQUFBO1lBQ2hCLEtBQUssR0FBRyxJQUFJLENBQUE7U0FDZjtRQUVELE9BQU8sQ0FDSCw2QkFDSSxLQUFLLEVBQUU7Z0JBQ0gsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLGVBQWUsRUFBRSxNQUFNO2dCQUN2QixLQUFLLEVBQUUsTUFBTTtnQkFDYixRQUFRLEVBQUUsTUFBTTthQUNuQjtZQUVELCtCQUNJLEdBQUcsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUNuQixRQUFRLEVBQUUsUUFBUSxFQUNsQixJQUFJLEVBQUUsSUFBSSxFQUNWLEtBQUssRUFBRSxLQUFLLEVBQ1osUUFBUSxFQUFFLFFBQVEsRUFDbEIsT0FBTyxFQUFDLE1BQU0sRUFDZCxXQUFXLFFBQ1gsS0FBSyxFQUFFO29CQUNILEtBQUssRUFBRSxNQUFNO29CQUNiLE1BQU0sRUFBRSxNQUFNO29CQUNkLFNBQVMsRUFBRSxPQUFPO29CQUNsQixjQUFjLEVBQUUsU0FBUztpQkFDNUIsRUFDRCxHQUFHLEVBQUUsT0FBTyxLQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUM1Qzt5REFFQSxDQUNULENBQUE7S0FDSjs7QUF6Rkwsa0NBMEZDO0FBekZVLHdCQUFZLEdBQUc7SUFDbEIsS0FBSyxFQUFFLEdBQUc7SUFDVixNQUFNLEVBQUUsR0FBRztJQUNYLE9BQU8sRUFBRSxPQUFPLENBQUMsR0FBRztJQUNwQixHQUFHLEVBQUUsbURBQW1EO0lBQ3hELEtBQUssRUFBRSxFQUFFO0lBQ1QsUUFBUSxFQUFFLElBQUk7SUFDZCxJQUFJLEVBQUUsSUFBSTtJQUNWLEtBQUssRUFBRSxJQUFJO0lBQ1gsUUFBUSxFQUFFLElBQUk7Q0FDakIsQ0FBQTtBQUVNLDRCQUFnQixHQUE0QjtJQUMvQyxPQUFPLEVBQUU7UUFDTCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxhQUFhO1FBQy9CLEtBQUssRUFBRSxRQUFRO1FBQ2YsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDO0tBQ3hDO0lBQ0QsR0FBRyxFQUFFO1FBQ0QsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTTtRQUN4QixLQUFLLEVBQUUsR0FBRztRQUNWLFdBQVcsRUFBRSxpQkFBaUI7UUFDOUIsTUFBTSxDQUFDLEtBQUs7O1lBQ1IsT0FBTyxLQUFLLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQyxLQUFLLENBQUE7U0FDekM7S0FDSjtJQUNELEtBQUssRUFBRTtRQUNILElBQUksRUFBRSxvQkFBVyxDQUFDLElBQUk7UUFDdEIsS0FBSyxFQUFFLEdBQUc7UUFDVixnQkFBZ0IsRUFBRSxDQUFDLEtBQUssQ0FBQztRQUN6QixNQUFNLENBQUMsS0FBSzs7WUFDUixPQUFPLEtBQUssQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDLEdBQUcsQ0FBQTtTQUN2QztLQUNKO0lBQ0QsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7SUFDdEQsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7SUFDbEQsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7SUFDcEQsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7Q0FDN0QsQ0FBQSJ9

Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
var SrcType;
(function (SrcType) {
    SrcType["Video"] = "Video";
    SrcType["Url"] = "URL";
})(SrcType || (SrcType = {}));
class VideoPlayer extends React.Component {
    render() {
        window["__checkBudget__"]();
        let { width, height, srcType, url, video, autoplay, loop, muted, controls, } = this.props;
        if (framer_1.RenderTarget.current() != framer_1.RenderTarget.preview) {
            controls = false;
            muted = true;
        }
        return (React.createElement("div", { style: {
                width: "100%",
                height: "100%",
                overflow: "hidden",
                backgroundColor: "#000",
                color: "#333",
                fontSize: "14px",
            } },
            React.createElement("video", { key: `#${autoplay}`, autoPlay: autoplay, loop: loop, muted: muted, controls: controls, preload: "auto", playsInline: true, style: {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "50% 50%",
                }, src: srcType === SrcType.Url ? url : video }),
            "Your browser does not support HTML5 video."));
    }
}
exports.VideoPlayer = VideoPlayer;
VideoPlayer.defaultProps = {
    width: 320,
    height: 180,
    srcType: SrcType.Url,
    url: "https://assets.mixkit.co/videos/1489/1489-720.mp4",
    video: "",
    autoplay: true,
    loop: true,
    muted: true,
    controls: true,
};
VideoPlayer.propertyControls = {
    srcType: {
        type: framer_1.ControlType.SegmentedEnum,
        title: "Source",
        options: [SrcType.Url, SrcType.Video],
    },
    url: {
        type: framer_1.ControlType.String,
        title: " ",
        placeholder: ".../example.mp4",
        hidden(props) {
            window["__checkBudget__"]();
            return props.srcType === SrcType.Video;
        },
    },
    video: {
        type: framer_1.ControlType.File,
        title: " ",
        allowedFileTypes: ["mp4"],
        hidden(props) {
            window["__checkBudget__"]();
            return props.srcType === SrcType.Url;
        },
    },
    autoplay: { type: framer_1.ControlType.Boolean, title: "Play" },
    loop: { type: framer_1.ControlType.Boolean, title: "Loop" },
    muted: { type: framer_1.ControlType.Boolean, title: "Muted" },
    controls: { type: framer_1.ControlType.Boolean, title: "Controls" },
};
exports.__info__ = [{ "name": "VideoPlayer", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/_Overrides.tsx":
/*!*****************************!*\
  !*** ./code/_Overrides.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX092ZXJyaWRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvX092ZXJyaWRlcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsbUNBQXVDO0FBRTFCLFFBQUEsSUFBSSxHQUFHLGFBQUksQ0FBQztJQUNyQixXQUFXLEVBQUUsQ0FBQztJQUNkLFFBQVEsRUFBRSxDQUFDO0lBQ1gsTUFBTSxFQUFFLENBQUM7Q0FDWixDQUFDLENBQUE7QUFFRiw2Q0FBNkM7QUFDN0MsU0FBZ0IsWUFBWTs7SUFDeEIsT0FBTztRQUNILE9BQU8sRUFBRSxZQUFJLENBQUMsV0FBVztRQUN6QixVQUFVLENBQUMsSUFBSTs7WUFDWCxZQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQTtZQUN2QixZQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQTtZQUNqQixZQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtTQUNsQjtLQUNKLENBQUE7Q0FDSjtBQVRELG9DQVNDO0FBQ0QsU0FBZ0IsUUFBUTs7SUFDcEIsT0FBTztRQUNILFNBQVMsQ0FBQyxJQUFJOztZQUNWLFlBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFBO1NBQzFCO0tBQ0osQ0FBQTtDQUNKO0FBTkQsNEJBTUM7QUFFRCwyQ0FBMkM7QUFDM0MsU0FBZ0IsT0FBTzs7SUFDbkIsT0FBTztRQUNILE9BQU8sRUFBRSxZQUFJLENBQUMsTUFBTTtRQUNwQixVQUFVLENBQUMsSUFBSTs7WUFDWCxZQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtTQUNyQjtLQUNKLENBQUE7Q0FDSjtBQVBELDBCQU9DO0FBQ0QsU0FBZ0IsV0FBVzs7SUFDdkIsT0FBTztRQUNILFdBQVcsRUFBRSxZQUFJLENBQUMsTUFBTTtRQUN4QixTQUFTLENBQUMsSUFBSTs7WUFDVixZQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtTQUNyQjtLQUNKLENBQUE7Q0FDSjtBQVBELGtDQU9DO0FBRUQsc0NBQXNDO0FBQ3RDLFNBQWdCLFNBQVM7O0lBQ3JCLE9BQU87UUFDSCxRQUFRLEVBQUUsWUFBSSxDQUFDLFFBQVE7S0FDMUIsQ0FBQTtDQUNKO0FBSkQsOEJBSUM7QUFDRCxTQUFnQixVQUFVOztJQUN0QixPQUFPO1FBQ0gsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJOztZQUNmLG1CQUFtQjtZQUNuQixZQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTtTQUN2QjtLQUNKLENBQUE7Q0FDSjtBQVBELGdDQU9DIn0=

Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const framer_1 = __webpack_require__(/*! framer */ "framer");
exports.data = framer_1.Data({
    CurrentPage: 0,
    ScrollTo: 0,
    PageTo: 0,
});
//enable presentation nav from external links
function Presentation() {
    window["__checkBudget__"]();
    return {
        current: exports.data.CurrentPage,
        pageChange(page) {
            window["__checkBudget__"]();
            exports.data.CurrentPage = page;
            exports.data.ScrollTo = 0;
            exports.data.PageTo = 0;
        },
    };
}
exports.Presentation = Presentation;
function PageLink() {
    window["__checkBudget__"]();
    return {
        onTapLink(page) {
            window["__checkBudget__"]();
            exports.data.CurrentPage = page;
        },
    };
}
exports.PageLink = PageLink;
// enable pagging items from external links
function Pagging() {
    window["__checkBudget__"]();
    return {
        current: exports.data.PageTo,
        pageChange(page) {
            window["__checkBudget__"]();
            exports.data.PageTo = page;
        },
    };
}
exports.Pagging = Pagging;
function PaggingLink() {
    window["__checkBudget__"]();
    return {
        currentPage: exports.data.PageTo,
        onTapLink(page) {
            window["__checkBudget__"]();
            exports.data.PageTo = page;
        },
    };
}
exports.PaggingLink = PaggingLink;
//enable scrolling from external links
function Scrolling() {
    window["__checkBudget__"]();
    return {
        scrollTo: exports.data.ScrollTo,
    };
}
exports.Scrolling = Scrolling;
function ScrollLink() {
    window["__checkBudget__"]();
    return {
        onTapLink(scr, yPos) {
            window["__checkBudget__"]();
            //console.log(yPos)
            exports.data.ScrollTo = yPos;
        },
    };
}
exports.ScrollLink = ScrollLink;
exports.__info__ = [{ "name": "Presentation", "type": "override" }, { "name": "PageLink", "type": "override" }, { "name": "Pagging", "type": "override" }, { "name": "PaggingLink", "type": "override" }, { "name": "Scrolling", "type": "override" }, { "name": "ScrollLink", "type": "override" }];


/***/ }),

/***/ "./code/canvas.tsx":
/*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared({"children":[]});
exports.colors = Object.freeze({
    /** #FFEE00 */
    "Yellow": "var(--token-70782417-45d8-4836-8e18-3e8a30bd12c9, rgb(255, 238, 0))",
    /** #A5FFF8 */
    "Teal": "var(--token-e47acecb-ccdd-48aa-8522-672193f26f33, rgb(165, 255, 248))",
    /** #D7EEEE */
    "Light Grey": "var(--token-471e33de-291d-4efc-900b-9111ee478d8c, rgb(215, 238, 238))",
    /** #FEDCE0 */
    "Pink": "var(--token-be687c90-ba71-4f32-b62a-3124646b6b07, rgb(254, 220, 224))",
});
exports.__info__ = [];


/***/ }),

/***/ "./designDependencies.js":
/*!*******************************!*\
  !*** ./designDependencies.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {


const designs = {}

// The packages are passed in through a template
designs["@framer/framer.default"] = {
  "root" : {
    "__class" : "RootNode",
    "children" : [
      {
        "__class" : "FrameNode",
        "aspectRatio" : null,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "bottom" : null,
        "centerAnchorX" : 0,
        "centerAnchorY" : 0,
        "children" : [
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "bottom" : 141,
            "centerAnchorX" : 0.49886363636363634,
            "centerAnchorY" : 0.58269720101781175,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/SegmentedControl.tsx_SegmentedControl",
            "codeComponentPackageVersion" : null,
            "codeComponentProps" : {
              "activeBackground" : "#ffffff",
              "activeBorderColor" : "rgba(0, 0, 0, 0)",
              "activeBorderSize" : 1,
              "activeTextColor" : "#0099ff",
              "bottomActiveBorderSize" : 1,
              "bottomLeftBorderRadius" : 8,
              "bottomRightBorderRadius" : 8,
              "defaultSegment" : 1,
              "direction" : "horizontal",
              "disabled" : false,
              "disabledBackground" : "#ebebeb",
              "disabledBorderColor" : "rgba(0, 0, 0, 0)",
              "disabledBorderSize" : 1,
              "disabledTextColor" : "#AAAAAA",
              "divider" : false,
              "dividerColor" : "#ADADAD",
              "font" : false,
              "fontFamily" : "",
              "fontSize" : 12,
              "fontWeight" : 100,
              "gap" : 0,
              "inactiveBackground" : "rgba(0, 0, 0, 0)",
              "inactiveBorderColor" : "rgba(0, 0, 0, 0)",
              "inactiveBorderSize" : 1,
              "inactiveTextColor" : "#BBBBBB",
              "isMixedActiveBorder" : false,
              "isMixedBorderRadius" : false,
              "leftActiveBorderSize" : 1,
              "radius" : 8,
              "rightActiveBorderSize" : 1,
              "segments" : [
                {
                  "enabled" : true,
                  "type" : "string",
                  "value" : "Item 1"
                },
                {
                  "enabled" : true,
                  "type" : "string",
                  "value" : "Item 2"
                },
                {
                  "enabled" : true,
                  "type" : "string",
                  "value" : "Item 3"
                }
              ],
              "segmentTransition" : {
                "damping" : 60,
                "delay" : 0,
                "duration" : 0.29999999999999999,
                "ease" : [
                  0.44,
                  0,
                  0.56000000000000005,
                  1
                ],
                "mass" : 1,
                "stiffness" : 500,
                "type" : "spring"
              },
              "shadow" : true,
              "slide" : true,
              "topActiveBorderSize" : 1,
              "topLeftBorderRadius" : 8,
              "topRightBorderRadius" : 8,
              "trackColor" : "#ebebeb",
              "variant" : "active"
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "duplicatedFrom" : [
              "P93fU2NLp"
            ],
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "height" : 46,
            "heightType" : 0,
            "id" : "lcDzVF4Ph",
            "intrinsicHeight" : 45,
            "intrinsicWidth" : 300,
            "left" : 36,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "Gg4vYAeh1",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 37,
            "rotation" : 0,
            "top" : null,
            "visible" : true,
            "width" : 367,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "bottom" : null,
            "centerAnchorX" : 0,
            "centerAnchorY" : 0,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/SegmentedControl.tsx_SegmentedControl",
            "codeComponentPackageVersion" : null,
            "codeComponentProps" : {
              "activeBackground" : "#ffffff",
              "activeBorderColor" : "rgba(0, 0, 0, 0)",
              "activeBorderSize" : 1,
              "activeTextColor" : "#0099ff",
              "bottomActiveBorderSize" : 1,
              "bottomLeftBorderRadius" : 8,
              "bottomRightBorderRadius" : 8,
              "defaultSegment" : 1,
              "direction" : "horizontal",
              "disabled" : false,
              "disabledBackground" : "#ebebeb",
              "disabledBorderColor" : "rgba(0, 0, 0, 0)",
              "disabledBorderSize" : 1,
              "disabledTextColor" : "#AAAAAA",
              "divider" : false,
              "dividerColor" : "#ADADAD",
              "font" : true,
              "fontFamily" : "georgia",
              "fontSize" : 12,
              "fontWeight" : 100,
              "gap" : 0,
              "inactiveBackground" : "rgba(0, 0, 0, 0)",
              "inactiveBorderColor" : "rgba(0, 0, 0, 0)",
              "inactiveBorderSize" : 1,
              "inactiveTextColor" : "#BBBBBB",
              "isMixedActiveBorder" : false,
              "isMixedBorderRadius" : false,
              "leftActiveBorderSize" : 1,
              "radius" : 8,
              "rightActiveBorderSize" : 1,
              "segments" : [
                {
                  "enabled" : true,
                  "type" : "string",
                  "value" : "Item 1"
                },
                {
                  "enabled" : true,
                  "type" : "string",
                  "value" : "Item 2"
                },
                {
                  "enabled" : true,
                  "type" : "string",
                  "value" : "Item 3"
                }
              ],
              "segmentTransition" : {
                "damping" : 60,
                "delay" : 0,
                "duration" : 0.29999999999999999,
                "ease" : [
                  0.44,
                  0,
                  0.56000000000000005,
                  1
                ],
                "mass" : 1,
                "stiffness" : 500,
                "type" : "spring"
              },
              "shadow" : true,
              "slide" : true,
              "topActiveBorderSize" : 1,
              "topLeftBorderRadius" : 8,
              "topRightBorderRadius" : 8,
              "trackColor" : "#ebebeb",
              "variant" : "active"
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "duplicatedFrom" : [
              "nIIuzs2RG"
            ],
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "height" : 45,
            "heightType" : 0,
            "id" : "wODYnpJi7",
            "intrinsicHeight" : 45,
            "intrinsicWidth" : 300,
            "left" : 71,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "Gg4vYAeh1",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : null,
            "rotation" : 0,
            "top" : 294,
            "visible" : true,
            "width" : 300,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "bottom" : null,
            "centerAnchorX" : 0.26931818181818185,
            "centerAnchorY" : 0.26335877862595419,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Button.tsx_Button",
            "codeComponentPackageVersion" : null,
            "codeComponentProps" : {
              "alignment" : "center",
              "bottomLeft" : 10,
              "bottomRight" : 10,
              "colorTransition" : {
                "damping" : 60,
                "delay" : 0,
                "duration" : 0.29999999999999999,
                "ease" : [
                  0.44,
                  0,
                  0.56000000000000005,
                  1
                ],
                "mass" : 1,
                "stiffness" : 500,
                "type" : "spring"
              },
              "defaultBackground" : "#0099FF",
              "defaultTextColor" : "#ffffff",
              "disabled" : false,
              "disabledBackground" : "#f3f3f3",
              "disabledTextColor" : "#AAAAAA",
              "font" : true,
              "fontFamily" : "",
              "fontSize" : 14,
              "fontWeight" : 600,
              "hoverBackground" : "#0077FF",
              "hoverTextColor" : "#ffffff",
              "isMixed" : false,
              "padding" : 10,
              "paddingBottom" : 0,
              "paddingLeft" : 0,
              "paddingPerSide" : false,
              "paddingRight" : 0,
              "paddingTop" : 0,
              "pressedBackground" : "#0088FF",
              "pressedTextColor" : "#ffffff",
              "radius" : 10,
              "scaleTransition" : {
                "damping" : 30,
                "delay" : 0,
                "duration" : 0.29999999999999999,
                "mass" : 1,
                "stiffness" : 600,
                "type" : "spring"
              },
              "shadow" : true,
              "text" : "Hello Framer!",
              "topLeft" : 10,
              "topRight" : 10,
              "variant" : "Default",
              "whileHoverScale" : 1.1000000000000001,
              "whileTapScale" : 0.94999999999999996
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "duplicatedFrom" : [
              "e4jL7E1Pd"
            ],
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "height" : 45,
            "heightType" : 0,
            "id" : "tsHYmdJBD",
            "intrinsicHeight" : 45,
            "intrinsicWidth" : 135,
            "left" : 51,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "Gg4vYAeh1",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : null,
            "rotation" : 0,
            "top" : 81,
            "visible" : true,
            "width" : 135,
            "widthType" : 0
          }
        ],
        "clip" : true,
        "codeOverrideEnabled" : false,
        "constraintsLocked" : false,
        "duplicatedFrom" : null,
        "exportOptions" : [

        ],
        "fillColor" : "white",
        "fillEnabled" : true,
        "fillImage" : null,
        "fillImageOriginalName" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillType" : "color",
        "framePreset" : null,
        "guidesX" : [

        ],
        "guidesY" : [

        ],
        "height" : 393,
        "heightType" : 0,
        "id" : "Gg4vYAeh1",
        "intrinsicHeight" : null,
        "intrinsicWidth" : null,
        "isExternalMaster" : null,
        "isMaster" : false,
        "isTarget" : false,
        "left" : 65,
        "locked" : false,
        "name" : null,
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "uXpaPrDOp",
        "previewSettings" : null,
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "top" : -67,
        "visible" : true,
        "width" : 440,
        "widthType" : 0
      },
      {
        "__class" : "FrameNode",
        "aspectRatio" : null,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "bottom" : null,
        "centerAnchorX" : 0,
        "centerAnchorY" : 0,
        "children" : [

        ],
        "clip" : true,
        "codeOverrideEnabled" : false,
        "constraintsLocked" : false,
        "duplicatedFrom" : [
          "Gg4vYAeh1"
        ],
        "exportOptions" : [

        ],
        "fillColor" : "white",
        "fillEnabled" : true,
        "fillImage" : null,
        "fillImageOriginalName" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillType" : "color",
        "framePreset" : null,
        "guidesX" : [

        ],
        "guidesY" : [

        ],
        "height" : 393,
        "heightType" : 0,
        "id" : "fg_XnlFJw",
        "intrinsicHeight" : null,
        "intrinsicWidth" : null,
        "isExternalMaster" : null,
        "isMaster" : false,
        "isTarget" : false,
        "left" : 534,
        "locked" : false,
        "name" : null,
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "uXpaPrDOp",
        "previewSettings" : null,
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "top" : -67,
        "visible" : true,
        "width" : 440,
        "widthType" : 0
      },
      {
        "__class" : "FrameNode",
        "aspectRatio" : null,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "bottom" : null,
        "centerAnchorX" : 0,
        "centerAnchorY" : 0,
        "children" : [

        ],
        "clip" : true,
        "codeOverrideEnabled" : false,
        "constraintsLocked" : false,
        "duplicatedFrom" : null,
        "exportOptions" : [

        ],
        "fillColor" : "white",
        "fillEnabled" : true,
        "fillImage" : null,
        "fillImageOriginalName" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillType" : "color",
        "framePreset" : null,
        "guidesX" : [

        ],
        "guidesY" : [

        ],
        "height" : 237,
        "heightType" : 0,
        "id" : "QMb8z48BW",
        "intrinsicHeight" : null,
        "intrinsicWidth" : null,
        "isExternalMaster" : null,
        "isMaster" : false,
        "isTarget" : false,
        "left" : 41,
        "locked" : false,
        "name" : null,
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "uXpaPrDOp",
        "previewSettings" : null,
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "top" : -356,
        "visible" : true,
        "width" : 285,
        "widthType" : 0
      },
      {
        "__class" : "FrameNode",
        "aspectRatio" : null,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "bottom" : null,
        "centerAnchorX" : 0,
        "centerAnchorY" : 0,
        "children" : [

        ],
        "clip" : true,
        "codeOverrideEnabled" : false,
        "constraintsLocked" : false,
        "duplicatedFrom" : [
          "QMb8z48BW"
        ],
        "exportOptions" : [

        ],
        "fillColor" : "white",
        "fillEnabled" : true,
        "fillImage" : null,
        "fillImageOriginalName" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillType" : "color",
        "framePreset" : null,
        "guidesX" : [

        ],
        "guidesY" : [

        ],
        "height" : 237,
        "heightType" : 0,
        "id" : "hG4KsEcH0",
        "intrinsicHeight" : null,
        "intrinsicWidth" : null,
        "isExternalMaster" : null,
        "isMaster" : false,
        "isTarget" : false,
        "left" : 469,
        "locked" : false,
        "name" : null,
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "uXpaPrDOp",
        "previewSettings" : null,
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "top" : -198,
        "visible" : true,
        "width" : 285,
        "widthType" : 0
      },
      {
        "__class" : "FrameNode",
        "aspectRatio" : null,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "bottom" : null,
        "centerAnchorX" : 0,
        "centerAnchorY" : 0,
        "children" : [
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "bottom" : null,
            "centerAnchorX" : 0.6675191815856778,
            "centerAnchorY" : 0.24871355060034306,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Gif.tsx_Gif",
            "codeComponentPackageVersion" : null,
            "codeComponentProps" : {
              "bottomLeft" : 0,
              "bottomRight" : 0,
              "isMixed" : false,
              "lockImage" : true,
              "radius" : 0,
              "search" : "Abstract",
              "topLeft" : 0,
              "topRight" : 0
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "duplicatedFrom" : [
              "QaqJbpiFu"
            ],
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "height" : 200,
            "heightType" : 0,
            "id" : "dtlaQwj9t",
            "intrinsicHeight" : 200,
            "intrinsicWidth" : 200,
            "left" : null,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "yR_krJJF1",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 160,
            "rotation" : 0,
            "top" : 45,
            "visible" : true,
            "width" : 200,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "bottom" : 98,
            "centerAnchorX" : 0.78132992327365725,
            "centerAnchorY" : 0.660377358490566,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Gif.tsx_Gif",
            "codeComponentPackageVersion" : null,
            "codeComponentProps" : {
              "bottomLeft" : 0,
              "bottomRight" : 0,
              "isMixed" : false,
              "lockImage" : false,
              "radius" : 0,
              "search" : "Abstract",
              "topLeft" : 0,
              "topRight" : 0
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "duplicatedFrom" : [
              "QaqJbpiFu",
              "dtlaQwj9t"
            ],
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "height" : 200,
            "heightType" : 0,
            "id" : "RRyZWAU5Y",
            "intrinsicHeight" : 200,
            "intrinsicWidth" : 200,
            "left" : null,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "yR_krJJF1",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 71,
            "rotation" : 0,
            "top" : null,
            "visible" : true,
            "width" : 200,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "bottom" : 53,
            "centerAnchorX" : 0.33503836317135549,
            "centerAnchorY" : 0.73756432246998282,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Gif.tsx_Gif",
            "codeComponentPackageVersion" : null,
            "codeComponentProps" : {
              "bottomLeft" : 0,
              "bottomRight" : 0,
              "isMixed" : false,
              "lockImage" : false,
              "radius" : 0,
              "search" : "Abstract",
              "topLeft" : 0,
              "topRight" : 0
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "duplicatedFrom" : [
              "QaqJbpiFu",
              "dtlaQwj9t",
              "RRyZWAU5Y"
            ],
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "height" : 200,
            "heightType" : 0,
            "id" : "LJ6kYPCAR",
            "intrinsicHeight" : 200,
            "intrinsicWidth" : 200,
            "left" : 162,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "yR_krJJF1",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : null,
            "rotation" : 0,
            "top" : null,
            "visible" : true,
            "width" : 200,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "bottom" : -178,
            "centerAnchorX" : 0.3126598465473146,
            "centerAnchorY" : 0.52658662092624353,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Unsplash.tsx_Unsplash",
            "codeComponentPackageVersion" : null,
            "codeComponentProps" : {
              "bottomLeft" : 0,
              "bottomRight" : 0,
              "isMixed" : false,
              "lockImage" : true,
              "radius" : 0,
              "search" : "",
              "size" : "XL",
              "topLeft" : 0,
              "topRight" : 0
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "duplicatedFrom" : [
              "ns1HlLZBa"
            ],
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "height" : 908,
            "heightType" : 0,
            "id" : "lotRHqcSf",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "left" : -254,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "yR_krJJF1",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 39,
            "rotation" : 0,
            "top" : -147,
            "visible" : true,
            "width" : 997,
            "widthType" : 0
          }
        ],
        "clip" : true,
        "codeOverrideEnabled" : false,
        "constraintsLocked" : false,
        "duplicatedFrom" : null,
        "exportOptions" : [

        ],
        "fillColor" : "white",
        "fillEnabled" : true,
        "fillImage" : null,
        "fillImageOriginalName" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillType" : "color",
        "framePreset" : null,
        "guidesX" : [

        ],
        "guidesY" : [

        ],
        "height" : 583,
        "heightType" : 0,
        "id" : "yR_krJJF1",
        "intrinsicHeight" : null,
        "intrinsicWidth" : null,
        "isExternalMaster" : null,
        "isMaster" : false,
        "isTarget" : false,
        "left" : -96,
        "locked" : false,
        "name" : null,
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "uXpaPrDOp",
        "previewSettings" : null,
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "top" : -984,
        "visible" : true,
        "width" : 782,
        "widthType" : 0
      }
    ],
    "duplicatedFrom" : null,
    "guidesX" : [
      -1177
    ],
    "guidesY" : [
      -90,
      63,
      170
    ],
    "homeNodeId" : null,
    "id" : "uXpaPrDOp",
    "name" : null,
    "originalid" : null,
    "parentid" : null,
    "tokens" : {

    },
    "tokensIndex" : [

    ],
    "visible" : false
  },
  "version" : 64
}

module.exports = designs


/***/ }),

/***/ "./entry.js":
/*!******************!*\
  !*** ./entry.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const packageInfo = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

try {
    // This is a special webpack thing that watches the whole directory
    // https://github.com/webpack/docs/wiki/context
    const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

    ctx.keys().forEach(key => {
        packageInfo.sourceModules[key] = () => ctx(key)
    })
} catch (e) {
    // Handle when the code directory is missing
    // See issue #8178 for more information
}

const packages = {}

// The packages are passed in through a template

                packages["framer"] = () => {
                    var packageInfo = {}
                    var designJson
                    try {
                        packageInfo = __webpack_require__(/*! framer */ "framer")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["framer"]
                    } catch (e) {
                        console.log(e)
                    }
                    packageInfo.__framer__ = packageInfo.__framer__ || {}
                    packageInfo.__framer__.packageJson = {"name":"framer","version":"1.2.3","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --coverage","test":"jest","watch":"jest --watch"},"devDependencies":{"@emotion/is-prop-valid":"^0.8.2","@microsoft/api-extractor":"^7.6.1","@testing-library/jest-dom":"^5.1.1","@testing-library/react":"^9.4.0","@testing-library/react-hooks":"^3.2.1","@types/chalk":"2.2.0","@types/css-font-loading-module":"^0.0.4","@types/draft-js":"0.10.38","@types/enzyme":"3.1.10","@types/enzyme-adapter-react-16":"1.0.3","@types/google.fonts":"1.0.2","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"25.2.1","@types/node":"^12.12.12","@types/promise-queue":"2.2.0","@types/react":"16.9.19","@types/react-dom":"16.9.5","@types/webfontloader":"1.6.29","@typescript-eslint/eslint-plugin":"^1.10.3-alpha.2","@typescript-eslint/parser":"^1.10.2","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.11.4","enzyme":"^3.9.0","enzyme-adapter-react-16":"^1.9.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","framer-motion":"2.0.0-beta.72","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^25.5.4","jest-diff":"^25.5.0","jest-junit":"^10.0.0","modclean":"^3.0.0-beta.1","progress-bar-webpack-plugin":"^1.11.0","promise-queue":"^2.2.5","raf":"^3.4.0","react":"^16.12.0","react-dev-utils":"^5.0.1","react-dom":"^16.12.0","react-testing-library":"^6.0.0","resize-observer-polyfill":"^1.5.1","semver":"^5.6.0","style-value-types":"^3.1.4","terser-webpack-plugin":"^1.3.0","ts-jest":"^25.5.0","ts-loader":"^4.1.0","tslint":"^5.12.1","tslint-react-hooks":"^1.1.0","watch":"^1.0.2","webfontloader":"^1.6.28","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.12.0","react-dom":"^16.12.0"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]}}
                    packageInfo.__framer__.packageJson.design = designJson
                    return packageInfo
                }

                packages["@framer/framer.default"] = () => {
                    var packageInfo = {}
                    var designJson
                    try {
                        packageInfo = __webpack_require__(/*! framer-package-loader!@framer/framer.default */ "framer-package-loader!@framer/framer.default")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["@framer/framer.default"]
                    } catch (e) {
                        console.log(e)
                    }
                    packageInfo.__framer__ = packageInfo.__framer__ || {}
                    packageInfo.__framer__.packageJson = {"main":"dist/index.js","license":"MIT","dependencies":{"react-feather":"^2.0.3"},"devDependencies":{"@types/react":"^16.8"},"peerDependencies":{"framer":"^1.0","react":"^16.8"},"framer":{"id":"ed433636-a308-4ea6-8026-c3b3f320806d","displayName":"Default"},"author":"Framer Team","name":"@framer/framer.default","version":"1.71.0"}
                    packageInfo.__framer__.packageJson.design = designJson
                    return packageInfo
                }

packageInfo.dependencies = packages

exports.__framer__ = packageInfo


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, devDependencies, peerDependencies, framer, author, dependencies, name, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"main\":\"dist/index.js\",\"license\":\"MIT\",\"devDependencies\":{\"@types/react\":\"^16.8\"},\"peerDependencies\":{\"framer\":\"^1.0\",\"react\":\"^16.8\"},\"framer\":{\"id\":\"cff5f65b-360f-471c-aacb-3c962c52b35f\",\"displayName\":\"Presentation Kit BETA\"},\"author\":\"Uris Dacosta\",\"dependencies\":{\"@framer/framer.default\":\"^1.71.0\"},\"name\":\"@framer/godaddy.presentation-kit-beta\",\"version\":\"1.8.0\"}");

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "framer-package-loader!@framer/framer.default":
/*!***************************************************************!*\
  !*** external "framer-package-loader!@framer/framer.default" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if(typeof __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_default__ === 'undefined') {var e = new Error("Cannot find module 'framer-package-loader!@framer/framer.default'"); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_default__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});