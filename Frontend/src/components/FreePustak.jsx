import React,{useState, useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "../components/Cards";
import axios from "axios";

function FreePustak() {
  const [book,setBook] = useState([])
  useEffect(() => {
    const getBook = async() => {
      try {
      const res = await axios.get("http://localhost:4001/book")
        const data = res.data.filter((data) => data.category === "Free")
        console.log(res.data)
        setBook(data);
      } catch (error) {
        console.log(error)
      }
    }
    getBook();
  },[])
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
          <h1 className='font-semibold text-xl pb-2 mt-14'>Free Offered Courses</h1>
          <p>Unlock a world of knowledge and adventure without spending a dime. Dive into our collection of free books and discover new authors and genres. Enjoy endless reading possibilities, all for free!</p>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default FreePustak