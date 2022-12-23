"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkloginRxVuejs"] = (typeof self !== 'undefined' ? self : this)["webpackChunkloginRxVuejs"] || []).push([[354],{

/***/ 4354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ LoginRegister)
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/LoginRegister.vue?vue&type=template&id=6dc055cf&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ValidationObserver', {
    ref: "formValidate",
    attrs: {
      "tag": "form"
    }
  }, [_c('div', {
    staticClass: "login-page"
  }, [_vm.alertDisplay ? _c('div', {
    staticClass: "alert w-100",
    "class": _vm.alertType,
    attrs: {
      "role": "alert"
    },
    domProps: {
      "innerHTML": _vm._s(_vm.alertText)
    }
  }) : _vm._e(), _vm.isBusy ? _c('div', {
    staticClass: "spinner-grow text-primary",
    staticStyle: {
      "width": "3rem",
      "height": "3rem"
    },
    attrs: {
      "role": "status"
    }
  }, [_c('span', {
    staticClass: "sr-only"
  }, [_vm._v("Chargement ...")])]) : _vm._e(), _c('transition', {
    attrs: {
      "name": "customslide"
    }
  }, [_c('div', {
    staticClass: "block-center"
  }, [_c(_vm.stepe, {
    tag: "component",
    attrs: {
      "urlLogo": _vm.urlLogo,
      "formValidate": _vm.formValidate,
      "action-after-login": _vm.actionAfterLogin,
      "model-register-form": _vm.modelRegisterForm
    },
    on: {
      "select-stepe": _vm.selectStepe
    }
  })], 1)])], 1), _c('div', {
    staticClass: "politik-secur mx-auto text-center"
  }, [_vm._t("condition_utilisation", function () {
    return [_c('p', {
      staticClass: "text-white"
    }, [_vm._v(" En vous inscrivant, vous acceptez nos "), _c('a', {
      attrs: {
        "href": "#"
      }
    }, [_vm._v(" Conditions d'utilisation ")]), _vm._v(" , de recevoir des emails et des MAJ de LESROISDELARENO et vous reconnaissez avoir lu notre "), _c('a', {
      attrs: {
        "href": "#"
      }
    }, [_vm._v(" Politique de confidentialité")])])];
  })], 2)]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(4799);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(505);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__(3553);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(7658);
// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(7203);
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../wbuutilities/src/Buttons/ButtonSave.vue?vue&type=template&id=29246a2e&scoped=true&lang=html&
var ButtonSavevue_type_template_id_29246a2e_scoped_true_lang_html_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('b-button', {
    attrs: {
      "variant": "outline-success",
      "size": "sm"
    },
    on: {
      "click": _vm.onSubmit
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.texte))]), _vm.running ? _c('b-icon', {
    staticClass: "ml-2",
    attrs: {
      "icon": "arrow-clockwise",
      "animation": "spin-pulse"
    }
  }) : _vm._e()], 1)], 1);
};
var ButtonSavevue_type_template_id_29246a2e_scoped_true_lang_html_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../wbuutilities/src/Buttons/ButtonSave.vue?vue&type=script&lang=js&
//
//import magentoSynchroListSites from "./ListSites.vue";
/* harmony default export */ const ButtonSavevue_type_script_lang_js_ = ({
  name: "ButtonSave",
  props: {
    running: {
      type: Boolean,
      required: true
    },
    texte: {
      type: String,
      "default": "Enregistrer"
    }
  },
  components: {
    //
  },
  data: function data() {
    return {
      //
    };
  },
  mounted: function mounted() {
    //
  },
  watch: {
    //
  },
  computed: {
    //
  },
  methods: {
    onSubmit: function onSubmit() {
      this.$emit("ev-click");
    }
  }
});
;// CONCATENATED MODULE: ../wbuutilities/src/Buttons/ButtonSave.vue?vue&type=script&lang=js&
 /* harmony default export */ const Buttons_ButtonSavevue_type_script_lang_js_ = (ButtonSavevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ../wbuutilities/src/Buttons/ButtonSave.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  Buttons_ButtonSavevue_type_script_lang_js_,
  ButtonSavevue_type_template_id_29246a2e_scoped_true_lang_html_render,
  ButtonSavevue_type_template_id_29246a2e_scoped_true_lang_html_staticRenderFns,
  false,
  null,
  "29246a2e",
  null
  
)

/* harmony default export */ const ButtonSave = (component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../wbuutilities/src/Buttons/ButtonDelete.vue?vue&type=template&id=0b82f270&scoped=true&lang=html&
var ButtonDeletevue_type_template_id_0b82f270_scoped_true_lang_html_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('b-button', {
    attrs: {
      "variant": "outline-danger",
      "size": "sm"
    },
    on: {
      "click": _vm.DeleteFile
    }
  }, [_c('span', [_vm._v(" " + _vm._s(_vm.texte) + " ")]), _vm.running ? _c('b-icon', {
    staticClass: "ml-2",
    attrs: {
      "icon": "arrow-clockwise",
      "animation": "spin-pulse"
    }
  }) : _vm._e()], 1)], 1);
};
var ButtonDeletevue_type_template_id_0b82f270_scoped_true_lang_html_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../wbuutilities/src/Buttons/ButtonDelete.vue?vue&type=script&lang=js&
//
//import magentoSynchroListSites from "./ListSites.vue";
/* harmony default export */ const ButtonDeletevue_type_script_lang_js_ = ({
  name: "ButtonDelete",
  props: {
    running: {
      type: Boolean,
      required: true
    },
    texte: {
      type: String,
      "default": "Supprimer"
    }
  },
  components: {
    //
  },
  data: function data() {
    return {
      //
    };
  },
  mounted: function mounted() {
    //
  },
  watch: {
    //
  },
  computed: {
    //
  },
  methods: {
    DeleteFile: function DeleteFile() {
      this.$emit("ev-click");
    }
  }
});
;// CONCATENATED MODULE: ../wbuutilities/src/Buttons/ButtonDelete.vue?vue&type=script&lang=js&
 /* harmony default export */ const Buttons_ButtonDeletevue_type_script_lang_js_ = (ButtonDeletevue_type_script_lang_js_); 
;// CONCATENATED MODULE: ../wbuutilities/src/Buttons/ButtonDelete.vue





/* normalize component */
;
var ButtonDelete_component = (0,componentNormalizer/* default */.Z)(
  Buttons_ButtonDeletevue_type_script_lang_js_,
  ButtonDeletevue_type_template_id_0b82f270_scoped_true_lang_html_render,
  ButtonDeletevue_type_template_id_0b82f270_scoped_true_lang_html_staticRenderFns,
  false,
  null,
  "0b82f270",
  null
  
)

/* harmony default export */ const ButtonDelete = (ButtonDelete_component.exports);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.error.to-string.js
var es_error_to_string = __webpack_require__(6647);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.btoa.js
var web_btoa = __webpack_require__(7479);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-exception.constructor.js
var web_dom_exception_constructor = __webpack_require__(7714);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-exception.stack.js
var web_dom_exception_stack = __webpack_require__(2801);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-exception.to-string-tag.js
var web_dom_exception_to_string_tag = __webpack_require__(1174);
// EXTERNAL MODULE: ../wbuutilities/node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(3916);
// EXTERNAL MODULE: ../wbuutilities/node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(2968);
// EXTERNAL MODULE: ../wbuutilities/node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(1048);
// EXTERNAL MODULE: ../wbuutilities/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(7328);
// EXTERNAL MODULE: ../wbuutilities/node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(1147);
// EXTERNAL MODULE: ../wbuutilities/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(8613);
// EXTERNAL MODULE: ../wbuutilities/node_modules/core-js/modules/es.json.stringify.js
var es_json_stringify = __webpack_require__(9092);
// EXTERNAL MODULE: ../wbuutilities/node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__(1826);
// EXTERNAL MODULE: ../wbuutilities/node_modules/axios/index.js
var axios = __webpack_require__(8882);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// CONCATENATED MODULE: ../wbuutilities/src/Ajax/basic.js













