import React from "react";
import "./Popular.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../../../common/heading/Heading";

const Popular = ({ byDefaultCategory, isCategory, selectedFilter, openModal, searchValueData }) => {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 2,
    speed: 500,
    rows: 5,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 4,
        },
      },
    ],
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
  };

  // Determine which data to display: search results, category, or default news
  const newsData = 
    searchValueData.length > 0 ? searchValueData : 
    isCategory.length > 0 ? isCategory : 
    byDefaultCategory;

  return (
    <section className='popular'>
      <Heading title='Popular' />
      <div className='content'>
        <Slider {...settings}>
          {newsData.map((val) => (
            <div className='items' key={val.id} onClick={() => openModal(val)}>
              <div className='box shadow'>
                <div className='images row'>
                  <div className='img'>
                    <img src={val.image} alt='' />
                  </div>
                  <div className='category category1'>
                    <span>{selectedFilter || (isCategory.length > 0 ? 'Category' : 'General')}</span>
                  </div>
                </div>
                <div className='text row'>
                  <h1 className='title'>{val.title.slice(0, 40)}...</h1>
                  <div className='date'>
                    <i className='fas fa-calendar-days'></i>
                    <label>{formatDate(val.publishedAt)}</label>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* News Ticker */}
      <div className='news-ticker'>
        <div className='ticker-wrapper'>
          <div className='ticker'>
            {newsData.map((val) => (
              <span className='ticker-item' key={val.id}>
                {val.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;
