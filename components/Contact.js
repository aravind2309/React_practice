const Contact=()=>{
  return(
    <div>
      <h1 className="font-bold text-center p-2 m-2">Contact Us</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input id="name"type="text" className="border border-black p-2 m-2"></input>
        <label htmlFor="contact">Contact:</label>
        <input id="contact" type="text"className="border border-black p-2 m-2"></input>
        <button className="text-white bg-black m-2 p-2 rounded-lg">Submit</button>
      </form>
    </div>
  )

}
export default Contact;