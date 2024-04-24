import React from 'react'

const DoctorLogin = () => {
  return (
    <div>
      <div className="container-fluid align-items-center d-flex vh-100 justify-content-center bg-muted" style={{backgroundColor:""}}>
        <div className="card p-5 " style={{borderRadius:"20px"}}>
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6 ">
            <form action="">
              <h2>Doctor Login</h2>
              <p className="">Please Login to use the Admin platform</p>
              <input type="text" className='form-control' placeholder='Enter Email' />
              <input type="text" className='form-control' placeholder='Enter Password' />
              <button type='submit' className='btn btn-success w-100'>Sign In</button>
             <p className='text-center'> <span className="text-secondary ">Don't have an account?</span><span className='text-primary'>Sign up</span></p>
            </form>
          </div>
          <div className='col-md-6'>
            <img className='img-fluid ' src="https://businesstrade.s3.ap-southeast-2.amazonaws.com/wp-content/uploads/2019/10/25093252/sign-business-for-sale-contract-768x768.jpg" alt="Loading" />
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorLogin
