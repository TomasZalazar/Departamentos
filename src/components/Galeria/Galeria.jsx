import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Galeria = () => {
    const imagenes = [
        {
            original: "../CentralAv/habitacion.jpg",
            thumbnail: "../CentralAv/habitacion.jpg",
        },
        {
            original: "../CentralAv/frentecocina.jpg",
            thumbnail: "../CentralAv/frentecocina.jpg",
        },
        {
            original: "../CentralAv/living.jpg",
            thumbnail: "../CentralAv/living.jpg",
        },
    ];

    return (
        <div className="p-5 md:p-10 lg:p-20"> {/* Ajusta el padding según el tamaño de la pantalla */}
            <ImageGallery
                items={imagenes}
                showPlayButton={false}
                showBullets={true}
                autoPlay={true}
                slideInterval={10000}
                slideDuration={1000}
                thumbnailPosition="bottom" 
                infinite={true} 
                thumbnailWidth="100px" 
                thumbnailHeight="75px" 
                responsive={[
                    {
                        breakpoint: 600, 
                        settings: {
                            thumbnailWidth: "80px",
                            thumbnailHeight: "60px",
                        },
                    },
                    {
                        breakpoint: 1024, 
                        settings: {
                            thumbnailWidth: "100px",
                            thumbnailHeight: "75px",
                        },
                    },
                ]}
            />
        </div>
    );
};

export default Galeria;
