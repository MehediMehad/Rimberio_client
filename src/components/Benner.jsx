import bgimg1 from '../assets/shoping.jpg'

const Benner = () => {
    return (
<section className="bg-text-teal-100 dark:bg-gray-900 absolute -bottom-36">
    <div className=" px-6 py-10 mx-auto">
        <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
            <div className="absolute w-full -z-10 md:h-96 rounded-2xl bg-my-background object-cover" >

            </div>
            
            <div className="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                <img className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src={bgimg1} alt="client photo" />
                
                <div className="mt-2 md:mx-6">
                    <div>
                        <p className="text-xl font-medium tracking-tight text-teal-100">Unlock Your Style </p>
                        <p className="text-blue-200 ">Explore Fashions Latest Trends & Expert Advice!</p>
                    </div>

                    <p className="mt-4 text-lg leading-relaxed text-teal-100 md:text-xl"> Welcome to our fashion haven, where every click unveils a world of style, trends, and insider tips! Dive into a realm where your wardrobe dreams come to life with the latest fashion buzz and must-have essentials.</p>
                    
                    <div className="flex items-center justify-between mt-6 md:justify-start">
                    <button className="btn btn-outline bg-secondary border-blue-600 font-bold text-teal-100 hover:bg-[#f70ee4]">Queries</button>
                    </div>
                </div>
            </div>
        </main>
    </div>
</section>
    );
};

export default Benner;