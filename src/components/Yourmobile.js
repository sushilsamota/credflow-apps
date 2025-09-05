export default function Yourmobile({ data,onConsent }) {

    function nextScreen() {
       console.log("your mobile consent is provided -move to next screen");
       if (onConsent) onConsent();// call the function passed from props.
    }
       
    return (
        <div className="yourmobile">
            <h2>Your Mobile Number {data}</h2>
            <input type="text" placeholder="Enter your mobile number" /><br />
            <span>Allow cred to access your credit information from RBI-approved Agencies</span><br />
            <button type="button" onClick={nextScreen}>Setup your membership</button><br />
        </div>
    );
}