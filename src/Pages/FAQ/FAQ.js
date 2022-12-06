import React from 'react';

const FAQ = () => {
    return (
        <section className=" dark:text-gray-900">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <h2 className="text-2xl font-semibold text-center pb-8 sm:text-4xl">Frequently Asked Questions</h2>
           
            <div className="space-y-4">
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What do you have to sell?</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">We are bringing in our fold traditional, native, healthy and unique tasting sweets and snacks to be delivered at your doorstep</p>
                </details>
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Do you offer Cash on Delivery?</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Yes. We offer Cash on Delivery which most of the other websites don't offer </p>
                </details>
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Where are the products prepared?</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">The products are prepared at the place where they have originated from or are well known and famous. Yes, if your choice is Halwa then it is obviously from Tirunelveli District. </p>
                </details>
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">When will my order be delivered?</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Estimated delivery are given against each products. While sincere efforts are being made to deliver the products within the given time frame factors like, availability, festive seasons, courier delays are bound to happen. These factors are constantly monitored to keep any inordinate delays under control. </p>
                </details>
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How about packing?</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Packing is our extreme concern. We take all steps to have your products delivered in a perfect and hygienic condition without any damage. We at Tredy Foods  strive to deliver the best product and in that endeavour we accept no compromises. As far as packing is concerned we have received feedback from our customers stating that the outer packing is done in a carton box and the look is not proportionate to the order size. We take this as a complement and the reason is we do not want any amount of rough handling to affect the quality, taste, look or texture of the food item in any case.</p>
                </details>
            </div>
        </div>
    </section>
    );
};

export default FAQ;