/**
 * Permet d'effectuer les requetes
 * pour modifier ou definir les paramettres par defaut de l'instance, {AjaxBasic}.axiosInstance.defaults.timeout = 30000;
 */

var InstAxios = axios_default().create({
  timeout: 300000
});
var formatBasicAuth = function formatBasicAuth(userName, password) {
  var basicAuthCredential = userName + ":" + password;
  var bace64 = btoa(basicAuthCredential);
  return "Basic " + bace64;
};
/**
 * Cette approche doit etre mise en place dans un enviroment securée et n'est pas recommander, car une tiere personne peut recuperer les données.
 * On mettre en place un systeme d'authentification qui utilise les jetons pour maintenir les communications.
 */
////******* */
var user = JSON.parse(window.localStorage.getItem("user"));
var current_user;
if (window.localStorage.getItem("current_user")) {
  current_user = JSON.parse(window.localStorage.getItem("current_user"));
} else {
  current_user = null;
}
////******* */

var basicRequest = {
  /* Permet de lire la variable user dans le localstorage et de formater l'authorisation */
  auth: user ? formatBasicAuth(user.username, user.password) : null,
  current_user: current_user,
  axiosInstance: InstAxios,
  /**
   * Domaine permettant d'effectuer les tests en local.
   * C'est sur ce domaine que les requetes vont etre transmise quand on est en local.
   * @public
   */
  TestDomain: null,
  /**
   * Permet de specifier un domaine pour la production. ( utiliser uniquement quand l'application front est sur un domaine different de l'application serveur ).
   */
  baseUrl: null,
  /**
   * Utiliser si le module supporte la traduction
   * example : fr, en, ar ...
   */
  languageId: null,
  /**
   * Permet de determiner, si nous sommes en local ou pas.
   * @public
   * @returns Booleans
   */
  isLocalDev: window.location.host.includes("localhost") || window.location.host.includes(".kksa") ? true : false,
  /**
   * Permet de derminer la source du domaine, en function des paramettres definit.
   * @private (ne doit pas etre surcharger).
   * @returns String
   */
  getBaseUrl: function getBaseUrl() {
    if (this.baseUrl) return this.isLocalDev && this.TestDomain ? this.TestDomain.trim("/") : this.baseUrl;else return this.isLocalDev && this.TestDomain ? this.TestDomain.trim("/") : window.location.protocol + "//" + window.location.host;
  },
  getStatusText: function getStatusText(er) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (er) {
      if (type) {
        if (er) {
          if (er.response && er.headers.customstatustext) {
            return er.headers.customstatustext;
          }
        } else if (er.statusText) {
          return er.statusText;
        } else {
          return null;
        }
      } else {
        if (er.response && er.response.headers && er.response.headers.customstatustext) {
          return er.response.headers.customstatustext;
        } else if (er.response && er.response.statusText) {
          return er.response.statusText;
        } else {
          return null;
        }
      }
    } else {
      return null;
    }
  },
  post: function post(url, datas, configs) {
    var _this = this;
    return new Promise(function (resolv, reject) {
      if (_this.languageId !== "" && _this.languageId !== undefined && _this.languageId !== null) url = "/" + _this.languageId + url;
      var urlFinal = url.includes("://") ? url : _this.getBaseUrl() + url;
      InstAxios.post(urlFinal, datas, configs).then(function (reponse) {
        resolv({
          status: true,
          data: reponse.data,
          reponse: reponse,
          statusText: _this.getStatusText(reponse, true)
        });
      })["catch"](function (error) {
        console.log("error wbutilities", error.response);
        reject({
          status: false,
          error: error.response,
          code: error.code,
          stack: error.stack,
          statusText: _this.getStatusText(error)
        });
      });
    });
  },
  "delete": function _delete(url, datas, configs) {
    var _this2 = this;
    return new Promise(function (resolv, reject) {
      var urlFinal = url.includes("://") ? url : _this2.getBaseUrl() + url;
      InstAxios["delete"](urlFinal, configs, datas).then(function (reponse) {
        resolv({
          status: true,
          data: reponse.data,
          reponse: reponse,
          statusText: _this2.getStatusText(reponse, true)
        });
      })["catch"](function (error) {
        reject({
          status: false,
          error: error.response,
          code: error.code,
          stack: error.stack,
          statusText: _this2.getStatusText(error)
        });
      });
    });
  },
  get: function get(url, configs) {
    var _this3 = this;
    return new Promise(function (resolv, reject) {
      if (_this3.languageId !== "" && _this3.languageId !== undefined && _this3.languageId !== null) url = "/" + _this3.languageId + url;
      var urlFinal = url.includes("://") ? url : _this3.getBaseUrl() + url;
      InstAxios.get(urlFinal, configs).then(function (reponse) {
        resolv({
          status: true,
          data: reponse.data,
          reponse: reponse,
          statusText: _this3.getStatusText(reponse, true)
        });
      })["catch"](function (error) {
        reject({
          status: false,
          error: error.response,
          code: error.code,
          stack: error.stack,
          statusText: _this3.getStatusText(error)
        });
      });
    });
  },
  /**
   * @param file " fichier à uploaded"
   */
  postFile: function postFile(url, file) {
    var _this4 = this;
    var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    return new Promise(function (resolv, reject) {
      _this4.getBase64(file).then(function (fileEncode) {
        var headers = new Headers();
        var fileCompose = file.name.split(".");
        var myInit = {
          method: "POST",
          headers: headers,
          // mode: "cors",
          body: JSON.stringify({
            upload: fileEncode.base64,
            ext: fileCompose.pop(),
            filename: fileCompose.join("."),
            id: id
          }),
          cache: "default"
        };
        var urlFinal = url.includes("://") ? url : _this4.getBaseUrl() + url;
        fetch(urlFinal, myInit).then(function (response) {
          response.json().then(function (json) {
            resolv(json);
          })["catch"](function (error) {
            reject(error);
          });
        });
      });
    });
  },
  getBase64: function getBase64(file) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      //reader.onload = () => resolve(reader.result);
      reader.onloadend = function () {
        var fileArray = reader.result.split(",");
        resolve({
          src: reader.result,
          base64: fileArray[1]
        });
      };
      reader.onerror = function (error) {
        return reject(error);
      };
    });
  }
};
/* harmony default export */ const basic = (basicRequest);
// EXTERNAL MODULE: ../wbuutilities/node_modules/bootstrap-vue/esm/components/toast/helpers/bv-toast.js + 3 modules
var bv_toast = __webpack_require__(7707);
// EXTERNAL MODULE: ../wbuutilities/node_modules/bootstrap-vue/esm/components/modal/index.js + 12 modules
var modal = __webpack_require__(742);
;// CONCATENATED MODULE: ../wbuutilities/src/Toasts/BootStrap.js






