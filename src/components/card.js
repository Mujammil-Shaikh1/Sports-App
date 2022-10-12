
export default function card(props)
{
    return(
        <>
       <div className="card " data-aos="fade-up">
  <img src={props.image} className="card-img-top card_img" data-aos="zoom-in" alt="..."/>
  <div className="card-body ">
      <button className="cart" data-aos="flip-up"> <i className="fa fa-shopping-cart"></i> Add to Cart</button>
      <button className="cart1" data-aos="flip-up"> <i className="fa fa fa-eye"></i>Quick View </button>
 
    <h4 className="mt-4 mb-3 fw-bolder card_heading">{props.name} 
    <span className="price"><i className="fa 	fa fa-heart-o"></i> {props.price}</span></h4>
  <hr />
    <h5 className="mt-3  fst-italic" data-aos="zoom-in">{props.category} <span className="price">
        
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className={props.star}></i></span></h5>
    
  </div>
</div>
        </>
    )
}