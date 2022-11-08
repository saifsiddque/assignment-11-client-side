import React from 'react';

const Slider = () => {
    return (
        <div>
            <h2 className='text-3xl border-b-4 p-4 mb-4'>
                Plan Your Event With Saif
            </h2>
            <div className='px-20'>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/luxurious-dinner-hall-with-large-crystal-chandelier_8353-565.jpg?size=626&ext=jpg&ga=GA1.2.1488004789.1659069416&semt=sph" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/restaurant-hall-with-tables-decorated-with-tall-vases-with-roses_1304-4823.jpg?w=826&t=st=1667901326~exp=1667901926~hmac=8302713b7b7f9f75085b0845925fb498d56536d4da455c69fce71c9c608b396a" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/buffet-catering_74190-3683.jpg?size=626&ext=jpg&ga=GA1.2.1488004789.1659069416&semt=sph" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
            </div>
        </div>
    );
};

export default Slider;