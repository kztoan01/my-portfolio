import Card3D from '@/components/Card3D'
import toan from  '../../../public/assets/images/profile-pic.jpg'
import Image from 'next/image'
export default function About() {
    const contact = [
        {
            link: 'https://twitter.com/yothatstoan',
            name: 'flex',
            platform: 'Follow on Twitter',
            icon: <svg viewBox="0 0 24 24" aria-hidden="true"
                className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500">
                <path
                    d="M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z">
                </path>
            </svg>
        },
        {
            link: 'https://www.instagram.com/yothats.toan/?hl=en',
            name: 'mt-4 flex2',
            platform: 'Follow on Instagram',
            icon: <svg viewBox="0 0 24 24" aria-hidden="true"
                className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500">
                <path
                    d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z">
                </path>
                <path
                    d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z">
                </path>
            </svg>
        },
        {
            link: 'https://github.com/kztoan01',
            name: 'mt-4 flex',
            platform: 'Follow on GitHub',
            icon: <svg viewBox="0 0 24 24" aria-hidden="true"
                className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z">
                </path>
            </svg>
        },
        {
            link: 'https://www.facebook.com/toan.tranbao.22082003/',
            name: 'mt-4 flex',
            platform: 'Follow on Facebook',
            icon: <svg aria-hidden="true"
                className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
            </svg>
        },
    ]
    return (
        <div className="flex-auto">
            <div className="sm:px-8 mt-16 sm:mt-32">
                <div className="mx-auto w-full max-w-7xl lg:px-8">
                    <div className="relative px-4 sm:px-8 lg:px-12">
                        <div className="mx-auto max-w-2xl lg:max-w-5xl">
                            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                                <div className="lg:pl-20">
                                    <div className="max-w-xs px-2.5 lg:max-w-none"><img alt="" loading="lazy" width="800"
                                        height="800" decoding="async" data-nimg="1"
                                        className="relative aspect-square rotate-6 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                                        src="https://storage.cloud.google.com/arthub-bucket/toan.jpg"
                                    /></div>
                                    <div className="max-w-xs px-2.5 lg:max-w-none"><Image alt="" loading="lazy" width="800"
                                        height="800" decoding="async" data-nimg="1"
                                        className="aspect-square -rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                                        src={toan}
                                    /></div>
                                </div>
                                <div className="lg:order-first lg:row-span-2">
                                    <h1
                                        className="font-sans text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                                        I’m Tran Bao Toan. I live in Ho Chi Minh City, where I design the future.</h1>
                                    <div className="leading-7 font-sans mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                                        <p>I've loved technology for as long as i can remember, and started studying software when I was only 8 years old,
                                            right after my mom bought me a brand new PC set powered by the Windows XP operating system.
                                            I learned how software like Windows Media Player works because I love music.</p>
                                        <p>The only thing I loved more than computers as a kid was music.
                                            My mom — a middle school music teacher, is the person who inspired me to love and pursue this subject.
                                            When I was 12 years old, I became proficient in music editing software (cut, merge, increase, decrease sound or
                                            more complicated things like adjusting tone for beats) so that
                                            I could help my mother with her music projects and teaching.</p>
                                        <p>
                                            I spent the next few summers learning more about various types of software, hardware,
                                            browsers and everything relating to computers as if I was born to master them and that is my passion.
                                            After destroying my old PC by illegally installing the latest Windows,
                                            my dad upgraded me to a new PC when I was 15 years old. This is a new chapter for my process of conquering software.
                                            It has helped me a lot in research and programming. It's fast, powerful, and has much better storage.
                                        </p>
                                        <p>Because I'm a boy, besides that, I'm also lucky to have my parents buy me genuine gaming devices like PS4, controller,... and most especially,
                                            Razer gaming speakers. I really liked it especially since I'm a music lover</p>
                                        <p>Today, I’m the founder of ArtHub and Melo, where we provide a platform for music and
                                            digital art with people who have the same passion so that the next generation of young people can
                                            continue the creativity and entertainment
                                            of the past and bring a new colorful world.</p>
                                    </div>
                                </div>
                                <div className="lg:pl-20">
                                    <ul role="list">
                                        {contact.map((c) => (
                                            <li key={c.platform} className={c.name} ><a target="_blank"
                                                className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                                                href={c.link}>{c.icon}<span className="ml-4">{c.platform}</span></a></li>
                                        ))}
                                        <li className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex"><a
                                            className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                                            href="mailto:kztoan01@gmail.com"><svg viewBox="0 0 24 24"
                                                aria-hidden="true"
                                                className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500">
                                                <path fill-rule="evenodd"
                                                    d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z">
                                                </path>
                                            </svg><span className="ml-4">kztoan01@gmail.com</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}