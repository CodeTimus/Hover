import React from 'react'
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom'


const AddProjectSchema = Yup.object().shape({});

const AddDoctor = () => {

  const navigate = useNavigate();

  const [selFile, setSelFile] = useState("");
  const [certificate1File, setCertificate1File] = useState("");
  const [certificate2File, setCertificate2File] = useState("");


  const addProjectForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      contact: '',
      latitude: '',
      longitude: '',
      speciality: '',
      image: '',
      cer1: '',
      cer2: '',
      desc: '',
      avatar: '',
      createdAt: new Date(),
    },
    onSubmit: async (values, action) => {
      values.image = selFile;
      console.log(values);


      const res = await fetch('http://localhost:3000/doctor/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(res.status);
      action.resetForm();

      if (res.status === 200) {

        enqueueSnackbar('Doctor Added Successfully', {
          variant: 'success', anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          }

        });
        navigate('/')
      } else {
        enqueueSnackbar('Failed to add the project', {
          variant: 'error', anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          }
        })
      }


      validationSchema: AddProjectSchema
    }
  });

  const uploadFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setSelFile(file.name);
    setCertificate1File(file.name);
    setCertificate2File(file.name)
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:3000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    });
  };
  const certificateFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setCertificate1File(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:3000/util/certificateFile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    });
  };


  const certificateFile2 = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setCertificate2File(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:3000/util/certificateFile2", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    });
  };

  return (

    <div className="container-fluid bg-img-addproduct d-flex mt-5">
      <div className="card   d-block m-auto bg-transparent  shadow " style={{ width: "450px", border: "none" }}>
        <div className="card-header">
          <h1 className="text-center fw-bold" style={{ fontFamily: "serif" }}>Add Project</h1>
        </div>
        <div className="card-body d-flex justify-content-center">
          <form onSubmit={addProjectForm.handleSubmit}>


            <div className="form-outline">

              <input
                type="text" style={{ fontFamily: "cursive" }}
                className="form-control shadow input mb-4"
                id="name" placeholder="Enter Doctor Name"
                onChange={addProjectForm.handleChange}
                value={addProjectForm.values.name}
              />
            </div>


            <div className="form-outline">

              <input style={{ fontFamily: "cursive" }}
                type="email"
                className="form-control shadow input mb-4"
                id="email" placeholder="Email"
                onChange={addProjectForm.handleChange}
                value={addProjectForm.values.email}
              />

            </div>
            <div className="form-outline">

              <input style={{ fontFamily: "cursive" }}
                type="password"
                className="form-control shadow input mb-4"
                id="password" placeholder="Password"
                onChange={addProjectForm.handleChange}
                value={addProjectForm.values.password}
              />

            </div>
            <div className="form-outline">

              <input style={{ fontFamily: "cursive" }}
                type="number"
                className="form-control shadow input mb-4"
                id="contact" placeholder="Contact"
                onChange={addProjectForm.handleChange}
                value={addProjectForm.values.contact}
              />

            </div>
            <div className="form-outline">

              <input style={{ fontFamily: "cursive" }}
                type="number"
                className="form-control shadow input mb-4"
                id="latitude" placeholder="Latitude"
                onChange={addProjectForm.handleChange}
                value={addProjectForm.values.latitude}
              />

            </div>
            <div className="form-outline">

              <input style={{ fontFamily: "cursive" }}
                type="number"
                className="form-control shadow input mb-4"
                id="longitude" placeholder="Longitude"
                onChange={addProjectForm.handleChange}
                value={addProjectForm.values.longitude}
              />

            </div>
            <div className="form-outline">

              <input style={{ fontFamily: "cursive" }}
                type="text"
                className="form-control shadow input mb-4"
                id="speciality" placeholder="Speciality"
                onChange={addProjectForm.handleChange}
                value={addProjectForm.values.speciality}
              />

            </div>
            <div className="form-outline">

              <input style={{ fontFamily: "cursive" }}
                type="text"
                className="form-control shadow input mb-4"
                id="desc" placeholder="Introduction"
                onChange={addProjectForm.handleChange}
                value={addProjectForm.values.desc}
              />

            </div>

            <div className="form-outline">
              <label className="form-label" htmlFor="form3Example1m1">
                Upload Image
              </label>
              <input
                type="file" style={{ fontFamily: "cursive" }}
                className="form-control shadow input"
                onChange={uploadFile}
              />
            </div>
            <div className="form-outline">
              <label className="form-label" htmlFor="form3Example1m1">
                Upload Certificate 1
              </label>
              <input
                type="file" style={{ fontFamily: "cursive" }}
                className="form-control shadow input"
                onChange={certificateFile}
              />
            </div>
            <div className="form-outline">
              <label className="form-label" htmlFor="form3Example1m1">
                Upload Certificate 2
              </label>
              <input
                type="file" style={{ fontFamily: "cursive" }}
                className="form-control shadow input"
                onChange={certificateFile2}
              />
            </div>

            <div className="text-center">
              <button style={{ fontFamily: "serif" }}
                type="submit"
                className="btn btn-primary shadow fw-bold fs-5 mt-4 w-50 mb-4"
              >
                Add Doctor
              </button>
            </div>

          </form >
        </div >
      </div >
    </div >




  )
}

export default AddDoctor