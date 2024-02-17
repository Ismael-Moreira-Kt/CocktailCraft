"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { PrimaryInput } from "../components/primary-input";
import { useState } from "react";
import { ButtonPrimay } from "@/components/primary-button";
import { useRouter } from "next/navigation";



export default function Home() {
  const [search, setSearch] = useState("");
  const handleChange = (value: string) => {
    setSearch(value);
  }; 
  
  const router = useRouter();
  const handleNavigate = (value: string) => {
    router.push("/drinks?search=" + value)
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleNavigate(search);
    }
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>What do you want to drink today?</h1>
      
      <PrimaryInput 
        value={search} 
        label="Search by your favorite ingredient" 
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />

      <p className={styles.paragraph}>OR</p>

      <ButtonPrimay label="Get Surprised!" onClick={() => handleNavigate("random")}></ButtonPrimay>
    </main>
  );
}