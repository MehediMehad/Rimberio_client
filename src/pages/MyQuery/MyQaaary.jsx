import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyQaaaaryCard from "../../components/MyQaaaaryCard";


const MyQaaary = () => {
    const { user } = useContext(AuthContext)
    const [loItems, setloItems] = useState([])
    const [items, setItems] = useState(loItems)

    // const qaraay = useLoaderData()
    // const filt = qaraay.filter(p => p.addedUser.email === user.email)

    useEffect(() =>{
        fetch(`http://localhost:5000/myProduces/${user?.email}`)
        .then((res) => res.json())
        .then((data) =>{
            setItems(data)
        })
    },[user])


    return (
        <div className=" gap-10 lg:mx-24 grid grid-cols-4 my-5" >


            {
                items.map(item => <MyQaaaaryCard key={item._id}
                    item={item}
                    items={items}
                    setItems={setItems}
                ></MyQaaaaryCard>)
}
</div >
    );
};

export default MyQaaary;