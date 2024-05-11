import Card from "./Card";
import PropTypes from 'prop-types'; 


const LatestSection = ({queries}) => {
    console.log(queries);
    return (
        <div className="mx-auto ">
            <h1 className="text-4xl font-semibold text-center">LATEST PRODUCTS</h1>
            <h1 className="text-4xl font-semibold text-center">LATEST PRODUCTS</h1>
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
                    queries.slice(0, 8).map(querie =><Card key={querie._id}
                    querie={querie}
                    ></Card>)
                }

            </div>
            
        </div>
    );
};

LatestSection.propTypes  ={
    queries: PropTypes.array
}
export default LatestSection;