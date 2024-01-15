/* eslint-disable @next/next/no-img-element */
'use client'
{/* https://newsapi.org/v2/everything?q=bitcoin&apiKey=f3fddb0c37c84009a46a3e9c69f7498b */ }

import styles from "./page.module.scss"
import { useState, useEffect } from 'react'
import makeRequestData from "@/app/components/hook/useRequestData"

export default function Nyheder() {

    const { data, isLoading, error, makeRequest } = makeRequestData()

    const [title, setTitle] = useState('')
    const [language, setLanguage] = useState('en')

    useEffect(() => {

        makeRequest("https://newsapi.org/v2/everything?q=" + title + "&language=" + language + "&apiKey=f3fddb0c37c84009a46a3e9c69f7498b", "GET")


    }, [title])


    return (
        <div>
            <main id={styles.mainContainer}>
                <h3 id={styles.h3}>Søg efter nyhed</h3>
                <input onChange={e => { setTitle(e.target.value) }} type="text" className='' id={styles.input} />
                <select id={styles.articleLanguage} onChange={e => setLanguage(e.target.value)} value={language}>
                    <option value="en">Engelsk</option>
                    <option value="de">Tysk</option>
                    <option value="es">Spansk</option>
                    <option value="fr">Fransk</option>
                    <option value="he">Hebraisk</option>
                    <option value="it">Italiensk</option>
                    <option value="nl">Hollandsk</option>
                    <option value="no">Norsk</option>
                    <option value="pt">Portugisisk</option>
                    <option value="ru">Russisk</option>
                    <option value="sv">Svensk</option>
                    <option value="zh">Kinesisk</option>
                </select>
            </main>

            <div id={styles.loopContainer}>
                {data && data.articles.map((e, i) =>
                    <div key={i} id={styles.articleContainer}>
                        <div id={styles.articleContainer2}>
                            <img id={styles.articleImg} src={e.urlToImage} alt="" />
                            <div>
                                <h4 id={styles.articleTitle}>{e.title}</h4>
                                <p id={styles.articleContent}>{e.description}</p>
                                <a target="_blank" href={e.url} id={styles.articleLink}>Læs mere</a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}