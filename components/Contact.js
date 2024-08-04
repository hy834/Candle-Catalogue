import React from 'react'

function Contact() {
  return (
    <div>
 <section className='section'>
 <div className="container">
        <div className="card shadow">
            <div className="card-body">
                <div className="row">
                  <div className='col-md-6'>
                  <h6>Contact Form</h6>
                  <hr/>
                  <div className="form-group">
                    <label className='mb-1'>Full Name : </label>
                    <input type="text" className="form-control"  placeholder="Enter Full Name" />
                  </div>
                  <div className="form-group">
                    <label className='mb-1'>Phone Number : </label>
                    <input type="text" className="form-control"  placeholder="Enter Full Name" />
                  </div>
                  <div className="form-group">
                    <label className='mb-1'>Email Address : </label>
                    <input type="text" className="form-control"  placeholder="Enter Full Name" />
                  </div>
                  <div className="form-group">
                    <label className='mb-1'>Message : </label>
                   <textarea rows="3" className="form-control" placeholder='Type Message Here'></textarea>
                  </div>
                  <div className="form-group py-3 ">
                    
                   <button type="button" className="btn custom-btn shadow"><span className="babyPinku">Send</span></button>
                  </div>
                  </div>
                  <div className='col-md-6'></div>
                </div>
            </div>
        </div>
    </div>
 </section>
    
    </div>
     
  )
}

export default Contact
