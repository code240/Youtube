import React from "react";
import "./CSS/Body.css";
import Span from "./Mini-component/Span";

const Categories = (props) => {
  let i = 0,x,len=props.names.length,span=[];
  while(i<len){
    x = <Span cat={props.names[i]} />
    span.push(x);
    i = i + 1;
  }
  console.log(props.names[3].catName)
  return (
    <>
      <div className="category-header">
        <div className="wrap-category">
          <span className="header-categories active-category">All</span>
          {props.names.catName}
        </div>
      </div>
    </>
  );
};

export default Categories;
