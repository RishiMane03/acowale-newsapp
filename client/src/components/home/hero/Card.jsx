import React from "react";

const Card = ({ item: { image, title, source, publishedAt } }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'short', year: 'numeric' }; // 'short' for abbreviated month
    return date.toLocaleDateString('en-GB', options); // 'en-GB' for day-month-year format
  };

  const truncateTitle = (title, wordLimit) => {
    const words = title.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : title;
  };

  const isDate = formatDate(publishedAt);

  return (
    <>
      <div className="box">
        <div className="img">
          <img src={image} alt="" />
        </div>
        <div className="text">
          <span className="category">News</span>
          {/* Truncate the title to a limit of 10 words (or any number you prefer) */}
          <h1 className="titleBg">{truncateTitle(title, 8)}</h1>
          <div className="author flex">
            <span>by {source.name}</span>
            <span>{isDate}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
