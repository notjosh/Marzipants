/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */

'use strict';



/**
               * Returns the options needed to create a RAM bundle.
               */let getRamOptions = (() => {var _ref = _asyncToGenerator(
  function* (
  entryFile,
  options,
  getDependencies,
  getTransformOptions)



  {
    if (getTransformOptions == null) {
      return {
        preloadedModules: {},
        ramGroups: [] };

    }var _ref2 =

    yield getTransformOptions(
    [entryFile],
    { dev: options.dev, hot: true, platform: options.platform }, (() => {var _ref3 = _asyncToGenerator(
      function* (x) {return Array.from(getDependencies);});return function (_x5) {return _ref3.apply(this, arguments);};})());const preloadedModules = _ref2.preloadedModules,ramGroups = _ref2.ramGroups;


    return {
      preloadedModules: preloadedModules || {},
      ramGroups: ramGroups || [] };

  });return function getRamOptions(_x, _x2, _x3, _x4) {return _ref.apply(this, arguments);};})();function _asyncToGenerator(fn) {return function () {var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {function step(key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {return Promise.resolve(value).then(function (value) {step("next", value);}, function (err) {step("throw", err);});}}return step("next");});};}

exports.getRamOptions = getRamOptions;