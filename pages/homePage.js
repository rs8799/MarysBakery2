import React from "react"; 
import Link from "next/link"; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Hero from "./Hero"
import NavigationBar from "./NavigationBar"
import Card from "./Card"
import data from "./data"
import { useEffect, useState } from "react";

function HomePage({data}) { 
	/* const dataItems = data.map(item =>{
    return <Card
        key={item.id}
        item={item}
    />
    }) */
return ( 
	<>
		<NavigationBar />
		<Hero /> 
		<section className="cards-list">
    {dataItems}
</section>	</>
); 
}; 


export async function getStaticProps() {
    const res = await fetch("/api/getData");
    const { data } = await res.json();
  
    return {
      props: {
        data,
      },
    };
  }
  
  export default HomePage;