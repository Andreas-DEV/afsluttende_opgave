'use client'
import styles from "@/app/vejret/page.module.scss"
import Navbar from "@/app/navbar/page"
import Error from "../components/Error"
import Loader from "../components/Loader"
import useRequestData from "../components/hook/useRequestData"
import { useState, useEffect } from 'react'

export default function Vejret() {

    const { data, isLoading, error, makeRequest } = useRequestData()

    const [itemsPerPage, setitemsPerPage] = useState(10)

    const [zip, setZip] = useState("8000")

    useEffect(() => {

        if (zip.length === 4) {
            makeRequest("https://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",dk&appid=e6e34bc2868de7c1982e9b791d0c139a")
        }



    }, [zip])


    return (
        <main id={styles.mainContainer}>

            {isLoading && <h2>Loader ...</h2>}

            {error && <h2>Error ...</h2>}

            {data &&

                <div>
                    <div className=''>
                        <button className='btn'>Search</button>
                        <input onChange={e => { setZip(e.target.value) }} type="text" className='w-1/6 text-center' id="" />
                    </div>


                    <h2>
                        Vejret for {data.name}
                    </h2>
                    <p>Vind: {data.wind.speed} | {data.wind.deg} | {data.wind.gust}</p>
                </div>
            }

        </main>
    )
}