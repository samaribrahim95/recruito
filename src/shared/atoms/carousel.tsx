import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  children: JSX.Element[]
}

const Carousel = (props: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '25%',
    initialSlide: Math.floor(props.children.length / 2),
    responsive: [
      {
        breakpoint: 776,
        settings: {
          centerPadding: '10%',
        }
      },
    ]
  };

  return (
    <div className="carousel overflow-hidden pb-10">
      <Slider {...settings}>
        {...props.children}
      </Slider>
    </div>
  )
}

export default Carousel