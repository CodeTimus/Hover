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
        <div className="col-md-3">
          <div className="box88">
            <div className="profile-box88">
              <div className="profile-img88">
                <img src={"http://localhost:3000/" + doc.image} />
              </div>
              <div className="profile-docs88">
              <Link to={'/main/DocProfile/' + doc._id} ><h1>{doc.name}</h1></Link>
                <h3>{doc.speciality}</h3>
                
                {/* <Link to={'/main/DocProfile/' + doc._id} className="btn btn-outline-primary m-2">Know More</Link> */}
              </div>
            </div>
          </div>
        </div>



    ));
  }

  return (
    <div className="">
      <p className="head">Our Qualified Doctors</p>
      <div className='row mt-5  d-flex justify-content-center'> {displayDoctor()} </div>
    </div>
  );
};

export default ProfileCard;
