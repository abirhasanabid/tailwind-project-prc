import PropTypes from 'prop-types';
const Feature = ({feature}) => {
    return (
        <div>
            <h2>{feature}</h2>
        </div>
    );
};

Feature.propTypes ={
    feature: PropTypes.string
}

export default Feature;