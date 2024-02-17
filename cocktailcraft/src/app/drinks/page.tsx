"use client";

import { BackIcon } from "@/components/icons/back-icon";
import styles from "./page.module.css";
import { Card } from "@/components/card";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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

    const [drinks, setDrinks] = useState([]);
    const [error, setError] = useState(null);

    const loadDrinks = async () => {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Erro ao carregar os drinks');
            }

            const data = await response.json();
            setDrinks(data.drinks || []);
        } catch (error) {
            setError(error.message);
            router.push("/");
        }
    };
    
    useEffect(() => {
        loadDrinks();
    }, [searchParams]);

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
                {drinks.map((drink, index) => (
                    <Card
                        key={index}
                        imageUrl={drink.strDrinkThumb}
                        title={drink.strDrink}
                    />
                ))}
            </div>
        </main>
    )
}