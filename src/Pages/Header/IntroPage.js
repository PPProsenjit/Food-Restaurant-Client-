import React from 'react';

const IntroPage = () => {
    return (
        <section className=" dark:bg-gray-00 dark:text-gray-100 p-0 m-0 rounded-xl">
            <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">

                <div className="w-5/6 grid lg:gap-4 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-yellow-700">Introduction</h2>
                        <p className="mt-3 text-lg text-gray-500 pl-20">By combining international products and cooking methods with Bangladeshi flavors and traditions, bangladeshi's Accent highlights creative bangladeshi's food. According to Asia's 50 Best Restaurants, Bangladeshis Accent, New Delhi is the 22nd-best restaurant in the continent. For seven years running, Asia's 50 Best Restaurants has named it the San Pellegrino "Best Restaurant in Bangladesh" (from 2015-2022). TripAdvisor continuously ranked the restaurant as the "No. 1 Restaurant in Bangladeshis" from 2014 to 2019. Listed as one of the "100 Greatest Places in the World" by Time Magazine, and named the best restaurant in Bangladeshis by Condé Nast Traveler.</p>

                    </div>
                    <div aria-hidden="true" className=" lg:mt-0">
                        <img src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="mx-auto w-5/6 rounded-lg shadow-lg " />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default IntroPage;