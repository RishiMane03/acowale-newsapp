import React, { useState, useEffect } from "react";
import Side from "../../sideContent/side/Side";
import Popular from "../popular/Popular";
import "./style.css";
import axios from 'axios';

const Homes = ({ allNews }) => {
  const [selectedFilter, setSelectedFilter] = useState('');
  const [isCategory, setIsCategory] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);

  const handleCategory = async (e) => {
    const category = e.target.value;
    setSelectedFilter(category);
    if (category) {
      try {
        const response = await axios.post('http://localhost:8000/api/news/getNewsCategory', { category });
        setIsCategory(response.data.data.articles);
      } catch (error) {
        console.error('Error fetching category data:', error);
      }
    } else {
      setIsCategory([]);
    }
  };

  const openModal = (news) => {
    setSelectedNews(news);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedNews(null);
  };

  useEffect(() => {
    if (selectedFilter === '') {
      setIsCategory([]);
    }
  }, [selectedFilter]);

  return (
    <>
      <main>
        <div className='container'>
          <section className='mainContent'>
            <div className="dropDown">
              <select onChange={handleCategory} value={selectedFilter}>
                <option value="" disabled>Select the category</option>
                <option value="world">World</option>
                <option value="nation">Nation</option>
                <option value="business">Business</option>
                <option value="technology">Technology</option>
                <option value="entertainment">Entertainment</option>
                <option value="sports">Sports</option>
                <option value="science">Science</option>
                <option value="health">Health</option>
              </select>
            </div>
            <Popular
              byDefaultCategory={allNews}
              isCategory={isCategory}
              selectedFilter={selectedFilter}
              openModal={openModal}
            />
          </section>
          <section className='sideContent'>
            <Side />
          </section>
        </div>
      </main>
      {showModal && selectedNews && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{selectedNews.title}</h2>
            <img src={selectedNews.image} alt="" />
            <p>{selectedNews.content}</p>
            <p><strong>Published on:</strong> {selectedNews.date}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Homes;
