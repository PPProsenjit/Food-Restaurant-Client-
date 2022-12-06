import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'
const Banner = () => {
    return (
        <section className="relative py-36 px-4 ">
            <div className="z-20 relative text-center text-white container mx-auto " >
                <h1 className="mb-4 text-6xl text-amber-500">We Serve Health And Delicious<br /> Foods For You </h1>
                <p className="leading-normal ">This is a banner that can be resized to your heart’s content without using a background image property.</p>
                <p className="leading-normal">Integer eu massa ipsum. Quisque dui purus, congue in urna sed, volutpat condimentum nisi. Ut elementum tellus quam, sit amet congue ante tempus id. Phasellus ultricies enim in est posuere, quis semper urna consequat.</p>
                <Link className="inline-block bg-blue-500 text-white no-underline hover:bg-blue-800 mt-4 p-4 rounded" >Let's see our manus </Link>
            </div>
            <div className="img-gradient absolute inset-0 h-auto z-10">
                <img src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="h-full w-full object-fit-cover" />
            </div>
        </section>
    );
};

export default Banner;