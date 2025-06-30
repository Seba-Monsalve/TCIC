import { createSlice } from '@reduxjs/toolkit';
const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        isLoading: false,
        filter: ''
    },
    reducers: {
        setPosts: (state, action) => {
            state.isLoading = true;
            state.posts = action.payload.posts
            state.isLoading = false;
        },
        createPost: (state, action) => {
            state.isLoading = true;
            state.posts = [...state.posts, action.payload];
            state.isLoading = false;
        },
        filterPosts: (state, action) => {
            state.isLoading = true;
            state.filter = action.payload.filterValue;
            state.isLoading = false;
        },
        deletePost: (state, action) => {
            state.isLoading = true;
            state.posts = state.posts.filter(post => post.id != action.payload.id);
            state.isLoading = false;
        }
    }
});

export const { createPost, setPosts, filterPosts, deletePost } = postSlice.actions;
export default postSlice.reducer;