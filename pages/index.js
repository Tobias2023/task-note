import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import taskData from "../public/data/mockData";
import TaskList from "../src/components/elements/task-list/list"

export default function Home() {
  return (
   <TaskList />
  );
}
