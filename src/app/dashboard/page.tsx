'use client'
import { useState, useEffect } from "react";
import { SessionProvider } from "next-auth/react"
import { PageHeader } from "../layout/PageHeader";
import { BuySell } from "../layout/BuySell";
import { TradeView } from "../layout/TradeView";

interface stock {
    name: string,
    data: number,
    hours: number,
}

export default function Dashboard() {

    const [ifSubmit, setSubmit] = useState(false);

    return <div className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]
    scroll-smooth grid bg-neutral-100 grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <SessionProvider>
        <PageHeader />

        <div className="flex flex-col mt-16 items-center">
            <div className="max-w-md mx-20 ">   
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                    <button onClick={() => {setSubmit(true)}}
                     className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </div>

            {ifSubmit ? <div  className="flex flex-row gap-16 justify-between items-center mt-16">
                <BuySell/>
                <TradeView/>
            </div> : null}
            
        </div>
        </SessionProvider>

    </div>;
}
