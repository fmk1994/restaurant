"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var _maplibre_gl_1 = require("!maplibre-gl");
var maplibre_gl_csp_worker_1 = require("maplibre-gl/dist/maplibre-gl-csp-worker");
var styles_1 = require("@mui/styles");
var MapStyles_1 = require("../styles/MapStyles");
_maplibre_gl_1.default.workerClass = maplibre_gl_csp_worker_1.default;
function Map(props) {
    var classes = props.classes;
    var mapContainer = (0, react_1.useRef)(null);
    var map = (0, react_1.useRef)(null);
    var lng = 18.54089994059017;
    var lat = 54.49652748850018;
    var zoom = 14;
    var API_KEY = 'hglNjn4Gb9LgF2YUtiaW';
    (0, react_1.useEffect)(function () {
        if (map.current)
            return;
        map.current = new _maplibre_gl_1.default.Map({
            container: mapContainer.current,
            style: "https://api.maptiler.com/maps/streets/style.json?key=".concat(API_KEY),
            center: [lng, lat],
            zoom: zoom,
        });
        map.current.addControl(new _maplibre_gl_1.default.NavigationControl(), 'top-right');
        new _maplibre_gl_1.default.Marker({ color: '#FF0000' })
            .setLngLat([18.54089994059017, 54.49652748850018])
            .addTo(map.current);
    });
    return (react_1.default.createElement("div", { className: classes.mapWrap },
        react_1.default.createElement("div", { ref: mapContainer, className: classes.map })));
}
exports.default = (0, styles_1.withStyles)(MapStyles_1.default)(Map);
