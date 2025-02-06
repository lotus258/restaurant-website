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
          <div className="banner">
            <h2 style={{color:"#F4CE14"}}>Menu</h2>
        </div>
        <div>
          <ul>
            {menu.map(item => (
              <li style={{color: "black", fontSize:"25px"}} key={item.id}>{item.title}: {item.price}</li>
            ))}
          </ul>
          </div>
        </div>
      );
}

export default Menu;