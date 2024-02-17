import { BackIcon } from "@/components/icons/back-icon";
import styles from "./page.module.css";
import { Card } from "@/components/card";

interface DrinkPageProps{

}

export default function DrinkPage(props: DrinkPageProps) {
    return( 
        <main className={styles.main}>
            <header className={styles.header}>
                <button className={styles.btnBack}> 
                    <BackIcon/>
                </button>
                <h1 className={styles.title}>Lemon</h1>
                <div></div>
            </header>

            <div className={styles.cardList}>
                <Card imageUrl="https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg" title="155 Belmont"/>
                <Card imageUrl="https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg" title="155 Belmont"/>
                <Card imageUrl="https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg" title="155 Belmont"/>
                <Card imageUrl="https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg" title="155 Belmont"/>
                <Card imageUrl="https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg" title="155 Belmont"/>
                <Card imageUrl="https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg" title="155 Belmont"/>
                <Card imageUrl="https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg" title="155 Belmont"/>
                <Card imageUrl="https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg" title="155 Belmont"/>
                <Card imageUrl="https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg" title="155 Belmont"/>
                <Card imageUrl="https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg" title="155 Belmont"/>
                <Card imageUrl="https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg" title="155 Belmont"/>
                <Card imageUrl="https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg" title="155 Belmont"/>
            </div>
        </main>
    )
}