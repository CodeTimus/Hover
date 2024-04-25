import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import "./ProfileCard.css";
const ProfileCard = () => {

  const [doctor, setDoctor] = useState([]);

  //   const { category } = useParams();

  const fetchDoctor = async () => {
    const res = await fetch("http://localhost:3000/doctor/getall");

    console.log(res.status);

    const data = await res.json();
    console.log(data);
    if (res.status === 200) {
      // const data = await res.json();
      console.log(data);
      setDoctor(data)
    }
  };

  useEffect(() => {
    fetchDoctor();
  }, []);

  const displayDoctor = () => {
    return doctor.map((doc) => (
      // <div className="conatainer">
      //   <div className="col-md-4">
      //     <div className="card p-3 mb-5 bg-dark p-card">
      //       <h3 style={{ paddingLeft: "20px" }} className="mt-3 text-light">{obj.pname}</h3>
      //       <p style={{ paddingLeft: "20px" }} className="text-light">{obj.pprice}</p>
      //       <Link to={'/view/' + obj._id} className="btn btn-outline-primary m-2">Know More</Link>


      //     </div>
      //   </div>
      // </div>

        <div className="col-md-4">
          <div className="box88">
            <div className="profile-box88">
              <div className="profile-img88">
                <img src={"http://localhost:3000/" + doc.image} />
              </div>
              <div className="profile-docs88">
                <h1>{doc.name}</h1>
                <h3>{doc.speciality}</h3>
                <p>
                  A front-end developer is a software developer. Who works on
                  the client-side, of a web application.
                </p>
                <Link to={'/DoctorProfile/' + doc._id} className="btn btn-outline-primary m-2">Know More</Link>
              </div>
            </div>
          </div>
        </div>



    ));
  }

  return (
    <div className="">
       <header className='bg-body-tertiory'>
                <div className='container py-5'>

                    <p className='display-2 text-center mb-5 fw-bold'>All Products</p>

                    <input type="text" placeholder='Search Items' className='form-control w-75 m-auto'  />

                </div>
            </header >
      <div className='row mt-5  d-flex justify-content-center'> {displayDoctor()} </div>
    </div>
  );
};

export default ProfileCard;