external_commonjs_vue_commonjs2_vue_root_Vue_default().use(bv_toast/* BVToastPlugin */.p);
external_commonjs_vue_commonjs2_vue_root_Vue_default().use(modal/* ModalPlugin */.k);
var vm = new (external_commonjs_vue_commonjs2_vue_root_Vue_default())();
var AjaxToastBootStrap = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, basic), {}, {
  $bvToast: vm.$bvToast,
  $bvModal: vm.$bvModal,
  modalMessage: function modalMessage(body, conf) {
    var _this = this;
    var confDefault = {
      size: "md",
      buttonSize: "sm",
      hideFooter: true,
      centered: true
    };
    for (var i in conf) {
      confDefault[i] = conf[i];
    }
    return new Promise(function (resolv, reject) {
      _this.$bvModal.msgBoxConfirm(body, confDefault).then(function (value) {
        if (value) resolv(value);else reject(value);
      })["catch"](function (err) {
        reject(err);
      });
    });
  },
  modalConfirmDelete: function modalConfirmDelete() {
    var body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Confirmer la suppression, NB : cette action est irreverssible.";
    var conf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      title: "Attention",
      okVariant: "danger",
      okTitle: "Supprimer",
      cancelTitle: "Annuler",
      footerClass: "p-2"
    };
    return this.modalMessage(body, conf);
  },
  modalSuccess: function modalSuccess() {
    var body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var conf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var confDefault = {
      title: "Succes",
      headerBgVariant: "success",
      bodyClass: ["p-3"],
      hideFooter: true,
      headerTextVariant: "light"
    };
    for (var i in conf) {
      confDefault[i] = conf[i];
    }
    return this.modalMessage(body, confDefault);
  },
  notification: function notification(ajaxTitle) {
    var variant = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "success";
    this.$bvToast.toast(" ", {
      title: ajaxTitle,
      variant: variant,
      solid: true,
      toaster: "b-toaster-top-right"
    });
  },
  bPost: function bPost(url, datas, configs) {
    var _this2 = this;
    var showNotification = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    return new Promise(function (resolv, reject) {
      _this2.post(url, datas, configs).then(function (reponse) {
        if (showNotification) {
          _this2.notification("success");
        }
        resolv(reponse);
      })["catch"](function (error) {
        //console.log("error : ", error);
        _this2.notification(_this2.GetErrorTitle(error), "warning");
        reject(error);
      });
    });
  },
  bGet: function bGet(url, configs) {
    var _this3 = this;
    var showNotification = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    return new Promise(function (resolv, reject) {
      _this3.get(url, configs).then(function (reponse) {
        if (showNotification) {
          _this3.notification("success");
        }
        resolv(reponse);
      })["catch"](function (error) {
        //console.log("error : ", error);
        _this3.notification(_this3.GetErrorTitle(error), "warning");
        reject(error);
      });
    });
  },
  GetErrorTitle: function GetErrorTitle(error) {
    var title;
    //
    if (error.code) {
      switch (error.code) {
        case "ECONNABORTED":
          var temps = this.axiosInstance.defaults.timeout / 1000 + "s";
          title = "Impossible de joindre l'hote distant, temps impartie epuisé. (" + temps + ")";
          break;
        default:
          title = "Une erreur s'est produite";
      }
    } //
    else if (error.error && error.error.statusText) {
      title = decodeURI(error.error.statusText);
    }
    return title;
  }
});
/**
 * Intercept la reponse ajax pour declenche le toast adapter.
 */
/*
 pas adapter pour gerer les messages d'erreurs.
(function() {
  AjaxToastBootStrap.axiosInstance.interceptors.response.use(
    function(response) {
      console.log("interceptor success");
      AjaxToastBootStrap.notification("success");
      return response;
    },
    function(error) {
      console.log("interceptor error");
      AjaxToastBootStrap.notification("Error", "warning");
      return error;
    }
  );
})();
/**/
/* harmony default export */ const BootStrap = (AjaxToastBootStrap);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(7229);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(8078);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/get.js + 1 modules
var get = __webpack_require__(8291);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(6881);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(9542);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(6875);
;// CONCATENATED MODULE: ../wbuutilities/src/DrupalJsonApi/entityFormat.js


var baseUrl = "/jsonapi";
var entityFormat = /*#__PURE__*/function () {
  function entityFormat() {
    (0,classCallCheck/* default */.Z)(this, entityFormat);
  }
  (0,createClass/* default */.Z)(entityFormat, [{
    key: "buildLink",
    value: function buildLink(entityType, bundle) {
      return baseUrl + "/" + entityType + "/" + bundle;
    }
  }, {
    key: "valid",
    value: function valid() {
      return true;
    }
  }], [{
    key: "baseUrl",
    get: function get() {
      return baseUrl;
    }
  }]);
  return entityFormat;
}();

;// CONCATENATED MODULE: ../wbuutilities/src/DrupalJsonApi/entityLoad.js








/**
 * Permet de recuperer les données via le module drupal json api.
 */


var entityLoad = /*#__PURE__*/function (_entityFormat) {
  (0,inherits/* default */.Z)(entityLoad, _entityFormat);
  var _super = (0,createSuper/* default */.Z)(entityLoad);
  function entityLoad(entityType, bundle) {
    var _this;
    (0,classCallCheck/* default */.Z)(this, entityLoad);
    /**
     * Le mot clé 'super' est utilisé afin d'appeler ou d'accéder à des fonctions définies sur l'objet parent
     */
    _this = _super.call(this);
    /**
     * Le type d'entite au niveau de Drupal, example ( node, taxonomy_term, block_content ... )
     */
    _this.entityType = entityType;

    /**
     * Bundle pour le type d'ente this.entityType
     */
    _this.bundle = bundle;

    /**
     * Permettra de surcharger ajax avec la configuration de l'App.
     */
    _this.ajax = basic;
    /**
     * Données brutes provenanat de drupal.
     */
    _this.rawDatas = [];
    return _this;
  }

  /**
   * Charge les données.
   */
  (0,createClass/* default */.Z)(entityLoad, [{
    key: "load",
    value: function load() {
      var _this2 = this;
      return new Promise(function (resolv, reject) {
        _this2.ajax.get((0,get/* default */.Z)((0,getPrototypeOf/* default */.Z)(entityLoad.prototype), "buildLink", _this2).call(_this2, _this2.entityType, _this2.bundle)).then(function (res) {
          if (res.data && res.data.data) {
            _this2.rawDatas = res.data.data;
            resolv(_this2.rawDatas);
          } else throw "Format de données non valide";
        })["catch"](function (errors) {
          reject(errors);
        });
      });
    }

    /**
     * Permet de formater les données poour utilisation bien plus facile.
     */
  }, {
    key: "formatData",
    value: function formatData() {
      //
    }
  }]);
  return entityLoad;
}(entityFormat);
/* harmony default export */ const DrupalJsonApi_entityLoad = ((/* unused pure expression or super */ null && (entityLoad)));
;// CONCATENATED MODULE: ../wbuutilities/index.js
//import Vue from "vue";



/*
const HelloWorldSimple = {
  install(Vue) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    Vue.component("button-save", ButtonSave);
  }
};
// Automatic installation if Vue has been added to the global scope.
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(HelloWorldSimple);
}
/**/





;// CONCATENATED MODULE: ./src/App/components/config_for_all.js
// Contient les methodes et attributs utilisé par toutes les sous modules.
/* harmony default export */ const config_for_all = ({
  /**
   *
   * @param {String} action
   * @param {Object} resp
   */
  AfterRedirect: function AfterRedirect() {
    var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "reload";
    var url_redirect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var resp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    console.log("AfterRedirect action .", action);
    var stepe = null;
    /**
     * Pour forcer la rediction.
     */
    if (action == "redirect" && url_redirect) {
      //
    } else if (action == "home") {
      window.location.assign("/");
    }
    // Reload current page.
    else if (action == "reload") {
      window.location.reload();
    }
    // Emit event when is finnish.
    else if (action == "emit_even") {
      var event = new CustomEvent("login_rx_vuejs__user_is_login");
      document.dispatchEvent(event);
    }
    // Comportement par defaut.
    else if (action == "default") {
      // --; Si l'utilisateur est redirigé vers une autre url.
      if (resp.reponse && resp.reponse.config.url !== resp.reponse.request.responseURL) {
        window.location.assign(resp.reponse.request.responseURL);
      }
      // On demande la creation d'un utilisateur.
      else if (resp.data && resp.data.createuser) {
        stepe = "final-gl-register";
      }
      // On recharge la meme page.
      else if (resp.data) {
        window.location.reload();
      }
    }
    return stepe;
  }
});
;// CONCATENATED MODULE: ./src/App/components/config.js





