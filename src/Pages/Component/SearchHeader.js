import React, { useState } from "react";
import "./CSS/SearchHeader.css";
import yt_data from "./Data/Youtube-Data";
import {stop_slash,searchOnYoutube} from './Header'

const SearchHeader = () => {
  const [Recomendation, setRecomendation] = useState([]);
  // var xx = ["hellooo","k hal "];

  let title_array = [],
  recomendation_arr = [];
  var q=0;
  while(q < yt_data.length){
    title_array.push(yt_data[q].title.toLowerCase());
    q=q+1;
  }

  const hide_search = () => {
    document.getElementById("search-header").style.display = "none";
    document.getElementById("mobi-header").style.display = "block";
    document.getElementById("layer-search").style.display = "none";
    document.getElementById("suggest-box").style.display = "none";
    document.getElementById("search-mobi-text").value = "";
    document.getElementById("search-mobi-text").blur();
  };

  const text_recognize = () => {
    recomendation_arr = [];
    setRecomendation([]);
    var val = document.getElementById("search-mobi-text").value;
    val = val.toLowerCase();
    val = val.replace(String.fromCharCode(92), String.fromCharCode(92, 92));
    // alert(val);
    
    if (val.trim() === "") {
      document.getElementById("suggest-box").style.display = "none";
    } else {
      document.getElementById("suggest-box").style.display = "block";
      var list,
      q = 0;
      while (q < title_array.length) {
        list = title_array[q].split(" ");
        var w = 0;
        while (w < list.length) {
          var match_status = list[w].match(val);
          if (match_status != null) {
            if (recomendation_arr.length <= 13) {
              recomendation_arr.push(yt_data[q].title);
              setRecomendation(recomendation_arr);
            }
            break;
          }

          w = w + 1;
        }
        q = q + 1;
      }
    }
  };

  const redirect_to_video = (title) => {
    var q=0;
    while(q<yt_data.length){
      if(yt_data[q].title===title.item){
        window.open(yt_data[q].link,'_blank');
      }
      q=q+1;
    }
  }  
  return (
    <>
      <div className="search-header-mobi" id="search-header">
        <div className="for-arrow-div-in-search-header">
          <span className="material-icons" onClick={() => hide_search()}>
            arrow_back
          </span>
        </div>
        <div className="for-search-div-in-search-header">
          <input
            type="search"
            id="search-mobi-text"
            className="search-bar-mobi"
            placeholder="Search YouTube Clone"
            onChange={() => text_recognize()}
            autoComplete="off"
            onKeyPress={(e)=> stop_slash(e,"search-mobi-text")}
            onBlur={() =>
              setTimeout(() => {
                document.getElementById(
                  "search-result-show-desktop"
                ).style.display = "none";
              }, 500)
            }
          />
        </div>
        <div className="for-search-icon-in-search-header">
          <span className="material-icons" onClick={()=>searchOnYoutube("search-mobi-text")}>search</span>
        </div>
      </div>

      <div
        className="layer-search"
        id="layer-search"
        onClick={() => hide_search()}
      ></div>
      <div className="suggestion-box-search-mobi" id="suggest-box">
      { Recomendation.map((item)=>{
        return(
        <div className="line-answer">
        <span class="material-icons north-west-icon">north_west</span>
        <span className="search-results-lines-mobi text-truncate" onClick={()=>redirect_to_video({item})}>
          {item}
        </span>
      </div>
      );
      })  
      }
      </div>
    </>
  );
};

export default SearchHeader;
