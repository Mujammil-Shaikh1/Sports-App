import Footer from "./components/footer"

export default function register()
{
    return(
    <>


 <div className="container-fluid">
     <div className="row">
     <div className="col-12 col-md-6 mt-5 p-5">
                 <h1  className="animate__animated" data-aos="fade-up">Login</h1>
                 <div className="text-info fs-1 fw-bolder line animate__animated" data-aos="fade-up">___________</div>
                 <div className="card p-4 mt-4" data-aos="fade-up">
                     <h6 className="mb-4 text-info">Username Or Email Address</h6>
                     <input type="text" className="form-control" placeholder="Username / Email" aria-label="Username" required/>

                     <h6 className="mb-4 mt-4">Password</h6>
                     <input type="password" className="form-control" placeholder="Password" aria-label="Username" required/>
                     
                     <div className="form-check mt-4">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                          Remember me
                        </label>
                      </div>
                      <button className="btn btn-info form-control mt-4">Sign In</button>
                     <h6 className=" mt-3">Forgot password</h6>
                 </div>
             </div>


             <div className="col-12 col-md-6 mt-5  p-5" data-aos="fade-up">
               <h1  className="animate__animated">Register</h1>
                 <div className="text-info fs-1 fw-bolder line animate__animated">___________</div> 
                <div className="card p-4 mt-4 ">
                    <h6 className="mb-4 text-info"> Email Address</h6>
                    <input type="text" className="form-control" placeholder="Username / Email" aria-label="Username" required/>
                <p className="mt-3 text-secondary">A link to set a new password will be sent to your email address.</p>
                    <p className="mt-3 text-secondary">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                    <button className="btn btn-info form-control mt-4">Register</button>
                    <h6 className=" mt-3">Become A Vendor</h6>
                </div>
            </div>

     </div>
 </div>
 
 <Footer/>
    </>
    )
}