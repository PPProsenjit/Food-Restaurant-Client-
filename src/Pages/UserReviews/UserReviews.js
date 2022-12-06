import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import ReviewData from './ReviewData';

const UserReviews = () => {
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);
    const handleDelete = id =>{
        const proceed = window.confirm('Are you Sure to Delete')
        if(proceed){
            fetch(`https://food-first-server-site.vercel.app/review/${id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('deleted successfully');
                    const remaining = myReviews.filter(rew => rew._id !== id);
                    setMyReviews(remaining);

                }
            })
        }
    }

    const handleEdit = id =>{
        fetch(`https://food-first-server-site.vercel.app/reviewEdit/${id}`,{
            method : "PATCH" ,
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status: 'approved'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCout > 0){
                const remaining = myReviews.filter(rev => rev._id !== id);
                const approving = myReviews.find(rev => rev._id === id);
                approving.status = 'Approving';
                const newReview = [approving, ...remaining]
                setMyReviews(newReview);
            }
        })
    }

    useEffect(() => {
        fetch(`https://food-first-server-site.vercel.app/review?email=${user?.email}`,{
            headers:{
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res =>  res.json())
            .then(data => setMyReviews(data))
    }, [user?.email])

    return (

        <div className="overflow-x-auto relative shadow-md sm:rounded-lg m-7">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs w-full text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            User Name
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Product Name
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Review
                        </th>
                        <th scope="col" className="py-3 px-6">
                            time
                        </th>
                        <th scope="col" className="py-3 px-6">
                            <span className="sr-only">Edit</span>
                        </th>
                        <th scope="col" className="py-3 px-6">
                            <span className="sr-only">delete</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    
                  {
                        myReviews.map(review =>
                            <ReviewData
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}
                                handleEdit={handleEdit}
                            ></ReviewData>)
                    } 
                </tbody>
            </table>
        </div>

    );
};

export default UserReviews;