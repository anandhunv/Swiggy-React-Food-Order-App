import React from 'react'
import { Link } from 'react-router-dom'

const Info = () => {
  return (
    <>
    <div className='w-full bg-gray-950 px-36  pt-16 pb-8 flex justify-evenly'>
        <div>
        <h1 className='text-zinc-100 text-2xl font-semibold' >Swiggy</h1>
        <p className='text-zinc-400 text-base'>© 2024 Bundl Technologies Pvt. Ltd</p>
        </div>

        <div>

        <h1 className='text-zinc-100 text-xl font-semibold' >Company</h1>
        <p className='text-zinc-400 text-base'>About</p>
        <p className='text-zinc-400 text-base'>Careers</p>

        <p className='text-zinc-400 text-base'>Team</p>
        <p className='text-zinc-400 text-base'>Swiggy One</p>
        <p className='text-zinc-400 text-base'>Swiggy Instamart</p>
        <p className='text-zinc-400 text-base'>Swiggy Genie</p>


        </div>

        <div>
            <div className='mb-8'>
            <h1 className='text-zinc-100 text-xl font-semibold' >Contact us</h1>
        <p className='text-zinc-400 text-base'>Help & Support</p>
        <p className='text-zinc-400 text-base'>Partner with us</p>

        <p className='text-zinc-400 text-base'>Ride with us</p>
      
            </div>

            <div>
            <h1 className='text-zinc-100 text-xl font-semibold' >Legal</h1>
        <p className='text-zinc-400 text-base'>Terms & Conditions</p>
        <p className='text-zinc-400 text-base'>Cookie Policy</p>

        <p className='text-zinc-400 text-base'>Privacy Policy</p>
        <p className='text-zinc-400 text-base'>Investor Relations</p>



            </div>
        </div>
        <div>

<h1 className='text-zinc-100 text-xl font-semibold' >Company</h1>
<p className='text-zinc-400'>About</p>
<p className='text-zinc-400'>Careers</p>

<p className='text-zinc-400'>Team</p>
<p className='text-zinc-400'>Swiggy One</p>
<p className='text-zinc-400'>Swiggy Instamart</p>
<p className='text-zinc-400'>Swiggy Genie</p>


</div>



    </div>
    <div className='w-full bg-gray-400 p-3 text-xl absolute flex justify-center font-semibold'>
      <h1>
        created by <Link to={"https://github.com/anandhunv"}><span className='text-slate-950'>Anandhu N V </span></Link>
      </h1>

    </div>
    </>
  )
}

export default Info