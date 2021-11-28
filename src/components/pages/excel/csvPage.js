import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';


export default function CsvPage() {
	let router=useRouter();
    return (
        <>
            <div className="flex flex-col gap-10">


<button onClick={()=>router.push("/")}>go home</button>
                CSV
            </div>        </>
    )
}
