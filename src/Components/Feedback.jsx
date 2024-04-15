import React from 'react'
import './Feedback.css'
import { useFormik } from 'formik'
import * as yup from 'yup'

const Feedback = () => {
    const FeedbackForm = useFormik({
        initialValues: {
            name: '',
            email: '',
            Feedback: '',
        },

        onSubmit : async(values , action) => {
            console.log(values);
            const res = await fetch ("http://localhost:3000/Feedback/add",{
              method:'POST',
              body: JSON.stringify(values),
              headers:{
                  'Feedback-Type':'application/json'
              }
            });
            console.log(res.status)
            action.resetForm()
        }
    })

        return(
    <div> <>
            <title>Feedback</title>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link
                rel="stylesheet"
                type="text/css"
                href="vendor/bootstrap/css/bootstrap.min.css"
            />
            <link rel="stylesheet" href="main.css" />
            <div className="contact1">
                <div className="container-contact1">
                    <div className="contact1-pic js-tilt" data-tilt="">
                        <img src="images/docneww.png" alt="" />
                    </div>
                    <form onSubmit={FeedbackForm.handleSubmit} className="contact1-form validate-form">
                        <span className="contact1-form-title">
                            Provide Your Valuable Feedback
                        </span>
                        <div className="wrap-input1 validate-input">
                        
                            <input
                                className="input1"
                                type="text"
                                // name="name"
                                placeholder="Name"
                                id='name'
                                onChange={FeedbackForm.handleChange}
                                value={FeedbackForm.values.name}
                            />
                            <span className="shadow-input1" />
                        </div>
                        <div className="wrap-input1 validate-input">
                            <input
                                className="input1"
                                type="text"
                                // name="email"
                                placeholder="Email"
                                id='email'
                                onChange={FeedbackForm.handleChange}
                                value={FeedbackForm.values.email} 
                            />
                            <span className="shadow-input1" />
                        </div>
                        <br />
                        <div className="rating">
                            <label className='fs-3' >How will you rate your Overall experience?</label> <br />
                            <br />
                            <p>
                                <label className="radio-inline px-3">
                                    <input
                                        type="radio"
                                        name="experience"
                                        id="radio_experience"
                                        defaultValue="bad"
                                    />
                                    Bad
                                    </label>
                                    <label className="radio-inline px-3">
                                        <input
                                            type="radio"
                                            name="experience"
                                            id="radio_experience"
                                            defaultValue="average"
                                        />
                                        Average
                                    </label>
                                    <label className="radio-inline px-3">
                                        <input
                                            type="radio"
                                            name="experience"
                                            id="radio_experience"
                                            defaultValue="good"
                                        />
                                        Good
                                    </label>
                                
                            </p>
                            <br />
                        </div>
                        <div className="wrap-input1 validate-input">
                            <textarea
                                className="input1"
                                // name="Feedback"
                                placeholder="Type in Your Feedback"
                                defaultValue={""}
                                id='Feedback'
                                onChange={FeedbackForm.handleChange}
                                value={FeedbackForm.values.Feedback} 
                            />
                            <span className="shadow-input1" />
                        </div>
                        <div className="container-contact1-form-btn">
                            <button type='submit' className="contact1-form-btn">
                                <span>
                                    Submit
                                    <i className="fa fa-long-arrow-right" aria-hidden="true" />
                                </span>
                                

                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </>
  </div >
  )
}

export default Feedback