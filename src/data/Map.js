import React, { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import "./map.css";

function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(18.54089994059017);
  const [lat] = useState(54.49652748850018);
  const [zoom] = useState(14);
  const [API_KEY] = useState("zvAseNUVgfAQxTfKL64O");

  useEffect(() => {
    if (map.current) return; //stops map from intializing more than once
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.addControl(new maplibregl.NavigationControl(), "top-right");
    new maplibregl.Marker({ color: "#FF0000" })
      .setLngLat([18.54089994059017, 54.49652748850018])
      .addTo(map.current);
  });

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}

export default Map;
