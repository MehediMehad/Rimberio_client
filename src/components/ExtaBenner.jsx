import { Link } from "react-router-dom";

const ExtaBenner = () => {
	return (
<div className="hero h-[500px] mb-10" style={{backgroundImage: 'url(https://i.ibb.co/41rF55b/colorful-empty-shopping-bags-purple-background.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold">Buy verified products of your choice and also help others with real information</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
       <Link to='/queries' className="btn btn-outline bg-secondary border-blue-600 font-bold  hover:bg-[#f70ee4]">Queries</Link>
    </div>
  </div>
</div>
	);
};

export default ExtaBenner;