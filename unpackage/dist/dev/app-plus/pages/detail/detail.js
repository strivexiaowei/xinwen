"use weex:vue";
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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/*!*******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(plus, uni) {var _package = __webpack_require__(/*! ../package.json */ 3);function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}

var STAT_VERSION = _package.version;
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800;
var APP_PVER_TIME = 300;
var OPERATING_TIME = 10;

var UUID_KEY = '__DC_STAT_UUID';
var UUID_VALUE = '__DC_UUID_VALUE';

function getUuid() {
  var uuid = '';
  if (getPlatformName() === 'n') {
    try {
      uuid = plus.runtime.getDCloudId();
    } catch (e) {
      uuid = '';
    }
    return uuid;
  }

  try {
    uuid = uni.getStorageSync(UUID_KEY);
  } catch (e) {
    uuid = UUID_VALUE;
  }

  if (!uuid) {
    uuid = Date.now() + '' + Math.floor(Math.random() * 1e7);
    try {
      uni.setStorageSync(UUID_KEY, uuid);
    } catch (e) {
      uni.setStorageSync(UUID_KEY, UUID_VALUE);
    }
  }
  return uuid;
}

var getSgin = function getSgin(statData) {
  var arr = Object.keys(statData);
  var sortArr = arr.sort();
  var sgin = {};
  var sginStr = '';
  for (var i in sortArr) {
    sgin[sortArr[i]] = statData[sortArr[i]];
    sginStr += sortArr[i] + '=' + statData[sortArr[i]] + '&';
  }
  // const options = sginStr.substr(0, sginStr.length - 1)
  // sginStr = sginStr.substr(0, sginStr.length - 1) + '&key=' + STAT_KEY;
  // const si = crypto.createHash('md5').update(sginStr).digest('hex');
  return {
    sign: '',
    options: sginStr.substr(0, sginStr.length - 1) };

};

var getSplicing = function getSplicing(data) {
  var str = '';
  for (var i in data) {
    str += i + '=' + data[i] + '&';
  }
  return str.substr(0, str.length - 1);
};

var getTime = function getTime() {
  return parseInt(new Date().getTime() / 1000);
};

var getPlatformName = function getPlatformName() {
  var platformList = {
    'app-plus': 'n',
    'h5': 'h5',
    'mp-weixin': 'wx',
    'mp-alipay': 'ali',
    'mp-baidu': 'bd',
    'mp-toutiao': 'tt',
    'mp-qq': 'qq' };

  return platformList["app-plus"];
};

var getPackName = function getPackName() {
  var packName = '';
  if (getPlatformName() === 'wx' || getPlatformName() === 'qq') {
    // 兼容微信小程序低版本基础库
    if (uni.canIUse('getAccountInfoSync')) {
      packName = uni.getAccountInfoSync().miniProgram.appId || '';
    }
  }
  return packName;
};

var getVersion = function getVersion() {
  return getPlatformName() === 'n' ? plus.runtime.version : '';
};

var getChannel = function getChannel() {
  var platformName = getPlatformName();
  var channel = '';
  if (platformName === 'n') {
    channel = plus.runtime.channel;
  }
  return channel;
};

var getScene = function getScene(options) {
  var platformName = getPlatformName();
  var scene = '';
  if (options) {
    return options;
  }
  if (platformName === 'wx') {
    scene = uni.getLaunchOptionsSync().scene;
  }
  return scene;
};
var First__Visit__Time__KEY = 'First__Visit__Time';
var Last__Visit__Time__KEY = 'Last__Visit__Time';

var getFirstVisitTime = function getFirstVisitTime() {
  var timeStorge = uni.getStorageSync(First__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = getTime();
    uni.setStorageSync(First__Visit__Time__KEY, time);
    uni.removeStorageSync(Last__Visit__Time__KEY);
  }
  return time;
};

var getLastVisitTime = function getLastVisitTime() {
  var timeStorge = uni.getStorageSync(Last__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = '';
  }
  uni.setStorageSync(Last__Visit__Time__KEY, getTime());
  return time;
};


var PAGE_RESIDENCE_TIME = '__page__residence__time';
var First_Page_residence_time = 0;
var Last_Page_residence_time = 0;


var setPageResidenceTime = function setPageResidenceTime() {
  First_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    uni.setStorageSync(PAGE_RESIDENCE_TIME, getTime());
  }
  return First_Page_residence_time;
};

var getPageResidenceTime = function getPageResidenceTime() {
  Last_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    First_Page_residence_time = uni.getStorageSync(PAGE_RESIDENCE_TIME);
  }
  return Last_Page_residence_time - First_Page_residence_time;
};
var TOTAL__VISIT__COUNT = 'Total__Visit__Count';
var getTotalVisitCount = function getTotalVisitCount() {
  var timeStorge = uni.getStorageSync(TOTAL__VISIT__COUNT);
  var count = 1;
  if (timeStorge) {
    count = timeStorge;
    count++;
  }
  uni.setStorageSync(TOTAL__VISIT__COUNT, count);
  return count;
};

var GetEncodeURIComponentOptions = function GetEncodeURIComponentOptions(statData) {
  var data = {};
  for (var prop in statData) {
    data[prop] = encodeURIComponent(statData[prop]);
  }
  return data;
};

var Set__First__Time = 0;
var Set__Last__Time = 0;

var getFirstTime = function getFirstTime() {
  var time = new Date().getTime();
  Set__First__Time = time;
  Set__Last__Time = 0;
  return time;
};


var getLastTime = function getLastTime() {
  var time = new Date().getTime();
  Set__Last__Time = time;
  return time;
};


var getResidenceTime = function getResidenceTime(type) {
  var residenceTime = 0;
  if (Set__First__Time !== 0) {
    residenceTime = Set__Last__Time - Set__First__Time;
  }

  residenceTime = parseInt(residenceTime / 1000);
  residenceTime = residenceTime < 1 ? 1 : residenceTime;
  if (type === 'app') {
    var overtime = residenceTime > APP_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: overtime };

  }
  if (type === 'page') {
    var _overtime = residenceTime > PAGE_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: _overtime };

  }

  return {
    residenceTime: residenceTime };


};

var getRoute = function getRoute() {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;

  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is;
  } else {
    return _self.$scope && _self.$scope.route || _self.$mp && _self.$mp.page.route;
  }
};

var getPageRoute = function getPageRoute(self) {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;
  var query = self._query;
  var str = query && JSON.stringify(query) !== '{}' ? '?' + JSON.stringify(query) : '';
  // clear
  self._query = '';
  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is + str;
  } else {
    return _self.$scope && _self.$scope.route + str || _self.$mp && _self.$mp.page.route + str;
  }
};

var getPageTypes = function getPageTypes(self) {
  if (self.mpType === 'page' || self.$mp && self.$mp.mpType === 'page' || self.$options.mpType === 'page') {
    return true;
  }
  return false;
};

var calibration = function calibration(eventName, options) {
  //  login 、 share 、pay_success 、pay_fail 、register 、title
  if (!eventName) {
    console.error("uni.report \u7F3A\u5C11 [eventName] \u53C2\u6570");
    return true;
  }
  if (typeof eventName !== 'string') {
    console.error("uni.report [eventName] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u7C7B\u578B");
    return true;
  }
  if (eventName.length > 255) {
    console.error("uni.report [eventName] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (typeof options !== 'string' && typeof options !== 'object') {
    console.error("uni.report [options] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u6216 Object \u7C7B\u578B");
    return true;
  }

  if (typeof options === 'string' && options.length > 255) {
    console.error("uni.report [options] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (eventName === 'title' && typeof options !== 'string') {
    console.error('uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型');
    return true;
  }
};

var PagesJson = __webpack_require__(/*! uni-pages?{"type":"style"} */ 4).default;
var statConfig = __webpack_require__(/*! uni-stat-config */ 5).default || __webpack_require__(/*! uni-stat-config */ 5);

var resultOptions = uni.getSystemInfoSync();var

Util = /*#__PURE__*/function () {
  function Util() {_classCallCheck(this, Util);
    this.self = '';
    this._retry = 0;
    this._platform = '';
    this._query = {};
    this._navigationBarTitle = {
      config: '',
      page: '',
      report: '',
      lt: '' };

    this._operatingTime = 0;
    this._reportingRequestData = {
      '1': [],
      '11': [] };

    this.__prevent_triggering = false;

    this.__licationHide = false;
    this.__licationShow = false;
    this._lastPageRoute = '';
    this.statData = {
      uuid: getUuid(),
      ut: getPlatformName(),
      mpn: getPackName(),
      ak: statConfig.appid,
      usv: STAT_VERSION,
      v: getVersion(),
      ch: getChannel(),
      cn: '',
      pn: '',
      ct: '',
      t: getTime(),
      tt: '',
      p: resultOptions.platform === 'android' ? 'a' : 'i',
      brand: resultOptions.brand || '',
      md: resultOptions.model,
      sv: resultOptions.system.replace(/(Android|iOS)\s/, ''),
      mpsdk: resultOptions.SDKVersion || '',
      mpv: resultOptions.version || '',
      lang: resultOptions.language,
      pr: resultOptions.pixelRatio,
      ww: resultOptions.windowWidth,
      wh: resultOptions.windowHeight,
      sw: resultOptions.screenWidth,
      sh: resultOptions.screenHeight };


  }_createClass(Util, [{ key: "_applicationShow", value: function _applicationShow()

    {
      if (this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('app');
        if (time.overtime) {
          var options = {
            path: this._lastPageRoute,
            scene: this.statData.sc };

          this._sendReportRequest(options);
        }
        this.__licationHide = false;
      }
    } }, { key: "_applicationHide", value: function _applicationHide(

    self, type) {

      this.__licationHide = true;
      getLastTime();
      var time = getResidenceTime();
      getFirstTime();
      var route = getPageRoute(this);
      this._sendHideRequest({
        urlref: route,
        urlref_ts: time.residenceTime },
      type);
    } }, { key: "_pageShow", value: function _pageShow()

    {
      var route = getPageRoute(this);
      var routepath = getRoute();
      this._navigationBarTitle.config = PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].titleNView &&
      PagesJson.pages[routepath].titleNView.titleText ||
      PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].navigationBarTitleText || '';

      if (this.__licationShow) {
        getFirstTime();
        this.__licationShow = false;
        // console.log('这是 onLauch 之后执行的第一次 pageShow ，为下次记录时间做准备');
        this._lastPageRoute = route;
        return;
      }

      getLastTime();
      this._lastPageRoute = route;
      var time = getResidenceTime('page');
      if (time.overtime) {
        var options = {
          path: this._lastPageRoute,
          scene: this.statData.sc };

        this._sendReportRequest(options);
      }
      getFirstTime();
    } }, { key: "_pageHide", value: function _pageHide()

    {
      if (!this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('page');
        this._sendPageRequest({
          url: this._lastPageRoute,
          urlref: this._lastPageRoute,
          urlref_ts: time.residenceTime });

        this._navigationBarTitle = {
          config: '',
          page: '',
          report: '',
          lt: '' };

        return;
      }
    } }, { key: "_login", value: function _login()

    {
      this._sendEventRequest({
        key: 'login' },
      0);
    } }, { key: "_share", value: function _share()

    {
      this._sendEventRequest({
        key: 'share' },
      0);
    } }, { key: "_payment", value: function _payment(
    key) {
      this._sendEventRequest({
        key: key },
      0);
    } }, { key: "_sendReportRequest", value: function _sendReportRequest(
    options) {

      this._navigationBarTitle.lt = '1';
      var query = options.query && JSON.stringify(options.query) !== '{}' ? '?' + JSON.stringify(options.query) : '';
      this.statData.lt = '1';
      this.statData.url = options.path + query || '';
      this.statData.t = getTime();
      this.statData.sc = getScene(options.scene);
      this.statData.fvts = getFirstVisitTime();
      this.statData.lvts = getLastVisitTime();
      this.statData.tvc = getTotalVisitCount();
      if (getPlatformName() === 'n') {
        this.getProperty();
      } else {
        this.getNetworkInfo();
      }
    } }, { key: "_sendPageRequest", value: function _sendPageRequest(

    opt) {var

      url =


      opt.url,urlref = opt.urlref,urlref_ts = opt.urlref_ts;
      this._navigationBarTitle.lt = '11';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '11',
        ut: this.statData.ut,
        url: url,
        tt: this.statData.tt,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "_sendHideRequest", value: function _sendHideRequest(

    opt, type) {var

      urlref =

      opt.urlref,urlref_ts = opt.urlref_ts;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '3',
        ut: this.statData.ut,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options, type);
    } }, { key: "_sendEventRequest", value: function _sendEventRequest()



    {var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref$key = _ref.key,key = _ref$key === void 0 ? '' : _ref$key,_ref$value = _ref.value,value = _ref$value === void 0 ? "" : _ref$value;
      var route = this._lastPageRoute;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '21',
        ut: this.statData.ut,
        url: route,
        ch: this.statData.ch,
        e_n: key,
        e_v: typeof value === 'object' ? JSON.stringify(value) : value.toString(),
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "getNetworkInfo", value: function getNetworkInfo()

    {var _this = this;
      uni.getNetworkType({
        success: function success(result) {
          _this.statData.net = result.networkType;
          _this.getLocation();
        } });

    } }, { key: "getProperty", value: function getProperty()

    {var _this2 = this;
      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
        _this2.statData.v = wgtinfo.version || '';
        _this2.getNetworkInfo();
      });
    } }, { key: "getLocation", value: function getLocation()

    {var _this3 = this;
      if (statConfig.getLocation) {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: function success(result) {
            if (result.address) {
              _this3.statData.cn = result.address.country;
              _this3.statData.pn = result.address.province;
              _this3.statData.ct = result.address.city;
            }

            _this3.statData.lat = result.latitude;
            _this3.statData.lng = result.longitude;
            _this3.request(_this3.statData);
          } });

      } else {
        this.statData.lat = 0;
        this.statData.lng = 0;
        this.request(this.statData);
      }
    } }, { key: "request", value: function request(

    data, type) {var _this4 = this;
      var time = getTime();
      var title = this._navigationBarTitle;
      data.ttn = title.page;
      data.ttpj = title.config;
      data.ttc = title.report;

      var requestData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        requestData = uni.getStorageSync('__UNI__STAT__DATA') || {};
      }
      if (!requestData[data.lt]) {
        requestData[data.lt] = [];
      }
      requestData[data.lt].push(data);

      if (getPlatformName() === 'n') {
        uni.setStorageSync('__UNI__STAT__DATA', requestData);
      }
      if (getPageResidenceTime() < OPERATING_TIME && !type) {
        return;
      }
      var uniStatData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        uniStatData = uni.getStorageSync('__UNI__STAT__DATA');
      }
      // 时间超过，重新获取时间戳
      setPageResidenceTime();
      var firstArr = [];
      var contentArr = [];
      var lastArr = [];var _loop = function _loop(

      i) {
        var rd = uniStatData[i];
        rd.forEach(function (elm) {
          var newData = getSplicing(elm);
          if (i === 0) {
            firstArr.push(newData);
          } else if (i === 3) {
            lastArr.push(newData);
          } else {
            contentArr.push(newData);
          }
        });};for (var i in uniStatData) {_loop(i);
      }

      firstArr.push.apply(firstArr, contentArr.concat(lastArr));
      var optionsData = {
        usv: STAT_VERSION, //统计 SDK 版本号
        t: time, //发送请求时的时间戮
        requests: JSON.stringify(firstArr) };


      this._reportingRequestData = {};
      if (getPlatformName() === 'n') {
        uni.removeStorageSync('__UNI__STAT__DATA');
      }

      if (data.ut === 'h5') {
        this.imageRequest(optionsData);
        return;
      }

      if (getPlatformName() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this4._sendRequest(optionsData);
        }, 200);
        return;
      }
      this._sendRequest(optionsData);
    } }, { key: "_sendRequest", value: function _sendRequest(
    optionsData) {var _this5 = this;
      uni.request({
        url: STAT_URL,
        method: 'POST',
        // header: {
        //   'content-type': 'application/json' // 默认值
        // },
        data: optionsData,
        success: function success() {
          // if (process.env.NODE_ENV === 'development') {
          //   console.log('stat request success');
          // }
        },
        fail: function fail(e) {
          if (++_this5._retry < 3) {
            setTimeout(function () {
              _this5._sendRequest(optionsData);
            }, 1000);
          }
        } });

    }
    /**
       * h5 请求
       */ }, { key: "imageRequest", value: function imageRequest(
    data) {
      var image = new Image();
      var options = getSgin(GetEncodeURIComponentOptions(data)).options;
      image.src = STAT_H5_URL + '?' + options;
    } }, { key: "sendEvent", value: function sendEvent(

    key, value) {
      // 校验 type 参数
      if (calibration(key, value)) return;

      if (key === 'title') {
        this._navigationBarTitle.report = value;
        return;
      }
      this._sendEventRequest({
        key: key,
        value: typeof value === 'object' ? JSON.stringify(value) : value },
      1);
    } }]);return Util;}();var



Stat = /*#__PURE__*/function (_Util) {_inherits(Stat, _Util);_createClass(Stat, null, [{ key: "getInstance", value: function getInstance()
    {
      if (!this.instance) {
        this.instance = new Stat();
      }
      return this.instance;
    } }]);
  function Stat() {var _this6;_classCallCheck(this, Stat);
    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Stat).call(this));
    _this6.instance = null;
    // 注册拦截器
    if (typeof uni.addInterceptor === 'function' && "development" !== 'development') {
      _this6.addInterceptorInit();
      _this6.interceptLogin();
      _this6.interceptShare(true);
      _this6.interceptRequestPayment();
    }return _this6;
  }_createClass(Stat, [{ key: "addInterceptorInit", value: function addInterceptorInit()

    {
      var self = this;
      uni.addInterceptor('setNavigationBarTitle', {
        invoke: function invoke(args) {
          self._navigationBarTitle.page = args.title;
        } });

    } }, { key: "interceptLogin", value: function interceptLogin()

    {
      var self = this;
      uni.addInterceptor('login', {
        complete: function complete() {
          self._login();
        } });

    } }, { key: "interceptShare", value: function interceptShare(

    type) {
      var self = this;
      if (!type) {
        self._share();
        return;
      }
      uni.addInterceptor('share', {
        success: function success() {
          self._share();
        },
        fail: function fail() {
          self._share();
        } });

    } }, { key: "interceptRequestPayment", value: function interceptRequestPayment()

    {
      var self = this;
      uni.addInterceptor('requestPayment', {
        success: function success() {
          self._payment('pay_success');
        },
        fail: function fail() {
          self._payment('pay_fail');
        } });

    } }, { key: "report", value: function report(

    options, self) {
      this.self = self;
      // if (process.env.NODE_ENV === 'development') {
      //   console.log('report init');
      // }
      setPageResidenceTime();
      this.__licationShow = true;
      this._sendReportRequest(options, true);
    } }, { key: "load", value: function load(

    options, self) {
      if (!self.$scope && !self.$mp) {
        var page = getCurrentPages();
        self.$scope = page[page.length - 1];
      }
      this.self = self;
      this._query = options;
    } }, { key: "show", value: function show(

    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageShow(self);
      } else {
        this._applicationShow(self);
      }
    } }, { key: "ready", value: function ready(

    self) {
      // this.self = self;
      // if (getPageTypes(self)) {
      //   this._pageShow(self);
      // }
    } }, { key: "hide", value: function hide(
    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageHide(self);
      } else {
        this._applicationHide(self, true);
      }
    } }, { key: "error", value: function error(
    em) {
      if (this._platform === 'devtools') {
        if (true) {
          console.info('当前运行环境为开发者工具，不上报数据。');
        }
        // return;
      }
      var emVal = '';
      if (!em.message) {
        emVal = JSON.stringify(em);
      } else {
        emVal = em.stack;
      }
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '31',
        ut: this.statData.ut,
        ch: this.statData.ch,
        mpsdk: this.statData.mpsdk,
        mpv: this.statData.mpv,
        v: this.statData.v,
        em: emVal,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }]);return Stat;}(Util);


var stat = Stat.getInstance();
var isHide = false;
var lifecycle = {
  onLaunch: function onLaunch(options) {
    stat.report(options, this);
  },
  onReady: function onReady() {
    stat.ready(this);
  },
  onLoad: function onLoad(options) {
    stat.load(options, this);
    // 重写分享，获取分享上报事件
    if (this.$scope && this.$scope.onShareAppMessage) {
      var oldShareAppMessage = this.$scope.onShareAppMessage;
      this.$scope.onShareAppMessage = function (options) {
        stat.interceptShare(false);
        return oldShareAppMessage.call(this, options);
      };
    }
  },
  onShow: function onShow() {
    isHide = false;
    stat.show(this);
  },
  onHide: function onHide() {
    isHide = true;
    stat.hide(this);
  },
  onUnload: function onUnload() {
    if (isHide) {
      isHide = false;
      return;
    }
    stat.hide(this);
  },
  onError: function onError(e) {
    stat.error(e);
  } };


function main() {
  if (true) {
    uni.report = function (type, options) {};
  } else { var Vue; }
}

main();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["weexPlus"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["default"]))

/***/ }),
/* 2 */
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.weexPlus = exports.default = void 0;function initUni() {

  var isFn = function isFn(v) {
    return typeof v === 'function';
  };

  var handlePromise = function handlePromise(promise) {
    return promise.then(function (data) {
      return [null, data];
    }).catch(function (err) {
      return [err];
    });
  };

  var REGEX = /^\$|^on|^create|Sync$|Manager$|^pause/;
  var API_NORMAL_LIST = ['os', 'getCurrentSubNVue', 'getSubNVueById', 'stopRecord', 'stopVoice',
  'stopBackgroundAudio', 'stopPullDownRefresh', 'hideKeyboard', 'hideToast', 'hideLoading',
  'showNavigationBarLoading', 'hideNavigationBarLoading', 'canIUse', 'navigateBack', 'closeSocket',
  'pageScrollTo', 'drawCanvas'];


  var shouldPromise = function shouldPromise(name) {
    if (REGEX.test(name) && name !== 'createBLEConnection') {
      return false;
    }
    if (~API_NORMAL_LIST.indexOf(name)) {
      return false;
    }
    return true;
  };

  var promisify = function promisify(api) {
    return function () {
      for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
        return api.apply(undefined, [options].concat(params));
      }
      return handlePromise(new Promise(function (resolve, reject) {
        api.apply(undefined, [Object.assign({}, options, {
          success: resolve,
          fail: reject })].
        concat(params));
        /* eslint-disable no-extend-native */
        Promise.prototype.finally = function (callback) {
          var promise = this.constructor;
          return this.then(function (value) {
            return promise.resolve(callback()).then(function () {
              return value;
            });
          }, function (reason) {
            return promise.resolve(callback()).then(function () {
              throw reason;
            });
          });
        };
      }));
    };
  };

  var onMessageCallbacks = [];

  var origin = void 0;

  function onSubNVueMessage(data) {
    onMessageCallbacks.forEach(function (callback) {
      return callback({
        origin: origin,
        data: data });

    });
  }

  var webviewId = weexPlus.webview.currentWebview().id;

  var channel = new BroadcastChannel('UNI-APP-SUBNVUE');
  channel.onmessage = function (event) {
    if (event.data.to === webviewId) {
      onSubNVueMessage(event.data.data);
    }
  };

  function wrapper(webview) {
    webview.$processed = true;

    var currentWebviewId = weexPlus.webview.currentWebview().id;
    var isPopupNVue = currentWebviewId === webview.id;

    var hostNVueId = webview.__uniapp_origin_type === 'uniNView' && webview.__uniapp_origin_id;
    var popupNVueId = webview.id;

    webview.postMessage = function (data) {
      if (hostNVueId) {
        channel.postMessage({
          data: data,
          to: isPopupNVue ? hostNVueId : popupNVueId });

      } else {
        postMessage({
          type: 'UniAppSubNVue',
          data: data });

      }
    };
    webview.onMessage = function (callback) {
      onMessageCallbacks.push(callback);
    };

    if (!webview.__uniapp_mask_id) {
      return;
    }
    origin = webview.__uniapp_host;

    var maskColor = webview.__uniapp_mask;

    var maskWebview = weexPlus.webview.getWebviewById(webview.__uniapp_mask_id);
    maskWebview = maskWebview.parent() || maskWebview; //再次检测父
    var oldShow = webview.show;
    var oldHide = webview.hide;
    var oldClose = webview.close;

    var showMask = function showMask() {
      maskWebview.setStyle({
        mask: maskColor });

    };
    var closeMask = function closeMask() {
      maskWebview.setStyle({
        mask: 'none' });

    };
    webview.show = function () {
      showMask();

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return oldShow.apply(webview, args);
    };
    webview.hide = function () {
      closeMask();

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return oldHide.apply(webview, args);
    };
    webview.close = function () {
      closeMask();

      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return oldClose.apply(webview, args);
    };
  }

  function getSubNVueById(id) {
    var webview = weexPlus.webview.getWebviewById(id);
    if (webview && !webview.$processed) {
      wrapper(webview);
    }
    return webview;
  }

  function getCurrentSubNVue() {
    return getSubNVueById(weexPlus.webview.currentWebview().id);
  }

  var plus = weex.requireModule('plus');
  var globalEvent = weex.requireModule('globalEvent');

  var id = 0;
  var callbacks = {};

  var UNIAPP_SERVICE_NVUE_ID = '__uniapp__service';

  globalEvent.addEventListener('plusMessage', function (e) {
    if (e.data.type === 'UniAppJsApi') {
      invoke(e.data.id, e.data.data);
    } else if (e.data.type === 'UniAppSubNVue') {
      onSubNVueMessage(e.data.data, e.data.options);
    } else if (e.data.type === 'onNavigationBarButtonTap') {
      if (typeof onNavigationBarButtonTapCallback === 'function') {
        onNavigationBarButtonTapCallback(e.data.data);
      }
    } else if (e.data.type === 'onNavigationBarSearchInputChanged') {
      if (typeof onNavigationBarSearchInputChangedCallback === 'function') {
        onNavigationBarSearchInputChangedCallback(e.data.data);
      }
    } else if (e.data.type === 'onNavigationBarSearchInputConfirmed') {
      if (typeof onNavigationBarSearchInputConfirmedCallback === 'function') {
        onNavigationBarSearchInputConfirmedCallback(e.data.data);
      }
    } else if (e.data.type === 'onNavigationBarSearchInputClicked') {
      if (typeof onNavigationBarSearchInputClickedCallback === 'function') {
        onNavigationBarSearchInputClickedCallback(e.data.data);
      }
    }
  });

  var createCallback = function createCallback(args, type) {
    var callback = function callback(res) {
      if (isFn(args)) {
        args(res);
      } else if (args) {
        if (~res.errMsg.indexOf(':ok')) {
          isFn(args.success) && args.success(res);
        } else if (~res.errMsg.indexOf(':fail')) {
          isFn(args.fail) && args.fail(res);
        }
        isFn(args.complete) && args.complete(res);
      }
    };
    if (isFn(args) || args && isFn(args.callback)) {
      callback.keepAlive = true;
    }
    return callback;
  };

  var invoke = function invoke(callbackId, data) {
    var callback = callbacks[callbackId];
    if (callback) {
      callback(data);
      if (!callback.keepAlive) {
        delete callbacks[callbackId];
      }
    } else {
      console.error('callback[' + callbackId + '] is undefined');
    }
  };

  var publish = function publish(_ref) {
    var id = _ref.id,
    type = _ref.type,
    params = _ref.params;

    callbacks[id] = createCallback(params, type);
    plus.postMessage({
      id: id,
      type: type,
      params: params },
    UNIAPP_SERVICE_NVUE_ID);
  };

  function postMessage(data) {
    plus.postMessage(data, UNIAPP_SERVICE_NVUE_ID);
  }

  var createPublish = function createPublish(name) {
    return function (args) {
      publish({
        id: id++,
        type: name,
        params: args });

    };
  };

  var onNavigationBarButtonTapCallback = void 0;
  var onNavigationBarSearchInputChangedCallback = void 0;
  var onNavigationBarSearchInputConfirmedCallback = void 0;
  var onNavigationBarSearchInputClickedCallback = void 0;

  function onNavigationBarButtonTap(callback) {
    onNavigationBarButtonTapCallback = callback;
  }

  function onNavigationBarSearchInputChanged(callback) {
    onNavigationBarSearchInputChangedCallback = callback;
  }

  function onNavigationBarSearchInputConfirmed(callback) {
    onNavigationBarSearchInputConfirmedCallback = callback;
  }

  function onNavigationBarSearchInputClicked(callback) {
    onNavigationBarSearchInputClickedCallback = callback;
  }

  function requireNativePlugin(pluginName) {
    return weex.requireModule(pluginName);
  }

  var dom = weex.requireModule('dom');

  function loadFontFace(_ref) {
    var family = _ref.family,
    source = _ref.source,
    desc = _ref.desc,
    success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    dom.addRule('fontFace', {
      fontFamily: family,
      src: source.replace(/"/g, '\'') });

    var res = {
      errMsg: 'loadFontFace:ok',
      status: 'loaded' };

    isFn(success) && success(res);
    isFn(complete) && complete(res);
  }

  var globalEvent$1 = weex.requireModule('globalEvent');

  var callbacks$1 = [];

  globalEvent$1.addEventListener('plusMessage', function (e) {
    if (e.data.type === 'UniAppReady') {
      ready.isUniAppReady = true;
      if (callbacks$1.length) {
        callbacks$1.forEach(function (callback) {
          return callback();
        });
        callbacks$1 = [];
      }
    }
  });

  function ready(callback) {
    if (typeof callback === 'function') {
      if (this.isUniAppReady) {
        callback();
      } else {
        callbacks$1.push(callback);
      }
    }
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ?
    "symbol" : typeof obj;
  };

  var stream = weex.requireModule('stream');

  // let requestTaskId = 0

  var METHOD_GET = 'GET';
  var METHOD_POST = 'POST';
  var CONTENT_TYPE_JSON = 'application/json';
  var CONTENT_TYPE_FORM = 'application/x-www-form-urlencoded';

  var serialize = function serialize(data) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : METHOD_GET;
    var contentType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : CONTENT_TYPE_FORM;

    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
      if (method.toUpperCase() === METHOD_POST && contentType.toLowerCase() === CONTENT_TYPE_JSON) {
        return JSON.stringify(data);
      } else {
        return Object.keys(data).map(function (key) {
          return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
        }).join('&');
      }
    }
    return data;
  };

  function request(_ref) {
    var url = _ref.url,
    data = _ref.data,
    header = _ref.header,
    _ref$method = _ref.method,
    method = _ref$method === undefined ? 'GET' : _ref$method,
    _ref$dataType = _ref.dataType,
    dataType = _ref$dataType === undefined ? 'json' : _ref$dataType,
    responseType = _ref.responseType,
    success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    // requestTaskId++
    var aborted = false;

    var hasContentType = false;
    var headers = {};
    if (header) {
      for (var name in header) {
        if (!hasContentType && name.toLowerCase() === 'content-type') {
          hasContentType = true;
          headers['Content-Type'] = header[name];
        } else {
          headers[name] = header[name];
        }
      }
    }
    if (method === METHOD_GET && data) {
      url = url + (~url.indexOf('?') ? url.substr(-1) === '&' || url.substr(-1) === '?' ? '' : '&' : '?') +
      serialize(data);
    }
    stream.fetch({
      url: url,
      method: method,
      headers: headers,
      type: dataType === 'json' ? 'json' : 'text',
      body: method !== METHOD_GET ? serialize(data, method, headers['Content-Type']) : '' },
    function (_ref2) {
      var status = _ref2.status,
      ok = _ref2.ok,
      statusText = _ref2.statusText,
      data = _ref2.data,
      headers = _ref2.headers;

      var ret = {};
      if (!status || status === -1 || aborted) {
        ret.errMsg = 'request:fail';
        isFn(fail) && fail(ret);
      } else {
        ret.data = data;
        ret.statusCode = status;
        ret.header = headers;
        isFn(success) && success(ret);
      }
      isFn(complete) && complete(ret);
    });
    return {
      abort: function abort() {
        aborted = true;
      } };

  }

  var storage = weex.requireModule('plusstorage');
  var UNIAPP_STORAGE_DATA_TYPE = '__TYPE';

  function getStorage(_ref) {
    var key = _ref.key,
    data = _ref.data,
    success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    storage.getItem(key + UNIAPP_STORAGE_DATA_TYPE, function (ret) {
      if (ret.result === 'success') {
        var dataType = ret.data;
        storage.getItem(key, function (res) {
          if (res.result === 'success') {
            var result = res.data;
            if (dataType && result) {
              if (dataType !== 'String') {
                result = JSON.parse(result);
              }
              isFn(success) && success({
                errMsg: 'getStorage:ok',
                data: result });

            } else {
              res.errMsg = 'setStorage:fail';
              isFn(fail) && fail(res);
            }
          } else {
            res.errMsg = 'setStorage:fail';
            isFn(fail) && fail(res);
          }
          isFn(complete) && complete(res);
        });
      } else {
        ret.errMsg = 'setStorage:fail';
        isFn(fail) && fail(ret);
        isFn(complete) && complete(ret);
      }
    });
  }

  function setStorage(_ref2) {
    var key = _ref2.key,
    data = _ref2.data,
    success = _ref2.success,
    fail = _ref2.fail,
    complete = _ref2.complete;

    var dataType = 'String';
    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
      dataType = 'Object';
      data = JSON.stringify(data);
    }
    storage.setItem(key, data, function (res) {
      if (res.result === 'success') {
        storage.setItem(key + UNIAPP_STORAGE_DATA_TYPE, dataType, function (ret) {
          if (ret.result === 'success') {
            isFn(success) && success({
              errMsg: 'setStorage:ok' });

          } else {
            ret.errMsg = 'setStorage:fail';
            isFn(fail) && fail(ret);
          }
        });
      } else {
        res.errMsg = 'setStorage:fail';
        isFn(fail) && fail(res);
      }
      isFn(complete) && complete(res);
    });
  }

  function removeStorage(_ref3) {
    var key = _ref3.key,
    data = _ref3.data,
    success = _ref3.success,
    fail = _ref3.fail,
    complete = _ref3.complete;

    storage.removeItem(key, function (res) {
      if (res.result === 'success') {
        isFn(success) && success({
          errMsg: 'removeStorage:ok' });

      } else {
        res.errMsg = 'removeStorage:fail';
        isFn(fail) && fail(res);
      }
      isFn(complete) && complete(res);
    });
    storage.removeItem(key + UNIAPP_STORAGE_DATA_TYPE);
  }

  function clearStorage(_ref4) {
    var key = _ref4.key,
    data = _ref4.data,
    success = _ref4.success,
    fail = _ref4.fail,
    complete = _ref4.complete;
  }

  var clipboard = weex.requireModule('clipboard');

  function getClipboardData(_ref) {
    var success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    clipboard.getString(function (_ref2) {
      var data = _ref2.data;

      var res = {
        errMsg: 'getClipboardData:ok',
        data: data };

      isFn(success) && success(res);
      isFn(complete) && complete(res);
    });
  }

  function setClipboardData(_ref3) {
    var data = _ref3.data,
    success = _ref3.success,
    fail = _ref3.fail,
    complete = _ref3.complete;

    var res = {
      errMsg: 'setClipboardData:ok' };

    clipboard.setString(data);
    isFn(success) && success(res);
    isFn(complete) && complete(res);
  }

  var getEmitter = function () {
    if (typeof getUniEmitter === 'function') {
      /* eslint-disable no-undef */
      return getUniEmitter;
    }
    var Emitter = {
      $on: function $on() {
        console.warn('uni.$on failed');
      },
      $off: function $off() {
        console.warn('uni.$off failed');
      },
      $once: function $once() {
        console.warn('uni.$once failed');
      },
      $emit: function $emit() {
        console.warn('uni.$emit failed');
      } };

    return function getUniEmitter() {
      return Emitter;
    };
  }();

  function apply(ctx, method, args) {
    return ctx[method].apply(ctx, args);
  }

  function $on() {
    return apply(getEmitter(), '$on', [].concat(Array.prototype.slice.call(arguments)));
  }

  function $off() {
    return apply(getEmitter(), '$off', [].concat(Array.prototype.slice.call(arguments)));
  }

  function $once() {
    return apply(getEmitter(), '$once', [].concat(Array.prototype.slice.call(arguments)));
  }

  function $emit() {
    return apply(getEmitter(), '$emit', [].concat(Array.prototype.slice.call(arguments)));
  }



  var api = /*#__PURE__*/Object.freeze({
    loadFontFace: loadFontFace,
    ready: ready,
    request: request,
    getStorage: getStorage,
    setStorage: setStorage,
    removeStorage: removeStorage,
    clearStorage: clearStorage,
    getClipboardData: getClipboardData,
    setClipboardData: setClipboardData,
    onSubNVueMessage: onSubNVueMessage,
    getSubNVueById: getSubNVueById,
    getCurrentSubNVue: getCurrentSubNVue,
    $on: $on,
    $off: $off,
    $once: $once,
    $emit: $emit });



  var wx = {
    uploadFile: true,
    downloadFile: true,
    chooseImage: true,
    previewImage: true,
    getImageInfo: true,
    saveImageToPhotosAlbum: true,
    chooseVideo: true,
    saveVideoToPhotosAlbum: true,
    saveFile: true,
    getSavedFileList: true,
    getSavedFileInfo: true,
    removeSavedFile: true,
    openDocument: true,
    setStorage: true,
    getStorage: true,
    getStorageInfo: true,
    removeStorage: true,
    clearStorage: true,
    getLocation: true,
    chooseLocation: true,
    openLocation: true,
    getSystemInfo: true,
    getNetworkType: true,
    makePhoneCall: true,
    scanCode: true,
    setScreenBrightness: true,
    getScreenBrightness: true,
    setKeepScreenOn: true,
    vibrateLong: true,
    vibrateShort: true,
    addPhoneContact: true,
    showToast: true,
    showLoading: true,
    hideToast: true,
    hideLoading: true,
    showModal: true,
    showActionSheet: true,
    setNavigationBarTitle: true,
    setNavigationBarColor: true,
    navigateTo: true,
    redirectTo: true,
    reLaunch: true,
    switchTab: true,
    navigateBack: true,
    getProvider: true,
    login: true,
    getUserInfo: true,
    share: true,
    requestPayment: true,
    subscribePush: true,
    unsubscribePush: true,
    onPush: true,
    offPush: true };


  var baseUni = {
    os: {
      nvue: true } };



  var uni = {};

  if (typeof Proxy !== 'undefined') {
    uni = new Proxy({}, {
      get: function get(target, name) {
        if (name === 'os') {
          return {
            nvue: true };

        }
        if (name === 'postMessage') {
          return postMessage;
        }
        if (name === 'requireNativePlugin') {
          return requireNativePlugin;
        }
        if (name === 'onNavigationBarButtonTap') {
          return onNavigationBarButtonTap;
        }
        if (name === 'onNavigationBarSearchInputChanged') {
          return onNavigationBarSearchInputChanged;
        }
        if (name === 'onNavigationBarSearchInputConfirmed') {
          return onNavigationBarSearchInputConfirmed;
        }
        if (name === 'onNavigationBarSearchInputClicked') {
          return onNavigationBarSearchInputClicked;
        }
        var method = api[name];
        if (!method) {
          method = createPublish(name);
        }
        if (shouldPromise(name)) {
          return promisify(method);
        }
        return method;
      } });

  } else {
    Object.keys(baseUni).forEach(function (key) {
      uni[key] = baseUni[key];
    });

    uni.postMessage = postMessage;

    uni.requireNativePlugin = requireNativePlugin;

    uni.onNavigationBarButtonTap = onNavigationBarButtonTap;

    uni.onNavigationBarSearchInputChanged = onNavigationBarSearchInputChanged;

    uni.onNavigationBarSearchInputConfirmed = onNavigationBarSearchInputConfirmed;

    uni.onNavigationBarSearchInputClicked = onNavigationBarSearchInputClicked;

    Object.keys(wx).forEach(function (name) {
      var method = api[name];
      if (!method) {
        method = createPublish(name);
      }
      if (shouldPromise(name)) {
        uni[name] = promisify(method);
      } else {
        uni[name] = method;
      }
    });
  }
  return uni;
}

var createUni;

if (typeof getUni === 'function') {
  createUni = getUni;
} else {
  createUni = initUni;
}
var weexPlus = new WeexPlus(weex);exports.weexPlus = weexPlus;var _default =
createUni(weex, weexPlus, BroadcastChannel);exports.default = _default;

/***/ }),
/* 3 */
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_from":"@dcloudio/uni-stat@next","_id":"@dcloudio/uni-stat@2.0.0-23720191024001","_inBundle":false,"_integrity":"sha512-vJEk493Vdb8KueNzR2otzDi23rfyRcQBo/t1R41MwNGPk+AUB94gh10+HVLo98DRcvMzkuVofz3KXTAfEx24iw==","_location":"/@dcloudio/uni-stat","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"@dcloudio/uni-stat@next","name":"@dcloudio/uni-stat","escapedName":"@dcloudio%2funi-stat","scope":"@dcloudio","rawSpec":"next","saveSpec":null,"fetchSpec":"next"},"_requiredBy":["#USER","/","/@dcloudio/vue-cli-plugin-uni"],"_resolved":"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-23720191024001.tgz","_shasum":"18272814446a9bc6053bc92666ec7064a1767588","_spec":"@dcloudio/uni-stat@next","_where":"/Users/fxy/Documents/DCloud/HbuilderX-plugins/release/uniapp-cli","author":"","bugs":{"url":"https://github.com/dcloudio/uni-app/issues"},"bundleDependencies":false,"deprecated":false,"description":"","devDependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","eslint":"^6.1.0","rollup":"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},"files":["dist","package.json","LICENSE"],"gitHead":"a725c04ef762e5df78a9a69d140c2666e0de05fc","homepage":"https://github.com/dcloudio/uni-app#readme","license":"Apache-2.0","main":"dist/index.js","name":"@dcloudio/uni-stat","repository":{"type":"git","url":"git+https://github.com/dcloudio/uni-app.git","directory":"packages/uni-stat"},"scripts":{"build":"NODE_ENV=production rollup -c rollup.config.js","dev":"NODE_ENV=development rollup -w -c rollup.config.js"},"version":"2.0.0-23720191024001"};

/***/ }),
/* 4 */
/*!**********************************************************************************!*\
  !*** C:/Users/hxw/Documents/HBuilderProjects/xinwen/pages.json?{"type":"style"} ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"pages":{},"globalStyle":{}});

/***/ }),
/* 5 */
/*!*********************************************************************************!*\
  !*** C:/Users/hxw/Documents/HBuilderProjects/xinwen/pages.json?{"type":"stat"} ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"appid":"__UNI__B004541"});

/***/ }),
/* 6 */
/*!**********************************************************************************!*\
  !*** C:/Users/hxw/Documents/HBuilderProjects/xinwen/main.js?{"type":"appStyle"} ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.prototype.__$appStyle__ = {}
Vue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 7).default,Vue.prototype.__$appStyle__)


/***/ }),
/* 7 */
/*!**********************************************************************************************!*\
  !*** C:/Users/hxw/Documents/HBuilderProjects/xinwen/App.vue?vue&type=style&index=0&lang=css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 8);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 8 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!C:/Users/hxw/Documents/HBuilderProjects/xinwen/App.vue?vue&type=style&index=0&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@FONT-FACE": [
    {
      "fontFamily": "uniicons",
      "fontWeight": "normal",
      "fontStyle": "normal",
      "src": "url('https://img-cdn-qiniu.dcloud.net.cn/fonts/uni.ttf?t=1536565627510') format('truetype')"
    },
    {
      "fontFamily": "thoruiFont",
      "src": "url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAGY0AA0AAAAArggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAABmGAAAABoAAAAciIvNq0dERUYAAGX4AAAAHgAAAB4AKQDBT1MvMgAAAaQAAABCAAAAVjxwTgpjbWFwAAAC3AAAAZgAAAM6/78CjWdhc3AAAGXwAAAACAAAAAj//wADZ2x5ZgAABewAAFmDAACZhMG3LihoZWFkAAABMAAAADEAAAA2GBbqnWhoZWEAAAFkAAAAIAAAACQJ7gXgaG10eAAAAegAAAD0AAAB6v1AM0lsb2NhAAAEdAAAAXgAAAF43msC1G1heHAAAAGEAAAAHwAAACAB3wISbmFtZQAAX3AAAAFJAAACiCnmEVVwb3N0AABgvAAABTQAAAlowQ/R5XjaY2BkYGAA4nNpN/ji+W2+MnCzMIDAzeLLgTD6/4//dWwSzA1ALgcDE0gUAFvADMoAAAB42mNgZGBgbvjfwBDDpvr/BwMDmwQDUAQFWAEAezEE23jaY2BkYGDYzcTGIMUAAkxAzAWEDAz/wXwGAB8jAfQAeNpjYGRhYZzAwMrAwNTJdIaBgaEfQjO+ZjBi5ACKMrAyM2AFAWmuKQwOzxjeiDA3/G9giGFuYGgCCjOC5ADeDwv7AAB42k2Qv0rDUBSHf4HUQXyCIk2hCK5CKULRtB27OWQRKX0CcaogVq4gDurupgFFX8BVyKN09Q3c6ndPTrD5+HL+3Jt7D0lVP0khtfr6TqVRqvUvcYwdXOAKZ1t72iGeoPAUz/ERpzjAS2xjicW/yS7xy33GHv7QH3i8x+CqNs6hBz//zO25L/jOnGvft+kEc6zwNW1pm3itW+1rCSXEGJzSiXkFc6PSyAh4pwk0VcyGdt6QegrB+kcwtl1X9u4o0wHUZ9/A5l1dCFrBMqm/j+TGoVfSGxbQ3N1wrCdoqi5mls2xb1Nc8AMzVnJ6n/qIq3/1cElyeNrd0r1rVFEQBfC7b8MmEBVj9uXdk6zxCwyIGND4RRSFlApBVCxFCRZhMYpIREF009hZbNKoKGZBG1tBQQuNGJJGUCw0YnnOfdwnoqVFnteNiPoPCA7MDANT/GDGGFM0S1kxhVBNNBCmQnNuiWzoNXPFlEzEEtvYwR72cj37OMBdHOQQD/Eoj/MkR1nlaZ7nOC9xkjc4zVnO8xVTZmpRm1aqS73q1x4N6aBO6JSquqCLuqoJTeqRPumri92Eq7s37oPzLk8r6U5f9zf9Hd/IlmXlPDeG5jfDRm5rGvZzOBiOBcNI03DuD8NcMDh6FdWqdsVarbXaqn06oGGNaFTjwXA5GOo/DWVXC4bX7n0wLKY96Q5/3U/52346a88687y72B3hG77gMzKk+IgFvMNbzGMWL/ECM3iOZ3iKJ3iMu7iFKZzFGVRxBIexF4PYje3oxxZsxiZswDqsQQWr0IEVWG4X7YK9bxu2ZrtsazKXzCQPk0ZyLRmLbZzEcdxZflC+t3Sjfx2FkvkFKUQ/nubvBfPfx3czU9O4AAAAAAAAAAABTgHWAkYCrgOQBmAGfAcKCJAJHAmMCdgKUgsUC5ALzgwMDKINAA1+DgIOkA66DuQPDg9iD6YPug/OD+AP8hAAEA4QHBAqEOQRWBGOEpoTIhPGFEQUlBUwGBoYbhksGZAaHhrGG7wcLhzcHWgdyB4uHm4e5h9yH6wf7CAwIIQg4CEcIVQhhiHqImYi4CNAI2wjrCQiJJgkziUUJXAlpiXoJj4mlCbCJwInGidSJ54n+ChmKJQowikCKVQpjinAKh4qgCrAK0IsAiyCLO4tti4gLrYvFi+SMBQwVDCEMMgxCjFsMgYyjDLcMzgz4jQ8NMI1pDX2NnA26DdkN5Y3yDgoOGw4tjkSOVY5mDnYOhA6WjqwOv47jjwaPGo8zj0iPbA+GD5GPpQ+4j9uP+JATEB6QLZA7EFWQdJCTkJ2Qr5C8ENGQ6RD2EQURIBFHkXcRlpG/kdSR5ZH9kgmSIxI4klASbpKYksuS5hL1kwYTGRMwnjarH0JmBvFlXC/qr4vHS2ppRlJI41G0tyHNCP5mvF4fIAPwBwGbGxjMIcBm3BfwfZgDBhDEhxCEmAJBiebm3AlAcJhCIRdNiRkN8kS2CwO2cvA7p9zk91FPf+rammsMTab3W/xUN1dXV313quqd9WrkqAJz0w9Ky6gi4RB4TThHuErwlPCK8Ibwj8JvxUEyNqghNLgZouF4Up1pB+KY3D0y3BFieIHWP7IFyWLhUJYGAaHiiPlMRgu9EC1MjJcyMkBkJVcYQAKxXY5GnGH3Fy7HIm55ajCrmU3WsYqSpVRGBqplirDBWe4Uh4qxVIQkXND7YWR6Aefq0NpOOp7qI5BG5TzBWx5PuA98e/F0vtTQxMAE0OUSmIU4Oh/ygCJkCP+qbXBSA5IPAgXrl2rGoZ6/CrJNsJyIauA2l5QQoYtrlrJXqxfz1MAsKM2K3p3wDSCQcMMHO3qnejKmcBf3+c92n9yqOWP3Vq79ejqjimhsDo9QIowr9/b0j8PLCPaAnmSMIwWKECLfsSLrg72QYuh86fDLkaCFKPQlYY7rTTxvoF9ZoSM+xTVCEBw6YJgePzYIAR0VfkcZvsv4QTJsG1DOoE/xDXL0rK6Zelr2F07S9boJoCpZ3XT9HP5e9I2z7DElduD2e5Fu4ZUon82+0ZGzFYFQRfGp56n++kxAg5FgQhUCAhzhXnCYmGJcIIgaMSBNFT7IWeDW+nATsT7Iv7hs2JDFN+xwYYjL8QzMBuzShXs+XwuEmOjqF2Wpu/ofu8Ur/eHMHvh3bJ2380P3J+JwVxIlcYByt1t3/5E+PavmX2zpBPniw/csPXOtNze1n0yVVTRUujqwd5OrycfzUTxD+Y3blZ5m2EzafG+vXIp3H6b9MpO+ePer9X+s4ZWONc8pSqPbg8dX95SopDf+IAkfWat9zd2IVUoEjug0q6evrkbg6yWaNC/IA3EqT9OvSSqNCPkhS6hD+kgAKLLkeMTDB8KDD2Gc5rnjnCiQDmay+P/xdBwP8jRULHQbuPoT+PIr/RDu0IFsmfL5j30xC2EbDlx48ctfcuG+Nevuvrr7lmbdfv2c07aTMjm2kPj47B/fPwL4WS4Q084oJ+htehrdAi36HBgyx2U3rGFbD4Jy46TrRvPuSdxBcu6InHPOWdvwyz2xtsxPj7uwHFWGBzLe6xDc1q0MzRekaMJ2MMLsL+fowuEHuxhAcppiIZwvmZxvoZwPpdZR/VAu+zzJEQt1A/sORKjBaWALAT7cj6EWI+OhFzWr8hQyMtfZ+OyFmcpv/1eNAmQjNIW//o9zPu2JFn6o0ogonzSjtl7lEhAeUyDR8HWvcvZJ/Ax3WZTNBn1FvhfwXPRJGbA7QBUe4x98MnaR1lRsnMPq+cxVRCF9NTn6Nv0bMHAvjpRuA1xkgUlJrgVoVoQQnKBdVEkjaxPHoBcRFb6cRAXC/gvJiPHRQQrBezOkUaPujHWzTGZ/p/UQoRXvV/LMgRefRUCsuz92nSpaNrxgDVajLe6hWpP0olARFUAe8sKpwAISApZvWjhGgCdEoCEoWp/839RCT0bv3y1qabag3IPCbYgj0m2q8QKQByg2GaSeDwYCZZkvWewIIctUSfS0rMJOXspoaackltzHXmy4f+sKpxyQlS4SjDobqoJOWFEOEe4SbhbeFl4R3gfBmEBHA9r4Vy4Am6Aj8N98HV4Bf6FSKyXe6CgYH+kQHZjbmwulKqVaqE6MjjC+iUnF3OyW3JRGqHQa++HUShU3HKxPdfOPopGUAA2vpqPNWAejnL2ZXWkgBVVytVYVQYsUmX/mPQdZnzPr7iYK8hKRInGWEmsgzUTYTXgYBhRsOZyqVxi42EYv/KhiVVLfFykAEeSnEM48MVwMeYgVKVqXboXcjjDEMAA1hZl8FXxbaXYXhwe4Q1VODpyUSmVedOjwKtXkBDYBP+wMsJeVMuVcsz1ZTMrX1AqFL9HlHKcaEplpJJHsNuANdtejDHI8R8DseQW8jLiVmKUQDyRUmkc7dhWAYc9TgSs1I1VqhRJj+pDrMLfFOr5VaZADLsoMdqjEcyJYsmRYdQ5cu0jOXkEVQ4Fs0vKdJeNDOfZS0ZVxadqKdp4yfAD/207Z0qM5s1vyT+L9LJQsFUhoBgobd8wzYIComi06Tohq2GDLBkQ+QfZFCGgvr1x7lzbDpsBKlqh+Fu2ldZFEZSCab2h6S0GTh+qtAZD11IgtTuIGU5ceolt48yiYktIVihZTehH3YJEaBFsWXlTlg1Tln+hqWKXHMpd8hHbjrogRkIRkRKqyKEWkULEsQKXXJoIm4SSYyn9gWU6MYBUPBQaHt4YCkQlrFzjsBLQHIDQrFmX6GEIm9b+c8/Dxm2bqKlItD2XTHV36VrSkihIkWBo43A5HIqnYo5p/ZgCHXDcj2KjZNHCVEgDIpG/0vU2Q4R0TNVI7RJ80LAFqSWMj/AlbKcT4F9UGxmFHdTU86mp6HpYDUDSVnU1GNqhBA0J74w/Ek2JyTmo/YqaIklBp2oiNwFRVpdKIioaj4hIWEBe3alYmA+Uv7DAO54e8QVFGst60tBfiUYSMqVKQST/AoE2lQChnUQ0fhECSZffQCWmGzvJiW/a5HeYkgoSsYB9oCQi0Vd0I6lLWCnx3nICDnCIkpG/17SQS1k2QDwqigfJP1jYldT8BcIOiiSBbbZRKRn9yEcUNR4wgCCIxA1p+t87SVkMBxws5uUYsMnIgXgG6yGgGjGJwDuhNhVrRhgjF18cxvY07UAIm+kGSu1g7C1NS7Phw2hD5EQYOzVmqOxRzMQPRJKSyEhAyK8MXgRcKyCKUZeobQGItWEzNRwHapuqBcMu1vA6CX/Ncb6GiOn6Q4iySjX9i4YxR8Gu1fSPRihoBswVg6fr2Bu6vs7WsAFdHcFpDYY6olFJcXVULklQDA+I0M/7TJUJrABFlEG0jqWGQRkgwGTGCiJLMmG51FuFZRWcTMuxnyQZJOsYyvTCA4JEl5H/QhkraFDgukEVKsN0uPareA9AT5zYcfgiHGMlWmqXtCQsOMYuCYItrJ+6mX6FXicEBUdwhVahDTl8J2pVg0JZmCWMCuNMx0T9KiMrTqSNpKGM3GIAqnkXFf+qW67iFaouM34UqYi8KQDUcZUqspdi3kVGCsVqHrOH8DaHeUNjQL+i/Jf3xPvysTahgy+detFBrfOsq7xv3X33Pak77vrUvE/dtedbn/rUp84+56vlF7w/+275axvv29mav3LD1ptOuzoJPz4vefXp0L7zfm/PN14h5JVvwDf+kpJXyG8WLl688P1/D1mU5lqgqxo/e2vq3n372u7+9F2fvuveJz591133i+3pF+GldLt4/01Q8C6+/qyJj1HXOn8Tymq4a+cDb5N5bW3zCE+ZzAsI5tTH5Di9HKVfn7Be2Cl8WnhUeE74gfCm8C/C77FrdHAgKQhV1NCUXFRW2gujkCsMV8sjlZKb5wadEkV2GmUWHGPW5QoyS9TjhpHRc2VuLtNHytlSDDU8pVyKRVBAYUX1uxiKgfYiU/iwbAEVQFRasQOyKOWqRbnga7lMxXUrLivFFEFWKgVYo5tHsHh9EZkDxppF0IYr2BplTfuNtBfyY9BPZJQaTFSUpl+x7mL2YpY9MO0zOuMjFNjDXJeKyMVSpcAN1Txrg5XA4eDnfDGKim0UNFGOaloUwiCdLIs6RHDk6hEkH+a+X6v9UTVNdb0x1D4Kg+3w/9qHjMs009T+ALrB3mxRqG61m4mJUNwNeXYwjrYMzDFUmTqDW4p5sbP74r4es91xQ2+MhXB6YiE2TXe1D0KtM61ompLWLK1N1jWlDW9+a2rXs2qv10xyW8QOFCojETsYtDMnPWmqv2QN/5K9huWaYWjeN9n9Hna7RzW9q4OpUCgVbM3lWsP4nxUKSTY+jORyLaFwOGSHQn+JWEU0kEWGXkTXR6M4obWoLGpQJ4H3sBkynShZmR2MZgcHs7WHY2HMifLUbDUM44x4iKwMum6w9nDY1dWo4WSNnt4tXZ1ivrB5wJGC7W6InBB23XBkMPsmqJbWwFKFtKKqyvvXIRpY2e2R4ZFCwI7Y+a58IA0e4oJWKRjrEJ+wYa73LztCyWwyCJAbbk+n28ItobV41z6cS0M6HWoJC8wmOXHqr+lf0eOFgnC6IORRh2FKSQC1pQgaHO0DqDBFmWJSxeHYhjoZamwVZooUBpiLoR8CyAbqV1SEmJek6jIrhdkmFRyoLupFaInRh71nWujea7o7275hmuvMjPGwZuLz2OzbkaKXxbJtsXUxMrjOSOuVBTLRg/KC5ByZGAF57t12ZXTTbkon4/Pj62KxScfBJ0gqsMZEC0afNXbtXmrq3zAz5jrD+Ea6s+eavbTla6IKtycAouvi8+euM8CYGJaCFkjDuX45YBFp4Gk1SXZvijiTsdg6d9ydpHT3ptER23tbTzMegeba1KQo0EnkuyHknynknl3CAOrIc2daOTTmKk6siGmxolSqbp6nSsEtFKuUp65clZWiJFeL1VgUrZI3vLdQHmbfeAOykuS9FeiJ3p/OfX10RHqm8EBv5TPe3zpVcN/8Z/OUw15Al9OG2UAn8as3mmrxXvPfHvmzw+qbi9ndo9jva4Q43UQ7hYwwhP1eHELN1dey25m9JUe4xsyURG5oIlcgw2OklCYRZO5n3toRTSaTGxcsvHPhgnNak8nWc9jtUNcuvcXx1szbfGpf36mbr928qq9v1eYTdnWXZpZbsBE/jrbv0iOJlVjg2kPF0aa8eOpL9FN0rdAulIRFwnGCIDXcanULz0YmVfT9AtEsM6FtcPAx22Q356Os0Chw3x1yTORbjGcx+5oWao8MzAaYPUC/sH3yCxRwDgG99ZxNN1ESH5gtzdWgza09Em8DaIuTE9w28J4C2wmwjP4JFJeDWiCAuuHpZOEgFEcWk1NvfVIUn7wVGYR96V2E3HXpqWTRgPf6rAm4N56HbMr7GV4gm/zoWlZkrd6d7C4NFpKDF4WSwWAyJDA/0G1TT9JL6XwcZ504yuYIY8J84RjhTOFS4VrsG1TBueOn7vmIybyDckV3jGXVSSGjMoOSYABNLcbLA2jq5IrlquJWC2EcgsTN+c4jZipXmfiWeQe3ESbgK/gmx+vGqqtKhRSrpTA57XGRarNLV3Yq9NV7731VlruuLM3WRPGRr8sDpQu7ZPG5XbueonLHhRfdfB4qpy3E1u/Rbbya6pmnha9vM1o1sUD1lrPEYVtLKIWhUJ60QibQm1Pimt2SOrtDPs7JdAUSqKy2BfvaneM25W8ftTP2iq1AB8uTj6nXP0DJg9v0r28vlyl0gNRbuuI+ccsnKd1zkfy5yze8q6tX66GQfrWq586Ekz+9D94okKSX26vv6Gw5vvUTN/YMYoPdHdfc2LKipXNiqWlZvzzu4xd35DCz+9rPHv/2IP17WCAr3n5BFpZBK/0xkbE/TNQLskK3sAJnuuK7f/mwKzJBysaQ9OGZESRiP3P89nPfDfLOCvdeQOy0oYUAC4dKE4RMlDI9PQt6emCgxNyxJT/FvPHeXhiczpNIIKgSCiw7Ew6oQUVS4/DZrWSiXsvQxH5g9Szoef5D84IhVZUCqm5kWT6oohwIiqZAhcrUN+lf0GUc53acbUXfz+i73EqN6d+EsUKfeb17AKQ3v/CFN0XxzS8sub70MzPt1n5z08OUPnzTTQ+L4sM36a+Xth3zhb8Txb9jpfq6/tZw0/um32JJLnuunqrRu2kbctg80jrE9JmREKpGqGqhvY0ahsxMdaZPMUWqyjQQeBDF31tyyJSB6An4tefJOCTNeib5j1qCyXny4gHZCspANcOqeViGSDb5PZP1tXlvyWYQ8W6ZOkDfIAdQE14mnIWzDEUdn2I4LcqcBAOE9V+AcFerWxpjDgnmx8/5tJh2N9kgtddhZJ5Yh01CjgPzu5fQzI+xAUH+MxBoD6C65Op2VF+0hsDiOah93f7wnpxizl0MaxZr0ZSDdpqeC9jrJwlm9H75ovO+1r/0VOT43r4AaichNFK3SQHp8uv0hKN9TAoYAeljui4FNoia5OoBtEXQ8F489xRDtk7asOEkSzZPqy5eTYhm67YjaSLdvv74yxNrLwC4YG306uPXb78xFIB7GF/yzguEQFClm29GpqzvlRRF+qKe0EXCfdN7BZduozpyJQEinPtwloTdxJhH2XdmcAJEffWSKZTc+WLTSJqUxkiVvaXbksnzJhZ9etHEuclUKnnuxKLlK49dUraY6mJq32Ydt9PsHxs/ZuKqdUND667aiRdAPQZuXra48cniuxZNnJdMZTOzA7cyBe4Jjak9YSNQSqVgcD3/Bj+dwMqYHJeFVYJAv0rZXZtQFPqFJcJJiAXTcnJRNxdF7s/6i81YVKUbAgTvcLQhy2e+9mi5mEXBh5q8TVBd7ifY2WOE+mo3U5NzdBLm9U+++64ZdfWTT9bdqPkuZpDu/nngvfvTU4yEcfKUMIlP706S7nS123W7q+naT+t3hCG+ig/bnvG+efCVnu+aEQOUahVtyoj5Xe8uzIR5fWTc2zRLUWbBZ/Fh/CdudyXtdacrrA5kMD9ld96kGWaLEGGGvCSsmvoJ4t4jRIQEajBF4WQc52wIF9jQxClW4oMTZFTd5hMoQr7KXcqo/jn+cJ6BcTnLkeWLZtirZU6odwl9pNhrriJosn/RKUeWO6gAkJtOVmNfb4PRC70X4cU+RVmuhOT++xlsMzBPw0kMbe8hJE0wXYxxin2PwAlWb/HrBI3/P3ec5c4I1kh3/3lcW5GG0Qu8F3/dh7WtkOU+7//xrx9p1ObTlmGP1K/9NFZMB/EGdQqfDiNIhQWoUZzFVv648VQc4f2b9UcD0xlG0Nz6QFdzY44trmX9Qe5kp/HPM2c0UpGpxaU0MLFbJPv9bmDIUAEh6GYg9Xyw49P8BfDCd9WEaQrUXpbBDMkb5ZD8uBK0QX7cKUXJT0YYtiPY96eeigOCP23gg0CYJoDABkGGvcnw1Psrb7JOhjvlkEXk02RQXlLMoPI9hzLdA9DOHaGUvIe6h8DmNXb/MBsXdX7GeS6pIW+VGd9UnmbT8WkZVemWt2SZ8+GnyTo2EWv7npZNViXyi8eF++hFZKcQxwfUQ7JoTPg1MyoxwwJNT3oRIDfe9wzj07yqoCU/Q9B+gTtU82lWcb3RkPy0eVid3DRhtXGTu8yXb9lYphfJbylBBKm2j/F6su5pBvNbMlbZqCnUqJvNj89M7aAX0O1CgM+PAur3TWvC/vqLgwyNKaAj2Wo2lEWLupplL4GJfCb6yZPex5dvJGTjcriMX2cvn+19fPYKINeT2k5yfW0nXVaFyyrLpdpOGI2mU73pNN1ONi6rnbWc+eOXk/uXbXz/8TnLgayYNdBFOnpHlgAcM/L+r1J9acDSjJ454Vj6NvkJ6oZcShbrow5FJQ5hBKthyDM1mZn1KeTKMfp2RPf+oIqoM7z3nu5A7c/ItbyjLucsUyMfU8139Qj5iDffMKVPiMGAJG6Hrdsl0/h+7SVmZKrkHDaInsUsv18PCgepS/qQcmgxKEUNyMGDB/vBBffgO+/0Q8x7h5eDinABuY58hpfTwFVccpx3ENy+gwcvYIX7Dx5s1Pc3WJ/Ly6FWWnWJ4B3Et/1/A7F+rJHVdTPW9Uq9riLaUACPYT194F7ACnoHWZlJYZLgP9QoWHtkcgrrngRMZr7TCGDulMAKTLF3WIKyF/47ofHvg++owL4gAqtYUIXxqf10Px3Huxa0nwrCLNQhzkVtXcgX0IxiekLVX7WUmY++ytUJJVYZKaAWGKtWCnl5PrNNZKaMl3l5Lk6Zd8V/VOQRl9dQV/uZmI0pY1z5R2PaV878tc+N9qyejkE18GezM4Ou0yGrZwzP3pjUAyBeOiaHqNOVVDIuwAqXSDDRa+cIDejHrJOpsQksJYAiLqS2dYlE14OdxFTm/Or89pIolTLJ8a6+lJVa1WJQNTv85rM1Sao9y1Ovb0yiqfjKgb8nAcvoaJ03j9L2NiPjzBu6SlNUjdr6gKgNboJIsTwKBFxDUk+YSPTO08OiSEK2SHKt4VYcgbeZSX1p93B43kjf0nSq29AqRclNWIWwnYdfNlrDlI0VKuye+iG9isaFMmpsx7B5isSkqKuVGOutjsiM9fYD08PqbjckXr5QjLoSL8TmMszHSaO4RaXaBsXqAHJrV6FLateEMwCQcCxXeVdRA9Y/SQHTsE1yccBUVNH7vaqIwpRkyxEslqr99LbR8dvPSWy9PnbeF1p2PHn6qke2RqkLrelad6ZFES+gtIvKm6lEAxZ5xow6Zm00qAJcRkknuZSQVI78NJr0nnR33OCc94mJxZ+4YsW3bm374pdzNz8pcJ34tqnvI56uoCFHYrOsWuRQO3W+NL8ubxg+5OqtH42du3t0/m0b/7F2ZSQO4kT035whpxatUEj/AivfGMNmzoUvQTZW6ywpxmYV1Eu1aB/5USyLNF079Uu6D/XvpHCs8Ai2xkasUmGLUf3Y0DAby22QJswTidovf2uTIh/F3FRUCkxp5sXRsKzw6xhILNwgGmPOH2SelVFgLwgryT6JymxxjFUp1x1GlSqK3Houa4uHMPBxzxf/2BPDusgjIeoDHw35NCTU6pKgIQdONYgI2dF00pAMxw3HNPDeXnNcbMjSUNK5wVi/rkhhWaQqESXdaA2ZttMuy2zJSXbMyh64R7V1QMkL+SwlgWwkZiiS0TcwvyJJNDLcSVSqBweDwc+/IXbl1bBOgMpGf8KKRlQj2hKTVIhTkcY7gm6rJWvWiBslOP63zHvsPUl677FH/1Uc+tFQVR1ItI9a+dVGa4sYTmhSJIwjTdfN9jTphLzVEbKMUBhrVt3wgrga0A0gsmHFZUqpoQddOx20AuKs8WtA1RS99NElox/pd1wpMxIxNFVXIu2y1pETW/qilYoa7nVaZSL+7YMLrhyUI/GWFisakojsGGY4YgU62gYMBS1KmnJ0M1iwLNDlVJv4zsMPvyNiumwnHxdv08/TNB8XpzCu9sHxEK2PFfrfj4vh+riABs9C45JsD9Z7rS2pS0Yk5qC153eoftN038WCbr8ui37fUVnXW0MW7zu2yOcYI3u8h6V/ffTRf5V4uvNI1JXqpCc3/6lUprPHvZ0+MXiK+mNu6k36Jo0IJeFU4WzhYqSIH6pRrfSTAKJokzbgXvG5EG1cmVdgFOoxHSPgm4tIMe4XqJvXmJbZ4K5U2UyAJiO7mcXTU1RdVydmidQwxdmzRdOgYhUns6GMjvJUD+jLWZHltSly1erVVxGIR90gvXXTplspHD9+y7ed9vgv9oYMKxZffRX8mx8Gw4NeTtowSenkhrMmCZl8CA3IUcnQQRwbE0E3pFEtoLfryM1lVZUH8KYdrjntckIuP22kV5WKfefeTOnN5y69LJV7+dZPv0hJJCzTy70+cuEJKy8k5MKVJ1wIn6Fb16/fSghLcVzlpt6gf8fpOMZtEdQw0VxsXsdAVZubj9VysTCGVK1W0khhbmVhwWaqSGNwGClRTaOrVBxGoRVIkXks8mweT4eqSDpLnF0VLUa6BZxWwbMY6mdxAnjXkcnzwmT3pvN3EzhuwS3fjhCnf/h2XQnCAPO6DzBKgBbQYK5kNghkSnN5Fr7g+FGO6y8uuNvtHmomTefFnK9/DufUiTinckzLzEe4E8+Hnrsz6/4EFPEVPqNQyo/VY59QhaAntqYT87qLI319I/mu8ZbZA8OtayqdxyRaThlyVxfV40TlrNdicZpZ6EZbxdyC58TFfcVRgnOVpOiCzpPe2zgwC0iG0DyBTJkcf/y65fBm6+I8aW+NL+og7Wgdf37qHboW5U6c+77moEazCaVstYJqe4Ct+ShF5vZvA5/QCuskpna6jRspWl8IRFuJeSAPfy6yKLVcPRN7e/p1jkltsqmbiiDR3p7yQHeXKIJIOgfHVPi2Ou93qIOGLetx3TQd0/Tug7ijOXHwL+T0GY/bUIx34K0eTpxUf9HpJMgPRyUKRJzvhOaJOPulOfETh8srFwCr0GH2Mr/e+5jv9X0snskkmu47vM85CTjPzzjvXBfVgIx7LrYEZwstU1NT2+gUnUQbok0YEhYLq5Bu1wh7hIeE7wpvCL8DERzIwyxYBqfDefBR+BjshcfhZfgJHOTWEdqc3DPLlLswX4Xz4/v4kMBcLigjbswGFiAznOc3jK8qcj+wYJk05Ll/kQ0UXqhCff9jdbg4zL1WSkSGxme8IfyERcTYLOqFieTp6lF41wvy/Db/M+Tmdd97o5Z2ual1DiMLQUmTRulCZboetmpZr55xt1IMpzKTJtyUZhE5xWmMOLB14FnwDn+Oyg1iTGcpMeUohZiukIaoXOWuxOGZVWKbY4RRigXdVg+rwY19oJnodFZ1umU0vvwPi/Us1prC1Pd620qjwEhlukBMplNgRE36ky9phmjrTxyseSxI9OafjdJQSKYT/+Z9gwRDGglBK1VDQREn/z6iOUHS9urtxy3UgoqsHn/Kff9Yu0lxTKquOS0OWiRAEmdn8SuD6KAZ4SDRQCYvEx3v7KUjGtXD6tjJ3jODPZomBrWO3smvUgWMUAA0oC/CORIEHCmzZnj9NkIkLBxAESjRz1w6vtnySx0/YsZ1LYS8P51Zcq73shKyiRIMIYIMQoqqfBwbZECKbdF4GyG6g3UAzOopzoJzLAdFq4koo4w3wzahpgKsrH0ysRFkq5U/peTLaCCsQshJES0UxM6B25AiKi2H+fsIvUMM4mOPiV+ZdtiMmBGOYeQuXgxETZYDjirLaKL1MWJABPUZRMYG+Cx+KtNsu0Y4PuQuKWTLYjoDLCOIVMsNEStiAEU0WIYoicN6VJVpVCfBsE6NVWIwrEhZ0ClrUmITeRvrtodr7cSOaiTvvQsLECRx99WqrITUnZ/17lA1KaCOLzpxGXaaqp54+oqAGhQ145YvIy+mcihE2+nTH0HbICyN//g6LSBq+q53aj9SDTGoDpa6e7CwofUPtFYAK6CaPnZeRgqFRKlwxSsGoqeCQb+6g2pztQDRtbHgnS8+ooQNohZ6ybb1diquBSVds4LZ4GWfpeLwE7zUyDiIEh9VBpzqKmCFFGcgYdvJCIPQDmcD7WNLtaCo65F4W1yL8du41TOL9Hg/M7CrtJEEwzphpfZqNrW0jhV5lZVZ4d3ERrN6+prt13Bgt+1Ys09TaVAbm5y45lLMUrWrrr/9IZSfQe2Oz60/g1FCX3/O57+sqUitTZdpBrHVq143TNNYu4bTYr13On9HZZyzQVUOOgHiih9H8gS0NWuPOw4LGerKk8/6O43R+9h7V85llDDU0fGvblUlPaiM3rS4fwBb1rVS6bg7vmQY1NIT8YFenpUYTKTeCMliSO3p13TF1gaZLh3QTjy9r1+zsPnEUMvAeiarG/Z9Ea1NAXJ+LD9bX7QbC0LlaM5f+GnEYM9U2chkJtNVqZxUAbJm0aI1BNPDM15sMqlhchzwXaXL2+8XxrSeA+ONHHj2MJtYafJDhIQWlNkbhY+g7BGgsdjpNrxUbrsNfg4LQEQpHpMHWAgnD7pkMYsVFq+J/E2SuZgvoE7KgxLrb8v8rRurRzDKbsxpVlAbtcOlRiAQs+3r/MtyzQQLReuPadzETlVBoTlVXTQ+0BIE2podSqV7Cv2uTbwvFTpUtVdUiUa1kJ1UlFhioNATCA71VttMiYidheH2mEhUWNBEtES9dqIFXDsQC4wE3ABgs6dZqC2ErWXFdNCUtJQokahInGSkL9XelSnaKjixvlSGTWspQWUpZ8g4Y7r7uwZaohKJuKVonBIr3NNWSOBNfxPNvYVYrelYvp3eoD3TZQUUKkMsAjSnlJVqrooCu73oixx/8bZQYUsk/iruYIWbvzOGy3MgQTDeAvaiG1Ij4Vimq4smLDVy7txKS7RTQeUmt/g488tRA0186+7jlp3zUvPgeUDWIVPsjn/xsuWSTrIkhbaSRUUUzQFJs4O0YlmL21RxQTLeCZOHjaFDeKzkq2DclmP/WMwnWu0jYzRNeNwHHwjZkfIIToeRYabTRXESRMsjviWIqFQOrRtyrPL+dgQkgi/eZbJQnIgm29x4BA1APZtJDbRAqr86qzwY7QyGwpZji8T7fzc8/rgZNgefeOJOKRqItIgPXV2Aaaiv2D82+glvjrgykK1GY4lsOGwc272s8jtatoK6SgmoSnYo09rfhgw+iNILR2oub0npJenZkiIuTS8BSM5P59vpotiqjdNEhE1rrFnLZ6WIY9mxlK7JbbI4F2fVxNTz9Bk6XzAEF3lBVVgonCCciXNMgCzjCCwkKxKTeFrO8gnA1SYkQNmPKnb8mCqmA7Oloig0lVU+/Ltm3TlKToOTeNDSQ5jCGfyi8azaM98ZHCdkfPA7gwsAFsS72r6T7gLoSn+nrQt+01RQ+xM/Il8EI4wat3ElcwGHTDCny+Fl3PtJWxcWb+sE6Gzz8lgOS3/O/wJMv0y9Zu/HfqnvsC8E5jedP/Vd+jwdFSyhVehCei4Wzkd+dT/Sk62SjwHzGtjMXxwrl6oVFsyAjMX1w4uYeou5+RLzBTUyirFyhW/yYKtaMX+cNYzCCLOjeMg3c9iXxgiS+dACvYJWOZrcvnOfe1hRX2R7MKqM1zV2maAVz2xPaJEsUVQU2koDQZk+vICKlkxldYEakOVTUf0I4C1m4KwjA6I4n+fMZzkfF0VTbhXlYIAmqQxfy5fVyfVAL1m16lKSTbe0lecDOX2CDLTN6o27tSV14TDvrNbWLG3Pk1vaB2o/GlpAUKvSdDGbQCUNMhHVFWPnTpxyKUFdYQF5ywRCOQDY6AtJMFXeVjDwrxxYBFk14R9JQrTxCVPVvJOAOa4GFI5A7fd5df02WdUQInLpqu7lKbvUJgVOrEycRty+WWNVqPgSSNfUJZWwu9hbkcWxMNQ7roAdUlvyIiQ00RhdCvi1qJpkYj3byyPsFzrpGHlNSAv9yCGPZ/tduFt2er8Lc9OyvXO5bCjLtr+4fCmSLxOxpUnI1rezZZlzgHcNf+4B/5kcCLLQuNoBlsJtMtr9muzdBQe0VYYkeS9KloRXGBUtrw0GWSHvNUwD4+yWJfBPmHU2eyKXsBSrq70G2xTtHw38FiuQ2BXmSV6Qv+TJpkO3aDPfL/yAnkKG0PbrE0aF44R1whYfT3fazh2uUN9rxpniyBjfl8S9Z2x6FyrskY1lNvS5l9MPMuCBPDiyY1LV/6RRRuG1HSoDvwn6qDOwvKCiA0S3n3rqJOrJmKUS955NF9wdB/USWxLFODVlW6Y0Tq0LVVGUumVTVCmV8UoyKrXkLnxZv15myyaNYyEbh3Ucx11aUwb9ppCaECDI9cWTziXk/JOIoqAWbShwzlZCrj+HKMaB6cpw+HfJ4qUWq0QU5frVsWQGDT75VwYNlvOh6ZItpK2Og0iiWSEhFNCuZpz39PrqHFO9ppfomG7GfftsCPFwsKJCgY8ZtqAkV3MhFhw2Mr0sIOebAlx4lCvzO9GHa3M7BmF2bgBgIEeexOsx+AyD718YtsiTVvjZu98ibu0YK/zcT+//prrnGCxVe9yxyUu243jf650LMLe3dw4hc3rdVKovlaJZGOzoxFIe7WB1dnThM/xnx2DtJ7DWCgOELS/74Fphytsatk9/7vdn3itvhb3YbCdWaHuy7XwR5vT1zgGY09s3515gdfalUF5fP/UMnaQp5KATLDZshCmmKTiC11FpeNIYX/OZXLO3jMV/sZVTumE8lA6NB0KhQOPmG5nWjo7WTCgQLoUnVgJ98KMffZDCyom1kxFRl2yFdMvihlE7HLZH8YuF7NOFeHNjDjoqHZBykkoornTuWIlf4bcn78jn7zovoEtqUBWocEMdftavE9M7/Oowxdwy9/5XsVfz0wFHzDf6IYjSTB3C4xet3R4lVkA2wyT+tavkax/wKNm2YcM25oDU1l9Hxj6AKtR8IE/cyYA0XWqZl39Cop+/dsNW9un6baKyzXt2xif8xl+T6hTOoD8j27h+kOPenGnlh7lIpvXjJscukYYWErKgXJoAsnD4U7878ZTf7bnz9ytX/v4Tqy6hKBdOYc5ZeBsWlFms2IJyecF9u2648S5C7t6xY6fXw0pcSugVp5xyMfLYrVO/p1spi2gfEcZ5vFrdq9JYcK9r6Yxb8N2QVb66whiIv3nQHxRSle0Q5WXyRaRyxH8PB8LJ8Nmak9A3a5m7XhZh3rAizzW1nD1Hhd5zLzqrm8hztVZHnyPKlXkgvuy1r2Glz8Ai5K/4pkeWwOaXrXDYeupsFrR0kQZXii/fddzOISLPsXK6NUcz0m3ppK7M0Z0WrIkO3nT8XS9vWcMKr8ECx5yhYf4aLdwqSIjvHzm+BmrdE8hvV+MM+KDTXG7slDwKurQ+lOpoFuHI6BPhun2U7rvOT6fxZ+DMwD+sNfC/EumlbWZ4eyNHosTJ07Vdt49snSaD3oIkVM0jkMH7ylOMdC/bSDesDpYfiSzIE/YKw3QDOYA2YIcgODmmSGYbCxH1BQjOKylfRMwiR/z5KLS3gHgGq/53LDkDxJZ2GK09hSnZD+0wvKK1A4YRI/wbho7WFfA1TL0fQ29rBxv7jTYp2qFFQaiOZKMJyIby0/ETRwCANUyW1J5i/2M7RwQB2v9lxQp4gjU0zho8diYY8ARrHnHeKrTRS8l+HAssKqK+eMDcp9VigTuVmXbOdm8wzdBFNXKoUkX5Ss4/wBgXS347C21DMxv22sNZk0jiLE21oRpubQ1DNaDAfr/RJbtUhbJPqKLuig2GvVv47vjrwgM+D2jAEUR+VmKxAr4cZ9KGyelq0YdkJhT5JtrQbu9V71VKyGzQRfg51cksQubO0rtcr93t0mdC5f37NPjwt97tcIVoi7eKskJvFe2eXbFkMjYTxqCPBPKKSQHoRuwvQ8ggxUYQUlqqMFWF7zEf4Ns6UP+KIJClKgImTW/5aLb0U95j3q/gODmXm7hOpmQu5FonxhYu7pK8rzsOBJwRB07WdM+LtLZ2tbZGB+YTMn9gcD5bev+49xhqMccTEU6797fYqYQoqvf1SDni/doJwynnSeyLrta9MO5/MDgwzvq5GW4BpmUCmpdHghp+3WhvcGA+bDoyePDHgXFoNPPjI4DC+nVSGKeThEUGm0IS+Uw2JMWqfTCUjUp9hwcJ0fHaJAygNBmoTZJJb7+3n0zWJrFiHLDEv07Czc/r+vPX9X//+xezYS3U3wp8OHM8/fZslIwC2t756fol2Vd7pDxaNkTQVG9Po15vjwpVv6VJ/NcB49JB7yS/anjooMTyWqXf/05mrYg4Z+N0F5cXbcIAj+Zk5GuyO6UiY4Rs87y/h0M67H32sGfYu99vzL/AU7sipciuMDi7ImVnl+PFZ74+d8YjeT3fOp2Rv3yX4+wKjzjsEin/Z/Or5ntuRzbwoHxvW1HoEeYiNicg7xspR0OHwUiPkJcvonJ4GK5whHIH9s+A+M2ZjyDt2rWr7zCUXz+sDD6D0IxBbfLwnNN5Nc3oe/LhZXg8516cCxtwjFhCt1ARFjCrKs/YbIA5lnoglK02BiZO7DYS47byXPAHqdTOl+e5LzNvQyTNdw+wlT2WXeIPNPOE22WkUkaX+wQZl2rfSqCtl008IxmkSMKVcBcxpGd4nhd2rCAE7DDOdFiBSdEKQNB+wc/N84f94USkUokk4K/HkdV7ncjdFfFYMRZbISqM97/e0j5lBnpsE1o7W4Enpt0TMHkev+NjVuA4Mx9nSpjHNUafMU2vQSr+ljW+SgwzKYD8tpkG5GGEtLO19cX6xXIt/Iu0tMDzh+GK/PYQsrCBAdcAksPptrg+2GfOQA2gCbn6vBZQ3xW4joj2C4PZ33k3wwF485TA+DoIKAjv3PczUfzZPp7CeRBuDeMf3N3IwtTnT4fqzR1RD/I5NvcyudxfRYRd36T0m7v8tKmVVFPr49MFdn2TPNPUqPcVBgYDh8u9/ZiMY/tl1MRWMg9OJACNjY6N62EL+/61HqxZrZSKM7mc43M5HIqc0W2Q5fFxtvKwbBlPzYi57NDj+LhshZXxcSW82nW8d+qsFLx3nIM+bx2UcTAM4gTcq2A5y7HK+L/DjmVx6g/4rYVNyBPqR2s/qbPjvq0qxPEmcAsht1o+bxancVU450Rs8yG+yS0BUR4yO5I/XCBMx4ewjXG+TvnBAJHm+BDhp06/89NfIdC/IkKzdMDrd3yENSWhjdeBbqJLLOZfx0ngTFU9s/ZrMtlzESEX9TD1qVkKeRGGtJZQtDrxGkSxTJNfymy8bpg6QPfSDMf00N6rrH/MDLCdqr7Tku9cZYKvqwJQ6SL+tXYaG0hkkqWZQ9ldrBiZCtu1ycb7mW0VPxh5S4HrbsyM4UHJMT5m0vCBNj85JYhUlE2ZinS7Fkno57/Dzm+hmXq7jaLeV70a1oqaFv7tQK0btAvfQzXa1+MasPieXoFHwSNX5dZAXURUoVJw/huKkL/VE/o75+uJiLYd4UGoEDYQdNjwIZSCP2jaexdqgCr9Dg4dQgmi1lL77X9DQgFwbI7RcfKM0Mr2hzNDRtGADThX41ZQVfONHNIHOjMZvD94/4HA6aB4f2CmBmigISk02A4qt1z+iFe0Nbw/en9kxgao3u/ZdzPWCgzeX81cxrc369teDs1wxhSI0LRYobC6bt3NTJ7du5vu6XjTwkTtOwzC3bey97t2N92zfjoEg8tW56Sj8b26UVeffIrNu9D1adEM0bNNfPCq3Ywk2BgSYtetGuBY2s3g05qho3ObmeKNbMujduutjGa37mKw7rq9Ti8G6wsI6xjaBllhFGGdsYmy3Sb+3pjhfuJ8iHuDCGv2bV+0aPu+x/3LmuNv2zJnzpbb7r2dXz7J7JT9bEg0bsYWbn/w8Qe3L6xf6Lw5W3bfs5sV5hfvwRml+Q2Ll0aAt5MaG0doxvEQzlB9haJ+4hBfqaBnet/FD7xn8VMLFuItME8Q3A9jrDLvBfbyeT6o5/uigo+bBh16ufw+hHqBHh7+5TswuASho+MNpPnlzz6AKvnO+MJmbL1/OCJuO2ED3Q572RkKjS0DvP4NtYXM8CTPYAob6qYS9tsEwvsswsvGWOawke5vUuM70ooNBYQIz7wvSe8/w9P7/HoyvopBxxr5mNbO54TJsLShUjD5MrO9vqOPan5IHOsbZxqI0GHNP/Pg66L4+oM8/et6GwM2gyjcDAqtNgph+hUfVi/ZAM5DA3PGXItwnjhjzbduHjo8gIh3oR+o3s8Pi2FUmvZ5zZhvfluLY+3ABk9/MtoGbKmbPfnLH9AzkxvUDUM4JtodqbD+qhTnt0QKwa7qSBd7XLSakDMW5eb4svrQmngEabkIZXWDZu7RWAXz0x8NdsVHD15rkPIorGOffRRcWhmil0S5Pfzi0dhI7W04Clods1t8tAU+R8fpDnIm1yQLaPdy5uZKTfJpmF6jt2jeqoOMqwIckkDPa+RUDXRvzj8xCVljYpDLmbf0hHAYb3ePPv6OyjmPyiB53YfG92FeUucoMn7GiG45inxvHs7eng+T7c24DRwdO+coMv+oWA8fRdYfXVz815EFPfbt3Kmn6XcRxizr22KeFoqDQ7JCJWagUjnGZBfzF1WHiyja6DOy4/36Gt2JaNd5v3ZM68UBkgn95jeKClYYSN9LFrwXpt1A2ZZRz+sSO+xXvF86rnbTzWLYliVw/9LGNq+feo7egDpPq+9Z+eDyQIxvDSe7D60CHL+IrwJQUyX7A7ohRneAXNhZd/WfdKPv6ldksPXAeXcJ3N+/n27HNhJ8n8yf6u+X+MovD5SY68f+/8lefnjETAQkc9axFgmbshUggdOI0Awf8/Jbl90hYgb7aNuGddskadv3FCmeUAubxkybRu3l24R6n7yAfTKXyW6m3hSqTpGvy6XZirMbC+BwbcNpyHSe+i7SqlMpDw6xXYISW7VzYopMplTlN78JZcjAi5YZvteOirZ95hfQzPyLQPDlAjE+/4uQcs45MjYv3aA7ekC8Fmzs05f6aVAdF2++SXMdSL1id4gtxG6N0uBXzOC7W1T14veCxpfbaeAnPzY1M25COKyrXq3R16bs77Ga5LZLhmtsfOFs2sU9H3wVKeQHJ7h1MY/9PUe+9m5yAVNmPocjfC87x3ATuXKdvHoz52x30AzZc7l38oVMW9qrafezkufDV0/bQmDzak/mQu4/r7iDz71lU1P0edrGY6nOQBiGR9gyJneJEjnKTqZh5Kq76nkUCQvBVJrEtDPMnBRDdv2og/YCJuyQ0wHIDQ4xpaluM9AnyXK91F77dXZQXwnaUG/HQOfiRGLxCZgs6Rzs6Bn8ridwec+s3cvDtiQ6XaHCaGty4YpFyeSiQqydhWUjH8+RNTgGCTJz6TupbCb5nJhMDp0Ud7LpdCaD/wM48ZOGUrIv6ZnxzJZAieO6LVE37moKDdtfZatWAzkukxo06BHOEm4QPnYkKsyC2TA4xLwzDUrUT7FjB9b5O3L48Xkc/wI7pYPfF4cGh/qx1HzCTBLu8mBry3x5Q1ay/iEYM8mEmmaxWQliVCtnm6lWXFKn2uLOoY7uoetimVQpSGQxYEYMmQSH5g4FiWQVDIUES/NirRkZTkC2Q2wtIi0HGdqojSOx9ueqjkLtEDnDWzzuZSCC5YQ/SFtghM2m0plI/MSh5DYzmZBUSbVUKZHEW8UyVTmRNAIjbU6YPi0ywfykGA63DV8Vth/ClnT1q6zyOtUfssMHGuocWu2TaNtN1m3aHtRkxoWlbBf4f2vdNnlr3KZ7aJyp6k6rFo0bmqntr5t5476Z9xmOM9rajnW/dz+fGmdhutJbwO+fwxdexNdwfog6RjLZya78+cgGNKuJWX/e9rpraH/DRfSQr2VEZlzY+JtEHvwCyt+cMCjME45txry+dbQZca5V2lzDq/L9ugrwqIvGAovbPHqm8QWucHvjDXTDrQ5U/tFCC3KMWUjeC/oeXyXH5FHPN3tZOt5A0mkNO1bduOUDxRMwd4rZqGPccn1B87u0vjAjaCjXD6Bczwghbl8tFVbh/NoiXCvcxPh1Ll/HUar3rg0cSWkMeO867SyCPe/3ddGPZ8/XT9NtXk9qnGfg3x/a9Q8z8o9SZj8h3tudI5xA7fzqfdMKIepZO+RYD5hhGkT9GKll1awIDVpAGTVHOr3Ka4wETQljXNOP8MnDX9tIvOnHTIZUOskGrIrd1PayoYNzsbbXcjJ4JRvscK0j2BIhSRxKG1BjSEKwFZ/YONvbWSGkhZG41XmyPrKeaHj+4CP1nKcOf8P1vFHeH4IQZzs0874bpzjtkGVsroyKDE6zNPiWCztYknGqFNvPULd9XSzFhMBow2e7v7OKJOmu/dy/5ixNDxg3wi8DIXASOBkygRBdJhnsiIzAPZdrOmphitmNtK7uY2S/z//M21icBXv1kAT2Y3AglAqHAt4+2wjblEpkdI4IoXRojQRAJFvfAkNFWNdZZfLrEE5zhAs+BCtkymySNG1ARf6rdIOcC0B7VEGu+3+D952oCuP0CgVIjqXePlQgCaVAVlpky/+eJKMEcFTex6vcaKJ2jVXSy9eZAfjSn04rdr7xi6gvaYLDPPX5xtk4jFr1O6eQy/JDrOsLoKhnOzw+r8LjKVGoMwo7lQKc1drRUenoaIX99ZtdiUJtO5GHOzrZOO80wtBWlcodRGWPtT8aKKLg/Y6yVKbWOItEYcEojSu5MWV19DPtJWg+5u3AW2Q3QTPfhtIJMm53w3Y8BP8Q9/MeAYMq452UL7j4TIIdjOakwWeI+QZXQRyKHCM+HtiWSWZqwAZEptrRkYTnk/ymdX7tj7lhqdJGQkYXQ6SrY1hqq5CQzvHywlaIIIt41AxDGTRFq/2UM8juQsK2KOLa8QFUM9DfAdseM4PcvO5AXmuw28lQi0MyQQMyIUvBuZ0KdrveWwitIE3zUQPlYxnlw7rD/CQNbsiOfa3v2pF4eKr/5Hcklqs7Aeruf3+I++F7hUPEYmfE0L3vc2FAmbi42JcLdZFR+wOyK9ZRYXsv5v8bKhCVLnbHH8lvGjLEZnJn2mvjTU5/Ye/1BdL0N6ixZvzcpjI83y/l68nXoYzcgfO8wGRHoRhip0u4OFn5PqkBdqoj5dv1s3x/PmVuF8Y5tddqr/61WtZpqMUYM//DUsWgRl6IapQo/xEexyl1wNTefVczvbe6tESUYskAdIAbcDTUjrSw4h30ehGEZvs7eZinJdfw9dTdYjPM0TZUIBATpljM8Jp4kmMJU0xXeIvJypk2cOdhLTTbw74nkklKPzzhqMYv3cvJuf/wlt9/qcnghet5vAJfX0pyn38ax9ov6QK0OfP8RNN2BWx+VPu0678e/QvRHItcS0OU/tQ7v3VJq3ehToMthkUmOslkoQ9szQjoKvUm9w8MDQ3AezAejXrPqS1IZcO7nnG7ci/cZCqW3uJNLnwsxcLwUtwmaUMYfsFhyDHb7kOhqJ9rlI/0sPHObI8U8MPUQqgbuUB/7F04DZtukYUMtl4w67ARZMcA4857wGH8cTAJsFRDlWYZvAsLjgDvDo3DO/qIgv89ksnAw+l+QvrTD6PNYcK3QFQU77+YTjskJOhr5J8Fk1vWZWGBsEY4j9l4TZoIbVJjcsXmB6dpeudoU1RFcYiNhUP7allcLrdEikPUPnQcGmRetSMR+9WA4wTUl9jtS+y28z52ex8LYfw77xZ2D9ey/CK5evWaqwm5es1qTHOf6uwj9155xb2U3nvFsnmfMoJowFL1GXLy2NjJACwlZ4KTcvAPvG9E2E3ky/7F+5J/hatZTVev9lPvuv2Fc+decQ+l91yB1ULuBUvRWk24Zbo+crIgT9PMFTrwfkxYzs+8nBEZeQjf5liTgf8VWf/izmIfIIpXMriuXDr6KT1k6AZVaz+vE4IT5aYPpSQmMyi58siI3rz6KkqvqlPj1kO0Q0ohvaZp56Qd/BP8+C2BbqjrzgNc0jHDshLzD2DAMe8cth7HdOOyTye0UslftJ133XltWjivx5aetjSm5cMn1OrhCmScX72XkOWOT+9m+tXw3LnDwSwE8z09+WCGh6Y0L3SehdzYjzTvqjTW/RE+KugIYUUQqqFsiImP3JgvfJij6LAVw0LdPua7CHw8CgfIuHcAAdkPFVg66UMzOQPObWZC4Tgoibgsc7QUZZytwpK9CFNX5UwfrMPg9e6TZZPhYspWwmTIGS18vT+CtiZBPnuxz2UbU4b9kgffcMWg8jdXMXCZJwMB5ptu7Ma5GHyDLTuCs1xx08Q/V8GtnyXjh2xV+H5Tf99phZ3Tx9a19k7vNlu05m9o2NDUZEADXSZKOleZb0RklfW/KkeM+ZVcWiGyDlogqWpGmAYCvHwwblGtuXzhaMXhtkVnAJyxaOEZhJxRMEx2+nawI6DH1LTbEaS6HnScoI5cscNNqzE90BFMyARMY/iismEBoZF0m61HtXQsHySazs7Y1TUSzMfSWlQP5kIJiYBllC8qs7G6beoBlM3z+d75WX6sA9M+uLc+On3SThoah4ewndO+wGR6h+IghWOlKgq369RNClm/kPvoF64nyiZVlS15x1mhY844NnjWDsVUvPWohRh6TDcyobSRmpMy0p9Uv3X21t3xQFel0hWI79569jdVM6lIs93SvHkld7aotpI13JwFqIETpDToNMHMThw79YMw8z7k6tA052X7jFnEgD8SPohRu1LXtwo5ekSMVIWKrtWajp22AeiKtr4/X7/uz/szy2lOluNxpQdmoBvawNG93NA5wsaRsA3Jjm4ZVIOtl5yybyA2TMhIrH/fKevnmXFbMZZ/5OxvKTMooSQJjj6fFjWhTgoee+jPiS5hm3CLcCebF9Rl8TtIi0Kx0k/Y1nNabMTrunKauDE+X/gm8/r2scbcVvxTEfj+9UPzhB+xyUnWNEsaJ6SOQX2KSI0luxkLQLNTgylRL80PD88bDs8v6SI+23ZqID0jMz2QsrtxljiZMJ9ThbXDTVNkeG2BzxCnzWlMJ7z9kILhjF/Q+wTfGNpgfjyFpWK2PDvZG3UTCTfam5xdzooTCzBvTmufn9fXOgfzFmwyTQhl+LQrjliHZp01UuSTLhMC0yzzKRfM5oI44QoV69B8syoFPt2yIcIm2/BfQuXEavXEijBFzljYmN9C/QzIDI/3LfH9pQqyL7Z5vto4LZPvuHJzyvQhPX7g9fTC0YHCaPBVSdLJz53hdGUpakEVTAl5c/ox3hMWlV/IS8r8ETLF9isJxBO6tj3e4pfGVNe3NZ5CQVWaLC3wa/LttwaM/n7Y4/is87t7+gYaOz6c/w0SviXq5f0rfKFumf4PcdtQN9XeaphsZ9ZvvBv+p0gzOZ6iq8nzqMsOoT4j+FvmcP74p/Iwr0K1VD+BjL8qxfxTa/3Nmf4Pn7Cdq40NiG5sPpSYPC2Qd424LRm0WCCkiJNZlxQtSFRFXyMr6y40XEM1xC5KC9RUzbihLBSlJVskSY2ad1/nS8lVz0ZsRULLlZBlihxNKFA8ZdGSVU4IlAQOSJDg8u3br1gjaa4r9wxX+kBxXU1ecspJi39AiGTsxip+gDV9LYhFIy5Z2Ob3McN3vxAVelArOH4a4/pibRo+DFk6wCTCSDk2n7CVjyakqxzn4QbSyhJRXKgYop3Q6+jG9Q+ie+f4BZp59mTQ3FmQk6FmtE3E2m5gvebcc9cgylFJJocQ7i1zhOMqR9jbNfdM9QdUv/ZUGmjCG3kbGQ/Gm+MIgzwamS+ZNqxxNxaZsUi7Q2/RNmt888ZtTQbbHzTtIt16mbHnp87WUIeZuUyLczyDdtEBbKOFz/FA05FbwDkz1KdBaU3H4EDHGaUtd1AykITRcE+px4H56R6gd1ChIzcw0J6nd2wZW5v0nnNiMQcWtp80vuWOehtv8TbmoJ0tF+tnHjWfRhJhcfLl6daKPHa+fpxu2e9mQBu4t8d7PtWLDW45ccIQAwlzaPSkzSSdgnluWItYMC/aAWTzSR0TrTcz//Mt+dWDCC4MJL3v9maguw4SHVATMVHJkS0n9s7LeS+4qMiMR5f0Y1UtcX4W7i3t7QyVMxCVnsPjLosfEnd52CaTo8Ze3ji9aeTokZe7n2Kd9rKl820g/nr9AYRDRl5nce29/iNG/njO19Ui7qEp1Jd+eEgRP0OduSL/s1nYDLI1Y7RIriHMV3LLBcyne8GtJHwAS9QPJMDL34fthG9fJBg0iYs+HeAhbKfan9mcsHncTAMmA23SuXxN2d8KiWLb/Z9CeA9XaXiy4U8Blq23VLr2s2Tv/wxuImyd+h3dSsvIQzt5ZEUAQv18McgPsAC2CF1i0RWOf/qRb+LRBM6z15jz+4es+0CUTIVaOlDtDOZs91dC9iO4D6He/BrhoSu17/+AR9fVUFwA1RPeJZbvP2f0g8mpSTLJf3PA30922Jr89NiaEZExLXCOnpLJpucbmu695of6PoSp5/n4bmGeMA11zaK/w+Lwn55rNnVp0qvpFlVMCa9Oi/4DpzX8mp6IzGkQgS1ZXIGEAYmVQGL9sPZ9/mbkNc1pgVOn1+qa/WBth3mpZkYXxtyh2ExXWOdeFvRyK/tZAf1+keJ/MxxifZ9jL3bx4L69oqw5H4wN6f2QeMLBIRai4gcT+tQYO3o4jExFvii+i8U4ag8o9OgRIZ+QRb7A7gcPfk5x/vQYR4iUp/e21Q8kqEc92kcHzdsOBIFDImyCIb7M9oML2ZD8UCCvwY67n/Xs+WysXsC+vl/x48DnT/2GPk2DfMT2+hHu/BcqD7PNmw+3c6aV8LXeA1DpZCulGzrZZO8kz3LnrXfNiex4Ov+Qup/7m4nII34RqHZ6wBYwqp0w1Vmtvd0od9KJm2F0OqqO7ZdowMbouFBYIaw9Or+Gxopo/cd1fOgbS8H+gnljnZg21n/zfrDKyJDvAHLBawDCgK8eC3BstcJS6Kot8KHfwGP//A3A5FlO/we5wXQmf7/LX/n1foGvJy0nbE9i0U/OxLBeZ6V6rNdeJ4K/OBe2PGDfwBR+xBfmKl2MVKTfXwr+jt8sa65Bn/30LTohpIVuHGfzeXzGB/qvVGHRcK5/5OiMbmwOAZyOUMzVf3ujOZ7T9XcE0PnefgSYd3d90fhB26HiA5cH4tid3jV1JNkW2Ld8kJO+EcKZuZhhSPH4xAzDLoMMlbxdrwgxZcvF0Vbr4hsT1AlAb1el9otGbUg+GKuT1mtykjzdqM1hlVkZp5XH2c2a+jZ9nq4S+v21gH6CtmOH23T+WUHkqqYb65g+9oub7ERcduu8pWtaeivXwLn3zT/VoVZrTAwuq9zsvXpefyF2/NgtUDqvHKaxFptE51bvXpNd2t9bvfubX1v6mfJHBnccZ8UU25r4SNeZvTfMv/PeGwfwuuhE25Zj1oYTlq6xpPo6lbCS7icPCxH+ayHzBYF1hW/0skDsIjes5eKRMqHxOwel+s8ZFN1qof23lqPN/cwXP8V2t2qlrR/bXtL3Ytbqt//zwOls2p/wlwf+6gQd9pj6mRrR3NFjxl2V6GfrcwZKsRHIhFv0eeOjcxlnxalQ0h/ET1avX3sai4w7/uRVKzXv49rpWkJvTaZTekJbpV7d2x3gvP455HMLUeqOMM+1/2Mm3ND3/3qgsRLBlHQcgZUwO1fGz/RnJt3wjBGQ5cFiqhJy0Hqw1ZZjTO6OOTW28/TXU8c6kRIhc9//uR8CS4SWC+f0LbB0NRRd1NkyEOjsciwWtCDOEiGeGoTlg11VaMQxsJiGQzJioWAinOsEodwcfHsEsNmK7iGwS3Wwaf3Aw1yozIVHdYz6PzfBz3tmkXAxV2ZL8xzO33C0hgrpSvDIaDklSuZOiAX39dOvF1eOi1QOr82ZQTukUzQ/0rKco4oTeld10ejxMfGxaqJAZFFn60CgWKTsjeVYgzSe9CngxRQLGEkmCYjDlUh13hwDTTIx077ySjGYBMcuea/58lMQMqKAOp8jZPlJSFm+lOIr8Y0z1JnWxI/1YAxUaQ7L9yVp/bdsUXjRydqriYhXC9h2APlsgvgWs862sryKqgMqTaSMttErely/8EI9HtEvuECPNN2TA47372au2GF6/+6gWgP7K0trzzPDTFeTKrCKlumHf1S/5/bJPmGcjqN9yWwgX5zy/aVl4MdIM0nrnzlQ+9eD7Dvvl7pOISWZkh3W3iHBQMiBve+wer0DCKN3QJKw1DvsyAA6/ZtSrn8KqMPPr+AGKD/TIprjP0Qw0qz3VZvuT3N+dM+p9/zIOW36hgh7nqf0+T1+unQDIRuW8hS+OqMcv/Emp0vuef6LjZKYcr1r1dRB+iiN8t9dYr14aATXf1XX/6nUSqHIfCUVks8dWiVkE5H8xOvRDUNfYp6cUoOyhu+y/7+zqwGSo6rWffv27Z7u+due3p2Z3Zmd3dnZmc1mM7Ob3exOJr+ThJhdErLJQmUhL88sSh4vATEkWiFWlKkErBISiVKiCCSb0pIqNFEURX1IVniYIgWWpixNUe/JEtGSilIKVaCY6XjPud0zPRtUZH+6b//ec293n3vu+flOxMrkNa3ZeLJ9QKZj1dUYtlTWA0Ha4jfssuGnvQvCC5O51ZalBpfNX7ELQDNSZHtcHPUbZMbw836r07bOsU3/K+ooBHKqTpZo1UG+7BFfXwskmI3wA8RNuFy3dvYRs9YQ/bqOd29I8JfMkFWFdnMeGzBbqd9SfU3+3M2+Zf3ml37/X+tk0lpdy1vpc9sb0PvcFpPewru12N7KmB6UPzHR2y0zqgSWpjsWNZcGCHlAJqTJ/sNaK0bu9zf7nY5p9pMHwG7P39UZ/q52S3n0aruG900PKDjcpIJOHzkubmiaBxt+TQuaTeOokDHTNZmsmIGU2cNDIGK30Kf3M31fJFSdEQFdYrIgiTUfO6tlRxO2w37dLI0uaeLspSJ27YiYpXXt23VlMyVrvqdNu/zHOzmJhLay047u6872TKadVGypvh35vPZxheF457YT/NdWIybfv2gil9UJ4usDcH6IME+5BxtHi/+kXfJ+Vn0xU1CVBH/wTEmQP/INmmjGjSneqOtk6R+2SPmeZh9UCxkrobA8LD3lH1a0/e4866f0UfkNyZRaRGbPmAX2Zy5ngS8n6dEJPXbpHT1MlpGg753PaCZd9Qcfsb85ah8lvyebySOKblRHdB/d+ZCm6G99mEXsX1TkxbbP019hzpXj6FHe6OGXo2kzzWJFK01XoOGyK9fgkVGo8o/OXjlW+X7V/hTiEE6MyDNud8n8lOqMLM3e+f/2M0TAGo6IuVSt3riUurJW5lbG0kVeeUOV1YhTD7nTtitXV77fWN+sqOVtrBNlV3eOJOYdw/hWiDTPczIUyUWvmO86arJaJI2L4wZUytLG0atuTXZ0tO9aO/owFFOp9l1HNnrTH3zI1dqudArb+WuAhBJOKJVSqV1r1z2ybi1ee4u4zZKGmehz+IVkko42+Tkx5L9Lmza8zzZRyNuHlqS6OZSLe++rdTeuW17qUvV4K0tef9NkuxqP+1hm8fL33s5ubGe2296R71sXjPt9wdKq1SV0WR+dX3jXZ/l+261hgvEUqRmARKL49/dU1y1fAu2Oq4kbbppMond+ZvGyf6PdCbF6OD9/NNDq1wOl1dBsfytvdl7ITlxeos+gLhG+VCmLfigqRmtnM8NDPeaQSZ+2N6kmszcpuk6ndN3eVuY/cXnW56t2+sKEhHeXy5iyhN/vMO/HvbwfQ1ISNVmYgSEs894DrZrQreoE3Tu02tAIaoxDp2h+AfvlSwvy9OShY+eU0iDRiW+wRM8dK43JbNXAko0yGaMSPXVoxW0LFH7ibSsOnVqjnDt2zaeH7HeINvTpax4595S8ccnAKkavLqEySa7RE0RMi4b6qVt5EaJ9GqpMsfLAknHgpqUxWp5Th/2DgTKjYyVgt+OQ1avOcwBTMC8txLnElZynKHDVC4S5mHL4jkA/D6fFbyND2kOHugF/qzivbzHp0jV7WtPVu269SyVSBTPMwH8jl3opO0jJSB9MSZdcBJi4AfiZ7oQfxGt1aAXcig4+uxyURkAPTkzAzZlDsbAAizk1aEvFIXDnz6ZbOLEtaUDf5PKyRDu9ZL/QPUTlItJQyo3cpeoamQLCyT0uzRXAKIHZl5f0Ch3M9i3F1hZnOdFA/cL+geOdU/xX8owpupNPWiKcirrvPOIomhYnqchJozOXwL2DOu4SVVjPVES3yZWy8Lt4yHb8MAjfj7VIHpkmXMtbfWVkOGRi4j1AeDdo/PlBJ4g71SukEo5hZdHgijwzx3uj+mPC6Sjbs6JiWeq8fIbO0iKvEeyG3jDURiCDISI25sgfLZDksR0zU3GOs5xkPKEFMsQiCLdDt0CE81wVHd2hG6a0sBG4uSkXNByHfwrqjF81XgUFEaA5KxzkQxHenP+8mpGA1tqkbwqwpmDTp8ChXhI38egSO6SV6JEiEPSE963phht7+tb9OhxkAtNFKHDcmmkug/rFngIVEIUw+5UFaGwUQtQQ8HUE48aoiHkXOpbOOZAAuohkx3l2WSxFVPuPmRIMqUbYH0rlTEVWjSYW8NFAXzzp85tUXliY3BnujPs0plCqhlZTCCCYxjAc6CYn+GKmd+TSK7Uuk9wOtG+RLTWsU9aciwZowAopRtTXsqKVc8lYx9Du/knarGma6vOzYAH9BI/TV+iN/J3cKR2CMQnUrUsxFVxzB1qS+eN2QCnDiOWP9kV8PfoRp4R3xXLhOIZTftfmqMHk17E88iOINoO593AC2JOjMcwo1yE0S8IBVXSsLCkBbYuV2BeKWBOqoqgTViR0oM2a0AK+gDZhtd0RtKwtcGCLZQX3JqwtWkDJpSb38o6ZTCYneefcMZHakJo4wHdcm0xeCzu2pF6+UQ2rthFgqsInHPZrqqkdYYTJ1B+gaXGvOzyVHPDWvg8r8SFZe0XtZaxo7ySvaHJfvaIDWPMdSIodH+UVXNR5HYYqE/t/+Mj3JTXEZMJYPY53PdqS0pCFRmgVEL6m3zUEilyc2fQwpC7WWBaSZ7XjwZa5X6ngnq77suaoe2VwLk9UcFERIrxY2c+TIzKLBau/lVnuA2G103UfrqIGV645EFdRlTlI0KiPTtik7DGqvHKTyoJ+dvDpYGeuybyJXyDedff7dYpl572VeoY9uN7CDjQubZP+W/q4QGtyJ6oe8OBM0bNh1RzrvVir7uS2kY8y7BFhpowWh9zZcHO04QBnIS6Z1Tfq8euzbjQXX07U21QtX9EmESBUfVKIubfVooBIQexxfbjF37RY4TfrBbtwetsDonEn55zIPjkXEReV63saMD1aeC+i34rWkzbxpfAkknJU2viKhAhFfcIICpwhEqUVWab2o5HQ4xcV5eLjfBmx93zhjEK/cw/viA+Gn0ls2J3UuuNq191bgzGfn0wTQraBD5Q4my9DEbuinPnCkWfCoOm/5zvyY223bTDVpLn1YIfib4vBSMyJnUYMOS619ZK6elGEm0FIwUrM1il0zRT4gabSyqVZ7BcKz6C602jSFN/zRkz/xm8xAPodvc049YTugoxUBSv0W5Z2yud78C2DWK1++01d1h9+2CfmpIsuP0FfoBtwrJAco/vIIsTJUpuFFlnkcATBvEdkiO+pZ3WEcwbFFZx8uhzMcWtKpaUPLj2+eDGokdevP77xxfH16//qFgqgMs57TiHXgpHuKr5dKh1b+uAyOD7+wvjx9evHX9x4e61UgICwvPcsfN6rSCc9TV52/H8Ex4C3OntFAQZImFDa+8Ra/qJYk5cdDygyZ+3IJvCcLvHn1C7Nl4qALnDF08p6lcOagAAWyMVMpKerHalvND5Je4/4Ln7qqIIHGzYbHudR/hLejqzkvhDadn4OGz93zEsFtDifE1vkz3heOBgRNoTdl4/So3Q3l+fiqFfhzXOBs/Gpyg4EQrNMvWZoL5SpRDYpP7rvvh8p5JPWIuvxbysXHnvsgvLtX3sVIsKkg8sBsvmpo6cV5fTRp+yDlvU4afvo119VlFe//lH7dyTg4Zmr3Cv4EvtduXwXvUQPOBhgvUBtDQWspsuyRqRiTupRJS0qxXiBb/KCKiSeApGfTmQyMN3eCdOyTOYrZ0mQMfvNs2ftNxkjwbPn7QuqSlLnz5OUqtoXbENeppzYv/8EOU3ya/L8jzjr6qtwuufyrOey8/w25MlPnKD0hPimOjgvv8B5OfBxCWAFtB4RX+EyZ4SIKo4g7jiftw8VM11OlG8fOuGEEP+5WOPbUcyHN4Ip1uRn262T5V7+ofFHCwNTwuidOmm1a4nYxO6JWELT8j3zhtqG5vXkteSgdTIkh6bChSgYzEBSao42xbWyzgInrUHKBfqzlV7DCtofQS5/P39vjN7K2RYSGhwMleNx04zHY9HnIwsilWY9YD/pWN7GAorMWW4kGz4bjYm8FJ2Xv8Vl6etrOIOb+AgGmeznQHjPhfRmc7bJnG3qBuZ2aQzH9PQQ7ugHxwTEEAcBoGUQUj62mENuVlSQ2TcJ8bNhQT5bK9r14udhuqRrCrWndZ2cmdV031/06ttWE6l0lWTTJFKoCU++VBHyZe2GM/XiVL1IOuvl6s90TX5L0+VvKUb1hwhcfrPOHqr+ie+ainT4ZsKZ7IwxrSdNEc+ELhFop33KwTQZkXZwSeBuz/sPwTuQriODsji6lms5x5UcVSgr5OECxfcIg8TRwz+mityiIjcFhDWhuoTvRC4unGjB9wo6D7UIXbm527Kj++2//StpI8Uo0QIsFKLUalmUMxOmoTDWGlz80uEPfKzHIplSoSnUZnZT0uqPBtrHe+cNELI0c/jaR95cGU4wlYVixfnZtV3p1qAWs5IySd673SBf5iwAuu4jRylIBspPHoAtGIT5SFZxnSbf6Pzq3v42haq64g+pWn/7akI6+tq2drVPdh18LOb3dcZVczhvaZF0NLiepIOWGmpLd17TVViYDATaTn8uuz3dtyuzbLiwYP54eyjeFJUp+9DhBCV/5lwIuPJR/CIe+AnUiyN6xMUMm+byxZQUlDpxHq8qmsl5Duc8Zq4btnLdXMikTqJ4gqlVtJDI34mOzZhcDTjpBru62SQjN9xARszN9t9INGy/PTpqvx2e9x9TO+LxHYWF2+bZkzca/gCnjbAjmqnyGxKZd3LQsFmYThmHDXvqVvsvgQDx3UqmjcPVs6OvhcOvjZJbAr0L87JciMXnB+zzYxrndjILswcZ0chVMp9gUVnxXWRE8KtHpTG6TX6Oj3GAfBRFt6c6qBhz1uJAgZDXIZhpEQzanGW+BC4s8u1uiSzHg0EjQyb4t7QI5AH7NyQHRub/cwv2s3AomDF43V+T1tDruRwUAe8nq4ZdVgvPygpjXB3V7EyI00NSAFRmv2C0Gfb/chEoTD4IGDjPAlHuUbKGF+0LiKI8rPODmhXxfwwKCJTjHHJtvSf4t9bCZx2AxNQQHTQI4UEAje3FofVI3/SL93LJuSb6jVaGj+gJ69LLXP7jQiMuyev2r5G/dvHR2bh38f3X1UTLfO8RTgV5wj2VL7/rsIFGupa/J7r+GWT6e6FzD694N5C6mxf2vCdqa6fXCpL0d2sYiU4AeNp9kD1OAzEQhZ/zByQSQiCoXVEA2vyUKRMp9Ailo0g23pBo1155nUg5AS0VB6DlGByAGyDRcgpelkmTImvt6PObmeexAZzjGwr/3yXuhBWO8ShcwREy4Sr1F+Ea+V24jhY+hRvUf4SbuFUD4RYu1BsdVO2Eu5vSbcsKZxgIV3CKJ+Eq9ZVwjfwqXMcVPoQb1L+EmxjjV7iFa2WpDOFhMEFgnEFjig3jAjEcLJIyBtahOfRmEsxMTzd6ETubOBso71dilwMeaDnngCntPbdmvkon/mDLgdSYbh4FS7YpjS4idCgbXyyc1d2oc7D9nu22tNi/a4E1x+xRDWzU/D3bM9JIbAyvkJI18jK3pBJTj2hrrPG7ZynW814IiU68y/SIx5o0dTr3bmniwOLn8owcfbS5kj33qBw+Y1kIeb/dTsQgil2GP5PYcRkAAAB42m1VB3fbNhD250iilmM7cdKme2+1kZ3Rvdt0N226lwqSkASJJGgOyVT33nu36d57j/f653oAKMltyvckfHcH4A6Huw8zszPmq878//c3/TAzi1lsQAFFlGChjAqqqKGOOWzEPBawiE3YjCVswVYchIOxDYfgUByGw3EEjsRROBrH4Fgch+NxAk7ESTgZp+BUnIYGTscZ2I4mlrGCHdiJXdiNM3EWzsY5OBfn4XxcMLMfF+IiXIxLcCkuw+XYgytwJa7C1bgG1+I6XI+9uAE3Yh9uws24BbfiNtyOO3An7sLduAct3AsGGw5ccLTRQRcCPfThwUcAiRCriBAjQYoBhlhDhhHuw/14AA/iITyMR/AoHsPjeAJP4ik8jWfwLJ7D83gBL+IlvIxX8Cpew+t4A2/iLbyNd/Au3sN+vI8P8CE+wsf4BJ/iM3yOL/AlvsLX+Abf4jt8jx/wI37Cz/gFv+I3/I4/8Cf+qg3XHBa5DUeGWaXP26lGpTXBRkyU2zwgFHRmV1eXkqFsuMLnQSxkwDya5/JC6LFsIemKoNGS7bZweCuJWG3EgmEad9NeulIZrtkdGXR6aS3kQSeT6WrKglIs0ziVBV/4rN5LR13SOV1yVPBlxC1jXS7KyOVRNVYGR02xIt6OeNytDrmIuyKjfa1Q0OaCWasUp8tkKZGuHAY0eLydWImMRKeblEdqjy6TxYFwuawIRwaNhMdJdYKaU7g8hStTuGMKd07hrincXZtutr3WToepDrrD1mHbSlhAZ2P5aJccJtopM4O9wWeOReeIpHBro64Y8kBdR2Pdzuu9nFl26fQJ8/ol5omQZWVPxMlA8GEpoXSsigJ3RWINRCxsj5eSNCTtXDsSnFLlum3heZWJZGUs6NF2VceTTr+ljEUN5xzph2nCI60rj6U5ESS8EzHPTPWYzb2q/jcKnwmvWVH/Wq75LGAdrnHJYMvncUxjPR+1rU515InACFYubIy4GzKnzxOtrkzEpTYldY2ipopYowSPulQTW8bKiUYtWjxAa3UI2aJZM+Oy9pjjEtUU1YtlhmbNjGYK4YCESqKKUJ9VI6pKpdYHNLCkXfGljIYDghwr/x3kAdq6LZhUGmWuhlyGVNjKhYHlsdlyupx6VVZdii5M9RQDLVUkLjUdJaCfCku1ozfg6lr9NBBJplM6keodqctVeymPhWLMpM/K1Iv6CHU67yTo8ligVpVpZsIzcN60sseFr0OqrZPrMY8GijJ0UnOhGnMqU1MxCW05Mhm2clzUZkUJkVlX1HAxzuKE+2FEtWlKpL5eQzflm+nVNaH6UEdoYEHZFoi1gthjCVFb7nuqKLjCThe5Rx0Wi7gx4FEiHKayS/2czmmCJF5b0WmcSAaNiMbqGvVEU+dqLIyBrjTi2sKQDqqYM8mzauV4XpVbyIKW4kFikbpNld/KSaJCDaqDbC7KMJSxOWXLU6RXzzVa2JalATGyvqZh6om0ofyrwln4r6XeE8plm8XKuyGNyWzLyM1iJmwWUJMHmbDsVI9bOxSxbo1GrLiEyb7ivHkqe7q6yRYlI9cVfZNf4dHELeuFycxqJgJF3MTtm6dwYp5XTNgi6sr5Y2Es0xsR21L2c0WiyFJnabNWOFJQW0Q6NQGfMzrmKRqM5pJUdVTDVsSaLuTSSPdWkKT65VDL+gap52rTZJJ5yGhdWRv37N1X10D4rTZzuFkS90VQM4iewohv1HggRRjSFfDc1BXccxd0jai3uMv06TdphX4QxyqL2kn1vepu6vJ/AME0OTgAAAAB//8AAgABAAAADAAAABYAAAACAAEAAwC6AAEABAAAAAIAAAAAeNpjYGBgZACCq0vUOUD0zeLLgTAaAEEzBooAAA==) format('woff')",
      "fontWeight": "normal",
      "fontStyle": "normal"
    }
  ],
  "m-icon": {
    "fontFamily": "uniicons",
    "fontSize": "24",
    "fontWeight": "normal",
    "fontStyle": "normal",
    "lineHeight": 1,
    "display": "inline-block",
    "textDecoration": "none",
    "WebkitFontSmoothing": "antialiased"
  },
  "m-icon-contact": {
    "content:before": "'\\e100'"
  },
  "m-icon-person": {
    "content:before": "'\\e101'"
  },
  "m-icon-personadd": {
    "content:before": "'\\e102'"
  },
  "m-icon-contact-filled": {
    "content:before": "'\\e130'"
  },
  "m-icon-person-filled": {
    "content:before": "'\\e131'"
  },
  "m-icon-personadd-filled": {
    "content:before": "'\\e132'"
  },
  "m-icon-phone": {
    "content:before": "'\\e200'"
  },
  "m-icon-email": {
    "content:before": "'\\e201'"
  },
  "m-icon-chatbubble": {
    "content:before": "'\\e202'"
  },
  "m-icon-chatboxes": {
    "content:before": "'\\e203'"
  },
  "m-icon-phone-filled": {
    "content:before": "'\\e230'"
  },
  "m-icon-email-filled": {
    "content:before": "'\\e231'"
  },
  "m-icon-chatbubble-filled": {
    "content:before": "'\\e232'"
  },
  "m-icon-chatboxes-filled": {
    "content:before": "'\\e233'"
  },
  "m-icon-weibo": {
    "content:before": "'\\e260'"
  },
  "m-icon-weixin": {
    "content:before": "'\\e261'"
  },
  "m-icon-pengyouquan": {
    "content:before": "'\\e262'"
  },
  "m-icon-chat": {
    "content:before": "'\\e263'"
  },
  "m-icon-qq": {
    "content:before": "'\\e264'"
  },
  "m-icon-videocam": {
    "content:before": "'\\e300'"
  },
  "m-icon-camera": {
    "content:before": "'\\e301'"
  },
  "m-icon-mic": {
    "content:before": "'\\e302'"
  },
  "m-icon-location": {
    "content:before": "'\\e303'"
  },
  "m-icon-mic-filled": {
    "content:before": "'\\e332'"
  },
  "m-icon-speech": {
    "content:before:before": "'\\e332'"
  },
  "m-icon-location-filled": {
    "content:before": "'\\e333'"
  },
  "m-icon-micoff": {
    "content:before": "'\\e360'"
  },
  "m-icon-image": {
    "content:before": "'\\e363'"
  },
  "m-icon-map": {
    "content:before": "'\\e364'"
  },
  "m-icon-compose": {
    "content:before": "'\\e400'"
  },
  "m-icon-trash": {
    "content:before": "'\\e401'"
  },
  "m-icon-upload": {
    "content:before": "'\\e402'"
  },
  "m-icon-download": {
    "content:before": "'\\e403'"
  },
  "m-icon-close": {
    "content:before": "'\\e404'"
  },
  "m-icon-redo": {
    "content:before": "'\\e405'"
  },
  "m-icon-undo": {
    "content:before": "'\\e406'"
  },
  "m-icon-refresh": {
    "content:before": "'\\e407'"
  },
  "m-icon-star": {
    "content:before": "'\\e408'"
  },
  "m-icon-plus": {
    "content:before": "'\\e409'"
  },
  "m-icon-minus": {
    "content:before": "'\\e410'"
  },
  "m-icon-circle": {
    "content:before": "'\\e411'"
  },
  "m-icon-checkbox": {
    "content:before:before": "'\\e411'"
  },
  "m-icon-close-filled": {
    "content:before": "'\\e434'"
  },
  "m-icon-clear": {
    "content:before:before": "'\\e434'"
  },
  "m-icon-refresh-filled": {
    "content:before": "'\\e437'"
  },
  "m-icon-star-filled": {
    "content:before": "'\\e438'"
  },
  "m-icon-plus-filled": {
    "content:before": "'\\e439'"
  },
  "m-icon-minus-filled": {
    "content:before": "'\\e440'"
  },
  "m-icon-circle-filled": {
    "content:before": "'\\e441'"
  },
  "m-icon-checkbox-filled": {
    "content:before": "'\\e442'"
  },
  "m-icon-closeempty": {
    "content:before": "'\\e460'"
  },
  "m-icon-refreshempty": {
    "content:before": "'\\e461'"
  },
  "m-icon-reload": {
    "content:before": "'\\e462'"
  },
  "m-icon-starhalf": {
    "content:before": "'\\e463'"
  },
  "m-icon-spinner": {
    "content:before": "'\\e464'"
  },
  "m-icon-spinner-cycle": {
    "content:before": "'\\e465'"
  },
  "m-icon-search": {
    "content:before": "'\\e466'"
  },
  "m-icon-plusempty": {
    "content:before": "'\\e468'"
  },
  "m-icon-forward": {
    "content:before": "'\\e470'"
  },
  "m-icon-back": {
    "content:before": "'\\e471'"
  },
  "m-icon-left-nav": {
    "content:before:before": "'\\e471'"
  },
  "m-icon-checkmarkempty": {
    "content:before": "'\\e472'"
  },
  "m-icon-home": {
    "content:before": "'\\e500'"
  },
  "m-icon-navigate": {
    "content:before": "'\\e501'"
  },
  "m-icon-gear": {
    "content:before": "'\\e502'"
  },
  "m-icon-paperplane": {
    "content:before": "'\\e503'"
  },
  "m-icon-info": {
    "content:before": "'\\e504'"
  },
  "m-icon-help": {
    "content:before": "'\\e505'"
  },
  "m-icon-locked": {
    "content:before": "'\\e506'"
  },
  "m-icon-more": {
    "content:before": "'\\e507'"
  },
  "m-icon-flag": {
    "content:before": "'\\e508'"
  },
  "m-icon-home-filled": {
    "content:before": "'\\e530'"
  },
  "m-icon-gear-filled": {
    "content:before": "'\\e532'"
  },
  "m-icon-info-filled": {
    "content:before": "'\\e534'"
  },
  "m-icon-help-filled": {
    "content:before": "'\\e535'"
  },
  "m-icon-more-filled": {
    "content:before": "'\\e537'"
  },
  "m-icon-settings": {
    "content:before": "'\\e560'"
  },
  "m-icon-list": {
    "content:before": "'\\e562'"
  },
  "m-icon-bars": {
    "content:before": "'\\e563'"
  },
  "m-icon-loop": {
    "content:before": "'\\e565'"
  },
  "m-icon-paperclip": {
    "content:before": "'\\e567'"
  },
  "m-icon-eye": {
    "content:before": "'\\e568'"
  },
  "m-icon-arrowup": {
    "content:before": "'\\e580'"
  },
  "m-icon-arrowdown": {
    "content:before": "'\\e581'"
  },
  "m-icon-arrowleft": {
    "content:before": "'\\e582'"
  },
  "m-icon-arrowright": {
    "content:before": "'\\e583'"
  },
  "m-icon-arrowthinup": {
    "content:before": "'\\e584'"
  },
  "m-icon-arrowthindown": {
    "content:before": "'\\e585'"
  },
  "m-icon-arrowthinleft": {
    "content:before": "'\\e586'"
  },
  "m-icon-arrowthinright": {
    "content:before": "'\\e587'"
  },
  "m-icon-pulldown": {
    "content:before": "'\\e588'"
  },
  "m-icon-scan": {
    "content:before": "\"\\e612\""
  },
  "tui-icon": {
    "fontFamily": "\"thoruiFont\"",
    "fontSize": "30",
    "fontStyle": "normal",
    "WebkitFontSmoothing": "antialiased",
    "MozOsxFontSmoothing": "grayscale",
    "display": "inline-block",
    "color": "#999999",
    "verticalAlign": "middle",
    "lineHeight": 1,
    "paddingTop": "-1",
    "marginBottom": "1"
  },
  "tui-icon-friendadd": {
    "content:before": "\"\\e6ca\""
  },
  "tui-icon-friendadd-fill": {
    "content:before": "\"\\e6c9\""
  },
  "tui-icon-service": {
    "content:before": "\"\\e664\""
  },
  "tui-icon-service-fill": {
    "content:before": "\"\\e665\""
  },
  "tui-icon-explore": {
    "content:before": "\"\\e666\""
  },
  "tui-icon-explore-fill": {
    "content:before": "\"\\e667\""
  },
  "tui-icon-wealth": {
    "content:before": "\"\\e668\""
  },
  "tui-icon-wealth-fill": {
    "content:before": "\"\\e669\""
  },
  "tui-icon-exchange": {
    "content:before": "\"\\e638\""
  },
  "tui-icon-refresh": {
    "content:before": "\"\\e640\""
  },
  "tui-icon-search": {
    "content:before": "\"\\e622\""
  },
  "tui-icon-search-2": {
    "content:before": "\"\\e634\""
  },
  "tui-icon-todown": {
    "content:before": "\"\\e64f\""
  },
  "tui-icon-toleft": {
    "content:before": "\"\\e650\""
  },
  "tui-icon-toright": {
    "content:before": "\"\\e651\""
  },
  "tui-icon-video": {
    "content:before": "\"\\e657\""
  },
  "tui-icon-people": {
    "content:before": "\"\\e736\""
  },
  "tui-icon-people-fill": {
    "content:before": "\"\\e735\""
  },
  "tui-icon-community": {
    "content:before": "\"\\e741\""
  },
  "tui-icon-community-fill": {
    "content:before": "\"\\e740\""
  },
  "tui-icon-ios": {
    "content:before": "\"\\e66a\""
  },
  "tui-icon-android": {
    "content:before": "\"\\e66c\""
  },
  "tui-icon-square": {
    "content:before": "\"\\e720\""
  },
  "tui-icon-square-fill": {
    "content:before": "\"\\e721\""
  },
  "tui-icon-square-selected": {
    "content:before": "\"\\e722\""
  },
  "tui-icon-close": {
    "content:before": "\"\\e725\""
  },
  "tui-icon-close-fill": {
    "content:before": "\"\\e724\""
  },
  "tui-icon-shut": {
    "content:before": "\"\\e723\""
  },
  "tui-icon-plus": {
    "content:before": "\"\\e727\""
  },
  "tui-icon-add": {
    "content:before": "\"\\e726\""
  },
  "tui-icon-add-fill": {
    "content:before": "\"\\e728\""
  },
  "tui-icon-reduce": {
    "content:before": "\"\\e729\""
  },
  "tui-icon-about": {
    "content:before": "\"\\e72b\""
  },
  "tui-icon-about-fill": {
    "content:before": "\"\\e72a\""
  },
  "tui-icon-explain": {
    "content:before": "\"\\e72d\""
  },
  "tui-icon-explain-fill": {
    "content:before": "\"\\e72c\""
  },
  "tui-icon-check": {
    "content:before": "\"\\e72e\""
  },
  "tui-icon-circle": {
    "content:before": "\"\\e72f\""
  },
  "tui-icon-circle-fill": {
    "content:before": "\"\\e732\""
  },
  "tui-icon-circle-selected": {
    "content:before": "\"\\e733\""
  },
  "tui-icon-star": {
    "content:before": "\"\\e737\""
  },
  "tui-icon-star-fill": {
    "content:before": "\"\\e734\""
  },
  "tui-icon-revoke": {
    "content:before": "\"\\e738\""
  },
  "tui-icon-shop": {
    "content:before": "\"\\e73a\""
  },
  "tui-icon-shop-fill": {
    "content:before": "\"\\e739\""
  },
  "tui-icon-order": {
    "content:before": "\"\\e73b\""
  },
  "tui-icon-feedback": {
    "content:before": "\"\\e73c\""
  },
  "tui-icon-share": {
    "content:before": "\"\\e75c\""
  },
  "tui-icon-share-fill": {
    "content:before": "\"\\e75b\""
  },
  "tui-icon-more": {
    "content:before": "\"\\e633\""
  },
  "tui-icon-more-fill": {
    "content:before": "\"\\eb98\""
  },
  "tui-icon-strategy": {
    "content:before": "\"\\e73f\""
  },
  "tui-icon-cart": {
    "content:before": "\"\\e743\""
  },
  "tui-icon-cart-fill": {
    "content:before": "\"\\e742\""
  },
  "tui-icon-sweep": {
    "content:before": "\"\\e74b\""
  },
  "tui-icon-screen": {
    "content:before": "\"\\e74c\""
  },
  "tui-icon-clock": {
    "content:before": "\"\\e750\""
  },
  "tui-icon-clock-fill": {
    "content:before": "\"\\e74f\""
  },
  "tui-icon-home": {
    "content:before": "\"\\e752\""
  },
  "tui-icon-home-fill": {
    "content:before": "\"\\e751\""
  },
  "tui-icon-category": {
    "content:before": "\"\\e754\""
  },
  "tui-icon-category-fill": {
    "content:before": "\"\\e753\""
  },
  "tui-icon-notice": {
    "content:before": "\"\\e759\""
  },
  "tui-icon-notice-fill": {
    "content:before": "\"\\e758\""
  },
  "tui-icon-like": {
    "content:before": "\"\\e761\""
  },
  "tui-icon-like-fill": {
    "content:before": "\"\\e760\""
  },
  "tui-icon-bottom": {
    "content:before": "\"\\e76a\""
  },
  "tui-icon-top": {
    "content:before": "\"\\e76c\""
  },
  "tui-icon-towardsright": {
    "content:before": "\"\\e778\""
  },
  "tui-icon-towardsright-fill": {
    "content:before": "\"\\e777\""
  },
  "tui-icon-towardsleft": {
    "content:before": "\"\\e77a\""
  },
  "tui-icon-camera": {
    "content:before": "\"\\e77f\""
  },
  "tui-icon-camera-fill": {
    "content:before": "\"\\e77e\""
  },
  "tui-icon-camera-add": {
    "content:before": "\"\\e780\""
  },
  "tui-icon-loading": {
    "content:before": "\"\\e781\""
  },
  "tui-icon-wifi": {
    "content:before": "\"\\e783\""
  },
  "tui-icon-agree": {
    "content:before": "\"\\e794\""
  },
  "tui-icon-agree-fill": {
    "content:before": "\"\\e793\""
  },
  "tui-icon-mobile": {
    "content:before": "\"\\e655\""
  },
  "tui-icon-qrcode": {
    "content:before": "\"\\e605\""
  },
  "tui-icon-coupon": {
    "content:before": "\"\\e600\""
  },
  "tui-icon-back": {
    "content:before": "\"\\e7ed\""
  },
  "tui-icon-transport": {
    "content:before": "\"\\e882\""
  },
  "tui-icon-transport-fill": {
    "content:before": "\"\\e883\""
  },
  "tui-icon-send": {
    "content:before": "\"\\e893\""
  },
  "tui-icon-bankcard": {
    "content:before": "\"\\e937\""
  },
  "tui-icon-bankcard-fill": {
    "content:before": "\"\\e936\""
  },
  "tui-icon-eye": {
    "content:before": "\"\\e6cf\""
  },
  "tui-icon-calendar": {
    "content:before": "\"\\eb93\""
  },
  "tui-icon-picture": {
    "content:before": "\"\\e6c7\""
  },
  "tui-icon-oppose": {
    "content:before": "\"\\e815\""
  },
  "tui-icon-oppose-fill": {
    "content:before": "\"\\e814\""
  },
  "tui-icon-pie": {
    "content:before": "\"\\eb95\""
  },
  "tui-icon-polygonal": {
    "content:before": "\"\\eb96\""
  },
  "tui-icon-histogram": {
    "content:before": "\"\\eb99\""
  },
  "tui-icon-down": {
    "content:before": "\"\\ec0b\""
  },
  "tui-icon-up": {
    "content:before": "\"\\ec0c\""
  },
  "tui-icon-narrow": {
    "content:before": "\"\\ec13\""
  },
  "tui-icon-enlarge": {
    "content:before": "\"\\ec14\""
  },
  "tui-icon-pwd": {
    "content:before": "\"\\e626\""
  },
  "tui-icon-ellipsis": {
    "content:before": "\"\\e76b\""
  },
  "tui-icon-location": {
    "content:before": "\"\\e7f2\""
  },
  "tui-icon-delete": {
    "content:before": "\"\\e608\""
  },
  "tui-icon-card": {
    "content:before": "\"\\e91c\""
  },
  "tui-icon-card-fill": {
    "content:before": "\"\\e91b\""
  },
  "tui-icon-alarm": {
    "content:before": "\"\\e6e9\""
  },
  "tui-icon-alarm-fill": {
    "content:before": "\"\\e6e8\""
  },
  "tui-icon-computer": {
    "content:before": "\"\\e6ec\""
  },
  "tui-icon-computer-fill": {
    "content:before": "\"\\e6eb\""
  },
  "tui-icon-position": {
    "content:before": "\"\\e8fe\""
  },
  "tui-icon-position-fill": {
    "content:before": "\"\\e8ff\""
  },
  "tui-icon-member": {
    "content:before": "\"\\e704\""
  },
  "tui-icon-member-fill": {
    "content:before": "\"\\e703\""
  },
  "tui-icon-label": {
    "content:before": "\"\\e707\""
  },
  "tui-icon-label-fill": {
    "content:before": "\"\\e708\""
  },
  "tui-icon-mail": {
    "content:before": "\"\\e70b\""
  },
  "tui-icon-mail-fill": {
    "content:before": "\"\\e70c\""
  },
  "tui-icon-manage": {
    "content:before": "\"\\e70e\""
  },
  "tui-icon-manage-fill": {
    "content:before": "\"\\e70d\""
  },
  "tui-icon-message": {
    "content:before": "\"\\e70f\""
  },
  "tui-icon-message-fill": {
    "content:before": "\"\\e710\""
  },
  "tui-icon-offline": {
    "content:before": "\"\\e716\""
  },
  "tui-icon-offline-fill": {
    "content:before": "\"\\e715\""
  },
  "tui-icon-redpacket": {
    "content:before": "\"\\e71e\""
  },
  "tui-icon-redpacket-fill": {
    "content:before": "\"\\e71d\""
  },
  "tui-icon-bag": {
    "content:before": "\"\\e756\""
  },
  "tui-icon-bag-fill": {
    "content:before": "\"\\e755\""
  },
  "tui-icon-setup": {
    "content:before": "\"\\e75a\""
  },
  "tui-icon-setup-fill": {
    "content:before": "\"\\e757\""
  },
  "tui-icon-news": {
    "content:before": "\"\\e75e\""
  },
  "tui-icon-news-fill": {
    "content:before": "\"\\e75d\""
  },
  "tui-icon-time": {
    "content:before": "\"\\e764\""
  },
  "tui-icon-time-fill": {
    "content:before": "\"\\e75f\""
  },
  "tui-icon-voice": {
    "content:before": "\"\\e766\""
  },
  "tui-icon-voice-fill": {
    "content:before": "\"\\e765\""
  },
  "tui-icon-nodata": {
    "content:before": "\"\\e611\""
  },
  "tui-icon-link": {
    "content:before": "\"\\eb97\""
  },
  "tui-icon-edit": {
    "content:before": "\"\\e69a\""
  },
  "tui-icon-unseen": {
    "content:before": "\"\\e6a2\""
  },
  "tui-icon-arrowup": {
    "content:before": "\"\\e658\""
  },
  "tui-icon-arrowleft": {
    "content:before": "\"\\e659\""
  },
  "tui-icon-arrowdown": {
    "content:before": "\"\\e65a\""
  },
  "tui-icon-arrowright": {
    "content:before": "\"\\e65b\""
  },
  "tui-icon-turningleft": {
    "content:before": "\"\\e65c\""
  },
  "tui-icon-turningright": {
    "content:before": "\"\\e65d\""
  },
  "tui-icon-turningup": {
    "content:before": "\"\\e65e\""
  },
  "tui-icon-turningdown": {
    "content:before": "\"\\e65f\""
  },
  "tui-icon-sina": {
    "content:before": "\"\\e662\""
  },
  "tui-icon-applets": {
    "content:before": "\"\\e673\""
  },
  "tui-icon-qq": {
    "content:before": "\"\\e604\""
  },
  "tui-icon-wechat": {
    "content:before": "\"\\e674\""
  },
  "tui-icon-moments": {
    "content:before": "\"\\e61e\""
  },
  "tui-icon-dingtalk": {
    "content:before": "\"\\e675\""
  },
  "tui-icon-alipay": {
    "content:before": "\"\\e677\""
  },
  "tui-icon-skin": {
    "content:before": "\"\\eb9e\""
  },
  "tui-icon-house": {
    "content:before": "\"\\eb9f\""
  },
  "tui-icon-download": {
    "content:before": "\"\\e602\""
  },
  "tui-icon-upload": {
    "content:before": "\"\\e63b\""
  },
  "tui-icon-kefu": {
    "content:before": "\"\\e601\""
  },
  "tui-icon-sport": {
    "content:before": "\"\\eba0\""
  },
  "tui-icon-gps": {
    "content:before": "\"\\eb9a\""
  },
  "tui-icon-shield": {
    "content:before": "\"\\eba3\""
  },
  "tui-icon-voipphone": {
    "content:before": "\"\\eba2\""
  },
  "tui-icon-wallet": {
    "content:before": "\"\\eb92\""
  },
  "tui-icon-attestation": {
    "content:before": "\"\\eb91\""
  },
  "tui-icon-addressbook": {
    "content:before": "\"\\eb90\""
  },
  "tui-icon-addmessage": {
    "content:before": "\"\\eb8f\""
  },
  "tui-icon-signin": {
    "content:before": "\"\\e643\""
  },
  "tui-icon-evaluate": {
    "content:before": "\"\\e642\""
  },
  "tui-icon-unreceive": {
    "content:before": "\"\\e641\""
  },
  "tui-icon-balloon": {
    "content:before": "\"\\e627\""
  },
  "tui-icon-partake": {
    "content:before": "\"\\e603\""
  },
  "tui-icon-listview": {
    "content:before": "\"\\e67b\""
  },
  "tui-icon-weather": {
    "content:before": "\"\\e694\""
  },
  "tui-icon-tool": {
    "content:before": "\"\\e61b\""
  },
  "tui-icon-imface": {
    "content:before": "\"\\eb9b\""
  },
  "tui-icon-deletekey": {
    "content:before": "\"\\e7b8\""
  },
  "tui-icon-fingerprint": {
    "content:before": "\"\\e66e\""
  },
  "tui-icon-warning": {
    "content:before": "\"\\e8eb\""
  },
  "tui-icon-soso": {
    "content:before": "\"\\e8da\""
  },
  "tui-icon-satisfied": {
    "content:before": "\"\\e8db\""
  },
  "tui-icon-dissatisfied": {
    "content:before": "\"\\e8dc\""
  },
  "tui-icon-pic": {
    "content:before": "\"\\e8d2\""
  },
  "tui-icon-pic-fill": {
    "content:before": "\"\\e8d3\""
  },
  "tui-icon-play": {
    "content:before": "\"\\e606\""
  }
}

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/*!****************************************************************************!*\
  !*** C:/Users/hxw/Documents/HBuilderProjects/xinwen/common/html-parser.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * HTML5 Parser By Sam Blowes
                                                                                                      *
                                                                                                      * Designed for HTML5 documents
                                                                                                      *
                                                                                                      * Original code by John Resig (ejohn.org)
                                                                                                      * http://ejohn.org/blog/pure-javascript-html-parser/
                                                                                                      * Original code by Erik Arvidsson, Mozilla Public License
                                                                                                      * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
                                                                                                      *
                                                                                                      * ----------------------------------------------------------------------------
                                                                                                      * License
                                                                                                      * ----------------------------------------------------------------------------
                                                                                                      *
                                                                                                      * This code is triple licensed using Apache Software License 2.0,
                                                                                                      * Mozilla Public License or GNU Public License
                                                                                                      *
                                                                                                      * ////////////////////////////////////////////////////////////////////////////
                                                                                                      *
                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License"); you may not
                                                                                                      * use this file except in compliance with the License.  You may obtain a copy
                                                                                                      * of the License at http://www.apache.org/licenses/LICENSE-2.0
                                                                                                      *
                                                                                                      * ////////////////////////////////////////////////////////////////////////////
                                                                                                      *
                                                                                                      * The contents of this file are subject to the Mozilla Public License
                                                                                                      * Version 1.1 (the "License"); you may not use this file except in
                                                                                                      * compliance with the License. You may obtain a copy of the License at
                                                                                                      * http://www.mozilla.org/MPL/
                                                                                                      *
                                                                                                      * Software distributed under the License is distributed on an "AS IS"
                                                                                                      * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the
                                                                                                      * License for the specific language governing rights and limitations
                                                                                                      * under the License.
                                                                                                      *
                                                                                                      * The Original Code is Simple HTML Parser.
                                                                                                      *
                                                                                                      * The Initial Developer of the Original Code is Erik Arvidsson.
                                                                                                      * Portions created by Erik Arvidssson are Copyright (C) 2004. All Rights
                                                                                                      * Reserved.
                                                                                                      *
                                                                                                      * ////////////////////////////////////////////////////////////////////////////
                                                                                                      *
                                                                                                      * This program is free software; you can redistribute it and/or
                                                                                                      * modify it under the terms of the GNU General Public License
                                                                                                      * as published by the Free Software Foundation; either version 2
                                                                                                      * of the License, or (at your option) any later version.
                                                                                                      *
                                                                                                      * This program is distributed in the hope that it will be useful,
                                                                                                      * but WITHOUT ANY WARRANTY; without even the implied warranty of
                                                                                                      * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                                                                                                      * GNU General Public License for more details.
                                                                                                      *
                                                                                                      * You should have received a copy of the GNU General Public License
                                                                                                      * along with this program; if not, write to the Free Software
                                                                                                      * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
                                                                                                      *
                                                                                                      * ----------------------------------------------------------------------------
                                                                                                      * Usage
                                                                                                      * ----------------------------------------------------------------------------
                                                                                                      *
                                                                                                      * // Use like so:
                                                                                                      * HTMLParser(htmlString, {
                                                                                                      *     start: function(tag, attrs, unary) {},
                                                                                                      *     end: function(tag) {},
                                                                                                      *     chars: function(text) {},
                                                                                                      *     comment: function(text) {}
                                                                                                      * });
                                                                                                      *
                                                                                                      * // or to get an XML string:
                                                                                                      * HTMLtoXML(htmlString);
                                                                                                      *
                                                                                                      * // or to get an XML DOM Document
                                                                                                      * HTMLtoDOM(htmlString);
                                                                                                      *
                                                                                                      * // or to inject into an existing document/DOM node
                                                                                                      * HTMLtoDOM(htmlString, document);
                                                                                                      * HTMLtoDOM(htmlString, document.body);
                                                                                                      *
                                                                                                      */
// Regular Expressions for parsing tags and attributes
var startTag = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/;
var endTag = /^<\/([-A-Za-z0-9_]+)[^>]*>/;
var attr = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g; // Empty Elements - HTML 5

var empty = makeMap('area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr'); // Block Elements - HTML 5
// fixed by xxx 将 ins 标签从块级名单中移除

var block = makeMap('a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video'); // Inline Elements - HTML 5

var inline = makeMap('abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var'); // Elements that you can, intentionally, leave open
// (and which close themselves)

var closeSelf = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr'); // Attributes that have their values filled in disabled="disabled"

var fillAttrs = makeMap('checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected'); // Special Elements (can contain anything)

var special = makeMap('script,style');
function HTMLParser(html, handler) {
  var index;
  var chars;
  var match;
  var stack = [];
  var last = html;

  stack.last = function () {
    return this[this.length - 1];
  };

  while (html) {
    chars = true; // Make sure we're not in a script or style element

    if (!stack.last() || !special[stack.last()]) {
      // Comment
      if (html.indexOf('<!--') == 0) {
        index = html.indexOf('-->');

        if (index >= 0) {
          if (handler.comment) {
            handler.comment(html.substring(4, index));
          }

          html = html.substring(index + 3);
          chars = false;
        } // end tag

      } else if (html.indexOf('</') == 0) {
        match = html.match(endTag);

        if (match) {
          html = html.substring(match[0].length);
          match[0].replace(endTag, parseEndTag);
          chars = false;
        } // start tag

      } else if (html.indexOf('<') == 0) {
        match = html.match(startTag);

        if (match) {
          html = html.substring(match[0].length);
          match[0].replace(startTag, parseStartTag);
          chars = false;
        }
      }

      if (chars) {
        index = html.indexOf('<');
        var text = index < 0 ? html : html.substring(0, index);
        html = index < 0 ? '' : html.substring(index);

        if (handler.chars) {
          handler.chars(text);
        }
      }
    } else {
      html = html.replace(new RegExp('([\\s\\S]*?)<\/' + stack.last() + '[^>]*>'), function (all, text) {
        text = text.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g, '$1$2');

        if (handler.chars) {
          handler.chars(text);
        }

        return '';
      });
      parseEndTag('', stack.last());
    }

    if (html == last) {
      throw 'Parse Error: ' + html;
    }

    last = html;
  } // Clean up any remaining tags


  parseEndTag();

  function parseStartTag(tag, tagName, rest, unary) {
    tagName = tagName.toLowerCase();

    if (block[tagName]) {
      while (stack.last() && inline[stack.last()]) {
        parseEndTag('', stack.last());
      }
    }

    if (closeSelf[tagName] && stack.last() == tagName) {
      parseEndTag('', tagName);
    }

    unary = empty[tagName] || !!unary;

    if (!unary) {
      stack.push(tagName);
    }

    if (handler.start) {
      var attrs = [];
      rest.replace(attr, function (match, name) {
        var value = arguments[2] ? arguments[2] : arguments[3] ? arguments[3] : arguments[4] ? arguments[4] : fillAttrs[name] ? name : '';
        attrs.push({
          name: name,
          value: value,
          escaped: value.replace(/(^|[^\\])"/g, '$1\\\"') // "
        });

      });

      if (handler.start) {
        handler.start(tagName, attrs, unary);
      }
    }
  }

  function parseEndTag(tag, tagName) {
    // If no tag name is provided, clean shop
    if (!tagName) {
      var pos = 0;
    } // Find the closest opened tag of the same type
    else {
        for (var pos = stack.length - 1; pos >= 0; pos--) {
          if (stack[pos] == tagName) {
            break;
          }
        }
      }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (handler.end) {
          handler.end(stack[i]);
        }
      } // Remove the open elements from the stack


      stack.length = pos;
    }
  }
}

function makeMap(str) {
  var obj = {};
  var items = str.split(',');

  for (var i = 0; i < items.length; i++) {
    obj[items[i]] = true;
  }

  return obj;
}

function removeDOCTYPE(html) {
  return html.replace(/<\?xml.*\?>\n/, '').replace(/<!doctype.*>\n/, '').replace(/<!DOCTYPE.*>\n/, '');
}

function parseAttrs(attrs) {
  return attrs.reduce(function (pre, attr) {
    var value = attr.value;
    var name = attr.name;

    if (pre[name]) {
      pre[name] = pre[name] + " " + value;
    } else {
      pre[name] = value;
    }

    return pre;
  }, {});
}

function parseHtml(html) {
  html = removeDOCTYPE(html);
  var stacks = [];
  var results = {
    node: 'root',
    children: [] };

  HTMLParser(html, {
    start: function start(tag, attrs, unary) {
      var node = {
        name: tag };


      if (attrs.length !== 0) {
        node.attrs = parseAttrs(attrs);
      }

      if (unary) {
        var parent = stacks[0] || results;

        if (!parent.children) {
          parent.children = [];
        }

        parent.children.push(node);
      } else {
        stacks.unshift(node);
      }
    },
    end: function end(tag) {
      var node = stacks.shift();
      if (node.name !== tag) console.error(__f__('invalid state: mismatch end tag', " at common\\html-parser.js:303"));

      if (stacks.length === 0) {
        results.children.push(node);
      } else {
        var parent = stacks[0];

        if (!parent.children) {
          parent.children = [];
        }

        parent.children.push(node);
      }
    },
    chars: function chars(text) {
      var node = {
        type: 'text',
        text: text };


      if (stacks.length === 0) {
        results.children.push(node);
      } else {
        var parent = stacks[0];

        if (!parent.children) {
          parent.children = [];
        }

        parent.children.push(node);
      }
    },
    comment: function comment(text) {
      var node = {
        node: 'comment',
        text: text };

      var parent = stacks[0];

      if (!parent.children) {
        parent.children = [];
      }

      parent.children.push(node);
    } });

  return results.children;
}var _default =

parseHtml;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 15)["default"]))

/***/ }),
/* 15 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function formatLog() {for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}
  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v);
    if (type.toLowerCase() === '[object object]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---';
      } catch (e) {
        v = '[object object]';
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();
        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }
    return v;
  });
  var msg = '';
  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');
    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }
  return msg;
}

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
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
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 19 */
/*!*************************************************************************************************!*\
  !*** C:/Users/hxw/Documents/HBuilderProjects/xinwen/main.js?{"page":"pages%2Fdetail%2Fdetail"} ***!
  \*************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dcloudio/uni-stat */ 1);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-app-style */ 6);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_detail_detail_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/detail/detail.nvue?mpType=page */ 20);

        
        
        
        _pages_detail_detail_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].mpType = 'page'
        _pages_detail_detail_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].route = 'pages/detail/detail'
        _pages_detail_detail_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].el = '#root'
        new Vue(_pages_detail_detail_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"])
        

/***/ }),
/* 20 */
/*!*******************************************************************************************!*\
  !*** C:/Users/hxw/Documents/HBuilderProjects/xinwen/pages/detail/detail.nvue?mpType=page ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_nvue_vue_type_template_id_1fc87bc9_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.nvue?vue&type=template&id=1fc87bc9&mpType=page */ 21);
/* harmony import */ var _detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.nvue?vue&type=script&lang=js&mpType=page */ 23);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 18);



function injectStyles () {
  if(!this.options.style){
    this.options.style = {}
}
if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
  Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
}
if(Vue.prototype.__merge_style){
              Vue.prototype.__merge_style(__webpack_require__(/*! ./detail.nvue?vue&type=style&index=0&lang=css&mpType=page */ 25).default, this.options.style)
          }else{
              Object.assign(this.options.style,__webpack_require__(/*! ./detail.nvue?vue&type=style&index=0&lang=css&mpType=page */ 25).default)
          }

}

/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_nvue_vue_type_template_id_1fc87bc9_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _detail_nvue_vue_type_template_id_1fc87bc9_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "0506dbfd"
  
)

injectStyles.call(component)
component.options.__file = "Documents/HBuilderProjects/xinwen/pages/detail/detail.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 21 */
/*!*************************************************************************************************************************!*\
  !*** C:/Users/hxw/Documents/HBuilderProjects/xinwen/pages/detail/detail.nvue?vue&type=template&id=1fc87bc9&mpType=page ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_detail_nvue_vue_type_template_id_1fc87bc9_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./detail.nvue?vue&type=template&id=1fc87bc9&mpType=page */ 22);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_detail_nvue_vue_type_template_id_1fc87bc9_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_detail_nvue_vue_type_template_id_1fc87bc9_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 22 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!C:/Users/hxw/Documents/HBuilderProjects/xinwen/pages/detail/detail.nvue?vue&type=template&id=1fc87bc9&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
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
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: { scrollY: true, enableBackToTop: true, bubble: "true" }
    },
    [
      _c("view", [
        _c(
          "view",
          { staticClass: ["banner"], attrs: { autoFocus: true } },
          [
            _c("u-image", {
              staticClass: ["banner-img"],
              attrs: { src: _vm.banner.image_url }
            }),
            _c("view", { staticClass: ["title-area"] }, [
              _c("u-text", { staticClass: ["title-text"] }, [
                _vm._v(_vm._s(_vm.banner.title))
              ])
            ])
          ],
          1
        ),
        _c("view", { staticClass: ["article-meta"] }, [
          _c(
            "u-text",
            { staticClass: ["article-meta-text", "article-author"] },
            [_vm._v(_vm._s(_vm.banner.source))]
          ),
          _c("u-text", { staticClass: ["article-meta-text", "article-text"] }, [
            _vm._v("发表于")
          ]),
          _c("u-text", { staticClass: ["article-meta-text", "article-time"] }, [
            _vm._v(_vm._s(_vm.banner.datetime))
          ])
        ]),
        _c(
          "view",
          { staticClass: ["article-content"] },
          [
            _c("rich-text", {
              staticStyle: { fontSize: "14px" },
              attrs: { nodes: _vm.content }
            })
          ],
          1
        ),
        _c("view", { staticClass: ["comment-wrap"] })
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 23 */
/*!*******************************************************************************************************************!*\
  !*** C:/Users/hxw/Documents/HBuilderProjects/xinwen/pages/detail/detail.nvue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./detail.nvue?vue&type=script&lang=js&mpType=page */ 24);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 24 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!C:/Users/hxw/Documents/HBuilderProjects/xinwen/pages/detail/detail.nvue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;




















var _htmlParser = _interopRequireDefault(__webpack_require__(/*! @/common/html-parser */ 14));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
var FAIL_CONTENT = '<p>获取信息失败1</p>';function parseImgs(nodes) {nodes.forEach(function (node) {if (node.name === 'img' && node.attrs && node.attrs['data-img-size-val']) {var sizes = node.attrs['data-img-size-val'].split(',');var width = uni.upx2px(720 * 0.9);var height = parseInt(width * (sizes[1] / sizes[0]));node.attrs.style = "width:".concat(width, ";height:").concat(height, ";");}if (Array.isArray(node.children)) {parseImgs(node.children);}});return nodes;
}var _default =

{
  data: function data() {
    return {
      banner: {},
      content: [] };

  },
  onShareAppMessage: function onShareAppMessage() {
    return {
      title: this.banner.title,
      path: '/pages/detail/detail?query=' + JSON.stringify(this.banner) };

  },
  onLoad: function onLoad(event) {
    // 目前在某些平台参数会被主动 decode，暂时这样处理。
    try {
      this.banner = JSON.parse(decodeURIComponent(event.query));
    } catch (error) {
      this.banner = JSON.parse(event.query);
    }

    uni.setNavigationBarTitle({
      title: this.banner.title });


    this.getDetail();
  },
  methods: {
    getDetail: function getDetail() {var _this = this;
      uni.request({
        url: 'https://unidemo.dcloud.net.cn/api/news/36kr/' + this.banner.post_id,
        success: function success(result) {
          var content = FAIL_CONTENT;
          if (result.statusCode == 200) {
            content = result.data.content;
          }
          var nodes = (0, _htmlParser.default)(content);

          parseImgs(nodes);

          _this.content = nodes;
        } });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["default"]))

/***/ }),
/* 25 */
/*!***************************************************************************************************************************!*\
  !*** C:/Users/hxw/Documents/HBuilderProjects/xinwen/pages/detail/detail.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_detail_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./detail.nvue?vue&type=style&index=0&lang=css&mpType=page */ 26);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_detail_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_detail_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_detail_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_detail_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_detail_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 26 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!C:/Users/hxw/Documents/HBuilderProjects/xinwen/pages/detail/detail.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "banner": {
    "height": "360rpx",
    "position": "relative",
    "backgroundColor": "#cccccc",
    "flexDirection": "row",
    "overflow": "hidden"
  },
  "banner-img": {
    "flex": 1
  },
  "title-area": {
    "position": "absolute",
    "left": "30rpx",
    "right": "30rpx",
    "bottom": "30rpx",
    "zIndex": 11
  },
  "title-text": {
    "fontSize": "32rpx",
    "fontWeight": "400",
    "lineHeight": "42rpx",
    "lines": 2,
    "color": "#ffffff",
    "overflow": "hidden"
  },
  "article-meta": {
    "paddingTop": "20rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "30rpx",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "flex-start"
  },
  "article-meta-text": {
    "color": "#808080"
  },
  "article-text": {
    "fontSize": "26rpx",
    "lineHeight": "50rpx",
    "marginTop": 0,
    "marginRight": "20rpx",
    "marginBottom": 0,
    "marginLeft": "20rpx"
  },
  "article-author": {
    "fontSize": "30rpx"
  },
  "article-time": {
    "fontSize": "30rpx"
  },
  "article-content": {
    "fontSize": "30rpx",
    "paddingTop": 0,
    "paddingRight": "30rpx",
    "paddingBottom": 0,
    "paddingLeft": "30rpx",
    "marginBottom": "30rpx",
    "overflow": "hidden"
  }
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdW5pLXN0YXQvZGlzdC9pbmRleC5qcz85MjFiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3VuaS1hcHAtcGx1cy1udnVlLXY4L2Rpc3QvaW5kZXguanM/OTkyYSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvaHh3L0RvY3VtZW50cy9IQnVpbGRlclByb2plY3RzL3hpbndlbi9wYWdlcy5qc29uP2UzMzEiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2h4dy9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy94aW53ZW4vcGFnZXMuanNvbj9iN2NkIiwid2VicGFjazovLy9DOi9Vc2Vycy9oeHcvRG9jdW1lbnRzL0hCdWlsZGVyUHJvamVjdHMveGlud2VuL21haW4uanM/NDk5ZiIsIndlYnBhY2s6Ly8vQzovVXNlcnMvaHh3L0RvY3VtZW50cy9IQnVpbGRlclByb2plY3RzL3hpbndlbi9BcHAudnVlPzhkZjQiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2h4dy9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy94aW53ZW4vQXBwLnZ1ZT85MzRlIiwidW5pLWFwcDovLy9jb21tb24vaHRtbC1wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvbGliL2Zvcm1hdC1sb2cuanM/MGRlOSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzPzI4NzciLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2h4dy9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy94aW53ZW4vbWFpbi5qcz8yMjdiIiwid2VicGFjazovLy9DOi9Vc2Vycy9oeHcvRG9jdW1lbnRzL0hCdWlsZGVyUHJvamVjdHMveGlud2VuL3BhZ2VzL2RldGFpbC9kZXRhaWwubnZ1ZT8xMDQ2Iiwid2VicGFjazovLy9DOi9Vc2Vycy9oeHcvRG9jdW1lbnRzL0hCdWlsZGVyUHJvamVjdHMveGlud2VuL3BhZ2VzL2RldGFpbC9kZXRhaWwubnZ1ZT80NGJkIiwid2VicGFjazovLy9DOi9Vc2Vycy9oeHcvRG9jdW1lbnRzL0hCdWlsZGVyUHJvamVjdHMveGlud2VuL3BhZ2VzL2RldGFpbC9kZXRhaWwubnZ1ZT8yOGNkIiwid2VicGFjazovLy9DOi9Vc2Vycy9oeHcvRG9jdW1lbnRzL0hCdWlsZGVyUHJvamVjdHMveGlud2VuL3BhZ2VzL2RldGFpbC9kZXRhaWwubnZ1ZT81ZTcxIiwidW5pLWFwcDovLy9wYWdlcy9kZXRhaWwvZGV0YWlsLm52dWUiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2h4dy9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy94aW53ZW4vcGFnZXMvZGV0YWlsL2RldGFpbC5udnVlPzcyMWUiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2h4dy9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy94aW53ZW4vcGFnZXMvZGV0YWlsL2RldGFpbC5udnVlP2RjMmUiXSwibmFtZXMiOlsiU1RBVF9WRVJTSU9OIiwidmVyc2lvbiIsIlNUQVRfVVJMIiwiU1RBVF9INV9VUkwiLCJQQUdFX1BWRVJfVElNRSIsIkFQUF9QVkVSX1RJTUUiLCJPUEVSQVRJTkdfVElNRSIsIlVVSURfS0VZIiwiVVVJRF9WQUxVRSIsImdldFV1aWQiLCJ1dWlkIiwiZ2V0UGxhdGZvcm1OYW1lIiwicGx1cyIsInJ1bnRpbWUiLCJnZXREQ2xvdWRJZCIsImUiLCJ1bmkiLCJnZXRTdG9yYWdlU3luYyIsIkRhdGUiLCJub3ciLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzZXRTdG9yYWdlU3luYyIsImdldFNnaW4iLCJzdGF0RGF0YSIsImFyciIsIk9iamVjdCIsImtleXMiLCJzb3J0QXJyIiwic29ydCIsInNnaW4iLCJzZ2luU3RyIiwiaSIsInNpZ24iLCJvcHRpb25zIiwic3Vic3RyIiwibGVuZ3RoIiwiZ2V0U3BsaWNpbmciLCJkYXRhIiwic3RyIiwiZ2V0VGltZSIsInBhcnNlSW50IiwicGxhdGZvcm1MaXN0IiwicHJvY2VzcyIsImdldFBhY2tOYW1lIiwicGFja05hbWUiLCJjYW5JVXNlIiwiZ2V0QWNjb3VudEluZm9TeW5jIiwibWluaVByb2dyYW0iLCJhcHBJZCIsImdldFZlcnNpb24iLCJnZXRDaGFubmVsIiwicGxhdGZvcm1OYW1lIiwiY2hhbm5lbCIsImdldFNjZW5lIiwic2NlbmUiLCJnZXRMYXVuY2hPcHRpb25zU3luYyIsIkZpcnN0X19WaXNpdF9fVGltZV9fS0VZIiwiTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSIsImdldEZpcnN0VmlzaXRUaW1lIiwidGltZVN0b3JnZSIsInRpbWUiLCJyZW1vdmVTdG9yYWdlU3luYyIsImdldExhc3RWaXNpdFRpbWUiLCJQQUdFX1JFU0lERU5DRV9USU1FIiwiRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZSIsIkxhc3RfUGFnZV9yZXNpZGVuY2VfdGltZSIsInNldFBhZ2VSZXNpZGVuY2VUaW1lIiwiZ2V0UGFnZVJlc2lkZW5jZVRpbWUiLCJUT1RBTF9fVklTSVRfX0NPVU5UIiwiZ2V0VG90YWxWaXNpdENvdW50IiwiY291bnQiLCJHZXRFbmNvZGVVUklDb21wb25lbnRPcHRpb25zIiwicHJvcCIsImVuY29kZVVSSUNvbXBvbmVudCIsIlNldF9fRmlyc3RfX1RpbWUiLCJTZXRfX0xhc3RfX1RpbWUiLCJnZXRGaXJzdFRpbWUiLCJnZXRMYXN0VGltZSIsImdldFJlc2lkZW5jZVRpbWUiLCJ0eXBlIiwicmVzaWRlbmNlVGltZSIsIm92ZXJ0aW1lIiwiZ2V0Um91dGUiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsInBhZ2UiLCJfc2VsZiIsIiR2bSIsIiRtcCIsImlzIiwiJHNjb3BlIiwicm91dGUiLCJnZXRQYWdlUm91dGUiLCJzZWxmIiwicXVlcnkiLCJfcXVlcnkiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0UGFnZVR5cGVzIiwibXBUeXBlIiwiJG9wdGlvbnMiLCJjYWxpYnJhdGlvbiIsImV2ZW50TmFtZSIsImNvbnNvbGUiLCJlcnJvciIsIlBhZ2VzSnNvbiIsInJlcXVpcmUiLCJkZWZhdWx0Iiwic3RhdENvbmZpZyIsInJlc3VsdE9wdGlvbnMiLCJnZXRTeXN0ZW1JbmZvU3luYyIsIlV0aWwiLCJfcmV0cnkiLCJfcGxhdGZvcm0iLCJfbmF2aWdhdGlvbkJhclRpdGxlIiwiY29uZmlnIiwicmVwb3J0IiwibHQiLCJfb3BlcmF0aW5nVGltZSIsIl9yZXBvcnRpbmdSZXF1ZXN0RGF0YSIsIl9fcHJldmVudF90cmlnZ2VyaW5nIiwiX19saWNhdGlvbkhpZGUiLCJfX2xpY2F0aW9uU2hvdyIsIl9sYXN0UGFnZVJvdXRlIiwidXQiLCJtcG4iLCJhayIsImFwcGlkIiwidXN2IiwidiIsImNoIiwiY24iLCJwbiIsImN0IiwidCIsInR0IiwicCIsInBsYXRmb3JtIiwiYnJhbmQiLCJtZCIsIm1vZGVsIiwic3YiLCJzeXN0ZW0iLCJyZXBsYWNlIiwibXBzZGsiLCJTREtWZXJzaW9uIiwibXB2IiwibGFuZyIsImxhbmd1YWdlIiwicHIiLCJwaXhlbFJhdGlvIiwid3ciLCJ3aW5kb3dXaWR0aCIsIndoIiwid2luZG93SGVpZ2h0Iiwic3ciLCJzY3JlZW5XaWR0aCIsInNoIiwic2NyZWVuSGVpZ2h0IiwicGF0aCIsInNjIiwiX3NlbmRSZXBvcnRSZXF1ZXN0IiwiX3NlbmRIaWRlUmVxdWVzdCIsInVybHJlZiIsInVybHJlZl90cyIsInJvdXRlcGF0aCIsInRpdGxlTlZpZXciLCJ0aXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiX3NlbmRQYWdlUmVxdWVzdCIsInVybCIsIl9zZW5kRXZlbnRSZXF1ZXN0Iiwia2V5IiwiZnZ0cyIsImx2dHMiLCJ0dmMiLCJnZXRQcm9wZXJ0eSIsImdldE5ldHdvcmtJbmZvIiwib3B0IiwicmVxdWVzdCIsInZhbHVlIiwiZV9uIiwiZV92IiwidG9TdHJpbmciLCJnZXROZXR3b3JrVHlwZSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJuZXQiLCJuZXR3b3JrVHlwZSIsImdldExvY2F0aW9uIiwid2d0aW5mbyIsImdlb2NvZGUiLCJhZGRyZXNzIiwiY291bnRyeSIsInByb3ZpbmNlIiwiY2l0eSIsImxhdCIsImxhdGl0dWRlIiwibG5nIiwibG9uZ2l0dWRlIiwidGl0bGUiLCJ0dG4iLCJ0dHBqIiwidHRjIiwicmVxdWVzdERhdGEiLCJwdXNoIiwidW5pU3RhdERhdGEiLCJmaXJzdEFyciIsImNvbnRlbnRBcnIiLCJsYXN0QXJyIiwicmQiLCJmb3JFYWNoIiwiZWxtIiwibmV3RGF0YSIsIm9wdGlvbnNEYXRhIiwicmVxdWVzdHMiLCJpbWFnZVJlcXVlc3QiLCJzZXRUaW1lb3V0IiwiX3NlbmRSZXF1ZXN0IiwibWV0aG9kIiwiZmFpbCIsImltYWdlIiwiSW1hZ2UiLCJzcmMiLCJTdGF0IiwiaW5zdGFuY2UiLCJhZGRJbnRlcmNlcHRvciIsImFkZEludGVyY2VwdG9ySW5pdCIsImludGVyY2VwdExvZ2luIiwiaW50ZXJjZXB0U2hhcmUiLCJpbnRlcmNlcHRSZXF1ZXN0UGF5bWVudCIsImludm9rZSIsImFyZ3MiLCJjb21wbGV0ZSIsIl9sb2dpbiIsIl9zaGFyZSIsIl9wYXltZW50IiwiX3BhZ2VTaG93IiwiX2FwcGxpY2F0aW9uU2hvdyIsIl9wYWdlSGlkZSIsIl9hcHBsaWNhdGlvbkhpZGUiLCJlbSIsImluZm8iLCJlbVZhbCIsIm1lc3NhZ2UiLCJzdGFjayIsInN0YXQiLCJnZXRJbnN0YW5jZSIsImlzSGlkZSIsImxpZmVjeWNsZSIsIm9uTGF1bmNoIiwib25SZWFkeSIsInJlYWR5Iiwib25Mb2FkIiwibG9hZCIsIm9uU2hhcmVBcHBNZXNzYWdlIiwib2xkU2hhcmVBcHBNZXNzYWdlIiwiY2FsbCIsIm9uU2hvdyIsInNob3ciLCJvbkhpZGUiLCJoaWRlIiwib25VbmxvYWQiLCJvbkVycm9yIiwibWFpbiIsImluaXRVbmkiLCJpc0ZuIiwiaGFuZGxlUHJvbWlzZSIsInByb21pc2UiLCJ0aGVuIiwiY2F0Y2giLCJlcnIiLCJSRUdFWCIsIkFQSV9OT1JNQUxfTElTVCIsInNob3VsZFByb21pc2UiLCJuYW1lIiwidGVzdCIsImluZGV4T2YiLCJwcm9taXNpZnkiLCJhcGkiLCJfbGVuIiwiYXJndW1lbnRzIiwicGFyYW1zIiwiQXJyYXkiLCJfa2V5IiwidW5kZWZpbmVkIiwiYXBwbHkiLCJjb25jYXQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImZpbmFsbHkiLCJjYWxsYmFjayIsImNvbnN0cnVjdG9yIiwicmVhc29uIiwib25NZXNzYWdlQ2FsbGJhY2tzIiwib3JpZ2luIiwib25TdWJOVnVlTWVzc2FnZSIsIndlYnZpZXdJZCIsIndlZXhQbHVzIiwid2VidmlldyIsImN1cnJlbnRXZWJ2aWV3IiwiaWQiLCJCcm9hZGNhc3RDaGFubmVsIiwib25tZXNzYWdlIiwiZXZlbnQiLCJ0byIsIndyYXBwZXIiLCIkcHJvY2Vzc2VkIiwiY3VycmVudFdlYnZpZXdJZCIsImlzUG9wdXBOVnVlIiwiaG9zdE5WdWVJZCIsIl9fdW5pYXBwX29yaWdpbl90eXBlIiwiX191bmlhcHBfb3JpZ2luX2lkIiwicG9wdXBOVnVlSWQiLCJwb3N0TWVzc2FnZSIsIm9uTWVzc2FnZSIsIl9fdW5pYXBwX21hc2tfaWQiLCJfX3VuaWFwcF9ob3N0IiwibWFza0NvbG9yIiwiX191bmlhcHBfbWFzayIsIm1hc2tXZWJ2aWV3IiwiZ2V0V2Vidmlld0J5SWQiLCJwYXJlbnQiLCJvbGRTaG93Iiwib2xkSGlkZSIsIm9sZENsb3NlIiwiY2xvc2UiLCJzaG93TWFzayIsInNldFN0eWxlIiwibWFzayIsImNsb3NlTWFzayIsIl9sZW4yIiwiX2tleTIiLCJfbGVuMyIsIl9rZXkzIiwiZ2V0U3ViTlZ1ZUJ5SWQiLCJnZXRDdXJyZW50U3ViTlZ1ZSIsIndlZXgiLCJyZXF1aXJlTW9kdWxlIiwiZ2xvYmFsRXZlbnQiLCJjYWxsYmFja3MiLCJVTklBUFBfU0VSVklDRV9OVlVFX0lEIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcENhbGxiYWNrIiwib25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkQ2FsbGJhY2siLCJvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrIiwib25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2siLCJjcmVhdGVDYWxsYmFjayIsInJlcyIsImVyck1zZyIsImtlZXBBbGl2ZSIsImNhbGxiYWNrSWQiLCJwdWJsaXNoIiwiX3JlZiIsImNyZWF0ZVB1Ymxpc2giLCJvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAiLCJvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQiLCJvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZCIsIm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZCIsInJlcXVpcmVOYXRpdmVQbHVnaW4iLCJwbHVnaW5OYW1lIiwiZG9tIiwibG9hZEZvbnRGYWNlIiwiZmFtaWx5Iiwic291cmNlIiwiZGVzYyIsImFkZFJ1bGUiLCJmb250RmFtaWx5Iiwic3RhdHVzIiwiZ2xvYmFsRXZlbnQkMSIsImNhbGxiYWNrcyQxIiwiaXNVbmlBcHBSZWFkeSIsIl90eXBlb2YiLCJTeW1ib2wiLCJpdGVyYXRvciIsIm9iaiIsInN0cmVhbSIsIk1FVEhPRF9HRVQiLCJNRVRIT0RfUE9TVCIsIkNPTlRFTlRfVFlQRV9KU09OIiwiQ09OVEVOVF9UWVBFX0ZPUk0iLCJzZXJpYWxpemUiLCJjb250ZW50VHlwZSIsInRvVXBwZXJDYXNlIiwidG9Mb3dlckNhc2UiLCJtYXAiLCJqb2luIiwiaGVhZGVyIiwiX3JlZiRtZXRob2QiLCJfcmVmJGRhdGFUeXBlIiwiZGF0YVR5cGUiLCJyZXNwb25zZVR5cGUiLCJhYm9ydGVkIiwiaGFzQ29udGVudFR5cGUiLCJoZWFkZXJzIiwiZmV0Y2giLCJib2R5IiwiX3JlZjIiLCJvayIsInN0YXR1c1RleHQiLCJyZXQiLCJzdGF0dXNDb2RlIiwiYWJvcnQiLCJzdG9yYWdlIiwiVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFIiwiZ2V0U3RvcmFnZSIsImdldEl0ZW0iLCJwYXJzZSIsInNldFN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlU3RvcmFnZSIsIl9yZWYzIiwicmVtb3ZlSXRlbSIsImNsZWFyU3RvcmFnZSIsIl9yZWY0IiwiY2xpcGJvYXJkIiwiZ2V0Q2xpcGJvYXJkRGF0YSIsImdldFN0cmluZyIsInNldENsaXBib2FyZERhdGEiLCJzZXRTdHJpbmciLCJnZXRFbWl0dGVyIiwiZ2V0VW5pRW1pdHRlciIsIkVtaXR0ZXIiLCIkb24iLCJ3YXJuIiwiJG9mZiIsIiRvbmNlIiwiJGVtaXQiLCJjdHgiLCJzbGljZSIsImZyZWV6ZSIsInd4IiwidXBsb2FkRmlsZSIsImRvd25sb2FkRmlsZSIsImNob29zZUltYWdlIiwicHJldmlld0ltYWdlIiwiZ2V0SW1hZ2VJbmZvIiwic2F2ZUltYWdlVG9QaG90b3NBbGJ1bSIsImNob29zZVZpZGVvIiwic2F2ZVZpZGVvVG9QaG90b3NBbGJ1bSIsInNhdmVGaWxlIiwiZ2V0U2F2ZWRGaWxlTGlzdCIsImdldFNhdmVkRmlsZUluZm8iLCJyZW1vdmVTYXZlZEZpbGUiLCJvcGVuRG9jdW1lbnQiLCJnZXRTdG9yYWdlSW5mbyIsImNob29zZUxvY2F0aW9uIiwib3BlbkxvY2F0aW9uIiwiZ2V0U3lzdGVtSW5mbyIsIm1ha2VQaG9uZUNhbGwiLCJzY2FuQ29kZSIsInNldFNjcmVlbkJyaWdodG5lc3MiLCJnZXRTY3JlZW5CcmlnaHRuZXNzIiwic2V0S2VlcFNjcmVlbk9uIiwidmlicmF0ZUxvbmciLCJ2aWJyYXRlU2hvcnQiLCJhZGRQaG9uZUNvbnRhY3QiLCJzaG93VG9hc3QiLCJzaG93TG9hZGluZyIsImhpZGVUb2FzdCIsImhpZGVMb2FkaW5nIiwic2hvd01vZGFsIiwic2hvd0FjdGlvblNoZWV0Iiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwic2V0TmF2aWdhdGlvbkJhckNvbG9yIiwibmF2aWdhdGVUbyIsInJlZGlyZWN0VG8iLCJyZUxhdW5jaCIsInN3aXRjaFRhYiIsIm5hdmlnYXRlQmFjayIsImdldFByb3ZpZGVyIiwibG9naW4iLCJnZXRVc2VySW5mbyIsInNoYXJlIiwicmVxdWVzdFBheW1lbnQiLCJzdWJzY3JpYmVQdXNoIiwidW5zdWJzY3JpYmVQdXNoIiwib25QdXNoIiwib2ZmUHVzaCIsImJhc2VVbmkiLCJvcyIsIm52dWUiLCJQcm94eSIsImdldCIsInRhcmdldCIsImNyZWF0ZVVuaSIsImdldFVuaSIsIldlZXhQbHVzIiwic3RhcnRUYWciLCJlbmRUYWciLCJhdHRyIiwiZW1wdHkiLCJtYWtlTWFwIiwiYmxvY2siLCJpbmxpbmUiLCJjbG9zZVNlbGYiLCJmaWxsQXR0cnMiLCJzcGVjaWFsIiwiSFRNTFBhcnNlciIsImh0bWwiLCJoYW5kbGVyIiwiaW5kZXgiLCJjaGFycyIsIm1hdGNoIiwibGFzdCIsImNvbW1lbnQiLCJzdWJzdHJpbmciLCJwYXJzZUVuZFRhZyIsInBhcnNlU3RhcnRUYWciLCJ0ZXh0IiwiUmVnRXhwIiwiYWxsIiwidGFnIiwidGFnTmFtZSIsInJlc3QiLCJ1bmFyeSIsInN0YXJ0IiwiYXR0cnMiLCJlc2NhcGVkIiwicG9zIiwiZW5kIiwiaXRlbXMiLCJzcGxpdCIsInJlbW92ZURPQ1RZUEUiLCJwYXJzZUF0dHJzIiwicmVkdWNlIiwicHJlIiwicGFyc2VIdG1sIiwic3RhY2tzIiwicmVzdWx0cyIsIm5vZGUiLCJjaGlsZHJlbiIsInVuc2hpZnQiLCJzaGlmdCIsInR5cG9mIiwicyIsImZvcm1hdExvZyIsIm1zZ3MiLCJ2VHlwZSIsIlN0cmluZyIsIm1zZyIsImxhc3RNc2ciLCJwb3AiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNB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QSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7O3FJQ3IyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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OztBQUlBO0FBQ0EsR0ExQkE7QUEyQkE7QUFDQSxhQURBLHVCQUNBO0FBQ0E7QUFDQSxpRkFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBWkE7O0FBY0EsS0FoQkEsRUEzQkEsRTs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQUE7QUFBQTtBQUFBO0FBQTB1QixDQUFnQixtdUJBQUcsRUFBQyxDOzs7Ozs7Ozs7O0FDQTl2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoicGFnZXMvZGV0YWlsL2RldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxOSk7XG4iLCJpbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSAnLi4vcGFja2FnZS5qc29uJztcclxuXHJcbmNvbnN0IFNUQVRfVkVSU0lPTiA9IHZlcnNpb247XHJcbmNvbnN0IFNUQVRfVVJMID0gJ2h0dHBzOi8vdG9uZ2ppLmRjbG91ZC5pby91bmkvc3RhdCc7XHJcbmNvbnN0IFNUQVRfSDVfVVJMID0gJ2h0dHBzOi8vdG9uZ2ppLmRjbG91ZC5pby91bmkvc3RhdC5naWYnOyBcclxuY29uc3QgUEFHRV9QVkVSX1RJTUUgPSAxODAwO1xyXG5jb25zdCBBUFBfUFZFUl9USU1FID0gMzAwO1xyXG5jb25zdCBPUEVSQVRJTkdfVElNRSA9IDEwO1xyXG5cclxuY29uc3QgVVVJRF9LRVkgPSAnX19EQ19TVEFUX1VVSUQnO1xyXG5jb25zdCBVVUlEX1ZBTFVFID0gJ19fRENfVVVJRF9WQUxVRSc7XHJcblxyXG5mdW5jdGlvbiBnZXRVdWlkKCkge1xyXG4gIGxldCB1dWlkID0gJyc7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHV1aWQgPSBwbHVzLnJ1bnRpbWUuZ2V0RENsb3VkSWQoKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdXVpZCA9ICcnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHV1aWRcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICB1dWlkID0gdW5pLmdldFN0b3JhZ2VTeW5jKFVVSURfS0VZKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICB1dWlkID0gVVVJRF9WQUxVRTtcclxuICB9XHJcblxyXG4gIGlmICghdXVpZCkge1xyXG4gICAgdXVpZCA9IERhdGUubm93KCkgKyAnJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDFlNyk7XHJcbiAgICB0cnkge1xyXG4gICAgICB1bmkuc2V0U3RvcmFnZVN5bmMoVVVJRF9LRVksIHV1aWQpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB1bmkuc2V0U3RvcmFnZVN5bmMoVVVJRF9LRVksIFVVSURfVkFMVUUpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdXVpZDtcclxufVxyXG5cclxuY29uc3QgZ2V0U2dpbiA9IChzdGF0RGF0YSkgPT4ge1xyXG4gIGxldCBhcnIgPSBPYmplY3Qua2V5cyhzdGF0RGF0YSk7XHJcbiAgbGV0IHNvcnRBcnIgPSBhcnIuc29ydCgpO1xyXG4gIGxldCBzZ2luID0ge307XHJcbiAgbGV0IHNnaW5TdHIgPSAnJztcclxuICBmb3IgKHZhciBpIGluIHNvcnRBcnIpIHtcclxuICAgIHNnaW5bc29ydEFycltpXV0gPSBzdGF0RGF0YVtzb3J0QXJyW2ldXTtcclxuICAgIHNnaW5TdHIgKz0gc29ydEFycltpXSArICc9JyArIHN0YXREYXRhW3NvcnRBcnJbaV1dICsgJyYnO1xyXG4gIH1cclxuICAvLyBjb25zdCBvcHRpb25zID0gc2dpblN0ci5zdWJzdHIoMCwgc2dpblN0ci5sZW5ndGggLSAxKVxyXG4gIC8vIHNnaW5TdHIgPSBzZ2luU3RyLnN1YnN0cigwLCBzZ2luU3RyLmxlbmd0aCAtIDEpICsgJyZrZXk9JyArIFNUQVRfS0VZO1xyXG4gIC8vIGNvbnN0IHNpID0gY3J5cHRvLmNyZWF0ZUhhc2goJ21kNScpLnVwZGF0ZShzZ2luU3RyKS5kaWdlc3QoJ2hleCcpO1xyXG4gIHJldHVybiB7XHJcbiAgICBzaWduOiAnJyxcclxuICAgIG9wdGlvbnM6IHNnaW5TdHIuc3Vic3RyKDAsIHNnaW5TdHIubGVuZ3RoIC0gMSlcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgZ2V0U3BsaWNpbmcgPSAoZGF0YSkgPT4ge1xyXG4gIGxldCBzdHIgPSAnJztcclxuICBmb3IgKHZhciBpIGluIGRhdGEpIHtcclxuICAgIHN0ciArPSBpICsgJz0nICsgZGF0YVtpXSArICcmJztcclxuICB9XHJcbiAgcmV0dXJuIHN0ci5zdWJzdHIoMCwgc3RyLmxlbmd0aCAtIDEpXHJcbn07XHJcblxyXG5jb25zdCBnZXRUaW1lID0gKCkgPT4ge1xyXG4gIHJldHVybiBwYXJzZUludChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UGxhdGZvcm1OYW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBsYXRmb3JtTGlzdCA9IHtcclxuICAgICdhcHAtcGx1cyc6ICduJyxcclxuICAgICdoNSc6ICdoNScsXHJcbiAgICAnbXAtd2VpeGluJzogJ3d4JyxcclxuICAgICdtcC1hbGlwYXknOiAnYWxpJyxcclxuICAgICdtcC1iYWlkdSc6ICdiZCcsXHJcbiAgICAnbXAtdG91dGlhbyc6ICd0dCcsXHJcbiAgICAnbXAtcXEnOiAncXEnXHJcbiAgfTtcclxuICByZXR1cm4gcGxhdGZvcm1MaXN0W3Byb2Nlc3MuZW52LlZVRV9BUFBfUExBVEZPUk1dO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UGFja05hbWUgPSAoKSA9PiB7XHJcbiAgbGV0IHBhY2tOYW1lID0gJyc7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnd3gnIHx8IGdldFBsYXRmb3JtTmFtZSgpID09PSAncXEnKSB7XHJcbiAgICAvLyDlhbzlrrnlvq7kv6HlsI/nqIvluo/kvY7niYjmnKzln7rnoYDlupNcclxuICAgIGlmKHVuaS5jYW5JVXNlKCdnZXRBY2NvdW50SW5mb1N5bmMnKSl7XHJcbiAgICAgIHBhY2tOYW1lID0gdW5pLmdldEFjY291bnRJbmZvU3luYygpLm1pbmlQcm9ncmFtLmFwcElkIHx8ICcnO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcGFja05hbWVcclxufTtcclxuXHJcbmNvbnN0IGdldFZlcnNpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicgPyBwbHVzLnJ1bnRpbWUudmVyc2lvbiA6ICcnO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0Q2hhbm5lbCA9ICgpID0+IHtcclxuICBjb25zdCBwbGF0Zm9ybU5hbWUgPSBnZXRQbGF0Zm9ybU5hbWUoKTtcclxuICBsZXQgY2hhbm5lbCA9ICcnO1xyXG4gIGlmIChwbGF0Zm9ybU5hbWUgPT09ICduJykge1xyXG4gICAgY2hhbm5lbCA9IHBsdXMucnVudGltZS5jaGFubmVsO1xyXG4gIH1cclxuICByZXR1cm4gY2hhbm5lbDtcclxufTtcclxuXHJcbmNvbnN0IGdldFNjZW5lID0gKG9wdGlvbnMpID0+IHtcclxuICBjb25zdCBwbGF0Zm9ybU5hbWUgPSBnZXRQbGF0Zm9ybU5hbWUoKTtcclxuICBsZXQgc2NlbmUgPSAnJztcclxuICBpZiAob3B0aW9ucykge1xyXG4gICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgfVxyXG4gIGlmIChwbGF0Zm9ybU5hbWUgPT09ICd3eCcpIHtcclxuICAgIHNjZW5lID0gdW5pLmdldExhdW5jaE9wdGlvbnNTeW5jKCkuc2NlbmU7XHJcbiAgfVxyXG4gIHJldHVybiBzY2VuZTtcclxufTtcclxuY29uc3QgRmlyc3RfX1Zpc2l0X19UaW1lX19LRVkgPSAnRmlyc3RfX1Zpc2l0X19UaW1lJztcclxuY29uc3QgTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSA9ICdMYXN0X19WaXNpdF9fVGltZSc7XHJcblxyXG5jb25zdCBnZXRGaXJzdFZpc2l0VGltZSA9ICgpID0+IHtcclxuICBjb25zdCB0aW1lU3RvcmdlID0gdW5pLmdldFN0b3JhZ2VTeW5jKEZpcnN0X19WaXNpdF9fVGltZV9fS0VZKTtcclxuICBsZXQgdGltZSA9IDA7XHJcbiAgaWYgKHRpbWVTdG9yZ2UpIHtcclxuICAgIHRpbWUgPSB0aW1lU3RvcmdlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aW1lID0gZ2V0VGltZSgpO1xyXG4gICAgdW5pLnNldFN0b3JhZ2VTeW5jKEZpcnN0X19WaXNpdF9fVGltZV9fS0VZLCB0aW1lKTtcclxuICAgIHVuaS5yZW1vdmVTdG9yYWdlU3luYyhMYXN0X19WaXNpdF9fVGltZV9fS0VZKTtcclxuICB9XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn07XHJcblxyXG5jb25zdCBnZXRMYXN0VmlzaXRUaW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpbWVTdG9yZ2UgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSk7XHJcbiAgbGV0IHRpbWUgPSAwO1xyXG4gIGlmICh0aW1lU3RvcmdlKSB7XHJcbiAgICB0aW1lID0gdGltZVN0b3JnZTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGltZSA9ICcnO1xyXG4gIH1cclxuICB1bmkuc2V0U3RvcmFnZVN5bmMoTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSwgZ2V0VGltZSgpKTtcclxuICByZXR1cm4gdGltZTtcclxufTtcclxuXHJcblxyXG5jb25zdCBQQUdFX1JFU0lERU5DRV9USU1FID0gJ19fcGFnZV9fcmVzaWRlbmNlX190aW1lJztcclxubGV0IEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSAwO1xyXG5sZXQgTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gMDtcclxuXHJcblxyXG5jb25zdCBzZXRQYWdlUmVzaWRlbmNlVGltZSA9ICgpID0+IHtcclxuICBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gZ2V0VGltZSgpO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICB1bmkuc2V0U3RvcmFnZVN5bmMoUEFHRV9SRVNJREVOQ0VfVElNRSwgZ2V0VGltZSgpKTtcclxuICB9XHJcbiAgcmV0dXJuIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWVcclxufTtcclxuXHJcbmNvbnN0IGdldFBhZ2VSZXNpZGVuY2VUaW1lID0gKCkgPT4ge1xyXG4gIExhc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IGdldFRpbWUoKTtcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhQQUdFX1JFU0lERU5DRV9USU1FKTtcclxuICB9XHJcbiAgcmV0dXJuIExhc3RfUGFnZV9yZXNpZGVuY2VfdGltZSAtIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWVcclxufTtcclxuY29uc3QgVE9UQUxfX1ZJU0lUX19DT1VOVCA9ICdUb3RhbF9fVmlzaXRfX0NvdW50JztcclxuY29uc3QgZ2V0VG90YWxWaXNpdENvdW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpbWVTdG9yZ2UgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoVE9UQUxfX1ZJU0lUX19DT1VOVCk7XHJcbiAgbGV0IGNvdW50ID0gMTtcclxuICBpZiAodGltZVN0b3JnZSkge1xyXG4gICAgY291bnQgPSB0aW1lU3RvcmdlO1xyXG4gICAgY291bnQrKztcclxuICB9XHJcbiAgdW5pLnNldFN0b3JhZ2VTeW5jKFRPVEFMX19WSVNJVF9fQ09VTlQsIGNvdW50KTtcclxuICByZXR1cm4gY291bnQ7XHJcbn07XHJcblxyXG5jb25zdCBHZXRFbmNvZGVVUklDb21wb25lbnRPcHRpb25zID0gKHN0YXREYXRhKSA9PiB7XHJcbiAgbGV0IGRhdGEgPSB7fTtcclxuICBmb3IgKGxldCBwcm9wIGluIHN0YXREYXRhKSB7XHJcbiAgICBkYXRhW3Byb3BdID0gZW5jb2RlVVJJQ29tcG9uZW50KHN0YXREYXRhW3Byb3BdKTtcclxuICB9XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5sZXQgU2V0X19GaXJzdF9fVGltZSA9IDA7XHJcbmxldCBTZXRfX0xhc3RfX1RpbWUgPSAwO1xyXG5cclxuY29uc3QgZ2V0Rmlyc3RUaW1lID0gKCkgPT4ge1xyXG4gIGxldCB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgU2V0X19GaXJzdF9fVGltZSA9IHRpbWU7XHJcbiAgU2V0X19MYXN0X19UaW1lID0gMDtcclxuICByZXR1cm4gdGltZTtcclxufTtcclxuXHJcblxyXG5jb25zdCBnZXRMYXN0VGltZSA9ICgpID0+IHtcclxuICBsZXQgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gIFNldF9fTGFzdF9fVGltZSA9IHRpbWU7XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn07XHJcblxyXG5cclxuY29uc3QgZ2V0UmVzaWRlbmNlVGltZSA9ICh0eXBlKSA9PiB7XHJcbiAgbGV0IHJlc2lkZW5jZVRpbWUgPSAwO1xyXG4gIGlmIChTZXRfX0ZpcnN0X19UaW1lICE9PSAwKSB7XHJcbiAgICByZXNpZGVuY2VUaW1lID0gU2V0X19MYXN0X19UaW1lIC0gU2V0X19GaXJzdF9fVGltZTtcclxuICB9XHJcblxyXG4gIHJlc2lkZW5jZVRpbWUgPSBwYXJzZUludChyZXNpZGVuY2VUaW1lIC8gMTAwMCk7XHJcbiAgcmVzaWRlbmNlVGltZSA9IHJlc2lkZW5jZVRpbWUgPCAxID8gMSA6IHJlc2lkZW5jZVRpbWU7XHJcbiAgaWYgKHR5cGUgPT09ICdhcHAnKSB7XHJcbiAgICBsZXQgb3ZlcnRpbWUgPSByZXNpZGVuY2VUaW1lID4gQVBQX1BWRVJfVElNRSA/IHRydWUgOiBmYWxzZTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlc2lkZW5jZVRpbWUsXHJcbiAgICAgIG92ZXJ0aW1lXHJcbiAgICB9O1xyXG4gIH1cclxuICBpZiAodHlwZSA9PT0gJ3BhZ2UnKSB7XHJcbiAgICBsZXQgb3ZlcnRpbWUgPSByZXNpZGVuY2VUaW1lID4gUEFHRV9QVkVSX1RJTUUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXNpZGVuY2VUaW1lLFxyXG4gICAgICBvdmVydGltZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICByZXNpZGVuY2VUaW1lXHJcbiAgfTtcclxuXHJcbn07XHJcblxyXG5jb25zdCBnZXRSb3V0ZSA9ICgpID0+IHtcclxuICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICB2YXIgcGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdO1xyXG4gIGxldCBfc2VsZiA9IHBhZ2UuJHZtO1xyXG5cclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICdiZCcpIHtcclxuICAgIHJldHVybiBfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2UuaXM7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoX3NlbGYuJHNjb3BlICYmIF9zZWxmLiRzY29wZS5yb3V0ZSkgfHwgKF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5yb3V0ZSk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0UGFnZVJvdXRlID0gKHNlbGYpID0+IHtcclxuICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICB2YXIgcGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdO1xyXG4gIGxldCBfc2VsZiA9IHBhZ2UuJHZtO1xyXG4gIGxldCBxdWVyeSA9IHNlbGYuX3F1ZXJ5O1xyXG4gIGxldCBzdHIgPSBxdWVyeSAmJiBKU09OLnN0cmluZ2lmeShxdWVyeSkgIT09ICd7fScgPyAnPycgKyBKU09OLnN0cmluZ2lmeShxdWVyeSkgOiAnJztcclxuICAvLyBjbGVhclxyXG4gIHNlbGYuX3F1ZXJ5ID0gJyc7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnYmQnKSB7XHJcbiAgICByZXR1cm4gX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLmlzICsgc3RyO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKF9zZWxmLiRzY29wZSAmJiBfc2VsZi4kc2NvcGUucm91dGUgKyBzdHIgKXx8IChfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2Uucm91dGUgKyBzdHIpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGdldFBhZ2VUeXBlcyA9IChzZWxmKSA9PiB7XHJcbiAgaWYgKHNlbGYubXBUeXBlID09PSAncGFnZScgfHwgKHNlbGYuJG1wICYmIHNlbGYuJG1wLm1wVHlwZSA9PT0gJ3BhZ2UnKSB8fCBzZWxmLiRvcHRpb25zLm1wVHlwZSA9PT0gJ3BhZ2UnKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuY29uc3QgY2FsaWJyYXRpb24gPSAoZXZlbnROYW1lLCBvcHRpb25zKSA9PiB7XHJcbiAgLy8gIGxvZ2luIOOAgSBzaGFyZSDjgIFwYXlfc3VjY2VzcyDjgIFwYXlfZmFpbCDjgIFyZWdpc3RlciDjgIF0aXRsZVxyXG4gIGlmKCFldmVudE5hbWUpe1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCDnvLrlsJEgW2V2ZW50TmFtZV0g5Y+C5pWwYCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuICBpZiAodHlwZW9mIGV2ZW50TmFtZSAhPT0gJ3N0cmluZycpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW2V2ZW50TmFtZV0g5Y+C5pWw57G75Z6L6ZSZ6K+vLOWPquiDveS4uiBTdHJpbmcg57G75Z6LYCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuICBpZiAoZXZlbnROYW1lLmxlbmd0aCA+IDI1NSkge1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbZXZlbnROYW1lXSDlj4LmlbDplb/luqbkuI3og73lpKfkuo4gMjU1YCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnc3RyaW5nJyAmJiB0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW29wdGlvbnNdIOWPguaVsOexu+Wei+mUmeivryzlj6rog73kuLogU3RyaW5nIOaIliBPYmplY3Qg57G75Z6LYCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJyAmJiBvcHRpb25zLmxlbmd0aCA+IDI1NSkge1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbb3B0aW9uc10g5Y+C5pWw6ZW/5bqm5LiN6IO95aSn5LqOIDI1NWApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmIChldmVudE5hbWUgPT09ICd0aXRsZScgJiYgdHlwZW9mIG9wdGlvbnMgIT09ICdzdHJpbmcnKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCd1bmkucmVwb3J0IFtldmVudE5hbWVdIOWPguaVsOS4uiB0aXRsZSDml7bvvIxbb3B0aW9uc10g5Y+C5pWw5Y+q6IO95Li6IFN0cmluZyDnsbvlnosnKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgUGFnZXNKc29uID0gcmVxdWlyZSgndW5pLXBhZ2VzP3tcInR5cGVcIjpcInN0eWxlXCJ9JykuZGVmYXVsdDtcclxuY29uc3Qgc3RhdENvbmZpZyA9IHJlcXVpcmUoJ3VuaS1zdGF0LWNvbmZpZycpLmRlZmF1bHQgfHwgcmVxdWlyZSgndW5pLXN0YXQtY29uZmlnJyk7XHJcblxyXG5jb25zdCByZXN1bHRPcHRpb25zID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCk7XHJcblxyXG5jbGFzcyBVdGlsIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc2VsZiA9ICcnO1xyXG4gICAgdGhpcy5fcmV0cnkgPSAwO1xyXG4gICAgdGhpcy5fcGxhdGZvcm0gPSAnJztcclxuICAgIHRoaXMuX3F1ZXJ5ID0ge307XHJcbiAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUgPSB7XHJcbiAgICAgIGNvbmZpZzogJycsXHJcbiAgICAgIHBhZ2U6ICcnLFxyXG4gICAgICByZXBvcnQ6ICcnLFxyXG4gICAgICBsdDogJydcclxuICAgIH07XHJcbiAgICB0aGlzLl9vcGVyYXRpbmdUaW1lID0gMDtcclxuICAgIHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhID0ge1xyXG4gICAgICAnMSc6IFtdLFxyXG4gICAgICAnMTEnOiBbXVxyXG4gICAgfTtcclxuICAgIHRoaXMuX19wcmV2ZW50X3RyaWdnZXJpbmcgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLl9fbGljYXRpb25IaWRlID0gZmFsc2U7XHJcbiAgICB0aGlzLl9fbGljYXRpb25TaG93ID0gZmFsc2U7XHJcbiAgICB0aGlzLl9sYXN0UGFnZVJvdXRlID0gJyc7XHJcbiAgICB0aGlzLnN0YXREYXRhID0ge1xyXG4gICAgICB1dWlkOiBnZXRVdWlkKCksXHJcbiAgICAgIHV0OiBnZXRQbGF0Zm9ybU5hbWUoKSxcclxuICAgICAgbXBuOiBnZXRQYWNrTmFtZSgpLFxyXG4gICAgICBhazogc3RhdENvbmZpZy5hcHBpZCxcclxuICAgICAgdXN2OiBTVEFUX1ZFUlNJT04sXHJcbiAgICAgIHY6IGdldFZlcnNpb24oKSxcclxuICAgICAgY2g6IGdldENoYW5uZWwoKSxcclxuICAgICAgY246ICcnLFxyXG4gICAgICBwbjogJycsXHJcbiAgICAgIGN0OiAnJyxcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICB0dDogJycsXHJcbiAgICAgIHA6IHJlc3VsdE9wdGlvbnMucGxhdGZvcm0gPT09ICdhbmRyb2lkJyA/ICdhJyA6ICdpJyxcclxuICAgICAgYnJhbmQ6IHJlc3VsdE9wdGlvbnMuYnJhbmQgfHwgJycsXHJcbiAgICAgIG1kOiByZXN1bHRPcHRpb25zLm1vZGVsLFxyXG4gICAgICBzdjogcmVzdWx0T3B0aW9ucy5zeXN0ZW0ucmVwbGFjZSgvKEFuZHJvaWR8aU9TKVxccy8sICcnKSxcclxuICAgICAgbXBzZGs6IHJlc3VsdE9wdGlvbnMuU0RLVmVyc2lvbiB8fCAnJyxcclxuICAgICAgbXB2OiByZXN1bHRPcHRpb25zLnZlcnNpb24gfHwgJycsXHJcbiAgICAgIGxhbmc6IHJlc3VsdE9wdGlvbnMubGFuZ3VhZ2UsXHJcbiAgICAgIHByOiByZXN1bHRPcHRpb25zLnBpeGVsUmF0aW8sXHJcbiAgICAgIHd3OiByZXN1bHRPcHRpb25zLndpbmRvd1dpZHRoLFxyXG4gICAgICB3aDogcmVzdWx0T3B0aW9ucy53aW5kb3dIZWlnaHQsXHJcbiAgICAgIHN3OiByZXN1bHRPcHRpb25zLnNjcmVlbldpZHRoLFxyXG4gICAgICBzaDogcmVzdWx0T3B0aW9ucy5zY3JlZW5IZWlnaHRcclxuICAgIH07XHJcblxyXG4gIH1cclxuXHJcbiAgX2FwcGxpY2F0aW9uU2hvdygpIHtcclxuICAgIGlmICh0aGlzLl9fbGljYXRpb25IaWRlKSB7XHJcbiAgICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCdhcHAnKTtcclxuICAgICAgaWYgKHRpbWUub3ZlcnRpbWUpIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICAgIHBhdGg6IHRoaXMuX2xhc3RQYWdlUm91dGUsXHJcbiAgICAgICAgICBzY2VuZTogdGhpcy5zdGF0RGF0YS5zY1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fX2xpY2F0aW9uSGlkZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2FwcGxpY2F0aW9uSGlkZShzZWxmLCB0eXBlKSB7XHJcblxyXG4gICAgdGhpcy5fX2xpY2F0aW9uSGlkZSA9IHRydWU7XHJcbiAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgY29uc3QgdGltZSA9IGdldFJlc2lkZW5jZVRpbWUoKTtcclxuICAgIGdldEZpcnN0VGltZSgpO1xyXG4gICAgY29uc3Qgcm91dGUgPSBnZXRQYWdlUm91dGUodGhpcyk7XHJcbiAgICB0aGlzLl9zZW5kSGlkZVJlcXVlc3Qoe1xyXG4gICAgICB1cmxyZWY6IHJvdXRlLFxyXG4gICAgICB1cmxyZWZfdHM6IHRpbWUucmVzaWRlbmNlVGltZVxyXG4gICAgfSwgdHlwZSk7XHJcbiAgfVxyXG5cclxuICBfcGFnZVNob3coKSB7XHJcbiAgICBjb25zdCByb3V0ZSA9IGdldFBhZ2VSb3V0ZSh0aGlzKTtcclxuICAgIGNvbnN0IHJvdXRlcGF0aCA9IGdldFJvdXRlKCk7XHJcbiAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUuY29uZmlnID0gUGFnZXNKc29uICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdLnRpdGxlTlZpZXcgJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0udGl0bGVOVmlldy50aXRsZVRleHQgfHxcclxuICAgICAgUGFnZXNKc29uICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdLm5hdmlnYXRpb25CYXJUaXRsZVRleHQgfHwgJyc7XHJcblxyXG4gICAgaWYgKHRoaXMuX19saWNhdGlvblNob3cpIHtcclxuICAgICAgZ2V0Rmlyc3RUaW1lKCk7XHJcbiAgICAgIHRoaXMuX19saWNhdGlvblNob3cgPSBmYWxzZTtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ+i/meaYryBvbkxhdWNoIOS5i+WQjuaJp+ihjOeahOesrOS4gOasoSBwYWdlU2hvdyDvvIzkuLrkuIvmrKHorrDlvZXml7bpl7TlgZrlh4blpIcnKTtcclxuICAgICAgdGhpcy5fbGFzdFBhZ2VSb3V0ZSA9IHJvdXRlO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGFzdFRpbWUoKTtcclxuICAgIHRoaXMuX2xhc3RQYWdlUm91dGUgPSByb3V0ZTtcclxuICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCdwYWdlJyk7XHJcbiAgICBpZiAodGltZS5vdmVydGltZSkge1xyXG4gICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICBwYXRoOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxyXG4gICAgICAgIHNjZW5lOiB0aGlzLnN0YXREYXRhLnNjXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgZ2V0Rmlyc3RUaW1lKCk7XHJcbiAgfVxyXG5cclxuICBfcGFnZUhpZGUoKSB7XHJcbiAgICBpZiAoIXRoaXMuX19saWNhdGlvbkhpZGUpIHtcclxuICAgICAgZ2V0TGFzdFRpbWUoKTtcclxuICAgICAgY29uc3QgdGltZSA9IGdldFJlc2lkZW5jZVRpbWUoJ3BhZ2UnKTtcclxuICAgICAgdGhpcy5fc2VuZFBhZ2VSZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IHRoaXMuX2xhc3RQYWdlUm91dGUsXHJcbiAgICAgICAgdXJscmVmOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxyXG4gICAgICAgIHVybHJlZl90czogdGltZS5yZXNpZGVuY2VUaW1lXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUgPSB7XHJcbiAgICAgICAgY29uZmlnOiAnJyxcclxuICAgICAgICBwYWdlOiAnJyxcclxuICAgICAgICByZXBvcnQ6ICcnLFxyXG4gICAgICAgIGx0OiAnJ1xyXG4gICAgICB9O1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfbG9naW4oKSB7XHJcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgICAga2V5OiAnbG9naW4nXHJcbiAgICB9LCAwKTtcclxuICB9XHJcblxyXG4gIF9zaGFyZSgpIHtcclxuICAgIHRoaXMuX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAgICBrZXk6ICdzaGFyZSdcclxuICAgIH0sIDApO1xyXG4gIH1cclxuICBfcGF5bWVudChrZXkpIHtcclxuICAgIHRoaXMuX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAgICBrZXlcclxuICAgIH0sIDApO1xyXG4gIH1cclxuICBfc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucykge1xyXG5cclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZS5sdCA9ICcxJztcclxuICAgIGxldCBxdWVyeSA9IG9wdGlvbnMucXVlcnkgJiYgSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5xdWVyeSkgIT09ICd7fScgPyAnPycgKyBKU09OLnN0cmluZ2lmeShvcHRpb25zLnF1ZXJ5KSA6ICcnO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5sdCA9ICcxJztcclxuICAgIHRoaXMuc3RhdERhdGEudXJsID0gKG9wdGlvbnMucGF0aCArIHF1ZXJ5KSB8fCAnJztcclxuICAgIHRoaXMuc3RhdERhdGEudCA9IGdldFRpbWUoKTtcclxuICAgIHRoaXMuc3RhdERhdGEuc2MgPSBnZXRTY2VuZShvcHRpb25zLnNjZW5lKTtcclxuICAgIHRoaXMuc3RhdERhdGEuZnZ0cyA9IGdldEZpcnN0VmlzaXRUaW1lKCk7XHJcbiAgICB0aGlzLnN0YXREYXRhLmx2dHMgPSBnZXRMYXN0VmlzaXRUaW1lKCk7XHJcbiAgICB0aGlzLnN0YXREYXRhLnR2YyA9IGdldFRvdGFsVmlzaXRDb3VudCgpO1xyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgdGhpcy5nZXRQcm9wZXJ0eSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5nZXROZXR3b3JrSW5mbygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX3NlbmRQYWdlUmVxdWVzdChvcHQpIHtcclxuICAgIGxldCB7XHJcbiAgICAgIHVybCxcclxuICAgICAgdXJscmVmLFxyXG4gICAgICB1cmxyZWZfdHNcclxuICAgIH0gPSBvcHQ7XHJcbiAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUubHQgPSAnMTEnO1xyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMTEnLFxyXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcclxuICAgICAgdXJsLFxyXG4gICAgICB0dDogdGhpcy5zdGF0RGF0YS50dCxcclxuICAgICAgdXJscmVmLFxyXG4gICAgICB1cmxyZWZfdHMsXHJcbiAgICAgIGNoOiB0aGlzLnN0YXREYXRhLmNoLFxyXG4gICAgICB1c3Y6IHRoaXMuc3RhdERhdGEudXN2LFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHA6IHRoaXMuc3RhdERhdGEucFxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIF9zZW5kSGlkZVJlcXVlc3Qob3B0LCB0eXBlKSB7XHJcbiAgICBsZXQge1xyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90c1xyXG4gICAgfSA9IG9wdDtcclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcclxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxyXG4gICAgICBsdDogJzMnLFxyXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcclxuICAgICAgdXJscmVmLFxyXG4gICAgICB1cmxyZWZfdHMsXHJcbiAgICAgIGNoOiB0aGlzLnN0YXREYXRhLmNoLFxyXG4gICAgICB1c3Y6IHRoaXMuc3RhdERhdGEudXN2LFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHA6IHRoaXMuc3RhdERhdGEucFxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChvcHRpb25zLCB0eXBlKTtcclxuICB9XHJcbiAgX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAga2V5ID0gJycsXHJcbiAgICB2YWx1ZSA9IFwiXCJcclxuICB9ID0ge30pIHtcclxuICAgIGNvbnN0IHJvdXRlID0gdGhpcy5fbGFzdFBhZ2VSb3V0ZTtcclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcclxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxyXG4gICAgICBsdDogJzIxJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIHVybDogcm91dGUsXHJcbiAgICAgIGNoOiB0aGlzLnN0YXREYXRhLmNoLFxyXG4gICAgICBlX246IGtleSxcclxuICAgICAgZV92OiB0eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA6IHZhbHVlLnRvU3RyaW5nKCksXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmV0d29ya0luZm8oKSB7XHJcbiAgICB1bmkuZ2V0TmV0d29ya1R5cGUoe1xyXG4gICAgICBzdWNjZXNzOiAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdGF0RGF0YS5uZXQgPSByZXN1bHQubmV0d29ya1R5cGU7XHJcbiAgICAgICAgdGhpcy5nZXRMb2NhdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFByb3BlcnR5KCkge1xyXG4gICAgcGx1cy5ydW50aW1lLmdldFByb3BlcnR5KHBsdXMucnVudGltZS5hcHBpZCwgKHdndGluZm8pID0+IHtcclxuICAgICAgdGhpcy5zdGF0RGF0YS52ID0gd2d0aW5mby52ZXJzaW9uIHx8ICcnO1xyXG4gICAgICB0aGlzLmdldE5ldHdvcmtJbmZvKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldExvY2F0aW9uKCkge1xyXG4gICAgaWYgKHN0YXRDb25maWcuZ2V0TG9jYXRpb24pIHtcclxuICAgICAgdW5pLmdldExvY2F0aW9uKHtcclxuICAgICAgICB0eXBlOiAnd2dzODQnLFxyXG4gICAgICAgIGdlb2NvZGU6IHRydWUsXHJcbiAgICAgICAgc3VjY2VzczogKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlc3VsdC5hZGRyZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdERhdGEuY24gPSByZXN1bHQuYWRkcmVzcy5jb3VudHJ5O1xyXG4gICAgICAgICAgICB0aGlzLnN0YXREYXRhLnBuID0gcmVzdWx0LmFkZHJlc3MucHJvdmluY2U7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdERhdGEuY3QgPSByZXN1bHQuYWRkcmVzcy5jaXR5O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMuc3RhdERhdGEubGF0ID0gcmVzdWx0LmxhdGl0dWRlO1xyXG4gICAgICAgICAgdGhpcy5zdGF0RGF0YS5sbmcgPSByZXN1bHQubG9uZ2l0dWRlO1xyXG4gICAgICAgICAgdGhpcy5yZXF1ZXN0KHRoaXMuc3RhdERhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnN0YXREYXRhLmxhdCA9IDA7XHJcbiAgICAgIHRoaXMuc3RhdERhdGEubG5nID0gMDtcclxuICAgICAgdGhpcy5yZXF1ZXN0KHRoaXMuc3RhdERhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVxdWVzdChkYXRhLCB0eXBlKSB7XHJcbiAgICBsZXQgdGltZSA9IGdldFRpbWUoKTtcclxuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlO1xyXG4gICAgZGF0YS50dG4gPSB0aXRsZS5wYWdlO1xyXG4gICAgZGF0YS50dHBqID0gdGl0bGUuY29uZmlnO1xyXG4gICAgZGF0YS50dGMgPSB0aXRsZS5yZXBvcnQ7XHJcblxyXG4gICAgbGV0IHJlcXVlc3REYXRhID0gdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGE7XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICByZXF1ZXN0RGF0YSA9IHVuaS5nZXRTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnKSB8fCB7fTtcclxuICAgIH1cclxuICAgIGlmICghcmVxdWVzdERhdGFbZGF0YS5sdF0pIHtcclxuICAgICAgcmVxdWVzdERhdGFbZGF0YS5sdF0gPSBbXTtcclxuICAgIH1cclxuICAgIHJlcXVlc3REYXRhW2RhdGEubHRdLnB1c2goZGF0YSk7XHJcblxyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKCdfX1VOSV9fU1RBVF9fREFUQScsIHJlcXVlc3REYXRhKTtcclxuICAgIH1cclxuICAgIGlmIChnZXRQYWdlUmVzaWRlbmNlVGltZSgpIDwgT1BFUkFUSU5HX1RJTUUgJiYgIXR5cGUpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBsZXQgdW5pU3RhdERhdGEgPSB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHVuaVN0YXREYXRhID0gdW5pLmdldFN0b3JhZ2VTeW5jKCdfX1VOSV9fU1RBVF9fREFUQScpO1xyXG4gICAgfVxyXG4gICAgLy8g5pe26Ze06LaF6L+H77yM6YeN5paw6I635Y+W5pe26Ze05oizXHJcbiAgICBzZXRQYWdlUmVzaWRlbmNlVGltZSgpO1xyXG4gICAgbGV0IGZpcnN0QXJyID0gW107XHJcbiAgICBsZXQgY29udGVudEFyciA9IFtdO1xyXG4gICAgbGV0IGxhc3RBcnIgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpIGluIHVuaVN0YXREYXRhKSB7XHJcbiAgICAgIGNvbnN0IHJkID0gdW5pU3RhdERhdGFbaV07XHJcbiAgICAgIHJkLmZvckVhY2goKGVsbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSBnZXRTcGxpY2luZyhlbG0pO1xyXG4gICAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICBmaXJzdEFyci5wdXNoKG5ld0RhdGEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMykge1xyXG4gICAgICAgICAgbGFzdEFyci5wdXNoKG5ld0RhdGEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb250ZW50QXJyLnB1c2gobmV3RGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmaXJzdEFyci5wdXNoKC4uLmNvbnRlbnRBcnIsIC4uLmxhc3RBcnIpO1xyXG4gICAgbGV0IG9wdGlvbnNEYXRhID0ge1xyXG4gICAgICB1c3Y6IFNUQVRfVkVSU0lPTiwgLy/nu5/orqEgU0RLIOeJiOacrOWPt1xyXG4gICAgICB0OiB0aW1lLCAvL+WPkemAgeivt+axguaXtueahOaXtumXtOaIrlxyXG4gICAgICByZXF1ZXN0czogSlNPTi5zdHJpbmdpZnkoZmlyc3RBcnIpLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YSA9IHt9O1xyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgdW5pLnJlbW92ZVN0b3JhZ2VTeW5jKCdfX1VOSV9fU1RBVF9fREFUQScpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhLnV0ID09PSAnaDUnKSB7XHJcbiAgICAgIHRoaXMuaW1hZ2VSZXF1ZXN0KG9wdGlvbnNEYXRhKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicgJiYgdGhpcy5zdGF0RGF0YS5wID09PSAnYScpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gICAgICB9LCAyMDApO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHRoaXMuX3NlbmRSZXF1ZXN0KG9wdGlvbnNEYXRhKTtcclxuICB9XHJcbiAgX3NlbmRSZXF1ZXN0KG9wdGlvbnNEYXRhKSB7XHJcbiAgICB1bmkucmVxdWVzdCh7XHJcbiAgICAgIHVybDogU1RBVF9VUkwsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAvLyBoZWFkZXI6IHtcclxuICAgICAgLy8gICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIC8vIOm7mOiupOWAvFxyXG4gICAgICAvLyB9LFxyXG4gICAgICBkYXRhOiBvcHRpb25zRGF0YSxcclxuICAgICAgc3VjY2VzczogKCkgPT4ge1xyXG4gICAgICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICAgIC8vICAgY29uc29sZS5sb2coJ3N0YXQgcmVxdWVzdCBzdWNjZXNzJyk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiAoZSkgPT4ge1xyXG4gICAgICAgIGlmICgrK3RoaXMuX3JldHJ5IDwgMykge1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlbmRSZXF1ZXN0KG9wdGlvbnNEYXRhKTtcclxuICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIGg1IOivt+axglxyXG4gICAqL1xyXG4gIGltYWdlUmVxdWVzdChkYXRhKSB7XHJcbiAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGxldCBvcHRpb25zID0gZ2V0U2dpbihHZXRFbmNvZGVVUklDb21wb25lbnRPcHRpb25zKGRhdGEpKS5vcHRpb25zO1xyXG4gICAgaW1hZ2Uuc3JjID0gU1RBVF9INV9VUkwgKyAnPycgKyBvcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgc2VuZEV2ZW50KGtleSwgdmFsdWUpIHtcclxuICAgIC8vIOagoemqjCB0eXBlIOWPguaVsFxyXG4gICAgaWYgKGNhbGlicmF0aW9uKGtleSwgdmFsdWUpKSByZXR1cm5cclxuXHJcbiAgICBpZiAoa2V5ID09PSAndGl0bGUnKSB7XHJcbiAgICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZS5yZXBvcnQgPSB2YWx1ZTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgICAga2V5LFxyXG4gICAgICB2YWx1ZTogdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiB2YWx1ZVxyXG4gICAgfSwgMSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuY2xhc3MgU3RhdCBleHRlbmRzIFV0aWwge1xyXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcclxuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFN0YXQoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gIH1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbnVsbDtcclxuICAgIC8vIOazqOWGjOaLpuaIquWZqFxyXG4gICAgaWYgKHR5cGVvZiB1bmkuYWRkSW50ZXJjZXB0b3IgPT09ICdmdW5jdGlvbicgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgdGhpcy5hZGRJbnRlcmNlcHRvckluaXQoKTtcclxuICAgICAgdGhpcy5pbnRlcmNlcHRMb2dpbigpO1xyXG4gICAgICB0aGlzLmludGVyY2VwdFNoYXJlKHRydWUpO1xyXG4gICAgICB0aGlzLmludGVyY2VwdFJlcXVlc3RQYXltZW50KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRJbnRlcmNlcHRvckluaXQoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ3NldE5hdmlnYXRpb25CYXJUaXRsZScsIHtcclxuICAgICAgaW52b2tlKGFyZ3MpIHtcclxuICAgICAgICBzZWxmLl9uYXZpZ2F0aW9uQmFyVGl0bGUucGFnZSA9IGFyZ3MudGl0bGU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJjZXB0TG9naW4oKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ2xvZ2luJywge1xyXG4gICAgICBjb21wbGV0ZSgpIHtcclxuICAgICAgICBzZWxmLl9sb2dpbigpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGludGVyY2VwdFNoYXJlKHR5cGUpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGlmICghdHlwZSkge1xyXG4gICAgICBzZWxmLl9zaGFyZSgpO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcignc2hhcmUnLCB7XHJcbiAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgc2VsZi5fc2hhcmUoKTtcclxuICAgICAgfSxcclxuICAgICAgZmFpbCgpIHtcclxuICAgICAgICBzZWxmLl9zaGFyZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGludGVyY2VwdFJlcXVlc3RQYXltZW50KCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdyZXF1ZXN0UGF5bWVudCcsIHtcclxuICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICBzZWxmLl9wYXltZW50KCdwYXlfc3VjY2VzcycpO1xyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKCkge1xyXG4gICAgICAgIHNlbGYuX3BheW1lbnQoJ3BheV9mYWlsJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVwb3J0KG9wdGlvbnMsIHNlbGYpIHtcclxuICAgIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICAvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgIC8vICAgY29uc29sZS5sb2coJ3JlcG9ydCBpbml0Jyk7XHJcbiAgICAvLyB9XHJcbiAgICBzZXRQYWdlUmVzaWRlbmNlVGltZSgpO1xyXG4gICAgdGhpcy5fX2xpY2F0aW9uU2hvdyA9IHRydWU7XHJcbiAgICB0aGlzLl9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIGxvYWQob3B0aW9ucywgc2VsZikge1xyXG4gICAgaWYgKCFzZWxmLiRzY29wZSAmJiAhc2VsZi4kbXApIHtcclxuICAgICAgY29uc3QgcGFnZSA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gICAgICBzZWxmLiRzY29wZSA9IHBhZ2VbcGFnZS5sZW5ndGggLSAxXTtcclxuICAgIH1cclxuICAgIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICB0aGlzLl9xdWVyeSA9IG9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBzaG93KHNlbGYpIHtcclxuICAgIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICBpZiAoZ2V0UGFnZVR5cGVzKHNlbGYpKSB7XHJcbiAgICAgIHRoaXMuX3BhZ2VTaG93KHNlbGYpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fYXBwbGljYXRpb25TaG93KHNlbGYpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVhZHkoc2VsZikge1xyXG4gICAgLy8gdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIC8vIGlmIChnZXRQYWdlVHlwZXMoc2VsZikpIHtcclxuICAgIC8vICAgdGhpcy5fcGFnZVNob3coc2VsZik7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG4gIGhpZGUoc2VsZikge1xyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIGlmIChnZXRQYWdlVHlwZXMoc2VsZikpIHtcclxuICAgICAgdGhpcy5fcGFnZUhpZGUoc2VsZik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9hcHBsaWNhdGlvbkhpZGUoc2VsZiwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVycm9yKGVtKSB7XHJcbiAgICBpZiAodGhpcy5fcGxhdGZvcm0gPT09ICdkZXZ0b29scycpIHtcclxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKCflvZPliY3ov5DooYznjq/looPkuLrlvIDlj5HogIXlt6XlhbfvvIzkuI3kuIrmiqXmlbDmja7jgIInKTtcclxuICAgICAgfVxyXG4gICAgICAvLyByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgZW1WYWwgPSAnJztcclxuICAgIGlmICghZW0ubWVzc2FnZSkge1xyXG4gICAgICBlbVZhbCA9IEpTT04uc3RyaW5naWZ5KGVtKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVtVmFsID0gZW0uc3RhY2s7XHJcbiAgICB9XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICczMScsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgbXBzZGs6IHRoaXMuc3RhdERhdGEubXBzZGssXHJcbiAgICAgIG1wdjogdGhpcy5zdGF0RGF0YS5tcHYsXHJcbiAgICAgIHY6IHRoaXMuc3RhdERhdGEudixcclxuICAgICAgZW06IGVtVmFsLFxyXG4gICAgICB1c3Y6IHRoaXMuc3RhdERhdGEudXN2LFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHA6IHRoaXMuc3RhdERhdGEucFxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChvcHRpb25zKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHN0YXQgPSBTdGF0LmdldEluc3RhbmNlKCk7XHJcbmxldCBpc0hpZGUgPSBmYWxzZTtcclxuY29uc3QgbGlmZWN5Y2xlID0ge1xyXG4gIG9uTGF1bmNoKG9wdGlvbnMpIHtcclxuICAgIHN0YXQucmVwb3J0KG9wdGlvbnMsIHRoaXMpO1xyXG4gIH0sXHJcbiAgb25SZWFkeSgpIHtcclxuICAgIHN0YXQucmVhZHkodGhpcyk7XHJcbiAgfSxcclxuICBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgc3RhdC5sb2FkKG9wdGlvbnMsIHRoaXMpO1xyXG4gICAgLy8g6YeN5YaZ5YiG5Lqr77yM6I635Y+W5YiG5Lqr5LiK5oql5LqL5Lu2XHJcbiAgICBpZiAodGhpcy4kc2NvcGUgJiYgdGhpcy4kc2NvcGUub25TaGFyZUFwcE1lc3NhZ2UpIHtcclxuICAgICAgbGV0IG9sZFNoYXJlQXBwTWVzc2FnZSA9IHRoaXMuJHNjb3BlLm9uU2hhcmVBcHBNZXNzYWdlO1xyXG4gICAgICB0aGlzLiRzY29wZS5vblNoYXJlQXBwTWVzc2FnZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgICAgICBzdGF0LmludGVyY2VwdFNoYXJlKGZhbHNlKTtcclxuICAgICAgICByZXR1cm4gb2xkU2hhcmVBcHBNZXNzYWdlLmNhbGwodGhpcywgb3B0aW9ucylcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9LFxyXG4gIG9uU2hvdygpIHtcclxuICAgIGlzSGlkZSA9IGZhbHNlO1xyXG4gICAgc3RhdC5zaG93KHRoaXMpO1xyXG4gIH0sXHJcbiAgb25IaWRlKCkge1xyXG4gICAgaXNIaWRlID0gdHJ1ZTtcclxuICAgIHN0YXQuaGlkZSh0aGlzKTtcclxuICB9LFxyXG4gIG9uVW5sb2FkKCkge1xyXG4gICAgaWYgKGlzSGlkZSkge1xyXG4gICAgICBpc0hpZGUgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBzdGF0LmhpZGUodGhpcyk7XHJcbiAgfSxcclxuICBvbkVycm9yKGUpIHtcclxuICAgIHN0YXQuZXJyb3IoZSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gbWFpbigpIHtcclxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgIHVuaS5yZXBvcnQgPSBmdW5jdGlvbih0eXBlLCBvcHRpb25zKSB7fTtcclxuICB9ZWxzZXtcclxuICAgIGNvbnN0IFZ1ZSA9IHJlcXVpcmUoJ3Z1ZScpO1xyXG4gICAgKFZ1ZS5kZWZhdWx0IHx8IFZ1ZSkubWl4aW4obGlmZWN5Y2xlKTtcclxuICAgIHVuaS5yZXBvcnQgPSBmdW5jdGlvbih0eXBlLCBvcHRpb25zKSB7XHJcbiAgICAgIHN0YXQuc2VuZEV2ZW50KHR5cGUsIG9wdGlvbnMpO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbm1haW4oKTtcclxuIiwiZnVuY3Rpb24gaW5pdFVuaSgpIHtcclxuXHJcbiAgICB2YXIgaXNGbiA9IGZ1bmN0aW9uIGlzRm4odikge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdiA9PT0gJ2Z1bmN0aW9uJztcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGhhbmRsZVByb21pc2UgPSBmdW5jdGlvbiBoYW5kbGVQcm9taXNlKHByb21pc2UpIHtcclxuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtudWxsLCBkYXRhXTtcclxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtlcnJdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgUkVHRVggPSAvXlxcJHxeb258XmNyZWF0ZXxTeW5jJHxNYW5hZ2VyJHxecGF1c2UvO1xyXG4gICAgdmFyIEFQSV9OT1JNQUxfTElTVCA9IFsnb3MnLCAnZ2V0Q3VycmVudFN1Yk5WdWUnLCAnZ2V0U3ViTlZ1ZUJ5SWQnLCAnc3RvcFJlY29yZCcsICdzdG9wVm9pY2UnLFxyXG4gICAgICAgICdzdG9wQmFja2dyb3VuZEF1ZGlvJywgJ3N0b3BQdWxsRG93blJlZnJlc2gnLCAnaGlkZUtleWJvYXJkJywgJ2hpZGVUb2FzdCcsICdoaWRlTG9hZGluZycsXHJcbiAgICAgICAgJ3Nob3dOYXZpZ2F0aW9uQmFyTG9hZGluZycsICdoaWRlTmF2aWdhdGlvbkJhckxvYWRpbmcnLCAnY2FuSVVzZScsICduYXZpZ2F0ZUJhY2snLCAnY2xvc2VTb2NrZXQnLFxyXG4gICAgICAgICdwYWdlU2Nyb2xsVG8nLCAnZHJhd0NhbnZhcydcclxuICAgIF07XHJcblxyXG4gICAgdmFyIHNob3VsZFByb21pc2UgPSBmdW5jdGlvbiBzaG91bGRQcm9taXNlKG5hbWUpIHtcclxuICAgICAgICBpZiAoUkVHRVgudGVzdChuYW1lKSAmJiBuYW1lICE9PSAnY3JlYXRlQkxFQ29ubmVjdGlvbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAofkFQSV9OT1JNQUxfTElTVC5pbmRleE9mKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBwcm9taXNpZnkgPSBmdW5jdGlvbiBwcm9taXNpZnkoYXBpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcGFyYW1zID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzRm4ob3B0aW9ucy5zdWNjZXNzKSB8fCBpc0ZuKG9wdGlvbnMuZmFpbCkgfHwgaXNGbihvcHRpb25zLmNvbXBsZXRlKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFwaS5hcHBseSh1bmRlZmluZWQsIFtvcHRpb25zXS5jb25jYXQocGFyYW1zKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZVByb21pc2UobmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBhcGkuYXBwbHkodW5kZWZpbmVkLCBbT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlc29sdmUsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbDogcmVqZWN0XHJcbiAgICAgICAgICAgICAgICB9KV0uY29uY2F0KHBhcmFtcykpO1xyXG4gICAgICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tZXh0ZW5kLW5hdGl2ZSAqL1xyXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzLmNvbnN0cnVjdG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgcmVhc29uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgb25NZXNzYWdlQ2FsbGJhY2tzID0gW107XHJcblxyXG4gICAgdmFyIG9yaWdpbiA9IHZvaWQgMDtcclxuXHJcbiAgICBmdW5jdGlvbiBvblN1Yk5WdWVNZXNzYWdlKGRhdGEpIHtcclxuICAgICAgICBvbk1lc3NhZ2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soe1xyXG4gICAgICAgICAgICAgICAgb3JpZ2luOiBvcmlnaW4sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciB3ZWJ2aWV3SWQgPSB3ZWV4UGx1cy53ZWJ2aWV3LmN1cnJlbnRXZWJ2aWV3KCkuaWQ7XHJcblxyXG4gICAgdmFyIGNoYW5uZWwgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbCgnVU5JLUFQUC1TVUJOVlVFJyk7XHJcbiAgICBjaGFubmVsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmRhdGEudG8gPT09IHdlYnZpZXdJZCkge1xyXG4gICAgICAgICAgICBvblN1Yk5WdWVNZXNzYWdlKGV2ZW50LmRhdGEuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiB3cmFwcGVyKHdlYnZpZXcpIHtcclxuICAgICAgICB3ZWJ2aWV3LiRwcm9jZXNzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICB2YXIgY3VycmVudFdlYnZpZXdJZCA9IHdlZXhQbHVzLndlYnZpZXcuY3VycmVudFdlYnZpZXcoKS5pZDtcclxuICAgICAgICB2YXIgaXNQb3B1cE5WdWUgPSBjdXJyZW50V2Vidmlld0lkID09PSB3ZWJ2aWV3LmlkO1xyXG5cclxuICAgICAgICB2YXIgaG9zdE5WdWVJZCA9IHdlYnZpZXcuX191bmlhcHBfb3JpZ2luX3R5cGUgPT09ICd1bmlOVmlldycgJiYgd2Vidmlldy5fX3VuaWFwcF9vcmlnaW5faWQ7XHJcbiAgICAgICAgdmFyIHBvcHVwTlZ1ZUlkID0gd2Vidmlldy5pZDtcclxuXHJcbiAgICAgICAgd2Vidmlldy5wb3N0TWVzc2FnZSA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGhvc3ROVnVlSWQpIHtcclxuICAgICAgICAgICAgICAgIGNoYW5uZWwucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgdG86IGlzUG9wdXBOVnVlID8gaG9zdE5WdWVJZCA6IHBvcHVwTlZ1ZUlkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnVW5pQXBwU3ViTlZ1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHdlYnZpZXcub25NZXNzYWdlID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgb25NZXNzYWdlQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICghd2Vidmlldy5fX3VuaWFwcF9tYXNrX2lkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgb3JpZ2luID0gd2Vidmlldy5fX3VuaWFwcF9ob3N0O1xyXG5cclxuICAgICAgICB2YXIgbWFza0NvbG9yID0gd2Vidmlldy5fX3VuaWFwcF9tYXNrO1xyXG5cclxuICAgICAgICB2YXIgbWFza1dlYnZpZXcgPSB3ZWV4UGx1cy53ZWJ2aWV3LmdldFdlYnZpZXdCeUlkKHdlYnZpZXcuX191bmlhcHBfbWFza19pZCk7XHJcbiAgICAgICAgbWFza1dlYnZpZXcgPSBtYXNrV2Vidmlldy5wYXJlbnQoKSB8fCBtYXNrV2VidmlldzsvL+WGjeasoeajgOa1i+eItlxyXG4gICAgICAgIHZhciBvbGRTaG93ID0gd2Vidmlldy5zaG93O1xyXG4gICAgICAgIHZhciBvbGRIaWRlID0gd2Vidmlldy5oaWRlO1xyXG4gICAgICAgIHZhciBvbGRDbG9zZSA9IHdlYnZpZXcuY2xvc2U7XHJcblxyXG4gICAgICAgIHZhciBzaG93TWFzayA9IGZ1bmN0aW9uIHNob3dNYXNrKCkge1xyXG4gICAgICAgICAgICBtYXNrV2Vidmlldy5zZXRTdHlsZSh7XHJcbiAgICAgICAgICAgICAgICBtYXNrOiBtYXNrQ29sb3JcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgY2xvc2VNYXNrID0gZnVuY3Rpb24gY2xvc2VNYXNrKCkge1xyXG4gICAgICAgICAgICBtYXNrV2Vidmlldy5zZXRTdHlsZSh7XHJcbiAgICAgICAgICAgICAgICBtYXNrOiAnbm9uZSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3ZWJ2aWV3LnNob3cgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2hvd01hc2soKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb2xkU2hvdy5hcHBseSh3ZWJ2aWV3LCBhcmdzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHdlYnZpZXcuaGlkZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjbG9zZU1hc2soKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvbGRIaWRlLmFwcGx5KHdlYnZpZXcsIGFyZ3MpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2Vidmlldy5jbG9zZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjbG9zZU1hc2soKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvbGRDbG9zZS5hcHBseSh3ZWJ2aWV3LCBhcmdzKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFN1Yk5WdWVCeUlkKGlkKSB7XHJcbiAgICAgICAgdmFyIHdlYnZpZXcgPSB3ZWV4UGx1cy53ZWJ2aWV3LmdldFdlYnZpZXdCeUlkKGlkKTtcclxuICAgICAgICBpZiAod2VidmlldyAmJiAhd2Vidmlldy4kcHJvY2Vzc2VkKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIod2Vidmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB3ZWJ2aWV3O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRTdWJOVnVlKCkge1xyXG4gICAgICAgIHJldHVybiBnZXRTdWJOVnVlQnlJZCh3ZWV4UGx1cy53ZWJ2aWV3LmN1cnJlbnRXZWJ2aWV3KCkuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBwbHVzID0gd2VleC5yZXF1aXJlTW9kdWxlKCdwbHVzJyk7XHJcbiAgICB2YXIgZ2xvYmFsRXZlbnQgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2dsb2JhbEV2ZW50Jyk7XHJcblxyXG4gICAgdmFyIGlkID0gMDtcclxuICAgIHZhciBjYWxsYmFja3MgPSB7fTtcclxuXHJcbiAgICB2YXIgVU5JQVBQX1NFUlZJQ0VfTlZVRV9JRCA9ICdfX3VuaWFwcF9fc2VydmljZSc7XHJcblxyXG4gICAgZ2xvYmFsRXZlbnQuYWRkRXZlbnRMaXN0ZW5lcigncGx1c01lc3NhZ2UnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKGUuZGF0YS50eXBlID09PSAnVW5pQXBwSnNBcGknKSB7XHJcbiAgICAgICAgICAgIGludm9rZShlLmRhdGEuaWQsIGUuZGF0YS5kYXRhKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnVW5pQXBwU3ViTlZ1ZScpIHtcclxuICAgICAgICAgICAgb25TdWJOVnVlTWVzc2FnZShlLmRhdGEuZGF0YSwgZS5kYXRhLm9wdGlvbnMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZCcpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBjcmVhdGVDYWxsYmFjayA9IGZ1bmN0aW9uIGNyZWF0ZUNhbGxiYWNrKGFyZ3MsIHR5cGUpIHtcclxuICAgICAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFjayhyZXMpIHtcclxuICAgICAgICAgICAgaWYgKGlzRm4oYXJncykpIHtcclxuICAgICAgICAgICAgICAgIGFyZ3MocmVzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAofnJlcy5lcnJNc2cuaW5kZXhPZignOm9rJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0ZuKGFyZ3Muc3VjY2VzcykgJiYgYXJncy5zdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKH5yZXMuZXJyTXNnLmluZGV4T2YoJzpmYWlsJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0ZuKGFyZ3MuZmFpbCkgJiYgYXJncy5mYWlsKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGFyZ3MuY29tcGxldGUpICYmIGFyZ3MuY29tcGxldGUocmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGlzRm4oYXJncykgfHwgYXJncyAmJiBpc0ZuKGFyZ3MuY2FsbGJhY2spKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrLmtlZXBBbGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjYWxsYmFjaztcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGludm9rZSA9IGZ1bmN0aW9uIGludm9rZShjYWxsYmFja0lkLCBkYXRhKSB7XHJcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gY2FsbGJhY2tzW2NhbGxiYWNrSWRdO1xyXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgaWYgKCFjYWxsYmFjay5rZWVwQWxpdmUpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBjYWxsYmFja3NbY2FsbGJhY2tJZF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdjYWxsYmFja1snICsgY2FsbGJhY2tJZCArICddIGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIHB1Ymxpc2ggPSBmdW5jdGlvbiBwdWJsaXNoKF9yZWYpIHtcclxuICAgICAgICB2YXIgaWQgPSBfcmVmLmlkLFxyXG4gICAgICAgICAgICB0eXBlID0gX3JlZi50eXBlLFxyXG4gICAgICAgICAgICBwYXJhbXMgPSBfcmVmLnBhcmFtcztcclxuXHJcbiAgICAgICAgY2FsbGJhY2tzW2lkXSA9IGNyZWF0ZUNhbGxiYWNrKHBhcmFtcywgdHlwZSk7XHJcbiAgICAgICAgcGx1cy5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXNcclxuICAgICAgICB9LCBVTklBUFBfU0VSVklDRV9OVlVFX0lEKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gcG9zdE1lc3NhZ2UoZGF0YSkge1xyXG4gICAgICAgIHBsdXMucG9zdE1lc3NhZ2UoZGF0YSwgVU5JQVBQX1NFUlZJQ0VfTlZVRV9JRCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNyZWF0ZVB1Ymxpc2ggPSBmdW5jdGlvbiBjcmVhdGVQdWJsaXNoKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oYXJncykge1xyXG4gICAgICAgICAgICBwdWJsaXNoKHtcclxuICAgICAgICAgICAgICAgIGlkOiBpZCsrLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogbmFtZSxcclxuICAgICAgICAgICAgICAgIHBhcmFtczogYXJnc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2sgPSB2b2lkIDA7XHJcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkQ2FsbGJhY2sgPSB2b2lkIDA7XHJcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayA9IHZvaWQgMDtcclxuICAgIHZhciBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWRDYWxsYmFjayA9IHZvaWQgMDtcclxuXHJcbiAgICBmdW5jdGlvbiBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAoY2FsbGJhY2spIHtcclxuICAgICAgICBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXBDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZChjYWxsYmFjaykge1xyXG4gICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQoY2FsbGJhY2spIHtcclxuICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXF1aXJlTmF0aXZlUGx1Z2luKHBsdWdpbk5hbWUpIHtcclxuICAgICAgICByZXR1cm4gd2VleC5yZXF1aXJlTW9kdWxlKHBsdWdpbk5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBkb20gPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2RvbScpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRGb250RmFjZShfcmVmKSB7XHJcbiAgICAgICAgdmFyIGZhbWlseSA9IF9yZWYuZmFtaWx5LFxyXG4gICAgICAgICAgICBzb3VyY2UgPSBfcmVmLnNvdXJjZSxcclxuICAgICAgICAgICAgZGVzYyA9IF9yZWYuZGVzYyxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICBkb20uYWRkUnVsZSgnZm9udEZhY2UnLCB7XHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IGZhbWlseSxcclxuICAgICAgICAgICAgc3JjOiBzb3VyY2UucmVwbGFjZSgvXCIvZywgJ1xcJycpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIHJlcyA9IHtcclxuICAgICAgICAgICAgZXJyTXNnOiAnbG9hZEZvbnRGYWNlOm9rJyxcclxuICAgICAgICAgICAgc3RhdHVzOiAnbG9hZGVkJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZ2xvYmFsRXZlbnQkMSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZ2xvYmFsRXZlbnQnKTtcclxuXHJcbiAgICB2YXIgY2FsbGJhY2tzJDEgPSBbXTtcclxuXHJcbiAgICBnbG9iYWxFdmVudCQxLmFkZEV2ZW50TGlzdGVuZXIoJ3BsdXNNZXNzYWdlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmIChlLmRhdGEudHlwZSA9PT0gJ1VuaUFwcFJlYWR5Jykge1xyXG4gICAgICAgICAgICByZWFkeS5pc1VuaUFwcFJlYWR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrcyQxLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzJDEuZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MkMSA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVhZHkoY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVW5pQXBwUmVhZHkpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MkMS5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XHJcbiAgICB9IDogZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID9cclxuICAgICAgICAgICAgXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBzdHJlYW0gPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ3N0cmVhbScpO1xyXG5cclxuICAgIC8vIGxldCByZXF1ZXN0VGFza0lkID0gMFxyXG5cclxuICAgIHZhciBNRVRIT0RfR0VUID0gJ0dFVCc7XHJcbiAgICB2YXIgTUVUSE9EX1BPU1QgPSAnUE9TVCc7XHJcbiAgICB2YXIgQ09OVEVOVF9UWVBFX0pTT04gPSAnYXBwbGljYXRpb24vanNvbic7XHJcbiAgICB2YXIgQ09OVEVOVF9UWVBFX0ZPUk0gPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJztcclxuXHJcbiAgICB2YXIgc2VyaWFsaXplID0gZnVuY3Rpb24gc2VyaWFsaXplKGRhdGEpIHtcclxuICAgICAgICB2YXIgbWV0aG9kID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBNRVRIT0RfR0VUO1xyXG4gICAgICAgIHZhciBjb250ZW50VHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogQ09OVEVOVF9UWVBFX0ZPUk07XHJcblxyXG4gICAgICAgIGlmICgodHlwZW9mIGRhdGEgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGRhdGEpKSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgaWYgKG1ldGhvZC50b1VwcGVyQ2FzZSgpID09PSBNRVRIT0RfUE9TVCAmJiBjb250ZW50VHlwZS50b0xvd2VyQ2FzZSgpID09PSBDT05URU5UX1RZUEVfSlNPTikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpLm1hcChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoZGF0YVtrZXldKTtcclxuICAgICAgICAgICAgICAgIH0pLmpvaW4oJyYnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gcmVxdWVzdChfcmVmKSB7XHJcbiAgICAgICAgdmFyIHVybCA9IF9yZWYudXJsLFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZi5kYXRhLFxyXG4gICAgICAgICAgICBoZWFkZXIgPSBfcmVmLmhlYWRlcixcclxuICAgICAgICAgICAgX3JlZiRtZXRob2QgPSBfcmVmLm1ldGhvZCxcclxuICAgICAgICAgICAgbWV0aG9kID0gX3JlZiRtZXRob2QgPT09IHVuZGVmaW5lZCA/ICdHRVQnIDogX3JlZiRtZXRob2QsXHJcbiAgICAgICAgICAgIF9yZWYkZGF0YVR5cGUgPSBfcmVmLmRhdGFUeXBlLFxyXG4gICAgICAgICAgICBkYXRhVHlwZSA9IF9yZWYkZGF0YVR5cGUgPT09IHVuZGVmaW5lZCA/ICdqc29uJyA6IF9yZWYkZGF0YVR5cGUsXHJcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZSA9IF9yZWYucmVzcG9uc2VUeXBlLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZi5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYuY29tcGxldGU7XHJcblxyXG4gICAgICAgIC8vIHJlcXVlc3RUYXNrSWQrK1xyXG4gICAgICAgIHZhciBhYm9ydGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHZhciBoYXNDb250ZW50VHlwZSA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBoZWFkZXJzID0ge307XHJcbiAgICAgICAgaWYgKGhlYWRlcikge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBuYW1lIGluIGhlYWRlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFoYXNDb250ZW50VHlwZSAmJiBuYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzQ29udGVudFR5cGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gaGVhZGVyW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzW25hbWVdID0gaGVhZGVyW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXRob2QgPT09IE1FVEhPRF9HRVQgJiYgZGF0YSkge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwgKyAofnVybC5pbmRleE9mKCc/JykgPyB1cmwuc3Vic3RyKC0xKSA9PT0gJyYnIHx8IHVybC5zdWJzdHIoLTEpID09PSAnPycgPyAnJyA6ICcmJyA6ICc/JykgK1xyXG4gICAgICAgICAgICAgICAgc2VyaWFsaXplKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdHJlYW0uZmV0Y2goe1xyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICAgICAgICAgIHR5cGU6IGRhdGFUeXBlID09PSAnanNvbicgPyAnanNvbicgOiAndGV4dCcsXHJcbiAgICAgICAgICAgIGJvZHk6IG1ldGhvZCAhPT0gTUVUSE9EX0dFVCA/IHNlcmlhbGl6ZShkYXRhLCBtZXRob2QsIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSA6ICcnXHJcbiAgICAgICAgfSwgZnVuY3Rpb24oX3JlZjIpIHtcclxuICAgICAgICAgICAgdmFyIHN0YXR1cyA9IF9yZWYyLnN0YXR1cyxcclxuICAgICAgICAgICAgICAgIG9rID0gX3JlZjIub2ssXHJcbiAgICAgICAgICAgICAgICBzdGF0dXNUZXh0ID0gX3JlZjIuc3RhdHVzVGV4dCxcclxuICAgICAgICAgICAgICAgIGRhdGEgPSBfcmVmMi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVycyA9IF9yZWYyLmhlYWRlcnM7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmV0ID0ge307XHJcbiAgICAgICAgICAgIGlmICghc3RhdHVzIHx8IHN0YXR1cyA9PT0gLTEgfHwgYWJvcnRlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0LmVyck1zZyA9ICdyZXF1ZXN0OmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJldCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXQuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICByZXQuc3RhdHVzQ29kZSA9IHN0YXR1cztcclxuICAgICAgICAgICAgICAgIHJldC5oZWFkZXIgPSBoZWFkZXJzO1xyXG4gICAgICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmV0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBhYm9ydDogZnVuY3Rpb24gYWJvcnQoKSB7XHJcbiAgICAgICAgICAgICAgICBhYm9ydGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHN0b3JhZ2UgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ3BsdXNzdG9yYWdlJyk7XHJcbiAgICB2YXIgVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFID0gJ19fVFlQRSc7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U3RvcmFnZShfcmVmKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9yZWYua2V5LFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZi5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZi5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYuY29tcGxldGU7XHJcblxyXG4gICAgICAgIHN0b3JhZ2UuZ2V0SXRlbShrZXkgKyBVTklBUFBfU1RPUkFHRV9EQVRBX1RZUEUsIGZ1bmN0aW9uKHJldCkge1xyXG4gICAgICAgICAgICBpZiAocmV0LnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YVR5cGUgPSByZXQuZGF0YTtcclxuICAgICAgICAgICAgICAgIHN0b3JhZ2UuZ2V0SXRlbShrZXksIGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVR5cGUgJiYgcmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVR5cGUgIT09ICdTdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gSlNPTi5wYXJzZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJNc2c6ICdnZXRTdG9yYWdlOm9rJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXN1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXQuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmV0KTtcclxuICAgICAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRTdG9yYWdlKF9yZWYyKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9yZWYyLmtleSxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWYyLmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmMi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZjIuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmMi5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgdmFyIGRhdGFUeXBlID0gJ1N0cmluZyc7XHJcbiAgICAgICAgaWYgKCh0eXBlb2YgZGF0YSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoZGF0YSkpID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBkYXRhVHlwZSA9ICdPYmplY3QnO1xyXG4gICAgICAgICAgICBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbShrZXksIGRhdGEsIGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICBzdG9yYWdlLnNldEl0ZW0oa2V5ICsgVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFLCBkYXRhVHlwZSwgZnVuY3Rpb24ocmV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJldC5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyTXNnOiAnc2V0U3RvcmFnZTpvaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmV0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlcy5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlU3RvcmFnZShfcmVmMykge1xyXG4gICAgICAgIHZhciBrZXkgPSBfcmVmMy5rZXksXHJcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmMy5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZjMuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYzLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZjMuY29tcGxldGU7XHJcblxyXG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbShrZXksIGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgIGVyck1zZzogJ3JlbW92ZVN0b3JhZ2U6b2snXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlcy5lcnJNc2cgPSAncmVtb3ZlU3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKGtleSArIFVOSUFQUF9TVE9SQUdFX0RBVEFfVFlQRSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xlYXJTdG9yYWdlKF9yZWY0KSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9yZWY0LmtleSxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWY0LmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmNC5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZjQuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmNC5jb21wbGV0ZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY2xpcGJvYXJkID0gd2VleC5yZXF1aXJlTW9kdWxlKCdjbGlwYm9hcmQnKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDbGlwYm9hcmREYXRhKF9yZWYpIHtcclxuICAgICAgICB2YXIgc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICBjbGlwYm9hcmQuZ2V0U3RyaW5nKGZ1bmN0aW9uKF9yZWYyKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gX3JlZjIuZGF0YTtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXMgPSB7XHJcbiAgICAgICAgICAgICAgICBlcnJNc2c6ICdnZXRDbGlwYm9hcmREYXRhOm9rJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0Q2xpcGJvYXJkRGF0YShfcmVmMykge1xyXG4gICAgICAgIHZhciBkYXRhID0gX3JlZjMuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYzLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmMy5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYzLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICB2YXIgcmVzID0ge1xyXG4gICAgICAgICAgICBlcnJNc2c6ICdzZXRDbGlwYm9hcmREYXRhOm9rJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2xpcGJvYXJkLnNldFN0cmluZyhkYXRhKTtcclxuICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3MocmVzKTtcclxuICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBnZXRFbWl0dGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBnZXRVbmlFbWl0dGVyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcbiAgICAgICAgICAgIHJldHVybiBnZXRVbmlFbWl0dGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgRW1pdHRlciA9IHtcclxuICAgICAgICAgICAgJG9uOiBmdW5jdGlvbiAkb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaS4kb24gZmFpbGVkJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICRvZmY6IGZ1bmN0aW9uICRvZmYoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaS4kb2ZmIGZhaWxlZCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAkb25jZTogZnVuY3Rpb24gJG9uY2UoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaS4kb25jZSBmYWlsZWQnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJGVtaXQ6IGZ1bmN0aW9uICRlbWl0KCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bmkuJGVtaXQgZmFpbGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBnZXRVbmlFbWl0dGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gRW1pdHRlcjtcclxuICAgICAgICB9O1xyXG4gICAgfSgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFwcGx5KGN0eCwgbWV0aG9kLCBhcmdzKSB7XHJcbiAgICAgICAgcmV0dXJuIGN0eFttZXRob2RdLmFwcGx5KGN0eCwgYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gJG9uKCkge1xyXG4gICAgICAgIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckb24nLCBbXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uICRvZmYoKSB7XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRvZmYnLCBbXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uICRvbmNlKCkge1xyXG4gICAgICAgIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckb25jZScsIFtdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gJGVtaXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRlbWl0JywgW10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHZhciBhcGkgPSAvKiNfX1BVUkVfXyovIE9iamVjdC5mcmVlemUoe1xyXG4gICAgICAgIGxvYWRGb250RmFjZTogbG9hZEZvbnRGYWNlLFxyXG4gICAgICAgIHJlYWR5OiByZWFkeSxcclxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxyXG4gICAgICAgIGdldFN0b3JhZ2U6IGdldFN0b3JhZ2UsXHJcbiAgICAgICAgc2V0U3RvcmFnZTogc2V0U3RvcmFnZSxcclxuICAgICAgICByZW1vdmVTdG9yYWdlOiByZW1vdmVTdG9yYWdlLFxyXG4gICAgICAgIGNsZWFyU3RvcmFnZTogY2xlYXJTdG9yYWdlLFxyXG4gICAgICAgIGdldENsaXBib2FyZERhdGE6IGdldENsaXBib2FyZERhdGEsXHJcbiAgICAgICAgc2V0Q2xpcGJvYXJkRGF0YTogc2V0Q2xpcGJvYXJkRGF0YSxcclxuICAgICAgICBvblN1Yk5WdWVNZXNzYWdlOiBvblN1Yk5WdWVNZXNzYWdlLFxyXG4gICAgICAgIGdldFN1Yk5WdWVCeUlkOiBnZXRTdWJOVnVlQnlJZCxcclxuICAgICAgICBnZXRDdXJyZW50U3ViTlZ1ZTogZ2V0Q3VycmVudFN1Yk5WdWUsXHJcbiAgICAgICAgJG9uOiAkb24sXHJcbiAgICAgICAgJG9mZjogJG9mZixcclxuICAgICAgICAkb25jZTogJG9uY2UsXHJcbiAgICAgICAgJGVtaXQ6ICRlbWl0XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdmFyIHd4ID0ge1xyXG4gICAgICAgIHVwbG9hZEZpbGU6IHRydWUsXHJcbiAgICAgICAgZG93bmxvYWRGaWxlOiB0cnVlLFxyXG4gICAgICAgIGNob29zZUltYWdlOiB0cnVlLFxyXG4gICAgICAgIHByZXZpZXdJbWFnZTogdHJ1ZSxcclxuICAgICAgICBnZXRJbWFnZUluZm86IHRydWUsXHJcbiAgICAgICAgc2F2ZUltYWdlVG9QaG90b3NBbGJ1bTogdHJ1ZSxcclxuICAgICAgICBjaG9vc2VWaWRlbzogdHJ1ZSxcclxuICAgICAgICBzYXZlVmlkZW9Ub1Bob3Rvc0FsYnVtOiB0cnVlLFxyXG4gICAgICAgIHNhdmVGaWxlOiB0cnVlLFxyXG4gICAgICAgIGdldFNhdmVkRmlsZUxpc3Q6IHRydWUsXHJcbiAgICAgICAgZ2V0U2F2ZWRGaWxlSW5mbzogdHJ1ZSxcclxuICAgICAgICByZW1vdmVTYXZlZEZpbGU6IHRydWUsXHJcbiAgICAgICAgb3BlbkRvY3VtZW50OiB0cnVlLFxyXG4gICAgICAgIHNldFN0b3JhZ2U6IHRydWUsXHJcbiAgICAgICAgZ2V0U3RvcmFnZTogdHJ1ZSxcclxuICAgICAgICBnZXRTdG9yYWdlSW5mbzogdHJ1ZSxcclxuICAgICAgICByZW1vdmVTdG9yYWdlOiB0cnVlLFxyXG4gICAgICAgIGNsZWFyU3RvcmFnZTogdHJ1ZSxcclxuICAgICAgICBnZXRMb2NhdGlvbjogdHJ1ZSxcclxuICAgICAgICBjaG9vc2VMb2NhdGlvbjogdHJ1ZSxcclxuICAgICAgICBvcGVuTG9jYXRpb246IHRydWUsXHJcbiAgICAgICAgZ2V0U3lzdGVtSW5mbzogdHJ1ZSxcclxuICAgICAgICBnZXROZXR3b3JrVHlwZTogdHJ1ZSxcclxuICAgICAgICBtYWtlUGhvbmVDYWxsOiB0cnVlLFxyXG4gICAgICAgIHNjYW5Db2RlOiB0cnVlLFxyXG4gICAgICAgIHNldFNjcmVlbkJyaWdodG5lc3M6IHRydWUsXHJcbiAgICAgICAgZ2V0U2NyZWVuQnJpZ2h0bmVzczogdHJ1ZSxcclxuICAgICAgICBzZXRLZWVwU2NyZWVuT246IHRydWUsXHJcbiAgICAgICAgdmlicmF0ZUxvbmc6IHRydWUsXHJcbiAgICAgICAgdmlicmF0ZVNob3J0OiB0cnVlLFxyXG4gICAgICAgIGFkZFBob25lQ29udGFjdDogdHJ1ZSxcclxuICAgICAgICBzaG93VG9hc3Q6IHRydWUsXHJcbiAgICAgICAgc2hvd0xvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgaGlkZVRvYXN0OiB0cnVlLFxyXG4gICAgICAgIGhpZGVMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIHNob3dNb2RhbDogdHJ1ZSxcclxuICAgICAgICBzaG93QWN0aW9uU2hlZXQ6IHRydWUsXHJcbiAgICAgICAgc2V0TmF2aWdhdGlvbkJhclRpdGxlOiB0cnVlLFxyXG4gICAgICAgIHNldE5hdmlnYXRpb25CYXJDb2xvcjogdHJ1ZSxcclxuICAgICAgICBuYXZpZ2F0ZVRvOiB0cnVlLFxyXG4gICAgICAgIHJlZGlyZWN0VG86IHRydWUsXHJcbiAgICAgICAgcmVMYXVuY2g6IHRydWUsXHJcbiAgICAgICAgc3dpdGNoVGFiOiB0cnVlLFxyXG4gICAgICAgIG5hdmlnYXRlQmFjazogdHJ1ZSxcclxuICAgICAgICBnZXRQcm92aWRlcjogdHJ1ZSxcclxuICAgICAgICBsb2dpbjogdHJ1ZSxcclxuICAgICAgICBnZXRVc2VySW5mbzogdHJ1ZSxcclxuICAgICAgICBzaGFyZTogdHJ1ZSxcclxuICAgICAgICByZXF1ZXN0UGF5bWVudDogdHJ1ZSxcclxuICAgICAgICBzdWJzY3JpYmVQdXNoOiB0cnVlLFxyXG4gICAgICAgIHVuc3Vic2NyaWJlUHVzaDogdHJ1ZSxcclxuICAgICAgICBvblB1c2g6IHRydWUsXHJcbiAgICAgICAgb2ZmUHVzaDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFzZVVuaSA9IHtcclxuICAgICAgICBvczoge1xyXG4gICAgICAgICAgICBudnVlOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgdW5pID0ge307XHJcblxyXG4gICAgaWYgKHR5cGVvZiBQcm94eSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB1bmkgPSBuZXcgUHJveHkoe30sIHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQodGFyZ2V0LCBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29zJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG52dWU6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdwb3N0TWVzc2FnZScpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9zdE1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ3JlcXVpcmVOYXRpdmVQbHVnaW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVpcmVOYXRpdmVQbHVnaW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29uTmF2aWdhdGlvbkJhckJ1dHRvblRhcCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBtZXRob2QgPSBhcGlbbmFtZV07XHJcbiAgICAgICAgICAgICAgICBpZiAoIW1ldGhvZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZCA9IGNyZWF0ZVB1Ymxpc2gobmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkUHJvbWlzZShuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNpZnkobWV0aG9kKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXRob2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoYmFzZVVuaSkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgdW5pW2tleV0gPSBiYXNlVW5pW2tleV07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHVuaS5wb3N0TWVzc2FnZSA9IHBvc3RNZXNzYWdlO1xyXG5cclxuICAgICAgICB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbiA9IHJlcXVpcmVOYXRpdmVQbHVnaW47XHJcblxyXG4gICAgICAgIHVuaS5vbk5hdmlnYXRpb25CYXJCdXR0b25UYXAgPSBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXA7XHJcblxyXG4gICAgICAgIHVuaS5vbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQgPSBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQ7XHJcblxyXG4gICAgICAgIHVuaS5vbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZCA9IG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkO1xyXG5cclxuICAgICAgICB1bmkub25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkID0gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkO1xyXG5cclxuICAgICAgICBPYmplY3Qua2V5cyh3eCkuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XHJcbiAgICAgICAgICAgIHZhciBtZXRob2QgPSBhcGlbbmFtZV07XHJcbiAgICAgICAgICAgIGlmICghbWV0aG9kKSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2QgPSBjcmVhdGVQdWJsaXNoKG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzaG91bGRQcm9taXNlKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICB1bmlbbmFtZV0gPSBwcm9taXNpZnkobWV0aG9kKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHVuaVtuYW1lXSA9IG1ldGhvZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuaTtcclxufVxyXG5cclxudmFyIGNyZWF0ZVVuaTtcclxuXHJcbmlmICh0eXBlb2YgZ2V0VW5pID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBjcmVhdGVVbmkgPSBnZXRVbmk7XHJcbn0gZWxzZSB7XHJcbiAgICBjcmVhdGVVbmkgPSBpbml0VW5pO1xyXG59XHJcbnZhciB3ZWV4UGx1cyA9IG5ldyBXZWV4UGx1cyh3ZWV4KTtcclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVW5pKHdlZXgsIHdlZXhQbHVzLCBCcm9hZGNhc3RDaGFubmVsKTtcclxuZXhwb3J0IHtcclxuICAgIHdlZXhQbHVzXHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcInBhZ2VzXCI6e30sXCJnbG9iYWxTdHlsZVwiOnt9fSIsImV4cG9ydCBkZWZhdWx0IHtcImFwcGlkXCI6XCJfX1VOSV9fQjAwNDU0MVwifSIsIlZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyA9IHt9XG5WdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKS5kZWZhdWx0LFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXylcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0xIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMiEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTMhLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy92dWUtbG9hZGVyL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTEhLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0yIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMyEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiQEZPTlQtRkFDRVwiOiBbXG4gICAge1xuICAgICAgXCJmb250RmFtaWx5XCI6IFwidW5paWNvbnNcIixcbiAgICAgIFwiZm9udFdlaWdodFwiOiBcIm5vcm1hbFwiLFxuICAgICAgXCJmb250U3R5bGVcIjogXCJub3JtYWxcIixcbiAgICAgIFwic3JjXCI6IFwidXJsKCdodHRwczovL2ltZy1jZG4tcWluaXUuZGNsb3VkLm5ldC5jbi9mb250cy91bmkudHRmP3Q9MTUzNjU2NTYyNzUxMCcpIGZvcm1hdCgndHJ1ZXR5cGUnKVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImZvbnRGYW1pbHlcIjogXCJ0aG9ydWlGb250XCIsXG4gICAgICBcInNyY1wiOiBcInVybChkYXRhOmFwcGxpY2F0aW9uL2ZvbnQtd29mZjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxkMDlHUmdBQkFBQUFBR1kwQUEwQUFBQUFyZ2dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQkdSbFJOQUFCbUdBQUFBQm9BQUFBY2lJdk5xMGRFUlVZQUFHWDRBQUFBSGdBQUFCNEFLUURCVDFNdk1nQUFBYVFBQUFCQ0FBQUFWanh3VGdwamJXRndBQUFDM0FBQUFaZ0FBQU02Lzc4Q2pXZGhjM0FBQUdYd0FBQUFDQUFBQUFqLy93QURaMng1WmdBQUJld0FBRm1EQUFDWmhNRzNMaWhvWldGa0FBQUJNQUFBQURFQUFBQTJHQmJxbldob1pXRUFBQUZrQUFBQUlBQUFBQ1FKN2dYZ2FHMTBlQUFBQWVnQUFBRDBBQUFCNnYxQU0wbHNiMk5oQUFBRWRBQUFBWGdBQUFGNDNtc0MxRzFoZUhBQUFBR0VBQUFBSHdBQUFDQUIzd0lTYm1GdFpRQUFYM0FBQUFGSkFBQUNpQ25tRVZWd2IzTjBBQUJndkFBQUJUUUFBQWxvd1EvUjVYamFZMkJrWUdBQTRuTnBOL2ppK1cyK01uQ3pNSURBemVMTGdURDYvNC8vZFd3U3pBMUFMZ2NERTBnVUFGdkFETW9BQUFCNDJtTmdaR0JnYnZqZndCRERwdnIvQndNRG13UURVQVFGV0FFQWV6RUUyM2phWTJCa1lHRFl6Y1RHSU1VQUFreEF6QVdFREF6L3dYd0dBQjhqQWZRQWVOcGpZR1JoWVp6QXdNckF3TlRKZElhQmdhRWZRak8rWmpCaTVBQ0tNckF5TTJBRkFXbXVLUXdPenhqZWlEQTMvRzlnaUdGdVlHZ0NDak9DNUFEZUR3djdBQUI0MmsyUXYwckRVQlNIZjRIVVFYeUNJazJoQ0s1Q0tVTFJ0QjI3T1dRUktYMENjYW9nVnE0Z0R1cnVwZ0ZGWDhCVnlLTjA5UTNjNm5kUFRyRDUrSEwrM0p0N0QwbFZQMGtodGZyNlRxVlJxdlV2Y1l3ZFhPQUtaMXQ3MmlHZW9QQVV6L0VScHpqQVMyeGppY1cveVM3eHkzM0dIdjdRSDNpOHgrQ3FOczZoQnovL3pPMjVML2pPbkd2ZnQra0VjNnp3TlcxcG0zaXRXKzFyQ1NYRUdKelNpWGtGYzZQU3lBaDRwd2swVmN5R2R0NlFlZ3JCK2tjd3RsMVg5dTRvMHdIVVo5L0E1bDFkQ0ZyQk1xbS9qK1RHb1ZmU0d4YlEzTjF3ckNkb3FpNW1sczJ4YjFOYzhBTXpWbko2bi9xSXEzLzFjRWx5ZU5yZDByMXJWRkVRQmZDN2I4TW1FQlZqOXVYZGs2enhDd3lJR05ENFJSU0ZsQXBCVkN4RkNSWmhNWXBJUkVGMDA5aFpiTktvS0daQkcxdEJRUXVOR0pKR1VDdzBZbm5PZmR3bm9xVkZudGVOaVBvUENBN01EQU5UL0dER0dGTTBTMWt4aFZCTk5CQ21Rbk51aVd6b05YUEZsRXpFRXR2WXdSNzJjajM3T01CZEhPUVFEL0Vvai9Na1IxbmxhWjduT0M5eGtqYzR6Vm5POHhWVFptcFJtMWFxUzczcTF4NE42YUJPNkpTcXVxQ0x1cW9KVGVxUlB1bXJpOTJFcTdzMzdvUHpMazhyNlU1Zjl6ZjlIZC9JbG1YbFBEZUc1amZEUm01ckd2WnpPQmlPQmNOSTAzRHVEOE5jTURoNkZkV3Fkc1ZhcmJYYXFuMDZvR0dOYUZUandYQTVHT28vRFdWWEM0Ylg3bjB3TEtZOTZRNS8zVS81MjM0NmE4ODY4N3k3MkIzaEc3N2dNektrK0lnRnZNTmJ6R01XTC9FQ00zaU9aM2lLSjNpTXU3aUZLWnpGR1ZSeEJJZXhGNFBZamUzb3h4WnN4aVpzd0Rxc1FRV3IwSUVWV0c0WDdZSzlieHUyWnJ0c2F6S1h6Q1FQazBaeUxSbUxiWnpFY2R4WmZsQyt0M1NqZngyRmt2a0ZLVVEvbnVidkJmUGZ4M2N6VTlPNEFBQUFBQUFBQUFBQlRnSFdBa1lDcmdPUUJtQUdmQWNLQ0pBSkhBbU1DZGdLVWdzVUM1QUx6Z3dNREtJTkFBMStEZ0lPa0E2NkR1UVBEZzlpRDZZUHVnL09EK0FQOGhBQUVBNFFIQkFxRU9RUldCR09FcG9USWhQR0ZFUVVsQlV3R0JvWWJoa3NHWkFhSGhyR0c3d2NMaHpjSFdnZHlCNHVIbTRlNWg5eUg2d2Y3Q0F3SUlRZzRDRWNJVlFoaGlIcUltWWk0Q05BSTJ3anJDUWlKSmdremlVVUpYQWxwaVhvSmo0bWxDYkNKd0luR2lkU0o1NG4rQ2htS0pRb3dpa0NLVlFwamluQUtoNHFnQ3JBSzBJc0FpeUNMTzR0dGk0Z0xyWXZGaStTTUJRd1ZEQ0VNTWd4Q2pGc01nWXlqRExjTXpnejRqUThOTUkxcERYMk5uQTI2RGRrTjVZM3lEZ29PR3c0dGprU09WWTVtRG5ZT2hBNldqcXdPdjQ3amp3YVBHbzh6ajBpUGJBK0dENUdQcFErNGo5dVArSkFURUI2UUxaQTdFRldRZEpDVGtKMlFyNUM4RU5HUTZSRDJFUVVSSUJGSGtYY1JscEcva2RTUjVaSDlrZ21TSXhJNGtsQVNicEtZa3N1UzVoTDFrd1lUR1JNd25qYXJIMEptQnZGbFhDL3FyNHZIUzJwcFJsSkk0MUcwdHlITkNQNW12RjRmSUFQd0J3R2JHeGpNSWNCbTNCZndmWmdEQmhERWh4Q0VtQUpCaWVibTNBbEFjSmhDSVJkTmlSa044a1MyQ3dPMmN2QTdwOXprOTFGUGYrcmFtbXNNVGFiM1cveFVOMWRYVjMxM3F1cWQ5V3JrcUFKejB3OUt5NmdpNFJCNFRUaEh1RXJ3bFBDSzhJYndqOEp2eFVFeU5xZ2hOTGdab3VGNFVwMXBCK0tZM0QweTNCRmllSUhXUDdJRnlXTGhVSllHQWFIaWlQbE1SZ3U5RUMxTWpKY3lNa0JrSlZjWVFBS3hYWTVHbkdIM0Z5N0hJbTU1YWpDcm1VM1dzWXFTcFZSR0JxcGxpckRCV2U0VWg0cXhWSVFrWE5EN1lXUjZBZWZxME5wT09wN3FJNUJHNVR6Qld4NVB1QTk4ZS9GMHZ0VFF4TUFFME9VU21JVTRPaC95Z0NKa0NQK3FiWEJTQTVJUEFnWHJsMnJHb1o2L0NySk5zSnlJYXVBMmw1UVFvWXRybHJKWHF4ZnoxTUFzS00ySzNwM3dEU0NRY01NSE8zcW5lakttY0JmMytjOTJuOXlxT1dQM1ZxNzllanFqaW1oc0RvOVFJb3dyOS9iMGo4UExDUGFBbm1TTUl3V0tFQ0xmc1NMcmc3MlFZdWg4NmZETGthQ0ZLUFFsWVk3clRUeHZvRjlab1NNK3hUVkNFQnc2WUpnZVB6WUlBUjBWZmtjWnZzdjRRVEpzRzFET29FL3hEWEwwcks2WmVscjJGMDdTOWJvSm9DcFozWFQ5SFA1ZTlJMno3REVsZHVEMmU1RnU0WlVvbjgyKzBaR3pGWUZRUmZHcDU2bisra3hBZzVGZ1FoVUNBaHpoWG5DWW1HSmNJSWdhTVNCTkZUN0lXZURXK25BVHNUN0l2N2hzMkpERk4reHdZWWpMOFF6TUJ1elNoWHMrWHd1RW1PanFGMldwdS9vZnU4VXIvZUhNSHZoM2JKMjM4MFAzSitKd1Z4SWxjWUJ5dDF0My81RStQYXZtWDJ6cEJQbml3L2NzUFhPdE56ZTFuMHlWVlRSVXVqcXdkNU9yeWNmelVUeEQrWTNibFo1bTJFemFmRyt2WElwM0g2YjlNcE8rZVBlcjlYK3M0WldPTmM4cFNxUGJnOGRYOTVTb3BEZitJQWtmV2F0OXpkMklWVW9FanVnMHE2ZXZya2JnNnlXYU5DL0lBM0VxVDlPdlNTcU5DUGtoUzZoRCtrZ0FLTExrZU1UREI4S0REMkdjNXJuam5DaVFEbWF5K1AveGRCd1A4alJVTEhRYnVQb1QrUElyL1JEdTBJRnNtZkw1ajMweEMyRWJEbHg0OGN0ZmN1RytOZXZ1dnJyN2xtYmRmdjJjMDdhVE1qbTJrUGo0N0IvZlB3TDRXUzRRMDg0b0oraHRlaHJkQWkzNkhCZ3l4MlUzckdGYkQ0Snk0NlRyUnZQdVNkeEJjdTZJbkhQT1dkdnd5ejJ4dHN4UGo3dXdIRldHQnpMZTZ4RGMxcTBNelJla2FNSjJNTUxzTCtmb3d1RUh1eGhBY3BwaUlad3ZtWnh2b1p3UHBkWlIvVkF1K3p6SkVRdDFBL3NPUktqQmFXQUxBVDdjajZFV0krT2hGeldyOGhReU10ZlorT3lGbWNwdi8xZU5BbVFqTklXLy9vOXpQdTJKRm42bzBvZ29uelNqdGw3bEVoQWVVeURSOEhXdmN2WkovQXgzV1pUTkJuMUZ2aGZ3WFBSSkdiQTdRQlVlNHg5OE1uYVIxbFJzbk1QcStjeFZSQ0Y5TlRuNk52MGJNSEF2anBSdUExeGtnVWxKcmdWb1ZvUVFuS0JkVkVramF4UEhvQmNSRmI2Y1JBWEMvZ3ZKaVBIUlFRckJlek9rVWFQdWpIV3pUR1ovcC9VUW9SWHZWL0xNZ1JlZlJVQ3N1ejkyblNwYU5yeGdEVmFqTGU2aFdwUDBvbEFSRlVBZThzS3B3QUlTQXBadldqaEdnQ2RFb0NFb1dwLzgzOVJDVDBidjN5MXFhYmFnM0lQQ2JZZ2owbTJxOFFLUUJ5ZzJHYVNlRHdZQ1paa3ZXZXdJSWN0VVNmUzByTUpPWHNwb2FhY2tsdHpIWG15NGYrc0tweHlRbFM0U2pEb2Jxb0pPV0ZFT0VlNFNiaGJlRmw0UjNnZkJtRUJIQTlyNFZ5NEFtNkFqOE45OEhWNEJmNkZTS3lYZTZDZ1lIK2tRSFpqYm13dWxLcVZhcUU2TWpqQytpVW5GM095VzNKUkdxSFFhKytIVVNoVTNIS3hQZGZPUG9wR1VBQTJ2cHFQTldBZWpuTDJaWFdrZ0JWVnl0VllWUVlzVW1YL21QUWRabnpQcjdpWUs4aEtSSW5HV0Vtc2d6VVRZVFhnWUJoUnNPWnlxVnhpNDJFWXYvS2hpVlZMZkZ5a0FFZVNuRU00OE1Wd01lWWdWS1ZxWGJvWGNqakRFTUFBMWhabDhGWHhiYVhZWGh3ZTRRMVZPRHB5VVNtVmVkT2p3S3RYa0JEWUJQK3dNc0plVk11VmNzejFaVE1yWDFBcUZMOUhsSEtjYUVwbHBKSkhzTnVBTmR0ZWpESEk4UjhEc2VRVzhqTGlWbUtVUUR5UlVta2M3ZGhXQVljOVRnU3MxSTFWcWhSSmorcERyTUxmRk9yNVZhWkFETHNvTWRxakVjeUpZc21SWWRRNWN1MGpPWGtFVlE0RnMwdktkSmVORE9mWlMwWlZ4YWRxS2RwNHlmQUQvMjA3WjBxTTVzMXZ5VCtMOUxKUXNGVWhvQmdvYmQ4d3pZSUNvbWkwNlRvaHEyR0RMQmtRK1FmWkZDR2d2cjF4N2x6YkRwc0JLbHFoK0Z1MmxkWkZFWlNDYWIyaDZTMEdUaCtxdEFaRDExSWd0VHVJR1U1Y2VvbHQ0OHlpWWt0SVZpaFpUZWhIM1lKRWFCRnNXWGxUbGcxVGxuK2hxV0tYSE1wZDhoSGJqcm9nUmtJUmtSS3F5S0VXa1VMRXNRS1hYSm9JbTRTU1l5bjlnV1U2TVlCVVBCUWFIdDRZQ2tRbHJGempzQkxRSElEUXJGbVg2R0VJbTliK2M4L0R4bTJicUtsSXREMlhUSFYzNlZyU2tpaElrV0JvNDNBNUhJcW5ZbzVwL1pnQ0hYRGNqMktqWk5IQ1ZFZ0RJcEcvMHZVMlE0UjBUTlZJN1JKODBMQUZxU1dNai9BbGJLY1Q0RjlVR3htRkhkVFU4Nm1wNkhwWURVRFNWblUxR05xaEJBMEo3NHcvRWsySnlUbW8vWXFhSWtsQnAyb2lOd0ZSVnBkS0lpb2FqNGhJV0VCZTNhbFltQStVdjdEQU81NGU4UVZGR3N0NjB0QmZpVVlTTXFWS1FTVC9Bb0UybFFDaG5VUTBmaEVDU1pmZlFDV21HenZKaVcvYTVIZVlrZ29Tc1lCOW9DUWkwVmQwSTZsTFdDbngzbklDRG5DSWtwRy8xN1NRUzFrMlFEd3FpZ2ZKUDFqWWxkVDhCY0lPaWlTQmJiWlJLUm45eUVjVU5SNHdnQ0NJeEExcCt0ODdTVmtNQnh3czV1VVlzTW5JZ1hnRzZ5R2dHakdKd0R1aE5oVnJSaGdqRjE4Y3h2WTA3VUFJbStrR1N1MWc3QzFOUzdQaHcyaEQ1RVFZT3pWbXFPeFJ6TVFQUkpLU3lFaEF5SzhNWGdSY0t5Q0tVWmVvYlFHSXRXRXpOUndIYXB1cUJjTXUxdkE2Q1gvTmNiNkdpT242UTRpeVNqWDlpNFl4UjhHdTFmU1BSaWhvQnN3Vmc2ZnIyQnU2dnM3V3NBRmRIY0ZwRFlZNm9sRkpjWFZVTGtsUURBK0kwTS83VEpVSnJBQkZsRUcwanFXR1FSa2d3R1RHQ2lKTE1tRzUxRnVGWlJXY1RNdXhueVFaSk9zWXl2VENBNEpFbDVIL1Foa3JhRkRndWtFVktzTjB1UGFyZUE5QVQ1elljZmdpSEdNbFdtcVh0Q1FzT01ZdUNZSXRySis2bVg2RlhpY0VCVWR3aFZhaERUbDhKMnBWZzBKWm1DV01DdU5NeDBUOUtpTXJUcVNOcEtHTTNHSUFxbmtYRmYrcVc2N2lGYW91TTM0VXFZaThLUURVY1pVcXNwZGkza1ZHQ3NWcUhyT0g4RGFIZVVOalFMK2kvSmYzeFB2eXNUYWhneStkZXRGQnJmT3NxN3h2M1gzM1Bhazc3dnJVdkUvZHRlZGJuL3JVcDg0KzU2dmxGN3cvKzI3NWF4dnYyOW1hdjNMRDFwdE91em9KUHo0dmVmWHAwTDd6Zm0vUE4xNGg1SlZ2d0RmK2twSlh5RzhXTGw2ODhQMS9EMW1VNWxxZ3F4by9lMnZxM24zNzJ1Nys5RjJmdnV2ZUp6NTkxMTMzaSszcEYrR2xkTHQ0LzAxUThDNisvcXlKajFIWE9uOFR5bXE0YStjRGI1TjViVzN6Q0UrWnpBc0k1dFRINURpOUhLVmZuN0JlMkNsOFduaFVlRTc0Z2ZDbThDL0M3N0ZyZEhBZ0tRaFYxTkNVWEZSVzJndWprQ3NNVjhzamxaS2I1d2FkRWtWMkdtVVdIR1BXNVFveVM5VGpocEhSYzJWdUx0Tkh5dGxTRERVOHBWeUtSVkJBWVVYMXV4aUtnZllpVS9pd2JBRVZRRlJhc1FPeUtPV3FSYm5nYTdsTXhYVXJMaXZGRkVGV0tnVllvNXRIc0hoOUVaa0R4cHBGMElZcjJCcGxUZnVOdEJmeVk5QlBaSlFhVEZTVXBsK3g3bUwyWXBZOU1PMHpPdU1qRk5qRFhKZUt5TVZTcGNBTjFUeHJnNVhBNGVEbmZER0tpbTBVTkZHT2Fsb1V3aUNkTElzNlJIRGs2aEVrSCthK1g2djlVVFZOZGIweDFENEtnKzN3LzlxSGpNczAwOVQrQUxyQjNteFJxRzYxbTRtSlVOd05lWFl3anJZTXpERlVtVHFEVzRwNXNiUDc0cjRlczkxeFEyK01oWEI2WWlFMlRYZTFEMEt0TTYxb21wTFdMSzFOMWpXbERXOSthMnJYczJxdjEweHlXOFFPRkNvakVUc1l0RE1uUFdtcXYyUU4vNUs5aHVXYVlXamVOOW45SG5hN1J6VzlxNE9wVUNnVmJNM2xXc1A0bnhVS1NUWStqT1J5TGFGd09HU0hRbitKV0VVMGtFV0dYa1RYUjZNNG9iV29MR3BRSjRIM3NCa3luU2habVIyTVpnY0hzN1dIWTJITWlmTFViRFVNNDR4NGlLd011bTZ3OW5EWTFkV280V1NObnQ0dFhaMWl2ckI1d0pHQzdXNkluQkIyM1hCa01Qc21xSmJXd0ZLRnRLS3F5dnZYSVJwWTJlMlI0WkZDd0k3WSthNThJQTBlNG9KV0tSanJFSit3WWE3M0x6dEN5V3d5Q0pBYmJrK24yOEl0b2JWNDF6NmNTME02SFdvSkM4d21PWEhxcitsZjBlT0ZnbkM2SU9SUmgyRktTUUMxcFFnYUhPMERxREJGbVdKU3hlSFloam9aYW13Vlpvb1VCcGlMb1I4Q3lBYnFWMVNFbUplazZqSXJoZGttRlJ5b0x1cEZhSW5SaDcxbld1amVhN283Mjc1aG11dk1qUEd3WnVMejJPemJrYUtYeGJKdHNYVXhNcmpPU091VkJUTFJnL0tDNUJ5WkdBRjU3dDEyWlhUVGJrb240L1BqNjJLeFNjZkJKMGdxc01aRUMwYWZOWGJ0WG1ycTN6QXo1anJEK0VhNnMrZWF2YlRsYTZJS3R5Y0FvdXZpOCtldU04Q1lHSmFDRmtqRHVYNDVZQkZwNEdrMVNYWnZpamlUc2RnNmQ5eWRwSFQzcHRFUjIzdGJUek1lZ2ViYTFLUW8wRW5rdXlIa255bmtubDNDQU9ySWMyZGFPVFRtS2s2c2lHbXhvbFNxYnA2blNzRXRGS3VVcDY1Y2xaV2lKRmVMMVZnVXJaSTN2TGRRSG1iZmVBT3lrdVM5RmVpSjNwL09mWDEwUkhxbThFQnY1VFBlM3pwVmNOLzhaL09VdzE1QWw5T0cyVUFuOGFzM21tcnhYdlBmSHZtencrcWJpOW5kbzlqdmE0UTQzVVE3aFl3d2hQMWVIRUxOMWRleTI1bTlKVWU0eHN5VVJHNW9JbGNndzJPa2xDWVJaTzVuM3RvUlRTYVRHeGNzdkhQaGduTmFrOG5XYzlqdFVOY3V2Y1h4MXN6YmZHcGYzNm1icjkyOHFxOXYxZVlUZG5XWFpwWmJzQkUvanJidjBpT0psVmpnMmtQRjBhYThlT3BMOUZOMHJkQXVsSVJGd25HQ0lEWGNhblVMejBZbVZmVDlBdEVzTTZGdGNQQXgyMlEzNTZPczBDaHczeDF5VE9SYmpHY3grNW9XYW84TXpBYVlQVUMvc0gzeUN4UndEZ0c5OVp4Tk4xRVNINWd0emRXZ3phMDlFbThEYUl1VEU5dzI4SjRDMndtd2pQNEpGSmVEV2lDQXV1SHBaT0VnRkVjV2sxTnZmVklVbjd3VkdZUjk2VjJFM0hYcHFXVFJnUGY2ckFtNE41NkhiTXI3R1Y0Z20vem9XbFprcmQ2ZDdDNE5GcEtERjRXU3dXQXlKREEvMEcxVFQ5Skw2WHdjWjUwNHl1WUlZOEo4NFJqaFRPRlM0VnJzRzFUQnVlT243dm1JeWJ5RGNrVjNqR1hWU1NHak1vT1NZQUJOTGNiTEEyanE1SXJscXVKV0MyRWNnc1ROK2M0alppcFhtZmlXZVFlM0VTYmdLL2dteCt2R3FxdEtoUlNycFRBNTdYR1Jhck5MVjNZcTlOVjc3MzFWbHJ1dUxNM1dSUEdScjhzRHBRdTdaUEc1WGJ1ZW9uTEhoUmZkZkI0cXB5M0UxdS9SYmJ5YTZwbW5oYTl2TTFvMXNVRDFsclBFWVZ0TEtJV2hVSjYwUWliUW0xUGltdDJTT3J0RFBzN0pkQVVTcUt5MkJmdmFuZU0yNVc4ZnRUUDJpcTFBQjh1VGo2blhQMERKZzl2MHIyOHZseWwwZ05SYnV1SStjY3NuS2QxemtmeTV5emU4cTZ0WDY2R1FmcldxNTg2RWt6KzlEOTRva0tTWDI2dnY2R3c1dnZVVE4vWU1Zb1BkSGRmYzJMS2lwWE5pcVdsWnZ6enU0eGQzNURDeis5clBIdi8ySVAxN1dDQXIzbjVCRnBaQksvMHhrYkUvVE5RTHNrSzNzQUpudXVLN2YvbXdLekpCeXNhUTlPR1pFU1JpUDNQODluUGZEZkxPQ3ZkZVFPeTBvWVVBQzRkS0U0Uk1sREk5UFF0NmVtQ2d4Tnl4SlQvRnZQSGVYaGljenBOSUlLZ1NDaXc3RXc2b1FVVlM0L0RacldTaVhzdlF4SDVnOVN6b2VmNUQ4NEloVlpVQ3FtNWtXVDZvb2h3SWlxWkFoY3JVTitsZjBHVWM1M2FjYlVYZnoraTczRXFONmQrRXNVS2ZlYjE3QUtRM3YvQ0ZOMFh4elM4c3ViNzBNelB0MW41ejA4T1VQbnpUVFErTDRzTTM2YStYdGgzemhiOFR4YjlqcGZxNi90WncwL3VtMzJKSkxudXVucXJSdTJrYmN0ZzgwanJFOUptUkVLcEdxR3FodlkwYWhzeE1kYVpQTVVXcXlqUVFlQkRGMzF0eXlKU0I2QW40dGVmSk9DVE5laWI1ajFxQ3lYbnk0Z0haQ3NwQU5jT3FlVmlHU0RiNVBaUDF0WGx2eVdZUThXNlpPa0RmSUFkUUUxNG1uSVd6REVVZG4ySTRMY3FjQkFPRTlWK0FjRmVyV3hwakRnbm14OC81dEpoMk45a2d0ZGRoWko1WWgwMUNqZ1B6dTVmUXpJK3hBVUgrTXhCb0Q2QzY1T3AyVkYrMGhzRGlPYWg5M2Y3d25weGl6bDBNYXhacjBaU0RkcHFlQzlqckp3bG05SDc1b3ZPKzFyLzBWT1Q0M3I0QWFpY2hORkszU1FIcDh1djBoS045VEFvWUFlbGp1aTRGTm9pYTVPb0J0RVhROEY0ODl4UkR0azdhc09Fa1N6WlBxeTVlVFlobTY3WWphU0xkdnY3NHl4TnJMd0M0WUczMDZ1UFhiNzh4RklCN0dGL3l6Z3VFUUZDbG0yOUdwcXp2bFJSRitxS2UwRVhDZmRON0JaZHVvenB5SlFFaW5QdHdsb1RkeEpoSDJYZG1jQUpFZmZXU0taVGMrV0xUU0pxVXhraVZ2YVhia3NuekpoWjlldEhFdWNsVUtubnV4S0xsSzQ5ZFVyYVk2bUpxMzJZZHQ5UHNIeHMvWnVLcWRVTkQ2NjdhaVJkQVBRWnVYcmE0OGNuaXV4Wk5uSmRNWlRPekE3Y3lCZTRKamFrOVlTTlFTcVZnY0QzL0JqK2R3TXFZSEplRlZZSkF2MHJaWFp0UUZQcUZKY0pKaUFYVGNuSlJOeGRGN3MvNmk4MVlWS1ViQWdUdmNMUWh5MmUrOW1pNW1FWEJoNXE4VFZCZDdpZlkyV09FK21vM1U1TnpkQkxtOVUrKys2NFpkZldUVDliZHFQa3VacER1L25uZ3ZmdlRVNHlFY2ZLVU1JbFA3MDZTN25TMTIzVzdxK25hVCt0M2hDRytpZy9ibnZHK2VmQ1ZudSthRVFPVWFoVnR5b2o1WGU4dXpJUjVmV1RjMnpSTFVXYkJaL0ZoL0NkdWR5WHRkYWNyckE1a01EOWxkOTZrR1dhTEVHR0d2Q1NzbXZvSjR0NGpSSVFFYWpCRjRXUWM1MndJRjlqUXhDbFc0b01UWkZUZDVoTW9RcjdLWGNxby9qbitjSjZCY1RuTGtlV0xadGlyWlU2b2R3bDlwTmhycmlKb3NuL1JLVWVXTzZnQWtKdE9WbU5mYjRQUkM3MFg0Y1UrUlZtdWhPVCsreGxzTXpCUHcwa01iZThoSkUwd1hZeHhpbjJQd0FsV2IvSHJCSTMvUDNlYzVjNEkxa2gzLzNsY1c1R0cwUXU4RjMvZGg3V3RrT1UrNy8veHJ4OXAxT2JUbG1HUDFLLzlORlpNQi9FR2RRcWZEaU5JaFFXb1VaekZWdjY0OFZRYzRmMmI5VWNEMHhsRzBOejZRRmR6WTQ0dHJtWDlRZTVrcC9IUE0yYzBVcEdweGFVME1MRmJKUHY5Ym1ESVVBRWg2R1lnOVh5dzQ5UDhCZkRDZDlXRWFRclVYcGJCRE1rYjVaRDh1QkswUVg3Y0tVWEpUMFlZdGlQWTk2ZWVpZ09DUDIzZ2cwQ1lKb0RBQmtHR3ZjbncxUHNyYjdKT2hqdmxrRVhrMDJSUVhsTE1vUEk5aHpMZEE5RE9IYUdVdkllNmg4RG1OWGIvTUJzWGRYN0dlUzZwSVcrVkdkOVVubWJUOFdrWlZlbVd0MlNaOCtHbnlUbzJFV3Y3bnBaTlZpWHlpOGVGKytoRlpLY1F4d2ZVUTdKb1RQZzFNeW94d3dKTlQzb1JJRGZlOXd6ajA3eXFvQ1UvUTlCK2dUdFU4MmxXY2IzUmtQeTBlVmlkM0RSaHRYR1R1OHlYYjlsWXBoZkpieWxCQkttMmovRjZzdTVwQnZOYk1sYlpxQ25VcUp2Tmo4OU03YUFYME8xQ2dNK1BBdXIzVFd2Qy92cUxnd3lOS2FBajJXbzJsRVdMdXBwbEw0R0pmQ2I2eVpQZXg1ZHZKR1RqY3JpTVgyY3ZuKzE5ZlBZS0lOZVQyazV5ZlcwblhWYUZ5eXJMcGRwT0dJMm1VNzNwTk4xT05pNnJuYldjK2VPWGsvdVhiWHovOFRuTGdheVlOZEJGT25wSGxnQWNNL0wrcjFKOWFjRFNqSjQ1NFZqNk52a0o2b1pjU2hicm93NUZKUTVoQkt0aHlETTFtWm4xS2VUS01mcDJSUGYrb0lxb003ejNudTVBN2MvSXRieWpMdWNzVXlNZlU4MTM5UWo1aURmZk1LVlBpTUdBSkc2SHJkc2wwL2grN1NWbVpLcmtIRGFJbnNVc3YxOFBDZ2VwUy9xUWNtZ3hLRVVOeU1HREIvdkJCZmZnTysvMFE4eDdoNWVEaW5BQnVZNThocGZUd0ZWY2NweDNFTnkrZ3djdllJWDdEeDVzMVBjM1dKL0x5NkZXV25XSjRCM0V0LzEvQTdGK3JKSFZkVFBXOVVxOXJpTGFVQUNQWVQxOTRGN0FDbm9IV1psSllaTGdQOVFvV0h0a2NncnJuZ1JNWnI3VENHRHVsTUFLVExGM1dJS3lGLzQ3b2ZIdmcrK293TDRnQXF0WVVJWHhxZjEwUHgzSHV4YTBud3JDTE5RaHprVnRYY2dYMEl4aWVrTFZYN1dVbVkrK3l0VUpKVllaS2FBV0dLdFdDbmw1UHJOTlpLYU1sM2w1TGs2WmQ4Vi9WT1FSbDlkUVYvdVptSTBwWTF6NVIyUGFWODc4dGMrTjlxeWVqa0UxOEdlek00T3UweUdyWnd6UDNwalVBeUJlT2lhSHFOT1ZWREl1d0FxWFNERFJhK2NJRGVqSHJKT3BzUWtzSllBaUxxUzJkWWxFMTRPZHhGVG0vT3I4OXBJb2xUTEo4YTYrbEpWYTFXSlFOVHY4NXJNMVNhbzl5MU92YjB5aXFmaktnYjhuQWN2b2FKMDNqOUwyTmlQanpCdTZTbE5VamRyNmdLZ05ib0pJc1R3S0JGeERVaytZU1BUTzA4T2lTRUsyU0hLdDRWWWNnYmVaU1gxcDkzQjQza2pmMG5TcTI5QXFSY2xOV0lXd25ZZGZObHJEbEkwVkt1eWUraUc5aXNhRk1tcHN4N0I1aXNTa3FLdVZHT3V0anNpTTlmWUQwOFBxYmpja1hyNVFqTG9TTDhUbU1zekhTYU80UmFYYUJzWHFBSEpyVjZGTGF0ZUVNd0NRY0N4WGVWZFJBOVkvU1FIVHNFMXljY0JVVk5IN3ZhcUl3cFJreXhFc2xxcjk5TGJSOGR2UFNXeTlQbmJlRjFwMlBIbjZxa2UyUnFrTHJlbGFkNlpGRVMrZ3RJdkttNmxFQXhaNXhvdzZabTAwcUFKY1Jra251WlNRVkk3OE5KcjBublIzM09DYzk0bUp4Wis0WXNXM2JtMzc0cGR6Tno4cGNKMzR0cW52STU2dW9DRkhZck9zV3VSUU8zVytOTDh1YnhnKzVPcXRINDJkdTN0MC9tMGIvN0YyWlNRTzRrVDAzNXdocHhhdFVFai9BaXZmR01ObXpvVXZRVFpXNnl3cHhtWVYxRXUxYUIvNVVTeUxORjA3OVV1NkQvWHZwSENzOEFpMnhrYXNVbUdMVWYzWTBEQWJ5MjJRSnN3VGlkb3ZmMnVUSWgvRjNGUlVDa3hwNXNYUnNLenc2eGhJTE53Z0dtUE9IMlNlbFZGZ0x3Z3J5VDZKeW14eGpGVXAxeDFHbFNxSzNIb3VhNHVITVBCeHp4Zi8yQlBEdXNnakllb0RIdzM1TkNUVTZwS2dJUWRPTllnSTJkRjAwcEFNeHczSE5QRGVYbk5jYk1qU1VOSzV3VmkvcmtoaFdhUXFFU1hkYUEyWnR0TXV5MnpKU1hiTXloNjRSN1YxUU1rTCtTd2xnV3drWmlpUzBUY3d2eUpKTkRMY1NWU3FCd2VEd2MrL0lYYmwxYkJPZ01wR2Y4S0tSbFFqMmhLVFZJaFRrY1k3Z202ckpXdldpQnNsT1A2M3pIdnNQVWw2NzdGSC8xVWMrdEZRVlIxSXRJOWErZFZHYTRzWVRtaFNKSXdqVGRmTjlqVHBoTHpWRWJLTVVCaHJWdDN3Z3JnYTBBMGdzbUhGWlVxcG9RZGRPeDIwQXVLczhXdEExUlM5OU5FbG94L3BkMXdwTXhJeE5GVlhJdTJ5MXBFVFcvcWlsWW9hN25WYVpTTCs3WU1Mcmh5VUkvR1dGaXNha29qc0dHWTRZZ1U2MmdZTUJTMUttbkowTTFpd0xORGxWSnY0enNNUHZ5Tml1bXduSHhkdjA4L1ROQjhYcHpDdTlzSHhFSzJQRmZyZmo0dmgrcmlBQnM5QzQ1SnNEOVo3clMycFMwWWs1cUMxNTNlb2Z0TjAzOFdDYnI4dWkzN2ZVVm5YVzBNVzd6dTJ5T2NZSTN1OGg2Vi9mZlRSZjVWNHV2TkkxSlhxcENjMy82bFVwclBIdlowK01YaUsrbU51NmszNkpvMElKZUZVNFd6aFlxU0lINnBScmZTVEFLSm9remJnWHZHNUVHMWNtVmRnRk9veEhTUGdtNHRJTWU0WHFKdlhtSmJaNEs1VTJVeUFKaU83bWNYVFUxUmRWeWRtaWRRd3hkbXpSZE9nWWhVbnM2R01qdkpVRCtqTFdaSGx0U2x5MWVyVlZ4R0lSOTBndlhYVHBsc3BIRDkreTdlZDl2Z3Y5b1lNS3haZmZSWDhteDhHdzROZVR0b3dTZW5raHJNbUNabDhDQTNJVWNuUVFSd2JFMEUzcEZFdG9MZnJ5TTFsVlpVSDhLWWRyam50Y2tJdVAyMmtWNVdLZmVmZVRPbk41eTY5TEpWNytkWlB2MGhKSkN6VHk3MCtjdUVKS3k4azVNS1ZKMXdJbjZGYjE2L2ZTZ2hMY1Z6bHB0NmdmOGZwT01adEVkUXcwVnhzWHNkQVZadWJqOVZ5c1RDR1ZLMVcwa2hoYm1WaHdXYXFTR053R0NsUlRhT3JWQnhHb1JWSWtYa3M4bXdlVDRlcVNEcExuRjBWTFVhNkJaeFd3Yk1ZNm1keEFualhrY256d21UM3B2TjNFemh1d1MzZmpoQ25mL2gyWFFuQ0FQTzZEekJLZ0JiUVlLNWtOZ2hrU25ONUZyN2crRkdPNnk4dXVOdnRIbW9tVGVmRm5LOS9EdWZVaVRpbmNrekx6RWU0RTgrSG5yc3o2LzRFRlBFVlBxTlF5by9WWTU5UWhhQW50cVlUODdxTEkzMTlJL211OFpiWkE4T3RheXFkeHlSYVRobHlWeGZWNDBUbHJOZGljWnBaNkVaYnhkeUM1OFRGZmNWUmduT1ZwT2lDenBQZTJ6Z3dDMGlHMER5QlRKa2NmL3k2NWZCbTYrSThhVytOTCtvZzdXZ2RmMzdxSGJvVzVVNmMrNzdtb0VhekNhVnN0WUpxZTRDdCtTaEY1dlp2QTUvUUN1c2twbmE2alJzcFdsOElSRnVKZVNBUGZ5NnlLTFZjUFJON2UvcDFqa2x0c3FtYmlpRFIzcDd5UUhlWEtJSklPZ2ZIVlBpMk91OTNxSU9HTGV0eDNUUWQwL1R1Zzdpak9YSHdMK1QwR1kvYlVJeDM0SzBlVHB4VWY5SHBKTWdQUnlVS1JKenZoT2FKT1B1bE9mRVRoOHNyRndDcjBHSDJNci9lKzVqdjlYMHNuc2trbXU0N3ZNODVDVGpQenpqdlhCZlZnSXg3THJZRVp3c3RVMU5UMitnVW5VUWJvazBZRWhZTHE1QnUxd2g3aEllRTd3cHZDTDhERVJ6SXd5eFlCcWZEZWZCUitCanNoY2ZoWmZnSkhPVFdFZHFjM0RQTGxMc3dYNFh6NC92NGtNQmNMaWdqYnN3R0ZpQXpuT2Mzaks4cWNqK3dZSmswNUxsL2tRMFVYcWhDZmY5amRiZzR6TDFXU2tTR3htZThJZnlFUmNUWUxPcUZpZVRwNmxGNDF3dnkvRGIvTStUbWRkOTdvNVoydWFsMURpTUxRVW1UUnVsQ1pib2V0bXBacjU1eHQxSU1wektUSnR5VVpoRTV4V21NT0xCMTRGbndEbitPeWcxaVRHY3BNZVVvaFppdWtJYW9YT1d1eE9HWlZXS2JZNFJSaWdYZFZnK3J3WTE5b0pub2RGWjF1bVUwdnZ3UGkvVXMxcHJDMVBkNjIwcWp3RWhsdWtCTXBsTmdSRTM2a3k5cGhtanJUeHlzZVN4STlPYWZqZEpRU0tZVC8rWjlnd1JER2dsQksxVkRRUkVuL3o2aU9VSFM5dXJ0eHkzVWdvcXNIbi9LZmY5WXUwbHhUS3F1T1MwT1dpUkFFbWRuOFN1RDZLQVo0U0RSUUNZdkV4M3Y3S1VqR3RYRDZ0akozak9EUFpvbUJyV08zc212VWdXTVVBQTBvQy9DT1JJRUhDbXpabmo5TmtJa0xCeEFFU2pSejF3NnZ0bnlTeDAvWXNaMUxZUzhQNTFaY3E3M3NoS3lpUklNSVlJTVFvcXFmQndiWkVDS2JkRjRHeUc2ZzNVQXpPb3B6b0p6TEFkRnE0a29vNHczd3phaHBnS3NySDB5c1JGa3E1VS9wZVRMYUNDc1FzaEpFUzBVeE02QjI1QWlLaTJIK2ZzSXZVTU00bU9QaVYrWmR0aU1tQkdPWWVRdVhneEVUWllEamlyTGFLTDFNV0pBQlBVWlJNWUcrQ3grS3ROc3UwWTRQdVF1S1dUTFlqb0RMQ09JVk1zTkVTdGlBRVUwV0lZb2ljTjZWSlZwVkNmQnNFNk5WV0l3ckVoWjBDbHJVbUlUZVJ2cnRvZHI3Y1NPYWlUdnZRc0xFQ1J4OTlXcXJJVFVuWi8xN2xBMUthQ09MenB4R1hhYXFwNTQrb3FBR2hRMTQ1WXZJeSttY2loRTIrblRIMEhiSUN5Ti8vZzZMU0JxK3E1M2FqOVNEVEdvRHBhNmU3Q3dvZlVQdEZZQUs2Q2FQblplUmdxRlJLbHd4U3NHb3FlQ1FiKzZnMnB6dFFEUnRiSGduUzgrb29RTm9oWjZ5YmIxZGlxdUJTVmRzNExaNEdXZnBlTHdFN3pVeURpSUVoOVZCcHpxS21DRkZHY2dZZHZKQ0lQUURtY0Q3V05MdGFDbzY1RjRXMXlMOGR1NDFUT0w5SGcvTTdDcnRKRUV3enBocGZacU5yVzBqaFY1bFpWWjRkM0VSck42K3BydDEzQmd0KzFZczA5VGFWQWJtNXk0NWxMTVVyV3Jyci85SVpTZlFlMk96NjAvZzFGQ1gzL081NytzcVVpdFRaZHBCckhWcTE0M1ROTll1NGJUWXIxM09uOUhaWnl6UVZVT09nSGlpaDlIOGdTME5XdVBPdzRMR2VyS2s4LzZPNDNSKzloN1Y4NWxsRERVMGZHdmJsVWxQYWlNM3JTNGZ3QmIxclZTNmJnN3ZtUVkxTklUOFlGZW5wVVlUS1RlQ01saVNPM3AxM1RGMWdhWkxoM1FUank5cjErenNQbkVVTXZBZWlhckcvWjlFYTFOQVhKK0xEOWJYN1FiQzBMbGFNNWYrR25FWU05VTJjaGtKdE5WcVp4VUFiSm0wYUkxQk5QRE0xNXNNcWxoY2h6d1hhWEwyKzhYeHJTZUErT05ISGoyTUp0WWFmSkRoSVFXbE5rYmhZK2c3Qkdnc2RqcE5yeFVicnNOZmc0TFFFUXBIcE1IV0FnbkQ3cGtNWXNWRnErSi9FMlN1Wmd2b0U3S2d4THJiOHY4clJ1clJ6REtic3hwVmxBYnRjT2xSaUFRcyszci9NdHl6UVFMUmV1UGFkekVUbFZCb1RsVlhUUSswQklFMnBvZFNxVjdDdjJ1VGJ3dkZUcFV0VmRVaVVhMWtKMVVsRmhpb05BVENBNzFWdHRNaVlpZGhlSDJtRWhVV05CRXRFUzlkcUlGWERzUUM0d0UzQUJnczZkWnFDMkVyV1hGZE5DVXRKUW9rYWhJbkdTa0w5WGVsU25hS2ppeHZsU0dUV3NwUVdVcFo4ZzRZN3I3dXdaYW9oS0p1S1ZvbkJJcjNOTldTT0JOZnhQTnZZVllyZWxZdnAzZW9EM1RaUVVVS2tNc0FqU25sSlZxcm9vQ3U3M29peHgvOGJaUVlVc2svaXJ1WUlXYnZ6T0d5M01nUVREZUF2YWlHMUlqNFZpbXE0c21MRFZ5N3R4S1M3UlRRZVVtdC9nNDg4dFJBMDE4Nis3amxwM3pVdlBnZVVEV0lWUHNqbi94c3VXU1RySWtoYmFTUlVVVXpRRkpzNE8wWWxtTDIxUnhRVExlQ1pPSGphRkRlS3prcTJEY2xtUC9XTXduV3Uwall6Uk5lTndISHdqWmtmSUlUb2VSWWFiVFJYRVNSTXNqdmlXSXFGUU9yUnR5clBMK2RnUWtnaS9lWmJKUW5JZ20yOXg0QkExQVBadEpEYlJBcXI4NnF6d1k3UXlHd3Baamk4VDdmemM4L3JnWk5nZWZlT0pPS1JxSXRJZ1BYVjJBYWFpdjJEODIrZ2x2anJneWtLMUdZNGxzT0d3YzI3MnM4anRhdG9LNlNnbW9TbllvMDlyZmhndytpTklMUjJvdWIwbnBKZW5aa2lJdVRTOEJTTTVQNTl2cG90aXFqZE5FaEUxcnJGbkxaNldJWTlteGxLN0piYkk0RjJmVnhOVHo5Qms2WHpBRUYzbEJWVmdvbkNDY2lYTk1nQ3pqQ0N3a0t4S1RlRnJPOGduQTFTWWtRTm1QS25iOG1DcW1BN09sb2lnMGxWVSsvTHRtM1RsS1RvT1RlTkRTUTVqQ0dmeWk4YXphTTk4WkhDZGtmUEE3Z3dzQUZzUzcycjZUN2dMb1NuK25yUXQrMDFSUSt4TS9JbDhFSTR3YXQzRWxjd0dIVERDbnkrRmwzUHRKV3hjV2Irc0U2R3p6OGxnT1MzL08vd0pNdjB5OVp1L0hmcW52c0M4RTVqZWRQL1ZkK2p3ZEZTeWhWZWhDZWk0V3prZCtkVC9TazYyU2p3SHpHdGpNWHh3cmw2b1ZGc3lBak1YMXc0dVllb3U1K1JMekJUVXlpckZ5aFcveVlLdGFNWCtjTll6Q0NMT2plTWczYzlpWHhnaVMrZEFDdllKV09acmN2bk9mZTFoUlgyUjdNS3FNMXpWMm1hQVZ6MnhQYUpFc1VWUVUya29EUVprK3ZJQ0tsa3hsZFlFYWtPVlRVZjBJNEMxbTRLd2pBNkk0bitmTVp6a2ZGMFZUYmhYbFlJQW1xUXhmeTVmVnlmVkFMMW0xNmxLU1RiZTBsZWNET1gyQ0RMVE42bzI3dFNWMTRURHZyTmJXTEczUGsxdmFCMm8vR2xwQVVLdlNkREdiUUNVTk1oSFZGV1BuVHB4eUtVRmRZUUY1eXdSQ09RRFk2QXRKTUZYZVZqRHdyeHhZQkZrMTRSOUpRclR4Q1ZQVnZKT0FPYTRHRkk1QTdmZDVkZjAyV2RVUUluTHBxdTdsS2J2VUpnVk9yRXljUnR5K1dXTlZxUGdTU05mVUpaV3d1OWhia2NXeE1OUTdyb0FkVWx2eUlpUTAwUmhkQ3ZpMXFKcGtZajNieXlQc0Z6cnBHSGxOU0F2OXlDR1BaL3RkdUZ0MmVyOExjOU95dlhPNWJDakx0cis0ZkNtU0x4T3hwVW5JMXJlelpabHpnSGNOZis0Qi81a2NDTExRdU5vQmxzSnRNdHI5bXV6ZEJRZTBWWVlrZVM5S2xvUlhHQlV0cncwR1dTSHZOVXdENCt5V0pmQlBtSFUyZXlLWHNCU3JxNzBHMnhUdEh3MzhGaXVRMkJYbVNWNlF2K1RKcGtPM2FEUGZML3lBbmtLRzBQYnJFMGFGNDRSMXdoWWZUM2ZhemgydVVOOXJ4cG5peUJqZmw4UzlaMng2Rnlyc2tZMWxOdlM1bDlNUE11Q0JQRGl5WTFMVi82UlJSdUcxSFNvRHZ3bjZxRE93dktDaUEwUzNuM3JxSk9ySm1LVVM5NTVORjl3ZEIvVVNXeExGT0RWbFc2WTBUcTBMVlZHVXVtVlRWQ21WOFVveUtyWGtMbnhadjE1bXl5YU5ZeUViaDNVY3gxMWFVd2I5cHBDYUVDREk5Y1dUemlYay9KT0lvcUFXYlNod3psWkNyaitIS01hQjZjcHcrSGZKNHFVV3EwUVU1ZnJWc1dRR0RUNzVWd1lObHZPaDZaSXRwSzJPZzBpaVdTRWhGTkN1WnB6MzlQcnFIRk85cHBmb21HN0dmZnRzQ1BGd3NLSkNnWThadHFBa1YzTWhGaHcyTXIwc0lPZWJBbHg0bEN2ek85R0hhM003Qm1GMmJnQmdJRWVleE9zeCtBeUQ3MThZdHNpVFZ2alp1OThpYnUwWUsvemNUKy8vcHJybkdDeFZlOXl4eVV1MjQzamY2NTBMTUxlM2R3NGhjM3JkVktvdmxhSlpHT3pveEZJZTdXQjFkblRoTS94bngyRHRKN0RXQ2dPRUxTLzc0RnBoeXRzYXRrOS83dmRuM2l0dmhiM1liQ2RXYUh1eTdYd1I1dlQxemdHWTA5czM1MTVnZGZhbFVGNWZQL1VNbmFRcDVLQVRMRFpzaENtbUtUaUMxMUZwZU5JWVgvT1pYTE8zak1WL3NaVlR1bUU4bEE2TkIwS2hRT1BtRzVuV2pvN1dUQ2dRTG9VblZnSjk4S01mZlpEQ3lvbTFreEZSbDJ5RmRNdmlobEU3SExaSDhZdUY3Tk9GZUhOakRqb3FIWkJ5a2tvb3JuVHVXSWxmNGJjbjc4am43em92b0V0cVVCV29jRU1kZnRhdkU5TTcvT293eGR3eTkvNVhzVmZ6MHdGSHpEZjZJWWpTVEIzQzR4ZXQzUjRsVmtBMnd5VCt0YXZrYXgvd0tObTJZY00yNW9EVTFsOUh4ajZBS3RSOElFL2N5WUEwWFdxWmwzOUNvcCsvZHNOVzl1bjZiYUt5elh0MnhpZjh4bCtUNmhUT29EOGoyN2gra09QZW5HbmxoN2xJcHZYakpzY3VrWVlXRXJLZ1hKb0FzbkQ0VTc4NzhaVGY3Ym56OXl0WC92NFRxeTZoS0JkT1ljNVplQnNXbEZtczJJSnllY0Y5dTI2NDhTNUM3dDZ4WTZmWHcwcGNTdWdWcDV4eU1mTFlyVk8vcDFzcGkyZ2ZFY1o1dkZyZHE5SlljSzlyNll4YjhOMlFWYjY2d2hpSXYzblFIeFJTbGUwUTVXWHlSYVJ5eEg4UEI4TEo4Tm1hazlBM2E1bTdYaFpoM3JBaXp6VzFuRDFIaGQ1ekx6cXJtOGh6dFZaSG55UEtsWGtndnV5MXIyR2x6OEFpNUsvNHBrZVd3T2FYclhEWWV1cHNGclIwa1FaWGlpL2ZkZHpPSVNMUHNYSzZOVWN6MG0zcHBLN00wWjBXcklrTzNuVDhYUzl2V2NNS3I4RUN4NXloWWY0YUxkd3FTSWp2SHptK0JtcmRFOGh2VitNTStLRFRYRzdzbER3S3VyUStsT3BvRnVISTZCUGh1bjJVN3J2T1Q2ZnhaK0RNd0Qrc05mQy9FdW1sYldaNGV5Tkhvc1RKMDdWZHQ0OXNuU2FEM29Ja1ZNMGprTUg3eWxPTWRDL2JTRGVzRHBZZmlTeklFL1lLdzNRRE9ZQTJZSWNnT0RtbVNHWWJDeEgxQlFqT0t5bGZSTXdpUi96NUtMUzNnSGdHcS81M0xEa0R4SloyR0swOWhTblpEKzB3dktLMUE0WVJJL3diaG83V0ZmQTFUTDBmUTI5ckJ4djdqVFlwMnFGRlFhaU9aS01KeUlieTAvRVRSd0NBTlV5VzFKNWkvMk03UndRQjJ2OWx4UXA0Z2pVMHpobzhkaVlZOEFSckhuSGVLclRSUzhsK0hBc3NLcUsrZU1EY3A5VmlnVHVWbVhiT2RtOHd6ZEJGTlhLb1VrWDVTczQvd0JnWFMzNDdDMjFETXh2MjJzTlprMGppTEUyMW9ScHViUTFETmFEQWZyL1JKYnRVaGJKUHFLTHVpZzJHdlZ2NDd2anJ3Z00rRDJqQUVVUitWbUt4QXI0Y1o5S0d5ZWxxMFlka0poVDVKdHJRYnU5VjcxVkt5R3pRUmZnNTFja3NRdWJPMHJ0Y3I5M3QwbWRDNWYzN05Qand0OTd0Y0lWb2k3ZUtza0p2RmUyZVhiRmtNallUeHFDUEJQS0tTUUhvUnV3dlE4Z2d4VVlRVWxxcU1GV0Y3ekVmNE5zNlVQK0tJSkNsS2dJbVRXLzVhTGIwVTk1ajNxL2dPRG1YbTdoT3BtUXU1Rm9ueGhZdTdwSzhyenNPQkp3UkIwN1dkTStMdExaMnRiWkdCK1lUTW45Z2NENWJldis0OXhocU1jY1RFVTY3OTdmWXFZUW9xdmYxU0RuaS9kb0p3eW5uU2V5THJ0YTlNTzUvTURnd3p2cTVHVzRCcG1VQ21wZEhnaHArM1dodmNHQStiRG95ZVBESGdYRm9OUFBqSTREQytuVlNHS2VUaEVVR20wSVMrVXcySk1XcWZUQ1VqVXA5aHdjSjBmSGFKQXlnTkJtb1RaSkpiNyszbjB6V0pyRmlITERFdjA3Q3pjL3IrdlBYOVgvLyt4ZXpZUzNVM3dwOE9ITTgvZlpzbEl3QzJ0NzU2Zm9sMlZkN3BEeGFOa1RRVkc5UG8xNXZqd3BWdjZWSi9OY0I0OUpCN3lTL2Fuam9vTVR5V3FYZi8wNW1yWWc0WitOMEY1Y1hiY0lBaitaazVHdXlPNlVpWTRSczg3eS9oME02N0gzMnNHZll1OTl2ekwvQVU3c2lwY2l1TURpN0ltVm5sK1BGWjc0K2Q4WWplVDNmT3AyUnYzeVg0K3dLanpqc0Vpbi9aL09yNW50dVJ6YndvSHh2VzFIb0VlWWlOaWNnN3hzcFIwT0h3VWlQa0pjdm9uSjRHSzV3aEhJSDlzK0ErTTJaanlEdDJyV3I3ekNVWHorc0RENkQwSXhCYmZMd25OTjVOYzNvZS9MaFpYZzg1MTZjQ3h0d2pGaEN0MUFSRmpDcktzL1liSUE1bG5vZ2xLMDJCaVpPN0RZUzQ3YnlYUEFIcWRUT2wrZTVMek52UXlUTmR3K3dsVDJXWGVJUE5QT0UyMldrVWthWCt3UVpsMnJmU3FDdGwwMDhJeG1rU01LVmNCY3hwR2Q0bmhkMnJDQUU3RERPZEZpQlNkRUtRTkIrd2MvTjg0Zjk0VVNrVW9razRLL0hrZFY3bmNqZEZmRllNUlpiSVNxTTk3L2UwajVsQm5wc0UxbzdXNEVucHQwVE1Ia2V2K05qVnVBNE14OW5TcGpITlVhZk1VMnZRU3IrbGpXK1Nnd3pLWUQ4dHBrRzVHR0V0TE8xOWNYNnhYSXQvSXUwdE1EemgrR0svUFlRc3JDQkFkY0Frc1BwdHJnKzJHZk9RQTJnQ2JuNnZCWlEzeFc0am9qMkM0UFozM2szd3dGNDg1VEErRG9JS0FqdjNQY3pVZnpaUHA3Q2VSQnVEZU1mM04zSXd0VG5UNGZxelIxUkQvSTVOdmN5dWR4ZlJZUmQzNlQwbTd2OHRLbVZWRlByNDlNRmRuMlRQTlBVcVBjVkJnWURoOHU5L1ppTVkvdGwxTVJXTWc5T0pBQ05qWTZONjJFTCsvNjFIcXhaclpTS003bWM0M001SElxYzBXMlE1ZkZ4dHZLd2JCbFB6WWk1N05EaitMaHNoWlh4Y1NXODJuVzhkK3FzRkx4M25JTStieDJVY1RBTTRnVGNxMkE1eTdISytML0RqbVZ4NmcvNHJZVk55QlBxUjJzL3FiUGp2cTBxeFBFbWNBc2h0MW8rYnhhbmNWVTQ1MFJzOHlHK3lTMEJVUjR5TzVJL1hDQk14NGV3alhHK1R2bkJBSkhtK0JEaHAwNi84OU5mSWRDL0lrS3pkTURyZDN5RU5TV2hqZGVCYnFKTExPWmZ4MG5nVEZVOXMvWnJNdGx6RVNFWDlURDFxVmtLZVJHR3RKWlF0RHJ4R2tTeFRKTmZ5bXk4YnBnNlFQZlNETWYwME42cnJIL01ETENkcXI3VGt1OWNaWUt2cXdKUTZTTCt0WFlhRzBoa2txV1pROWxkckJpWkN0dTF5Y2I3bVcwVlB4aDVTNEhyYnN5TTRVSEpNVDVtMHZDQk5qODVKWWhVbEUyWmluUzdGa25vNTcvRHptK2htWHE3amFMZVY3MGExb3FhRnY3dFFLMGJ0QXZmUXpYYTErTWFzUGllWG9GSHdTTlg1ZFpBWFVSVW9WSncvaHVLa0wvVkUvbzc1K3VKaUxZZDRVR29FRFlRZE5qd0laU0NQMmphZXhkcWdDcjlEZzRkUWdtaTFsTDc3WDlEUWdGd2JJN1JjZktNME1yMmh6TkRSdEdBRFRoWDQxWlFWZk9OSE5JSE9qTVp2RDk0LzRIQTZhQjRmMkNtQm1pZ0lTazAyQTRxdDF6K2lGZTBOYncvZW45a3hnYW8zdS9aZHpQV0NnemVYODFjeHJjMzY5dGVEczF3eGhTSTBMUllvYkM2YnQzTlRKN2R1NXZ1NlhqVHdrVHRPd3pDM2JleTk3dDJOOTJ6ZmpvRWc4dFc1NlNqOGIyNlVWZWZmSXJOdTlEMWFkRU0wYk5OZlBDcTNZd2syQmdTWXRldEd1QlkyczNnMDVxaG8zT2JtZUtOYk11amR1dXRqR2EzN21LdzdycTlUaThHNndzSTZ4amFCbGxoRkdHZHNZbXkzU2IrM3BqaGZ1SjhpSHVEQ0d2MmJWKzBhUHUreC8zTG11TnYyekpuenBiYjdyMmRYejdKN0pUOWJFZzBic1lXYm4vdzhRZTNMNnhmNkx3NVczYmZzNXNWNWhmdndSbWwrUTJMbDBhQXQ1TWFHMGRveHZFUXpsQjloYUorNGhCZnFhQm5ldC9GRDd4bjhWTUxGdUl0TUU4UTNBOWpyREx2QmZieWVUNm81L3VpZ28rYkJoMTZ1ZncraEhxQkhoNys1VHN3dUFTaG8rTU5wUG5seno2QUt2bk8rTUptYkwxL09DSnVPMkVEM1E1NzJSa0tqUzBEdlA0TnRZWE04Q1RQWUFvYjZxWVM5dHNFd3Zzc3dzdkdXT2F3a2U1dlV1TTcwb29OQllRSXo3d3ZTZTgvdzlQNy9Ib3l2b3BCeHhyNW1OYk81NFRKc0xTaFVqRDVNck85dnFPUGFuNUlIT3NiWnhxSTBHSE5QL1BnNjZMNCtvTTgvZXQ2R3dNMmd5amNEQXF0TmdwaCtoVWZWaS9aQU01REEzUEdYSXR3bmpoanpiZHVIam84Z0loM29SK28zczhQaTJGVW12WjV6Wmh2Zmx1TFkrM0FCazkvTXRvR2JLbWJQZm5MSDlBemt4dlVEVU00SnRvZHFiRCtxaFRudDBRS3dhN3FTQmQ3WExTYWtETVc1ZWI0c3ZyUW1uZ0VhYmtJWlhXRFp1N1JXQVh6MHg4TmRzVkhEMTVya1BJb3JHT2ZmUlJjV2htaWwwUzVQZnppMGRoSTdXMDRDbG9kczF0OHRBVStSOGZwRG5JbTF5UUxhUGR5NXVaS1RmSnBtRjZqdDJqZXFvT01xd0lja2tEUGErUlVEWFJ2emo4eENWbGpZcERMbWJmMGhIQVliM2VQUHY2T3lqbVB5aUI1M1lmRzkyRmVVdWNvTW43R2lHNDVpbnh2SHM3ZW5nK1Q3YzI0RFJ3ZE8rY29NditvV0E4ZlJkWWZYVno4MTVFRlBmYnQzS21uNlhjUnhpenIyMktlRm9xRFE3SkNKV2FnVWpuR1pCZnpGMVdIaXlqYTZET3k0LzM2R3QySmFOZDV2M1pNNjhVQmtnbjk1amVLQ2xZWVNOOUxGcndYcHQxQTJaWlJ6K3NTTyt4WHZGODZybmJUeldMWWxpVncvOUxHTnErZmVvN2VnRHBQcSs5WitlRHlRSXh2RFNlN0Q2MENITCtJcndKUVV5WDdBN29oUm5lQVhOaFpkL1dmZEtQdjZsZGtzUFhBZVhjSjNOKy9uMjdITmhKOG44eWY2dStYK01vdkQ1U1k2OGYrLzhsZWZuakVUQVFrYzlheEZnbWJzaFVnZ2RPSTBBd2Y4L0pibDkwaFlnYjdhTnVHZGRza2FkdjNGQ21lVUF1YnhreWJSdTNsMjRSNm43eUFmVEtYeVc2bTNoU3FUcEd2eTZYWmlyTWJDK0J3YmNOcHlIU2UraTdTcWxNcER3NnhYWUlTVzdWellvcE1wbFRsTjc4SlpjakFpNVladnRlT2lyWjk1aGZRelB5TFFQRGxBakUrLzR1UWNzNDVNall2M2FBN2VrQzhGbXpzMDVmNmFWQWRGMisrU1hNZFNMMWlkNGd0eEc2TjB1Qlh6T0M3VzFUMTR2ZUN4cGZiYWVBblB6WTFNMjVDT0t5clhxM1IxNmJzNzdHYTVMWkxobXRzZk9GczJzVTlIM3dWS2VRSEo3aDFNWS85UFVlKzltNXlBVk5tUG9jamZDODd4M0FUdVhLZHZIb3o1MngzMEF6WmM3bDM4b1ZNVzlxcmFmZXprdWZEVjAvYlFtRHphay9tUXU0L3I3aUR6NzFsVTFQMGVkckdZNm5PUUJpR1I5Z3lKbmVKRWpuS1RxWmg1S3E3Nm5rVUNRdkJWSnJFdERQTW5CUkRkdjJvZy9ZQ0p1eVEwd0hJRFE0eHBhbHVNOUFueVhLOTFGNzdkWFpRWHduYVVHL0hRT2ZpUkdMeENaZ3M2UnpzNkJuOHJpZHdlYytzM2N2RHRpUTZYYUhDYUd0eTRZcEZ5ZVNpUXF5ZGhXVWpIOCtSTlRnR0NUSno2VHVwYkNiNW5KaE1EcDBVZDdMcGRDYUQvd000OFpPR1VySXY2Wm54ekpaQWllTzZMVkUzN21vS0RkdGZaYXRXQXprdWt4bzA2QkhPRW00UVBuWWtLc3lDMlRBNHhMd3pEVXJVVDdGakI5YjVPM0w0OFhrYy93STdwWVBmRjRjR2gvcXgxSHpDVEJMdThtQnJ5M3g1UTFheS9pRVlNOG1FbW1heFdRbGlWQ3RubTZsV1hGS24ydUxPb1k3dW9ldGltVlFwU0dReFlFWU1tUVNINWc0RmlXUVZESVVFUy9OaXJSa1pUa0MyUTJ3dElpMEhHZHFvalNPeDl1ZXFqa0x0RURuRFd6enVaU0NDNVlRL1NGdGdoTTJtMHBsSS9NU2g1RFl6bVpCVVNiVlVLWkhFVzhVeVZUbVJOQUlqYlU2WVBpMHl3ZnlrR0E2M0RWOFZ0aC9DbG5UMXE2enlPdFVmc3NNSEd1b2NXdTJUYU50TjFtM2FIdFJreG9XbGJCZjRmMnZkTm5scjNLWjdhSnlwNms2ckZvMGJtcW50cjV0NTQ3Nlo5eG1PTTlyYWpuVy9keitmR21kaHV0SmJ3Tytmd3hkZXhOZHdmb2c2UmpMWnlhNzgrY2dHTkt1SldYL2U5cnByYUgvRFJmU1FyMlZFWmx6WStKdEVIdndDeXQrY01Dak1FNDV0eHJ5K2RiUVpjYTVWMmx6RHEvTDl1Z3J3cUl2R0FvdmJQSHFtOFFXdWNIdmpEWFREclE1VS90RkNDM0tNV1VqZUMvb2VYeVhINUZIUE4zdFpPdDVBMG1rTk8xYmR1T1VEeFJNd2Q0clpxR1BjY24xQjg3dTB2akFqYUNqWEQ2QmN6d2doYmw4dEZWYmgvTm9pWEN2Y3hQaDFMbC9IVWFyM3JnMGNTV2tNZU84NjdTeUNQZS8zZGRHUFo4L1hUOU50WGs5cW5HZmczeC9hOVE4ejhvOVNaajhoM3R1ZEk1eEE3ZnpxZmRNS0llcFpPK1JZRDVoaEdrVDlHS2xsMWF3SURWcEFHVFZIT3IzS2E0d0VUUWxqWE5PUDhNbkRYOXRJdk9uSFRJWlVPc2tHcklyZDFQYXlvWU56c2JiWGNqSjRKUnZzY0swajJCSWhTUnhLRzFCalNFS3dGWi9ZT052YldTR2toWkc0MVhteVByS2VhSGorNENQMW5LY09mOFAxdkZIZUg0SVFaenMwODc0YnB6anRrR1Zzcm95S0RFNnpOUGlXQ3p0WWtuR3FGTnZQVUxkOVhTekZoTUJvdzJlN3Y3T0tKT211L2R5LzVpeE5EeGczd2k4RElYQVNPQmt5Z1JCZEpobnNpSXpBUFpkck9tcGhpdG1OdEs3dVkyUy96Ly9NMjFpY0JYdjFrQVQyWTNBZ2xBcUhBdDQrMndqYmxFcGtkSTRJb1hSb2pRUkFKRnZmQWtORldOZFpaZkxyRUU1emhBcytCQ3RreW15U05HMUFSZjZyZElPY0MwQjdWRUd1KzMrRDk1Mm9DdVAwQ2dWSWpxWGVQbFFnQ2FWQVZscGt5LytlSktNRWNGVGV4NnZjYUtKMmpWWFN5OWVaQWZqU24wNHJkcjd4aTZndmFZTERQUFg1eHRrNGpGcjFPNmVReS9KRHJPc0xvS2huT3p3K3I4TGpLVkdvTXdvN2xRS2MxZHJSVWVub2FJWDk5WnRkaVVKdE81R0hPenJaT084MHd0QldsY29kUkdXUHRUOGFLS0xnL1k2eVZLYldPSXRFWWNFb2pTdTVNV1YxOURQdEpXZys1dTNBVzJRM1FUUGZodElKTW01M3czWThCUDhROS9NZUFZTXE0NTJVTDdqNFRJSWRqT2Frd1dlSStRWlhRUnlLSENNK0h0aVdTV1pxd0FaRXB0clJrWVRuay95bWRYN3RqN2xocWRKR1FrWVhRNlNyWTFocXE1Q1F6dkh5d2xhSUlJdDQxQXhER1RSRnEvMlVNOGp1UXNLMktPTGE4UUZVTTlEZkFkc2VNNFBjdk81QVhtdXcyOGxRaTBNeVFRTXlJVXZCdVowS2RydmVXd2l0SUUzelVRUGxZeG5sdzdyRC9DUU5ic2lPZmEzdjJwRjRlS3IvNUhja2xxczdBZXJ1ZjMrSSsrRjdoVVBFWW1mRTBMM3ZjMkZBbWJpNDJKY0xkWkZSK3dPeUs5WlJZWHN2NXY4YktoQ1ZMbmJISDhsdkdqTEVabkpuMm12alRVNS9ZZS8xQmRMME42aXhadnpjcGpJODN5L2w2OG5Yb1l6Y2dmTzh3R1JIb1JoaXAwdTRPRm41UHFrQmRxb2o1ZHYxczN4L1BtVnVGOFk1dGRkcXIvNjFXdFpwcU1VWU0vL0RVc1dnUmw2SWFwUW8veEVleHlsMXdOVGVmVmN6dmJlNnRFU1VZc2tBZElBYmNEVFVqclN3NGgzMGVoR0VadnM3ZVppbkpkZnc5ZFRkWWpQTTBUWlVJQkFUcGxqTThKcDRrbU1KVTB4WGVJdkp5cGsyY09kaExUVGJ3NzRua2tsS1B6emhxTVl2M2N2SnVmL3dsdDkvcWNuZ2hldDV2QUpmWDBweW4zOGF4OW92NlFLME9mUDhSTk4yQld4K1ZQdTA2NzhlL1F2UkhJdGNTME9VL3RRN3YzVkpxM2VoVG9NdGhrVW1Pc2xrb1E5c3pRam9LdlVtOXc4TURRM0FlekFlalhyUHFTMUlaY083bm5HN2NpL2NaQ3FXM3VKTkxud3N4Y0x3VXR3bWFVTVlmc0ZoeURIYjdrT2hxSjlybEkvMHNQSE9iSThVOE1QVVFxZ2J1VUIvN0YwNERadHVrWVVNdGw0dzY3QVJaTWNBNDg1N3dHSDhjVEFKc0ZSRGxXWVp2QXNMamdEdkRvM0RPL3FJZ3Y4OWtzbkF3K2wrUXZyVEQ2UE5ZY0szUUZRVTc3K1lUanNrSk9ocjVKOEZrMXZXWldHQnNFWTRqOWw0VFpvSWJWSmpjc1htQjZkcGV1ZG9VMVJGY1lpTmhVUDdhbGxjTHJkRWlrUFVQblFjR21SZXRTTVIrOVdBNHdUVWw5anRTK3kyOHo1MmV4OExZZnc3N3haMkQ5ZXkvQ0s1ZXZXYXF3bTVlczFxVEhPZjZ1d2o5MTU1eGIyVTNudkZzbm1mTW9Kb3dGTDFHWEx5Mk5qSkFDd2xaNEtUY3ZBUHZHOUUyRTNreS83Ris1Si9oYXRaVFZldjlsUHZ1djJGYytkZWNRK2w5MXlCMVVMdUJVdlJXazI0WmJvK2NySWdUOVBNRlRyd2ZreFl6cys4bkJFWmVRamY1bGlUZ2Y4VldmL2l6bUlmSUlwWE1yaXVYRHI2S1QxazZBWlZheit2RTRJVDVhWVBwU1FtTXlpNThzaUkzcno2S2txdnFsUGoxa08wUTBvaHZhWnA1NlFkL0JQOCtDMkJicWpyemdOYzBqSERzaEx6RDJEQU1lOGN0aDdIZE9PeVR5ZTBVc2xmdEoxMzNYbHRXaml2eDVhZXRqU201Y01uMU9yaENtU2NYNzJYa09XT1QrOW0rdFh3M0xuRHdTd0U4ejA5K1dDR2g2WTBMM1NlaGR6WWp6VHZxalRXL1JFK0t1Z0lZVVVRcXFGc2lJbVAzSmd2ZkppajZMQVZ3MExkUHVhN0NIdzhDZ2ZJdUhjQUFka1BGVmc2NlVNek9RUE9iV1pDNFRnb2liZ3NjN1FVWlp5dHdwSzlDRk5YNVV3ZnJNUGc5ZTZUWlpQaFlzcFd3bVRJR1MxOHZUK0N0aVpCUG51eHoyVWJVNGI5a2dmZmNNV2c4amRYTVhDWkp3TUI1cHR1N01hNUdIeURMVHVDczF4eDA4US9WOEd0bnlYamgyeFYrSDVUZjk5cGhaM1R4OWExOWs3dk5sdTA1bTlvMk5EVVpFQURYU1pLT2xlWmIwUmtsZlcvS2tlTStaVmNXaUd5RGxvZ3FXcEdtQVlDdkh3d2JsR3R1WHpoYU1YaHRrVm5BSnl4YU9FWmhKeFJNRXgyK25hd0k2REgxTFRiRWFTNkhuU2NvSTVjc2NOTnF6RTkwQkZNeUFSTVkvaWlzbUVCb1pGMG02MUh0WFFzSHlTYXpzN1kxVFVTek1mU1dsUVA1a0lKaVlCbGxDOHFzN0c2YmVvQmxNM3orZDc1V1g2c0E5TSt1TGMrT24zU1Rob2FoNGV3bmRPK3dHUjZoK0lnaFdPbEtncTM2OVJOQ2xtL2tQdm9GNjRueWlaVmxTMTV4MW1oWTg0NE5ualdEc1ZVdlBXb2hSaDZURGN5b2JTUm1wTXkwcDlVdjNYMjF0M3hRRmVsMGhXSTc5NTY5amRWTTZsSXM5M1N2SGtsZDdhb3RwSTEzSndGcUlFVHBEVG9OTUhNVGh3NzlZTXc4ejdrNnRBMDUyWDdqRm5FZ0Q4U1BvaFJ1MUxYdHdvNWVrU01WSVdLcnRXYWpwMjJBZWlLdHI0L1g3L3V6L3N6eTJsT2x1TnhwUWRtb0J2YXdORzkzTkE1d3NhUnNBM0pqbTRaVklPdGw1eXlieUEyVE1oSXJIL2ZLZXZubVhGYk1aWi81T3h2S1RNb29TUUpqajZmRmpXaFRnb2VlK2pQaVM1aG0zQ0xjQ2ViRjlSbDhUdElpMEt4MGsvWTFuTmFiTVRydW5LYXVERStYL2dtOC9yMnNjYmNWdnhURWZqKzlVUHpoQit4eVVuV05Fc2FKNlNPUVgyS1NJMGx1eGtMUUxOVGd5bFJMODBQRDg4YkRzOHY2U0krMjNacUlEMGpNejJRc3J0eGxqaVpNSjlUaGJYRFRWTmtlRzJCenhDbnpXbE1KN3o5a0lMaGpGL1Erd1RmR05wZ2ZqeUZwV0syUER2WkczVVRDVGZhbTV4ZHpvb1RDekJ2VG11Zm45ZlhPZ2Z6Rm13eVRRaGwrTFFyamxpSFpwMDFVdVNUTGhNQzB5enpLUmZNNW9JNDRRb1Y2OUI4c3lvRlB0MnlJY0ltMi9CZlF1WEVhdlhFaWpCRnpsalltTjlDL1F6SURJLzNMZkg5cFFxeUw3WjV2dG80TFpQdnVISnp5dlFoUFg3ZzlmVEMwWUhDYVBCVlNkTEp6NTNoZEdVcGFrRVZUQWw1Yy9veDNoTVdsVi9JUzhyOEVUTEY5aXNKeEJPNnRqM2U0cGZHVk5lM05aNUNRVldhTEMzd2EvTHR0d2FNL243WTQvaXM4N3Q3K2dZYU96NmMvdzBTdmlYcTVmMHJmS0Z1bWY0UGNkdFFOOVhlYXBoc1o5WnZ2QnYrcDBnek9aNmlxOG56cU1zT29UNGorRnZtY1A3NHAvSXdyMEsxVkQrQmpMOHF4ZnhUYS8zTm1mNFBuN0NkcTQwTmlHNXNQcFNZUEMyUWQ0MjRMUm0wV0NDa2lKTlpseFF0U0ZSRlh5TXI2eTQwWEVNMXhDNUtDOVJVemJpaExCU2xKVnNrU1kyYWQxL25TOGxWejBac1JVTExsWkJsaWh4TktGQThaZEdTVlU0SWxBUU9TSkRnOHUzYnIxZ2phYTRyOXd4WCtrQnhYVTFlY3NwSmkzOUFpR1RzeGlwK2dEVjlMWWhGSXk1WjJPYjNNY04zdnhBVmVsQXJPSDRhNC9waWJSbytERms2d0NUQ1NEazJuN0NWanlha3F4em40UWJTeWhKUlhLZ1lvcDNRNitqRzlRK2llK2Y0QlpwNTltVFEzRm1RazZGbXRFM0UybTVndmViY2M5Y2d5bEZKSm9jUTdpMXpoT01xUjlqYk5mZE05UWRVdi9aVUdtakNHM2tiR1EvR20rTUlnendhbVMrWk5xeHhOeGFac1VpN1EyL1JObXQ4ODhadFRRYmJIelR0SXQxNm1iSG5wODdXVUllWnVVeUxjenlEZHRFQmJLT0Z6L0ZBMDVGYndEa3oxS2RCYVUzSDRFREhHYVV0ZDFBeWtJVFJjRStweDRINTZSNmdkMUNoSXpjdzBKNm5kMndaVzV2MG5uTmlNUWNXdHA4MHZ1V09laHR2OFRibW9KMHRGK3RuSGpXZlJoSmhjZkxsNmRhS1BIYStmcHh1MmU5bVFCdTR0OGQ3UHRXTERXNDVjY0lRQXdsemFQU2t6U1NkZ25sdVdJdFlNQy9hQVdUelNSMFRyVGN6Ly9NdCtkV0RDQzRNSkwzdjltYWd1dzRTSFZBVE1WSEprUzBuOXM3TGVTKzRxTWlNUjVmMFkxVXRjWDRXN2kzdDdReVZNeENWbnNQakxvc2ZFbmQ1MkNhVG84WmUzamk5YWVUb2taZTduMktkOXJLbDgyMGcvbnI5QVlSRFJsNW5jZTI5L2lORy9uak8xOVVpN3FFcDFKZCtlRWdSUDBPZHVTTC9zMW5ZRExJMVk3UklyaUhNVjNMTEJjeW5lOEd0Skh3QVM5UVBKTURMMzRmdGhHOWZKQmcwaVlzK0hlQWhiS2ZhbjltY3NIbmNUQU1tQTIzU3VYeE4yZDhLaVdMYi9aOUNlQTlYYVhpeTRVOEJscTIzVkxyMnMyVHYvd3h1SW15ZCtoM2RTc3ZJUXp0NVpFVUFRdjE4TWNnUHNBQzJDRjFpMFJXT2YvcVJiK0xSQk02ejE1anorNGVzKzBDVVRJVmFPbER0RE9aczkxZEM5aU80RDZIZS9CcmhvU3UxNy8rQVI5ZlZVRndBMVJQZUpaYnZQMmYwZzhtcFNUTEpmM1BBMzA5MjJKcjg5TmlhRVpFeExYQ09ucExKcHVjYm11Njk1b2Y2UG9TcDUvbjRibUdlTUExMXphSy93K0x3bjU1ck5uVnAwcXZwRmxWTUNhOU9pLzREcHpYOG1wNkl6R2tRZ1MxWlhJR0VBWW1WUUdMOXNQWjkvbWJrTmMxcGdWT24xK3FhL1dCdGgzbXBaa1lYeHR5aDJFeFhXT2RlRnZSeUsvdFpBZjEra2VKL014eGlmWjlqTDNieDRMNjlvcXc1SDR3TjZmMlFlTUxCSVJhaTRnY1QrdFFZTzNvNGpFeEZ2aWkraThVNGFnOG85T2dSSVorUVJiN0E3Z2NQZms1eC92UVlSNGlVcC9lMjFROGtxRWM5MmtjSHpkc09CSUZESW15Q0liN005b01MMlpEOFVDQ3Z3WTY3bi9YcytXeXNYc0MrdmwveDQ4RG5ULzJHUGsyRGZNVDIraEh1L0JjcUQ3UE5tdyszYzZhVjhMWGVBMURwWkN1bEd6clpaTzhrejNMbnJYZk5pZXg0T3YrUXVwLzdtNG5JSTM0UnFIWjZ3Qll3cXAwdzFWbXR2ZDBvZDlLSm0yRjBPcXFPN1pkb3dNYm91RkJZSWF3OU9yK0d4b3BvL2NkMWZPZ2JTOEgrZ25sam5aZzIxbi96ZnJES3lKRHZBSExCYXdEQ2dLOGVDM0JzdGNKUzZLb3Q4S0hmd0dQLy9BM0E1RmxPL3dlNXdYUW1mNy9MWC9uMWZvR3ZKeTBuYkU5aTBVL094TEJlWjZWNnJOZGVKNEsvT0JlMlBHRGZ3QlIreEJmbUtsMk1WS1RmWHdyK2p0OHNhNjVCbi8zMExUb2hwSVZ1SEdmemVYekdCL3F2VkdIUmNLNS81T2lNYm13T0FaeU9VTXpWZjN1ak9aN1Q5WGNFMFBuZWZnU1lkM2Q5MGZoQjI2SGlBNWNINHRpZDNqVjFKTmtXMkxkOGtKTytFY0tadVpoaFNQSDR4QXpETG9NTWxieGRyd2d4WmN2RjBWYnI0aHNUMUFsQWIxZWw5b3RHYlVnK0dLdVQxbXR5a2p6ZHFNMWhsVmtacDVYSDJjMmEralo5bnE0Uyt2MjFnSDZDdG1PSDIzVCtXVUhrcXFZYjY1Zys5b3ViN0VSY2R1dThwV3RhZWl2WHdMbjN6VC9Wb1ZaclRBd3VxOXpzdlhwZWZ5RjIvTmd0VURxdkhLYXhGcHRFNTFidlhwTmQydDlidmZ1YlgxdjZtZkpIQm5jY1o4VVUyNXI0U05lWnZUZk12L1BlR3dmd3V1aEUyNVpqMW9ZVGxxNnhwUG82bGJDUzdpY1BDeEgrYXlIekJZRjFoVy8wc2tEc0lqZXM1ZUtSTXFIeE93ZWwrczhaRk4xcW9mMjNscVBOL2N3WFA4VjJ0MnFsclIvYlh0TDNZdGJxdC8vendPbHMycC93bHdmKzZnUWQ5cGo2bVJyUjNORmp4bDJWNkdmcmN3WktzUkhJaEZ2MGVlT2pjeGxueGFsUTBoL0VUMWF2WDNzYWk0dzcvdVJWS3pYdjQ5cnBXa0p2VGFaVGVrSmJwVjdkMngzZ3ZQNDU1SE1MVWVxT01NKzEvMk1tM05EMy8zcWdzUkxCbEhRY2daVXdPMWZHei9Sbkp0M3dqQkdRNWNGaXFoSnkwSHF3MVpaalRPNk9PVFcyOC9UWFU4YzZrUkloYzkvL3VSOENTNFNXQytmMExiQjBOUlJkMU5reUVPanNjaXdXdENET0VpR2VHb1RsZzExVmFNUXhzSmlHUXpKaW9XQWluT3NFb2R3Y2ZIc0VzTm1LN2lHd1MzV3dhZjNBdzF5b3pJVkhkWXo2UHpmQnozdG1rWEF4VjJaTDh4ek8zM0MwaGdycFN2RElhRGtsU3VaT2lBWDM5ZE92RjFlT2kxUU9yODJaUVR1a1V6US8wcktjbzRvVGVsZDEwZWp4TWZHeGFxSkFaRkZuNjBDZ1dLVHNqZVZZZ3pTZTlDbmd4UlFMR0VrbUNZakRsVWgxM2h3RFRUSXgwNzd5U2pHWUJNY3VlYS81OGxNUU1xS0FPcDhqWlBsSlNGbStsT0lyOFkwejFKbld4SS8xWUF4VWFRN0w5eVZwL2Jkc1VYalJ5ZHFyaVloWEM5aDJBUGxzZ3ZnV3M4NjJzcnlLcWdNcVRhU010dEVyZWx5LzhFSTlIdEV2dUVDUE5OMlRBNDczNzJhdTJHRjYvKzZnV2dQN0swdHJ6elBEVEZlVEtyQ0tsdW1IZjFTLzUvYkpQbUdjanFOOXlXd2dYNXp5L2FWbDRNZElNMG5ybnpsUSs5ZUQ3RHZ2bDdwT0lTV1praDNXM2lIQlFNaUJ2ZSt3ZXIwRENLTjNRSkt3MUR2c3lBQTYvWnRTcm44S3FNUFByK0FHS0QvVElwcmpQMFF3MHF6M1ZadnVUM04rZE0rcDkveklPVzM2aGdoN25xZjArVDErdW5RRElSdVc4aFMrT3FNY3YvRW1wMHZ1ZWY2TGpaS1ljcjFyMWRSQitpaU44dDlkWXIxNGFBVFhmMVhYLzZuVVNxSElmQ1VWa3M4ZFdpVmtFNUg4eE92UkRVTmZZcDZjVW9PeWh1K3kvNyt6cXdHU282cldmZnYyN1o3dStkdWUzcDJaM1ptZDNkblptYzFtTTdPYjNleE9KcitUaEpoZEVyTEpRbVVoTDg4c1NoNHZBVEVrV2lGV2xLa0VyQklTaVZLaUNDU2IwcElxTkZFVVJYMUlWbmlZSWdXV3BpeE5VZS9KRXRHU2lsSUtWYUNZNlhqUHVkMHpQUnRVWkgrNmIvL2VjMjkzbjN2dStmbE94TXJrTmEzWmVMSjlRS1pqMWRVWXRsVFdBMEhhNGpmc3N1R252UXZDQzVPNTFaYWxCcGZOWDdFTFFETlNaSHRjSFBVYlpNYnc4MzZyMDdiT3NVMy9LK29vQkhLcVRwWm8xVUcrN0JGZlh3c2ttSTN3QThSTnVGeTNkdllSczlZUS9icU9kMjlJOEpmTWtGV0Zkbk1lR3pCYnFkOVNmVTMrM00yK1pmM21sMzcvWCt0azBscGR5MXZwYzlzYjBQdmNGcFBld3J1MTJON0ttQjZVUHpIUjJ5MHpxZ1NXcGpzV05aY0dDSGxBSnFUSi9zTmFLMGJ1OXpmN25ZNXA5cE1Id0c3UDM5VVovcTUyUzNuMGFydUc5MDBQS0RqY3BJSk9Iemt1Ym1pYUJ4dCtUUXVhVGVPb2tESFROWm1zbUlHVTJjTkRJR0szMEtmM00zMWZKRlNkRVFGZFlySWdpVFVmTzZ0bFJ4TzJ3MzdkTEkwdWFlTHNwU0oyN1lpWXBYWHQyM1ZsTXlWcnZxZE51L3pIT3ptSmhMYXkwNDd1Njg3MlRLYWRWR3lwdmgzNXZQWnhoZUY0NTdZVC9OZFdJeWJmdjJnaWw5VUo0dXNEY0g2SU1FKzVCeHRIaS8ra1hmSitWbjB4VTFDVkJIL3dURW1RUC9JTm1takdqU25lcU90azZSKzJTUG1lWmg5VUN4a3JvYkE4TEQzbEgxYTAvZTQ4NjZmMFVma055WlJhUkdiUG1BWDJaeTVuZ1M4bjZkRUpQWGJwSFQxTWxwR2c3NTNQYUNaZDlRY2ZzYjg1YWg4bHZ5ZWJ5U09LYmxSSGRCL2QrWkNtNkc5OW1FWHNYMVRreGJiUDAxOWh6cFhqNkZIZTZPR1hvMmt6eldKRkswMVhvT0d5SzlmZ2tWR284by9PWGpsVytYN1YvaFRpRUU2TXlETnVkOG44bE9xTUxNM2UrZi8yTTBUQUdvNkl1VlN0M3JpVXVySlc1bGJHMGtWZWVVT1YxWWhURDduVHRpdFhWNzdmV04rc3FPVnRyQk5sVjNlT0pPWWR3L2hXaURUUGN6SVV5VVd2bU84NmFySmFKSTJMNHdaVXl0TEcwYXR1VFhaMHRPOWFPL293RkZPcDlsMUhObnJUSDN6STFkcXVkQXJiK1d1QWhCSk9LSlZTcVYxcjF6MnliaTFlZTR1NHpaS0dtZWh6K0lWa2tvNDIrVGt4NUw5TG16YTh6elpSeU51SGxxUzZPWlNMZSsrcmRUZXVXMTdxVXZWNEswdGVmOU5rdXhxUCsxaG04ZkwzM3M1dWJHZTIyOTZSNzFzWGpQdDl3ZEtxMVNWMFdSK2RYM2pYWi9sKzI2MWhndkVVcVJtQVJLTDQ5L2RVMXkxZkF1Mk9xNGtiYnBwTW9uZCtadkd5ZjZQZENiRjZPRDkvTk5EcTF3T2wxZEJzZnl0dmRsN0lUbHhlb3MrZ0xoRytWQ21MZmlncVJtdG5NOE5EUGVhUVNaKzJONmttc3pjcHVrNm5kTjNlVnVZL2NYblc1NnQyK3NLRWhIZVh5NWl5aE4vdk1PL0h2YndmUTFJU05WbVlnU0VzODk0RHJaclFyZW9FM1R1MDJ0QUlhb3hEcDJoK0FmdmxTd3Z5OU9TaFkrZVUwaURSaVcrd1JNOGRLNDNKYk5YQWtvMHlHYU1TUFhWb3hXMExGSDdpYlNzT25WcWpuRHQyemFlSDdIZUlOdlRwYXg0NTk1UzhjY25BS2thdkxxRXlTYTdSRTBSTWk0YjZxVnQ1RWFKOUdxcE1zZkxBa25IZ3BxVXhXcDVUaC8yRGdUS2pZeVZndCtPUTFhdk9jd0JUTUM4dHhMbkVsWnluS0hEVkM0UzVtSEw0amtBL0Q2ZkZieU5EMmtPSHVnRi9xeml2YnpIcDBqVjdXdFBWdTI2OVN5VlNCVFBNd0g4amwzb3BPMGpKU0I5TVNaZGNCSmk0QWZpWjdvUWZ4R3QxYUFYY2lnNCt1eHlVUmtBUFRrekF6WmxEc2JBQWl6azFhRXZGSVhEbno2WmJPTEV0YVVEZjVQS3lSRHU5WkwvUVBVVGxJdEpReW8zY3Blb2FtUUxDeVQwdXpSWEFLSUhabDVmMENoM005aTNGMWhabk9kRkEvY0wrZ2VPZFUveFg4b3dwdXBOUFdpS2NpcnJ2UE9Jb21oWW5xY2hKb3pPWHdMMkRPdTRTVlZqUFZFUzN5Wld5OEx0NHlIYjhNQWpmajdWSUhwa21YTXRiZldWa09HUmk0ajFBZURkby9QbEJKNGc3MVN1a0VvNWhaZEhnaWp3engzdWorbVBDNlNqYnM2SmlXZXE4ZkliTzBpS3ZFZXlHM2pEVVJpQ0RJU0kyNXNnZkxaRGtzUjB6VTNHT3M1eGtQS0VGTXNRaUNMZER0MENFODF3VkhkMmhHNmEwc0JHNHVTa1hOQnlIZndycWpGODFYZ1VGRWFBNUt4emtReEhlblArOG1wR0ExdHFrYndxd3BtRFRwOENoWGhJMzhlZ1NPNlNWNkpFaUVQU0U5NjNwaGh0Nyt0YjlPaHhrQXRORktIRGNtbWt1Zy9yRm5nSVZFSVV3KzVVRmFHd1VRdFFROEhVRTQ4YW9pSGtYT3BiT09aQUF1b2hreDNsMldTeEZWUHVQbVJJTXFVYllIMHJsVEVWV2pTWVc4TkZBWHp6cDg1dFVYbGlZM0JudWpQczBwbENxaGxaVENDQ1l4akFjNkNZbitHS21kK1RTSzdVdWs5d090RytSTFRXc1U5YWNpd1pvd0FvcFJ0VFhzcUtWYzhsWXg5RHUva25hckdtYTZ2T3pZQUg5QkkvVFYraU4vSjNjS1IyQ01RblVyVXN4RlZ4ekIxcVMrZU4yUUNuRGlPV1A5a1Y4UGZvUnA0UjN4WExoT0laVGZ0Zm1xTUhrMTdFODhpT0lOb081OTNBQzJKT2pNY3dvMXlFMFM4SUJWWFNzTENrQmJZdVYyQmVLV0JPcW9xZ1RWaVIwb00yYTBBSytnRFpodGQwUnRLd3RjR0NMWlFYM0pxd3RXa0RKcFNiMzhvNlpUQ1luZWVmY01aSGFrSm80d0hkY20weGVDenUycEY2K1VRMnJ0aEZncXNJbkhQWnJxcWtkWVlUSjFCK2dhWEd2T3p5VkhQRFd2ZzhyOFNGWmUwWHRaYXhvN3lTdmFISmZ2YUlEV1BNZFNJb2RIK1VWWE5SNUhZWXFFL3QvK01qM0pUWEVaTUpZUFk1M1BkcVMwcENGUm1nVkVMNm0zelVFaWx5YzJmUXdwQzdXV0JhU1o3WGp3WmE1WDZuZ25xNzdzdWFvZTJWd0xrOVVjRkVSSXJ4WTJjK1RJektMQmF1L2xWbnVBMkcxMDNVZnJxSUdWNjQ1RUZkUmxUbEkwS2lQVHRpazdER3F2SEtUeW9KK2R2RHBZR2V1eWJ5Slh5RGVkZmY3ZFlwbDU3MlZlb1k5dU43Q0RqUXViWlArVy9xNFFHdHlKNm9lOE9CTTBiTmgxUnpydlZpcjd1UzJrWTh5N0JGaHBvd1doOXpaY0hPMDRRQm5JUzZaMVRmcThldXpialFYWDA3VTIxUXRYOUVtRVNCVWZWS0l1YmZWb29CSVFleHhmYmpGMzdSWTRUZnJCYnR3ZXRzRG9uRW41NXpJUGprWEVSZVY2M3NhTUQxYWVDK2kzNHJXa3pieHBmQWtrbkpVMnZpS2hBaEZmY0lJQ3B3aEVxVVZXYWIybzVIUTR4Y1Y1ZUxqZkJteDkzemhqRUsvY3cvdmlBK0duMGxzMkozVXV1TnExOTFiZ3pHZm4wd1RRcmFCRDVRNG15OURFYnVpblBuQ2tXZkNvT20vNXp2eVkyMjNiVERWcExuMVlJZmliNHZCU015Sm5VWU1PUzYxOVpLNmVsR0VtMEZJd1VyTTFpbDB6UlQ0Z2FiU3lxVlo3QmNLejZDNjAyalNGTi96Umt6L3htOHhBUG9kdmMwNDlZVHVnb3hVQlN2MFc1WjJ5dWQ3OEMyRFdLMSsrMDFkMWg5KzJDZm1wSXN1UDBGZm9CdHdySkFjby92SUlzVEpVcHVGRmxua2NBVEJ2RWRraU8rcFozV0Vjd2JGRlp4OHVoek1jV3RLcGFVUExqMitlREdva2RldlA3N3h4ZkgxNi8vcUZncWdNczU3VGlIWGdwSHVLcjVkS2gxYit1QXlPRDcrd3ZqeDlldkhYOXg0ZTYxVWdJQ3d2UGNzZk42clNDYzlUVjUyL0g4RXg0QzNPbnRGQVFaSW1GRGErOFJhL3FKWWs1Y2REeWd5WiszSUp2Q2NMdkhuMUM3Tmw0cUFMbkRGMDhwNmxjT2FnQUFXeU1WTXBLZXJIYWx2TkQ1SmU0LzRMbjdxcUlJSEd6WWJIdWRSL2hMZWpxemt2aERhZG40T0d6OTN6RXNGdERpZkUxdmt6M2hlT0JnUk5vVGRsNC9TbzNRM2wrZmlxRmZoelhPQnMvR3B5ZzRFUXJOTXZXWm9MNVNwUkRZcFA3cnZ2aDhwNUpQV0l1dnhieXNYSG52c2d2THRYM3NWSXNLa2c4c0Jzdm1wbzZjVjVmVFJwK3lEbHZVNGFmdm8xMTlWbEZlLy9sSDdkeVRnNFptcjNDdjRFdnRkdVh3WHZVUVBPQmhndlVCdERRV3Nwc3V5UnFSaVR1cFJKUzBxeFhpQmIvS0NLaVNlQXBHZlRtUXlNTjNlQ2RPeVRPWXJaMG1RTWZ2TnMyZnROeGtqd2JQbjdRdXFTbExuejVPVXF0b1hiRU5lcHB6WXYvOEVPVTN5YS9MOGp6anI2cXR3dXVmeXJPZXk4L3cyNU1sUG5LRDBoUGltT2pndnY4QjVPZkJ4Q1dBRnRCNFJYK0V5WjRTSUtvNGc3amlmdHc4Vk0xMU9sRzhmT3VHRUVQKzVXT1BiVWN5SE40SXAxdVJuMjYyVDVWNytvZkZIQ3dOVHd1aWRPbW0xYTRuWXhPNkpXRUxUOGozemh0cUc1dlhrdGVTZ2RUSWtoNmJDaFNnWXpFQlNhbzQyeGJXeXpnSW5yVUhLQmZxemxWN0RDdG9mUVM1L1AzOXZqTjdLMlJZU0dod01sZU54MDR6SFk5SG5Jd3NpbFdZOVlEL3BXTjdHQW9yTVdXNGtHejRialltOEZKMlh2OFZsNmV0ck9JT2IrQWdHbWV6blFIalBoZlJtYzdiSm5HM3FCdVoyYVF6SDlQUVE3dWdIeHdURUVBY0JvR1VRVWo2Mm1FTnVWbFNRMlRjSjhiTmhRVDViSzlyMTR1ZGh1cVJyQ3JXbmRaMmNtZFYwMzEvMDZ0dFdFNmwwbFdUVEpGS29DVSsrVkJIeVplMkdNL1hpVkwxSU91dmw2czkwVFg1TDArVnZLVWIxaHdoY2ZyUE9IcXIraWUrYWluVDRac0taN0l3eHJTZE5FYytFTGhGb3AzM0t3VFFaa1had1NlQnV6L3NQd1R1UXJpT0Rzamk2bG1zNXg1VWNWU2dyNU9FQ3hmY0lnOFRSd3orbWl0eWlJamNGaERXaHVvVHZSQzR1bkdqQjl3bzZEN1VJWGJtNTI3S2orKzIvL1N0cEk4VW8wUUlzRktMVWFsbVVNeE9tb1REV0dsejgwdUVQZkt6SElwbFNvU25VWm5aVDB1cVBCdHJIZStjTkVMSTBjL2phUjk1Y0dVNHdsWVZpeGZuWnRWM3AxcUFXczVJeVNkNjczU0JmNWl3QXV1NGpSeWxJQnNwUEhvQXRHSVQ1U0ZaeG5TYmY2UHpxM3Y0MmhhcTY0ZytwV24vN2FrSTYrdHEyZHJWUGRoMThMT2IzZGNaVmN6aHZhWkYwTkxpZXBJT1dHbXBMZDE3VFZWaVlEQVRhVG44dXV6M2R0eXV6Ykxpd1lQNTRleWplRkpVcCs5RGhCQ1YvNWx3SXVQSlIvQ0llK0FuVWl5TjZ4TVVNbStieXhaUVVsRHB4SHE4cW1zbDVEdWM4WnE0YnRuTGRYTWlrVHFKNGdxbFZ0SkRJMzRtT3paaGNEVGpwQnJ1NjJTUWpOOXhBUnN6Tjl0OUlOR3kvUFRwcXZ4MmU5eDlUTytMeEhZV0YyK2Jaa3pjYS9nQ25qYkFqbXFueUd4S1pkM0xRc0ZtWVRobUhEWHZxVnZzdmdRRHgzVXFtamNQVnM2T3ZoY092alpKYkFyMEw4N0pjaU1YbkIrenpZeHJuZGpJTHN3Y1owY2hWTXA5Z1VWbnhYV1JFOEt0SHBURzZUWDZPajNHQWZCUkZ0NmM2cUJoejF1SkFnWkRYSVpocEVRemFuR1crQkM0czh1MXVpU3pIZzBFalF5YjR0N1FJNUFIN055UUhSdWIvY3d2MnMzQW9tREY0M1YrVDF0RHJ1UndVQWU4bnE0WmRWZ3ZQeWdwalhCM1Y3RXlJMDBOU0FGUm12MkMwR2ZiL2NoRW9URDRJR0RqUEFsSHVVYktHRiswTGlLSThyUE9EbWhYeGZ3d0tDSlRqSEhKdHZTZjR0OWJDWngyQXhOUVFIVFFJNFVFQWplM0ZvZlZJMy9TTDkzTEp1U2I2alZhR2orZ0o2OUxMWFA3alFpTXV5ZXYycjVHL2R2SFIyYmgzOGYzWDFVVExmTzhSVGdWNXdqMlZMNy9yc0lGR3VwYS9KN3IrR1dUNmU2RnpENjk0TjVDNm14ZjJ2Q2RxYTZmWENwTDBkMnNZaVU0QWVOcDlrRDFPQXpFUWhaL3pCeVFTUWlDb1hWRUEydnlVS1JNcDlBaWxvMGcyM3BCbzExNTVuVWc1QVMwVkI2RGxHQnlBR3lEUmNncGVsa21USW12dDZQT2JtZWV4QVp6akd3ci8zeVh1aEJXTzhTaGN3UkV5NFNyMUYrRWErVjI0amhZK2hSdlVmNFNidUZVRDRSWXUxQnNkVk8yRXU1dlNiY3NLWnhnSVYzQ0tKK0VxOVpWd2pmd3FYTWNWUG9RYjFMK0VteGpqVjdpRmEyV3BET0ZoTUVGZ25FRmppZzNqQWpFY0xKSXlCdGFoT2ZSbUVzeE1UemQ2RVR1Yk9Cc283MWRpbHdNZWFEbm5nQ250UGJkbXZrb24vbURMZ2RTWWJoNEZTN1lwalM0aWRDZ2JYeXljMWQyb2M3RDludTIydE5pL2E0RTF4K3hSRFd6VS9EM2JNOUpJYkF5dmtKSTE4akszcEJKVGoyaHJyUEc3WnluVzgxNElpVTY4eS9TSXg1bzBkVHIzYm1uaXdPTG44b3djZmJTNWtqMzNxQncrWTFrSWViL2RUc1FnaWwyR1A1UFljUmtBQUFCNDJtMVZCM2ZiTmhEMjUwaWlsbU03Y2RLbWUyKzFrWjNSdmR0ME4yMjZsd3FTa0FTSkpHZ095VlQzM251MzZkNTdqL2Y2NTNvQUtNbHR5dmNrZkhjSDRBNkh1dzh6c3pQbXE4NzgvL2MzL1RBemkxbHNRQUZGbEdDaGpBcXFxS0dPT1d6RVBCYXdpRTNZakNWc3dWWWNoSU94RFlmZ1VCeUd3M0VFanNSUk9Cckg0RmdjaCtOeEFrN0VTVGdacCtCVW5JWUdUc2NaMkk0bWxyR0NIZGlKWGRpTk0zRVd6c1k1T0JmbjRYeGNNTE1mRitJaVhJeExjQ2t1dytYWWd5dHdKYTdDMWJnRzErSTZYSSs5dUFFM1loOXV3czI0QmJmaU50eU9PM0FuN3NMZHVBY3QzQXNHR3c1Y2NMVFJRUmNDUGZUaHdVY0FpUkNyaUJBalFZb0JobGhEaGhIdXcvMTRBQS9pSVR5TVIvQW9Ic1BqZUFKUDRpazhqV2Z3TEo3RDgzZ0JMK0lsdkl4WDhDcGV3K3Q0QTIvaUxieU5kL0F1M3NOK3ZJOFA4Q0Urd3NmNEJKL2lNM3lPTC9BbHZzTFgrQWJmNGp0OGp4L3dJMzdDei9nRnYrSTMvSTQvOENmK3FnM1hIQmE1RFVlR1dhWFAyNmxHcFRYQlJreVUyendnRkhSbVYxZVhrcUZzdU1MblFTeGt3RHlhNS9KQzZMRnNJZW1Lb05HUzdiWndlQ3VKV0czRWdtRWFkOU5ldWxJWnJ0a2RHWFI2YVMza1FTZVQ2V3JLZ2xJczB6aVZCVi80ck41TFIxM1NPVjF5VlBCbHhDMWpYUzdLeU9WUk5WWUdSMDJ4SXQ2T2VOeXREcm1JdXlLamZhMVEwT2FDV2FzVXA4dGtLWkd1SEFZMGVMeWRXSW1NUktlYmxFZHFqeTZUeFlGd3Vhd0lSd2FOaE1kSmRZS2FVN2c4aFN0VHVHTUtkMDdocmluY1hadHV0cjNXVG9lcERyckQxbUhiU2xoQVoyUDVhSmNjSnRvcE00Tzl3V2VPUmVlSXBIQnJvNjRZOGtCZFIyUGR6dXU5bkZsMjZmUUo4L29sNW9tUVpXVlB4TWxBOEdFcG9YU3NpZ0ozUldJTlJDeHNqNWVTTkNUdFhEc1NuRkxsdW0zaGVaV0paR1VzNk5GMlZjZVRUcitsakVVTjV4enBoMm5DSTYwcmo2VTVFU1M4RXpIUFRQV1l6YjJxL2pjS253bXZXVkgvV3E3NUxHQWRybkhKWU12bmNVeGpQUisxclU1MTVJbkFDRll1Ykl5NEd6S256eE90cmt6RXBUWWxkWTJpcG9wWW93U1B1bFFUVzhiS2lVWXRXanhBYTNVSTJhSlpNK095OXBqakV0VVUxWXRsaG1iTmpHWUs0WUNFU3FLS1VKOVZJNnBLcGRZSE5MQ2tYZkdsaklZRGdod3IveDNrQWRxNkxaaFVHbVd1aGx5R1ZOaktoWUhsc2RseXVweDZWVlpkaWk1TTlSUURMVlVrTGpVZEphQ2ZDa3Uxb3pmZzZscjlOQkJKcGxNNmtlb2RxY3RWZXltUGhXTE1wTS9LMUl2NkNIVTY3eVRvOGxpZ1ZwVnBac0l6Y042MHNzZUZyME9xclpQck1ZOEdpakowVW5PaEduTXFVMU14Q1cwNU1obTJjbHpVWmtVSmtWbFgxSEF4enVLRSsyRkV0V2xLcEw1ZVF6ZmxtK25WTmFINlVFZG9ZRUhaRm9pMWd0aGpDVkZiN251cUtMakNUaGU1UngwV2k3Z3g0RkVpSEtheVMvMmN6bW1DSkY1YjBXbWNTQWFOaU1icUd2VkVVK2RxTEl5QnJqVGkyc0tRRHFxWU04bXphdVY0WHBWYnlJS1c0a0Zpa2JwTmxkL0tTYUpDRGFxRGJDN0tNSlN4T1dYTFU2Ulh6elZhMkphbEFUR3l2cVpoNm9tMG9meXJ3bG40cjZYZUU4cGxtOFhLdXlHTnlXekx5TTFpSm13V1VKTUhtYkRzVkk5Yk94U3hibzFHckxpRXliN2l2SGtxZTdxNnlSWWxJOWNWZlpOZjRkSEVMZXVGeWN4cUpnSkYzTVR0bTZkd1lwNVhUTmdpNnNyNVkyRXMweHNSMjFMMmMwV2l5RkpuYWJOV09GSlFXMFE2TlFHZk16cm1LUnFNNXBKVWRWVERWc1NhTHVUU1NQZFdrS1Q2NVZETCtnYXA1MnJUWkpKNXlHaGRXUnYzN04xWDEwRDRyVFp6dUZrUzkwVlFNNGlld29odjFIZ2dSUmpTRmZEYzFCWGNjeGQwamFpM3VNdjA2VGRwaFg0UXh5cUwya24xdmVwdTZ2Si9BTUUwT1RnQUFBQUIvLzhBQWdBQkFBQUFEQUFBQUJZQUFBQUNBQUVBQXdDNkFBRUFCQUFBQUFJQUFBQUFlTnBqWUdCZ1pBQ0NxMHZVT1VEMHplTExnVEFhQUVFekJvb0FBQT09KSBmb3JtYXQoJ3dvZmYnKVwiLFxuICAgICAgXCJmb250V2VpZ2h0XCI6IFwibm9ybWFsXCIsXG4gICAgICBcImZvbnRTdHlsZVwiOiBcIm5vcm1hbFwiXG4gICAgfVxuICBdLFxuICBcIm0taWNvblwiOiB7XG4gICAgXCJmb250RmFtaWx5XCI6IFwidW5paWNvbnNcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjRcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCJub3JtYWxcIixcbiAgICBcImZvbnRTdHlsZVwiOiBcIm5vcm1hbFwiLFxuICAgIFwibGluZUhlaWdodFwiOiAxLFxuICAgIFwiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wiLFxuICAgIFwidGV4dERlY29yYXRpb25cIjogXCJub25lXCIsXG4gICAgXCJXZWJraXRGb250U21vb3RoaW5nXCI6IFwiYW50aWFsaWFzZWRcIlxuICB9LFxuICBcIm0taWNvbi1jb250YWN0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlMTAwJ1wiXG4gIH0sXG4gIFwibS1pY29uLXBlcnNvblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTEwMSdcIlxuICB9LFxuICBcIm0taWNvbi1wZXJzb25hZGRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGUxMDInXCJcbiAgfSxcbiAgXCJtLWljb24tY29udGFjdC1maWxsZWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGUxMzAnXCJcbiAgfSxcbiAgXCJtLWljb24tcGVyc29uLWZpbGxlZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTEzMSdcIlxuICB9LFxuICBcIm0taWNvbi1wZXJzb25hZGQtZmlsbGVkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlMTMyJ1wiXG4gIH0sXG4gIFwibS1pY29uLXBob25lXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlMjAwJ1wiXG4gIH0sXG4gIFwibS1pY29uLWVtYWlsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlMjAxJ1wiXG4gIH0sXG4gIFwibS1pY29uLWNoYXRidWJibGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGUyMDInXCJcbiAgfSxcbiAgXCJtLWljb24tY2hhdGJveGVzXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlMjAzJ1wiXG4gIH0sXG4gIFwibS1pY29uLXBob25lLWZpbGxlZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTIzMCdcIlxuICB9LFxuICBcIm0taWNvbi1lbWFpbC1maWxsZWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGUyMzEnXCJcbiAgfSxcbiAgXCJtLWljb24tY2hhdGJ1YmJsZS1maWxsZWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGUyMzInXCJcbiAgfSxcbiAgXCJtLWljb24tY2hhdGJveGVzLWZpbGxlZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTIzMydcIlxuICB9LFxuICBcIm0taWNvbi13ZWlib1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTI2MCdcIlxuICB9LFxuICBcIm0taWNvbi13ZWl4aW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGUyNjEnXCJcbiAgfSxcbiAgXCJtLWljb24tcGVuZ3lvdXF1YW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGUyNjInXCJcbiAgfSxcbiAgXCJtLWljb24tY2hhdFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTI2MydcIlxuICB9LFxuICBcIm0taWNvbi1xcVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTI2NCdcIlxuICB9LFxuICBcIm0taWNvbi12aWRlb2NhbVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTMwMCdcIlxuICB9LFxuICBcIm0taWNvbi1jYW1lcmFcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGUzMDEnXCJcbiAgfSxcbiAgXCJtLWljb24tbWljXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlMzAyJ1wiXG4gIH0sXG4gIFwibS1pY29uLWxvY2F0aW9uXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlMzAzJ1wiXG4gIH0sXG4gIFwibS1pY29uLW1pYy1maWxsZWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGUzMzInXCJcbiAgfSxcbiAgXCJtLWljb24tc3BlZWNoXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlOmJlZm9yZVwiOiBcIidcXFxcZTMzMidcIlxuICB9LFxuICBcIm0taWNvbi1sb2NhdGlvbi1maWxsZWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGUzMzMnXCJcbiAgfSxcbiAgXCJtLWljb24tbWljb2ZmXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlMzYwJ1wiXG4gIH0sXG4gIFwibS1pY29uLWltYWdlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlMzYzJ1wiXG4gIH0sXG4gIFwibS1pY29uLW1hcFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTM2NCdcIlxuICB9LFxuICBcIm0taWNvbi1jb21wb3NlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDAwJ1wiXG4gIH0sXG4gIFwibS1pY29uLXRyYXNoXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDAxJ1wiXG4gIH0sXG4gIFwibS1pY29uLXVwbG9hZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTQwMidcIlxuICB9LFxuICBcIm0taWNvbi1kb3dubG9hZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTQwMydcIlxuICB9LFxuICBcIm0taWNvbi1jbG9zZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTQwNCdcIlxuICB9LFxuICBcIm0taWNvbi1yZWRvXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDA1J1wiXG4gIH0sXG4gIFwibS1pY29uLXVuZG9cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU0MDYnXCJcbiAgfSxcbiAgXCJtLWljb24tcmVmcmVzaFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTQwNydcIlxuICB9LFxuICBcIm0taWNvbi1zdGFyXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDA4J1wiXG4gIH0sXG4gIFwibS1pY29uLXBsdXNcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU0MDknXCJcbiAgfSxcbiAgXCJtLWljb24tbWludXNcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU0MTAnXCJcbiAgfSxcbiAgXCJtLWljb24tY2lyY2xlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDExJ1wiXG4gIH0sXG4gIFwibS1pY29uLWNoZWNrYm94XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlOmJlZm9yZVwiOiBcIidcXFxcZTQxMSdcIlxuICB9LFxuICBcIm0taWNvbi1jbG9zZS1maWxsZWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU0MzQnXCJcbiAgfSxcbiAgXCJtLWljb24tY2xlYXJcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmU6YmVmb3JlXCI6IFwiJ1xcXFxlNDM0J1wiXG4gIH0sXG4gIFwibS1pY29uLXJlZnJlc2gtZmlsbGVkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDM3J1wiXG4gIH0sXG4gIFwibS1pY29uLXN0YXItZmlsbGVkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDM4J1wiXG4gIH0sXG4gIFwibS1pY29uLXBsdXMtZmlsbGVkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDM5J1wiXG4gIH0sXG4gIFwibS1pY29uLW1pbnVzLWZpbGxlZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTQ0MCdcIlxuICB9LFxuICBcIm0taWNvbi1jaXJjbGUtZmlsbGVkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDQxJ1wiXG4gIH0sXG4gIFwibS1pY29uLWNoZWNrYm94LWZpbGxlZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTQ0MidcIlxuICB9LFxuICBcIm0taWNvbi1jbG9zZWVtcHR5XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDYwJ1wiXG4gIH0sXG4gIFwibS1pY29uLXJlZnJlc2hlbXB0eVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTQ2MSdcIlxuICB9LFxuICBcIm0taWNvbi1yZWxvYWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU0NjInXCJcbiAgfSxcbiAgXCJtLWljb24tc3RhcmhhbGZcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU0NjMnXCJcbiAgfSxcbiAgXCJtLWljb24tc3Bpbm5lclwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTQ2NCdcIlxuICB9LFxuICBcIm0taWNvbi1zcGlubmVyLWN5Y2xlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDY1J1wiXG4gIH0sXG4gIFwibS1pY29uLXNlYXJjaFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTQ2NidcIlxuICB9LFxuICBcIm0taWNvbi1wbHVzZW1wdHlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU0NjgnXCJcbiAgfSxcbiAgXCJtLWljb24tZm9yd2FyZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTQ3MCdcIlxuICB9LFxuICBcIm0taWNvbi1iYWNrXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDcxJ1wiXG4gIH0sXG4gIFwibS1pY29uLWxlZnQtbmF2XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlOmJlZm9yZVwiOiBcIidcXFxcZTQ3MSdcIlxuICB9LFxuICBcIm0taWNvbi1jaGVja21hcmtlbXB0eVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTQ3MidcIlxuICB9LFxuICBcIm0taWNvbi1ob21lXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNTAwJ1wiXG4gIH0sXG4gIFwibS1pY29uLW5hdmlnYXRlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNTAxJ1wiXG4gIH0sXG4gIFwibS1pY29uLWdlYXJcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU1MDInXCJcbiAgfSxcbiAgXCJtLWljb24tcGFwZXJwbGFuZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTUwMydcIlxuICB9LFxuICBcIm0taWNvbi1pbmZvXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNTA0J1wiXG4gIH0sXG4gIFwibS1pY29uLWhlbHBcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU1MDUnXCJcbiAgfSxcbiAgXCJtLWljb24tbG9ja2VkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNTA2J1wiXG4gIH0sXG4gIFwibS1pY29uLW1vcmVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU1MDcnXCJcbiAgfSxcbiAgXCJtLWljb24tZmxhZ1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTUwOCdcIlxuICB9LFxuICBcIm0taWNvbi1ob21lLWZpbGxlZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTUzMCdcIlxuICB9LFxuICBcIm0taWNvbi1nZWFyLWZpbGxlZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTUzMidcIlxuICB9LFxuICBcIm0taWNvbi1pbmZvLWZpbGxlZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTUzNCdcIlxuICB9LFxuICBcIm0taWNvbi1oZWxwLWZpbGxlZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTUzNSdcIlxuICB9LFxuICBcIm0taWNvbi1tb3JlLWZpbGxlZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTUzNydcIlxuICB9LFxuICBcIm0taWNvbi1zZXR0aW5nc1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTU2MCdcIlxuICB9LFxuICBcIm0taWNvbi1saXN0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNTYyJ1wiXG4gIH0sXG4gIFwibS1pY29uLWJhcnNcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU1NjMnXCJcbiAgfSxcbiAgXCJtLWljb24tbG9vcFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTU2NSdcIlxuICB9LFxuICBcIm0taWNvbi1wYXBlcmNsaXBcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU1NjcnXCJcbiAgfSxcbiAgXCJtLWljb24tZXllXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNTY4J1wiXG4gIH0sXG4gIFwibS1pY29uLWFycm93dXBcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU1ODAnXCJcbiAgfSxcbiAgXCJtLWljb24tYXJyb3dkb3duXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNTgxJ1wiXG4gIH0sXG4gIFwibS1pY29uLWFycm93bGVmdFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTU4MidcIlxuICB9LFxuICBcIm0taWNvbi1hcnJvd3JpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNTgzJ1wiXG4gIH0sXG4gIFwibS1pY29uLWFycm93dGhpbnVwXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNTg0J1wiXG4gIH0sXG4gIFwibS1pY29uLWFycm93dGhpbmRvd25cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU1ODUnXCJcbiAgfSxcbiAgXCJtLWljb24tYXJyb3d0aGlubGVmdFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTU4NidcIlxuICB9LFxuICBcIm0taWNvbi1hcnJvd3RoaW5yaWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTU4NydcIlxuICB9LFxuICBcIm0taWNvbi1wdWxsZG93blwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTU4OCdcIlxuICB9LFxuICBcIm0taWNvbi1zY2FuXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjEyXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb25cIjoge1xuICAgIFwiZm9udEZhbWlseVwiOiBcIlxcXCJ0aG9ydWlGb250XFxcIlwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMFwiLFxuICAgIFwiZm9udFN0eWxlXCI6IFwibm9ybWFsXCIsXG4gICAgXCJXZWJraXRGb250U21vb3RoaW5nXCI6IFwiYW50aWFsaWFzZWRcIixcbiAgICBcIk1vek9zeEZvbnRTbW9vdGhpbmdcIjogXCJncmF5c2NhbGVcIixcbiAgICBcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIixcbiAgICBcImNvbG9yXCI6IFwiIzk5OTk5OVwiLFxuICAgIFwidmVydGljYWxBbGlnblwiOiBcIm1pZGRsZVwiLFxuICAgIFwibGluZUhlaWdodFwiOiAxLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIi0xXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1mcmllbmRhZGRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2Y2FcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1mcmllbmRhZGQtZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZjOVxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLXNlcnZpY2VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NjRcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1zZXJ2aWNlLWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NjVcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1leHBsb3JlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjY2XFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tZXhwbG9yZS1maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjY3XFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24td2VhbHRoXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjY4XFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24td2VhbHRoLWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NjlcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1leGNoYW5nZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYzOFxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLXJlZnJlc2hcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NDBcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1zZWFyY2hcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MjJcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1zZWFyY2gtMlwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYzNFxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLXRvZG93blwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY0ZlxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLXRvbGVmdFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1MFxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLXRvcmlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NTFcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi12aWRlb1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1N1xcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLXBlb3BsZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTczNlxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLXBlb3BsZS1maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzM1XFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tY29tbXVuaXR5XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzQxXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tY29tbXVuaXR5LWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NDBcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1pb3NcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NmFcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1hbmRyb2lkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjZjXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tc3F1YXJlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzIwXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tc3F1YXJlLWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MjFcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1zcXVhcmUtc2VsZWN0ZWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MjJcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1jbG9zZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcyNVxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLWNsb3NlLWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MjRcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1zaHV0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzIzXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tcGx1c1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcyN1xcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLWFkZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcyNlxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLWFkZC1maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzI4XFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tcmVkdWNlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzI5XFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tYWJvdXRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MmJcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1hYm91dC1maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzJhXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tZXhwbGFpblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcyZFxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLWV4cGxhaW4tZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcyY1xcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLWNoZWNrXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzJlXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tY2lyY2xlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzJmXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tY2lyY2xlLWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MzJcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1jaXJjbGUtc2VsZWN0ZWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MzNcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1zdGFyXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzM3XFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tc3Rhci1maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzM0XFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tcmV2b2tlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzM4XFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tc2hvcFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTczYVxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLXNob3AtZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTczOVxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLW9yZGVyXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzNiXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tZmVlZGJhY2tcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3M2NcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1zaGFyZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc1Y1xcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLXNoYXJlLWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NWJcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1tb3JlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjMzXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tbW9yZS1maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlYjk4XFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tc3RyYXRlZ3lcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3M2ZcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1jYXJ0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzQzXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tY2FydC1maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzQyXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tc3dlZXBcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NGJcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1zY3JlZW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NGNcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1jbG9ja1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc1MFxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLWNsb2NrLWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NGZcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1ob21lXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzUyXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24taG9tZS1maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzUxXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tY2F0ZWdvcnlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NTRcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1jYXRlZ29yeS1maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzUzXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tbm90aWNlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzU5XFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tbm90aWNlLWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NThcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1saWtlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzYxXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tbGlrZS1maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzYwXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tYm90dG9tXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzZhXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tdG9wXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzZjXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tdG93YXJkc3JpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzc4XFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tdG93YXJkc3JpZ2h0LWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NzdcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi10b3dhcmRzbGVmdFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc3YVxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLWNhbWVyYVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc3ZlxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLWNhbWVyYS1maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzdlXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tY2FtZXJhLWFkZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc4MFxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLWxvYWRpbmdcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ODFcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi13aWZpXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzgzXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tYWdyZWVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3OTRcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1hZ3JlZS1maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzkzXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tbW9iaWxlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjU1XFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tcXJjb2RlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjA1XFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tY291cG9uXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjAwXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tYmFja1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdlZFxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLXRyYW5zcG9ydFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTg4MlxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLXRyYW5zcG9ydC1maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODgzXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tc2VuZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTg5M1xcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLWJhbmtjYXJkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlOTM3XFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tYmFua2NhcmQtZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTkzNlxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLWV5ZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZjZlxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLWNhbGVuZGFyXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlYjkzXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tcGljdHVyZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZjN1xcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLW9wcG9zZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgxNVxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLW9wcG9zZS1maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODE0XFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tcGllXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlYjk1XFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tcG9seWdvbmFsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlYjk2XFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24taGlzdG9ncmFtXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlYjk5XFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tZG93blwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZWMwYlxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLXVwXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlYzBjXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tbmFycm93XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlYzEzXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tZW5sYXJnZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZWMxNFxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLXB3ZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYyNlxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLWVsbGlwc2lzXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzZiXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tbG9jYXRpb25cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZjJcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1kZWxldGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MDhcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1jYXJkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlOTFjXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tY2FyZC1maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlOTFiXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tYWxhcm1cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZTlcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1hbGFybS1maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmU4XFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tY29tcHV0ZXJcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZWNcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1jb21wdXRlci1maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmViXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tcG9zaXRpb25cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4ZmVcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1wb3NpdGlvbi1maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlOGZmXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tbWVtYmVyXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzA0XFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tbWVtYmVyLWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MDNcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1sYWJlbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcwN1xcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLWxhYmVsLWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MDhcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1tYWlsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzBiXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tbWFpbC1maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzBjXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tbWFuYWdlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzBlXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tbWFuYWdlLWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MGRcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1tZXNzYWdlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzBmXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tbWVzc2FnZS1maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzEwXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tb2ZmbGluZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcxNlxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLW9mZmxpbmUtZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcxNVxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLXJlZHBhY2tldFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcxZVxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLXJlZHBhY2tldC1maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzFkXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tYmFnXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzU2XFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tYmFnLWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NTVcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1zZXR1cFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc1YVxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLXNldHVwLWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NTdcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1uZXdzXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzVlXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tbmV3cy1maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzVkXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tdGltZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc2NFxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLXRpbWUtZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc1ZlxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLXZvaWNlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzY2XFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tdm9pY2UtZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc2NVxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLW5vZGF0YVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYxMVxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLWxpbmtcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGViOTdcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1lZGl0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjlhXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tdW5zZWVuXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmEyXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tYXJyb3d1cFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1OFxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLWFycm93bGVmdFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1OVxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLWFycm93ZG93blwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1YVxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLWFycm93cmlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NWJcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi10dXJuaW5nbGVmdFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1Y1xcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLXR1cm5pbmdyaWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1ZFxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLXR1cm5pbmd1cFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1ZVxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLXR1cm5pbmdkb3duXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjVmXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tc2luYVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY2MlxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLWFwcGxldHNcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NzNcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1xcVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYwNFxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLXdlY2hhdFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY3NFxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLW1vbWVudHNcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MWVcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1kaW5ndGFsa1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY3NVxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLWFsaXBheVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY3N1xcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLXNraW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGViOWVcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1ob3VzZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZWI5ZlxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLWRvd25sb2FkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjAyXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tdXBsb2FkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjNiXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24ta2VmdVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYwMVxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLXNwb3J0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlYmEwXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tZ3BzXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlYjlhXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tc2hpZWxkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlYmEzXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tdm9pcHBob25lXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlYmEyXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24td2FsbGV0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlYjkyXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tYXR0ZXN0YXRpb25cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGViOTFcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1hZGRyZXNzYm9va1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZWI5MFxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLWFkZG1lc3NhZ2VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGViOGZcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1zaWduaW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NDNcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1ldmFsdWF0ZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY0MlxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLXVucmVjZWl2ZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY0MVxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLWJhbGxvb25cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MjdcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1wYXJ0YWtlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjAzXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tbGlzdHZpZXdcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2N2JcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi13ZWF0aGVyXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjk0XFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24tdG9vbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYxYlxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLWltZmFjZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZWI5YlxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLWRlbGV0ZWtleVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdiOFxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLWZpbmdlcnByaW50XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjZlXFxcIlwiXG4gIH0sXG4gIFwidHVpLWljb24td2FybmluZ1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZThlYlxcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLXNvc29cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4ZGFcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1zYXRpc2ZpZWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4ZGJcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1kaXNzYXRpc2ZpZWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4ZGNcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1waWNcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4ZDJcXFwiXCJcbiAgfSxcbiAgXCJ0dWktaWNvbi1waWMtZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZThkM1xcXCJcIlxuICB9LFxuICBcInR1aS1pY29uLXBsYXlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MDZcXFwiXCJcbiAgfVxufSIsIi8qXG4gKiBIVE1MNSBQYXJzZXIgQnkgU2FtIEJsb3dlc1xuICpcbiAqIERlc2lnbmVkIGZvciBIVE1MNSBkb2N1bWVudHNcbiAqXG4gKiBPcmlnaW5hbCBjb2RlIGJ5IEpvaG4gUmVzaWcgKGVqb2huLm9yZylcbiAqIGh0dHA6Ly9lam9obi5vcmcvYmxvZy9wdXJlLWphdmFzY3JpcHQtaHRtbC1wYXJzZXIvXG4gKiBPcmlnaW5hbCBjb2RlIGJ5IEVyaWsgQXJ2aWRzc29uLCBNb3ppbGxhIFB1YmxpYyBMaWNlbnNlXG4gKiBodHRwOi8vZXJpay5lYWUubmV0L3NpbXBsZWh0bWxwYXJzZXIvc2ltcGxlaHRtbHBhcnNlci5qc1xuICpcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIExpY2Vuc2VcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqXG4gKiBUaGlzIGNvZGUgaXMgdHJpcGxlIGxpY2Vuc2VkIHVzaW5nIEFwYWNoZSBTb2Z0d2FyZSBMaWNlbnNlIDIuMCxcbiAqIE1vemlsbGEgUHVibGljIExpY2Vuc2Ugb3IgR05VIFB1YmxpYyBMaWNlbnNlXG4gKlxuICogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90XG4gKiB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAqXG4gKiBUaGUgY29udGVudHMgb2YgdGhpcyBmaWxlIGFyZSBzdWJqZWN0IHRvIHRoZSBNb3ppbGxhIFB1YmxpYyBMaWNlbnNlXG4gKiBWZXJzaW9uIDEuMSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW5cbiAqIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKiBodHRwOi8vd3d3Lm1vemlsbGEub3JnL01QTC9cbiAqXG4gKiBTb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCJcbiAqIGJhc2lzLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlXG4gKiBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHJpZ2h0cyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqIFRoZSBPcmlnaW5hbCBDb2RlIGlzIFNpbXBsZSBIVE1MIFBhcnNlci5cbiAqXG4gKiBUaGUgSW5pdGlhbCBEZXZlbG9wZXIgb2YgdGhlIE9yaWdpbmFsIENvZGUgaXMgRXJpayBBcnZpZHNzb24uXG4gKiBQb3J0aW9ucyBjcmVhdGVkIGJ5IEVyaWsgQXJ2aWRzc3NvbiBhcmUgQ29weXJpZ2h0IChDKSAyMDA0LiBBbGwgUmlnaHRzXG4gKiBSZXNlcnZlZC5cbiAqXG4gKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAyXG4gKiBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbTsgaWYgbm90LCB3cml0ZSB0byB0aGUgRnJlZSBTb2Z0d2FyZVxuICogRm91bmRhdGlvbiwgSW5jLiwgNTEgRnJhbmtsaW4gU3RyZWV0LCBGaWZ0aCBGbG9vciwgQm9zdG9uLCBNQSAgMDIxMTAtMTMwMSwgVVNBLlxuICpcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFVzYWdlXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKlxuICogLy8gVXNlIGxpa2Ugc286XG4gKiBIVE1MUGFyc2VyKGh0bWxTdHJpbmcsIHtcbiAqICAgICBzdGFydDogZnVuY3Rpb24odGFnLCBhdHRycywgdW5hcnkpIHt9LFxuICogICAgIGVuZDogZnVuY3Rpb24odGFnKSB7fSxcbiAqICAgICBjaGFyczogZnVuY3Rpb24odGV4dCkge30sXG4gKiAgICAgY29tbWVudDogZnVuY3Rpb24odGV4dCkge31cbiAqIH0pO1xuICpcbiAqIC8vIG9yIHRvIGdldCBhbiBYTUwgc3RyaW5nOlxuICogSFRNTHRvWE1MKGh0bWxTdHJpbmcpO1xuICpcbiAqIC8vIG9yIHRvIGdldCBhbiBYTUwgRE9NIERvY3VtZW50XG4gKiBIVE1MdG9ET00oaHRtbFN0cmluZyk7XG4gKlxuICogLy8gb3IgdG8gaW5qZWN0IGludG8gYW4gZXhpc3RpbmcgZG9jdW1lbnQvRE9NIG5vZGVcbiAqIEhUTUx0b0RPTShodG1sU3RyaW5nLCBkb2N1bWVudCk7XG4gKiBIVE1MdG9ET00oaHRtbFN0cmluZywgZG9jdW1lbnQuYm9keSk7XG4gKlxuICovXG4vLyBSZWd1bGFyIEV4cHJlc3Npb25zIGZvciBwYXJzaW5nIHRhZ3MgYW5kIGF0dHJpYnV0ZXNcbnZhciBzdGFydFRhZyA9IC9ePChbLUEtWmEtejAtOV9dKykoKD86XFxzK1thLXpBLVpfOl1bLWEtekEtWjAtOV86Ll0qKD86XFxzKj1cXHMqKD86KD86XCJbXlwiXSpcIil8KD86J1teJ10qJyl8W14+XFxzXSspKT8pKilcXHMqKFxcLz8pPi87XG52YXIgZW5kVGFnID0gL148XFwvKFstQS1aYS16MC05X10rKVtePl0qPi87XG52YXIgYXR0ciA9IC8oW2EtekEtWl86XVstYS16QS1aMC05XzouXSopKD86XFxzKj1cXHMqKD86KD86XCIoKD86XFxcXC58W15cIl0pKilcIil8KD86JygoPzpcXFxcLnxbXiddKSopJyl8KFtePlxcc10rKSkpPy9nOyAvLyBFbXB0eSBFbGVtZW50cyAtIEhUTUwgNVxuXG52YXIgZW1wdHkgPSBtYWtlTWFwKCdhcmVhLGJhc2UsYmFzZWZvbnQsYnIsY29sLGZyYW1lLGhyLGltZyxpbnB1dCxsaW5rLG1ldGEscGFyYW0sZW1iZWQsY29tbWFuZCxrZXlnZW4sc291cmNlLHRyYWNrLHdicicpOyAvLyBCbG9jayBFbGVtZW50cyAtIEhUTUwgNVxuLy8gZml4ZWQgYnkgeHh4IOWwhiBpbnMg5qCH562+5LuO5Z2X57qn5ZCN5Y2V5Lit56e76ZmkXG5cbnZhciBibG9jayA9IG1ha2VNYXAoJ2EsYWRkcmVzcyxhcnRpY2xlLGFwcGxldCxhc2lkZSxhdWRpbyxibG9ja3F1b3RlLGJ1dHRvbixjYW52YXMsY2VudGVyLGRkLGRlbCxkaXIsZGl2LGRsLGR0LGZpZWxkc2V0LGZpZ2NhcHRpb24sZmlndXJlLGZvb3Rlcixmb3JtLGZyYW1lc2V0LGgxLGgyLGgzLGg0LGg1LGg2LGhlYWRlcixoZ3JvdXAsaHIsaWZyYW1lLGlzaW5kZXgsbGksbWFwLG1lbnUsbm9mcmFtZXMsbm9zY3JpcHQsb2JqZWN0LG9sLG91dHB1dCxwLHByZSxzZWN0aW9uLHNjcmlwdCx0YWJsZSx0Ym9keSx0ZCx0Zm9vdCx0aCx0aGVhZCx0cix1bCx2aWRlbycpOyAvLyBJbmxpbmUgRWxlbWVudHMgLSBIVE1MIDVcblxudmFyIGlubGluZSA9IG1ha2VNYXAoJ2FiYnIsYWNyb255bSxhcHBsZXQsYixiYXNlZm9udCxiZG8sYmlnLGJyLGJ1dHRvbixjaXRlLGNvZGUsZGVsLGRmbixlbSxmb250LGksaWZyYW1lLGltZyxpbnB1dCxpbnMsa2JkLGxhYmVsLG1hcCxvYmplY3QscSxzLHNhbXAsc2NyaXB0LHNlbGVjdCxzbWFsbCxzcGFuLHN0cmlrZSxzdHJvbmcsc3ViLHN1cCx0ZXh0YXJlYSx0dCx1LHZhcicpOyAvLyBFbGVtZW50cyB0aGF0IHlvdSBjYW4sIGludGVudGlvbmFsbHksIGxlYXZlIG9wZW5cbi8vIChhbmQgd2hpY2ggY2xvc2UgdGhlbXNlbHZlcylcblxudmFyIGNsb3NlU2VsZiA9IG1ha2VNYXAoJ2NvbGdyb3VwLGRkLGR0LGxpLG9wdGlvbnMscCx0ZCx0Zm9vdCx0aCx0aGVhZCx0cicpOyAvLyBBdHRyaWJ1dGVzIHRoYXQgaGF2ZSB0aGVpciB2YWx1ZXMgZmlsbGVkIGluIGRpc2FibGVkPVwiZGlzYWJsZWRcIlxuXG52YXIgZmlsbEF0dHJzID0gbWFrZU1hcCgnY2hlY2tlZCxjb21wYWN0LGRlY2xhcmUsZGVmZXIsZGlzYWJsZWQsaXNtYXAsbXVsdGlwbGUsbm9ocmVmLG5vcmVzaXplLG5vc2hhZGUsbm93cmFwLHJlYWRvbmx5LHNlbGVjdGVkJyk7IC8vIFNwZWNpYWwgRWxlbWVudHMgKGNhbiBjb250YWluIGFueXRoaW5nKVxuXG52YXIgc3BlY2lhbCA9IG1ha2VNYXAoJ3NjcmlwdCxzdHlsZScpO1xuZnVuY3Rpb24gSFRNTFBhcnNlcihodG1sLCBoYW5kbGVyKSB7XG4gIHZhciBpbmRleDtcbiAgdmFyIGNoYXJzO1xuICB2YXIgbWF0Y2g7XG4gIHZhciBzdGFjayA9IFtdO1xuICB2YXIgbGFzdCA9IGh0bWw7XG5cbiAgc3RhY2subGFzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpc1t0aGlzLmxlbmd0aCAtIDFdO1xuICB9O1xuXG4gIHdoaWxlIChodG1sKSB7XG4gICAgY2hhcnMgPSB0cnVlOyAvLyBNYWtlIHN1cmUgd2UncmUgbm90IGluIGEgc2NyaXB0IG9yIHN0eWxlIGVsZW1lbnRcblxuICAgIGlmICghc3RhY2subGFzdCgpIHx8ICFzcGVjaWFsW3N0YWNrLmxhc3QoKV0pIHtcbiAgICAgIC8vIENvbW1lbnRcbiAgICAgIGlmIChodG1sLmluZGV4T2YoJzwhLS0nKSA9PSAwKSB7XG4gICAgICAgIGluZGV4ID0gaHRtbC5pbmRleE9mKCctLT4nKTtcblxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgIGlmIChoYW5kbGVyLmNvbW1lbnQpIHtcbiAgICAgICAgICAgIGhhbmRsZXIuY29tbWVudChodG1sLnN1YnN0cmluZyg0LCBpbmRleCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGh0bWwgPSBodG1sLnN1YnN0cmluZyhpbmRleCArIDMpO1xuICAgICAgICAgIGNoYXJzID0gZmFsc2U7XG4gICAgICAgIH0gLy8gZW5kIHRhZ1xuXG4gICAgICB9IGVsc2UgaWYgKGh0bWwuaW5kZXhPZignPC8nKSA9PSAwKSB7XG4gICAgICAgIG1hdGNoID0gaHRtbC5tYXRjaChlbmRUYWcpO1xuXG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgIGh0bWwgPSBodG1sLnN1YnN0cmluZyhtYXRjaFswXS5sZW5ndGgpO1xuICAgICAgICAgIG1hdGNoWzBdLnJlcGxhY2UoZW5kVGFnLCBwYXJzZUVuZFRhZyk7XG4gICAgICAgICAgY2hhcnMgPSBmYWxzZTtcbiAgICAgICAgfSAvLyBzdGFydCB0YWdcblxuICAgICAgfSBlbHNlIGlmIChodG1sLmluZGV4T2YoJzwnKSA9PSAwKSB7XG4gICAgICAgIG1hdGNoID0gaHRtbC5tYXRjaChzdGFydFRhZyk7XG5cbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgaHRtbCA9IGh0bWwuc3Vic3RyaW5nKG1hdGNoWzBdLmxlbmd0aCk7XG4gICAgICAgICAgbWF0Y2hbMF0ucmVwbGFjZShzdGFydFRhZywgcGFyc2VTdGFydFRhZyk7XG4gICAgICAgICAgY2hhcnMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY2hhcnMpIHtcbiAgICAgICAgaW5kZXggPSBodG1sLmluZGV4T2YoJzwnKTtcbiAgICAgICAgdmFyIHRleHQgPSBpbmRleCA8IDAgPyBodG1sIDogaHRtbC5zdWJzdHJpbmcoMCwgaW5kZXgpO1xuICAgICAgICBodG1sID0gaW5kZXggPCAwID8gJycgOiBodG1sLnN1YnN0cmluZyhpbmRleCk7XG5cbiAgICAgICAgaWYgKGhhbmRsZXIuY2hhcnMpIHtcbiAgICAgICAgICBoYW5kbGVyLmNoYXJzKHRleHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGh0bWwgPSBodG1sLnJlcGxhY2UobmV3IFJlZ0V4cCgnKFtcXFxcc1xcXFxTXSo/KTxcXC8nICsgc3RhY2subGFzdCgpICsgJ1tePl0qPicpLCBmdW5jdGlvbiAoYWxsLCB0ZXh0KSB7XG4gICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoLzwhLS0oW1xcc1xcU10qPyktLT58PCFcXFtDREFUQVxcWyhbXFxzXFxTXSo/KV1dPi9nLCAnJDEkMicpO1xuXG4gICAgICAgIGlmIChoYW5kbGVyLmNoYXJzKSB7XG4gICAgICAgICAgaGFuZGxlci5jaGFycyh0ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH0pO1xuICAgICAgcGFyc2VFbmRUYWcoJycsIHN0YWNrLmxhc3QoKSk7XG4gICAgfVxuXG4gICAgaWYgKGh0bWwgPT0gbGFzdCkge1xuICAgICAgdGhyb3cgJ1BhcnNlIEVycm9yOiAnICsgaHRtbDtcbiAgICB9XG5cbiAgICBsYXN0ID0gaHRtbDtcbiAgfSAvLyBDbGVhbiB1cCBhbnkgcmVtYWluaW5nIHRhZ3NcblxuXG4gIHBhcnNlRW5kVGFnKCk7XG5cbiAgZnVuY3Rpb24gcGFyc2VTdGFydFRhZyh0YWcsIHRhZ05hbWUsIHJlc3QsIHVuYXJ5KSB7XG4gICAgdGFnTmFtZSA9IHRhZ05hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgIGlmIChibG9ja1t0YWdOYW1lXSkge1xuICAgICAgd2hpbGUgKHN0YWNrLmxhc3QoKSAmJiBpbmxpbmVbc3RhY2subGFzdCgpXSkge1xuICAgICAgICBwYXJzZUVuZFRhZygnJywgc3RhY2subGFzdCgpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2xvc2VTZWxmW3RhZ05hbWVdICYmIHN0YWNrLmxhc3QoKSA9PSB0YWdOYW1lKSB7XG4gICAgICBwYXJzZUVuZFRhZygnJywgdGFnTmFtZSk7XG4gICAgfVxuXG4gICAgdW5hcnkgPSBlbXB0eVt0YWdOYW1lXSB8fCAhIXVuYXJ5O1xuXG4gICAgaWYgKCF1bmFyeSkge1xuICAgICAgc3RhY2sucHVzaCh0YWdOYW1lKTtcbiAgICB9XG5cbiAgICBpZiAoaGFuZGxlci5zdGFydCkge1xuICAgICAgdmFyIGF0dHJzID0gW107XG4gICAgICByZXN0LnJlcGxhY2UoYXR0ciwgZnVuY3Rpb24gKG1hdGNoLCBuYW1lKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGFyZ3VtZW50c1syXSA/IGFyZ3VtZW50c1syXSA6IGFyZ3VtZW50c1szXSA/IGFyZ3VtZW50c1szXSA6IGFyZ3VtZW50c1s0XSA/IGFyZ3VtZW50c1s0XSA6IGZpbGxBdHRyc1tuYW1lXSA/IG5hbWUgOiAnJztcbiAgICAgICAgYXR0cnMucHVzaCh7XG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgZXNjYXBlZDogdmFsdWUucmVwbGFjZSgvKF58W15cXFxcXSlcIi9nLCAnJDFcXFxcXFxcIicpIC8vIFwiXG5cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGhhbmRsZXIuc3RhcnQpIHtcbiAgICAgICAgaGFuZGxlci5zdGFydCh0YWdOYW1lLCBhdHRycywgdW5hcnkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlRW5kVGFnKHRhZywgdGFnTmFtZSkge1xuICAgIC8vIElmIG5vIHRhZyBuYW1lIGlzIHByb3ZpZGVkLCBjbGVhbiBzaG9wXG4gICAgaWYgKCF0YWdOYW1lKSB7XG4gICAgICB2YXIgcG9zID0gMDtcbiAgICB9IC8vIEZpbmQgdGhlIGNsb3Nlc3Qgb3BlbmVkIHRhZyBvZiB0aGUgc2FtZSB0eXBlXG4gICAgZWxzZSB7XG4gICAgICAgIGZvciAodmFyIHBvcyA9IHN0YWNrLmxlbmd0aCAtIDE7IHBvcyA+PSAwOyBwb3MtLSkge1xuICAgICAgICAgIGlmIChzdGFja1twb3NdID09IHRhZ05hbWUpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgaWYgKHBvcyA+PSAwKSB7XG4gICAgICAvLyBDbG9zZSBhbGwgdGhlIG9wZW4gZWxlbWVudHMsIHVwIHRoZSBzdGFja1xuICAgICAgZm9yICh2YXIgaSA9IHN0YWNrLmxlbmd0aCAtIDE7IGkgPj0gcG9zOyBpLS0pIHtcbiAgICAgICAgaWYgKGhhbmRsZXIuZW5kKSB7XG4gICAgICAgICAgaGFuZGxlci5lbmQoc3RhY2tbaV0pO1xuICAgICAgICB9XG4gICAgICB9IC8vIFJlbW92ZSB0aGUgb3BlbiBlbGVtZW50cyBmcm9tIHRoZSBzdGFja1xuXG5cbiAgICAgIHN0YWNrLmxlbmd0aCA9IHBvcztcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFrZU1hcChzdHIpIHtcbiAgdmFyIG9iaiA9IHt9O1xuICB2YXIgaXRlbXMgPSBzdHIuc3BsaXQoJywnKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgb2JqW2l0ZW1zW2ldXSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiByZW1vdmVET0NUWVBFKGh0bWwpIHtcbiAgcmV0dXJuIGh0bWwucmVwbGFjZSgvPFxcP3htbC4qXFw/Plxcbi8sICcnKS5yZXBsYWNlKC88IWRvY3R5cGUuKj5cXG4vLCAnJykucmVwbGFjZSgvPCFET0NUWVBFLio+XFxuLywgJycpO1xufVxuXG5mdW5jdGlvbiBwYXJzZUF0dHJzKGF0dHJzKSB7XG4gIHJldHVybiBhdHRycy5yZWR1Y2UoZnVuY3Rpb24gKHByZSwgYXR0cikge1xuICAgIHZhciB2YWx1ZSA9IGF0dHIudmFsdWU7XG4gICAgdmFyIG5hbWUgPSBhdHRyLm5hbWU7XG5cbiAgICBpZiAocHJlW25hbWVdKSB7XG5cdFx0XHRwcmVbbmFtZV0gPSBwcmVbbmFtZV0gKyBcIiBcIiArIHZhbHVlO1xuICAgIH0gZWxzZSB7XG5cdFx0XHRwcmVbbmFtZV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJlO1xuICB9LCB7fSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlSHRtbChodG1sKSB7XG4gIGh0bWwgPSByZW1vdmVET0NUWVBFKGh0bWwpO1xuICB2YXIgc3RhY2tzID0gW107XG4gIHZhciByZXN1bHRzID0ge1xuICAgIG5vZGU6ICdyb290JyxcbiAgICBjaGlsZHJlbjogW11cbiAgfTtcbiAgSFRNTFBhcnNlcihodG1sLCB7XG4gICAgc3RhcnQ6IGZ1bmN0aW9uIHN0YXJ0KHRhZywgYXR0cnMsIHVuYXJ5KSB7XG4gICAgICB2YXIgbm9kZSA9IHtcbiAgICAgICAgbmFtZTogdGFnXG4gICAgICB9O1xuXG4gICAgICBpZiAoYXR0cnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIG5vZGUuYXR0cnMgPSBwYXJzZUF0dHJzKGF0dHJzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHVuYXJ5KSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSBzdGFja3NbMF0gfHwgcmVzdWx0cztcblxuICAgICAgICBpZiAoIXBhcmVudC5jaGlsZHJlbikge1xuICAgICAgICAgIHBhcmVudC5jaGlsZHJlbiA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyZW50LmNoaWxkcmVuLnB1c2gobm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGFja3MudW5zaGlmdChub2RlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVuZDogZnVuY3Rpb24gZW5kKHRhZykge1xuICAgICAgdmFyIG5vZGUgPSBzdGFja3Muc2hpZnQoKTtcbiAgICAgIGlmIChub2RlLm5hbWUgIT09IHRhZykgY29uc29sZS5lcnJvcignaW52YWxpZCBzdGF0ZTogbWlzbWF0Y2ggZW5kIHRhZycpO1xuXG4gICAgICBpZiAoc3RhY2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXN1bHRzLmNoaWxkcmVuLnB1c2gobm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcGFyZW50ID0gc3RhY2tzWzBdO1xuXG4gICAgICAgIGlmICghcGFyZW50LmNoaWxkcmVuKSB7XG4gICAgICAgICAgcGFyZW50LmNoaWxkcmVuID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNoYXJzOiBmdW5jdGlvbiBjaGFycyh0ZXh0KSB7XG4gICAgICB2YXIgbm9kZSA9IHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICB0ZXh0OiB0ZXh0XG4gICAgICB9O1xuXG4gICAgICBpZiAoc3RhY2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXN1bHRzLmNoaWxkcmVuLnB1c2gobm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcGFyZW50ID0gc3RhY2tzWzBdO1xuXG4gICAgICAgIGlmICghcGFyZW50LmNoaWxkcmVuKSB7XG4gICAgICAgICAgcGFyZW50LmNoaWxkcmVuID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbW1lbnQ6IGZ1bmN0aW9uIGNvbW1lbnQodGV4dCkge1xuICAgICAgdmFyIG5vZGUgPSB7XG4gICAgICAgIG5vZGU6ICdjb21tZW50JyxcbiAgICAgICAgdGV4dDogdGV4dFxuICAgICAgfTtcbiAgICAgIHZhciBwYXJlbnQgPSBzdGFja3NbMF07XG5cbiAgICAgIGlmICghcGFyZW50LmNoaWxkcmVuKSB7XG4gICAgICAgIHBhcmVudC5jaGlsZHJlbiA9IFtdO1xuICAgICAgfVxuXG4gICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaChub2RlKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0cy5jaGlsZHJlbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFyc2VIdG1sO1xuIiwiZnVuY3Rpb24gdHlwb2YgKHYpIHtcclxuICBjb25zdCBzID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHYpXHJcbiAgcmV0dXJuIHMuc3Vic3RyaW5nKDgsIHMubGVuZ3RoIC0gMSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0TG9nICguLi5hcmdzKSB7XHJcbiAgY29uc3QgbXNncyA9IGFyZ3MubWFwKCh2KSA9PiB7XHJcbiAgICBjb25zdCB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHYpXHJcbiAgICBpZiAodHlwZS50b0xvd2VyQ2FzZSgpID09PSAnW29iamVjdCBvYmplY3RdJykge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHYgPSAnLS0tQkVHSU46SlNPTi0tLScgKyBKU09OLnN0cmluZ2lmeSh2KSArICctLS1FTkQ6SlNPTi0tLSdcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHYgPSAnW29iamVjdCBvYmplY3RdJ1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodiA9PT0gbnVsbCkge1xyXG4gICAgICAgIHYgPSAnLS0tTlVMTC0tLSdcclxuICAgICAgfSBlbHNlIGlmICh2ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2ID0gJy0tLVVOREVGSU5FRC0tLSdcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCB2VHlwZSA9IHR5cG9mKHYpLnRvVXBwZXJDYXNlKClcclxuICAgICAgICBpZiAodlR5cGUgPT09ICdOVU1CRVInIHx8IHZUeXBlID09PSAnQk9PTEVBTicpIHtcclxuICAgICAgICAgIHYgPSAnLS0tQkVHSU46JyArIHZUeXBlICsgJy0tLScgKyB2ICsgJy0tLUVORDonICsgdlR5cGUgKyAnLS0tJ1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB2ID0gU3RyaW5nKHYpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdlxyXG4gIH0pXHJcbiAgbGV0IG1zZyA9ICcnXHJcbiAgaWYgKG1zZ3MubGVuZ3RoID4gMSkge1xyXG4gICAgY29uc3QgbGFzdE1zZyA9IG1zZ3MucG9wKClcclxuICAgIG1zZyA9IG1zZ3Muam9pbignLS0tQ09NTUEtLS0nKVxyXG4gICAgaWYgKGxhc3RNc2cuaW5kZXhPZignIGF0ICcpID09PSAwKSB7XHJcbiAgICAgIG1zZyArPSBsYXN0TXNnXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtc2cgKz0gJy0tLUNPTU1BLS0tJyArIGxhc3RNc2dcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgbXNnID0gbXNnc1swXVxyXG4gIH1cclxuICByZXR1cm4gbXNnXHJcbn1cclxuIiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkgeyBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCB0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsIlxuICAgICAgICBpbXBvcnQgJ0BkY2xvdWRpby91bmktc3RhdCc7XG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0IEFwcCBmcm9tICcuL3BhZ2VzL2RldGFpbC9kZXRhaWwubnZ1ZT9tcFR5cGU9cGFnZSdcbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFnZXMvZGV0YWlsL2RldGFpbCdcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9kZXRhaWwubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xZmM4N2JjOSZtcFR5cGU9cGFnZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2RldGFpbC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2RldGFpbC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoKSB7XG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG59XG5pZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxufVxuaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL2RldGFpbC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9kZXRhaWwubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCIwNTA2ZGJmZFwiXG4gIFxuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkRvY3VtZW50cy9IQnVpbGRlclByb2plY3RzL3hpbndlbi9wYWdlcy9kZXRhaWwvZGV0YWlsLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy92dWUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMCEuL2RldGFpbC5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFmYzg3YmM5Jm1wVHlwZT1wYWdlXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwic2Nyb2xsLXZpZXdcIixcbiAgICB7XG4gICAgICBzdGF0aWNTdHlsZTogeyBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH0sXG4gICAgICBhdHRyczogeyBzY3JvbGxZOiB0cnVlLCBlbmFibGVCYWNrVG9Ub3A6IHRydWUsIGJ1YmJsZTogXCJ0cnVlXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJ2aWV3XCIsIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wiYmFubmVyXCJdLCBhdHRyczogeyBhdXRvRm9jdXM6IHRydWUgfSB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwidS1pbWFnZVwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJiYW5uZXItaW1nXCJdLFxuICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IF92bS5iYW5uZXIuaW1hZ2VfdXJsIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcInRpdGxlLWFyZWFcIl0gfSwgW1xuICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJ0aXRsZS10ZXh0XCJdIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5iYW5uZXIudGl0bGUpKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgICAgX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcImFydGljbGUtbWV0YVwiXSB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wiYXJ0aWNsZS1tZXRhLXRleHRcIiwgXCJhcnRpY2xlLWF1dGhvclwiXSB9LFxuICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmJhbm5lci5zb3VyY2UpKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcImFydGljbGUtbWV0YS10ZXh0XCIsIFwiYXJ0aWNsZS10ZXh0XCJdIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIuWPkeihqOS6jlwiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcImFydGljbGUtbWV0YS10ZXh0XCIsIFwiYXJ0aWNsZS10aW1lXCJdIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmJhbm5lci5kYXRldGltZSkpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcImFydGljbGUtY29udGVudFwiXSB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwicmljaC10ZXh0XCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgZm9udFNpemU6IFwiMTRweFwiIH0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IG5vZGVzOiBfdm0uY29udGVudCB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1wiY29tbWVudC13cmFwXCJdIH0pXG4gICAgICBdKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0wIS4vZGV0YWlsLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvdnVlLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTAhLi9kZXRhaWwubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIiwiPHRlbXBsYXRlPlxuXHQ8dmlldz5cblx0XHQ8dmlldyBjbGFzcz1cImJhbm5lclwiIGF1dG8tZm9jdXM+XG5cdFx0XHQ8aW1hZ2UgY2xhc3M9XCJiYW5uZXItaW1nXCIgOnNyYz1cImJhbm5lci5pbWFnZV91cmxcIj48L2ltYWdlPlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXRsZS1hcmVhXCI+XG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGl0bGUtdGV4dFwiPnt7YmFubmVyLnRpdGxlfX08L3RleHQ+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0PC92aWV3PlxuXHRcdDx2aWV3IGNsYXNzPVwiYXJ0aWNsZS1tZXRhXCI+XG5cdFx0XHQ8dGV4dCBjbGFzcz1cImFydGljbGUtbWV0YS10ZXh0IGFydGljbGUtYXV0aG9yXCI+e3tiYW5uZXIuc291cmNlfX08L3RleHQ+XG5cdFx0XHQ8dGV4dCBjbGFzcz1cImFydGljbGUtbWV0YS10ZXh0IGFydGljbGUtdGV4dFwiPuWPkeihqOS6jjwvdGV4dD5cblx0XHRcdDx0ZXh0IGNsYXNzPVwiYXJ0aWNsZS1tZXRhLXRleHQgYXJ0aWNsZS10aW1lXCI+e3tiYW5uZXIuZGF0ZXRpbWV9fTwvdGV4dD5cblx0XHQ8L3ZpZXc+XG5cdFx0PHZpZXcgY2xhc3M9XCJhcnRpY2xlLWNvbnRlbnRcIj5cblx0XHRcdDxyaWNoLXRleHQgOm5vZGVzPVwiY29udGVudFwiIHN0eWxlPVwiZm9udC1zaXplOiAxNHB4O1wiPjwvcmljaC10ZXh0PlxuXHRcdDwvdmlldz5cblx0XHQ8dmlldyBjbGFzcz1cImNvbW1lbnQtd3JhcFwiPjwvdmlldz5cblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IGh0bWxQYXJzZXIgZnJvbSAnQC9jb21tb24vaHRtbC1wYXJzZXInXG5cblx0Y29uc3QgRkFJTF9DT05URU5UID0gJzxwPuiOt+WPluS/oeaBr+Wksei0pTE8L3A+JztcblxuXHRmdW5jdGlvbiBwYXJzZUltZ3Mobm9kZXMpIHtcblx0XHRub2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRub2RlLm5hbWUgPT09ICdpbWcnICYmXG5cdFx0XHRcdG5vZGUuYXR0cnMgJiZcblx0XHRcdFx0bm9kZS5hdHRyc1snZGF0YS1pbWctc2l6ZS12YWwnXVxuXHRcdFx0KSB7XG5cdFx0XHRcdGNvbnN0IHNpemVzID0gbm9kZS5hdHRyc1snZGF0YS1pbWctc2l6ZS12YWwnXS5zcGxpdCgnLCcpXG5cdFx0XHRcdGNvbnN0IHdpZHRoID0gdW5pLnVweDJweCg3MjAgKiAwLjkpXG5cdFx0XHRcdGNvbnN0IGhlaWdodCA9IHBhcnNlSW50KHdpZHRoICogKHNpemVzWzFdIC8gc2l6ZXNbMF0pKVxuXHRcdFx0XHRub2RlLmF0dHJzLnN0eWxlID0gYHdpZHRoOiR7d2lkdGh9O2hlaWdodDoke2hlaWdodH07YFxuXHRcdFx0fVxuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkobm9kZS5jaGlsZHJlbikpIHtcblx0XHRcdFx0cGFyc2VJbWdzKG5vZGUuY2hpbGRyZW4pXG5cdFx0XHR9XG5cdFx0fSlcblx0XHRyZXR1cm4gbm9kZXNcblx0fVxuXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0YmFubmVyOiB7fSxcblx0XHRcdFx0Y29udGVudDogW11cblx0XHRcdH1cblx0XHR9LFxuXHRcdG9uU2hhcmVBcHBNZXNzYWdlKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dGl0bGU6IHRoaXMuYmFubmVyLnRpdGxlLFxuXHRcdFx0XHRwYXRoOiAnL3BhZ2VzL2RldGFpbC9kZXRhaWw/cXVlcnk9JyArIEpTT04uc3RyaW5naWZ5KHRoaXMuYmFubmVyKVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0b25Mb2FkKGV2ZW50KSB7XG5cdFx0XHQvLyDnm67liY3lnKjmn5DkupvlubPlj7Dlj4LmlbDkvJrooqvkuLvliqggZGVjb2Rl77yM5pqC5pe26L+Z5qC35aSE55CG44CCXG5cdFx0XHR0cnkge1xuXHRcdFx0XHR0aGlzLmJhbm5lciA9IEpTT04ucGFyc2UoZGVjb2RlVVJJQ29tcG9uZW50KGV2ZW50LnF1ZXJ5KSk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHR0aGlzLmJhbm5lciA9IEpTT04ucGFyc2UoZXZlbnQucXVlcnkpO1xuXHRcdFx0fVxuXG5cdFx0XHR1bmkuc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcblx0XHRcdFx0dGl0bGU6IHRoaXMuYmFubmVyLnRpdGxlXG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5nZXREZXRhaWwoKTtcblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdGdldERldGFpbCgpIHtcblx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xuXHRcdFx0XHRcdHVybDogJ2h0dHBzOi8vdW5pZGVtby5kY2xvdWQubmV0LmNuL2FwaS9uZXdzLzM2a3IvJyArIHRoaXMuYmFubmVyLnBvc3RfaWQsXG5cdFx0XHRcdFx0c3VjY2VzczogKHJlc3VsdCkgPT4ge1xuXHRcdFx0XHRcdFx0bGV0IGNvbnRlbnQgPSBGQUlMX0NPTlRFTlRcblx0XHRcdFx0XHRcdGlmIChyZXN1bHQuc3RhdHVzQ29kZSA9PSAyMDApIHtcblx0XHRcdFx0XHRcdFx0Y29udGVudCA9IHJlc3VsdC5kYXRhLmNvbnRlbnRcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNvbnN0IG5vZGVzID0gaHRtbFBhcnNlcihjb250ZW50KTtcblx0XHRcdFx0XHRcdC8vICNpZmRlZiBBUFAtUExVUy1OVlVFXG5cdFx0XHRcdFx0XHRwYXJzZUltZ3Mobm9kZXMpXG5cdFx0XHRcdFx0XHQvLyAjZW5kaWZcblx0XHRcdFx0XHRcdHRoaXMuY29udGVudCA9IG5vZGVzXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cdC8qICNpZm5kZWYgQVBQLVBMVVMgKi9cblx0cGFnZSB7XG5cdFx0bWluLWhlaWdodDogMTAwJTtcblx0fVxuXG5cdC8qICNlbmRpZiAqL1xuXG5cdC5iYW5uZXIge1xuXHRcdGhlaWdodDogMzYwdXB4O1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0fVxuXG5cdC5iYW5uZXItaW1nIHtcblx0XHRmbGV4OiAxO1xuXHR9XG5cblx0LnRpdGxlLWFyZWEge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRsZWZ0OiAzMHVweDtcblx0XHRyaWdodDogMzB1cHg7XG5cdFx0Ym90dG9tOiAzMHVweDtcblx0XHR6LWluZGV4OiAxMTtcblx0fVxuXG5cdC50aXRsZS10ZXh0IHtcblx0XHRmb250LXNpemU6IDMydXB4O1xuXHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0bGluZS1oZWlnaHQ6IDQydXB4O1xuXHRcdGxpbmVzOiAyO1xuXHRcdGNvbG9yOiAjZmZmZmZmO1xuXHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdH1cblxuXHQuYXJ0aWNsZS1tZXRhIHtcblx0XHRwYWRkaW5nOiAyMHVweCAzMHVweDtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHR9XG5cblx0LmFydGljbGUtbWV0YS10ZXh0IHtcblx0XHRjb2xvcjogZ3JheTtcblx0fVxuXG5cdC5hcnRpY2xlLXRleHQge1xuXHRcdGZvbnQtc2l6ZTogMjZ1cHg7XG5cdFx0bGluZS1oZWlnaHQ6IDUwdXB4O1xuXHRcdG1hcmdpbjogMCAyMHVweDtcblx0fVxuXG5cdC5hcnRpY2xlLWF1dGhvciB7XG5cdFx0Zm9udC1zaXplOiAzMHVweDtcblx0fVxuXG5cdC5hcnRpY2xlLXRpbWUge1xuXHRcdGZvbnQtc2l6ZTogMzB1cHg7XG5cdH1cblxuXHQuYXJ0aWNsZS1jb250ZW50IHtcblx0XHRmb250LXNpemU6IDMwdXB4O1xuXHRcdHBhZGRpbmc6IDAgMzB1cHg7XG5cdFx0bWFyZ2luLWJvdHRvbTogMzB1cHg7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0fVxuPC9zdHlsZT5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0xIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMiEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy92dWUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMCEuL2RldGFpbC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0yIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0wIS4vZGV0YWlsLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiYmFubmVyXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjM2MHJweFwiLFxuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2NjY2NjY1wiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwib3ZlcmZsb3dcIjogXCJoaWRkZW5cIlxuICB9LFxuICBcImJhbm5lci1pbWdcIjoge1xuICAgIFwiZmxleFwiOiAxXG4gIH0sXG4gIFwidGl0bGUtYXJlYVwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJsZWZ0XCI6IFwiMzBycHhcIixcbiAgICBcInJpZ2h0XCI6IFwiMzBycHhcIixcbiAgICBcImJvdHRvbVwiOiBcIjMwcnB4XCIsXG4gICAgXCJ6SW5kZXhcIjogMTFcbiAgfSxcbiAgXCJ0aXRsZS10ZXh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzJycHhcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI0MDBcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI0MnJweFwiLFxuICAgIFwibGluZXNcIjogMixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwib3ZlcmZsb3dcIjogXCJoaWRkZW5cIlxuICB9LFxuICBcImFydGljbGUtbWV0YVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzBycHhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1zdGFydFwiXG4gIH0sXG4gIFwiYXJ0aWNsZS1tZXRhLXRleHRcIjoge1xuICAgIFwiY29sb3JcIjogXCIjODA4MDgwXCJcbiAgfSxcbiAgXCJhcnRpY2xlLXRleHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyNnJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjUwcnB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogMCxcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiAwLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJhcnRpY2xlLWF1dGhvclwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJhcnRpY2xlLXRpbWVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwiYXJ0aWNsZS1jb250ZW50XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzBycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwcnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIzMHJweFwiLFxuICAgIFwib3ZlcmZsb3dcIjogXCJoaWRkZW5cIlxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==