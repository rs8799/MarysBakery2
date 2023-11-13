import React from "react"
import Link from "next/link"; 
import { useEffect, useState } from "react";


function Card({data}) {
    let badgeText
    if(openSpots === 0){
        badgeText = "SOLD OUT"
    } else if (location === "Online"){
        badgeText ="ONLINE"
    }

    return (
        <Link href="/Formpage">
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={coverImg} className="card--photo"/>
            <div className="card--stats">
                <img src="star.png" className="card--star"/>
                <span className="card--rating">{rating} </span>
                <span className="gray">({reviewCount}) • </span>
                <span className="gray">{location}</span>
            </div>
            <p className="card--title">{title}</p>
            <p><span className="bold">From ${price}</span> </p>
        </div>
        </Link>
    )
}

export async function getStaticProps() {
    const res = await fetch("/api/getData");
    const { data } = await res.json();
  
    return {
      props: {
        data,
      },
    };
  }
  
  export default Card;