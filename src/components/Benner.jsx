import { Link } from 'react-router-dom';
import bgimg1 from '../assets/shoping.jpg'

const Benner = () => {
    return (
<section className="absolute md:-bottom-36">
    <div className=" px-6 md:py-10 mx-auto">
        <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
            <div className="absolute w-full -z-10 md:h-96 rounded-2xl object-cover" style={{backgroundImage: 'url(https://i.ibb.co/HgmfBYK/black-friday-elements-assortment.jpg)'}} >

            </div>
            
            <div className="w-full p-6  md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                <img className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src={bgimg1} alt="client photo" />
                
                <div className="mt-2 md:mx-6">
                    <div>
                        <p className="text-4xl mb-3 font-medium tracking-tight ">Unlock Your Style </p>
                        <p className="text-2xl">Buy verified products of your choice and also help others with real information</p>
                    </div>

                    <p className="mt-4 text-lg leading-relaxed  md:text-xl"> Welcome to our fashion haven, where every click unveils a world of style, trends, and insider tips! Dive into a realm where your wardrobe dreams come to life with the latest fashion buzz and must-have essentials.</p>
                    
                    <div className="flex items-center justify-between mt-6 md:justify-start">
                    <Link to='/queries' className="btn btn-outline bg-secondary border-blue-600 font-bold  hover:bg-[#f70ee4]">Queries</Link>
                    </div>
                </div>
            </div>
        </main>
    </div>
</section>
    );
};

export default Benner;