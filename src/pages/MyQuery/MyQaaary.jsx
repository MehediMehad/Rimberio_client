import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyQaaaaryCard from "../../components/MyQaaaaryCard";
import axios from "axios";


const MyQaaary = () => {
    const { user } = useContext(AuthContext)
    const [items, setItems] = useState([])
    

    useEffect(() =>{
        const getData = async () => {
            const {data} = await axios (`http://localhost:5000/myProduces/${user?.email}`)
            setItems(data)
        }
        getData()

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