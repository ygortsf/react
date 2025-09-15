import Link from "next/link";

export default function Home() {
  return (
    <div>
      <img
      src= "https://lh3.googleusercontent.com/77dfXgXzldAI4VL7jtUEzYgdahy_mNH4nQ9Fr752dHRs93Lmp8pU8AWU37tcN075D63BSOPGP1G-9iFOj4Oa106a9g=s1280-w1280-h800" 
      width={500}
      height={500}
      />

      <Link href="menu">clique aqui</Link>
    </div>
  );
}
