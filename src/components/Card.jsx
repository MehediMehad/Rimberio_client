import PropTypes from 'prop-types';

const Card = ({ querie }) => {
  const { photo} = querie

  return (
    <div>
      <figure><img className="h-[400px] w-full object-cover " src={photo} alt="Shoes" /></figure>
      <div className="card ">
        <button className="btn bg-[#f16179] ">Details </button>
      </div>
    </div>
  );
};
Card.propTypes = {
  querie: PropTypes.object
}
export default Card;