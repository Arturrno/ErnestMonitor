import React, {useState} from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBTextArea
} from 'mdb-react-ui-kit';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const customIcon = L.icon({
  iconUrl: 'https://static.thenounproject.com/png/335079-200.png', // Ścieżka do twojego obrazu
  iconSize: [32, 32], // Wymiary ikony
  iconAnchor: [16, 32], // Ustawienie "czubka" ikony na odpowiedniej wysokości
  popupAnchor: [0, -32] // Pozycja okna popup
})

function ReportResourceForm() {
const [position, setPosition] = useState<[number, number]>([52.0648, 19.4794]); // Default location (London)

  // Component to handle map clicks and set position
  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]);
      },
    });

    return (
      <Marker position={position} icon={customIcon}>
        <Popup>
          Selected Location: <br /> Latitude: {position[0]} <br /> Longitude: {position[1]}
        </Popup>
      </Marker>
    );
  };
  return (
    <MDBContainer fluid>
      <MDBRow>

        <MDBCol sm='6'>

          <div className='d-flex flex-row ps-5 pt-5'>
            <span className="h1 fw-bold mb-0">Report resource</span>
          </div>

          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px' }}>Fill the report form with valid data</h3>

            {/* Resource Name */}
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Resource Name' id='formControlRegionName' type='text' size="lg" />

            {/* Resource Type (Dropdown List) */}
            <div className="mb-4 mx-5 w-100">
              <label htmlFor="formControlThreatType" className="form-label">Type of Resource</label>
              <select id="formControlThreatType" className="form-select" >
                <option value ="Other">Choose a resource type...</option>
                <option value="Water">Water</option>
                <option value="Food">Food</option>
                <option value="Medicine">Medicine</option>
                <option value="Equipment">Equipment</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Region Name */}
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Region Name' id='formControlDangerLevel' type='text' size="lg" />

            {/* Description */}
            <MDBTextArea wrapperClass='mb-4 mx-5 w-100' label='Description of the Resource' id='formControlDescription' rows={4} size="lg" />

            <MDBInput 
            wrapperClass='mb-4 mx-5 w-100' 
            label='Phone number' 
            id='formControlPhone' 
            type='tel' 
            size="lg" 
            pattern="^\+?[0-9]{1,4}?[-.●]?[0-9]{1,3}[-.●]?[0-9]{1,4}[-.●]?[0-9]{1,4}[-.●]?[0-9]{1,9}$" />


            {/* Optional Files */}
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Attach Files (optional)' id='formControlFiles' type='file' size="lg" multiple />

            <MDBBtn className="mb-4 px-5 mx-5 w-100" color='danger' size='lg'>Report Threat</MDBBtn>

          </div>

        </MDBCol>

        <MDBCol sm='6' className='d-none d-sm-block px-0'>
                  <MapContainer
                    center={position}
                    zoom={7}
                    style={{ height: "calc(100vh - 56px)", width: "100%" }}
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <LocationMarker />
                  </MapContainer>
                </MDBCol>
        

      </MDBRow>

    </MDBContainer>
  );
}

export default ReportResourceForm;
