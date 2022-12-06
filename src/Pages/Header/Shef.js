import React from 'react';
import logo from '../../assets/image/shef.jpg'
const Shef = () => {
    return (
        <section className=" dark:bg-gray-00 dark:text-gray-100 p-0 m-0 rounded-xl">
            <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">

                <div className="w-5/6 grid lg:gap-4 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h2 className="text-xl font-semibold tracking-tight text-center sm:text-3xl text-yellow-700">SHEF REDOY AKOND</h2>
                        <p className="mt-3 text-lg text-gray-500 pl-20">Restaurant chain Bangladeshi Accent's culinary director is renowned and highly regarded Chef Redoy Akhond. Bangladeshi food he invented was innovative. He was named the most exciting contemporary Bangladeshi chef in the world today and received the American Express Award for Best Chef in Bangladesh..</p>

                    </div>
                    <div aria-hidden="true" className=" lg:mt-0">
                        <img src={logo} alt="" className="mx-auto w-5/6 rounded-lg shadow-lg " />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Shef;