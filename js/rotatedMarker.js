/* Minimal Leaflet.RotatedMarker (MIT) – allows marker rotation via CSS transforms */
(function() {
  var oldSetPos = L.Marker.prototype._setPos;
  L.Marker.addInitHook(function () {
    var iconOptions = this.options.icon && this.options.icon.options;
    var anchor = iconOptions && iconOptions.iconAnchor;
    if (anchor) {
      this.options.rotationOrigin = (anchor[0] + 'px ' + anchor[1] + 'px');
    }
    this.options.rotationOrigin = this.options.rotationOrigin || 'center center';
    this.options.rotationAngle = this.options.rotationAngle || 0;
    this.on('drag', function(e) { e.target._applyRotation(); });
  });

  L.Marker.include({
    _applyRotation: function () {
      if (this._icon && this.options.rotationAngle) {
        this._icon.style[L.DomUtil.TRANSFORM + 'Origin'] = this.options.rotationOrigin;
        this._icon.style[L.DomUtil.TRANSFORM] += ' rotate(' + this.options.rotationAngle + 'deg)';
      }
    },
    setRotationAngle: function(angle) {
      this.options.rotationAngle = angle;
      if (this._map) this._applyRotation();
      return this;
    },
    setRotationOrigin: function(origin) {
      this.options.rotationOrigin = origin;
      this._applyRotation();
      return this;
    },
    _setPos: function (pos) {
      oldSetPos.call(this, pos);
      this._applyRotation();
    }
  });
})();
