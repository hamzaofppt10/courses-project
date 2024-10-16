import React from 'react'
import { useSelector } from 'react-redux'
import LoginFirst from './LoginFirst'

const CourseList = () => {
    const isLoggedIn = useSelector(state => state.login.isLoggedIn)

  return (
    <>
    {isLoggedIn ? 
    <div>CourseList</div> : <LoginFirst />}
    </>
  )
}

export default CourseList