var config_vm = new (external_commonjs_vue_commonjs2_vue_root_Vue_default())();
/* harmony default export */ const config = ((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, config_for_all), {}, {
  messages: {
    log_email: "Email ou Nom d'utilisateur",
    pass: "Mot de passe",
    login: "Nom d'utilisateur",
    mail: "Email",
    submit: {
      first: "Suivant",
      connect: "Connexion",
      register: "S'inscrire",
      "final": "terminée"
    },
    devisCreateUser: "Votre compte a été creer sur <a href='/'> lesroisdelareno.fr </a>. <br> <strong> Bien vouloir verifier votre boite mail afin de valider votre compte </strong>"
  },
  modalSuccess: function modalSuccess(body, conf) {
    return BootStrap.modalSuccess(body, conf);
  },
  /**
   *
   * @param {Array} text
   * @returns
   */
  msgCreate: function msgCreate(texts) {
    var h = config_vm.$createElement;
    var text = [];
    for (var i in texts) {
      text.push(h("p", {
        domProps: {
          innerHTML: texts[i]
        },
        style: {
          lineHeight: "25px",
          fontSize: "17px",
          padding: "15px 15px 0px",
          margin: 0
        }
      }, []));
    }
    return h("div", {}, [text]);
  }
}));
;// CONCATENATED MODULE: ./src/config.js


var config_config = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, basic), {}, {
  /**
   * Retoune un entier arleatoire entre [99-999]
   */
  getRandomIntInclusive: function getRandomIntInclusive() {
    var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 99;
    var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 999;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
});
/* harmony default export */ const src_config = (config_config);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var modules_es_object_to_string = __webpack_require__(1539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var modules_es_promise = __webpack_require__(8674);
;// CONCATENATED MODULE: ./src/App/session.js




/* harmony default export */ const session = ((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, src_config), {}, {
  url_session: "/session/token",
  token: null,
  /**
   * Permet d'obtenir la session de token.
   * La session de tokens ne change pas durant une session.
   * il serait peut etre preferable de demander qu'il expire apres un certains temps. ( https://www.drupal.org/project/marketing_cloud/issues/3195685 )
   */
  getToken: function getToken() {
    var _this = this;
    return new Promise(function (resolv) {
      if (_this.token) resolv(_this.token);
      _this.get(_this.url_session).then(function (resp) {
        _this.token = resp.data;
        resolv(resp.data);
      });
    });
  }
}));
;// CONCATENATED MODULE: ./src/App/utilities.js





var utilities = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, session), src_config), {}, {
  /**
   * configCustom[{name:"",value:""}]
   */
  dPost: function dPost(url, datas) {
    var _arguments = arguments,
      _this = this;
    return (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee() {
      var configCustom, Token, configs;
      return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            configCustom = _arguments.length > 2 && _arguments[2] !== undefined ? _arguments[2] : null;
            _context.next = 3;
            return _this.getToken();
          case 3:
            Token = _context.sent;
            configs = {
              "X-CSRF-Token": Token,
              "Content-Type": "application/json"
            };
            if (configCustom) {
              configs = _this.mergeHeaders(configCustom, configs);
            }
            return _context.abrupt("return", _this.post(url, datas, {
              headers: configs
            }));
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  /**
   * Get datas;
   */
  dGet: function dGet(url) {
    var _arguments2 = arguments,
      _this2 = this;
    return (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee2() {
      var configCustom, Token, configs;
      return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            configCustom = _arguments2.length > 1 && _arguments2[1] !== undefined ? _arguments2[1] : null;
            _context2.next = 3;
            return _this2.getToken();
          case 3:
            Token = _context2.sent;
            configs = {
              "X-CSRF-Token": Token,
              "Content-Type": "application/json"
            };
            if (configCustom) {
              configs = _this2.mergeHeaders(configCustom, configs);
            }
            return _context2.abrupt("return", _this2.get(url, {
              headers: configs
            }));
          case 7:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  },
  /**
   *
   */
  mergeHeaders: function mergeHeaders(configCustom, configs) {
    if (configCustom) {
      for (var i in configCustom) {
        configs[i] = configCustom[i];
      }
    }
    return configs;
  }
});
/* harmony default export */ const App_utilities = (utilities);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(2564);
;// CONCATENATED MODULE: ./src/App/rx/facebook.js

//const FB = window.Fb;
/* harmony default export */ const facebook = ({
  user: {},
  FB: null,
  appId: "",
  scope: "public_profile, email",
  version: "v11.0",
  /**
   * Ouverture de la boite de dislogue, facebook.
   */
  openPopup: function openPopup() {
    var _this = this;
    var self = this;
    window.FB.login(function (resp) {
      _this.statusChangeCallback(resp, true);
    }, {
      scope: self.scope,
      return_scopes: true
    });
  },
  logOut: function logOut() {
    window.FB.logout(function (res) {
      this.onLogOut(res);
    });
  },
  onLogOut: function onLogOut(resp) {
    console.log("Déconnetion réussi", resp);
  },
  /**
   * Permet de definir les informations de base et emet un evenement
   * $event 'wbu-fb-status-change'
   * @param {*} r
   */
  statusChangeCallback: function statusChangeCallback(r) {
    var getInfoUser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    this.user = r;
    if (getInfoUser) {
      var event = new CustomEvent("wbu-fb-status-change");
      document.dispatchEvent(event);
    }
    console.log("status", this.user);
  },
  getUserStatus: function getUserStatus() {
    var self = this;
    window.FB.getLoginStatus(function (response) {
      self.statusChangeCallback(response);
    });
  },
  chargement: function chargement() {
    var self = this;
    var head = document.getElementsByTagName("head")[0];
    var js = document.createElement("script");
    head.appendChild(js);
    js.id = "facebook-jssdk-021";
    // js.addEventListener("load", () => {
    //   console.log("Chargement du JS FACEBOOK END;");
    // });
    //
    js.onload = function () {
      function checkFB() {
        if (window.FB) {
          self.FB = window.FB;
          self.FB.init({
            appId: self.appId,
            cookie: true,
            xfbml: true,
            version: self.version,
            statue: false
          });
          console.log("Chargement du JS facebook");
          self.getUserStatus();
        } else {
          console.log("facebook not load");
          setTimeout(function () {
            checkFB();
          }, 900);
        }
      }
      checkFB();
    };
    js.src = "https://connect.facebook.net/en_US/sdk.js";
  }
});

/*
window.fbAsyncInit = function () {
  FB.init({
    appId: "344690973822888",
    cookie: true,
    xfbml: true,
    version: "v11.0",
  });
  FB.AppEvents.logPageView();
  Facebook.getUserStatus();
};
// Etape1 : chargement.
(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");
/**/
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var modules_es_function_name = __webpack_require__(8309);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/CheckStatus.vue?vue&type=template&id=fe4e8f42&

var CheckStatusvue_type_template_id_fe4e8f42_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-center"
  }, [_c('a', {
    staticClass: "content-center__img",
    attrs: {
      "href": "/"
    }
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": _vm.urlLogo,
      "alt": ""
    }
  })]), _c('h4', {
    staticClass: "title"
  }, [_vm._v("Connectez vous avec")]), _c('div', {
    staticClass: "content-center__btn-column"
  }, [_c('logingoogle', {
    attrs: {
      "idHtml": "default"
    }
  }), _c('div', {
    staticClass: "btn-login btn-login--facebook",
    on: {
      "click": _vm.loginFacebook
    }
  }, [_c('span', {
    staticClass: "btn-login__icon icon-facebook"
  }), _c('i', {
    staticClass: "btn-login__text"
  }, [_vm._v(" Facebook ")]), _vm.waiting === 'facebook' ? _c('svgWaiting') : _vm._e()], 1)], 1), _c('strong', {
    staticClass: "d-block"
  }, [_vm._v(" Ou ")]), _c('hr', {
    staticClass: "diviseur"
  }), _c('h3', {
    staticClass: "content-center__title"
  }, [_vm._v(_vm._s(_vm.messages.log_email))]), _c('div', {
    staticClass: "form-group content-center__input"
  }, [_c('ValidationProvider', {
    attrs: {
      "name": "name",
      "rules": "required"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(v) {
        return [_c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.form.name[0].value,
            expression: "form.name[0].value"
          }],
          staticClass: "form-control",
          attrs: {
            "type": "text",
            "name": "name"
          },
          domProps: {
            "value": _vm.form.name[0].value
          },
          on: {
            "input": function input($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.form.name[0], "value", $event.target.value);
            }
          }
        }), _c('div', {
          staticClass: "text-danger text-small"
        }, _vm._l(v.errors, function (error, ii) {
          return _c('small', {
            key: ii,
            staticClass: "d-block"
          }, [_vm._v(" " + _vm._s(error) + " ")]);
        }), 0)];
      }
    }])
  })], 1), _c('div', {
    staticClass: "content-center__btn"
  }, [_c('div', {
    staticClass: "btn-login btn-login--connexion",
    on: {
      "click": _vm.checkUserStatus
    }
  }, [_c('span', {
    staticClass: "btn-login__text"
  }, [_vm._v(" " + _vm._s(_vm.messages.submit.first) + " ")]), _vm.waiting === 'wait' ? _c('svgWaiting') : _vm._e()], 1)])]);
};
var CheckStatusvue_type_template_id_fe4e8f42_staticRenderFns = [];

