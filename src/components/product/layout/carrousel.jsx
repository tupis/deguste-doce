import Carousel from "react-elastic-carousel"

const CarouselImages = ( {images} ) => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
    ]
    return (
        <div className="container">
            <div className="carousel-wrapper">
                < Carousel breakPoints={breakPoints}>
                    {images.map(image => <img src={image} alt='Imagem do produto'/>)}
                </ Carousel >
            </div>
        </div>
    );
}
 
export default CarouselImages;