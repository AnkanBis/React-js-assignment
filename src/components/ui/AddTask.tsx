import { Button } from "./button"
import { useNavigate } from "react-router-dom"

export const AddTask = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white  p-6 rounded-lg">
                <Button onClick={() => navigate("/app")}>Add task</Button>
            </div>
        </div>
    )
}
