import "../App.css"
import Shoe from "../images/shoe1.png"
import Shoe1 from "../images/shoe2.png"
import Shoe2 from "../images/shoe3.png"
import Shoe3 from "../images/shoe4.png"
import Shoe4 from "../images/shoe5.png"
import Running1 from "../images/running1.jpeg"
import Running2 from "../images/running2.jpeg"
import Running3 from "../images/running3.jpeg"
import Running4 from "../images/running4.jpeg"


export default function running()
{
    return(

        <>
        <div className="mt-5 mb-4 ">
            <h1 className="fs-1 text-center text-dark ">SELECT YOUR RUNNING <br /> STYLE NOW</h1>
            
        </div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner shoe_back">
    <div className="carousel-item active">
      <img src={Shoe3} className="d-block  shoe_img" data-aos="zoom-in" alt="..."/>
    </div>
    <div className="carousel-item">
    <img src={Shoe1} className="d-block  shoe_img" data-aos="zoom-in"  alt="..."/>
    </div>
    <div className="carousel-item">
    <img src={Shoe2} className="d-block  shoe_img" data-aos="zoom-in"  alt="..."/>
    </div>
    <div className="carousel-item">
    <img src={Shoe} className="d-block  shoe_img" data-aos="zoom-in"  alt="..."/>
    </div>
    <div className="carousel-item">
    <img src={Shoe4} className="d-block  shoe_img" data-aos="zoom-in"  alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


<div className="text-center mt-5 mb-5"> 
<button className="text-center btn btn-outline-info btn-lg fs-3">Shop now</button>
</div>


<div className="container-fluid">
    <div className="row">
        <div className="col-12 col-md-6 p-5 text-center">
            <img src={Running1} alt="" data-aos="fade-up-right" className="running w-100" />
            <h2 className="text-secondary mt-3">MEN APPAREL</h2>
            <button className="text-center btn btn-outline-dark btn-lg fs-4 mt-2">Shop now</button>
        </div>
        <div className="col-12 col-md-6 p-5 text-center">
            <img src={Running2} alt="" data-aos="fade-up-left" className="running w-100" />
            <h2 className="text-secondary mt-3">WOMEN APPAREL</h2>
            <button className="text-center btn btn-outline-dark btn-lg fs-4 mt-2">Shop now</button>

        </div>
    </div>
</div>







<div className="container-fluid">
    <div className="row back">
<div className="col-12 col-md-8 p-5">
    <img src={Running3} alt="" data-aos="slide-up" className="w-100" />
</div>
    
    <div className="col-12 col-md-4 p-5 ">
        <h1 className="mt-5 fs-1" data-aos="slide-left" >NEVER <br /> MISS OUT</h1>
        <div className="under mt-2"></div>
        <p className="fs-5" data-aos="flip-up">Never miss out the stock <br /> Hurry Up!</p>
      
        <button className="text-center btn btn-outline-dark btn-lg fs-4 mt-2">Shop now</button>
    </div>
    </div>
</div>

<div className="container-fluid">
    <div className="row back">
    <div className="col-12 col-md-4 p-5">
        <h1 className="mt-5 ms-5 fs-1" data-aos="slide-right">JUMP HIGHER <br /> JUMP HIGH</h1>
        <div className="under ms-5 mt-2"></div>
        <p className="fs-5 ms-5 mt-2">Join us to jump higher  <br /> Than your expectation </p>
      
        <button className="text-center ms-5 btn btn-outline-dark btn-lg fs-4 mt-2">Shop now</button>
    </div>


<div className="col-12 col-md-8 p-5">
    <img src={Running4} alt=""data-aos="slide-up"  className="w-100" />
</div>
    
   
    </div>
</div>

        </>
    )
}