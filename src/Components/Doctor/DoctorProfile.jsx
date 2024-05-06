import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import LocationSelector from '../LocationSelector';
import app_config from "../../config";
import { useFormik } from "formik";
import { messaging } from '../Firebase';
import { getToken } from 'firebase/messaging';

const DoctorProfile = () => {

  const [currentDoctor, setCurrentDoctor] = useState(JSON.parse(sessionStorage.getItem('doctor')));
  // const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('doctor')));
  const [selCoords, setSelCoords] = useState([]);

  const url = app_config.apiUrl;

  const updateUser = async (dataToUpdate) => {
    const res = await fetch(url + "/doctor/update/" + currentUser._id, {
      method: "PUT",
      body: JSON.stringify(dataToUpdate),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.status);
    const doctordata = await res.json();
    console.log(doctordata);
    setCurrentUser(doctordata);
    sessionStorage.setItem("doctor", JSON.stringify(doctordata));
  }

  const userForm = useFormik({
    initialValues: currentDoctor,
    onSubmit: async (data) => {
      console.log(data);
      const res = await fetch(url + "/doctor/update/" + currentDoctor._id, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.status);
      const doctordata = (await res.json()).result;
      console.log(doctordata);
      setCurrentUser(doctordata);
      sessionStorage.setItem("doctor", JSON.stringify(doctordata));
    },
  })

  const enableNotification = () => {
    Notification.requestPermission()
      .then((permission) => {
        console.log('Permission:', permission);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    getToken(messaging, { vapidKey: 'BL4dchFstpZuRmylDyzR0ZZbFsN3mxBO0QbelNE8RbK_amJaMAdBTKFYXbreEs17t-4qKGvs-idxlZUK5z_6ewk' }).then((currentToken) => {
      if (currentToken) {
        // Send the token to your server and update the UI if necessary
        // ...
        console.log('Token:', currentToken);
        updateUser({ notiToken: currentToken });
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        // ...
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // ...
    });
  }

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

  const uploadProfileImage = (e) => {
    const file = e.target.files[0];
    setSelImage(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
        updateProfile({ avatar: file.name });
      }
    });
  };
  const uploadDegreeImage = (e) => {
    const file = e.target.files[0];
    setDegImage(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
        updateProfile({ avatar: file.name });
      }
    });
  };
  const uploadCertificateImage = (e) => {
    const file = e.target.files[0];
    setSelImage(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
        updateProfile({ avatar: file.name });
      }
    });
  };

  return (

    <div className='profile-body'>
      <form>
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
                      <label
                        className="btn btn-outline-secondary w-100 mt-3"
                        htmlFor="upload-image"
                      >
                        {" "}
                        <i class="fas fa-pen"></i>&nbsp;Edit{" "}
                      </label>
                      <input
                        type="file"
                        className='rounded-circle'
                        width={150}
                        hidden
                        onChange={uploadProfileImage}
                        id="upload-image"
                      />
                      <div className="mt-3">
                        <h4 className='fs-1'>{currentDoctor.name}</h4>
                        <p className="text-secondary mb-1 fs-2">{currentDoctor.speciality}</p>

                        <button onClick={enableNotification} disabled={currentDoctor.notiToken}>
                          {currentDoctor.notiToken ? 'Notification Enabled' : 'Enable Notification'}
                        </button>

                      </div>
                    </div>
                  </div>
                </div>

               
                  <div className="card mt-3 p-5">
                    <h1 className='fs-2 text-center'>Introduction</h1>
                    <textarea className='fs-3 mt-3 text-center form-control' type="text"
                      id="desc"
                      onChange={userForm.handleChange}
                      value={userForm.values.desc} />
                  </div>
            

              </div>
              <div className="col-md-8">
                <div className="card mb-3 p-3">
                  <div className="card-body">

                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0 fs-3">Full Name</h6>
                        </div>
                        <input className="col-sm-9 text-secondary fs-3 form-control" type="text"
                          id="name"
                          onChange={userForm.handleChange}
                          value={userForm.values.name} />
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0 fs-3">Email</h6>
                        </div>
                        <input className="col-sm-9 text-secondary fs-3 form-control" type="email"
                          id="email"
                          onChange={userForm.handleChange}
                          value={userForm.values.email}
                        />
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0 fs-3">Phone</h6>
                        </div>
                        <input className="col-sm-9 text-secondary fs-3 form-control" type="number"
                          id="contact"
                          onChange={userForm.handleChange}
                          value={userForm.values.contact}
                        />
                      </div>


                    <hr />

                    {locationCard()}
                  </div>
                </div>
                <div className="row gutters-sm">
                  <div className="col-sm-6 mb-3">
                    <div className="card h-100">
                    <img
                      src={'http://localhost:3000/' + currentDoctor.cer1}
                      alt="Doctor"
                      className="rounded-circle"
                      width={150}
                    />
            
                        <input
                          type="file"
                          id="cer1"
                          className="form-control mb-4"
                          placeholder="Upload Image"
                          onChange={uploadDegreeImage} />
            
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <div className="card h-100">
                      <div className="card-body">
                      <img
                      src={'http://localhost:3000/' + currentDoctor.cer2}
                      alt="Doctor"
                      className="rounded-circle"
                      width={150}
                    />
                       
                          <input
                            type="file"
                            id="cer2"
                            className="form-control mb-4"
                            placeholder="Upload Image"
                            onChange={uploadCertificateImage} />
                   
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default DoctorProfile