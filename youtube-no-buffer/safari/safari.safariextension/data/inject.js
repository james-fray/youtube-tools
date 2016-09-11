'use strict';

if (window === window.top) {
  var script = document.createElement('script');
  script.textContent =
'    (function (observe) {' +
'      observe(window, "ytplayer", function (ytplayer) {' +
'        observe(ytplayer, "config", function (config) {' +
'          if (config && config.args) {' +
'            Object.defineProperty(config.args, "autoplay", {' +
'              configurable: true,' +
'              get: function () {return "0";},' +
'            });' +
'            config.args.fflags = config.args.fflags.replace("legacy_autoplay_flag=true", "legacy_autoplay_flag=false");' +
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
'    });';
  document.documentElement.appendChild(script);
}
