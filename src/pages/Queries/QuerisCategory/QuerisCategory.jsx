import { Link } from "react-router-dom";

const QuerisCategory = ({queries, setNeed}) => {
    console.log(queries ,'from men');



    const handleMen = ()=>{
        setNeed('men')
    }
    const handlewomen = ()=>{
        setNeed('womans')
    }
    const handlekids = ()=>{
        setNeed('kids')
    }
    const handleAll = ()=>{
        setNeed('')
    }


    return (

        <div className="max-w-7xl mx-auto my-9">

            <button onClick={handleAll}
             className="w-14 mr-14 -ml-28">
                <img src={'https://i.ibb.co/XjMcM9R/all.png'} alt="woman" />
            </button>

            <button onClick={handlewomen}
             className="w-14 mr-14">
                <img src={'https://i.ibb.co/LJ4cfnM/woman.png'} alt="woman" />
            </button>

            <button onClick={handleMen}
            className="w-14">
                <img src={'https://i.ibb.co/Y3Lk4bj/man.png'} alt="Men" />
            </button>

            <button onClick={handlekids}
            className="w-14 mx-14">
                <img src={'https://i.ibb.co/RvsK8YH/boy.png'} alt="kids" />
            </button>

        </div>
    );
};

export default QuerisCategory;