import { authAtom } from "@/store/atoms/auth";
import { todoAtom } from "@/store/atoms/todo"
import { useRecoilState, useRecoilValue } from "recoil"

export const InboxPage = () => {
    const [todoList, setTodoList] = useRecoilState(todoAtom);
    const user = useRecoilValue(authAtom);

    const userTodos = todoList.filter(task => task.userEmail === user?.email && !task.status);

    function markAsDone(id: string) {
        setTodoList((prevTodos) => (
            prevTodos.map(todo => todo.id === id ? {...todo, status: true} : todo)
        ))
    }

    return (
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg w-[600px] max-w-xl">
            <div className="py-3 px-5 border-b border-gray-300 font-semibold text-lg">
                Todo List
            </div>
            <div className="p-4 space-y-3">
                {/* Example Todo Items */}

                {userTodos.map(item => (
                    <div className="p-3 border border-gray-300 rounded-md">
                        <div className="flex justify-between">
                            <div>
                                <div className="text-2xl text-gray-700">{item.title}</div>
                                <div className="text-md text-black">{item.description}</div>
                            </div>
                            <button onClick={() => markAsDone(item.id)} className="text-green-500">✔</button>
                        </div>
                    </div>
                ))}


            </div>
        </div>)
}
