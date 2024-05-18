import React from 'react'
import pan from '../../assets/pan.png'
import './AdminDashboard.css'

const AdminDashboard = () => {
  return (
    <div>
      <div className='kv1'><h1>  Welcome to Admin Pannel</h1></div>
     <div className='kv2'> <img src={pan}alt="" /></div>
     <div className="row98">
    {/* Column 1*/}
    <div className="column98">
      <div className="card98">
        {/* <div className="img-container98">
          <img src={profile1} />
        </div> */}
        <h3>Active cases</h3>
        <p>2345678</p>
        <div className="icons98">
         
        </div>
      </div>
    </div>
   
    {/* Column 3*/}
    <div className="column98">
      <div className="card98">
        {/* <div className="img-container98">
          <img src={profile3} />
        </div> */}
        <h3>Active doctors</h3>
        <p>07</p>
        <div className="icons98">
         
        </div>
      </div>
    </div>
  </div>

    </div>
  )
}

export default AdminDashboard