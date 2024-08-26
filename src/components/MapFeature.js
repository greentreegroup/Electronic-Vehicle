import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Attribution from 'ol/control/Attribution';
import Zoom from 'ol/control/Zoom';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Circle, Fill, Stroke, Style } from 'ol/style';
import Overlay from 'ol/Overlay';
import { fromLonLat } from 'ol/proj';
import './MapFeature.css';

const FreeMap = () => {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [popup, setPopup] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://prod-44.southeastasia.logic.azure.com/workflows/2dd568592654417e8216e170db743a61/triggers/manual/paths/invoke/min_price/0/max_price/-1/sort_by_recent/false/property_type/none?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=xqoE7trIuqQ2NkKl4zVVv3kijiPo2GZqT6MqFZuiIsw');
        setProperties(response.data.body); // Assuming your API response has a 'body' property containing an array of properties
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoading && !error) {
      const map = new Map({
        target: 'map',
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: fromLonLat([-98, 37.98]),
          zoom: 4.416
        }),
        controls: [
          new Attribution({
            collapsible: true,
          }),
          new Zoom(), // Add the Zoom control
        ],
      });

      // Define pin style
      const pinStyle = new Style({
        image: new Circle({
          radius: 8,
          fill: new Fill({ color: 'blue' }), // Default pin color
          stroke: new Stroke({
            color: 'black',
            width: 2,
          }),
        }),
      });

      // Define hover pin style
      const hoverPinStyle = new Style({
        image: new Circle({
          radius: 8,
          fill: new Fill({ color: 'red' }), // Hover pin color
          stroke: new Stroke({
            color: 'black',
            width: 2,
          }),
        }),
      });

      // Create a vector source and layer for the pins
      const vectorSource = new VectorSource();
      const vectorLayer = new VectorLayer({
        source: vectorSource,
      });
      map.addLayer(vectorLayer);

      // Add pins as marker features
      properties.forEach(property => {
        const lon = parseFloat(property.longitude);
        const lat = parseFloat(property.latitude);
        const pinFeature = new Feature({
          geometry: new Point(fromLonLat([lon, lat])),
          property: property, // Attach property data to the feature
        });
        pinFeature.setStyle(pinStyle);
        vectorSource.addFeature(pinFeature);
      });

      // Popup overlay
      const popupElement = document.createElement('div');
      popupElement.className = 'popup';
      const popupOverlay = new Overlay({
        element: popupElement,
        positioning: 'bottom-center',
        stopEvent: false,
        offset: [0, -10],
      });
      map.addOverlay(popupOverlay);

      // Event listener for hover and exit on pin feature
    map.on('pointermove', function (event) {
      let hovered = false;
      map.forEachFeatureAtPixel(event.pixel, function (feature) {
        hovered = true;
        map.getTargetElement().style.cursor = 'pointer';
        feature.setStyle(hoverPinStyle);
      });
      if (!hovered) {
        map.getTargetElement().style.cursor = '';
        vectorSource.getFeatures().forEach(feature => {
          feature.setStyle(pinStyle);
        });
      }
    });

      // Event listener for click on pin feature
      map.on('click', function (event) {
        map.forEachFeatureAtPixel(event.pixel, function (feature) {
          const property = feature.get('property');
          if (property) {
            const coordinate = event.coordinate;
            popupOverlay.setPosition(coordinate);
            popupElement.innerHTML = `
              <div>
                <h3>${property.name}</h3>
                <p>Type: ${property.property_type}</p>
                <p>Date Published: ${property.date_published}</p>
                <p>Minimum Investment: ${property.minimum_investment}</p>
              </div>
            `;
          } else {
            popupOverlay.setPosition(undefined);
          }
        });
      });

      // Clean up function
      return () => {
        map.dispose();
      };
    }
  }, [isLoading, error, properties, popup]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h1>List of Properties</h1>
      <div id="map" style={{ width: '60%', height: '450px' }}></div>
    </div>
  );
};

export default FreeMap;
