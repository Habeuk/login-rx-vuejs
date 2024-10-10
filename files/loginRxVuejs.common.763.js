"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkdrupal_vuejs"] = (typeof self !== 'undefined' ? self : this)["webpackChunkdrupal_vuejs"] || []).push([[763],{

/***/ 8763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ LoginRegister)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/LoginRegister.vue?vue&type=template&id=912e006a
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ValidationObserver', {
    ref: "formValidate",
    attrs: {
      "tag": "form"
    }
  }, [_c('div', {
    staticClass: "login-page",
    attrs: {
      "facebook_app_is_define": _vm.facebook_app_is_define
    }
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
      "model-register-form": _vm.modelRegisterForm,
      "show-password": _vm.showPassword,
      "action-after-register": _vm.actionAfterRegister,
      "show-modal-success": _vm.showModalSuccess,
      "configs_login_rx_vuejs": _vm.configs_login_rx_vuejs,
      "show-register-link": _vm.showRegisterLink,
      "readonly-name": _vm.readonlyName
    },
    on: {
      "select-stepe": _vm.selectStepe,
      "go-register": _vm.goRegister
    }
  })], 1)])], 1), _c('div', {
    staticClass: "politik-secur mx-auto text-center"
  }, [_vm._t("condition_utilisation", function () {
    return [_vm.configs_login_rx_vuejs && _vm.configs_login_rx_vuejs.texts && _vm.configs_login_rx_vuejs.texts.condition_utilisation ? _c('div', {
      domProps: {
        "innerHTML": _vm._s(_vm.configs_login_rx_vuejs.texts.condition_utilisation.value)
      }
    }) : _vm._e()];
  })], 2)]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(7546);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(4634);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__(668);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(4114);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(6099);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(3362);
// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(4100);
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../wbuutilities/src/Buttons/ButtonSave.vue?vue&type=template&id=29246a2e&scoped=true&lang=html
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

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../wbuutilities/src/Buttons/ButtonSave.vue?vue&type=script&lang=js
//
//import magentoSynchroListSites from "./ListSites.vue";
/* harmony default export */ const ButtonSavevue_type_script_lang_js = ({
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
;// ../wbuutilities/src/Buttons/ButtonSave.vue?vue&type=script&lang=js
 /* harmony default export */ const Buttons_ButtonSavevue_type_script_lang_js = (ButtonSavevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1656);
;// ../wbuutilities/src/Buttons/ButtonSave.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  Buttons_ButtonSavevue_type_script_lang_js,
  ButtonSavevue_type_template_id_29246a2e_scoped_true_lang_html_render,
  ButtonSavevue_type_template_id_29246a2e_scoped_true_lang_html_staticRenderFns,
  false,
  null,
  "29246a2e",
  null
  
)

/* harmony default export */ const ButtonSave = (component.exports);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../wbuutilities/src/Buttons/ButtonDelete.vue?vue&type=template&id=0b82f270&scoped=true&lang=html
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

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../wbuutilities/src/Buttons/ButtonDelete.vue?vue&type=script&lang=js
//
//import magentoSynchroListSites from "./ListSites.vue";
/* harmony default export */ const ButtonDeletevue_type_script_lang_js = ({
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
;// ../wbuutilities/src/Buttons/ButtonDelete.vue?vue&type=script&lang=js
 /* harmony default export */ const Buttons_ButtonDeletevue_type_script_lang_js = (ButtonDeletevue_type_script_lang_js); 
;// ../wbuutilities/src/Buttons/ButtonDelete.vue





/* normalize component */
;
var ButtonDelete_component = (0,componentNormalizer/* default */.A)(
  Buttons_ButtonDeletevue_type_script_lang_js,
  ButtonDeletevue_type_template_id_0b82f270_scoped_true_lang_html_render,
  ButtonDeletevue_type_template_id_0b82f270_scoped_true_lang_html_staticRenderFns,
  false,
  null,
  "0b82f270",
  null
  
)

/* harmony default export */ const ButtonDelete = (ButtonDelete_component.exports);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.error.to-string.js
var es_error_to_string = __webpack_require__(6918);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(4423);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__(8598);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.date.to-json.js
var es_date_to_json = __webpack_require__(739);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.date.to-string.js
var es_date_to_string = __webpack_require__(3288);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(2010);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.json.stringify.js
var es_json_stringify = __webpack_require__(3110);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(9432);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(1699);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(2762);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.btoa.js
var web_btoa = __webpack_require__(2207);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-exception.constructor.js
var web_dom_exception_constructor = __webpack_require__(5815);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-exception.stack.js
var web_dom_exception_stack = __webpack_require__(4979);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-exception.to-string-tag.js
var web_dom_exception_to_string_tag = __webpack_require__(9739);
// EXTERNAL MODULE: ../wbuutilities/node_modules/axios/lib/axios.js + 40 modules
var axios = __webpack_require__(2465);
;// ../wbuutilities/src/Ajax/basic.js
















/**
 * Permet d'effectuer les requetes
 * pour modifier ou definir les paramettres par defaut de l'instance,
 * 1- importer
 * import { AjaxToastBootStrap } from "wbuutilities";
 * 2- Surcharger ( par example la duree)
 * AjaxToastBootStrap.axiosInstance.defaults.timeout = 1200000;
 */

var InstAxios = axios/* default */.A.create({
  timeout: 300000
});
// Surcharge des données d'envoit
InstAxios.interceptors.request.use(function (config) {
  // Recuperation du temps de debut.
  config.headers["request-startTime"] = new Date().getTime();
  //
  return config;
});
// surcharge de la reponse
InstAxios.interceptors.response.use(function (response) {
  // Calcul de la durée
  var currentTime = new Date().getTime();
  var startTime = response.config.headers["request-startTime"];
  var duree = currentTime - startTime;
  if (duree) {
    duree = duree / 1000;
  }
  response.headers["request-duration"] = duree;
  //
  return response;
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
   * Permet d'afficher la console la les données envoyé et le retour de chaque requete.
   */
  debug: false,
  /**
   * Permet de determiner, si nous sommes en local ou pas.
   * @public
   * @returns Booleans
   */
  isLocalDev: window.location.host.includes("localhost") || window.location.host.includes(".kksa") ? true : false,
  /**
   * Permet d'ajouter les enttetes.
   * {key:value}
   */
  customHeaders: {},
  /**
   * Permet de derminer la source du domaine, en function des paramettres definit.
   * @private (ne doit pas etre surcharger).
   * @returns String
   */
  getBaseUrl: function getBaseUrl() {
    if (this.baseUrl) return this.isLocalDev && this.TestDomain ? this.TestDomain.trim("/") : this.baseUrl;else return this.isLocalDev && this.TestDomain ? this.TestDomain.trim("/") : window.location.protocol + "//" + window.location.host;
  },
  /**
   * Permet de recuperer les messages , en priorité celui definie dans headers.customstatustext.
   *
   * @param {*} er
   * @param {*} type ( vrai pour recuperer les messages en cas de success )
   * @returns
   */
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
  post: function post(url, datas) {
    var _this = this;
    var configs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return new Promise(function (resolv, reject) {
      if (_this.languageId !== "" && _this.languageId !== undefined && _this.languageId !== null && !url.includes("://")) url = "/" + _this.languageId + url;
      var urlFinal = url.includes("://") ? url : _this.getBaseUrl() + url;
      configs = _this.mergeCustomHeaders(configs);
      InstAxios.post(urlFinal, datas, configs).then(function (reponse) {
        if (_this.debug) console.log("Debug axio : \n", urlFinal, "\n payload: ", datas, "\n config: ", configs, "\n Duration : ", reponse.headers["request-duration"], "\n reponse: ", reponse, "\n ------ \n");
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
  "delete": function _delete(url, datas) {
    var _this2 = this;
    var configs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return new Promise(function (resolv, reject) {
      var urlFinal = url.includes("://") ? url : _this2.getBaseUrl() + url;
      configs = _this2.mergeCustomHeaders(configs);
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
  get: function get(url) {
    var _this3 = this;
    var configs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return new Promise(function (resolv, reject) {
      if (_this3.languageId !== "" && _this3.languageId !== undefined && _this3.languageId !== null && !url.includes("://")) url = "/" + _this3.languageId + url;
      var urlFinal = url.includes("://") ? url : _this3.getBaseUrl() + url;
      configs = _this3.mergeCustomHeaders(configs);
      InstAxios.get(urlFinal, configs).then(function (reponse) {
        if (_this3.debug) console.log("Debug axio : \n", urlFinal, "\n Config: ", configs, "\n Duration : ", reponse.headers["request-duration"], "\n Reponse: ", reponse, "\n ------ \n");
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
  },
  /**
   * Permet d'ajouter une configuration specifique
   */
  setHeaders: function setHeaders(key, value) {
    this.customHeaders[key] = value;
  },
  /**
   * Permet d'additionner la configation
   */
  mergeCustomHeaders: function mergeCustomHeaders(configs) {
    if (!configs.headers) configs.headers = {};
    if (this.customHeaders) {
      for (var i in this.customHeaders) {
        configs.headers[i] = this.customHeaders[i];
      }
    }
    return configs;
  }
};
/* harmony default export */ const basic = (basicRequest);
// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/components/toast/helpers/bv-toast.js + 3 modules
var bv_toast = __webpack_require__(7918);
// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/components/modal/index.js + 13 modules
var modal = __webpack_require__(2788);
;// ../wbuutilities/src/Toasts/BootStrap.js






external_commonjs_vue_commonjs2_vue_root_Vue_default().use(bv_toast/* BVToastPlugin */.F);
external_commonjs_vue_commonjs2_vue_root_Vue_default().use(modal/* ModalPlugin */.l);
var vm = new (external_commonjs_vue_commonjs2_vue_root_Vue_default())();
var AjaxToastBootStrap = (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, basic), {}, {
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
        console.log("value : ", value);
        resolv(value);
      })["catch"](function (err) {
        reject(err);
      });
    });
  },
  modalConfirmDelete: function modalConfirmDelete() {
    var body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Confirmer la suppression, NB : cette action est irreverssible.";
    var newConf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var conf = {
      title: "Attention",
      okVariant: "danger",
      okTitle: "Supprimer",
      cancelTitle: "Annuler",
      footerClass: "p-2",
      headerBgVariant: "danger",
      headerTextVariant: "light"
    };
    for (var i in newConf) {
      conf[i] = newConf[i];
    }
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
    var showNotification = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var successMessage = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "success";
    var failureMessage = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "warning";
    return new Promise(function (resolv, reject) {
      _this2.post(url, datas, configs).then(function (reponse) {
        if (showNotification) {
          _this2.notification(successMessage);
        }
        resolv(reponse);
      })["catch"](function (error) {
        //console.log("error : ", error);
        _this2.notification(_this2.GetErrorTitle(error), failureMessage);
        reject(error);
      });
    });
  },
  bGet: function bGet(url, configs) {
    var _this3 = this;
    var showNotification = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var successMessage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "success";
    var failureMessage = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "warning";
    return new Promise(function (resolv, reject) {
      _this3.get(url, configs).then(function (reponse) {
        if (showNotification) {
          _this3.notification(successMessage);
        }
        resolv(reponse);
      })["catch"](function (error) {
        _this3.notification(_this3.GetErrorTitle(error), failureMessage);
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
var classCallCheck = __webpack_require__(7552);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(6654);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/callSuper.js + 3 modules
var callSuper = __webpack_require__(1754);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/superPropGet.js + 2 modules
var superPropGet = __webpack_require__(5756);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(9203);
;// ../wbuutilities/src/DrupalJsonApi/entityFormat.js


var baseUrl = "/jsonapi";
var entityFormat_entityFormat = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  function entityFormat() {
    _classCallCheck(this, entityFormat);
  }
  return _createClass(entityFormat, [{
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
}()));

;// ../wbuutilities/src/DrupalJsonApi/entityLoad.js







/**
 * Permet de recuperer les données via le module drupal json api.
 */


var entityLoad = /*#__PURE__*/(/* unused pure expression or super */ null && (function (_entityFormat) {
  function entityLoad(entityType, bundle) {
    var _this;
    _classCallCheck(this, entityLoad);
    /**
     * Le mot clé 'super' est utilisé afin d'appeler ou d'accéder à des fonctions définies sur l'objet parent
     */
    _this = _callSuper(this, entityLoad);
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
    _this.ajax = ajax;
    /**
     * Données brutes provenanat de drupal.
     */
    _this.rawDatas = [];
    return _this;
  }

  /**
   * Charge les données.
   */
  _inherits(entityLoad, _entityFormat);
  return _createClass(entityLoad, [{
    key: "load",
    value: function load() {
      var _this2 = this;
      return new Promise(function (resolv, reject) {
        _this2.ajax.get(_superPropGet(entityLoad, "buildLink", _this2, 3)([_this2.entityType, _this2.bundle])).then(function (res) {
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
}(entityFormat)));
/* harmony default export */ const DrupalJsonApi_entityLoad = ((/* unused pure expression or super */ null && (entityLoad)));
;// ../wbuutilities/index.js
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





;// ./src/App/components/config_for_all.js
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
    // emits an event after creating an account
    else if (action == "emit_even_register") {
      var event = new CustomEvent("login_rx_vuejs__user_is_register");
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
;// ./src/rootConfig.js




var config = (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, basic), {}, {
  languageId: window.drupalSettings && window.drupalSettings.path && window.drupalSettings.path.currentLanguage ? window.drupalSettings.path.currentLanguage : null,
  // on ne laisse la valeur par defaut, pour permttre au domaine local de pouvoir se connecter.
  TestDomain: window.location.host.includes("localhost") ? "http://habeuk.kksa" : window.location.protocol + "//" + window.location.host,
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
/* harmony default export */ const rootConfig = (config);
;// ./src/App/session.js




/* harmony default export */ const session = ((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, rootConfig), {}, {
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
;// ./src/App/utilities.js





var utilities = (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, session), rootConfig), {}, {
  /**
   * configCustom[{name:"",value:""}]
   */
  dPost: function dPost(url, datas) {
    var _arguments = arguments,
      _this = this;
    return (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee() {
      var configCustom, Token, configs;
      return (0,regeneratorRuntime/* default */.A)().wrap(function _callee$(_context) {
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
    return (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee2() {
      var configCustom, Token, configs;
      return (0,regeneratorRuntime/* default */.A)().wrap(function _callee2$(_context2) {
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
;// ./src/App/components/config.js








var config_vm = new (external_commonjs_vue_commonjs2_vue_root_Vue_default())();
/* harmony default export */ const components_config = ((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, config_for_all), {}, {
  messages: {
    title_login: "Connect with",
    log_email: "Email ou Nom d'utilisateur",
    email: "Your email address",
    pass: "Mot de passe",
    login: "Nom d'utilisateur",
    mail: "Email",
    title_end: "Don't have an account?",
    create_compte: "Register",
    forget_pass: "Forgotten password",
    submit: {
      first: "Suivant",
      connect: "Connexion",
      register: "S'inscrire",
      "final": "terminée"
    },
    back: "Back",
    info_about_register: "Your login information will be transferred to this address",
    title_register_auto: "Automatic account creation",
    titre_create_compte: "Your account has been created",
    devis_create_user: "Votre compte a été creer sur <a href='/'> lesroisdelareno.fr </a>. <br> <strong> Bien vouloir verifier votre boite mail afin de valider votre compte </strong>"
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
  },
  /**
   * Essaie de connecter l'utilisateur
   * @param {*} form
   */
  connexionUser: function connexionUser(form, actionAfterLogin) {
    var _this = this;
    return new Promise(function (resolv, reject) {
      var url = "/login-rx-vuejs/user-connexion";
      App_utilities.post(url, form).then(function (resp) {
        _this.AfterRedirect(actionAfterLogin, null, resp);
        resolv(resp);
      })["catch"](function (er) {
        reject(er);
      });
    });
  }
}));
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(6031);
;// ./src/App/rx/facebook.js

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
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/CheckStatus.vue?vue&type=template&id=6651c4be

var CheckStatusvue_type_template_id_6651c4be_render = function render() {
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
  }, [_vm._v(_vm._s(_vm.messages.title_login))]), _c('div', {
    staticClass: "content-center__btn-column"
  }, [_c('logingoogle', {
    attrs: {
      "idHtml": "default",
      "action-after-login": _vm.actionAfterLogin
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
  }, [_vm._v(" " + _vm._s(_vm.messages.submit.first) + " ")]), _vm.waiting === 'wait' ? _c('svgWaiting') : _vm._e()], 1)]), _vm.showRegisterLink ? _c('div', [_c('hr', {
    staticClass: "diviseur"
  }), _c('small', [_vm._v(" " + _vm._s(_vm.messages.title_end) + " ")]), _c('a', {
    staticClass: "text-center d-block cursor",
    attrs: {
      "hre": "#"
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.register.apply(null, arguments);
      }
    }
  }, [_vm._v(" " + _vm._s(_vm.messages.create_compte) + " ")]), _c('div', [_c('small', [_c('a', {
    attrs: {
      "href": "/user/password"
    }
  }, [_vm._v(" " + _vm._s(_vm.messages.forget_pass) + " ")])])])]) : _vm._e()]);
};
var CheckStatusvue_type_template_id_6651c4be_staticRenderFns = [];

;// ./src/App/components/CheckStatus.vue?vue&type=template&id=6651c4be

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(3792);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(7764);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(2953);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/LoginGoogle.vue?vue&type=template&id=dfe3dac0
var LoginGooglevue_type_template_id_dfe3dac0_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "buttton-google-aouth",
    "class": _vm.classRender,
    attrs: {
      "id": _vm.idHtmlrender,
      "client_google_is_define": _vm.client_google_is_define
    }
  });
};
var LoginGooglevue_type_template_id_dfe3dac0_staticRenderFns = [];

;// ./src/App/rx/google.js
//const gapi = window.gapi;
/* harmony default export */ const google = ({
  userAccess: {},
  //contient les informations renvoyés par google apres approbations.
  client_id: "513247959752-qapd9jb30pdtoh51m0h53070a2v8c4er.apps.googleusercontent.com"
});
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(5353);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/LoginGoogle.vue?vue&type=script&lang=js



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




/* harmony default export */ const LoginGooglevue_type_script_lang_js = ({
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
      required: true
    }
  },
  computed: (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, (0,vuex_esm/* mapState */.aH)(["configs_login_rx_vuejs"])), {}, {
    idHtmlrender: function idHtmlrender() {
      return "google-login-tab" + this.idHtml;
    },
    client_google_is_define: function client_google_is_define() {
      if (this.configs_login_rx_vuejs && this.configs_login_rx_vuejs.client_google_id) {
        this.initGoogle();
        return true;
      } else {
        console.log("Error de configuration de google, veillez denifir la clée 'client_google_id'");
        return "";
      }
    }
  }),
  methods: {
    initGoogle: function initGoogle() {
      var _this = this;
      if (!window.google) {
        loadScript("https://accounts.google.com/gsi/client").then(function () {
          _this.getUserInfoFromFrame();
        });
      } else {
        this.getUserInfoFromFrame();
      }
    },
    getUserInfoFromFrame: function getUserInfoFromFrame() {
      var _this2 = this;
      var self = this;
      function handleCredentialResponse(response) {
        google.userAccess = (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, response), {}, {
          client_id: response.clientId
        });
        self.TryToLoginWithGoogle();
        window.rxGoogle = google;
      }
      var goo = function goo() {
        var config = {
          // example => 51324xxxx-xxxxxxxxxxxxxxxxx8c4er.apps.googleusercontent.com
          client_id: _this2.configs_login_rx_vuejs.client_google_id,
          callback: handleCredentialResponse
        };
        var btn_config = {
          theme: "outline",
          size: "large",
          shape: "rectangular"
        };
        if (App_utilities.languageId) {
          config.locale = App_utilities.languageId;
          btn_config.locale = App_utilities.languageId;
        }
        window.google.accounts.id.initialize(config);
        window.google.accounts.id.renderButton(document.getElementById(self.idHtmlrender), btn_config);
        window.google.accounts.id.prompt(); // also display the One Tap dialog
      };
      goo();
    },
    /**
     * Ecoute un evenement afin de determiner si l'utilisateur a clique sur le bonton de connexion et que le processus soit terminé.
     */
    TryToLoginWithGoogle: function TryToLoginWithGoogle() {
      var _this3 = this;
      // this.IsBusy();
      // this.getFields();
      return new Promise(function (resolv, reject) {
        App_utilities.post("/login-rx-vuejs/google-check", google.userAccess).then(function (resp) {
          _this3.isBusy = false;
          _this3.alertDisplay = true;
          _this3.alertType = "alert-success";
          _this3.alertText = "Connexion réussie";
          _this3.$emit("ev_logingoogle", resp.data);
          // Si on souhaite juste obtenir les infos concernant l'utilisateur.
          if (_this3.returnUidInfo) {
            resolv(resp);
            return;
          }
          config_for_all.AfterRedirect(_this3.actionAfterLogin, null, resp);
          resolv(resp);
        })["catch"](function (errors) {
          _this3.isBusy = false;
          _this3.alertDisplay = true;
          _this3.alertType = "alert-danger";
          _this3.alertText = "Google : Erreur de connexion";
          if (errors.error && errors.error.statusText && errors.error.statusText != "") {
            _this3.alertText = errors.error.statusText;
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
;// ./src/App/components/LoginGoogle.vue?vue&type=script&lang=js
 /* harmony default export */ const components_LoginGooglevue_type_script_lang_js = (LoginGooglevue_type_script_lang_js); 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/LoginGoogle.vue?vue&type=style&index=0&id=dfe3dac0&prod&lang=scss
// extracted by mini-css-extract-plugin

;// ./src/App/components/LoginGoogle.vue?vue&type=style&index=0&id=dfe3dac0&prod&lang=scss

;// ./src/App/components/LoginGoogle.vue



;


/* normalize component */

var LoginGoogle_component = (0,componentNormalizer/* default */.A)(
  components_LoginGooglevue_type_script_lang_js,
  LoginGooglevue_type_template_id_dfe3dac0_render,
  LoginGooglevue_type_template_id_dfe3dac0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const LoginGoogle = (LoginGoogle_component.exports);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/CheckStatus.vue?vue&type=script&lang=js













/* harmony default export */ const CheckStatusvue_type_script_lang_js = ({
  name: "CheckStatus",
  components: {
    svgWaiting: function svgWaiting() {
      return __webpack_require__.e(/* import() */ 435).then(__webpack_require__.bind(__webpack_require__, 6435));
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
    },
    actionAfterLogin: {
      type: String,
      required: true
    },
    showRegisterLink: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      waiting: ""
    };
  },
  computed: (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, (0,vuex_esm/* mapState */.aH)(["form", "configs_login_rx_vuejs"])), {}, {
    messages: function messages() {
      if (this.configs_login_rx_vuejs && this.configs_login_rx_vuejs.texts) {
        return this.configs_login_rx_vuejs.texts;
      } else return components_config.messages;
    }
  }),
  methods: {
    loginFacebook: function loginFacebook() {
      this.waiting = "facebook";
      facebook.openPopup();
    },
    logOutFacebook: function logOutFacebook() {
      facebook.logOut();
    },
    register: function register() {
      this.$emit("go-register");
    },
    /**
     * Verifie si l'utilisateur existe deja.
     */
    checkUserStatus: function checkUserStatus() {
      var _this = this;
      return (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee() {
        var url, test;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee$(_context) {
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
;// ./src/App/components/CheckStatus.vue?vue&type=script&lang=js
 /* harmony default export */ const components_CheckStatusvue_type_script_lang_js = (CheckStatusvue_type_script_lang_js); 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/CheckStatus.vue?vue&type=style&index=0&id=6651c4be&prod&lang=scss
// extracted by mini-css-extract-plugin

;// ./src/App/components/CheckStatus.vue?vue&type=style&index=0&id=6651c4be&prod&lang=scss

;// ./src/App/components/CheckStatus.vue



;


/* normalize component */

var CheckStatus_component = (0,componentNormalizer/* default */.A)(
  components_CheckStatusvue_type_script_lang_js,
  CheckStatusvue_type_template_id_6651c4be_render,
  CheckStatusvue_type_template_id_6651c4be_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const CheckStatus = (CheckStatus_component.exports);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/SetPassword.vue?vue&type=template&id=6447e780
var SetPasswordvue_type_template_id_6447e780_render = function render() {
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
        return [_vm.form.pass ? _c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.form.pass[0].value,
            expression: "form.pass[0].value"
          }],
          staticClass: "form-control",
          attrs: {
            "type": "password",
            "name": "pass"
          },
          domProps: {
            "value": _vm.form.pass[0].value
          },
          on: {
            "input": function input($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.form.pass[0], "value", $event.target.value);
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
  }, [_vm._v(" " + _vm._s(_vm.messages.forget_pass) + " ")]), _c('div', {
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
  }, [_vm._v(" " + _vm._s(_vm.messages.back) + " ")])]);
};
var SetPasswordvue_type_template_id_6447e780_staticRenderFns = [];

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/SetPassword.vue?vue&type=script&lang=js











/* harmony default export */ const SetPasswordvue_type_script_lang_js = ({
  name: "SetPassword",
  components: {
    svgWaiting: function svgWaiting() {
      return __webpack_require__.e(/* import() */ 435).then(__webpack_require__.bind(__webpack_require__, 6435));
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
      waiting: ""
    };
  },
  computed: (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, (0,vuex_esm/* mapState */.aH)(["form", "configs_login_rx_vuejs"])), {}, {
    messages: function messages() {
      if (this.configs_login_rx_vuejs && this.configs_login_rx_vuejs.texts) {
        return this.configs_login_rx_vuejs.texts;
      } else return components_config.messages;
    }
  }),
  mounted: function mounted() {
    if (this.form.pass === undefined) {
      this.$set(this.form, "pass", [{
        value: ""
      }]);
    }
  },
  methods: {
    Login: function Login() {
      var _this = this;
      return (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee() {
        var test;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this.waiting = "wait";
              _context.next = 3;
              return _this.formValidate.validate();
            case 3:
              test = _context.sent;
              setTimeout(function () {
                if (test) components_config.connexionUser(_this.form, _this.actionAfterLogin).then(function () {
                  _this.waiting = "";
                })["catch"](function (e) {
                  console.log("Login : ", e);
                  _this.$refs.refPass.setErrors([e.error.statusText]);
                  _this.waiting = "error";
                });else _this.waiting = "";
              }, 3000);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    }
  }
});
;// ./src/App/components/SetPassword.vue?vue&type=script&lang=js
 /* harmony default export */ const components_SetPasswordvue_type_script_lang_js = (SetPasswordvue_type_script_lang_js); 
;// ./src/App/components/SetPassword.vue





/* normalize component */
;
var SetPassword_component = (0,componentNormalizer/* default */.A)(
  components_SetPasswordvue_type_script_lang_js,
  SetPasswordvue_type_template_id_6447e780_render,
  SetPasswordvue_type_template_id_6447e780_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const SetPassword = (SetPassword_component.exports);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/RegisTer.vue?vue&type=template&id=f58252c0

var RegisTervue_type_template_id_f58252c0_render = function render() {
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
  })]), _vm.modelRegisterFormResult === 'default' ? _c('div', [_c('h3', {
    staticClass: "content-center__title"
  }, [_vm._v(_vm._s(_vm.messages.login))]), _c('div', {
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
            "readonly": _vm.readonlyName,
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
        }, _vm._l(v.errors, function (err, ii) {
          return _c('small', {
            key: ii,
            staticClass: "d-block"
          }, [_vm._v(" " + _vm._s(err) + " ")]);
        }), 0)];
      }
    }], null, false, 3793439729)
  })], 1), _vm.showPassword ? _c('h3', {
    staticClass: "content-center__title"
  }, [_vm._v(" " + _vm._s(_vm.messages.pass) + " ")]) : _vm._e(), _vm.showPassword ? _c('div', {
    staticClass: "form-group content-center__input"
  }, [_c('ValidationProvider', {
    attrs: {
      "name": "pass",
      "rules": "required"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(v) {
        return [_vm.form.pass ? _c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.form.pass[0].value,
            expression: "form.pass[0].value"
          }],
          staticClass: "form-control",
          attrs: {
            "type": "password",
            "name": "pass"
          },
          domProps: {
            "value": _vm.form.pass[0].value
          },
          on: {
            "input": function input($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.form.pass[0], "value", $event.target.value);
            }
          }
        }) : _vm._e(), _c('div', {
          staticClass: "text-danger text-small"
        }, _vm._l(v.errors, function (err, ii) {
          return _c('small', {
            key: ii,
            staticClass: "d-block"
          }, [_vm._v(" " + _vm._s(err) + " ")]);
        }), 0)];
      }
    }], null, false, 2464977794)
  })], 1) : _vm._e(), _c('h3', {
    staticClass: "content-center__title"
  }, [_vm._v(_vm._s(_vm.messages.mail))]), _c('ValidationProvider', {
    ref: "mail",
    staticClass: "d-block w-100",
    attrs: {
      "name": "mail",
      "rules": "required|email"
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
        }, _vm._l(v.errors, function (err, ii) {
          return _c('small', {
            key: ii,
            staticClass: "d-block"
          }, [_vm._v(" " + _vm._s(err) + " ")]);
        }), 0)];
      }
    }], null, false, 2930674861)
  }), _c('div', {
    staticClass: "content-center__btn"
  }, [_c('div', {
    staticClass: "btn-login btn-login--connexion",
    on: {
      "click": _vm.RegisterDefault
    }
  }, [_c('span', {
    staticClass: "btn-login__text"
  }, [_vm._v(" " + _vm._s(_vm.messages.submit.register) + " ")]), _vm.waiting == 'wait' ? _c('svgWaiting') : _vm._e()], 1)]), _c('hr')], 1) : _vm._e(), _vm.modelRegisterFormResult === 'generate_password' ? _c('div', [_c('h4', {
    staticClass: "title mb-5"
  }, [_vm._v(_vm._s(_vm.messages.title_register_auto))]), _vm.validEmail(_vm.form.name[0].value) ? _c('div', {
    staticClass: "mb-5"
  }, [_c('p', [_vm._v(_vm._s(_vm.messages.info_about_register))]), _c('strong', [_vm._v(" " + _vm._s(_vm.form.name[0].value) + " ")]), _vm._v(" " + _vm._s(_vm.set_email()) + " ")]) : _vm._e(), !_vm.validEmail(_vm.form.name[0].value) ? _c('div', [_c('ValidationProvider', {
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
        }, [_c('label', {
          staticClass: "mb-0 pb-0"
        }, [_vm._v(" " + _vm._s(_vm.messages.email) + " ")]), _c('input', {
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
        }), _c('div', [_c('small', [_vm._v(" " + _vm._s(_vm.messages.info_about_register) + " ")])])]), _c('div', {
          staticClass: "text-danger text-small"
        }, _vm._l(v.errors, function (error, ii) {
          return _c('small', {
            key: ii,
            staticClass: "d-block"
          }, [_vm._v(" " + _vm._s(error) + " ")]);
        }), 0)];
      }
    }], null, false, 153872645)
  })], 1) : _vm._e(), _c('div', {
    staticClass: "content-center__btn"
  }, [_c('div', {
    staticClass: "btn-login btn-login--connexion",
    on: {
      "click": _vm.generatePassword
    }
  }, [_c('span', {
    staticClass: "btn-login__text"
  }, [_vm._v(" " + _vm._s(_vm.messages.submit.register) + " ")]), _vm.waiting == 'wait' ? _c('svgWaiting') : _vm._e()], 1)])]) : _vm._e(), _c('b-alert', {
    attrs: {
      "dismissible": "",
      "variant": "danger",
      "fade": "",
      "show": _vm.error.message ? true : false
    },
    on: {
      "dismissed": function dismissed($event) {
        _vm.error.message = false;
      }
    }
  }, [_vm._v(" " + _vm._s(_vm.error.message) + " ")]), _c('a', {
    staticClass: "text-center d-block",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function click($event) {
        return _vm.$emit('select-stepe', 'checkstatus');
      }
    }
  }, [_vm._v(" " + _vm._s(_vm.messages.back) + " ")])], 1);
};
var RegisTervue_type_template_id_f58252c0_staticRenderFns = [];

;// ./src/App/components/RegisTer.vue?vue&type=template&id=f58252c0

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__(1629);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(7495);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.test.js
var es_regexp_test = __webpack_require__(906);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(3500);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/RegisTer.vue?vue&type=script&lang=js
















/* harmony default export */ const RegisTervue_type_script_lang_js = ({
  name: "RegisTer",
  components: {
    svgWaiting: function svgWaiting() {
      return __webpack_require__.e(/* import() */ 435).then(__webpack_require__.bind(__webpack_require__, 6435));
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
    actionAfterRegister: {
      type: String,
      required: true
    },
    modelRegisterForm: {
      type: [String, Boolean],
      required: true
    },
    showModalSuccess: {
      type: Boolean,
      required: true
    },
    readonlyName: {
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {
      waiting: "",
      /**
       * Drupal >9.5 renvoit l'erreur dans {message}
       */
      error: {
        message: false
      }
    };
  },
  computed: (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, (0,vuex_esm/* mapState */.aH)(["form", "configs_login_rx_vuejs"])), {}, {
    //
    messages: function messages() {
      if (this.configs_login_rx_vuejs && this.configs_login_rx_vuejs.texts) {
        return this.configs_login_rx_vuejs.texts;
      } else return components_config.messages;
    },
    /**
     * Resultat entre la config endur et celle en BD.
     */
    modelRegisterFormResult: function modelRegisterFormResult() {
      if (this.modelRegisterForm == "generate_password" || this.modelRegisterForm == "default") {
        return this.modelRegisterForm;
      } else if (this.configs_login_rx_vuejs && this.configs_login_rx_vuejs.generate_user) {
        return "generate_password";
      } else {
        return "default";
      }
    }
  }),
  mounted: function mounted() {
    if (this.showPassword) {
      if (this.form.pass === undefined) {
        this.$set(this.form, "pass", [{
          value: ""
        }]);
      }
    } else if (this.form.pass) {
      delete this.form.pass;
    }
  },
  methods: {
    generatePassword: function generatePassword() {
      var _this = this;
      return (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee() {
        var url, test;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee$(_context) {
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
                  components_config.AfterRedirect(_this.actionAfterRegister, null, resp);
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
      return (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee2() {
        var url, test;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this2.waiting = "wait";
              url = "/user/register?_format=json";
              _context2.next = 4;
              return _this2.formValidate.validate();
            case 4:
              test = _context2.sent;
              if (test) App_utilities.post(url, _this2.form).then(function (resp) {
                _this2.waiting = "";
                if (_this2.showModalSuccess) components_config.modalSuccess(components_config.msgCreate([_this2.messages.devis_create_user.value ? _this2.messages.devis_create_user.value : _this2.messages.devis_create_user]), {
                  title: _this2.messages.titre_create_compte,
                  footerClass: "d-none",
                  headerBgVariant: "success",
                  headerTextVariant: "light"
                }).then(function () {
                  components_config.AfterRedirect(_this2.actionAfterRegister, null, resp);
                });else components_config.AfterRedirect(_this2.actionAfterRegister, null, resp);
              })["catch"](function (e) {
                _this2.waiting = "";
                console.log("catch : ", e);
                if (e.error.data && e.error.data.message) {
                  _this2.error.message = e.error.data.message;
                }
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
    validEmail: function validEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
    set_email: function set_email() {
      this.form.mail = this.form.name;
    }
  }
});
;// ./src/App/components/RegisTer.vue?vue&type=script&lang=js
 /* harmony default export */ const components_RegisTervue_type_script_lang_js = (RegisTervue_type_script_lang_js); 
;// ./src/App/components/RegisTer.vue





/* normalize component */
;
var RegisTer_component = (0,componentNormalizer/* default */.A)(
  components_RegisTervue_type_script_lang_js,
  RegisTervue_type_template_id_f58252c0_render,
  RegisTervue_type_template_id_f58252c0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const RegisTer = (RegisTer_component.exports);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/LoginRegister.vue?vue&type=script&lang=js







//import { ValidationObserver } from "vee-validate";






/* harmony default export */ const LoginRegistervue_type_script_lang_js = ({
  name: "LoginRegister",
  props: {
    // see config_for_all.AfterRedirect for more informations.
    actionAfterLogin: {
      type: String,
      "default": "default"
    },
    // see config_for_all.AfterRedirect for more informations.
    actionAfterRegister: {
      type: String,
      "default": "default"
    },
    modelRegisterForm: {
      type: [String, Boolean],
      "default": false
    },
    showPassword: {
      type: Boolean,
      "default": true
    },
    showModalSuccess: {
      type: Boolean,
      "default": true
    },
    showRegisterLink: {
      type: Boolean,
      "default": true
    }
  },
  /**
   * --
   */
  data: function data() {
    return {
      messages: components_config.messages,
      waiting: "",
      stepe: CheckStatus,
      models: {},
      baseURl: rootConfig.baseURl,
      isBusy: false,
      alertDisplay: false,
      alertType: "alert-danger",
      alertText: "",
      urlLogo: window.location.origin + "" + window.logo_current_theme,
      formValidate: {},
      readonlyName: true
    };
  },
  computed: (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, (0,vuex_esm/* mapState */.aH)(["configs_login_rx_vuejs"])), {}, {
    facebook_app_is_define: function facebook_app_is_define() {
      if (this.configs_login_rx_vuejs && this.configs_login_rx_vuejs.facebook_app_id) {
        this.initFacebook();
        return true;
      } else return "";
    }
  }),
  /**
   * --
   */
  mounted: function mounted() {
    this.formValidate = this.$refs.formValidate;
    this.getConfigs();
  },
  methods: {
    initFacebook: function initFacebook() {
      facebook.appId = this.configs_login_rx_vuejs.facebook_app_id; //889256191665205;
      this.TryToLoginWithFacebook();
      facebook.chargement();
    },
    selectStepe: function selectStepe(step) {
      /**
       * Dans la messure ou le changement se fait de maniere automatique on ne change pas la valeur de name.
       */
      this.readonlyName = true;
      switch (step) {
        case "checkstatus":
          this.stepe = CheckStatus;
          break;
        case "setPassword":
          this.stepe = SetPassword;
          break;
        case "register":
          this.stepe = RegisTer;
          break;
      }
    },
    goRegister: function goRegister() {
      /**
       * Dans la messure l'user click sur s'inscrire il peut editer le name.
       */
      this.readonlyName = false;
      this.stepe = RegisTer;
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
      return (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee() {
        var params, url, test;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee$(_context) {
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
    },
    /**
     * Helper to login user.
     * ( This function is used by modules that create accounts and then need to login the user. )
     * @param {*} form
     */
    connexionUser: function connexionUser(form) {
      return components_config.connexionUser(form, this.actionAfterLogin);
    },
    getConfigs: function getConfigs() {
      var _this3 = this;
      var url = "/login-rx-vuejs/get-configs";
      App_utilities.post(url, this.form).then(function (resp) {
        console.log(' resp.data : ', resp.data);
        _this3.$store.state.configs_login_rx_vuejs = resp.data;
      })["catch"](function (e) {
        console.log(e);
      });
    }
  }
});
;// ./src/App/components/LoginRegister.vue?vue&type=script&lang=js
 /* harmony default export */ const components_LoginRegistervue_type_script_lang_js = (LoginRegistervue_type_script_lang_js); 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/components/LoginRegister.vue?vue&type=style&index=0&id=912e006a&prod&lang=scss
// extracted by mini-css-extract-plugin

;// ./src/App/components/LoginRegister.vue?vue&type=style&index=0&id=912e006a&prod&lang=scss

;// ./src/App/components/LoginRegister.vue



;


/* normalize component */

var LoginRegister_component = (0,componentNormalizer/* default */.A)(
  components_LoginRegistervue_type_script_lang_js,
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
//# sourceMappingURL=loginRxVuejs.common.763.js.map