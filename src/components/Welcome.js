import Ad from "./Ad";
import Creditcards from "./Creditcards";
import Profile from "./Profile";
import UpcomingBills from "./UpcomingBills";

export default function Welcome() {
    return (
        <div className="welcome">
            <Profile></Profile>
            <Ad></Ad>
            <UpcomingBills></UpcomingBills>
            <Creditcards></Creditcards>
        </div>
    );
}