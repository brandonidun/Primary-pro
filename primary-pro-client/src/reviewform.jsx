import React, { useState } from "react";

const Reviewform = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here, you can send the rating and comment data to your server or perform any other action.
    console.log("Rating:", rating);
    console.log("Comment:", comment);

    // Clear the form after submission
    setRating(0);
    setComment("");
  };

  return (
    <div className="review-form">
      <h2>Write a Review</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Rating:</label>
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((value) => (
              <span
                key={value}
                onClick={() => handleRatingChange(value)}
                className={value <= rating ? "selected" : ""}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <div>
          <label>Comment:</label>
          <textarea
            value={comment}
            onChange={handleCommentChange}
            rows="4"
            cols="50"
            placeholder="Write your review here..."
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Reviewform;
