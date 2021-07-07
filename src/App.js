import React from "react";
import "./gallery.css";
import Data from "./contact_card.json";
import State, { useState } from "react";

function App() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = allData.filter((data) => {
      return data.title.search(value) != -1;
    });
    setFilteredData(result);
  };

  return (
    <div className="App">
      <div className="search">
        <input
          type="text"
          placeholder="Search People..."
          onChange={(event) => handleSearch(event)}
        />
      </div>

      {filteredData.map((post) => {
        return <p>{post.NAME}</p>;
        return <p>{post.LOCATION}</p>;

      })}

      <div className="post">
        {Data.map((post) => {
          return (
            <div className="card">
              <div className="card_header">
                <div className="title">{post.NAME}</div>
                <div className="card_image">
                  <img src={post.PHOTO} />
                </div>
                <i class="fa fa-map" aria-hidden="true"></i>
                {post.LOCATION}
                <br></br>
                <i class="fa fa-cake" aria-hidden="true"></i>
                {post.DOB}
              </div>
              <div className="card_body">
                <p>{post.DESCRIPTION}</p>
              </div>
              <div className="card_footer">
                {post.PHONE}

                <br></br>
                {post.EMAIL}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
