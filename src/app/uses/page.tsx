function Uses() {

    const uses = [
        {
            section: 'Workstation',
            content: [
                {
                    name: "Laptop Gaming Acer Nitro 5 Tiger (8GB | 512GB)",
                    description: 'I started using this laptop since I went to college. It has accompanied me through many projects. Because it is a gaming laptop, its gaming capabilities are also very good and powerful enough for projects.'
                },
                {
                    name: "LG UltraGear 27GN60R-B 27' FHD IPS 144Hz Freesync",
                    description: 'The second main screen after the laptop screen helps me a lot in programming because now the working screen space is much larger.'
                },
                {
                    name: "Akko MonsGeek MG108 Black & Cyan",
                    description: 'Mechanical keyboards are indispensable tools for programmers. I recommend this keyboard because the keystrokes are very satisfying.'
                },
                {
                    name: "Gaming chair E-Dra EGC231 WISDOM Black",
                    description: "The chair is a very important part for me because I sit in front of the computer a lot. I did not regret buying this chair because it is very comfortable and provides a great experience. Of course it's not cheap at all."
                },
            ]
        },
        {
            section: 'Development tools',
            content: [
                {
                    name: "Visual Studio Code",
                    description: 'I recommend using'
                },
                {
                    name: "Jira",
                    description: 'I recommend using'
                },
                {
                    name: "IntelliJ IDEA",
                    description: 'I recommend using'
                },
                {
                    name: "GitHub",
                    description: 'I recommend using'
                },
                {
                    name: "AWS S3",
                    description: 'I recommend using'
                },
                {
                    name: "Docker",
                    description: 'I recommend using'
                },
            ]
        },
        {
            section: 'Design',
            content: [
                {
                    name: "Figma",
                    description: ''
                },
            ]
        },
        // {
        //     section: 'Productivity',
        //     content: [
        //         {
        //             name: "Alfred",
        //             description: 'It’s not the newest kid on the block but it’s still the fastest. The Sublime Text of the application launcher world.'
        //         },
        //         {
        //             name: "Reflect",
        //             description: 'Using a daily notes system instead of trying to keep things organized by topics has been super powerful for me. And with Reflect, it’s still easy for me to keep all of that stuff discoverable by topic even though all of my writing happens in the daily note.'
        //         },
        //         {
        //             name: "SavvyCal",
        //             description: 'Great tool for scheduling meetings while protecting my calendar and making sure I still have lots of time for deep work during the week.'
        //         },
        //         {
        //             name: "Focus",
        //             description: 'Simple tool for blocking distracting websites when I need to just do the work and get some momentum going.'
        //         },
        //     ]
        // },
    ]

    return (
        <main className="flex-auto">
            <div className="sm:px-8 mt-16 sm:mt-32">
                <div className="mx-auto w-full max-w-7xl lg:px-8">
                    <div className="relative px-4 sm:px-8 lg:px-12">
                        <div className="mx-auto max-w-2xl lg:max-w-5xl">
                            <header className="max-w-2xl">
                                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                                Welcome to a curated list of the tech I use.</h1>
                                <p className="leading-7 mt-6 text-base text-zinc-600 dark:text-zinc-400">As an developer, 
                                I have been spending hours and hours at my desk every day. So, I have been continuously improving my workspace in order to boost my productivity.</p>
                            </header>
                            <div className="mt-16 sm:mt-20">
                                <div className="space-y-20">
                                    {uses.map((use) => (
                                        <section key={use.section} aria-labelledby=":S1:"
                                            className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                                            <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
                                                <h2 id=":S1:" className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                                                    {use.section}</h2>
                                                <div className="md:col-span-3">
                                                    <ul role="list" className="space-y-16">
                                                        {use.content.map((c) => (
                                                            <li key={c.name} className="group relative flex flex-col items-start">
                                                                <h3
                                                                    className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                                                    {c.name}</h3>
                                                                <p className="leading-6 relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                                                    {c.description}</p>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </section>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Uses