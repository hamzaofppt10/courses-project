import { createSlice } from '@reduxjs/toolkit';
import Users from '../users/Users';
const initialState = {
    courses: []
};

const coursesSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        addCourse: (state, action) => {
            state.courses.push(action.payload);
        },
        removeCourse: (state, action) => {
            state.courses = state.courses.filter(course => course.id !== action.payload.id);
        },
        updateCourse: (state, action) => {
            const index = state.courses.findIndex(course => course.id === action.payload.id);
            if (index !== -1) {
                state.courses[index] = action.payload;
            }
        },
    },
});

export const { addCourse, removeCourse, updateCourse } = coursesSlice.actions;

export default coursesSlice.reducer;