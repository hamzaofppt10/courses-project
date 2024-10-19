import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
  const response = await fetch(`http://localhost:3000/courses`);
  const data = await response.json();
  return data;
});



const courseSlice = createSlice({
  name: 'courses',
  initialState: {
    courses: [],
    status: 'idle',
    error: null

  },
  reducers: {
    addCourse: (state, action) => {
      state.courses.push(action.payload)
    },
    deleteCourse: (state, action) => {
      state.courses = state.courses.filter(course => course.id !== action.payload)
    },
    updateCourse: (state, action) => {
      const index = state.courses.findIndex(course => course.id === action.payload.id)
      state.courses[index] = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
})

export const { addCourse, deleteCourse, updateCourse } = courseSlice.actions;
export { fetchCourses};
export default courseSlice.reducer;