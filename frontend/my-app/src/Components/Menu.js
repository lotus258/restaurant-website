import axios from 'axios';
import React, {useEffect, useState} from 'react'

function Menu(){
    const[menu, setMenu] = useState([]);

    useEffect(() => {
      const token = localStorage.getItem("authToken");

      if (!token) {
          console.error("No authentication token found!");
          return;
      }

        axios.get('http://localhost:8000/restaurant/menu/', {
          headers: {
            Authorization: `Token ${token}`
          }
         })
        .then (response => {
            setMenu(response.data);
          })
          .catch(error => {
            console.error("error fetching menu: ", error);
          });
    }, []);

    return (
        <div>
          <h1>Menu</h1>
          <ul>
            {menu.map(item => (
              <li style={{color: "black", fontSize:"25px"}} key={item.id}>{item.title}: {item.price}</li>
            ))}
          </ul>
        </div>
      );
}

export default Menu;