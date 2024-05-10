import Benner from "../../components/Benner";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";

const Home = () => {
    return (
        <div>
            <div className="h-screen mb-36">
            <Carousel></Carousel>
            <Benner></Benner>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;