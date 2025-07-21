import React, { useEffect, useRef, useState } from "react";
import '/src/css/App.css'
import Hero from './modules/Hero.tsx'
import Readme from './modules/Readme.tsx'

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><a>~</a></li>
          <li><a>~/projects</a></li>
          <li><a>~/about</a></li>
          <li><a>~/contact</a></li>
        </ul>
      </nav>
      <div className="terminal">
        <Hero
        />
        <Readme
        />
        <CommandLine
        />
      </div>
    </>
  )
}

export function callFunction(cmd: String) {
  switch (cmd) {
    case "ls":
      return (
        <>
          /projects
        </>
      )
  }
}

export function CommandLine() {
  const [input, setInput] = useState("");
  const [log, setLog] = useState<string[]>([]); // Store past commands
  const terminalRef = useRef<HTMLDivElement>(null);

  var dir = '~';

  useEffect(() => {
    terminalRef.current?.focus();
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key.length === 1 && !e.ctrlKey) {
      setInput((prev) => prev + e.key);
    } else if (e.key === "Backspace") {
      setInput((prev) => prev.slice(0, -1));
    } else if (e.key === "Enter") {
      callFunction(input);
      setLog((prev) => [...prev, `${dir} $ ${input}`]);
      setInput("");
    } else if (e.key === "c" && e.ctrlKey) {
      setLog((prev) => [...prev, `^C`]);
      setInput("");
    }
  };

  return (
    <div
      tabIndex={0}
      ref={terminalRef}
      onKeyDown={handleKeyDown}
      onClick={() => terminalRef.current?.focus()}
      style={{ outline: 'none' }}
    >
      {log.map((line, index) => (
        <div key={index}>{line}</div>
      ))}
      <p className="prompt">{dir} $ {input}</p>
    </div>
  );
}

export default App
