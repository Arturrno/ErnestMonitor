import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
} from 'mdb-react-ui-kit';
import Link from 'next/link';

function RegisterForm() {

  return (
    <MDBContainer fluid>
      <MDBRow>

        <MDBCol sm='6'>

          <div className='d-flex flex-row ps-5 pt-5'>
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }} />
            <span className="h1 fw-bold mb-0">Put our logo here</span>
          </div>

          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px' }}>Rejestracja</h3>

            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Imię' id='formControlFirstName' type='text' size="lg" />
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Nazwisko' id='formControlLastName' type='text' size="lg" />
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Adres e-mail' id='formControlEmail' type='email' size="lg" />
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Hasło' id='formControlPassword' type='password' size="lg" />
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Potwierdź hasło' id='formControlConfirmPassword' type='password' size="lg" />

            <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg'>Zarejestruj się</MDBBtn>

            <Link href='/login' ><p className='ms-5'>Masz już konto? Zaloguj się tutaj</p></Link>

          </div>

        </MDBCol>

        <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
            alt="Rejestracja"
            className="w-100" 
            style={{ objectFit: 'cover', objectPosition: 'center', height: 'calc(100vh - 56px)' }} />
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default RegisterForm;