import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
    const [cardsData, setCardData] = useState([]);

    useEffect(() => {
        fetch('/gym.json')
        .then(res => res.json())
        .then(data => setCardData(data))
    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {
                cardsData.map(cardData => <Card key={cardData.id} cardData={cardData}></Card>)
            }
        </div>
    );
};

export default Cards;