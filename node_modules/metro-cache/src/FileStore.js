/**
 * Copyright (c) 2018-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * 
 */

'use strict';var _slicedToArray = function () {function sliceIterator(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"]) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}return function (arr, i) {if (Array.isArray(arr)) {return arr;} else if (Symbol.iterator in Object(arr)) {return sliceIterator(arr, i);} else {throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();

const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');







const JOINER_DATA = '\0\0';
const JOINER_LIST = '\0';

class FileStore {


  constructor(options) {
    const root = options.root;

    for (let i = 0; i < 256; i++) {
      mkdirp.sync(path.join(root, ('0' + i.toString(16)).slice(-2)));
    }

    this._root = root;
  }

  get(key) {
    try {
      const data = fs.readFileSync(this._getFilePath(key), 'utf8');var _data$split =
      data.split(JOINER_DATA),_data$split2 = _slicedToArray(_data$split, 3);const code = _data$split2[0],dependencies = _data$split2[1],map = _data$split2[2];

      return {
        code,
        dependencies: dependencies ? dependencies.split(JOINER_LIST) : [],
        map: JSON.parse(map) };

    } catch (err) {
      if (err.code === 'ENOENT') {
        return null;
      }

      throw err;
    }
  }

  set(key, value) {
    const data = [
    value.code,
    value.dependencies.join(JOINER_LIST),
    JSON.stringify(value.map)].
    join(JOINER_DATA);

    fs.writeFileSync(this._getFilePath(key), data);
  }

  _getFilePath(key) {
    return path.join(
    this._root,
    key.slice(0, 1).toString('hex'),
    key.slice(1).toString('hex'));

  }}


module.exports = FileStore;