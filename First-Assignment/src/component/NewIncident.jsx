import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NewIncidentItem = [
  {
    img: "public/img/Frame.png",
    name: "What type of incident?",
    para: "Choose the category that best describes the incident.",
  },
  {
    img: "img/Frame (1).png",
    name: "Tell us about the incident?",
    para: "Let’s connect the dots and see where to start.",
  },
  {
    img: "img/Frame (2).png",
    name: "Where did the incident occur?",
    para: "Lorem ipsum dolor sit general sac mascho werho",
  },
];

function NewIncident() {
  const location = useLocation();
  const navigate = useNavigate();


  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    setData(NewIncidentItem);
    setUser([...new Set(NewIncidentItem.map((item) => item.DataTransferItemList))]);
  }, []);

  const gallery_filter = (itemData) => {
    const filterData = NewIncidentItem.filter((item) => item.name === itemData);
    setData(filterData);
  };

  return (
    <div className="App mt-10 sm:mt-16 lg:mt-24 px-4">
      <div className="text-center mb-6">
        <h1 className='text-2xl font-semibold mt-2 mb-4'>Let’s get started</h1>
        <p className='text-sm text-gray-600'>Lorem ipsum dolor sit general sac mascho werho Lorem ipsum dolor sit general sac mascho werho.</p>
      </div>
      
      <div className="grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-3 gap-4">
        {data.map((item, index) => (
           <div key={item.id} className="galleryItem flex flex-col items-center border p-2 rounded-lg">
           <img src={item.img} alt="" className="mb-2 items-center" />
           <div className="text-center">
             <p className="font-semibold text-2xl mb-2">{item.name}</p>
             <p>{item.para}</p>
             
           </div>
         </div>
        ))}
      </div>

      <div className="mt-6">
        <ul className="flex flex-wrap gap-2 justify-center">
          <li>
            <button onClick={() => setData(NewIncidentItem)} ></button>
          </li>
          {user.map((item) => (
            <li key={item}>
              <button onClick={() => gallery_filter(item)}> {item} </button>
            </li>
          ))}
           {
          location.pathname === "/newincident/new" ? (
            <button onClick={() => navigate("/newincident/new/data")} className='bg-[#F26922] hover:bg-blue-600 py-4 px-4 transition-all duration-300 rounded-md border border-gray-300 text-[#A1A1AA]'>
             Get started
            </button>
          ) : (
            <button className='bg-[#F26922] hover:bg-blue-600 py-2 px-4 transition-all duration-300 rounded-md border border-gray-300 text-[#A1A1AA]'>
              Get started
            </button>
          )
        }
        </ul>
      </div>
    </div>
  );
};

export default NewIncident;
