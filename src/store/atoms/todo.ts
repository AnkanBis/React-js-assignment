import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();


interface Task {
    id: string;
    title: string;
    description: string;
    priority: string;
    status: boolean;
    userEmail: string
}


export const todoAtom = atom<Task[]>({
    key: "todoAtom",
    default: [],
    effects_UNSTABLE: [persistAtom],
})
