import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        // Handle login logic here
    };

    const handleClose = () => {
        const dialog = document.getElementById('my_modal_3');
        if (dialog) {
            dialog.close();
        }
        navigate('/');
    };

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        <button type="button" onClick={handleClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <h3 className="font-bold text-lg">Login</h3>
                        <div className='mt-4 space-y-2'>
                            <label htmlFor="email">Email</label>
                            <br/>
                            <input
                                {...register("email", { required: true })}
                                type='email'
                                placeholder='Enter your Email'
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                            />
                            <br />
                            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        <div className='mt-4 space-y-2'>
                            <label htmlFor="password">Password</label>
                            <br/>
                            <input
                                {...register("password", { required: true })}
                                type='password'
                                placeholder='Enter your Password'
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                            />
                            <br />
                            {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        <div className='flex justify-around mt-4'>
                            <button type="submit" className='bg-blue-800 text-white rounded-md px-3 py-1 hover:bg-blue-900 duration-200'>Login</button>
                            <p>Not registered? <Link to="/signup" className='underline text-blue-500 cursor-pointer'>SignUp</Link></p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login;
