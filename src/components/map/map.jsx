import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet/dist/leaflet.css";

const locations = [
  {
    position: [-23.005799390382244, -43.313602068535985],
    info: "Ibmec Barra",
  },
  {
    position: [-25.423164974, -49.270998916],
    info: "Curitiba",
  },
  {
    position: [-22.9423212307, -43.3579469015],
    info: "Cidade de Deus",
  },
  {
    position: [-22.950996196, -43.206499174],
    info: "Cristo Redentor",
  },
];

const customMarker = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/2776/2776067.png",
  iconSize: [30, 30],
});


const createClusterIcon = (cluster) => {
  return new divIcon({
    html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
    className: "custom-cluster-marker",
    iconSize: point(30, 30),
  });
};

function MapComponent() {
  return (
    <div style={{ padding: "5vw", margin: "15hv" }}>
      <h1>Mapa</h1>
      <div>
        <MapContainer
          center={[-22.9921, -43.3249]}
          zoom={13}
          style={{ height: "90vh", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkerClusterGroup
            chunckedLoading
            iconCreateFunction={createClusterIcon}
          >
            {locations.map((location, index) => {
              return (
                <Marker
                  key={index}
                  position={location.position}
                  icon={customMarker}
                >
                  <Popup>{location.info}</Popup>
                </Marker>
              );
            })}
          </MarkerClusterGroup>
        </MapContainer>
      </div>
    </div>
  );
}

export default MapComponent;
