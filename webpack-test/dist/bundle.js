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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _richtext_richtext_event_muti_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);



new Vue({
  el: '#app',
  components: { hello: _richtext_richtext_event_muti_vue__WEBPACK_IMPORTED_MODULE_0__["default"] },
  render: (h) => h(_richtext_richtext_event_muti_vue__WEBPACK_IMPORTED_MODULE_0__["default"])
})

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buble_loader_node_modules_vue_loader_lib_selector_type_script_index_0_richtext_event_muti_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_3d6f2b6a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_richtext_event_muti_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _buble_loader_node_modules_vue_loader_lib_selector_type_script_index_0_richtext_event_muti_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_3d6f2b6a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_richtext_event_muti_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_3d6f2b6a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_richtext_event_muti_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\richtext\\richtext_event_muti.vue"

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


  /* 

    混合用例

    <richtext> 和 <span> 绑定事件， <span> 的事件动态更改

    测试：<richtext> 收集并分发是否正确

    list item结构：

      type = 1 : 增加 click 事件，事件对象为 当前 item

  */

  /* harmony default export */ __webpack_exports__["default"] = ({
    data: function data () {
      return {
        textList: [
          { type: 1, text: 'text1' },
          { type: 2, text: 'text2' },
          { type: 1, text: 'text3' },
          { type: 4, text: 'text4' } ]
      }
    },
    created: function created () {
      var this$1 = this;

      // e: {
      //   index: [1, 2, 6]
      // }
      var count = 1
      viola.on('update', function (e) {
        console.log('update')
        var _list = [], evList = e.index || []
        var max = evList.length ? Math.max.apply(null, evList) : 0
        var loop = (max > 3) ? max + 1 : 4
        for (var index = 0; index < loop; index++) {
          _list.push({
            type: evList.includes(index) ? 1 : 0,
            text: (count + " times update: " + index)
          })
        }
        count++
        this$1.textList = _list
      })
    },
		methods: {
      nickClick: function nickClick (info) {
        console.log(info.text)
      },
      textClick: function textClick () {
        console.log('textClick')
      }
		}
  });


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "richtext",
    { on: { click: _vm.textClick } },
    [
      _vm._l(_vm.textList, function(item, i) {
        return [
          item.type == 1
            ? _c(
                "span",
                {
                  key: i,
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      _vm.nickClick(item)
                    }
                  }
                },
                [_vm._v(_vm._s(item.text))]
              )
            : _c("span", { key: i }, [_vm._v(_vm._s(item.text))])
        ]
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // a style object
  options._stylesheet = injectStyles
  
  /* 样式加载函数 */
  // var hook
  // if (moduleIdentifier) { // server build
  //   hook = function (context) {
  //     // 2.3 injection
  //     context =
  //       context || // cached call
  //       (this.$vnode && this.$vnode.ssrContext) || // stateful
  //       (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
  //     // 2.2 with runInNewContext: true
  //     if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
  //       context = __VUE_SSR_CONTEXT__
  //     }
  //     // inject component styles
  //     if (injectStyles) {
  //       injectStyles.call(this, context)
  //     }
  //     // register component module identifier for async chunk inferrence
  //     if (context && context._registeredComponents) {
  //       context._registeredComponents.add(moduleIdentifier)
  //     }
  //   }
  //   // used by ssr in case component is cached and beforeCreate
  //   // never gets called
  //   options._ssrRegister = hook
  // } else if (injectStyles) {
  //   hook = shadowMode
  //     ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
  //     : injectStyles
  // }

  /* 将 样式加载 放入了回调钩子了 */
  // if (hook) {
  //   console.log('n options： ', options)
  //   if (options.functional) {
  //     // for template-only hot-reload because in that case the render fn doesn't
  //     // go through the normalizer
  //     options._injectStyles = hook
  //     // register for functioal component in vue file
  //     var originalRender = options.render
  //     // options.render = function renderWithStyleInjection (h, context) {
  //     //   hook.call(context)
  //     //   return originalRender(h, context)
  //     // }
  //   } else {
  //     // inject component registration as beforeCreate hook
  //     var existing = options.beforeCreate
  //     options.beforeCreate = existing
  //       ? [].concat(existing, hook)
  //       : [hook]
  //   }
  // }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map