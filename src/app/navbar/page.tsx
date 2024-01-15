import styles from "../navbar/page.module.scss"
import Head from "next/head";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownSection,
    DropdownItem
} from "@nextui-org/react";

export default function Navbar() {
    return (

        <nav id={styles.navbar}>



            <li><a href="/home">Forside</a></li>

            <li><a href="/home/ADMIN">Admin</a></li>

            <li><a href="/reviews">Reviews</a></li>

            <li><a href="/vejret">Vejret</a></li>

            <li><a href="/nyheder">Nyheder</a></li>

            <li><a href="/words">Words</a></li>

        </nav>
    )
}