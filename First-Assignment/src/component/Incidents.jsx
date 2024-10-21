import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const IncidentsItems = [
  { id:1,
    img: "img/Rectangle 42010.png",
    name: "Whitechapel Rd.",
    aria: "Tulare County,  Los Angles, CA 23415",
    price: "$1,456,654.00",
  },
  { id:2,
    img: "img/Rectangle 42010 (1).png",
    name: "Whitechapel Rd.",
    aria: "Tulare County,  Los Angles, CA 23415",
    price: "$1,456,654.00",
  },
  { id:3,
    img: "img/Group 1171276280.png",
    name: "Whitechapel Rd.",
    aria: "Tulare County,  Los Angles, CA 23415",
    price: "$1,456,654.00",
  },
  { id:4,
    img: "img/Rectangle 42010 (2).png",
    name: "Whitechapel Rd.",
    aria: "Tulare County,  Los Angles, CA 23415",
    price: "$1,456,654.00",
  },
  { id:5,
    img: "img/Rectangle 42010 (3).png",
    name: "Whitechapel Rd.",
    aria: "Tulare County,  Los Angles, CA 23415",
    price: "$1,456,654.00",
  },
  { id:6,
    img: "img/Rectangle 42010 (4).png",
    name: "Whitechapel Rd.",
    aria: "Tulare County,  Los Angles, CA 23415",
    price: "$1,456,654.00",
  },
  
]



function Incidents() {
  const[data, setData] = useState([]);
  const[collection, setCollection] = useState([]);

  useEffect(()=>{
    setData(IncidentsItems);
    setCollection([...new Set(IncidentsItems.map((item)=> item.name))])
  }, [])
  console.log(data);
  return (
    
    <>
    <div className='container mt-96 gap-10 flex'>
      <div className='filterItem'>
        {
          collection.map((item)=> <li><button>{item}</button></li>)
        }
      </div>
      <div>
        {
          data.map((item)=> <img src={item.img} key={item.id}/>)
        }
      </div>
    </div>
   
    
    
    
    </>
  );
};

export default Incidents;