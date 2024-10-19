import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const fetchUsers = createAsyncThunk('login/fetchUsers', async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); // Corrected URL
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
});

const initialState = {
    isLoggedIn: true,
    user: null,
    users: []
};

console.log('usersss' ,initialState.users);

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login: (state, action) => {
            const { email, password } = action.payload;
            console.log('users:', (state.users));

            
            const user = state.users.find(user => user.email === email && user.username === password);
            if (user) {
                state.isLoggedIn = true;
                state.user = user;

            } else {
                console.error('Invalid credentials');
            }
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.users = action.payload;
                console.log('Fetched users:', state.users);
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                console.error('Failed to fetch users:', action.error.message);
            });
    }
});

// Selector to get users from the state
export const selectUsers = (state) => state.login.users;

export const { login, logout } = loginSlice.actions;
export { fetchUsers };

export default loginSlice.reducer;