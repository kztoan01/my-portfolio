import Image from "next/image"
import arthub from '../../../../public/assets/images/arthub1.png'
export default function ArtHub() {
    return (
        <main className="flex-auto">
            <div className="sm:px-8 mt-16 lg:mt-32">
                <div className="mx-auto w-full max-w-7xl lg:px-8">
                    <div className="relative px-4 sm:px-8 lg:px-12">
                        <div className="mx-auto max-w-2xl lg:max-w-5xl">
                            <div className="xl:relative">
                                <div className="mx-auto max-w-2xl"><button type="button" aria-label="Go back to articles"
                                    className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0"><svg
                                        viewBox="0 0 16 16" fill="none" aria-hidden="true"
                                        className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400">
                                        <path d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5" strokeWidth="1.5"
                                            strokeLinecap="round" stroke-linejoin="round"></path>
                                    </svg></button>
                                    <article>
                                        <header className="flex flex-col">
                                            <h1
                                                className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                                                Introducing ArtHub: Platform that provides quality courses</h1><time
                                                    className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"><span
                                                        className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span><span
                                                            className="ml-3">December 6, 2023</span></time>
                                        </header>
                                        <div className="mt-8 leading-7 font-sans space-y-7 text-base text-zinc-600 dark:text-zinc-400" data-mdx-content="true">
                                            <p>There is a huge demand for drawing courses right now. 
                                                Drawing classes are usually requested by parents who wish to assist their kids develop better thinking skills and a passion for art. 
                                                Nonetheless, attending study centers is essential. 
                                                Time constraints are a major issue because most spare time is devoted to other disciplines like English and math. 
                                                Thus, a platform that provides drawing courses will enable parents to easily, swiftly, and pleasantly learn how to draw.</p>
                                            <p>Through video-based learning, ArtHub courses provide students the opportunity to acquire practical skills.
                                                 We will assist you in organizing your knowledge into an online course that enhances the lives of students, 
                                                regardless of whether you are an experienced educator or this is your first time.</p>
                                            <div className="max-w-xs px-2.5 lg:max-w-none">
                                                <Image alt=""
                                                className="relative aspect-square rounded-2xl bg-zinc-100 object-cover object-center dark:bg-zinc-800"
                                                src={arthub}
                                                />
                                            </div>
                                            <p>Developed a full-stack web application using with Spring Boot serving a REST API with React as the frontend.</p>
                                            {/* <h2 className="font-sans text-lg font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl">Sermone fata</h2>
                                            <p>Lorem markdownum, bracchia in redibam! Terque unda puppi nec, linguae posterior
                                                in utraque respicere candidus Mimasque formae; quae conantem cervice. Parcite
                                                variatus, redolentia adeunt. Tyrioque dies, naufraga sua adit partibus celanda
                                                torquere temptata, erit maneat et ramos, <a href="#">iam</a> ait dominari
                                                potitus! Tibi litora matremque fumantia condi radicibus opusque.</p>
                                            <p>Deus feram verumque, fecit, ira tamen, terras per alienae victum. Mutantur
                                                levitate quas ubi arcum ripas oculos abest. Adest <a href="#">commissaque
                                                    victae</a> in gemitus nectareis ire diva
                                                dotibus ora, et findi huic invenit; fatis? Fractaque dare superinposita
                                                nimiumque simulatoremque sanguine, at voce aestibus diu! Quid veterum hausit tu
                                                nil utinam paternos ima, commentaque.</p>

                                            <p>Aere repetiti cognataque natus. Habebat vela solutis saepe munus nondum adhuc
                                                oscula nomina pignora corpus deserat.</p>
                                            <h2 className="font-sans text-lg font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl">Lethaei Pindumve me quae dinumerat Pavor</h2>
                                            <p>Idem se saxa fata pollentibus geminos; quos pedibus. Est urnis Herses omnes nec
                                                divite: et ille illa furit sim verbis Cyllenius.</p>
                                            <ol>
                                                <li>Captus inpleverunt collo</li>
                                                <li>Nec nam placebant</li>
                                                <li>Siquos vulgus</li>
                                                <li>Dictis carissime fugae</li>
                                                <li>A tacitos nulla viginti</li>
                                            </ol>
                                            <p>Ungues fistula annoso, ille addit linoque motatque uberior verso
                                                <a href="#">rubuerunt</a> confine desuetaque. <em>Sanguine</em> anteit
                                                emerguntque expugnacior est pennas iniqui ecce <strong>haeret</strong> genus:
                                                peiora imagine
                                                fossas Cephisos formosa! Refugitque amata <a href="#">refelli</a>
                                                supplex. Summa brevis vetuere tenebas, hostes vetantis, suppressit, arreptum
                                                regna. Postquam conpescit iuvenis habet corpus, et erratica, perdere, tot mota
                                                ars talis.
                                            </p>

                                            <p>Sit volat naturam; motu Cancri. Erat pro simul quae valuit quoque timorem quam
                                                proelia: illo patrio <em>esse summus</em>, enim sua serpentibus, Hyleusque. Est
                                                coniuge
                                                recuso; refert Coroniden ignotos manat, adfectu.</p> */}
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        // <main classNameName="flex-auto">
        //     <div classNameName="sm:px-8 mt-16 lg:mt-32">
        //         <div classNameName="mx-auto w-full max-w-7xl lg:px-8">
        //             <div classNameName="relative px-4 sm:px-8 lg:px-12">
        //                 <div classNameName="mx-auto max-w-2xl lg:max-w-5xl">
        //                     <div classNameName="xl:relative">
        //                         <div classNameName="mx-auto max-w-2xl"><button type="button" aria-label="Go back to articles"
        //                             classNameName="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0"><svg
        //                                 viewBox="0 0 16 16" fill="none" aria-hidden="true"
        //                                 classNameName="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400">
        //                                 <path d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5" strokeWidth="1.5"
        //                                     strokeLinecap="round" stroke-linejoin="round"></path>
        //                             </svg></button>
        //                             <article>
        //                                 <header classNameName="flex flex-col">
        //                                     <h1
        //                                         classNameName="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        //                                         Crafting a design system for a multiplanetary future</h1><time
        //                                             classNameName="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"><span
        //                                                 classNameName="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span><span
        //                                                     classNameName="ml-3">September 5, 2022</span></time>
        //                                 </header>
        //                                 <div classNameName="mt-8 prose dark:prose-invert" data-mdx-content="true">
        //                                     <p>Most companies try to stay ahead of the curve when it comes to visual design, but
        //                                         for Planetaria we needed to create a brand that would still inspire us 100 years
        //                                         from now when humanity has spread across our entire solar system.</p>
        //                                     <img alt="" loading="lazy" width="1310" height="872" decoding="async" data-nimg="1"
        //                                         src="https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplanetaria-design-system.d4cfce90.png&w=1920&q=75"
        //                                     />
        //                                     <p>I knew that to get it right I was going to have to replicate the viewing
        //                                         conditions of someone from the future, so I grabbed my space helmet from the
        //                                         closet, created a new Figma document, and got to work.</p>
        //                                     <h2>Sermone fata</h2>
        //                                     <p>Lorem markdownum, bracchia in redibam! Terque unda puppi nec, linguae posterior
        //                                         in utraque respicere candidus Mimasque formae; quae conantem cervice. Parcite
        //                                         variatus, redolentia adeunt. Tyrioque dies, naufraga sua adit partibus celanda
        //                                         torquere temptata, erit maneat et ramos, <a href="#">iam</a> ait dominari
        //                                         potitus! Tibi litora matremque fumantia condi radicibus opusque.</p>
        //                                     <p>Deus feram verumque, fecit, ira tamen, terras per alienae victum. Mutantur
        //                                         levitate quas ubi arcum ripas oculos abest. Adest <a href="#">commissaque
        //                                             victae</a> in gemitus nectareis ire diva
        //                                         dotibus ora, et findi huic invenit; fatis? Fractaque dare superinposita
        //                                         nimiumque simulatoremque sanguine, at voce aestibus diu! Quid veterum hausit tu
        //                                         nil utinam paternos ima, commentaque.</p>

        //                                     <p>Aere repetiti cognataque natus. Habebat vela solutis saepe munus nondum adhuc
        //                                         oscula nomina pignora corpus deserat.</p>
        //                                     <h2>Lethaei Pindumve me quae dinumerat Pavor</h2>
        //                                     <p>Idem se saxa fata pollentibus geminos; quos pedibus. Est urnis Herses omnes nec
        //                                         divite: et ille illa furit sim verbis Cyllenius.</p>
        //                                     <ol>
        //                                         <li>Captus inpleverunt collo</li>
        //                                         <li>Nec nam placebant</li>
        //                                         <li>Siquos vulgus</li>
        //                                         <li>Dictis carissime fugae</li>
        //                                         <li>A tacitos nulla viginti</li>
        //                                     </ol>
        //                                     <p>Ungues fistula annoso, ille addit linoque motatque uberior verso
        //                                         <a href="#">rubuerunt</a> confine desuetaque. <em>Sanguine</em> anteit
        //                                         emerguntque expugnacior est pennas iniqui ecce <strong>haeret</strong> genus:
        //                                         peiora imagine
        //                                         fossas Cephisos formosa! Refugitque amata <a href="#">refelli</a>
        //                                         supplex. Summa brevis vetuere tenebas, hostes vetantis, suppressit, arreptum
        //                                         regna. Postquam conpescit iuvenis habet corpus, et erratica, perdere, tot mota
        //                                         ars talis.
        //                                     </p>

        //                                     <p>Sit volat naturam; motu Cancri. Erat pro simul quae valuit quoque timorem quam
        //                                         proelia: illo patrio <em>esse summus</em>, enim sua serpentibus, Hyleusque. Est
        //                                         coniuge
        //                                         recuso; refert Coroniden ignotos manat, adfectu.</p>
        //                                 </div>
        //                             </article>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </main>
    )
}