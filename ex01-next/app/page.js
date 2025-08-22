// import Image from "next/image";
// import styles from "./page.module.css";

import { Avatar } from "@/components/Avatar";
import{ Profile } from  "@/components/Profile";
import { TodoList } from "@/components/TodoList";


export default function Home() {
  return (
    <section>
      <h1>iae mamae</h1>
      <Profile 
      person={{
        name: "katsuko Saruhashi",
        imageId: "1bX5QH6",
        
      }}
      />
      
      
      <hr/>
    </section>
  );
}
 