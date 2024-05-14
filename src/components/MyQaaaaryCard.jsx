import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from 'prop-types'; 


const MyQaaaaryCard = ({item, setItems, items}) => {
  
    const {_id} = item

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/deleteProduces/${_id}`,{
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data =>{
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                          const remainig = items.filter(itm => itm._id !== _id)
                          setItems(remainig)
                    }
                }).catch(err =>{
                    console.log(err);
                })
            }
          });
     }

    return (
        <div className="card w-96 bg-base-100  shadow-xl rounded-none border-8  col-span-4 md:col-span-2 lg:col-span-1">
            <figure><img className="h-[350px] object-cover hover:scale-105  " src={item.photo} alt="" /></figure>
            <div className="px-2">
                <h2 className="card-title mt-2 pl-2">
                    {}
                    <div className="badge badge-secondary items-center ">{ }</div>
                </h2>
                <p className="font-bold pl-2 mb-2"></p>
                <div className="card-actions gap-0 justify-around items-center">
                    <button onClick={() => handleDelete(_id )}
                        className=" mb-2 btn btn-sm right-2 text-white rounded-none w-1/3 bg-purple-600  hover:bg-[#491291]">Delete</button>
                    <Link to={`/updateQarry/${_id}`} className=" mb-2 btn btn-sm right-2 text-white rounded-none w-1/3 bg-secondary  hover:bg-[#9a1a7c]">
                        <button>Update</button>
                    </Link>
                    <Link to={`/queriDetels/${_id}`} className=" mb-2 btn btn-sm right-2 text-white rounded-none w-1/3 bg-[#f29441]  hover:bg-[#7a3a05]">View Details</Link>
                </div>
            </div>
        </div >
    );
};
MyQaaaaryCard.propTypes  ={
    items: PropTypes.array,
    setItems: PropTypes.func,
    item: PropTypes.object

}
export default MyQaaaaryCard;