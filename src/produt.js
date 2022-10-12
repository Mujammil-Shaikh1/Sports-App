import Footer from "./components/footer"
import Card from "./components/card";
import Product4 from "./images/gogle2.png";
import Product5 from "./images/gogle1.png";
import Swim1 from "./images/swim1.jpg";
import Swim2 from "./images/swim2.jpg";
import Swim3 from "./images/swim3.jpg";
import Gogle1 from "./images/gogle3.png";
import Gogle3 from "./images/gogle5.png";
import Boxer from "./images/boxer.jpg"
import Dive from "./images/shop12.jpg"
import Swim4 from "./images/swim4.jpg"
import Swim5 from "./images/swim5.jpg"
import Swim6 from "./images/swim6.jpg"
import Winter1 from "./images/winter1.jpg"
import Winter2 from "./images/winter2.jpg"
import Winter3 from "./images/winter3.jpg"
import Winter4 from "./images/winter4.jpg"
import Winter5 from "./images/winter5.jpg"
import Winter6 from "./images/winter6.jpg"






export default function product() {
  return (
    <>


      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner product_back text-center">
          <div className="carousel-item active">
            <img src={Product4} className="d-block  prod_img animate__animated animate__jello" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Gogle1} className="d-block  prod_img animate__animated animate__jello" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Gogle3} className="d-block  prod_img animate__animated animate__jello" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Product5} className="d-block  prod_img animate__animated animate__jello" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Gogle3} className="d-block  prod_img animate__animated animate__jello" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-4 p-5">
            <h1 className="mt-5 fs-1">
              SWIM <br /> ACCESORIES
            </h1>
            <div className="under mt-2"></div>
            <p className="fs-5">
              Never miss out the stock <br /> Hurry Up!
            </p>
          </div>

          <div className="col-12 col-md-4 p-5">
            <Card name="Swimming Glasses" image={Swim1} price="Rs 750" star="fa fa-star-o" category="swimming" />
          </div>
          <div className="col-12 col-md-4 p-5">
            <Card name="Yellow Glasses" image={Swim2} price="Rs 750" star="fa fa-star-o" category="swimming" />
          </div>
          <div className="col-12 col-md-4 p-5">
            <Card name="Mens Shorts" image={Boxer} price="Rs 1750" star="fa fa-star" category="Shorts" />
          </div>
          <div className="col-12 col-md-4 p-5">
            <Card name="Diving" image={Dive} price="Rs 1250" star="fa fa-star-o" category="Diving"/>
          </div>
          <div className="col-12 col-md-4 p-5">
            <Card name="Swimming Vest" image={Swim4} price="Rs 2250" star="fa fa-star-o" category="vest"/>
          </div>
          <div className="col-12 col-md-4 p-5">
            <Card name="Swim Top" image={Swim5} price="Rs 1150" star="fa fa-star-o" category="swimming Top"/>
          </div>
          <div className="col-12 col-md-4 p-5">
            <Card name="Swim Goggles" image={Swim3} price="Rs 1550" star="fa fa-star-o" category="Goggles"/>
          </div>
          <div className="col-12 col-md-4 p-5">
            <Card name="Swim Suits" image={Swim6} price="Rs 1250" star="fa fa-star-o" category="Suits"/>
          </div>
         
<div className="col-12 col-md-12">
    
<div className="text-center mt-2 mb-5"> 
<button className="text-center btn btn-outline-primary btn-lg fs-3">MORE</button>
</div>
</div>
        </div>
      </div>




      
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-4 p-5">
            <h1 className="mt-5 fs-1">
              Winter SPORTS <br /> ACCESORIES
            </h1>
            <div className="under mt-2"></div>
            <p className="fs-5">
              Never miss out the stock <br /> Hurry Up!
            </p>
          </div>

          <div className="col-12 col-md-4 p-5">
            <Card name="Winter Ice Glasses" image={Gogle1} price="Rs 1750" star="fa fa-star-o" category="Winter"/>
          </div>
          <div className="col-12 col-md-4 p-5">
            <Card name="Winter Yellow Glasses" image={Gogle3} price="Rs 1550" star="fa fa-star-o" category="Winter"/>
          </div>

          <div className="col-12 col-md-4 p-5">
            <Card name="Ski Equipment" image={Winter1} price="Rs 3750" star="fa fa-star-o" category="SKI"/>
          </div>
          <div className="col-12 col-md-4 p-5">
            <Card name="Ski Goggles" image={Winter2} price="Rs 4050" star="fa fa-star-o" category="SKI"/>
          </div>
          <div className="col-12 col-md-4 p-5">
            <Card name="Sky Blue Hoodie " image={Winter3} price="Rs 4500" star="fa fa-star-o" category="Goggle"/>
          </div>
          <div className="col-12 col-md-4 p-5">
            <Card name="Red Winter Jacket" image={Winter4} price="Rs 5550" star="fa fa-star-o" category="Jacket"/>
          </div>
          <div className="col-12 col-md-4 p-5">
            <Card name="Green Winter Jacket" image={Winter5} price="Rs 3550" star="fa fa-star-o" category="Jacket"/>
          </div>
          <div className="col-12 col-md-4 p-5">
            <Card name="Black Winter Jacket" image={Winter6} price="Rs 5550" star="fa fa-star-o" category="Jacket"/>
          </div>
        </div>
      </div>


   <Footer/>

    </>
  );
}
