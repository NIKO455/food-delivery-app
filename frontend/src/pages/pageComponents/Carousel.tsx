import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';


import {Navigation} from 'swiper/modules';

export default function Carousel() {
    return (
        <>
            <Swiper navigation={true} autoplay={true} loop={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div>
                        <img className='w-full max-h-[75vh] object-cover'
                            src="https://fmdadmin.foodmandu.com//Images/Vendor/846/Logo/8_151222081509._ktm-marritot-web.listing.jpg"
                            alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='w-full max-h-[75vh] object-cover'
                            src="https://fmdadmin.foodmandu.com//Images/Vendor/289/Logo/4_151222081130_150424053129._burger-shack-web-listing.jpg"
                            alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='w-full max-h-[75vh] object-cover' src="https://fmdadmin.foodmandu.com//Images/Vendor/232/Logo/Untitled_design_-_2024-06-10T172330_100624113837.765.png" alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='w-full max-h-[75vh] object-cover' src="https://fmdadmin.foodmandu.com//Images/Vendor/1921/Logo/WebListing_220524061427.png" alt=""/>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