;// CONCATENATED MODULE: ./src/App/components/CheckStatus.vue?vue&type=template&id=fe4e8f42&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(6992);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(8783);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(3948);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/LoginGoogle.vue?vue&type=template&id=195466c7&
var LoginGooglevue_type_template_id_195466c7_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "buttton-google-aouth",
    "class": _vm.classRender,
    attrs: {
      "id": _vm.idHtmlrender
    }
  });
};
var LoginGooglevue_type_template_id_195466c7_staticRenderFns = [];

;// CONCATENATED MODULE: ./src/App/rx/google.js
//const gapi = window.gapi;
/* harmony default export */ const google = ({
  userAccess: {},
  //contient les informations renvoyés par google apres approbations.
  client_id: "513247959752-qapd9jb30pdtoh51m0h53070a2v8c4er.apps.googleusercontent.com"
});
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/LoginGoogle.vue?vue&type=script&lang=js&



function loadScript(src) {
  return new Promise(function (resolv) {
    var s = document.createElement("script");
    s.setAttribute("src", src);
    s.onload = function () {
      console.log(" Chargement du script ok : ", src);
      resolv(true);
    };
    document.head.appendChild(s);
  });
}



/* harmony default export */ const LoginGooglevue_type_script_lang_js_ = ({
  name: "LoginGoogle",
  props: {
    idHtml: {
      type: String,
      required: true
    },
    returnUidInfo: {
      type: Boolean,
      "default": false
    },
    classRender: {
      type: Array,
      "default": function _default() {
        return ["mx-auto"];
      }
    },
    actionAfterLogin: {
      type: String,
      "default": "default"
    }
  },
  computed: {
    idHtmlrender: function idHtmlrender() {
      return "google-login-tab" + this.idHtml;
    }
  },
  mounted: function mounted() {
    var _this = this;
    if (!window.google) {
      loadScript("https://accounts.google.com/gsi/client").then(function () {
        _this.getUserInfoFromFrame();
      });
    } else {
      this.getUserInfoFromFrame();
    }
  },
  methods: {
    getUserInfoFromFrame: function getUserInfoFromFrame() {
      var self = this;
      function handleCredentialResponse(response) {
        console.log("Encoded JWT ID token: ", response);
        google.userAccess = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, response), {}, {
          client_id: response.clientId
        });
        self.TryToLoginWithGoogle();
        window.rxGoogle = google;
      }
      console.log(" window.onload ! ", window.onload);
      var goo = function goo() {
        window.google.accounts.id.initialize({
          client_id: google.client_id,
          callback: handleCredentialResponse
        });
        window.google.accounts.id.renderButton(document.getElementById(self.idHtmlrender), {
          theme: "outline",
          size: "large"
        } // customization attributes
        );

        window.google.accounts.id.prompt(); // also display the One Tap dialog
      };

      goo();
    },
    /**
     * Ecoute un evenement afin de determiner si l'utilisateur a clique sur le bonton de connexion et que le processus soit terminé.
     */
    TryToLoginWithGoogle: function TryToLoginWithGoogle() {
      var _this2 = this;
      // this.IsBusy();
      // this.getFields();
      return new Promise(function (resolv, reject) {
        App_utilities.post("/login-rx-vuejs/google-check", google.userAccess).then(function (resp) {
          _this2.isBusy = false;
          _this2.alertDisplay = true;
          _this2.alertType = "alert-success";
          _this2.alertText = "Connexion réussie";
          _this2.$emit("ev_logingoogle", resp.data);
          // Si on souhaite juste obtenir les infos concernant l'utilisateur.
          if (_this2.returnUidInfo) {
            resolv(resp);
            return;
          }
          config_for_all.AfterRedirect(_this2.actionAfterLogin, null, resp);
          resolv(resp);
        })["catch"](function (errors) {
          _this2.isBusy = false;
          _this2.alertDisplay = true;
          _this2.alertType = "alert-danger";
          _this2.alertText = "Google : Erreur de connexion";
          if (errors.error && errors.error.statusText && errors.error.statusText != "") {
            _this2.alertText = errors.error.statusText;
          }
          console.log(" Error ajax ", errors.error);
          console.log(" Error ajax ", errors.code);
          console.log(" Error ajax ", errors.stack);
          reject(errors);
        });
      });
    }
  }
});
;// CONCATENATED MODULE: ./src/App/components/LoginGoogle.vue?vue&type=script&lang=js&
 /* harmony default export */ const components_LoginGooglevue_type_script_lang_js_ = (LoginGooglevue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/LoginGoogle.vue?vue&type=style&index=0&id=195466c7&prod&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/App/components/LoginGoogle.vue?vue&type=style&index=0&id=195466c7&prod&lang=scss&

;// CONCATENATED MODULE: ./src/App/components/LoginGoogle.vue



;


/* normalize component */

var LoginGoogle_component = (0,componentNormalizer/* default */.Z)(
  components_LoginGooglevue_type_script_lang_js_,
  LoginGooglevue_type_template_id_195466c7_render,
  LoginGooglevue_type_template_id_195466c7_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const LoginGoogle = (LoginGoogle_component.exports);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(629);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/CheckStatus.vue?vue&type=script&lang=js&













/* harmony default export */ const CheckStatusvue_type_script_lang_js_ = ({
  name: "CheckStatus",
  components: {
    svgWaiting: function svgWaiting() {
      return __webpack_require__.e(/* import() */ 448).then(__webpack_require__.bind(__webpack_require__, 8448));
    },
    logingoogle: LoginGoogle
  },
  props: {
    urlLogo: {
      type: String,
      required: true
    },
    formValidate: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      messages: config.messages,
      waiting: ""
    };
  },
  computed: (0,objectSpread2/* default */.Z)({}, (0,vuex_esm/* mapState */.rn)(["form"])),
  methods: {
    loginFacebook: function loginFacebook() {
      this.waiting = "facebook";
      facebook.openPopup();
    },
    logOutFacebook: function logOutFacebook() {
      facebook.logOut();
    },
    /**
     * Verifie si l'utilisateur existe deja.
     */
    checkUserStatus: function checkUserStatus() {
      var _this = this;
      return (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee() {
        var url, test;
        return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this.waiting = "wait";
              url = "/login-rx-vuejs/check-user-status";
              _context.next = 4;
              return _this.formValidate.validate();
            case 4:
              test = _context.sent;
              if (test) App_utilities.post(url, _this.form).then(function (resp) {
                _this.waiting = "";
                if (resp.data) _this.$emit("select-stepe", "setPassword");else {
                  _this.$emit("select-stepe", "register");
                }
              });else _this.waiting = "";
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    }
  }
});
;// CONCATENATED MODULE: ./src/App/components/CheckStatus.vue?vue&type=script&lang=js&
 /* harmony default export */ const components_CheckStatusvue_type_script_lang_js_ = (CheckStatusvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/App/components/CheckStatus.vue





/* normalize component */
;
var CheckStatus_component = (0,componentNormalizer/* default */.Z)(
  components_CheckStatusvue_type_script_lang_js_,
  CheckStatusvue_type_template_id_fe4e8f42_render,
  CheckStatusvue_type_template_id_fe4e8f42_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const CheckStatus = (CheckStatus_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/SetPassword.vue?vue&type=template&id=5bc6aa14&
var SetPasswordvue_type_template_id_5bc6aa14_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-center"
  }, [_c('a', {
    staticClass: "content-center__img",
    attrs: {
      "href": "/"
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.urlLogo,
      "alt": ""
    }
  })]), _c('h3', {
    staticClass: "content-center__title"
  }, [_vm._v(_vm._s(_vm.messages.pass))]), _c('div', {
    staticClass: "form-group content-center__input"
  }, [_c('ValidationProvider', {
    ref: "refPass",
    attrs: {
      "name": "pass",
      "rules": "required"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(v) {
        return [_vm.form.password ? _c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.form.password[0].value,
            expression: "form.password[0].value"
          }],
          staticClass: "form-control",
          attrs: {
            "type": "password",
            "name": "pass"
          },
          domProps: {
            "value": _vm.form.password[0].value
          },
          on: {
            "input": function input($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.form.password[0], "value", $event.target.value);
            }
          }
        }) : _vm._e(), _c('div', {
          staticClass: "text-danger text-small"
        }, _vm._l(v.errors, function (error, ii) {
          return _c('small', {
            key: ii,
            staticClass: "d-block"
          }, [_vm._v(" " + _vm._s(error) + " ")]);
        }), 0)];
      }
    }])
  })], 1), _c('a', {
    staticClass: "content-center__forgot-pass",
    attrs: {
      "href": "/user/password"
    }
  }, [_vm._v(" Mot de passe oublié ? ")]), _c('div', {
    staticClass: "content-center__btn"
  }, [_c('div', {
    staticClass: "btn-login btn-login--connexion",
    on: {
      "click": _vm.Login
    }
  }, [_c('span', {
    staticClass: "btn-login__text"
  }, [_vm._v(" " + _vm._s(_vm.messages.submit.connect) + " ")]), _vm.waiting == 'wait' ? _c('svgWaiting') : _vm._e()], 1)]), _c('hr'), _c('a', {
    staticClass: "text-center d-block",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function click($event) {
        return _vm.$emit('select-stepe', 'checkstatus');
      }
    }
  }, [_vm._v(" Retour ")])]);
};
var SetPasswordvue_type_template_id_5bc6aa14_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/SetPassword.vue?vue&type=script&lang=js&












