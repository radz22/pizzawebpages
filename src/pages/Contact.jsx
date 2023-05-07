import React from 'react'
import contactbg from '../asset/contactbg.jpg'
import '../styles/Home.css';
import '../styles/Contact.css';



function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{ backgroundImage: `url(${contactbg})`}}>

        </div>
        <div className='rightSide'>
            <h1>CONTACT US</h1>

            <form id='contact-form' method='POST'>
                <label htmlFor="name">Full Name</label>
                <input name='name' placeholder='Enter Your Full name...' type='text'/>
                
                <label htmlFor="email">Email</label>
                <input name='email' placeholder='Enter Your email...' type='email'/>

                <label htmlFor="message">Message</label>
                <textarea rows="6" placeholder='Enter Message...' name='message' required></textarea>

                <button  type='submit'>Send Message</button>

            </form>
        </div>
        </div>
  )
}

export default Contact