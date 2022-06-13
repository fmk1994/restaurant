import React, { useRef, useEffect} from 'react';
import maplibregl from '!maplibre-gl';
import maplibreglWorker from 'maplibre-gl/dist/maplibre-gl-csp-worker';
import '../styles/map.css';

function Map() {
	maplibregl.workerClass = maplibreglWorker
	const mapContainer = useRef(null);
	const map = useRef(null);
	const lng = 18.54089994059017;
	const lat = 54.49652748850018;
	const zoom = 14;
	const API_KEY = 'hglNjn4Gb9LgF2YUtiaW';

	useEffect(() => {
		if (map.current) return; 
		map.current = new maplibregl.Map(
			{
			container: mapContainer.current,
			style: `https://api.maptiler.com/maps/streets/style.json?key=${API_KEY}`,
			center: [lng, lat],
			zoom: zoom,
		});
		map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
		new maplibregl.Marker({ color: '#FF0000' })
			.setLngLat([18.54089994059017, 54.49652748850018])
			.addTo(map.current);
	});

	return (
		<div className='map-wrap'>
			<div ref={mapContainer} className='map' />
		</div>
	);
}

export default Map;
