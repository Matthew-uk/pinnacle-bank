'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
  CarFront,
  CircleUser,
  CreditCard,
  Home,
  List,
  Map,
  MapPin,
  Notebook,
  Phone,
} from 'lucide-react';
import Link from 'next/link';

const Slider = () => {
  const slides = [
    {
      id: 1,
      title: 'Customer Service',
      image: '/images/slide1.jpg',
      icon: <Phone className="text-slate-500" size={30} />,
      link: '/',
      linkText: 'Learn More  >',
    },
    {
      id: 2,
      title: 'FDIC Insurance',
      image: '/images/slide2.jpg',
      icon: <p className="text-sm text-slate-500 font-medium">MEMBER FDIC</p>,
      link: '/',
      linkText: 'Learn More  >',
    },
    {
      id: 3,
      title: 'Buying a Home',
      image: '/images/slide3.jpg',
      icon: <Home className="text-slate-500" size={30} />,
      link: '/',
      linkText: 'Learn More  >',
    },
    {
      id: 4,
      title: 'Find a Branch',
      image: '/images/slide4.jpg',
      icon: <Map className="text-slate-500" size={30} />,
      link: '/',
      linkText: 'Apply Now  >',
    },
    {
      id: 5,
      title: 'Apply for an Auto Loan',
      image: '/images/slide5.jpg',
      icon: <CarFront className="text-slate-500" size={30} />,
      link: '/',
      linkText: 'Apply Now   >',
    },
    {
      id: 6,
      title: 'Lost or Stolen Cards',
      image: '/images/slide6.jpg',
      icon: <CreditCard className="text-slate-500" size={30} />,
      link: '/',
      linkText: 'Get Help   >',
    },
    {
      id: 7,
      title: 'Educational Resources',
      image: '/images/slide6.jpg',
      icon: <List className="text-slate-500" size={30} />,
      link: '/',
      linkText: 'Read More   >',
    },
    {
      id: 8,
      title: 'Open an Account',
      image: '/images/slide6.jpg',
      icon: <Notebook className="text-slate-500" size={30} />,
      link: '/',
      linkText: 'Get Started   >',
    },
    {
      id: 9,
      title: 'Product Advisor',
      image: '/images/slide6.jpg',
      icon: <CircleUser className="text-slate-500" size={30} />,
      link: '/',
      linkText: 'Try It  >',
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      //   pagination={{ clickable: true }}
      spaceBetween={20} // Space between slides
      //   slidesPerView={4} // Number of slides visible at a time
      slidesPerGroup={1} // Number of slides to move per navigation click
      breakpoints={{
        640: {
          slidesPerView: 1, // 1 slide on small screens
        },
        768: {
          slidesPerView: 2, // 2 slides on medium screens
        },
        1024: {
          slidesPerView: 3, // 3 slides on large screens
        },
        1280: {
          slidesPerView: 4, // 4 slides on extra-large screens
        },
      }}
      loop={true} // Enable looping
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="md:w-[300px] w-full h-[300px] rounded-lg flex flex-col gap-4 font-montserrat items-center justify-center bg-gray-100">
            {slide.icon}
            <h2 className="text-2xl font-normal text-center">{slide.title}</h2>
            <Link href={slide.link} className="text-slate-500">
              {slide.linkText.toLocaleUpperCase()}
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