/* harmony default export */ const SetPasswordvue_type_script_lang_js_ = ({
  name: "SetPassword",
  components: {
    svgWaiting: function svgWaiting() {
      return __webpack_require__.e(/* import() */ 448).then(__webpack_require__.bind(__webpack_require__, 8448));
    }
  },
  props: {
    urlLogo: {
      type: String,
      required: true
    },
    formValidate: {
      type: Object,
      required: true
    },
    actionAfterLogin: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      messages: config.messages,
      waiting: ""
    };
  },
  computed: (0,objectSpread2/* default */.Z)({}, (0,vuex_esm/* mapState */.rn)(["form"])),
  mounted: function mounted() {
    if (this.form.password === undefined) {
      this.$set(this.form, "password", [{
        value: ""
      }]);
    }
  },
  methods: {
    Login: function Login() {
      var _this = this;
      return (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee() {
        var url, test;
        return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this.waiting = "wait";
              url = "/login-rx-vuejs/user-connexion";
              _context.next = 4;
              return _this.formValidate.validate();
            case 4:
              test = _context.sent;
              setTimeout(function () {
                if (test) App_utilities.post(url, _this.form).then(function (resp) {
                  _this.waiting = "";
                  config.AfterRedirect(_this.actionAfterLogin, null, resp);
                })["catch"](function (e) {
                  _this.$refs.refPass.setErrors([e.error.statusText]);
                  _this.waiting = "error";
                });else _this.waiting = "";
              }, 3000);
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    }
  }
});
;// CONCATENATED MODULE: ./src/App/components/SetPassword.vue?vue&type=script&lang=js&
 /* harmony default export */ const components_SetPasswordvue_type_script_lang_js_ = (SetPasswordvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/App/components/SetPassword.vue





/* normalize component */
;
var SetPassword_component = (0,componentNormalizer/* default */.Z)(
  components_SetPasswordvue_type_script_lang_js_,
  SetPasswordvue_type_template_id_5bc6aa14_render,
  SetPasswordvue_type_template_id_5bc6aa14_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const SetPassword = (SetPassword_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/RegisTer.vue?vue&type=template&id=2be2efe3&

var RegisTervue_type_template_id_2be2efe3_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-center"
  }, [_c('a', {
    staticClass: "content-center__img",
    attrs: {
      "href": "/"
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.urlLogo,
      "alt": ""
    }
  })]), _vm.modelRegisterForm === 'default' ? _c('div', [_c('h3', {
    staticClass: "content-center__title"
  }, [_vm._v(_vm._s(_vm.messages.login))]), _c('div', {
    staticClass: "form-group content-center__input"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.name[0].value,
      expression: "form.name[0].value"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "readonly": "true",
      "name": "name"
    },
    domProps: {
      "value": _vm.form.name[0].value
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form.name[0], "value", $event.target.value);
      }
    }
  })]), _vm.showPassword ? _c('h3', {
    staticClass: "content-center__title"
  }, [_vm._v(" " + _vm._s(_vm.messages.pass) + " ")]) : _vm._e(), _vm.showPassword ? _c('div', {
    staticClass: "form-group content-center__input"
  }, [_vm.form.password ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.password[0].value,
      expression: "form.password[0].value"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "name": "pass"
    },
    domProps: {
      "value": _vm.form.password[0].value
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form.password[0], "value", $event.target.value);
      }
    }
  }) : _vm._e()]) : _vm._e(), _c('h3', {
    staticClass: "content-center__title"
  }, [_vm._v(_vm._s(_vm.messages.mail))]), _c('ValidationProvider', {
    ref: "mail",
    staticClass: "d-block w-100",
    attrs: {
      "name": "mail",
      "rules": "required"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(v) {
        return [_c('div', {
          staticClass: "form-group content-center__input"
        }, [_c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.form.mail[0].value,
            expression: "form.mail[0].value"
          }],
          staticClass: "form-control",
          attrs: {
            "type": "mail",
            "name": "mail"
          },
          domProps: {
            "value": _vm.form.mail[0].value
          },
          on: {
            "input": function input($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.form.mail[0], "value", $event.target.value);
            }
          }
        })]), _c('div', {
          staticClass: "text-danger text-small"
        }, _vm._l(v.errors, function (error, ii) {
          return _c('small', {
            key: ii,
            staticClass: "d-block"
          }, [_vm._v(" " + _vm._s(error) + " ")]);
        }), 0)];
      }
    }], null, false, 3187930093)
  }), _vm._l(_vm.templates, function (temp, i) {
    return _c('ValidationProvider', {
      key: i,
      ref: temp.ref,
      refInFor: true,
      staticClass: "d-block w-100",
      scopedSlots: _vm._u([{
        key: "default",
        fn: function fn(v) {
          return [_c(temp, {
            tag: "component"
          }), _c('div', {
            staticClass: "text-danger text-small"
          }, _vm._l(v.errors, function (error, ii) {
            return _c('small', {
              key: ii,
              staticClass: "d-block"
            }, [_vm._v(" " + _vm._s(error) + " ")]);
          }), 0)];
        }
      }], null, true)
    });
  }), _c('div', {
    staticClass: "content-center__btn"
  }, [_c('div', {
    staticClass: "btn-login btn-login--connexion",
    on: {
      "click": _vm.RegisterDefault
    }
  }, [_c('span', {
    staticClass: "btn-login__text"
  }, [_vm._v(" " + _vm._s(_vm.messages.submit.register) + " ")]), _vm.waiting == 'wait' ? _c('svgWaiting') : _vm._e()], 1)]), _c('hr')], 2) : _vm._e(), _vm.modelRegisterForm === 'generate_password' ? _c('div', [_c('h4', {
    staticClass: "title"
  }, [_vm._v("Creation automatique du compte")]), _c('p', {
    staticClass: "mb-4"
  }, [_vm._v(" Vos informations de connexion seront transferés à cette adresse. ")]), _vm.validEmail(_vm.form.name[0].value) ? _c('div', {
    staticClass: "mb-5"
  }, [_c('strong', [_vm._v(" " + _vm._s(_vm.form.name[0].value) + " ")]), _vm._v(" " + _vm._s(_vm.set_email()) + " ")]) : _vm._e(), !_vm.validEmail(_vm.form.name[0].value) ? _c('div', [_c('ValidationProvider', {
    ref: "mail",
    staticClass: "d-block w-100",
    attrs: {
      "name": "mail",
      "rules": "required"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(v) {
        return [_c('div', {
          staticClass: "form-group content-center__input"
        }, [_c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.form.mail[0].value,
            expression: "form.mail[0].value"
          }],
          staticClass: "form-control",
          attrs: {
            "type": "mail",
            "name": "mail"
          },
          domProps: {
            "value": _vm.form.mail[0].value
          },
          on: {
            "input": function input($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.form.mail[0], "value", $event.target.value);
            }
          }
        })]), _c('div', {
          staticClass: "text-danger text-small"
        }, _vm._l(v.errors, function (error, ii) {
          return _c('small', {
            key: ii,
            staticClass: "d-block"
          }, [_vm._v(" " + _vm._s(error) + " ")]);
        }), 0)];
      }
    }], null, false, 3187930093)
  })], 1) : _vm._e(), _c('div', {
    staticClass: "content-center__btn"
  }, [_c('div', {
    staticClass: "btn-login btn-login--connexion",
    on: {
      "click": _vm.generatePassword
    }
  }, [_c('span', {
    staticClass: "btn-login__text"
  }, [_vm._v(" " + _vm._s(_vm.messages.submit.register) + " ")]), _vm.waiting == 'wait' ? _c('svgWaiting') : _vm._e()], 1)])]) : _vm._e(), _c('a', {
    staticClass: "text-center d-block",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function click($event) {
        return _vm.$emit('select-stepe', 'checkstatus');
      }
    }
  }, [_vm._v(" Retour ")])]);
};
var RegisTervue_type_template_id_2be2efe3_staticRenderFns = [];

