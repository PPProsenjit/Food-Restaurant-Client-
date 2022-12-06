import React, { useEffect, useState } from 'react';
import MenuCard from '../../Shared/MenuCard/MenuCard';

const FoodMenu = () => {
    const [menus, setMenus] = useState([]);
    useEffect(() => {
        fetch('https://food-first-server-site.vercel.app/services')
            .then(res => res.json())
            .then(data => setMenus(data))
    }, [])
    
    return (
        <div>
            <div className='text-5xl text-yellow-800 text-center pb-5'>
                <h3>Food Menu</h3>
            </div>
            <div className='item-center pl-6 pr-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    menus.map(item => <MenuCard
                        key={item._id}
                        item={item}
                    ></MenuCard>)
                }

            </div>
            
        </div>
    );
};

export default FoodMenu;