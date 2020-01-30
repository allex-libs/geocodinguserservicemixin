function createMixins (execlib) {
  'use strict';

  return {
    service: require('./servicecreator')(execlib),
    user: require('./usercreator')(execlib)
  };
}
module.exports = createMixins;