;// CONCATENATED MODULE: ./src/App/components/RegisTer.vue?vue&type=template&id=2be2efe3&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__(9554);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(4747);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(4916);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.test.js
var es_regexp_test = __webpack_require__(7601);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(2526);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(1817);
;// CONCATENATED MODULE: ./src/App/formatFields/InputBootstrap.js






/* harmony default export */ const InputBootstrap = ({
  modelsFields: {},
  /**
   * La valeur par defaut peut etre definit via defaultValue, lors de la consctruction, ou definit dans <component.
   * On recupere les données via un emit @b-input au niveau du <component.
   * @param {} h
   * @param {*} field
   * @param {*} defaultValue
   * @returns
   */
  string: function string(h, field) {
    var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    if (defaultValue.length === 0) {
      defaultValue.push({
        value: ""
      });
    }
    var inputs = [];
    // Ajout du label
    inputs.push(h("label", {
      "class": ["d-block", "content-center__title"]
    }, [field.label_value]));
    defaultValue.forEach(function (el) {
      inputs.push(h("input", {
        props: {
          type: "text",
          value: el.value,
          b_input: {
            type: Object,
            required: true
          }
        },
        on: {
          input: function input(e) {
            if (e.target && e.target.value) el.value = e.target.value;
          }
        },
        "class": ["form-control"]
      }));
    });
    // ajout de la description
    inputs.push(h("small", {
      "class": ["text-muted"]
    }, [field.description]));
    var formG = h("div", {
      props: {},
      "class": ["form-group", "content-center__input"]
    }, inputs);
    return formG;
  }
});
;// CONCATENATED MODULE: ./src/App/formatFields/formatFieldsBootstrap.js










/**
 * Permet de formater les champs drupal avec les equivalence bootstrap vuejs.
 */
