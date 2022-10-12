import Empty from "./images/emptycart.png"
import Footer from "./components/footer"
import Dont from "./images/dont-wait.png"


export default function cart()
{
    return(
        <>
        <div className="container-fluid ">
        <div className="row text-center">
            <img src={Dont} alt="" className=" dont" />
       <h3 className=" mt-4">
YOUR CART IS EMPTY</h3>
        <img src={Empty} data-aos="flip-up" alt="cart" className="cart2"/>
    </div></div>
<Footer/>
        </>
    )
}