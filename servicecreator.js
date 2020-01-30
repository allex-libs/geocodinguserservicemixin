function createServiceMixin (execlib) {
  'use strict';

  var lib = execlib.lib;

  function GeocodingUserServiceMixin (prophash) {
  }
  GeocodingUserServiceMixin.prototype.destroy = function () {
  };
  GeocodingUserServiceMixin.prototype.geoCodeLatLng = function (latlngobj) {
    return this.__hotel.geoCodeLatLng(latlngobj);
  }
  GeocodingUserServiceMixin.prototype.geoCodeAddressBrief = function (address) {
    return this.__hotel.geoCodeAddressBrief(address);
  };

  GeocodingUserServiceMixin.addMethods = function (klass) {
    lib.inheritMethods(klass, GeocodingUserServiceMixin
      ,'geoCodeLatLng'
      ,'geoCodeAddressBrief'
    );
  };

  return GeocodingUserServiceMixin;
}
module.exports = createServiceMixin;
