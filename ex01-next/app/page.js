// import Image from "next/image";
// import styles from "./page.module.css";

import{ Profile } from  "@/components/Profile";
import { TodoList } from "@/components/TodoList";


export default function Home() {
  return (
    <section>
      <h1>iae mamae</h1>
      <Profile />
      <TodoList />
      <hr/>
    </section>
  );
}
 