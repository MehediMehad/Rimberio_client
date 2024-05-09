import bgimg1 from '../assets/banner-bg.png'

const Benner = () => {
    return (
<div className="hero z-40 max-w-[1460px] mx-auto " style={{backgroundImage: `url(${bgimg1})`}}>
  <div className="hero"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold">GET START</h1>
      <p className="mb-5 text-4xl">YOUR FAVRIOT SHOPING</p>
      <button className="btn w-64 bg-[#2b2a29] font-bold text-white">BUY NOW</button>
    </div>
  </div>
</div>
    );
};

export default Benner;