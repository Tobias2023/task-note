import React from 'react'
import NavBar from "../src/components/elements/nav/NavBar"
import styles from "../styles/Home.module.css"
import Head from "next/head";


export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TaskList</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div class="flex justify-center items-center pt-20" >
        <div class="px-20 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div class="flex flex-col items-center pt-10 pb-10">
        <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://media-exp1.licdn.com/dms/image/C4D03AQH10HAgi_sfeA/profile-displayphoto-shrink_800_800/0/1618678030945?e=1658966400&v=beta&t=Brk5957DXDcLqPNpSheic2VbTw1snZpZiO8kGoNC9aI" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Tobias Scott</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
        <div class="flex mt-4 space-x-3 lg:mt-6">
            <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
            <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
        </div>
    </div>
</div>
</div>
      </div>
  )
}
