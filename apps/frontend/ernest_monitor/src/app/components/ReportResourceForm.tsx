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



function ReportResourceForm() {

  return (
    <MDBContainer fluid>
      <MDBRow>

        <MDBCol sm='6'>

          <div className='d-flex flex-row ps-5 pt-5'>
            <MDBIcon fas icon="exclamation-triangle fa-3x me-3" style={{ color: '#d9534f' }} />
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
          <img src="https://www.incharge.org/wp-content/uploads/2015/11/storm-plan.jpg"
            alt="Report a Threat"
            className="w-100"
            style={{ objectFit: 'cover', objectPosition: 'center', height: 'calc(100vh - 56px)' }} />
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default ReportResourceForm;
