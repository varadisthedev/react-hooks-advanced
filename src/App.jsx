import React,{ useState } from 'react'
import FocusInput from './component/FocusInput'
import ClassTimer from './component/ClassTimer'
import DocTitleOne from './component/DocTitleOne'
import DocTitleTwo from './component/DocTitleTwo'
import CounterOne from './component/CounterOne'
import CounterTwo from './component/CounterTwo'
import UserForm from './component/UserForm'

function App() {

  return (
    <>
      {/* <FocusInput/> */}
      <ClassTimer/>
      <UserForm/>

      
      <DocTitleOne/>
      <DocTitleTwo/>


      <h2>useCounter custom hook </h2>
      <CounterOne/>
      <CounterTwo/>


    </>
  )
}

export default App
