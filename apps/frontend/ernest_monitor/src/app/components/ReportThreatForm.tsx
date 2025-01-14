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



function ReportThreatForm() {

  return (
    <MDBContainer fluid>
      <MDBRow>

        <MDBCol sm='6'>

          <div className='d-flex flex-row ps-5 pt-5'>
            <MDBIcon fas icon="exclamation-triangle fa-3x me-3" style={{ color: '#d9534f' }} />
            <span className="h1 fw-bold mb-0">Report a Threat</span>
          </div>

          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px' }}>Fill the report form with valid data</h3>

            {/* Region Name */}
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Region Name' id='formControlRegionName' type='text' size="lg" />

            {/* Threat Type (Dropdown List) */}
            <div className="mb-4 mx-5 w-100">
              <label htmlFor="formControlThreatType" className="form-label">Type of Threat</label>
              <select id="formControlThreatType" className="form-select" >
                <option value ="Other">Choose a threat type...</option>
                <option value="Natural Disaster">Natural Disaster</option>
                <option value="Fire">Fire</option>
                <option value="Flood">Flood</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Danger Level */}
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Danger Level (1-5)' id='formControlDangerLevel' type='number' size="lg" min="1" max="5" />

            {/* Description */}
            <MDBTextArea wrapperClass='mb-4 mx-5 w-100' label='Description of the Threat' id='formControlDescription' rows={4} size="lg" />

            {/* Optional Files */}
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Attach Files (optional)' id='formControlFiles' type='file' size="lg" multiple />

            <MDBBtn className="mb-4 px-5 mx-5 w-100" color='danger' size='lg'>Report Threat</MDBBtn>

          </div>

        </MDBCol>

        <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img src="https://insiderrelease.com/wp-content/uploads/2024/08/Deadliest-Natural-Disasters-1024x585.webp"
            alt="Report a Threat"
            className="w-100"
            style={{ objectFit: 'cover', objectPosition: 'center', height: 'calc(100vh - 56px)' }} />
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default ReportThreatForm;
