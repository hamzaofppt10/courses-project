import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoginFirst from './LoginFirst'
import { fetchCourses } from '../reducer/coursesSlice'
import {  Loader } from 'lucide-react'
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom'


const CourseList = () => {
  const isLoggedIn = useSelector(state => state.login.isLoggedIn)
  const status = useSelector(state => state.courses.status)
  const error = useSelector(state => state.courses.error)
  const courses = useSelector(state => state.courses.courses)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch])

  useEffect(() => {
    console.log('status', status)
  }, [status])


  return (
    <>

      {isLoggedIn ? <div>
        {status === 'loading' ? <div className='min-h-screen w-screen flex items-center justify-center'> <Loader className='animate-spin ' /> </div> : null}
        {status === 'failed' ? <div className='min-h-screen w-screen flex items-center justify-center'> {error} </div> : null}
        {status === 'succeeded' ?
          <div>
            <h1 className='text-center text-3xl font-bold'>Courses</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4'>
              {courses.map(course => (
                <div key={course.id} className='bg-white shadow-md p-4 rounded-md' >
                  <h1 className='text-xl font-bold'>{course.title}</h1>
                  <p>{course.description}</p>
                  <Button><Link to={`/course/${course.id}`} >Show more</Link></Button>
                </div>
              ))}
            </div>
          </div>
          : null}
      </div> : <LoginFirst />}
    </>
  )
}

export default CourseList