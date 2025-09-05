export default function SmsConsent({ onConsent }) {
    function handleConsent() {
        console.log("SMS consent provided - move to next screen");
        if (onConsent) onConsent();
    }

    return (
        <div className="smsconsent">
            <h2>SMS Consent</h2>
            <span>By proceeding, you agree to receive SMS from CRED and its partners</span><br />
            <button type="button" onClick={handleConsent}>Allow & Continue</button><br />
        </div>
    );
}