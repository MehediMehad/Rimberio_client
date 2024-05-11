import { useContext, useEffect, useState} from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const MyQuery = () => {

    const {user} = useContext(AuthContext)
    const [myQuery, setMyQuery] = useState([])
    console.log(myQuery);

    const url = `http://localhost:5000/produces?email=${user.email}`

    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data =>
             setMyQuery(data)
        )
    } ,[])


    
    return (
        <div className=" gap-10 lg:mx-24 grid grid-cols-4 my-5" >
        {
            myQuery.map(p => <div key={p._id} className="card w-96 bg-base-100  shadow-xl rounded-none border-8  col-span-4 md:col-span-2 lg:col-span-1">
                <figure><img className="h-[350px] object-cover hover:scale-105  " src={p?.photo} alt="" /></figure>
                <div className="px-2">
                    <h2 className="card-title mt-2 pl-2">
                        {p?.name}
                        <div className="badge badge-secondary items-center ">{}</div>
                    </h2>
                    <p className="font-bold pl-2 mb-2"></p>
                    <div className="card-actions gap-0 justify-around items-center">
                        <button onClick={() => (p._id)}
                            className=" mb-2 btn btn-sm right-2 text-white rounded-none w-1/3 bg-purple-600  hover:bg-[#491291]">Delete</button>
                        <Link to={`/update/${p._id}`} className=" mb-2 btn btn-sm right-2 text-white rounded-none w-1/3 bg-secondary  hover:bg-[#9a1a7c]">
                            <button>Update</button>
                        </Link>
                        <Link to={`/queriDetels/${p._id}`} className=" mb-2 btn btn-sm right-2 text-white rounded-none w-1/3 bg-[#f29441]  hover:bg-[#7a3a05]">View Details</Link>
                    </div>
                </div>
            </div>)
        }
    </div>
    );
};

export default MyQuery;