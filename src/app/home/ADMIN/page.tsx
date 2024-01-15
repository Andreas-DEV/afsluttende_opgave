'use client'
import styles from "../ADMIN/page.module.scss"
import axios from "axios"
import { useState, useEffect } from "react"
import Navbar from "../../navbar/page"
import Error from "@/app/components/Error"
import Loader from "@/app/components/Loader"
import useRequestData from "@/app/components/hook/useRequestData"

export default function Home() {

    const { data, isLoading, error, makeRequest } = useRequestData();

    /* const imgSrc = "http://localhost:5023/images/"

    const [aboutus, setAboutus] = useState([])
    const getAboutus = async () => {
        axios.get('http://127.0.0.1:5023/aboutus')
            .then(response => {
                setAboutus(response.data)
            })
    }

    const [services, setServices] = useState([])
    const getServices = async () => {
        axios.get('http://127.0.0.1:5023/services')
            .then(response => {
                setServices(response.data)
            })
    } */

    const testData = `<p>Hos Hammel Haveservice er vi en virksomhed, som varetager en bred skare af forskellige arbejdsopgaver inden for havearbejde og kan blandt andet hj&aelig;lpe til med:</p><ul><li>H&aelig;kklipning</li><li>Gr&aelig;ssl&aring;ning</li><li>Tr&aelig;f&aelig;ldning</li><li>Bel&aelig;gning</li></ul>
    <p>Kort og godt er vi de rette at kontakte ved en enhver type af opgave inden for haveservice, og med mange &aring;rs erfaring i faget, kan du trygt lade dit valg falde p&aring; netop os.</p>`

    useEffect(() => {
        makeRequest('http://localhost:5023/aboutus', 'GET');

        /* getAboutus()
        getServices() */
    }, [])

    function putRequest(e) {
        const fd = new FormData(e.target)
        makeRequest('http://localhost:5023/aboutus/admin', 'PUT', fd)

    }


    return (
        <>
        
            {isLoading && <h2>Loader ...</h2>}

            {error && <h2>Error ...</h2>}

            <h1 id={styles.header}>Admin kontrolpanel</h1>
            {data &&
                <main id={styles.mainContainer}>

                    <form onSubmit={putRequest} id={styles.formContainer} action="">

                        <textarea name="content" id={styles.textarea} cols="30" rows="10">

                            {data.content}

                        </textarea>

                        <button type="submit" id={styles.btn}>Edit</button>

                    </form>
                    <div>
                        <h2 id={styles.liveTitle}>Live view</h2>
                        <p dangerouslySetInnerHTML={{ __html: data.content }} id={styles.liveData}></p>
                    </div>
                </main>


            }
        </>
    )
}