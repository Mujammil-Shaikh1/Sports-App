import Banner1 from "../images/banner1.jpeg"
import Banner2 from "../images/banner2.jpeg"
import Banner3 from "../images/banner3.jpeg"
import Banner4 from "../images/banner4.jpeg"
import Banner5 from "../images/banner5.jpeg"

export default function corousal()
{


    return(
        <>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>

  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Banner2} className="d-block w-100 banner_img zoom animate__animated animate__pulse" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h1 className="fs-1 corousal_heading fw-bolder animate__animated animate__lightSpeedInLeft">If We Dare To Win <br /> <span className="animate__animated animate__lightSpeedInLeft animate__delay-2s"> We Should Also Dare To Loose</span></h1>
        
      </div>
    </div>
    <div className="carousel-item">
      <img src={Banner1} className="d-block w-100 banner_img animate__animated animate__pulse" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h1 className="fs-1 corousal_heading fw-bolder animate__animated animate__lightSpeedInLeft">Just Run Like The Wind</h1>
        
      </div>
    </div>
    <div className="carousel-item">
      <img src={Banner5} className="d-block w-100 banner_img animate__animated animate__pulse" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h1 className="fs-1 corousal_heading fw-bolder animate__animated animate__lightSpeedInLeft">Winning All The Time</h1>
        
      </div>
    </div>
    <div className="carousel-item">
      <img src={Banner4} className="d-block w-100 banner_img animate__animated animate__pulse" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h1 className="fs-1 corousal_heading fw-bolder animate__animated animate__lightSpeedInLeft">Creating Your Own Space</h1>
        
      </div>
    </div>
    <div className="carousel-item">
      <img src={Banner3} className="d-block w-100 banner_img animate__animated animate__pulse" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h1 className="fs-1 corousal_heading fw-bolder animate__animated animate__lightSpeedInLeft">Creating Your Own Space</h1>
        
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </>
    )
}