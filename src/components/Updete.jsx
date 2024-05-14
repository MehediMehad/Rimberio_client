import { useContext, useEffect } from "react";
import {useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const Updete = () => {
    // const {_id, reason, publisDate, productTitle, photo, name, category, brand, addedUser  } = quary
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const item = useLoaderData()

    const {
        _id, 
        reason, 
        publisDate, 
        productTitle, 
        photo, name, 
        brand,}  
    = item
    console.log('kwssk', _id);


    const handleUpdateItem = async (e )=> {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const productTitle = form.productTitle.value;
        const reason = form.reason.value;
        const photo = form.photo.value;

        const updatedItem = { 
            name,
            brand,
            productTitle,
            reason,
            publisDate,
            photo,
            addedUser:
            {
                email: user?.email,
                addedUserName: user?.displayName,
                addedUserPhoto: user?.photoURL,
                currentDate: new Date().toISOString(),

            }
            
        }
        try{
            const {data} = await axios.put(`http://localhost:5000/item/${_id}`,
                updatedItem
            )
            console.log(data);
            toast.success('Update Successful')
            navigate('/myQuary')
        } catch(err) {
            console.log(err.message)
            toast.error(err.message)
        }
        document.getElementById('myForm222').reset();
    }

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return (
<div className="bg-[#F4F3F0] px-24 pt-24 pb-10">
            <div className="flex justify-between pr-20">
            <h1 className="text-3xl font-bold">Update Query </h1>
            </div>
            <form id="myForm222" onSubmit={handleUpdateItem} >
                {/* name & brand */}
                <div className="md:flex mb-8 gap-x-5">
                    <div className="form-control md:w-1/2">
                        <label className="">
                            <div className="label">
                                <span className="label-text text-lg font-semibold">Query Name</span>                        </div>
                            <input type="text" defaultValue={name} name="name" required placeholder="Product Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="">
                            <div className="label">
                                <span className="label-text text-lg font-semibold">Brand Name</span>                        </div>
                            <input type="text" defaultValue={brand} name="brand" required placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form productTitle  & reason row*/}
                <div className="md:flex mb-8 gap-x-5">
                    <div className="form-control md:w-1/2">
                        <label className="">
                            <div className="label">
                                <span className="label-text text-lg font-semibold">Query Title</span>                        </div>
                            <input type="text" defaultValue={productTitle} name="productTitle" required placeholder="Product Title" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="">
                            <div className="label">
                                <span className="label-text text-lg font-semibold">Reason</span>                        </div>
                            <input type="text" defaultValue={reason} name="reason" required placeholder="Reason" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control w-full">
                        <label className="">
                            <div className="label">
                                <span className="label-text text-lg font-semibold">Photo Url</span>                        </div>
                            <input type="text" name="photo" defaultValue={photo} required placeholder="Photo Url" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Query" className="btn btn-block hover:bg-[#9c8de8] text-xl text-[#331A15] bg-[#9c8de8]" />
            </form>
        </div>
    );
};

export default Updete;