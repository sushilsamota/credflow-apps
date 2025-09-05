export default function OtpConsent({ onConsent }) {
    function handleConsent() {
        console.log("OTP consent provided - move to next screen");
        if (onConsent) onConsent();
    }

    return (
        <div className="otpconsent">
            <h2>OTP Consent</h2>
            <span>By proceeding, you agree to receive OTP on your mobile number</span><br />
            <button type="button" onClick={handleConsent}>Allow & Continue</button><br />
        </div>
    );
}