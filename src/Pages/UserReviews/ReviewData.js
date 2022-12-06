import React from 'react';


const ReviewData = ({ review,handleDelete, handleEdit }) => {
    const {_id, title, user_name, text, date_time,photoURL } = review;

    return (

        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
            <th scope="row" className="flex py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <div className='pr-2'>
                <img src={photoURL} alt="" className="object-cover w-6 h-6 rounded-full dark:bg-gray-500 " />
                </div>
                <div>
                    {user_name}
                </div>
            </th>
            <td className="py-4 px-6">
                {title}
            </td>
            <td className="py-4 px-6">
                {text}
            </td>
            <td className="py-4 px-6">
                {date_time}
            </td>
            <td className="py-4 px-6 text-right">
                <button 
                onClick={() => handleEdit(_id)}
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
            </td>
            <td className="py-4 px-6 text-right">
                <button onClick={() => handleDelete(_id)} className="font-medium text-red-600 dark:text-red-400 hover:underline">Delete</button>
            </td>
        </tr>


    );
};

export default ReviewData;