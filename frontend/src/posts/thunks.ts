import { createPost, deletePost, filterPosts, setPosts } from "./post.slice";

export const getPostsThunks = () => {
    return async (dispatch) => {

        try {
            const resp = await fetch('http://localhost:3001/posts');
            const data = await resp.json();
            dispatch(setPosts({ posts: data }));
        } catch (error) {
            console.log(error);
        }

    }
}

export const createNewPostThunks = ({ name, description }: { name: string, description: string }) => {
    return async (dispatch) => {

        try {

            const newPost = fetch('http://localhost:3001/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, description })
            })
            const resp = await newPost;
            if (!resp.ok) {
                throw new Error('Failed to create post');
            }
            const data = await resp.json();
            dispatch(createPost({ id: data.id, name, description }));
        } catch (error) {
            console.log(error);
        }
    }
}

export const deletePostThunk = ({ id }: { id: string }) => {
    return async (dispatch) => {
        try {

            const deletedPost = fetch(`http://localhost:3001/posts/${id}`, {
                method: 'DELETE',
            })
            const resp = await deletedPost;
            if (!resp.ok) {
                throw new Error('Failed to delete post');
            }
            const data = await resp.json();
            dispatch(deletePost({ id }));
        } catch (error) {
            console.log(error);
        }
    }
}

export const filterPostsThunks = ({ filterValue }: { filterValue: string }) => {
    return async (dispatch) => {
        dispatch(filterPosts({ filterValue }));
    }
}


