import Ad from "./Ad";
import Profile from "./Profile";
import UpcomingBills from "./UpcomingBills";

export default function Welcome() {
    return (
        <div className="welcome">
            <Profile></Profile>
            <Ad></Ad>
            <UpcomingBills></UpcomingBills>
        </div>
    );
}