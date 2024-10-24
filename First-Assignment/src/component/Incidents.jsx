import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const IncidentsItems = [
  { id: 1, img: "img/Rectangle 42010.png", name: "Whitechapel Rd.", aria: "Tulare County, Los Angeles, CA 23415", price: "$1,456,654.00" },
  { id: 2, img: "img/Rectangle 42010 (1).png", name: "Whitechapel Rd.", aria: "Tulare County, Los Angeles, CA 23415", price: "$1,456,654.00" },
  { id: 3, img: "img/Group 1171276280.png", name: "Whitechapel Rd.", aria: "Tulare County, Los Angeles, CA 23415", price: "$1,456,654.00" },
  { id: 4, img: "img/Rectangle 42010 (2).png", name: "Whitechapel Rd.", aria: "Tulare County, Los Angeles, CA 23415", price: "$1,456,654.00" },
  { id: 5, img: "img/Rectangle 42010 (3).png", name: "Whitechapel Rd.", aria: "Tulare County, Los Angeles, CA 23415", price: "$1,456,654.00" },
  { id: 6, img: "img/Rectangle 42010 (4).png", name: "Whitechapel Rd.", aria: "Tulare County, Los Angeles, CA 23415", price: "$1,456,654.00" },
];

function Incidents() {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    setData(IncidentsItems);
    setCollection([...new Set(IncidentsItems.map((item) => item.name))]);
  }, []);

  const gallery_filter = (itemData) => {
    const filterData = IncidentsItems.filter((item) => item.name === itemData);
    setData(filterData);
  };

  return (
    <div className="App mt-60 ">
      <div className="galleryWrapper">
        <div className="galleryContainer">
          {data.map((item) => (
            <div key={item.id} className="galleryItem">
              <img src={item.img} alt={item.name} />
              {item.name},<br />
              {item.aria}<br />
              {item.price}
            </div>
          ))}
        </div>

        <div className="filterItem">
          <ul>
            <li><button onClick={() => setData(IncidentsItems)}></button></li>
            {collection.map((item) => (
              <li key={item}><button onClick={() => { gallery_filter(item) }}>{item}</button></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Incidents;
