"use client";

import { BackIcon } from "@/components/icons/back-icon";
import styles from "./page.module.css";
import { Card } from "@/components/card";
import { useRouter } from "next/navigation";

interface DrinkPageProps {
    searchParams: (search: string) => void;
}
  

export default function DrinkPage({ searchParams }: DrinkPageProps) {
    const router = useRouter();

    const handleGoToHome = () => {
        router.push("/");
    }


    const apiUrl = searchParams.search === "random"
        ? "https://www.thecocktaildb.com/api/json/v1/1/random.php"
        : `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchParams.search}`;


    return( 
        <main className={styles.main}>
            <header className={styles.header}>
                <button className={styles.btnBack} onClick={handleGoToHome}> 
                    <BackIcon/>
                </button>
                <h1 className={styles.title}>{searchParams?.search}</h1>
                <div></div>
            </header>

            <div className={styles.cardList}>
                <Card imageUrl="https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg" title="155 Belmont"/>
                <Card imageUrl="https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg" title="155 Belmont"/>
                <Card imageUrl="https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg" title="155 Belmont"/>
            </div>
        </main>
    )
}