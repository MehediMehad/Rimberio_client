import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";

const QueryDetails = () => {

    const {user} = useContext(AuthContext)

    const [recomentData, setRecomentData] = useState([])
    
    const items = useLoaderData()
	const { id } = useParams()
	const item = items.find(item => item?._id == id)
	const {  name, brand, category, photo, productTitle, publisDate, addedUser, remendProdutId  } = item
    console.log(addedUser);

	useEffect(() => {
		window.scroll(0, 0)
	}, [])
	// const item = query.find(item => item?._id == id)
	// const { _id, name, brand, category, photo, productTitle, publisDate, addedUser } = query

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`assignment-eleven-server-chi-two.vercel.app/myProduces/${addedUser.email}`)
            setRecomentData(data)
        }
        getData()

    }, [user])


    const handlerecommendation = async e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const title = form.title.value;
        const photo = form.photo.value;
        const reason = form.reason.value;


        const recommendationInfo = {
            remendProdutId,
            name,
            title,
            photo,
            reason,
            addedUser,
            recommendedUser:{
                email: user?.email,
                recomedUser: user?.displayName,
                recomedUserPhoto: user?.photoURL,
                currentDate: new Date().toISOString(),
                currentTime: new Date().toISOString(),
            }

        }
        console.log(recommendationInfo);
        try{
            const {data} = await axios.post('assignment-eleven-server-chi-two.vercel.app/recommend', recommendationInfo)
            console.log(data)
            
        } catch (err) {
            console.log(err);
        }

        document.getElementById('myForm').reset();
    }

	useEffect(() => {
		window.scroll(0, 0)
	}, [])



    return (
        <>
        <div className="md:flex">
        <div className="lg:flex lg:flex-col lg:mx-10 p-6 space-y-6 overflow-hidden mt-20 rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
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

    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md border dark:bg-gray-800 mt-10">
    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Recommendation</h2>

    <form id='myForm' onSubmit={handlerecommendation}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label className="text-gray-700 dark:text-gray-200" >Product Name</label>
                <input name="name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" >Title</label>
                <input name="title" type="text" required className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" >Image</label>
                <input name="photo" type="text" required className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200"  >Reason</label>
                <input name="reason" type="text" required className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
        </div>

        <div className="flex justify-end mt-6">
            <input type="submit" value="Add Recommendation" className="px-8 py-2.5 leading-5 cursor-pointer text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"/>
        </div>
    </form>
</section>
    </div>
    {/*  */}
    {
        recomentData.map(p => <div key={p._id} className="ml-20">
        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
        <tr>
            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div className="inline-flex items-center gap-x-3">


                    <div className="flex items-center gap-x-2">
                        <img className="object-cover w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                        <div>
                            <h2 className="font-medium text-gray-800 dark:text-white ">Arthur Melo</h2>
                            <p className="text-sm font-normal text-gray-600 dark:text-gray-400">@authurmelo</p>
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                    <h2 className="text-sm font-normal text-emerald-500">Active</h2>
                </div>
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Design Director</td>
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">authurmelo@example.com</td>
            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div className="flex items-center gap-x-2">
                    <p className="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">Design</p>
                    <p className="px-3 py-1 text-xs text-blue-500 rounded-full dark:bg-gray-800 bg-blue-100/60">Product</p>
                    <p className="px-3 py-1 text-xs text-pink-500 rounded-full dark:bg-gray-800 bg-pink-100/60">Marketing</p>
                </div>
            </td>
            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div className="flex items-center gap-x-6">
                    <button className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                            <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </button>
                </div>
            </td>
        </tr>
    </tbody>
    </div>)
    }
    {/* <RecoCard></RecoCard> */}
    </>
    );
};

export default QueryDetails;