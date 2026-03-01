import { Swiper, SwiperProps, SwiperSlide, SwiperSlideProps } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import { Pagination, EffectFade, Autoplay } from 'swiper/modules';

interface Props extends SwiperProps {
    slides: React.ReactNode[]
    slide_settings?: SwiperSlideProps,
}

const Carousel = ({ slides, slide_settings, ...props }: Props) => (
    <Swiper
        pagination={{
            clickable: true,
        }}
        autoplay={{
            delay: 8000,
            disableOnInteraction: false,
        }}
        loop
        effect={'fade'}
        modules={[Pagination, EffectFade, Autoplay]} {...props}>
        {slides.map((slide, index) => (
            <SwiperSlide key={index} {...slide_settings}>{slide}</SwiperSlide>
        ))}
    </Swiper>
)

export default Carousel