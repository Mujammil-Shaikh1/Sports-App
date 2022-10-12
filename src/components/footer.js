import Service1 from "../images/service1.png"


export default function Footer()
{

return( 

<>
<div className="container-fluid footer text-light pb-5">
    <div className="row p-5">
        <div className="col-6 col-md-2">

            <h6>Find A Store</h6>
            <h6 className="text-secondary">Sing Up For Email</h6>
            <h6 className="text-secondary">Become A Member</h6>
            <h6 className="text-secondary">Student Discount</h6>
        </div>
        <div className="col-4 col-md-2">
            <img src={Service1} alt="" />

        </div>
   <div className="col-6 col-md-2">
       <h5>Services</h5>
       <h6 className="text-secondary">Careers</h6>
       <h6 className="text-secondary">Istore finder
</h6>
       <h6 className="text-secondary">Account</h6>
       <h6 className="text-secondary">Contact Us</h6>  
   </div>

   <div className="col-6 col-md-2">
       <h5>Find a Store</h5>
       <h6 className="text-secondary">Order Status</h6>
       <h6 className="text-secondary">Delivery
</h6>
       <h6 className="text-secondary">Returns</h6>
       <h6 className="text-secondary"> Payment Options</h6>  
       <h6 className="text-secondary"> Contact Us</h6>  
   </div>

   <div className="col-6 col-md-2">
       <h5>News About</h5>
       <h6 className="text-secondary">Careers </h6>
       <h6 className="text-secondary">Investors
</h6>
       <h6 className="text-secondary">Sustainable Innovation</h6>
     
   </div>
   
   <div className="col-6 col-md-2">
       <h5>Let Connect</h5>
       <div className="d-flex">
       <h4 className="text-secondary p-2"><i className="fa fa-facebook"></i> </h4>
       <h4 className="text-secondary p-2"><i className="fa fa-instagram"></i> </h4>
       <h4 className="text-secondary p-2"><i className="fa fa-twitter"></i> </h4>
       <h4 className="text-secondary p-2"><i className="fa fa-youtube"></i> </h4>
      
       </div>
   </div>
   
   
    </div>

<hr />
<h6 className="text-secondary">
 
    <span className="float-end text-secondary ">  Developed by Mujammil Shaikh | All rights reserved! </span>
</h6>

</div>
</>


)


}