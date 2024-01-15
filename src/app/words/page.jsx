'use client'
import styles from "./page.module.scss"
import { useState, useEffect } from 'react'
import makeRequestData from "@/app/components/hook/useRequestData"


export default function Words() {


  const { data, isLoading, error, makeRequest } = makeRequestData()

  const [word, setWord] = useState('')

  useEffect(() => {
    makeRequest("https://wordsapiv1.p.rapidapi.com/words/" + word + "/typeOf", 'GET', null, {
      'X-RapidAPI-Key': 'e0aab5ec96mshfbce547af7b7e2dp1f7bdejsn18bdf573d57e',
      'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
    })
  }, [word])


  console.log(data);


  return (
    <div id={styles.mainContainer}>
      <input type="text" name="" id={styles.searchField} onChange={e => setWord(e.target.value)} />

      {data && data.typeOf.map((e, i) => (

        <p key={i} id={styles.test}>
          {data.typeOf[i]}
        </p>
      ))
      }

    </div >
  )
}