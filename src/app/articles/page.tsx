function Articles() {
    const articles = [
        {
          date: 'December 1, 2023',
          title: 'Academy platform provides online drawing courses',
          description: 'ArtHub courses are video-based experiences that give students the chance to learn actionable skills. Whether you have experience teaching, or it’s your first time, we’ll help you package your knowledge into an online course that improves student lives.'
        },
        {
          date: 'August 22, 2023',
          title: 'Embedded system monitors temperature using Blynk',
          description: 'We will see how to make ESP8266 LoRa Gateway for Arduino and LM35 temperature sensor. The temperature can be monitored from any part of the world with Blynk if the internet connection is available.'
        },
        // {
        //   date: 'September 2, 2022',
        //   title: 'Rewriting the cosmOS kernel in Rust',
        //   description: 'When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language, but it’s been a while since I’ve seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week.'
        // }
      ]
    return (
        <main className="flex-auto">
            <div className="sm:px-8 mt-16 sm:mt-32">
                <div className="mx-auto w-full max-w-7xl lg:px-8">
                    <div className="relative px-4 sm:px-8 lg:px-12">
                        <div className="mx-auto max-w-2xl lg:max-w-5xl">
                            <header className="max-w-2xl">
                                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                                Writing on software projects, interesting technology, and music.</h1>
                                <p className="leading-7 mt-6 text-base text-zinc-600 dark:text-zinc-400">All of my thoughts on
                                    programming, leadership, product design, and more.</p>
                            </header>
                            <div className="mt-16 sm:mt-20">
                                <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                                    <div className="flex max-w-3xl flex-col space-y-16">
                                        {articles.map((article) => (
                                            <article key={article.title} className="md:grid md:grid-cols-4 md:items-baseline">
                                                <div className="md:col-span-3 group relative flex flex-col items-start">
                                                    <h2
                                                        className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                                        <div
                                                            className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl">
                                                        </div><a
                                                            href="/articles/crafting-a-design-system-for-a-multiplanetary-future"><span
                                                                className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span><span
                                                                    className="relative z-10">{article.title}</span></a>
                                                    </h2><time
                                                        className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
                                                    ><span
                                                        className="absolute inset-y-0 left-0 flex items-center"
                                                        aria-hidden="true"><span
                                                            className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span></span>{article.date}</time>
                                                    <p className="leading-6 relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                                        {article.description}
                                                    </p>
                                                    <div aria-hidden="true"
                                                        className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">
                                                        Read article<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"
                                                            className="ml-1 h-4 w-4 stroke-current">
                                                            <path d="M6.75 5.75 9.25 8l-2.5 2.25" stroke-width="1.5"
                                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg></div>
                                                </div><time
                                                    className="mt-1 hidden md:block relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500"
                                                >{article.date}</time>
                                            </article>
                                        ))}


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Articles