const cardDetails = [
    { bank: "HSBC", number: "**** **** **** 1234", name: "HSBC Platinum", limit: "₹2,00,000" ,Holder:"Sushil samota"},
    { bank: "SBI", number: "**** **** **** 4567", name: "SBI SimplySAVE", limit: "₹1,50,000" },
    { bank: "IndusInd Bank", number: "**** **** **** 8910", name: "IndusInd Iconia", limit: "₹1,80,000" },
    { bank: "Axis Bank", number: "**** **** **** 1112", name: "Axis Magnus", limit: "₹2,50,000" },
    { bank: "HDFC", number: "**** **** **** 1314", name: "HDFC Regalia", limit: "₹2,20,000" }
];

export default function CardsDetails() {
    return (
        <div className="cards-details">
            <h2>Card Details</h2>
            <p>Here you can view and manage your card details.</p>
            <div className="cards-list">
                {cardDetails.map((card, idx) => (
                    <div key={idx} className="card-item">
                        <h3>{card.bank}</h3>
                        <p>{card.name}</p>
                        <p>Card Number: {card.number}</p>
                        <p>Limit: {card.limit}</p>
                        <p>Card Holder: {card.Holder}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
