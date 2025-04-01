
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { todoAtom } from "@/store/atoms/todo";
import { useState } from "react";
import { useRecoilState } from "recoil";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"



export const HomePage = () => {
    const [showCard, setShowCard] = useState(true);

    return (
        <div className="">
            {showCard && (<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white  p-6 rounded-lg">
                {<CardBox setShowCard={setShowCard} />}
            </div>)}
        </div>


    )
}

interface Task {
    title: string;
    description: string;
    priority: string;
}

const CardBox = ({ setShowCard }: { setShowCard: (arg1: boolean) => void }) => {

    const [inputValue, setInputValue] = useState<Task>({
        title: "",
        description: "",
        priority: "1",
    });
    const [todoList, setTodoList] = useRecoilState(todoAtom);

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setInputValue((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    function handleAddTask() {
        const user = JSON.parse(localStorage.getItem("user") || "null");
        if (!user) return;
        const newTask = { ...inputValue, userEmail: user.email }


        setTodoList((prevList) => {
            const updatedList = [...prevList, newTask];
            localStorage.setItem("todos", JSON.stringify(updatedList));  
            return updatedList;
        });

        setInputValue({ title: "", description: "", priority: "1" });

        setShowCard(false)



    }

    const handlePriorityChange = (value: string) => {
        setInputValue((prevState) => ({
            ...prevState,
            priority: value,
        }));

    }


    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Add task</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="title">Title</Label>
                            <Input
                                id="title"
                                name="title"
                                value={inputValue.title}
                                placeholder="Add title"
                                onChange={handleInputChange} />
                            <Label htmlFor="description">Description</Label>
                            <Input
                                id="description"
                                name="description"
                                value={inputValue.description}
                                placeholder="Add description"
                                onChange={handleInputChange}
                            />
                        </div>
                        <Label htmlFor="priority">Priority</Label>
                        <Select name="priority" onValueChange={handlePriorityChange}>
                            <SelectTrigger >
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                                <SelectItem value="1">1</SelectItem>
                                <SelectItem value="2">2</SelectItem>
                                <SelectItem value="3">3</SelectItem>
                                <SelectItem value="4">4</SelectItem>
                            </SelectContent>
                        </Select>

                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setShowCard(false)}>Cancel</Button>
                <Button onClick={handleAddTask}>Add task</Button>
            </CardFooter>
        </Card>
    )

}
