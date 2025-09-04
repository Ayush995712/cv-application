import { useState } from 'react';
import { PersonalDetails } from './content/PersonalDetails';
import { CV } from './cv/cv';
import { Education } from './content/Education';
import './App.css';

function App() {
  const [showContent, setShowContent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [address, setAddress] = useState('');
  const [college, setCollege] = useState('');
  const [degree, setDegree] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('');

  return (
    <>
    <div className='flex gap-[24px]'>
      <div className='sidebar bg-amber-700 flex flex-col h-[120px] w-[100px] box-border p-[6px] text-white gap-[2px] rounded-md'>
        <button className='h-[50px] cursor-pointer' onClick={() => {
          setShowContent(!showContent);
        }}>Content</button>
        <button className='h-[50px] cursor-pointer'>Customize</button>
      </div>
      <div className='flex flex-col gap-[10px]'>
        <div className='min-w-[400px] min-h-[300px]'>
          {showContent && <PersonalDetails name={name} setName={setName} email={email} setEmail={setEmail} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} address={address} setAddress={setAddress} />}
        </div>
        <div className='min-w-[400px] min-h-[300px]'>
          {showContent && <Education college={college} setCollege={setCollege} degree={degree} setDegree={setDegree} startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} location={location} setLocation={setLocation} />}
        </div>
      </div>
      <div className='main-cv'>
        <CV name={name} email={email} phoneNumber={phoneNumber} address={address} college={college} degree={degree} startDate={startDate} endDate={endDate} location={location} />
      </div>
    </div>
    </>
  )
}

export default App
