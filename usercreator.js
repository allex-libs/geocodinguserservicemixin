function createUserMixin (execlib) {
  'use strict';

  var lib = execlib.lib,
    qlib = lib.qlib;

  function GeocodingUserUserMixin (prophash) {
  }
  GeocodingUserUserMixin.prototype.destroy = function () {
  };
  GeocodingUserUserMixin.prototype.geoCodeLatLng = function (latlngobj, defer) {
    qlib.promise2defer(this.__service.geoCodeLatLng(latlngobj), defer);
  }
  GeocodingUserUserMixin.prototype.geoCodeAddressBrief = function (address, defer) {
    qlib.promise2defer(this.__service.geoCodeAddressBrief(address), defer);
  };

  GeocodingUserUserMixin.addMethods = function (klass) {
    lib.inheritMethods(klass, GeocodingUserUserMixin
      ,'geoCodeLatLng'
      ,'geoCodeAddressBrief'
    );
  };

  return GeocodingUserUserMixin;
}
module.exports = createUserMixin;
