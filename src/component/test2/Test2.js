import React from 'react'
import './Test2.css'
function Test2() {
 let a=[
    {
      id: 1,
      title: "Fjallraven",
      price: 22.3,
      description: "Slim contrast raglan  three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120
      }
    },
    {
      id: 2,
      title: "Mens  T-Shirts ",
      price: 22.3,
      description: "Slim contrast raglan  three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: {
        rate: 4.1,
        count: 259
      }
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description: "for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: {
        rate: 4.7,
        count: 500
      }
    },
    {
      id: 4,
      title: "Mens Slim Fit",
      price: 15.99,
      description: "ase note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      rating: {
        rate: 2.1,
        count: 430
      }
    },
    {
      id: 5,
      title: "John Hardy Women's ",
      price: 695,
      description: " dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 4.6,
        count: 400
      }
    },
    {
      id: 6,
      title: "Solid Gold Petite  ",
      price: 168,
      description: " 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 3.9,
        count: 70
      }
    }
    ]   
  return (
    <div className='text-center div'>
    <h1>Result</h1>
    <div className=' bg-danger-subtle container mb-4' >
      {
        a.map(item=>
            <div className='card w-25 d-inline-block m-2'>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <h4>Price:{item.price}</h4>
                <img src={item.image} alt=''style={{width:'100px', height:'100px'}} />
                <h6>Rating: {item.rating.rate} Count: {item.rating.count}</h6>
            </div>
        )
      }
    </div>
    </div>
  )
}

export default Test2
