import React, { useState } from 'react';

import './EmailContactForm.css';

import 'react-toastify/dist/ReactToastify.css';

import { toast } from 'react-toastify';

import { ToastContainer } from 'react-toastify';

const EmailContactForm = () => {


    const notifySuccess = () => toast.success("Form Submitted Successfully!");

    const notifyError = () => toast.error("Failed to send data!");

  const onSubmit = async (event) => {

    event.preventDefault();


    const formData = new FormData(event.target);

    formData.append("access_key", "2217dfbf-c25e-42a2-8883-84cb21636b07");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
     

    notifySuccess();
      event.target.reset();
    } else {
        notifyError(); 
      console.log("Error", data);

    }
  };

    return (
        <>
        <section className='contactform'>

            <h2 className='heading'> Contact <span>Me</span>!</h2>

            <form onSubmit={onSubmit}>

                <div className='contactform-box'>

                    <div className="contactform-field">

                        <input type="text" placeholder='Please Enter Name' required name="name"  />

                        <span className="focus"></span>

                    </div>

                    <div className="contactform-field">

                        <input type="text" placeholder='Please Enter Email Address' required name="email" />

                        <span className="focus"></span>

                    </div>

                    <div className="contactform-field">

                        <input type="text" placeholder='Please Enter Mobile No' required name="phone" />

                        <span className="focus"></span>

                    </div>

                    <div className="contactform-field">

                        <input type="text" placeholder='Please Enter Subject Name' required name="subject" />

                        <span className="focus"></span>

                    </div>

                </div>

                <div className="messagebox-field">

                    <textarea cols='30' rows='10' placeholder="Please Your Message" required name="message"></textarea>

                    <span className="focus"></span>

                </div>

                <div className="button-box">

                    <button type='submit' className='btn'>Submit</button>

                </div>

            </form>



        </section>


        <ToastContainer />

        </>
    );
};

export default EmailContactForm;
