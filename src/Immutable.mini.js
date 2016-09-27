/**
 *  Copyright (c) 2014-2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 *
 *  Description :
 *   Immutable custom version,Only support:Map and List data structures and toJS and fromJs methods.
 *
 */

import {List} from "./List";
import {Map} from "./Map";
import {fromJS} from "./fromJS";
import {Iterable} from "./IterableImpl";

export default {

    Iterable: Iterable,

    Map: Map,
    List: List,
    fromJS: fromJS

};
