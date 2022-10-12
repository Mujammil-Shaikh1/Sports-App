import Card from "./components/card";
import Footer from "./components/footer"
import Shop1 from "./images/shop1.jpg"
import Shop2 from "./images/shop2.jpg"
import Shop3 from "./images/shop3.jpg"
import Shop4 from "./images/shop4.jpg"
import Shop5 from "./images/shop5.jpg"
import Shop6 from "./images/shop6.jpg"
import Shop7 from "./images/shop7.jpg"
import Shop8 from "./images/shop8.jpg"
import Shop9 from "./images/shop9.jpg"
import Shop10 from "./images/shop10.jpg"
import Shop11 from "./images/shop11.jpg"
import Shop12 from "./images/shop12.jpg"
import Banner from "./images/banner6.jpg"
import Banner1 from "./images/banner5.jpeg"
import Banner2 from "./images/banner1.jpeg"



export default function shop() {
  return (
    <>
  
      <div className="container-fluid p-5">
        <h1 className=" text-dark shop_heading"> SHOP</h1>
        <div className="row mt-5">
          <div className="col-6 col-md-6 text-secondary">
            <h6>Showing 1-12 of 78 results Default sorting</h6>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-8">
              <div className="row">
            <div className="col-12 col-md-6">
              <Card
                name="Watch"
                price="Rs.2000"
                star="fa fa-star"
                image={Shop1}
                category="Watch"
              />
            </div>
            <div className="col-12 col-md-6">
              <Card
                name="Track Suit"
                price="Rs.2500"
                star="fa fa-star-o"
                image={Shop2}
                category="Track Suit"
              />
            </div>
            <div className="col-12 col-md-6 mt-5">
              <Card
                name="Black Backpack"
                price="Rs.2500"
                star="fa fa-star"
                image={Shop3}
                category="Backpack"
              />
            </div>
            <div className="col-12 col-md-6 mt-5">
              <Card
                name="Black Backpack"
                price="Rs.3500"
                star="fa fa-star"
                image={Shop4}
                category="Backpack"
              />
            </div>
            <div className="col-12 col-md-6 mt-5">
              <Card
                name="Black Shoes"
                price="Rs.3500"
                star="fa fa-star-o"
                image={Shop5}
                category="Running"
              />
            </div>
            <div className="col-12 col-md-6 mt-5">
              <Card
                name="Black Sneakers"
                price="Rs.4500"
                star="fa fa-star"
                image={Shop6}
                category="Sneakers"
              />
            </div>
            <div className="col-12 col-md-6 mt-5">
              <Card
                name="Blue Jacket"
                price="Rs.2500"
                star="fa fa-star"
                image={Shop7}
                category="Jacket"
              />
            </div>
            <div className="col-12 col-md-6 mt-5">
              <Card
                name="Foot Ball"
                price="Rs.1500"
                star="fa fa-star"
                image={Shop8}
                category="Football"
              />
            </div>
            <div className="col-12 col-md-6 mt-5">
              <Card
                name="Swimming Glasses"
                price="Rs.500"
                star="fa fa-star-o"
                image={Shop9}
                category="Glasses"
              />
            </div>
            <div className="col-12 col-md-6 mt-5">
              <Card
                name="Classic Black Shoes"
                price="Rs.2500"
                star="fa fa-star-o"
                image={Shop10}
                category="Black Shoes"
              />
            </div>
            <div className="col-12 col-md-6 mt-5">
              <Card
                name="Comfortable  Shoes"
                price="Rs.3500"
                star="fa fa-star"
                image={Shop11}
                category="Shoes"
              />
            </div>
            <div className="col-12 col-md-6 mt-5">
              <Card
                name="Diving Accessories"
                price="Rs.1500"
                star="fa fa-star"
                image={Shop12}
                category="Diving"
              />
            </div>
          </div>
          </div>
          <div className="col-12 col-md-4">
          <div className="input-group mb-3">

  <input type="text" className="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1"/>
  <span className="input-group-text" id="basic-addon1"><i className="fa fa-search"></i></span>
</div>

<div className="p-4">
<h3 data-aos="flip-up">Categories</h3>
              <h6 className="text-secondary">Exercises</h6>
              <h6 className="text-secondary">Girls</h6>
              <h6 className="text-secondary">Running</h6>
              <h6 className="text-secondary">Ski</h6>
              <h6 className="text-secondary">Ski Jacket </h6>
              <h6 className="text-secondary">Sneakers</h6>
              <h6 className="text-secondary">Sport </h6>
              <h6 className="text-secondary">Swim Equipment</h6>
              <h6 className="text-secondary">Swimming</h6>
              <h6 className="text-secondary">Uncategorized</h6>
              <h6 className="text-secondary">Urban</h6>
              <h6 className="text-secondary">Variations</h6>
              </div>
             
              <div className="p-4">
              <h3 data-aos="flip-up">TAGS</h3>
              <h6 className="text-secondary">Accessories/Black/Equipment/ </h6> 
            <h6 className="text-secondary">  Fashion/Green/Plastic/Red/ </h6>
             <h6 className="text-secondary"> Rubber/Running/Ski/Snow/Sport/</h6>
             <h6 className="text-secondary"> Sprint/Water
              </h6>

              <label htmlFor="customRange1" className="form-label text-dark fw-bolder fs-4 mt-2" data-aos="flip-up">Price Filter</label>
<input type="range" className="form-range" id="customRange1"/>
<div className=" mt-2 mb-5"> 
<button className="text-center btn btn-dark btn-lg fs-5 btn-lg" >Filter</button>
 <span className="float-end">Price Rs.100 - Rs.10000</span>

 <h4 className="mt-4" data-aos="flip-up">
     Best Products
 </h4>
 <div className="row">
     <div className="col-4 col-md-4">
         <img src={Shop1} className="w-100" data-aos="flip-left" alt="" />
     </div>
<div className="col-8 col-md-8" data-aos="fade-left">
    <h4 ><u>Watch</u></h4>
    <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i><br />
        <del className="text-secondary">Rs2500</del>
        <span className="text-warning ms-4">Rs.2000</span>
</div>



<div className="col-4 col-md-4 mt-5" >
         <img src={Shop2} className="w-100" alt="" data-aos="flip-left"/>
     </div>
<div className="col-8 col-md-8 mt-5" data-aos="fade-left">
    <h4><u>Track Suit</u></h4>
    <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i><br />
        <del className="text-secondary">Rs3000</del>
        <span className="text-warning ms-4">Rs.2000</span>
</div>



<div className="col-4 col-md-4 mt-5">
         <img src={Shop3} className="w-100" alt="" data-aos="flip-left"/>
     </div>
<div className="col-8 col-md-8 mt-5" data-aos="fade-left">
    <h4><u>Black Bagpack</u></h4>
    <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i><br />
        <del className="text-secondary">Rs3000</del>
        <span className="text-warning ms-4">Rs.2500</span>
</div>



<div className="col-4 col-md-4 mt-5">
         <img src={Shop4} className="w-100" alt="" data-aos="flip-left"/>
     </div>
<div className="col-8 col-md-8 mt-5" data-aos="fade-left">
    <h4><u>Black Bagpack</u></h4>
    <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i><br />
        <del className="text-secondary">Rs4000</del>
        <span className="text-warning ms-4">Rs.3500</span>
</div>



<div className="col-4 col-md-4 mt-5">
         <img src={Shop5} className="w-100" alt="" data-aos="flip-left"/>
     </div>
<div className="col-8 col-md-8 mt-5" data-aos="fade-left">
    <h4><u>Sports  Shoes</u></h4>
    <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i><br />
        <del className="text-secondary">Rs4000</del>
        <span className="text-warning ms-4">Rs.3500</span>
</div>




<div className="col-4 col-md-4 mt-5">
         <img src={Shop6} className="w-100" alt="" data-aos="flip-left"/>
     </div>
<div className="col-8 col-md-8 mt-5" data-aos="fade-left">
    <h4><u>Black Sneakers</u></h4>
    <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i><br />
        <del className="text-secondary">Rs5000</del>
        <span className="text-warning ms-4">Rs.4500</span>
</div>




<div className="col-4 col-md-4 mt-5">
         <img src={Shop7} className="w-100" alt="" data-aos="flip-left"/>
     </div>
<div className="col-8 col-md-8 mt-5" data-aos="fade-left">
    <h4><u>Blue Jacket</u></h4>
    <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i><br />
        <del className="text-secondary">Rs3000</del>
        <span className="text-warning ms-4">Rs.2500</span>
</div>




<div className="col-4 col-md-4 mt-5">
         <img src={Shop8} className="w-100" alt="" data-aos="flip-left"/>
     </div>
<div className="col-8 col-md-8 mt-5" data-aos="fade-left">
    <h4><u>Foot Ball</u></h4>
    <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i><br />
        <del className="text-secondary">Rs2000</del>
        <span className="text-warning ms-4">Rs.1500</span>
</div>



<div className="col-4 col-md-4 mt-5">
         <img src={Shop9} className="w-100" alt="" data-aos="flip-left"/>
     </div>
<div className="col-8 col-md-8 mt-5" data-aos="fade-left">
    <h4><u>Swimming Glases</u></h4>
    <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i><br />
        <del className="text-secondary">Rs700</del>
        <span className="text-warning ms-4">Rs.500</span>
</div>


<div className="col-4 col-md-4 mt-5">
         <img src={Shop10} className="w-100" alt="" data-aos="flip-left"/>
     </div>
<div className="col-8 col-md-8 mt-5" data-aos="fade-left">
    <h4><u>Classic Black Shoes </u></h4>
    <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i><br />
        <del className="text-secondary">Rs3000</del>
        <span className="text-warning ms-4">Rs.2500</span>
</div>


<div className="col-4 col-md-4 mt-5">
         <img src={Shop11} className="w-100" alt="" data-aos="flip-left"/>
     </div>
<div className="col-8 col-md-8 mt-5" data-aos="fade-left">
    <h4><u>Comfortable Shoes</u></h4>
    <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i><br />
        <del className="text-secondary">Rs4000</del>
        <span className="text-warning ms-4">Rs.3500</span>
</div>



<div className="col-4 col-md-4 mt-5">
         <img src={Shop2} className="w-100" alt="" data-aos="flip-left"/>
     </div>
<div className="col-8 col-md-8 mt-5" data-aos="fade-left">
    <h4><u>Diving Accessories </u></h4>
    <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i><br />
        <del className="text-secondary">Rs2000</del>
        <span className="text-warning ms-4">Rs.1500</span>
</div>


 </div>

 <h2 className="mt-5">Banner</h2>
 <img src={Banner} alt=""  className="w-100" data-aos="flip-up"/>

 <img src={Banner1} alt=""  className="w-100 mt-5" data-aos="flip-up"/>
 <img src={Banner2} alt=""  className="w-100 mt-5" data-aos="flip-up"/>

</div>
              </div>
          </div>
        </div>
      </div>
<Footer/>

    </>
  );
}
