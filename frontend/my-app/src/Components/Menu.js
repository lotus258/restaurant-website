import axios from 'axios';
import React, {useEffect, useState} from 'react'
import Card from "./Card"
import "./CSS/Menu.css"

function Menu(){
    const[menu, setMenu] = useState([]);
    const[loading, setLoading] = useState(true);
    const[currentPage, setCurrentPage] = useState(1);
    const[totalPages, setTotalPages] = useState(1);
    const[error, setError] = useState("");
    const[currentCategory, setCurrentCategory] = useState("");
    const[categories, setCategories] = useState([]);
    const[selectedOrdering, setSelectedOrdering] = useState("");

    useEffect(() => {
      fetchData();
    }, [currentPage, currentCategory, selectedOrdering]);

    const fetchData = async () => {

      //User authentication
      const token = localStorage.getItem("authToken");
      if (!token) {
          console.error("Please log in first to view our secret Menu!");
          return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`http://localhost:8000/restaurant/menu?page=${currentPage}&category=${currentCategory}&ordering=${selectedOrdering}`, {
            headers: {
                Authorization: `Token ${token}`
            }
        });

        setMenu(response.data.results);
        setTotalPages(Math.ceil(response.data.count / 10));

      } catch (err) {
        setError("Error fetching data");
      }

      setLoading(false);
    };

    useEffect(() => {
      axios.get(`http://localhost:8000/restaurant/categories`)
        .then(response => setCategories(response.data))
        .catch(err => console.error("Error fetching categories", err));
    }, []);

    return (
        <>
          <div style={{display:"grid", gridTemplateColumns:"repeat(1fr, 12)"}}>
            <div className="banner">
              <h2 style={{color:"#F4CE14"}}>Menu</h2>
            </div>
          </div>

          <div style={{ display: "grid",  gridTemplateColumns:"repeat(1fr, 12)", gap:"1vw"}}>
            <select style={{gridColumn:"10/11"}} onChange={(e) => { setCurrentCategory(e.target.value); setCurrentPage(1); }} value={currentCategory}>
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category.id} value={category.title}>{category.title}</option>
                ))}
            </select>

            <select style={{gridColumn:"11/12"}}onChange={(e) => setSelectedOrdering(e.target.value)} value={selectedOrdering}>
              <option value="">Sort by</option>
              <option value="price">Price: Low to High</option>
              <option value="-price">Price: High to Low</option>
              <option value="title">Title: A to Z</option>
              <option value="-title">Title: Z to A</option>
            </select>
          </div>

          <div>
              <ul style={{ overflowY: "auto", padding: 10 }}>
                {loading && <p>Loading...</p>}
                {error && <p style={{ color: "red" }}>{error}</p>}
                <section id="special_card" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "10px",padding: "20px"}}>
                  {menu.map(item => (
                    <ul style={{color: "black", fontSize:"25px"}} key={item.id}>
                      <Card name={item.title} price={item.price} imgurl = "./assets/greek salad.jpg" />
                    </ul>
                  ))}
                </section>
              </ul>
            </div>

            <div className='page'>
                <ul>Page:</ul>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <ul key={page} onClick={() => setCurrentPage(page)} style={{ fontWeight: currentPage === page ? "bold" : "normal" }}>
                      {page}
                  </ul>
                ))}
            </div>
        </>
    );
}

export default Menu;