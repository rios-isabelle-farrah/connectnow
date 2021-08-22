import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps"
import { useState } from "react";
import { useHistory } from "react-router";
import "../Styles/DisplayMap.css"

function DisplayMap({ results }) {
    const [lattitude, setLattitude] = useState(40.713051);
    const [longitude, setLongitude] = useState(-74.007233)
    const [zoom, setZoom] = useState(10)
    const history = useHistory();
    console.log("DisplayMap")
    const pushHistoryFnk = (id) => {
        history.push(`/location/${id}`);
    }
    function Map() {
        const [selectedLocation, setSelectedLocation] = useState(null)

        console.log("Map")
        let infoWindow = selectedLocation ? (null) : null
        console.log("infowindow", infoWindow)
        let sumLattitude = 0
        let sumLongitude = 0 
        for (let i = 0; i < results.length; i++) {
            sumLattitude += Number(results[i].lat) 
            sumLongitude += Number(results[i].lon) 
          }
          console.log("sumLattitude",sumLattitude,"sumLongitude",sumLongitude)

        if (results.length) {
            setLattitude(sumLattitude/results.length)
            setLongitude(sumLongitude/results.length)
            setZoom(13)

        }

        return (

            <GoogleMap
                defaultZoom={zoom}
                defaultCenter={{ lat: Number(lattitude), lng: Number(longitude) }}
            >
                {results.map(obj => (
                    <Marker
                        key={obj.oid}
                        position={{
                            lat: Number(obj.lat),
                            lng: Number(obj.lon)
                        }}
                        onClick={() => {
                            setSelectedLocation(obj);
                        }}          
                    >

                        {selectedLocation && selectedLocation === obj && (<InfoWindow
                            onCloseClick={() => {
                                // pushHistoryFnk(selectedLocation.oid)
                                setSelectedLocation(null);
                            }}
                            key={obj.lat}
                            
                        >
                            <>

                                <h3>{selectedLocation.location_name}</h3>
                                <div>{selectedLocation.address}</div>
                            </>

                        </InfoWindow>
                        )}
                    </Marker>
                ))}
            </GoogleMap>
        )
    }
    const WrappedMap = withScriptjs(withGoogleMap(Map))

    return (
        <div className="maps">
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCSMeyj4s7hgXFc41OQekrDi8fUCoEKKeI`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    )
}

export default React.memo(DisplayMap,(prev,next)=> prev === next)