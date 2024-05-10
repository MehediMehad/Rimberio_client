

const AddProduct = () => {
     


    return (
        <div className="bg-[#F4F3F0] p-24">
            <h1 className="text-3xl font-bold">Add Product</h1>
            <form >
                {/* name & brand */}
                <div className="md:flex mb-8 gap-x-5">
                    <div className="form-control md:w-1/2">
                        <label className="">
                            <div className="label">
                                <span className="label-text text-lg font-semibold">Product Name</span>                        </div>
                            <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="">
                            <div className="label">
                                <span className="label-text text-lg font-semibold">Brand Name</span>                        </div>
                            <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form productTitle  & reason row*/}
                <div className="md:flex mb-8 gap-x-5">
                    <div className="form-control md:w-1/2">
                        <label className="">
                            <div className="label">
                                <span className="label-text text-lg font-semibold">Product Title</span>                        </div>
                            <input type="text" name="productTitle" placeholder="Product Title" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="">
                            <div className="label">
                                <span className="label-text text-lg font-semibold">Reason</span>                        </div>
                            <input type="text" name="reason" placeholder="Reason" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category & date row*/}
                <div className="md:flex mb-8 gap-x-5">
                    <div className="form-control md:w-1/2">
                        <label className="">
                            <div className="label">
                                <span className="label-text text-lg font-semibold">Category</span>                        </div>
                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="">
                            <div className="label">
                                <span className="label-text text-lg font-semibold">Date</span>                        </div>
                            <input type="text" name="date" placeholder="Date" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* Photo Url */}
                <div className="md:flex mb-8">
                    <div className="form-control w-full">
                        <label className="">
                            <div className="label">
                                <span className="label-text text-lg font-semibold">Photo Url</span>                        </div>
                            <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Product" className="btn btn-block hover:bg-[#D2B48C] text-xl text-[#331A15] bg-[#E3B77B]" />
            </form>
        </div>
    );
};

export default AddProduct;