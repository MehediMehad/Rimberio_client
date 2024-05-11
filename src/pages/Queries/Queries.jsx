import { useLoaderData } from "react-router-dom";

const Queries = () => {
    const queries = useLoaderData()
    return (
        <div className="grid grid-cols-4 my-10 gap-5 mx-40">
                {/* <div className="col-span-1">
                <Card></Card>
                </div>
                <div className="col-span-1">
                <Card></Card>
                </div>
                <div className="col-span-1">
                <Card></Card>
                </div>
                <div className="col-span-1">
                <Card></Card>
                </div> */}
                {
                    queries.map(p => <div key={p._id} className="card col-span-1 card-compact bg-base-100 shadow-xl p-x-5 ">
                    <figure><img className="h-[400px] w-full object-cover " src={p.photo} alt="Shoes" /></figure>
                    <div className="card ">
                      <button className="btn bg-[#f16179] ">Details </button>
                    </div>
                  </div>)
                }

            </div>
    );
};

export default Queries;