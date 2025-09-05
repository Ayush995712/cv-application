import { useState } from 'react';
import { PersonalDetails } from './content/PersonalDetails';
import { CV } from './cv/cv';
import { Education } from './content/Education';
import './App.css';

function App() {
  const [showContent, setShowContent] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [college, setCollege] = useState('');
  const [degree, setDegree] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('');
  const [loadExample, setLoadExample] = useState(true);

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
        <div className='flex gap-[8px] bg-[beige] p-[8px] justify-center rounded-lg'>
          <div className='flex justify-center items-center grow cursor-pointer box-border' onClick={() => {
            setLoadExample(false)
          }}>Clear Example</div>
          <div className='flex justify-center items-center grow cursor-pointer box-border' onClick={() => {
            setLoadExample(true)
          }} >Load Example</div>
        </div>
        {loadExample ? <div>
          {showContent && <PersonalDetails name={name} setName={setName} email={email} setEmail={setEmail} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} address={address} setAddress={setAddress} loadExample={loadExample} />}
        </div> : <div>
          {showContent && <PersonalDetails name={name} setName={setName} email={email} setEmail={setEmail} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} address={address} setAddress={setAddress} />}
        </div>}
        {loadExample ? <div>
          {showContent && <Education college={college} setCollege={setCollege} degree={degree} setDegree={setDegree} startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} location={location} setLocation={setLocation} />}
        </div> : <div>
          {showContent && <Education college={college} setCollege={setCollege} degree={degree} setDegree={setDegree} startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} location={location} setLocation={setLocation} />}
        </div>}
      </div>
      <div className='main-cv'>
        {loadExample ? <CV name={"Jon Doe"} email={"jondoe12@gmail.com"} phoneNumber={"+91 7898234782"} address={"Durgapur, West Bengal"} college={college} degree={degree} startDate={startDate} endDate={endDate} location={location} /> : <CV name={name} email={email} phoneNumber={phoneNumber} address={address} college={college} degree={degree} startDate={startDate} endDate={endDate} location={location} />}
      </div>
    </div>
    </>
  )
}

export default App
