import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyQaaaaryCard from "../../components/MyQaaaaryCard";
import axios from "axios";
import { Link } from "react-router-dom";


const MyQaaary = () => {
    const { user } = useContext(AuthContext)
    const [items, setItems] = useState([])
    // const [noData, setNodata] = useState(true)

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`https://assignment-eleven-server-chi-two.vercel.app/myProduces/${user?.email}`)
            setItems(data)
        }
        getData()

    }, [user])


    return (
        <> <div className="hero min-h-[300px] w-8/12 mx-auto mt-2" style={{backgroundImage: 'url(https://i.ibb.co/HgmfBYK/black-friday-elements-assortment.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="md:max-w-[600px]">
            <p className="mb-5 font-semibold md:text-3xl">Buy verified products of your choice and also help others with real information</p>
            <Link className="btn btn-primary">Queries</Link>
          </div>
        </div>
      </div>

        <>{items.length > 1 ? <>

            <div className=" gap-10 lg:mx-24 grid grid-cols-4 my-5" >


                {
                    items.map(item => <MyQaaaaryCard key={item._id}
                        item={item}
                        items={items}
                        setItems={setItems}
                    ></MyQaaaaryCard>)
                }
            </div >

        </> : <>
    
                    <div className="md:mx-40 text-center mt-10 p-3">
                        <h1 className="mb-5 text-3xl font-bold">You have not submitted any data <br /> here now if there is a query click here</h1>
                        <Link to='/addProduct' className="btn btn-primary">Add Query</Link>
                    </div>
        </>


        }

        </>
        </>
    );
};

export default MyQaaary;