var formatField = /*#__PURE__*/function () {
  function formatField(entity, bundle) {
    (0,classCallCheck/* default */.Z)(this, formatField);
    this.entity = entity;
    this.bundle = bundle;
    // ---------
  }
  /**
   * Retoune les champs convertie en utilisant les composants bootstrap-vuejs.
   * @returns Array []
   */
  (0,createClass/* default */.Z)(formatField, [{
    key: "format",
    value: function () {
      var _format = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee() {
        var _this = this;
        var fields;
        return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.getFields();
            case 2:
              fields = _context.sent;
              return _context.abrupt("return", new Promise(function (resolv, reject) {
                if (fields.data && fields.data.fields) {
                  InputBootstrap.modelsFields = _this.buildModel(fields.data.fields);
                  var formatFields = [];
                  var _loop = function _loop(i) {
                    formatFields.push({
                      ref: i,
                      props: {
                        name: {
                          type: String,
                          "default": fields.data.fields[i].name
                        }
                      },
                      render: function render(createElement) {
                        var renderField = [];
                        switch (fields.data.fields[i].type) {
                          case "string":
                            renderField.push(InputBootstrap.string(createElement, fields.data.fields[i], InputBootstrap.modelsFields[i]));
                            break;
                        }
                        return createElement("div", renderField);
                      }
                    });
                  };
                  for (var i in fields.data.fields) {
                    _loop(i);
                  }
                  resolv({
                    templates: formatFields,
                    models: InputBootstrap.modelsFields
                  });
                } else {
                  reject("Aucune donnée disponible");
                }
              }));
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function format() {
        return _format.apply(this, arguments);
      }
      return format;
    }()
    /**
     * Get fileds in drupal.
     * @returns
     */
  }, {
    key: "getFields",
    value: function getFields() {
      var url = "/api/form-node/generate-form";
      if (this.entity === "user") {
        url = "/api/form-node/generate-user";
      }
      url += "/" + this.bundle;
      return App_utilities.get(url);
    }
    /**
     * - Cet object permet de rendre les elements de l'object ecoutable.
     *   on creer tous les champs, puis on initialise InputBootstrap.modelsFields avec tous les champs.
     *   De cette facon vuejs peut ecouter les MAJ de champs.
     */
  }, {
    key: "buildModel",
    value: function buildModel(fields) {
      var models = {};
      for (var i in fields) {
        if (fields[i].type) models[i] = [];
      }
      return models;
    }
  }]);
  return formatField;
}();
/* harmony default export */ const formatFieldsBootstrap = (formatField);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/RegisTer.vue?vue&type=script&lang=js&

















/* harmony default export */ const RegisTervue_type_script_lang_js_ = ({
  name: "RegisTer",
  components: {
    svgWaiting: function svgWaiting() {
      return __webpack_require__.e(/* import() */ 448).then(__webpack_require__.bind(__webpack_require__, 8448));
    }
  },
  props: {
    urlLogo: {
      type: String,
      required: true
    },
    formValidate: {
      type: Object,
      required: true
    },
    showPassword: {
      type: Boolean,
      "default": false
    },
    actionAfterLogin: {
      type: String,
      required: true
    },
    modelRegisterForm: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      messages: config.messages,
      waiting: "",
      templates: []
    };
  },
  computed: (0,objectSpread2/* default */.Z)({}, (0,vuex_esm/* mapState */.rn)(["form"])),
  mounted: function mounted() {
    if (this.showPassword) {
      if (this.form.password === undefined) {
        this.$set(this.form, "password", [{
          value: ""
        }]);
      }
    } else if (this.form.password) {
      delete this.form.password;
    }
    this.getFields();
  },
  methods: {
    generatePassword: function generatePassword() {
      var _this = this;
      return (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee() {
        var url, test;
        return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this.waiting = "wait";
              url = "/login-rx-vuejs/genrate-password";
              _context.next = 4;
              return _this.formValidate.validate();
            case 4:
              test = _context.sent;
              if (test) {
                App_utilities.post(url, _this.form).then(function (resp) {
                  console.log("resp : ", resp);
                  _this.waiting = "";
                  config.AfterRedirect(_this.actionAfterLogin, resp);
                })["catch"](function () {
                  _this.waiting = "";
                });
              } else {
                _this.waiting = "";
                console.log("echec de validation de mail");
              }
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    /**
     * --
     */
    RegisterDefault: function RegisterDefault() {
      var _this2 = this;
      return (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee2() {
        var url, test;
        return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this2.waiting = "wait";
              url = "/user/register?_format=json";
              _context2.next = 4;
              return _this2.formValidate.validate();
            case 4:
              test = _context2.sent;
              if (test) App_utilities.post(url, _this2.form).then(function (resp) {
                console.log("resp : ", resp);
                _this2.waiting = "";
                config.modalSuccess(config.msgCreate([_this2.messages.devisCreateUser]), {
                  title: "Votre compte a été crré",
                  footerClass: "d-none",
                  headerBgVariant: "success",
                  headerTextVariant: "light"
                }).then(function () {
                  config.AfterRedirect(_this2.actionAfterLogin, resp);
                });
              })["catch"](function (e) {
                _this2.waiting = "";
                // console.log("catch : ", e);
                if (e.error && e.error.data && e.error.data.errors) {
                  var errors = e.error.data.errors;
                  // console.log(" this.$refs : ", this.$refs);
                  errors.forEach(function (error) {
                    var field = error.split(":");
                    // console.log(" field : ", field);
                    if (_this2.$refs[field[0]]) {
                      if (_this2.$refs[field[0]][0]) {
                        _this2.$refs[field[0]][0].setErrors([field[1]]);
                      } else _this2.$refs[field[0]].setErrors([field[1]]);
                    }
                  });
                }
              });else _this2.waiting = "";
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    /**
     * --
     */
    getFields: function getFields() {
      var _this3 = this;
      var fds = new formatFieldsBootstrap("user", "user");
      fds.format().then(function (resp) {
        _this3.templates = resp.templates;
        for (var fieldName in resp.models) {
          _this3.$set(_this3.form, fieldName, resp.models[fieldName]);
        }
        console.log("resp : ", resp);
      });
    },
    validEmail: function validEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
    set_email: function set_email() {
      this.form.mail = this.form.name;
    }
  }
});
;// CONCATENATED MODULE: ./src/App/components/RegisTer.vue?vue&type=script&lang=js&
 /* harmony default export */ const components_RegisTervue_type_script_lang_js_ = (RegisTervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/App/components/RegisTer.vue





/* normalize component */
;
var RegisTer_component = (0,componentNormalizer/* default */.Z)(
  components_RegisTervue_type_script_lang_js_,
  RegisTervue_type_template_id_2be2efe3_render,
  RegisTervue_type_template_id_2be2efe3_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const RegisTer = (RegisTer_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/LoginRegister.vue?vue&type=script&lang=js&






//import { ValidationObserver } from "vee-validate";





/* harmony default export */ const LoginRegistervue_type_script_lang_js_ = ({
  name: "LoginRegister",
  props: {
    // see config_for_all.AfterRedirect for more informations.
    actionAfterLogin: {
      type: String,
      "default": "default"
    },
    modelRegisterForm: {
      type: String,
      "default": "default"
    }
  },
  /**
   * --
   */
  data: function data() {
    return {
      messages: config.messages,
      waiting: "",
      stepe: CheckStatus,
      models: {},
      baseURl: src_config.baseURl,
      isBusy: false,
      alertDisplay: false,
      alertType: "alert-danger",
      alertText: "",
      urlLogo: window.location.origin + "" + window.logo_current_theme,
      formValidate: {}
    };
  },
  /**
   * --
   */
  mounted: function mounted() {
    facebook.appId = 889256191665205;
    this.TryToLoginWithFacebook();
    facebook.chargement();
    this.formValidate = this.$refs.formValidate;
  },
  methods: {
    selectStepe: function selectStepe(step) {
      switch (step) {
        case "checkstatus":
          this.stepe = checkstatus;
          break;
        case "setPassword":
          this.stepe = SetPassword;
          break;
        case "register":
          this.stepe = RegisTer;
          break;
      }
    },
    /**
     * Ecoute un evenement afin de determiner si l'utilisateur a clique sur le bonton de connexion et que le processus soit terminé.
     */
    TryToLoginWithFacebook: function TryToLoginWithFacebook() {
      var _this = this;
      document.addEventListener("wbu-fb-status-change", function () {
        _this.isBusy = true;
        _this.getFields();
        App_utilities.post("/login-rx-vuejs/facebook-check", facebook.user).then(function (resp) {
          _this.isBusy = false;
          _this.alertDisplay = true;
          _this.alertType = "alert-success";
          _this.alertText = " Connexion réussie  ";
          if (resp.reponse && resp.reponse.config.url !== resp.reponse.request.responseURL) {
            window.location.assign(resp.reponse.request.responseURL);
          }
          // il faut s'assurer que les données sont ok.
          else if (resp.data && resp.data.createuser) {
            _this.stepe = "final-fb-register";
          } else {
            window.location.assign(window.location.origin);
          }
        })["catch"](function (errors) {
          _this.isBusy = false;
          _this.isBusy = false;
          _this.alertDisplay = true;
          _this.alertType = "alert-danger";
          _this.alertText = "Facebook : Erreur de connexion ";
          if (errors.error) {
            _this.alertText = errors.error.statusText;
          }
        });
      }, false);
    },
    IsBusy: function IsBusy() {
      this.isBusy = true;
      console.log("this.isbusy", this.isBusy);
    },
    /**
     * --
     */
    finalRegister: function finalRegister() {
      var _this2 = this;
      return (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee() {
        var params, url, test;
        return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this2.waiting = "wait";
              params = {};
              url = "";
              if (_this2.stepe === "final-gl-register") {
                url = "/login-rx-vuejs/google-login";
                params = {
                  fields: _this2.models,
                  google: []
                };
              } else if (_this2.stepe === "final-fb-register") {
                url = "/login-rx-vuejs/facebook-login";
                params = {
                  fields: _this2.models,
                  facebook: facebook.user
                };
              }
              _context.next = 6;
              return _this2.$refs.formValidate.validate();
            case 6:
              test = _context.sent;
              if (test) App_utilities.post(url, params).then(function (resp) {
                console.log(resp);
                _this2.waiting = "";
                if (resp.reponse && resp.reponse.config.url !== resp.reponse.request.responseURL) {
                  window.location.assign(resp.reponse.request.responseURL);
                }
              });
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    }
  }
});
;// CONCATENATED MODULE: ./src/App/components/LoginRegister.vue?vue&type=script&lang=js&
 /* harmony default export */ const components_LoginRegistervue_type_script_lang_js_ = (LoginRegistervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/LoginRegister.vue?vue&type=style&index=0&id=6dc055cf&prod&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/App/components/LoginRegister.vue?vue&type=style&index=0&id=6dc055cf&prod&lang=scss&

;// CONCATENATED MODULE: ./src/App/components/LoginRegister.vue



;


/* normalize component */

var LoginRegister_component = (0,componentNormalizer/* default */.Z)(
  components_LoginRegistervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const LoginRegister = (LoginRegister_component.exports);

/***/ })

}]);
//# sourceMappingURL=loginRxVuejs.umd.354.js.map