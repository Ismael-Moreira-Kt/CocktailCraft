"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { PrimaryInput } from "../components/primary-input";
import { useState } from "react";
import { ButtonPrimay } from "@/components/primary-button";



export default function Home() {
  const [search, setSearch] = useState("");
  const handleChange = (value: string) => {
    setSearch(value);
  }; 
  
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>What do you want to drink today?</h1>
      
      <PrimaryInput value={search} label="Search by your favorite ingredient" onChange={handleChange}/>

      <p className={styles.paragraph}>OR</p>

      <ButtonPrimay label="Get Surprised!" onClick={() => {}}></ButtonPrimay>
    </main>
  );
}