import Link from "next/link";
import { Logo } from "../Logo/Logo";
import styles from "./Header.module.scss";
import { MenuItem } from "./MenuItem";

export async function Header(){
    
    return (
        <header>
            <nav>
                <ul className={styles.navListContainer}>
                    <li>
                        <Link href={"/dashboard"}>
                            <Logo 
                                fill={"#D3590B"}
                                width="147"
                                height="18.72"
                             />
                        </Link>
                    </li>
                    <li className={styles.navCenterItem}>
                        <MenuItem
                           label="Tableau de bord"
                           imgClass="svgTbord"
                           href="/dashboard"
                        />
                    
                        <MenuItem 
                           label="Projets"
                           imgClass="svgProjets"
                           href="/projets"
                        />
                    </li>
                    <li>
                        <Link href={"/mon-compte"}>
                            AD
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}