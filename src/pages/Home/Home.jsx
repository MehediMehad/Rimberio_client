import {  useLoaderData } from "react-router-dom";
import Benner from "../../components/Benner";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import LatestSection from "../../components/LatestSection";
import BestSecsion from "../../components/BestSecsion";
// import OurTeam from "../../components/OurTeam";
import ExtaBenner from "../../components/ExtaBenner";

const Home = () => {
    const queries = useLoaderData()
    return (
        <div>
            <div className="h-screen md:mb-20">
                <div className="relative">  
            <Carousel></Carousel>
                </div>
            <Benner></Benner>
            </div>
            <LatestSection queries={queries}
            ></LatestSection>
            <ExtaBenner></ExtaBenner>
            <BestSecsion></BestSecsion>
            {/* <OurTeam></OurTeam> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;