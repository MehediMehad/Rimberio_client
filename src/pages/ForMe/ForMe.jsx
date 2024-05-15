import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const ForMe = () => {
    const { user } = useContext(AuthContext)
    const allData = useLoaderData()
    console.log(allData);
    const loginUser = allData.filter(p => p.addedUser.email != p.recommendedUser.email)
 console.log(loginUser);

    return (
        <div className="container p-2 mx-auto sm:p-4 mt-8 dark:text-gray-800">
            <h2 className="mb-4 text-2xl font-semibold leading-tight">Your Queries Recommendations</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                    <colgroup>
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col className="w-24" />
                    </colgroup>
                    <thead className="dark:bg-gray-300">
                        <tr className="text-left">
                            <th className="p-3">Recommender</th>
                            <th className="p-3">Recommit</th>
                            <th className="p-3">Reason</th>
                            {/* <th className="p-3 text-right">Amount</th>
                            <th className="p-3">Status</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loginUser.map(p => <tr key={p._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                <td className="p-3">
                                    <p>{p.recommendedUser.recomedUser}</p>
                                </td>

                                <td className="p-3">
                                    <p>{p.name}</p>
        
                                </td>
                                <td className="p-3">
                                    <p>{p.reason}</p>
                                </td>
                                {/* <td className="p-3 text-right">
                                    <p>$15,792</p>
                                </td>
                                <td className="p-3 text-right">
                                    <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                                        <span>Pending</span>
                                    </span>
                                </td> */}
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ForMe;