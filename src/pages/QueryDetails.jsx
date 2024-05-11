import { useContext, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const QueryDetails = () => {

    const {user} = useContext(AuthContext)
    
	const query = useLoaderData()
	const { id } = useParams()
	const item = query.find(item => item?._id == id)
	const { name, brand, category, photo, productTitle, publisDate, addedUser } = item


    const handlerecommendation = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const title = form.title.value;
        const photo = form.photo.value;
        const reason = form.reason.value;


        const recommendationInfo = {
            name,
            title,
            photo,
            reason,
            recommendedUser:{
                email: user?.email,
                addedUserName: user?.displayName,
                addedUserPhoto: user?.photoURL,
                currentDate: new Date().toISOString(),
                currentTime: new Date().toISOString(),
            }

        }
        console.log(recommendationInfo);
    }

	useEffect(() => {
		window.scroll(0, 0)
	}, [])



    return (
        <>
        <div className="lg:flex lg:flex-col lg:mx-64 p-6 space-y-6 overflow-hidden mt-20 rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
        <div className=" lg:flex lg:justify-evenly gap-x-5">
            <img src={photo} alt="" className=" object-cover shadow-xl  mb-4 lg:h-[400px] dark:bg-gray-500 " />
            <div className=" pt-8 md:space-y-6 space-y-3">
                <h2 className="mb-1 text-xl font-semibold"><span className="font-bold">Name:</span> {name}</h2>
                <p className="text-xl dark:text-gray-600"><span className="font-bold">Title:</span> {productTitle}</p>
                <p className="text-xl dark:text-gray-600 "><span className="font-bold">Brand:</span> {brand}</p>
                <p className="text-xl dark:text-gray-600 "><span className="font-bold">Category:</span> {category}</p>
                <p className="text-xl dark:text-gray-600 "><span className="font-bold">Publishing Date:</span> {new Date(publisDate).toDateString()}</p>
                <p className="text-xl dark:text-gray-600 "><span className="font-bold">Publisher Name:</span> {addedUser.addedUserName}</p>
                <p className="text-xl dark:text-gray-600 "><span className="font-bold">Publisher Email:</span> {addedUser.email}</p>
                <p className="text-xl dark:text-gray-600 "><span className="font-bold">Total Recommendation:</span> 0</p>
                {/* <p className="text-xl dark:text-gray-600 "><span className="font-bold">Price:</span>{price}</p> */}
            </div>
        </div>
    </div>
    {/*  */}
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md border dark:bg-gray-800 mt-10">
    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Recommendation</h2>

    <form onSubmit={handlerecommendation}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label className="text-gray-700 dark:text-gray-200" >Name</label>
                <input name="name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" >Title</label>
                <input name="title" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" >Image</label>
                <input name="photo" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" >Reason</label>
                <input name="reason" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
        </div>

        <div className="flex justify-end mt-6">
            <input type="submit" value="Add Recommendation" className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"/>
        </div>
    </form>
</section>
    
    </>
    );
};

export default QueryDetails;