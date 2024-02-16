import { BackIcon } from "@/components/icons/back-icon";
import styles from "./page.module.css";

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
        </main>
    )
}