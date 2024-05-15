import { useContext, useEffect, useState, } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const MyRecommendations = () => {
    const { user } = useContext(AuthContext)
    const [recomend, setRecomend] = useState([])
    useEffect(() =>{

        getData()
    },[user])

    const getData = async () =>{
        const {data} = await axios(`http://localhost:5000/recommend/${user.email}` , {withCredentials: true})
        setRecomend(data)
    }

    const handleDelete = async _id =>{
        try{
            const {data} = await axios.delete(`http://localhost:5000/deleteRecommend/${_id}`)
            console.log(data);
            toast.success('Delete Successful')
            getData()
        } catch(err) {
            console.log(err.message)
            toast.error(err.message)
        }

     }



    return (
        
        <section className='container px-4 mx-auto pt-12'>
            <div className='flex items-center gap-x-3'>
                <h2 className='text-lg font-medium text-gray-800 '>MyRecommendations</h2>

                <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
                    {recomend.length}
                </span>
            </div>

            <div className='flex flex-col mt-6'>
                <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                    <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                        <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                            <table className='min-w-full divide-y divide-gray-200'>
                                <thead className='bg-gray-50'>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            <div className='flex items-center gap-x-3'>
                                                <span>User</span>
                                            </div>
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            <button className='flex items-center gap-x-2'>
                                                <span>Title</span>
                                            </button>
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            Category
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            Date
                                            <span className="ml-16">Time</span>
                                        </th>

                                        <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='bg-white divide-y divide-gray-200 '>

                                {
                                    recomend.map(recomat => <tr key={recomat._id} >
                                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                            <div className="inline-flex items-center gap-x-3">
                            
                            
                                                <div className="flex items-center gap-x-2">
                                                    <div>
                                                        <h2 className="font-medium text-gray-800 dark:text-white ">{recomat?.recommendedUser?.recomedUser}</h2>
                                                        <p className="text-sm font-normal text-gray-600 dark:text-gray-400">{recomat?.recommendedUser?.email}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{recomat?.title}</td>
                                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{new Date(recomat?.recommendedUser?.currentTime).toDateString()}</td>
                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                            <div className="flex items-center gap-x-2">
                                                <p className="px-3 py-1 text-xs text-pink-500 rounded-full dark:bg-gray-800 bg-pink-100/60">{new Date(recomat?.recommendedUser?.currentTime).toLocaleDateString()}</p>
                                                <p className="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">{new Date(recomat?.recommendedUser.currentTime).toLocaleTimeString()}</p>
                                            </div>
                                        </td>
                                        <td className="px-2 py-4 text-sm whitespace-nowrap">
                                            <div className="flex items-center gap-x-6">
                                                <button onClick={() => handleDelete(recomat._id)}
                                                 className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                                                        <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>)
                                }







                                    {/* {
                                        recomend.map(recomat => <RementFrom key={recomat._id}
                                            recomat={recomat}
                                        ></RementFrom>)
                                    } */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
// {new Date (recomat.recommendedUser.currentDate).toLocaleTimeString()}
export default MyRecommendations;