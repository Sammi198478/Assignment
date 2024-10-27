
import React, { useEffect, useState } from 'react';


const NewIncidentDataItem = [
  {
    img: "img/Group.png",
    name: "Avalanche",
  },
  {
    img: "img/fi_9502782.png",
    name: "Biological",
  },
  {
    img: "img/Line.png",
    name: "Blizzard",
  },
  {
    img: "img/Group (1).png",
    name: "Cold/Freezing",
  },
  {
    img: "img/fi_533057.png",
    name: "Drought",
  },
  {
    img: "img/Vector (1).png",
    name: "Earthquake",
  },
  {
    img: "img/fi_106063.png",
    name: "Flooding",
  },
  {
    img: "img/fi_66275.png",
    name: "Heat Wave",
  },
  {
    img: "img/Icon.png",
    name: "Hail",
  },
  {
    img: "img/fi_9502782.png",
    name: "Lightning",
  },
  {
    img: "img/Vector (2).png",
    name: "Man Made",
  },
  {
    img: "img/fi_3496215.png",
    name: "Mudslide",
  },
  {
    img: "img/Vector (3).png",
    name: "Severe Storm",
  },
  {
    img: "img/Vector (3).png",
    name: "Strong Wind",
  },
  {
    img: "img/fi_3682921.png",
    name: "Tornado",
  },
  {
    img: "img/fi_533077.png",
    name: "Tsunami",
  },
  {
    img: "img/fi_10567288.png",
    name: "Volcanic Eruption",
  },
  {
    img: "img/fi_3661746.png",
    name: "Wildfire",
  },
 
];




function NewIncidentData() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    setData(NewIncidentDataItem);
    setUser([...new Set(NewIncidentDataItem.map((item) => item.DataTransferItemList))]);
  }, []);

  const gallery_filter = (itemData) => {
    const filterData = NewIncidentDataItem.filter((item) => item.name === itemData);
    setData(filterData);
  };

  return (
    <>
      <Nav3 />
      <div className="App mt-10 sm:mt-16 lg:mt-24 px-4">
        <div className="text-center mb-6">
          <h1 className='text-2xl font-semibold mt-2 mb-4'>Which of these best describes the incident?</h1>
        </div>
        
        <div className="grid grid-cols-4 sm:grid-cols-1 lg:grid-cols-3 gap-4">
          {data.map((item, index) => (
            <div key={index} className="border rounded-lg p-4 flex flex-col items-center text-center shadow hover:shadow-lg transition-shadow duration-300">
              <img src={item.img} alt={item.name} className="mb-2 w-full h-auto rounded" />
              <h2 className="font-bold text-2xl mb-2">{item.name}</h2>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <ul className="flex flex-wrap gap-2 justify-center">
            <li>
              <button onClick={() => setData(NewIncidentDataItem)} className="bg-blue-500 text-white py-2 px-4 rounded-md transition duration-200">Show All Incidents</button>
            </li>
            {user.map((item) => (
              <li key={item}>
                <button onClick={() => gallery_filter(item)} className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md transition duration-200 hover:bg-gray-300">{item}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

    
  
  


export default NewIncidentData;