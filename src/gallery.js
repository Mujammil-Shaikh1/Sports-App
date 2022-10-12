import Footer from "./components/footer"
import Gallery1 from "./images/gallery1.jpg" 
import Gallery2 from "./images/gallery2.jpg" 
import Gallery3 from "./images/gallery3.jpg" 
import Gallery4 from "./images/gallery4.jpg" 
import Gallery5 from "./images/gallery5.jpg" 
import Gallery6 from "./images/gallery6.jpg" 
import Gallery7 from "./images/gallery7.jpg" 
import Gallery8 from "./images/gallery8.jpg" 





export default function gallery()
{
    return(
        <>
       <div className="container-fluid p-5">
       <h1 className=" text-dark shop_heading"> GALLERY </h1>
       <div className="row">
           <div className="col-6 col-md-6 p-3">
               <img src={Gallery1} alt="" className="w-100 gallery"  data-aos="fade-up-right"/>
           </div>
           <div className="col-6 col-md-6 p-3">
               <img src={Gallery2} alt="" className="w-100 gallery" data-aos="fade-up-left"/>
           </div>
           <div className="col-6 col-md-6 p-3">
               <img src={Gallery3} alt="" className="w-100 gallery" data-aos="fade-up-right"/>
           </div>
           <div className="col-6 col-md-6 p-3">
               <img src={Gallery4} alt="" className="w-100 gallery" data-aos="fade-up-left"/>
           </div>
           <div className="col-6 col-md-6 p-3">
               <img src={Gallery5} alt="" className="w-100 gallery" data-aos="fade-up-right"/>
           </div>
           <div className="col-6 col-md-6 p-3">
               <img src={Gallery6} alt="" className="w-100 gallery" data-aos="fade-up-left"/>
           </div>
           <div className="col-6 col-md-6 p-3">
               <img src={Gallery7} alt="" className="w-100 gallery" data-aos="fade-up-right"/>
           </div>
           <div className="col-6 col-md-6 p-3">
               <img src={Gallery8} alt="" className="w-100 gallery" data-aos="fade-up-left"/>
           </div>
       </div>
       </div>

       <Footer/>

        </>
    )
}