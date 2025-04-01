import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();


interface Task {
    title: string;
    description: string;
    priority: string;
    userEmail: string
}


export const todoAtom = atom<Task[]>({
    key: "todoAtom",
    default: [],
    effects_UNSTABLE: [persistAtom],
})
