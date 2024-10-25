"use client"
import { keybindings } from "@/lib/bindings";
import { useRef, useState } from "react"

interface Command {
    command: string,
    output: string | JSX.Element
}

export default function CommandInput()  {
    const [command, setCommand] = useState<Command[]>([])

    const [currentCommand, setCurrentCommand] = useState<string>("")

    const [upArrowKeyPressed, setUpArrowKeyPressed] = useState<number>(0);
    const inputRef = useRef<HTMLInputElement>(null);

    return <div className=" flex items-center justify-center pb-3 pt-3">
      <div>
        {command.map((item, index) => (
        <div key={index}>
          <div className="flex flex-row mb-0.5">
            <div className="text-teal-500 font-bold ml-10 ">
              {" "}
              dev@explorer~${" "}
            </div>
            <div className="ml-2 font-mono ">
              {item.command}
            </div>
          </div>
          <div
            className="font-mono text-left ml-16 mb-3  mr-10"
            id="output-content"
          >
            {item.output}
          </div>
        </div>
      ))}
      <div className="flex flex-row">
        <div className="text-teal-500 font-bold ml-10 selection:bg-yellow-900">
          {" "}
          dev@explorer~${" "}
        </div>
        <input
          className="bg-transparent outline-none border-none font-mono ml-2 text-amber-500 w-2/3"
          type="text"
          ref={inputRef}
          value={currentCommand}
          autoFocus={true}
          onChange={(e) => setCurrentCommand(e.target.value)}
          onKeyDown={(e) => {
            keybindings(
              e,
              setCommand,
              setUpArrowKeyPressed,
              setCurrentCommand,
              currentCommand,
              command,
              upArrowKeyPressed
            );
          }}
        />
      </div>
    </div>
    </div>
}