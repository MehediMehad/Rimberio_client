import { Link, useLoaderData, useParams } from "react-router-dom";

const Queries = () => {
    const queries = useLoaderData()
    const { id } = useParams()
    console.log(id);
    console.log(queries);
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
                    <figure><img className="h-[300px]  object-cover " src={p.photo} alt="Shoes" /></figure>
                    <div className="card ">
                      <h1></h1>
                      <Link to={`/queriDetels/${p._id}`}  className="btn bg-[#f16179] "> Recommend </Link>
                    </div>
                  </div>)
                }

            </div>
    );
};

export default Queries;