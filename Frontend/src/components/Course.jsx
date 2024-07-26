import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Course() {
  const [book,setBook] = useState([])
  useEffect(() => {
    const getBook = async() => {
      try {
      const res = await axios.get("http://localhost:4001/book")
      console.log(res.data)
      setBook(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getBook();
  },[])
  return (
    <>
          <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='py-28 items-center justify-center text-center'>
                  <h1 className='text-2xl md:text-4xl'>Happy to see you <span className='text-blue-800'>here! :)</span></h1>
                  <p className='mt-12'>Welcome to our bookshop! Feel free to browse our collection, and let us know if you need any recommendations. Enjoy your visit and happy reading!</p>
                  <Link to="/">
                      <button className='mt-6 bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 duration-300'>Back</button>
                  </Link>
          </div>
              <div className='mt-12 grid grid-cols-1 md:grid-cols-4 '>
            {book.map((item) => (
                <Cards item={item} key={item.id}/>
            ))}
          </div>
        </div>
    </>
  )
}

export default Course