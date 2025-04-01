import { atom } from "recoil";

interface User {
    email: string,
    password: string,
}

export const authAtom = atom<User | null>({
    key: "authAtom",
    default: JSON.parse(localStorage.getItem("user") || "null"),
})
