/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import Navbar from "../navbar/page"
import styles from "@/app/reviews/page.module.scss"
import Image from "next/image";
import { useState, useEffect } from 'react'
import makeRequestData from "@/app/components/hook/useRequestData"

export default function Reviews() {

    const { data, isLoading, error, makeRequest } = makeRequestData()

    useEffect(() => {

        makeRequest('http://localhost:5023/reviews', 'GET');

    }, [])


    return (

        <div>
            <h1 id={styles.title}>Anmeldninger</h1>

            <main id={styles.mainContainer}>

                {isLoading && <h2>Loader ...</h2>}

                {error && <h2>Error ...</h2>}


                {data &&
                    data.map((e, i) => (

                        <div id={styles.reviewContainer} key={i}>
                            <div id={styles.review}>
                                <h3 id={styles.author}>
                                    {data[i].author}
                                </h3>
                                <hr />
                                <p id={styles.reviewContent}>{data[i].content}</p>
                            </div>
                        </div>
                    ))
                }
            </main>
        </div>

    )
}