import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuCard from '../../../Shared/MenuCard/MenuCard';

const SampleItem = () => {
    const [sampleItem, setSampleItem] = useState([]);
    useEffect(() => {
        fetch('https://food-first-server-site.vercel.app/services')
            .then(res => res.json())
            .then(data => setSampleItem(data))
    }, [])
    return (
        <div>
        <div className='text-5xl text-yellow-800 text-center pb-5'>
            <h3>Food Menu</h3>
        </div>
        <div className='item-center pl-6 pr-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                sampleItem.slice(0,3).map(item => <MenuCard
                    key={item._id}
                    item={item}
                ></MenuCard>)
            }

        </div>
        <div className='text-center pb-5'>
            <Link to='/foodMenu' className='text-3xl text-yellow-800 bg-orange-300 p-3 pl-20 pr-20 rounded-xl'>
                <button>See All</button>
            </Link>
        </div>
    </div>
    );
};

export default SampleItem;