import { useState } from "react";
import CardsDetails from "./CardsDetails";

export default function Creditcards() {
    const [showDetails, setShowDetails] = useState(false);

    const handleButtonClick = () => {
        setShowDetails(true);
    };

    return (
        <div className="creditcards">
            <h2>Your Credit Cards</h2>
            {showDetails && <CardsDetails />}
            <button onClick={handleButtonClick}>Show Cards</button>
        </div>
    );
}