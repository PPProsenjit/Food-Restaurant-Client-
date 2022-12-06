import React from 'react';

const AddMenu = () => {
    
    const handleAddMenu = (event) => {
        event.preventDefault();
        const form = event.target;
        const service_id = form.service_id.value;
        const title = form.title.value;
        const img = form.img.value;
        const price = form.price.value;
        const description = form.description.value;

        const addmenu = {
            service_id,
            title,
            img,
            price,
            description
        }
        fetch('https://food-first-server-site.vercel.app/services',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(addmenu)
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
        <section className="p-6 ">
            <form onSubmit={handleAddMenu} className="w-4/6 bg-gray-300 container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                <div className='ml-10 mr-10' >

                    <div className='pr-80'>
                        <div className='pr-20' >
                            <label className="text-sm">Service Id </label>
                            <input name='service_id' type="text" required placeholder="service_id" className="pl-2 w-full rounded"  />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Item Name</label>
                            <input name='title' type="text" required placeholder="Item Name" className="pl-2 w-full rounded"  />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Photo</label>
                            <input name='img' type="text" required placeholder="photo url" className="pl-2 w-full rounded"  />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Price</label>
                            <input name='price' type="text" required placeholder="price" className="pl-2 w-full rounded "  />
                        </div>
                    </div>
        
                    <div className="col-span-full ">
                        <label className="text-sm">Description</label>
                        <input name='description' required className="w-full h-60 rounded-md focus:ring focus:ring-opacity-75" ></input>
                    </div>
                    <div className="col-span-full text-center">
                        <button type="submit" className="px-4 mt-3 mb-5 py-2 border rounded btn-primary bg-orange-600 ">Add Item</button>

                    </div>
                </div>
            </form>
        </section>
    );
};

export default AddMenu;