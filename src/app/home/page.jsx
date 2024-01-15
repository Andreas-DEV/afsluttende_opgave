/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client'
import styles from "../home/page.module.scss"
import Error from "@/app/components/Error"
import Loader from "@/app/components/Loader"
import axios from "axios"
import { useState, useEffect } from "react"
import Navbar from "../navbar/page"
import useRequestData from "../components/hook/useRequestData"

export default function Home() {

    const { data, isLoading, error, makeRequest } = useRequestData();
    const { data: dataImg, isLoading: isLoadingImg, error: errorImg, makeRequest: makeRequestImg } = useRequestData();

    const imgSrc = "http://localhost:5023/images/"

    useEffect(() => {
        makeRequestImg('http://localhost:5023/services', 'GET');
        console.log(makeRequestImg);
    }, [])

    useEffect(() => {

        makeRequest('http://localhost:5023/aboutus', 'GET');

    }, [])

    return (
        <>

            {isLoading && <h2>Loader ...</h2>}

            {error && <h2>Error ...</h2>}

            {data &&
                <main id={styles.mainContainer}>

                    <div id={styles.leftContainer}>

                        <div id={styles.titlecontentContainer}>
                            <h1 dangerouslySetInnerHTML={{ __html: data.title }} />
                            <hr id={styles.ruler} />
                            <div id={styles.contentContainer} dangerouslySetInnerHTML={{ __html: data.content }}></div>
                            <a id={styles.btn} href="/">Se alle ydelser</a>
                        </div>

                    </div>

                    <div id={styles.rightContainer}>

                        <div id={styles.servicesContainer}>

                            <div id={styles.left}>

                                <img id={styles.image} src={imgSrc + dataImg[1].image} alt="" />
                                <h2 id={styles.serviceTitle}>
                                    {dataImg[1].title}
                                </h2>
                                <span id={styles.imgText}>
                                    {dataImg[1].content}
                                </span>

                            </div>

                            <div id={styles.right}>

                                <img id={styles.image} src={imgSrc + dataImg[0].image} alt="" />
                                <h2 id={styles.serviceTitle}>
                                    {dataImg[0].title}
                                </h2>
                                <span id={styles.imgText}>
                                    {dataImg[0].content}
                                </span>

                            </div>

                        </div>

                    </div>
                </main >
            }
        </>
    )
}