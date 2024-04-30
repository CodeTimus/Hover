import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import certificate from '../assets/heartCertificate.jpg'
import LocationSelector from './LocationSelector';

const DoctorProfile = () => {

  const [currentDoctor, setCurrentDoctor] = useState(JSON.parse(sessionStorage.getItem('doctor')));
  const [selCoords, setSelCoords] = useState([]);

  useEffect(() => {
    if (currentDoctor.latitude && currentDoctor.longitude) {
      setSelCoords([currentDoctor.latitude, currentDoctor.longitude]);
    }
  }, [])


  const locationCard = () => {
    return <div className='card'>
      <div className="card-body">
        {
          currentDoctor.latitude && currentDoctor.longitude ? (
            <div>
              <p>Selected Coordinates : </p>
              <p>Latitude : {currentDoctor.latitude}</p>
              <p>Longitude : {currentDoctor.longitude}</p>
              <button type="button" data-bs-toggle="modal" data-bs-target="#location-modal" className='btn btn-primary'>Re-Select Location</button>
            </div>
          ) : (
            <>
              <p>Location not selected Yet</p>
              <button className='btn btn-primary'>Select Location</button>
            </>
          )
        }
      </div>
    </div>

  }

  return (
    <div className='profile-body'>
      <div
        className="modal fade modal-xl w-100"
        id="location-modal"
        tabIndex={-1}
        aria-labelledby="location-modal-Label"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content w-100">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <LocationSelector />
            </div>
          </div>
        </div>
      </div>


      <div className="container ">
        <div className="main-body1 w-100">

          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card-profile">
                <div className="card-body1">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src={'http://localhost:3000/' + currentDoctor.image}
                      alt="Doctor"
                      className="rounded-circle"
                      width={150}
                    />
                    <div className="mt-3">
                      <h4 className='fs-1'>{currentDoctor.name}</h4>
                      <p className="text-secondary mb-1 fs-2">{currentDoctor.speciality}</p>

                      <button className="btn btn-primary">Book</button>

                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-3 p-5">
                <h1 className='fs-2 text-center'>Introduction</h1>
                <p className='fs-3 mt-3 text-center'>{currentDoctor.desc}</p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 fs-3">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary fs-3">{currentDoctor.name}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 fs-3">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary fs-3">{currentDoctor.email}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 fs-3">Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary fs-3">{currentDoctor.contact}</div>
                  </div>
                  <hr />

                  {locationCard()}
                </div>
              </div>
              <div className="row gutters-sm">
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <img src={'http://localhost:3000/' + currentDoctor.cer1} />
                  </div>
                </div>
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <img src={'http://localhost:3000/' + currentDoctor.cer2} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default DoctorProfile