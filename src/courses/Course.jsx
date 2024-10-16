import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"


const Course = () => {
    const { id } = useParams()
    const courses = useSelector(state => state.courses.courses)
    const users = useSelector(state => state.login.users)
    const selectedCourse = courses.find(el => el.id === id);
    console.log('users', users);

    return (
        <div>
            {selectedCourse ? (<>
                <Card className="w-full ">
                    <CardHeader>
                        <img src={selectedCourse.image} alt="Course" className="w-full h-48 object-fit rounded-t-lg" />
                        <CardTitle className="mt-4 text-2xl font-bold">{selectedCourse.title}</CardTitle>
                        <CardDescription>{selectedCourse.instructor}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-2">
                            <div className="flex items-center"></div>
                            <span className="font-semibold mr-2">Credits:</span> {selectedCourse.credits}
                        </div>
                        <div className="flex items-center">
                            <span className="font-semibold mr-2">Schedule:</span> {selectedCourse.schedule}
                        </div>
                        <p className="mt-2">{selectedCourse.description}</p>

                    </CardContent>
                    <CardFooter className="flex flex-col items-start">
                        <h3 className="text-lg font-semibold mb-2">Comments</h3>
                        {!selectedCourse.comment.length && <h1>No comment</h1>}
                        {selectedCourse.comment.length && selectedCourse.comment.map((comment, index) => (
                            <div key={index} className="flex items-center space-x-2 mb-2">
                                <img className='rounded-full' src={`https://placehold.co/60x60?text=${users.find(user => user.id === parseInt(comment.user)).username}`} alt="" />
                                <div>
                                    <p className="text-sm font-medium">{users.find(user => user.id === parseInt(comment.user)).username}</p>
                                    <p className="text-sm text-gray-500">{comment.content}</p>
                                </div>
                            </div>
                        ))}
                    </CardFooter>
                </Card>
            </>
            ) : (
                <h1>Not found</h1>
            )
            }
        </div >
    )
}

export default Course