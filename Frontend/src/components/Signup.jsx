import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);
  return (
    <>
        <div className='flex h-screen items-center justify-center '>
              <div className="w-[600px]">
                  <div className='modal-box'>
                      <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                      
                      <h3 className="font-bold text-lg">SignUp</h3>
                      <div className='mt-4 space-y-2'>
                          <span>Name</span>
                          <br />
                              <input {...register("name", { required: true })} type='text' placeholder='Enter your fullname' className='w-80 px-3 py-1 border rounded-md outline-none'
                          />
                              <br />
                              {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                      </div>
                      <div className='mt-4 space-y-2'>
                          <span>Email</span>
                          <br />
                              <input {...register("email", { required: true })}type='email' placeholder='Enter your Email' className='w-80 px-3 py-1 border rounded-md outline-none'
                          />
                              <br />
                              {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                      </div>
                      <div className='mt-4 space-y-2'>
                          <span>Password</span>
                          <br />
                              <input {...register("password", { required: true })}type='text' placeholder='Enter your Password' className='w-80 px-3 py-1 border rounded-md outline-none'
                          />
                              <br />
                              {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                      </div>
                      <div className='flex justify-around mt-4'>
                          <button className='bg-blue-800 text-white rounded-md px-3 py-1 hover:bg-blue-900 duration-200'>SignUp</button>
                          <p>Have Account?<button className='underline text-blue-500 cursor-pointer' onClick={() => document.getElementById("my_modal_3").showModal()}>Login</button>{" "}
                          <Login/>
                          </p>
                      </div>
                      </form>
                  </div>
              </div>
        </div>
    </>
  )
}

export default Signup