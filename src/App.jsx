import { useState } from 'react';
import { PersonalDetails } from './content/PersonalDetails';
import { CV } from './cv/cv';
import './App.css';

function App() {
  const [showContent, setShowContent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [address, setAddress] = useState('');

  return (
    <>
    <div className='flex gap-[12px]'>
      <div className='sidebar bg-amber-700 flex flex-col h-[120px] w-[100px] box-border p-[6px] text-white gap-[2px] rounded-md'>
        <button className='h-[50px] cursor-pointer' onClick={() => {
          setShowContent(true);
        }}>Content</button>
        <button className='h-[50px] cursor-pointer'>Customize</button>
      </div>
      <div>
        {showContent && <PersonalDetails name={name} setName={setName} email={email} setEmail={setEmail} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} address={address} setAddress={setAddress} />}
      </div>
      <div className='main-cv'>
        <CV name={name} email={email} phoneNumber={phoneNumber} address={address} />
      </div>
    </div>
    </>
  )
}

export default App
