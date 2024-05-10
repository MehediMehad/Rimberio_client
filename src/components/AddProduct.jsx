import Swal from 'sweetalert2'
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../providers/AuthProvider";
// import { data } from "autoprefixer";
const AddProduct = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    const [publisDate, setPublisDate] = useState()
  
    const handleAddProduct = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const productTitle = form.productTitle.value;
        const reason = form.reason.value;
        const category = form.category.value;
        // const date = form.date.value;
        const photo = form.photo.value;

        const productInfo = { 
            name,
            brand,
            productTitle,
            reason,
            category,
            publisDate,
            photo,
            addedUser:
            {
                email: user?.email,
                addedUserName: user?.displayName,
                addedUserPhoto: user?.photoURL
            }
            
        }
        console.log(productInfo ,'oooooooooooo');

    
    // sand data
    fetch('http://localhost:5000/produces', {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(productInfo)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.insertedId) {
            Swal.fire({
                title: 'Success!',
                text: 'Added Data Database',
                icon: 'success',
                confirmButtonText: 'Okay'
              })
        }
    })
}

    return (
        <div className="bg-[#F4F3F0] p-24">
            <h1 className="text-3xl font-bold">Add Product</h1>
            <form onSubmit={handleAddProduct}  >
                {/* name & brand */}
                <div className="md:flex mb-8 gap-x-5">
                    <div className="form-control md:w-1/2">
                        <label className="">
                            <div className="label">
                                <span className="label-text text-lg font-semibold">Product Name</span>                        </div>
                            <input type="text" name="name" required placeholder="Product Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="">
                            <div className="label">
                                <span className="label-text text-lg font-semibold">Brand Name</span>                        </div>
                            <input type="text" name="brand" required placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form productTitle  & reason row*/}
                <div className="md:flex mb-8 gap-x-5">
                    <div className="form-control md:w-1/2">
                        <label className="">
                            <div className="label">
                                <span className="label-text text-lg font-semibold">Product Title</span>                        </div>
                            <input type="text" name="productTitle" required placeholder="Product Title" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="">
                            <div className="label">
                                <span className="label-text text-lg font-semibold">Reason</span>                        </div>
                            <input type="text" name="reason" required placeholder="Reason" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category & date row*/}
                <div className="md:flex mb-8 gap-x-5">
                    <div className="form-control md:w-1/2">
                        <label className="">
                            <div className="form-control mt-12">
                            <select
                                name='category'
                                id='category'
                                className='p-3 rounded-md'
                            >
                                <option value='Men'>Men</option>
                                <option value='Womans'>Womans</option>
                                <option value='Kids'>Kids</option>
                            </select>
                            </div>
                            {/* <div className="label">
                                <span className="label-text text-lg font-semibold">Category</span>                        </div>
                            <input type="text" name="category" required placeholder="Category" className="input input-bordered w-full" /> */}
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="">
                            <div className="label">
                                <span className="label-text text-lg font-semibold">Date</span>                        </div>
                            <div className="form-control ">
                                <DatePicker
                                    className="border p-3 w-full rounded-md"
                                    selected={publisDate}
                                    onChange={date => setPublisDate(date)}
                                />
                            </div>
                        </label>
                    </div>
                </div>
                {/* Photo Url */}
                <div className="md:flex mb-8">
                    <div className="form-control w-full">
                        <label className="">
                            <div className="label">
                                <span className="label-text text-lg font-semibold">Photo Url</span>                        </div>
                            <input type="text" name="photo" required placeholder="Photo Url" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Product" className="btn btn-block hover:bg-[#D2B48C] text-xl text-[#331A15] bg-[#E3B77B]" />
            </form>
        </div>
    );
};

export default AddProduct;