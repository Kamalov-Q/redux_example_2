import { useState } from "react"
import AddModal from "../../modals/AddModal/AddModal";
import { useSelector } from "react-redux";
import EditModal from "../../modals/EditModal/EditModal";
import DeleteModal from "../../modals/DeleteModal/DeleteModal";

const Home = () => {

    const [addOpen, setAddOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [delOpen, setDelOpen] = useState(false);

    const [todoData, setTodoData] = useState({});
    const [id, setId] = useState();

    const todos = useSelector((state) => state.todos.todos);


    return (
        <div className="m-5">
            <button className="bg-green-700 m-3 border-none text-white px-4 py-2" onClick={() => setAddOpen(true)}>Add Todo</button>
            {todos && todos.map((todo, id) => (
                <div key={id} className={`px-4 py-2  border-2 rounded-lg border-black flex items-center justify-between m-3 w-full`}>
                    <div onClick={() => {
                        setEditOpen(true);
                        setTodoData(todo);
                    }}>
                        <div className="font-bold text-lg">
                            {id + 1}. {todo.title}
                        </div>
                        <div>{todo.description}</div>
                    </div>
                    <button className='bg-red-500 z-10 rounded-md text-white border-none px-4 py-2' onClick={() => {
                        setDelOpen(true);
                        setId(todo.id);
                    }}>Delete</button>
                </div>
            ))}
            {addOpen && <AddModal open={addOpen} closeModal={() => setAddOpen(false)} />}
            {editOpen && <EditModal open={editOpen} closeModal={() => setEditOpen(false)} data={todoData} />}
            {delOpen && <DeleteModal open={delOpen} closeModal={() => setDelOpen(false)} id={id} />}
        </div >
    )
}

export default Home
