import { useEffect, useState } from "react";
import { CreateComponent } from "./components/CreateComponent";
import { FilterComponent } from "./components/FilterComponent";
import { TableComponent } from "./components/TableComponent";

const App = () => {

  const [posts, setposts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch('http://localhost:3001/posts/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log({ data });
        setposts(data);
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
    }
    getPosts();

  }, [])


  return (
    <div className=" flex not-first:w-full items-center justify-center p-5">
      <nav>
      </nav>
      <section className="flex flex-col gap-1   bg-gray-100 rounded-xl p-3">
        <h1 className="text-2xl">Formulario de tareas</h1>
        <FilterComponent />
        <hr />
        <TableComponent posts={posts} />
        < CreateComponent />

      </section>
    </div>

  )
}


export default App;