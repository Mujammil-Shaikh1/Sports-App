import Corousal from "./components/corousal"
import Running from "./components/running_style"
import Card from "./components/card"
import Footer from "./components/footer"
import C_img1 from "./images/card1.jpg"
import C_img2 from "./images/card2.jpg"
import C_img3 from "./images/card3.jpg"
import C_img4 from "./images/card4.jpg"
import C_img5 from "./images/card5.jpg"
import C_img6 from "./images/card6.jpg"
import Cricket from "./images/cricket_bat.jpeg"
import Football from "./images/football.jpeg"
import Racket from "./images/racket1.jpeg"
import Shuttle from "./images/shuttle1.jpeg"
import Shaker from "./images/shaker.jpeg"
import Leather from "./images/leather.jpeg"

export default function home()
{


    return(

        <>
        
        <Corousal/>
        <Running/>
<div className="container-fluid back1">
    <div className="row ">
        <div className="col-12 col-md-4 p-5">
<Card
name="SNEAKERS"
price="Rs.1500"
star="fa fa-star-o"
image={C_img1}
category="Running"
/>
 </div>
 
 <div className="col-12 col-md-4 p-5">
<Card
name="SHOES"
price="Rs.1700"
star="fa fa-star"
image={C_img2}
category="Running"
/>
 </div>
 <div className="col-12 col-md-4 p-5">
<Card
name="Men's Shoes"
price="Rs.2000"
star="fa fa-star-o"
image={C_img3}
category="Men's"
/>
 </div>
 <div className="col-12 col-md-4 p-5">
<Card
name="Sport Shoes"
price="Rs.1250"
star="fa fa-star-o"
image={C_img4}
category="Sports"
/>
 </div>
 <div className="col-12 col-md-4 p-5">
<Card
name="Running Shoes"
price="Rs.3000"
star="fa fa-star-o"
image={C_img5}
category="Running"
/>
 </div>
 <div className="col-12 col-md-4 p-5">
<Card
name="Black Shoes"
price="Rs.4000"
star="fa fa-star"
image={C_img6}
category="Black"
/>
 </div>
 <div className="col-12 col-md-4 p-5">
<Card
name="Cricket Bat"
price="Rs.1500"
star="fa fa-star"
image={Cricket}
category="Cricket"
/>
 </div>

 <div className="col-12 col-md-4 p-5">
<Card
name="Football"
price="Rs.900"
star="fa fa-star"
image={Football}
category="Football"
/>
 </div>
 
 <div className="col-12 col-md-4 p-5">
<Card
name="Tennis Racket"
price="Rs.3900"
star="fa fa-star"
image={Racket}
category="Racket"
/>
 </div>

 <div className="col-12 col-md-4 p-5">
<Card
name="Nyon Shuttle"
price="Rs.500"
star="fa fa-star"
image={Shuttle}
category="Shuttle"
/>
 </div>
 <div className="col-12 col-md-4 p-5">
<Card
name="Protein Shaker"
price="Rs.400"
star="fa fa-star"
image={Shaker}
category="Gym"
/>
 </div>
  

 <div className="col-12 col-md-4 p-5">
<Card
name="Leather Cricket Kit"
price="Rs.5800"
star="fa fa-star"
image={Leather}
category="Cricket"
/>
 </div>
  
  
    </div>
</div>
<Footer/>
        </>
    )
}