import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const Queries = () => {
  const queries = useLoaderData()
  const { id } = useParams()
  console.log(id);
  console.log(queries, 'fgfg');

  const [need, setNeed] = useState('')

  const filteredProucts = queries.filter((product) => product.name.toLowerCase().includes('Denim'))
  console.log(filteredProucts);
  return (
    <>
      <form className="from-current mx-3 mt-10 lg:mx-40">
      <label className="input input-bordered flex items-center gap-2">
        <input onChange={(e) => setNeed(e.target.value.toLocaleLowerCase())}
         type="text" className="grow" placeholder="Search" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
      </label>
      </form>
      <div className="grid grid-cols-4 my-10 gap-5 lg:mx-40">
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
          queries.filter((product) => product.name.toLowerCase().includes(need)).map(p => <div key={p._id} className="card card-compact bg-base-100 shadow-xl p-x-5 col-span-4 md:col-span-2 lg:col-span-1 ">
            <figure><img className="h-[300px]  object-cover " src={p.photo} alt="Shoes" /></figure>
            <div className="card ">
              <h1 className="font-bold text-2xl text-center">{p.name.slice(0, 14)}</h1>
              <Link to={`/queriDetels/${p._id}`} className="btn bg-[#f16179] "> Recommend </Link>
            </div>
          </div>)
        }

      </div>


    </>
  );
};

export default Queries;