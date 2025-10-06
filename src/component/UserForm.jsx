import React,{useState} from 'react'
import useInput from '../hooks/useInput'
import user_blue from '../assets/user_blu.png'
import user from '../assets/user.png'

function UserForm() {

    const [firstName,bindFirstName,resetFirstName]=useInput('')
    const [lastName,bindLastName,resetLastName]=useInput('')

    const submitHandler=(e)=>{
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
  return (
    <div className="flex flex-col justify-center items-center p-6 min-h-screen bg-gradient-to-br from-blue-400 via-indigo-600 to-blue-700 ">
        <form className="flex flex-col items-center justify-center w-[28rem] bg-white rounded-4xl shadow-xl p-8 border border-gray-300" onSubmit={submitHandler}>

            <img src={user_blue} className='w-24 h-24 mt-12 object-contain'></img>
            <h1 className='font-extrabold text-5xl text-black mb-2 mt-4'>Login Portal</h1>

            <div>
                {/* focus classes cant be grouped in tailwind */}
                <input {...bindFirstName} className='text-xl mt-7 font-medium px-3 py-2 rounded-full bg-white shadow-sm border w-[25rem] placeholder:text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400' placeholder='First name' type='text'></input>
                <img></img>
            </div>
            <div>
                <input {...bindLastName}  className='text-xl mt-5 font-medium px-3 py-2 rounded-full bg-white shadow-sm border w-[25rem] placeholder:text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400' placeholder='Last name' type='password'></input>
                <img></img>
            </div>
            <button className='text-2xl font-semibold text-white bg-black rounded-3xl px-6 py-2 m-3 shadow-md border border-black w-[25rem] active:scale-95 active:shadow-sm  transition'>login</button>
        </form>
    </div>
  )
}

export default UserForm 