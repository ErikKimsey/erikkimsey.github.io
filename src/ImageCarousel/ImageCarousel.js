import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageCarousel.scss";

function activateOnKey(e, onClick) {
    if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick && onClick();
    }
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", zIndex: 1011, right: 0, height: "50px", width: "50px" }}
            onClick={onClick}
            onKeyDown={(e) => activateOnKey(e, onClick)}
            role="button"
            tabIndex={0}
            aria-label="Next image"
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", zIndex: 1011, left: "25px", height: "50px", width: "50px" }}
            onClick={onClick}
            onKeyDown={(e) => activateOnKey(e, onClick)}
            role="button"
            tabIndex={0}
            aria-label="Previous image"
        />
    );
}

const ImageCarousel = ({ imgs = [], label = "Project" }) => {
    console.log(imgs);

    const settings = {
        dots: true, // Shows dot indicators
        infinite: true, // Enables infinite looping
        speed: 500, // Transition speed
        slidesToShow: 1, // Number of slides to show at once
        // slidesToScroll: 1, // Number of slides to scroll
        autoplay: true, // Enables autoplay
        autoplaySpeed: 3000, // Autoplay interval (3 seconds)
        pauseOnHover: true,
        pauseOnFocus: true, // Let keyboard users stop the slideshow
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const PLACEHOLDER_IMAGE = "https://res.cloudinary.com/dfez8ez2g/image/upload/v1768229678/addamms_shrug_w_text_er6glv.png";

    return (
        <div className="carousel-container overflow-clip" role="region" aria-roledescription="carousel" aria-label={`${label} screenshots`}>
            <Slider {...settings}>
                {imgs.map((img, index) => (
                    <div key={index}>
                        <img src={img === '' ? PLACEHOLDER_IMAGE : img} alt={img === '' ? 'Placeholder: no screenshot available' : `${label} screenshot ${index + 1} of ${imgs.length}`} style={{ width: "100%", maxHeight: "400px", objectFit: "contain", overflow: "clip" }} />
                        {/* {slide.caption && <p style={{ textAlign: 'center' }}>{img.caption}</p>} */}
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageCarousel;
