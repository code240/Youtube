import React, { useState } from "react";
import "./CSS/Body.css";
import Card from "./Card";
import Yt_Data from "./Data/Youtube-Data";

function Body() {
  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };
  let shuffled = shuffle(Yt_Data);
  const [myVideos, setmyVideos] = useState(shuffled);

  const filter_category = (array) => {
    let i = 0,
      cat,
      list = [],
      len_cat,
      object = [];
    while (i < array.length) {
      var l = [],
        s = 0;
      cat = array[i].tags;
      // console.log(array[i].title);
      l = cat.split(",");
      len_cat = l.length;
      while (s < len_cat) {
        if (!list.includes(l[s])) {
          list.push(l[s]);
        }
        s = s + 1;
      }
      i = i + 1;
    }
    i = 0;
    while (i < list.length) {
      object.push({ catName: list[i] });
      if (i === 25) {
        break;
      }
      i = i + 1;
    }
    return object;
  };
  let categorey_array = filter_category(shuffled);
  const [myCats] = useState(categorey_array);
  function related_videos(x, array) {
    const active_handler = (y) => {
      let q = 0;
      if (y === "All") {
        document.getElementById(y).classList.add("active-category");
        while (q < myCats.length) {
          document
            .getElementById(myCats[q].catName)
            .classList.remove("active-category");
          q = q + 1;
        }
        return true;
      }
      while (q < myCats.length) {
        if (myCats[q].catName === y) {
          document.getElementById(y).classList.add("active-category");
        } else {
          document
            .getElementById(myCats[q].catName)
            .classList.remove("active-category");
        }
        document.getElementById("All").classList.remove("active-category");

        q = q + 1;
      }
    };

    if (x === "All") {
      setmyVideos(shuffled);
      active_handler(x);
      return true;
    }
    active_handler(x);
    let i = 0,
      filter_array = [];
    while (i < array.length) {
      var test_array = [],
        j = 0;
      test_array = array[i].tags.split(",");

      while (j < test_array.length) {
        if (test_array.includes(x)) {
          filter_array.push(array[i]);
          break;
        }
        j = j + 1;
      }
      i = i + 1;
    }
    setmyVideos(filter_array);
  }
  
  

  return (
    <>
      <div className="yt-body" id="yt-body">
        <div className="visible-body" id="video-body-div">
          {/* if not fixed : categorey header here */}
          <div className="category-header" id="cat-header">
            <div className="wrap-category" id="wrap">
              <span
                className="header-categories active-category"
                id="All"
                onClick={() => related_videos("All", Yt_Data)}
              >
                All
              </span>
              {myCats.map((cat) => {
                return (
                  <span
                    role="button"
                    className="header-categories"
                    id={cat.catName}
                    onClick={() => related_videos(`${cat.catName}`, Yt_Data)}
                  >
                    {cat.catName}
                  </span>
                );
              })}
            </div>
          </div>
          {/* Header over */}
          <div className="video-container">
            <Card videos={myVideos} />
          </div>
        </div>
      </div>

    </>
  );
}

export default Body;