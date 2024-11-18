
import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";
export default function Create() {

  
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setEmail] = useState("");
    const [phonenumber, setphonenumber] = useState("");
    const [company, setcompany] = useState("");
    const [jobtitle, setjobtitle] = useState("");
   

    const [loading, setLoading] = useState(false);

    function handelsubmit(e) {
        e.preventDefault();

        setLoading(true)
        setTimeout(() => {
            axios.post('http://localhost:3000/createuser', { firstname, lastname, email, phonenumber, company, jobtitle }).then((result) => { console.log(result) }).catch((err) => { console.log(err) })

            window.location.href = "http://localhost:5173/user"

        }, 2000);

    }
    useEffect(()=>{
        const login =localStorage.getItem("isLogin")
        console.log(login)
            if(!login){
                window.location.href = "http://localhost:5173"
            }
        })
    const styles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#0D6EFD" // Set the height of the container to the full viewport height
    };

    if (loading) {

        return <div style={styles}>
            <center><div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div></center>
        </div>
    }

    return (
        <div>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Admin Pannel</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/user">Home</a>
        </li>
        <li className="nav-item">
        <Link className="nav-link" onClick={()=>{
            localStorage.clear();
          }} href="/">Logout</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">

                <h1 className="text-center mb-4">Create New User</h1>
                <form onSubmit={handelsubmit}>
                    <div className="mb-3">
                        <label htmlFor="FirstName" className="form-label">First Name</label>
                        <input onChange={(e) => {
                            setfirstname(e.target.value)
                        }} type="text" className="form-control" id="FirstName" placeholder="Enter your FirstName" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="LastName" className="form-label">Last Name</label>
                        <input onChange={(e) => {
                            setlastname(e.target.value)
                        }} type="text" className="form-control" id="LastName" placeholder="Enter your LastName" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input onChange={(e) => {
                            setEmail(e.target.value);
                        }} type="email" className="form-control" id="email" placeholder="Enter your email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mobileNo" className="form-label">Mobile No</label>
                        <input
                            onChange={(e) => setphonenumber(e.target.value)}
                            type="text"
                            className="form-control"
                            id="mobileNo"
                            placeholder="Enter your mobile number"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="text" className="form-label">Company</label>
                        <input
                            onChange={(e) => setcompany(e.target.value)}
                            type="text"
                            className="form-control"
                            id="mobileNo"
                            placeholder="Enter your Company"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="text" className="form-label">Job Title</label>
                        <input
                            onChange={(e) => setjobtitle(e.target.value)}
                            type="text"
                            className="form-control"
                            id="mobileNo"
                            placeholder="Enter your Job title"
                            required
                        />
                    </div>


                    <button type="submit" className="btn btn-primary">Create</button>
                </form>
            </div>
        </div>
</div>


    )
}