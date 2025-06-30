import { useEffect, useState } from "react";
import { CreateComponent } from "./components/CreateComponent";
import { FilterComponent } from "./components/FilterComponent";
import { TableComponent } from "./components/TableComponent";
import { useSelector, useDispatch } from 'react-redux';

import { getPostsThunks } from "./posts/thunks";
import type { Post } from "./interfaces/post.interface";

const App = () => {

  const dispatch = useDispatch();
  const { posts = [], isLoading, filter } = useSelector((state) => state.posts);


  const filteredPosts =
    filter == '' ? posts : posts.filter((post: Post) => post.name.toLowerCase().includes(filter.toLowerCase()));
  useEffect(() => {
    dispatch(getPostsThunks())
  }, [])

  return (
    <div className=" flex not-first:w-full items-center justify-center p-5">
      <nav>
      </nav>
      <section className="flex flex-col gap-1   bg-gray-100 rounded-xl p-3">
        <h1 className="text-2xl">Formulario de tareas</h1>
        <FilterComponent />
        <TableComponent posts={filteredPosts} />
        < CreateComponent />
        {/* {JSON.stringify(posts)} */}
      </section>
    </div>

  )
}


export default App;