import {  useLoaderData } from "react-router-dom";
import Benner from "../../components/Benner";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import LatestSection from "../../components/LatestSection";
import BestSecsion from "../../components/BestSecsion";

const Home = () => {
    const queries = useLoaderData()
    return (
        <div>
            <div className="h-screen mb-20">
            <Carousel></Carousel>
            <Benner></Benner>
            </div>
            <LatestSection queries={queries}
            ></LatestSection>
            <BestSecsion></BestSecsion>
            <Footer></Footer>
        </div>
    );
};

export default Home;