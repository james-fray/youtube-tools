'use strict';

if (window === window.top) {
  var script = document.createElement('script');
  script.textContent =
'    (function (observe) {' +
'      observe(window, "ytplayer", function (ytplayer) {' +
'        observe(ytplayer, "config", function (config) {' +
'          if (config && config.args) {' +
'            delete config.args.ad3_module;' +
'          }' +
'        });' +
'      });' +
'    })(function (object, property, callback) {' +
'      var value;' +
'      var descriptor = Object.getOwnPropertyDescriptor(object, property);' +
'      Object.defineProperty(object, property, {' +
'        enumerable: true,' +
'        configurable: true,' +
'        get: function () {return value;},' +
'        set: function (v) {' +
'          callback(v);' +
'          if (descriptor && descriptor.set) {' +
'            descriptor.set(v);' +
'          }' +
'          value = v;' +
'          return value;' +
'        }' +
'      });' +
'    });' +
'    document.addEventListener("spfpartprocess", function (e) {' +
'      if (e.detail && e.detail.part && e.detail.part.data && e.detail.part.data.swfcfg) {' +
'        delete e.detail.part.data.swfcfg.args.ad3_module;' +
'      }' +
'    });';

  document.documentElement.appendChild(script);
}
