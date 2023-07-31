import React from 'react'

export default function OuterComponent({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="bg-cover bg-gradient-to-r from-gray-900 to-gray-700 ">
            <main className="flex min-h-screen flex-col items-center justify-center p-24">
                <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-yellow-200 after:via-yellow-400 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>

                {children}
            </main>
        </div>
    )
}
