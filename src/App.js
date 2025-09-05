import { useState } from 'react';
import './App.css';
import OtpConsent from './components/OtpConsent';
import SmsConsent from './components/SmsConsent';
import Welcome from './components/Welcome';
import Yourmobile from './components/Yourmobile';

function App(props) {
  const [appName] = useState("credflow apps");
  const [mobile] = useState("9999999999");
  const [step, setStep] = useState(1);

  function handleMobileConsent() {
    setStep(2); // Move to SMS  screen
  }

  function handleSmsConsent() {
    setStep(3); // Move to OTP  screen
  }

  function handleOtpConsent() {
    setStep(4); // Move to  screen
  }

  return (
    <div className="App">
      <h6>Welcome to {appName} -its clone app of cred apps -POC</h6>
      {step === 1 && <Yourmobile data={mobile} onConsent={handleMobileConsent} />}
      {step === 2 && <SmsConsent onConsent={handleSmsConsent} />}
      {step === 3 && <OtpConsent onConsent={handleOtpConsent} />}
      {step === 4 && <Welcome />}
    </div>
  );
}

export default App;
