import Carousel from "react-elastic-carousel"

const CarouselImages = ( {images} ) => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
    ]
    return (
        <div className="container">
            <div className="carousel-wrapper">
                < Carousel breakPoints={breakPoints}>
                    {images.map((image, key) => <img src={image} alt='Imagem do produto' key={key} />)}
                </ Carousel >
            </div>
        </div>
    );
}
 
export default CarouselImages;