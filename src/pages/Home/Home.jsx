import {  useLoaderData } from "react-router-dom";
import Benner from "../../components/Benner";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import LatestSection from "../../components/LatestSection";

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
            <Footer></Footer>
        </div>
    );
};

export default Home;