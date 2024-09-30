import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
const MapComponent = () => {
  const [map, setMap] = useState(null);

  const locations = [
    { location: 'New York', latitude: 40.7128, longitude: -74.0060 },
    { location: 'Chicago', latitude: 41.8781, longitude: -87.6298 },
    { location: 'Los Angeles', latitude: 34.0522, longitude: -118.2437 },
    { location: 'Sydney', latitude: -33.8688, longitude: 151.2093 },
    { location: 'Melbourne', latitude: -37.8141, longitude: 144.9631 },
  ];

  useEffect(() => {
    if (map) {
      // Add markers for each location
      locations.forEach((item) => {
        const marker = new L.Marker([item.latitude, item.longitude]).addTo(map);
        marker.bindPopup(`<p>${item.location}</p>`);
      });
    }
  }, [map, locations]);

  return (
    <MapContainer center={[40.7128, -74.0060]} zoom={4} whenReady={(map) => setMap(map)}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Markers will be added here */}
    </MapContainer>
  );
};

export default MapComponent;