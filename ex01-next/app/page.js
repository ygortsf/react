// import Image from "next/image";
// import styles from "./page.module.css";

import{ Profile } from  "@/components/Profile";
import {Todolist} from "@/components/Todolist";


export default function Home() {
  return (
    <section>
      <h1>iae mamae</h1>
      <Profile />
      <Todolist />
      <hr/>
    </section>
  )
}
 