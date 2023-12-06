export default function Speaking() {

    const speakings = [
        {
            genre: 'Conferences',
            posts: [
                {
                    date: 'SysConf 2021',
                    title: 'In space, no one can watch you stream — until now',
                    description: 'A technical deep-dive into HelioStream, the real-time streaming library I wrote for transmitting live video back to Earth.',
                    option: 'Watch video'
                },
                {
                    date: 'Business of Startups 2020',
                    title: 'Lessons learned from our first product',
                    description: 'They say that if you’re not embarassed by your first version, you’re doing it wrong. Well when you’re selling DIY space shuttle kits it turns out it’s a bit more complicated.',
                    option: 'Watch video'
                },

            ]
        },
        {
            genre: 'Podcasts',
            posts: [
                {
                    date: 'Encoding Design, July 2022',
                    title: 'Using design as a competitive',
                    description: 'How we used world-className visual design to attract a great team, win over customers, and get more press for Planetaria.',
                    option: 'Listen to podcast'
                },
                {
                    date: 'The Escape Velocity Show, March 2022',
                    title: 'Bootstrapping an aerospace company to $17M ARR',
                    description: 'The story of how we built one of the most promising space startups in the world without taking any capital from investors.',
                    option: 'Listen to podcast'
                },
                {
                    date: 'How They Work Radio, September 2021',
                    title: 'Programming your company operating system',
                    description: 'On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation.',
                    option: 'Listen to podcast'
                },
            ]
        },

    ]

    return (
        <main className="flex-auto">
            <div className="sm:px-8 mt-16 sm:mt-32">
                <div className="mx-auto w-full max-w-7xl lg:px-8">
                    <div className="relative px-4 sm:px-8 lg:px-12">
                        <div className="mx-auto max-w-2xl lg:max-w-5xl">
                            <header className="max-w-2xl">
                                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">I’ve
                                    spoken at events all around the world and been interviewed for many podcasts.</h1>
                                <p className="leading-7 mt-6 text-base text-zinc-600 dark:text-zinc-400">One of my favorite ways to share my
                                    ideas is live on stage, where there’s so much more communication bandwidth than there is in
                                    writing, and I love podcast interviews because they give me the opportunity to answer
                                    questions instead of just present my opinions.</p>
                            </header>
                            <div className="mt-16 sm:mt-20">
                                <div className="space-y-20">
                                    {speakings.map((speaking) => (
                                        <section key={speaking.genre} aria-labelledby=":S1:"
                                            className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                                            <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
                                                <h2 id=":S1:" className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                                                    {speaking.genre}</h2>
                                                <div className="md:col-span-3">
                                                    <div className="space-y-16">
                                                        {speaking.posts.map((post) => (
                                                            <article className="group relative flex flex-col items-start">
                                                                <h3
                                                                    className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                                                    <div
                                                                        className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl">
                                                                    </div>
                                                                    <a href="#">
                                                                        <span
                                                                            className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl">
                                                                        </span>
                                                                        <span
                                                                            className="relative z-10">{post.title}
                                                                        </span>
                                                                    </a>
                                                                </h3>
                                                                <p
                                                                    className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5">
                                                                    <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                                                                        <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500">
                                                                        </span>
                                                                    </span>{post.date}
                                                                </p>
                                                                <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                                                    {post.description}
                                                                </p>
                                                                <div aria-hidden="true"
                                                                    className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">
                                                                    {post.option}
                                                                    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"
                                                                        className="ml-1 h-4 w-4 stroke-current">
                                                                        <path d="M6.75 5.75 9.25 8l-2.5 2.25" stroke-width="1.5"
                                                                            stroke-linecap="round" stroke-linejoin="round">
                                                                        </path>
                                                                    </svg>
                                                                </div>
                                                            </article>
                                                        ))}
                                                    </div>
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