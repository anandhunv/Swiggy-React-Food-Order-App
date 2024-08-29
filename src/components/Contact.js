
const Contact = () => {
  return (
    <div className="  p-8  bg-slate-200 flex flex-col items-center m-6  h-screen">

<h1 className="font-extrabold text-2xl">Contact Us</h1>


      <form
       className="flex  
       flex-col 
       justify-center">
        <input type="email"  placeholder='Email' className="my-2 h-8 outline-none" />
        <input type="text"  placeholder='Explain' className="my-2 h-40  w-96  outline-none"/>
        <button  className="p-2 rounded-md bg-orange-400 w-16">Submit</button>
      </form>



    </div>
  )
}

export default Contact