import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import certificate from '../../assets/heartCertificate.jpg'
import LocationSelector from '../LocationSelector';
import app_config from "../../config";
import { useFormik } from "formik";
import { messaging } from '../Firebase';
import { getToken } from 'firebase/messaging';


const DocProfile = () => {
  const { id } = useParams();

  // const [currentDoctor, setCurrentDoctor] = useState(JSON.parse(sessionStorage.getItem('doctor')));
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  const [selCoords, setSelCoords] = useState([]);
  const [selDoc, setSelDoc] = useState(null);
  const [doctorList, setdoctorList] = useState([]);

  const fetchDoctorData = async () => {
    const res = await fetch('http://localhost:3000/doctor/getbyid/' + id);
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setdoctorList(data);
    }
  };

  useEffect(() => {
    fetchDoctorData();
  }, []);


  const sendNotification = async (notiToken) => {
    const res = await fetch('http://localhost:3000/util/sendNotification', {
      method: 'POST',
      body: JSON.stringify({ notiToken, data: { title: 'Hello', body: 'This is a test notification' } }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(res.status);
  }

  const selectDoctor = (currentDoctor) => {
    setSelDoc(currentDoctor);
    if (currentDoctor.notiToken)
      sendNotification(currentDoctor.notiToken);
  }

  return (
    <>
    {
        doctorList !== null ? (
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
                      src={'http://localhost:3000/' + doctorList.image}
                      alt="Doctor"
                      className="rounded-circle"
                      width={150}
                    />
                    <div className="mt-3">
                      <h4 className='fs-1'>{doctorList.name}</h4>
                      <p className="text-secondary mb-1 fs-2">{doctorList.speciality}</p>

                      <button onClick={() => selectDoctor(doctorList)}>
                        Send Notification
                      </button>

                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-3 p-5">
                <h1 className='fs-2 text-center'>Introduction</h1>
                <p className='fs-3 mt-3 text-center'>{doctorList.desc}</p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 fs-3">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary fs-3">{doctorList.name}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 fs-3">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary fs-3">{doctorList.email}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 fs-3">Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary fs-3">{doctorList.contact}</div>
                  </div>
                </div>
              </div>
              <div className="row gutters-sm">
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <img src={'http://localhost:3000/' + doctorList.cer1} />
                  </div>
                </div>
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <img src={'http://localhost:3000/' + doctorList.cer2} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    ) : (
      <div>
        Loading
      </div>
    )
  }
    </>
  )
}

export default DocProfile