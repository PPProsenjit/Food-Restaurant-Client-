import React, { useContext, useState } from 'react';
import DateTimePicker from 'react-datetime-picker';

import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const AddReview = () => {
    const{title, _id, } = useLoaderData();
    const {user} = useContext(AuthContext);
    const [value, onChange] = useState(new Date());

    const handleReview = event =>{

        event.preventDefault();
        const form = event.target;
        const text = form.text.value;
        const review ={
            service_id: _id,
            title: title,
            text,
            user_name: user?.displayName,
            user_email: user?.email,
            photoURL: user?.photoURL,
            user_uid: user?.uid,
            date_time:value
        }

        fetch('https://food-first-server-site.vercel.app/reviews',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){

                alert('Successfully Added')
                form.reset();
            }
        })
        .catch(err => console.log(err))

    }
    
    return (
        <form onSubmit={handleReview} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 bg-gray-700">
                <div className="col-span-full pl-10 pr-10">
                    <label className=" text-white text-3xl">Add Your review</label>
                    <textarea name='text' placeholder="" className="w-full rounded-md  required"></textarea>
                </div>
                <div className="col-span-full ml-10 grid grid-cols-2 ">
                <div className='text-white w-10'>
                    <DateTimePicker onChange={onChange} value={value} />
                    </div>
                    <div className="flex items-center space-x-2 pb-5">
                        {
                            user?.email? <button type="submit" className="px-4 py-2 border text-white rounded-md ">Submit</button> :
                            <Link to ='/login' ><button className="px-4 py-2 border text-white rounded-md ">Submit</button></Link>
                        }
                        
                    </div>
                   
                </div>
            </div>
        </form>
    );
};

export default AddReview;