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
    <div >
        <form className='flex flex-col items-center justify-center w-110 h-150 bg-gradient-to-br from-blue-200 to-blue-400 ' onSubmit={submitHandler}>
            <img src={user_blue} className='w-30 h-30 mt-15'></img>
            <h1 className='font-extrabold text-5xl text-blue-'>Login portal</h1>

            <div>
                {/* <label >first name</label> */}
                <input {...bindFirstName}  className='text-xl mt-7 font-medium px-3 py-1 rounded-full bg-white/10 shadow-md  border-1 w-100' placeholder='First name' type='text'></input>
                <img></img>
            </div>
            <div>
                <input {...bindLastName}  className='m-3 text-xl mt-5 font-medium px-3 py-1 rounded-full bg-white/10 shadow-md  border-1 w-100' placeholder='Last name' type='password'></input>
                <img></img>
            </div>
            <button className='text-3xl font-medium text-black bg-white rounded-3xl px-3 py-1 m-3 shadow-md border-black w-100' >login</button>
        </form>
    </div>
  )
}

export default UserForm