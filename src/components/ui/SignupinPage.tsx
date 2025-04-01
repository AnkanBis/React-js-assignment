import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useSetRecoilState } from "recoil";
import { authAtom } from "@/store/atoms/auth";
import { useNavigate } from "react-router-dom";



const formSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

export const SignupinPage = ({ page }: { page: string }) => {

    return (
        <div>

            <div className="flex  min-h-screen">

                {/* LEFT SIDE */}
                <div className="flex-1 flex items-center justify-center h-screen">
                    <div className="w-[80%] max-w-2xl">
                        <h1 className="flex items-center justify-center text-2xl font-bold mb-4">{page}</h1>
                        <SignupForm page={page} />
                    </div>
                </div>
                {/* RIGHT SIDE  */}

                <div className="hidden md:flex flex-1 justify-start items-center h-screen">
                    <div className="w-[80%] max-w-2xl">

                        <img src="/todolist-image.png" alt="todolist" className="w-64 h-auto" />
                    </div>
                </div>
            </div>

        </div>
    )
}



function SignupForm({ page }: { page: string }) {
    const navigate = useNavigate();
    const setUser = useSetRecoilState(authAtom);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    function handleSubmit(values: z.infer<typeof formSchema>): void {
        localStorage.setItem("user", JSON.stringify(values))
        setUser(values);
        console.log("User authenticated", values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your email..." {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your password..." {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button onClick={() => navigate("/app")} className="w-full" type="submit">{page === "Sign up" ? "Sign up with Email" : "Sign in"}</Button>

            </form>

        </Form>
    )



}
