"use client";
import { useState, useId, createContext } from 'react';
import { Inter } from "next/font/google"
import Header from "@/components/header"
import TodoProgress from "@/components/TodoProgress"
import TodoForm from "@/components/Form"
import TodoWrap from "@/components/TodoWrap"


// import { v4 as uuidv4 } from 'uuid';


const inter = Inter({ subsets: ["latin"] });

export default function Home() {


  const [todoJSON, setTodoJSON] = useState([
    {
      id: useId(),
      text: "Build a todo app",
      complete: true,
    },
    {
      id: useId(),
      text: "Write an article about building an Todo App",
      complete: false,
    },
    {
      id: useId(),
      text: "Publish the article",
      complete: false,
    },
  ]);


  const completedTodoArr = todoJSON.filter((ele) => ele.complete === true);
  return (
    <div className="wrapper">
      <Header />
      <TodoProgress completed_task={completedTodoArr.length} total_task={todoJSON.length} />
      <TodoForm setTodoJSON={setTodoJSON} />
      <TodoWrap todoJSON={todoJSON} setTodoJSON={setTodoJSON} />
    </div>
  );
}
