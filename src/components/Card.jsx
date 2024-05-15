import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ querie }) => {
  const {_id, photo} = querie

  return (
    <div className='col-span-4 md:col-span-2 lg:col-span-1'>
      <figure><img className=" lg:h-[400px] w-full object-cover " src={photo} alt="Shoes" /></figure>
      <div className="card ">
        <Link to={`/queriDetels/${_id}`} className="btn bg-[#f16179] ">Details </Link>
      </div>
    </div>
  );
};
Card.propTypes = {
  querie: PropTypes.object
}
export default Card;