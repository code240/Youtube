import React, {useState} from "react";
import "./CSS/Header.css";
import Bars from "./Mini-component/Bars";
import Card_id from "./Data/Youtube-Data";

const Header = () => {
  const [Recomendation, setRecomendation] = useState([]);
  const yt_data = [...Card_id];
  let title_array = [],recomendation_arr = [];
  // var xx = ["hellooo","k hal "];
  var q=0;
  while(q < yt_data.length){
    title_array.push(yt_data[q].title.toLowerCase());
    q=q+1;
  }

  const show_result = () => {
    recomendation_arr = [];
    var val = document.getElementById("search_yt_vid").value;
    val = val.toLowerCase();
    val = val.replace(String.fromCharCode(92),String.fromCharCode(92,92));
    // alert(val);
    if(val.trim() === ""){
      document.getElementById("search-result-show-desktop").style.display = "none";
    }else{
      document.getElementById("search-result-show-desktop").style.display = "block";
      var list,q=0;
      while(q<title_array.length){
        list = title_array[q].split(" ");
        var w = 0;
        while(w<list.length){
          var match_status = list[w].match(val);
          if(match_status!=null){
            if(recomendation_arr.length<=13){
              recomendation_arr.push(yt_data[q].title);
              setRecomendation(recomendation_arr);   
            }
            break;
          }
          w = w + 1;
        }
        q=q+1;
      }
    }
  }
  const redirect_to_video = (title) => {
    var q=0;
    while(q<yt_data.length){
      if(yt_data[q].title===title.recomend){
        window.open(yt_data[q].link,'_blank');
      }
      q=q+1;
    }
  }  
  

  return (
    <>
      <header className="main-header" id="header">
        <div className="for-logo-and-bar">
          <div className="for-bar" id="show-bars" onClick={()=>navControl("show")}>
            <Bars />
          </div>
          <div className="for-bar" id="hide-bars" onClick={()=>navControl("hide")}>
            <Bars />
          </div>
          <div className="for-logo">
            <img src="media/yt.png" alt="youtube" className="yt-logo" />
          </div>
        </div>

        <div className="rest-header">
          <div className="for-search-bar">
            <div className="input-group m-0 p-0 main-input-div">
              <input
                type="text"
                className="form-control search-input"
                placeholder="Search"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                id="search_yt_vid"
                autoComplete="off"
                onKeyPress={(e)=> stop_slash(e,"search_yt_vid")}
                onChange={()=>show_result()}
                onBlur={()=>setTimeout(()=>{ document.getElementById("search-result-show-desktop").style.display = "none"},500)}
              />
              <div className="input-group-append">
                <span
                  className="input-group-text search-icon"
                  id="basic-addon2"
                  style={{cursor:"pointer"}}
                  onClick={()=>searchOnYoutube("search_yt_vid")}
                >
                  <span className="material-icons"  >search</span>
                </span>
              </div>
            </div>
          </div>

          <div className="mike-div">
            <i className="fas fa-microphone"></i>
          </div>

          <span className=" header-icons header-icon-1">
            <i className="fas fa-video"></i>
          </span>
          <span className="header-icons header-icon-2">
            <i className="fas fa-th"></i>
          </span>
          <span className="header-icons header-icon-3">
            <i className="far fa-bell"></i>
          </span>

          <div className="user-image">
            <img src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars.png" alt="yt-user" className="yt-user-dp" />
          </div>
        </div>
      </header>

      
      <div className="div-for-showing-search-results" id="search-result-show-desktop">
        <div className="rest-search">
          <div className="inner-search-result-shower"> 
          {Recomendation.map((recomend)=>{
            return(
            <span className="search-results-lines text-truncate" onClick={()=>redirect_to_video({recomend})}>
              {recomend}
            </span>
            )
          })
          }
          </div>
        </div>
      </div>
    </>
  );
};
const searchOnYoutube = (id) => {
  var val = document.getElementById(id).value;
  val = val.replace(" ","+");
  var redirect = "https://www.youtube.com/results?search_query="+val;
  window.open(redirect,"_blank");
  
}

const navControl = (x) => {
  var u;
  var url = window.location.href;
  url = url.toLocaleLowerCase();
  if(x==="show"){
    document.getElementById("navbar").style.display = "none";
    document.getElementById("show-bars").style.display = "none";
    document.getElementById("hide-bars").style.display = "block";
    document.getElementById("mini-nav").style.display = "block";
    document.getElementById("yt-body").style.paddingLeft = "5rem";
    document.getElementById("header").style.border = "0px solid #d4d4d4";
    if(!url.includes("explore") && !url.includes("library")){
    document.getElementById("cat-header").style.left = "4.61rem";
    document.getElementById("cat-header").style.borderTop = "1px solid #d4d4d4";
    document.getElementById("wrap").style.width = "94.3%";
    // document.getElementsByClassName("template-img").style.height = "";
    u = 0;
    while(u<Card_id.length){
      document.getElementById(Card_id[u].card_id).style.height = "12rem";
      u=u+1;
    }
    if(window.innerWidth <= 1250){
      u = 0;
      while(u<Card_id.length){
        document.getElementById(Card_id[u].card_id).style.height = "9rem";
        u=u+1;
      }
    }
  }
  }
  if(x==="hide"){
    document.getElementById("navbar").style.display = "block";
    document.getElementById("show-bars").style.display = "block";
    document.getElementById("hide-bars").style.display = "none";
    document.getElementById("mini-nav").style.display = "none";
    document.getElementById("yt-body").style.paddingLeft = "14.95rem";
    document.getElementById("header").style.borderBottom = "1px solid #d4d4d4";
    if(!url.includes("explore") && !url.includes("library")){
    document.getElementById("cat-header").style.left = "15rem";
    document.getElementById("cat-header").style.borderTop = "0px solid #d4d4d4";
    document.getElementById("wrap").style.width = "83%";
    u = 0;
    while(u<Card_id.length){
      document.getElementById(Card_id[u].card_id).style.height = "10.1rem";
      u=u+1;
    }
    if(window.innerWidth <= 1250){
      u = 0;
      while(u<Card_id.length){
        document.getElementById(Card_id[u].card_id).style.height = "8rem";
        u=u+1;
      }
    }
  }
    
  }
  
}
const stop_slash = (e,id) => {
  var x = e.which || e.keyCode;
  if(x === 92){
    var val = document.getElementById(id).value;
    val = val.replace(String.fromCharCode(92),"");
    document.getElementById(id).value = val;
}
return true;
}
export default Header;
export {stop_slash,searchOnYoutube};
