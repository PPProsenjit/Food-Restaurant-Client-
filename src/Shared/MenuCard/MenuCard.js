import React from 'react';
import { Link } from 'react-router-dom';

const MenuCard = ({item}) => {
    const {_id, title, img, description} = item;
    return (
        <div className="ml-10 mb-10 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
            <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
                    <p className="dark:text-gray-100">{description.slice(0,100)+'....read more'}</p>
                </div>
               <Link to ={`/details/${_id}`}>
               <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">View Details</button>
               </Link>
            </div>
        </div>
    );
};

export default MenuCard;