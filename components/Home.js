import React from 'react'
import Slider from './inc/Slider'
import { Link } from 'react-router-dom'; 
import VMC from './inc/VMC';

function Home() {
  return (
    <div className='main-colour'>
      <Slider/>
    <section className="section bg-c-light">
      
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="main-heading">Our Company</h3>
            <div className="underline mx-auto"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.


</p>
<Link to="/about" className='btn custom-btn shadow'><span className='pinku'>Read More</span></Link>
          </div>
        </div>

      </div>

    </section>

{/* Mission section, Values section*/}
 <VMC />

        </div>
  
  
  )
}

export default Home
