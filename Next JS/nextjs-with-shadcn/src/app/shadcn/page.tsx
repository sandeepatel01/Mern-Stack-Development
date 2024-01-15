import { Button } from "@/components/ui/button"

function page() {
    return (
        <main className="h-full flex justify-center items-center  flex-col">
            <div>
                Shadcn Page 👨‍💻
            </div>
            {/* <button className="bg-white text-black py-2 px-6 my-4 rounded-md hover:bg-slate-500">Get Started</button> */}
            <Button variant="sandy">Get Started</Button>
        </main>
    )
}

export default page
