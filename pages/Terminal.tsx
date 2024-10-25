
import Art from "@/components/Art";
import CommandInput from "@/components/command-input";
import Welcome from "@/components/Welcome";

export default function Terminal() {
    return <div className="bg-neutral-800 text-slate-300 w-screen min-h-screen overflow-x-hidden">
        <Art />
        <Welcome />
        <CommandInput />
    </div>
}