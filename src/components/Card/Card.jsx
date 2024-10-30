// import { VscVerifiedFilled } from "react-icons/vsc";
import PropTypes from 'prop-types';
import Feature from "../Feature/Feature";

const Card = ({ cardData }) => {

    const { imageUrl, title, features } = cardData;

    return (
        <div className="card bg-base-100 shadow-xl">
            <img className="rounded-lg"
                src={imageUrl}
                alt="card img" />
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                </h2>
                <h2 className="">
                    {
                        features.map((feature,idx) =><Feature key={idx} feature={feature}></Feature>)
                    }
                </h2>
            </div>
            <button className="btn">Bye Now</button>
        </div>
    );
};

Card.propTypes ={
    cardData: PropTypes.object
}

export default Card;