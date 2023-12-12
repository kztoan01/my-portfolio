"use client"
import Image from "next/image"
import hardware from '../../../../public/assets/images/hardware.png'
import hardware2 from '../../../../public/assets/images/hardware2.png'
import hardware3 from '../../../../public/assets/images/hardware3.png'
import schematic1 from '../../../../public/assets/images/schematic.png'
import schematic2 from '../../../../public/assets/images/schematic2.png'
import result from '../../../../public/assets/images/result.png'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useState } from "react"
import Link from "next/link"
export default function IoT() {
    const codeModels = `namespace PokemonService.Models
    {
        public class PokemonDto
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public string OwnerName { get; set; }
        }
    }
    
    namespace PokemonService.Models
    {
        public class PokemonDetailDto
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public string Category { get; set; }
            public DateTime BirthDate { get; set; }
            public string OwnerName { get; set; }
        }
    }`
    const codeController = `// GET api/Pokemons
    public IQueryable<PokemonDto> GetPokemons()
    {
        var pokemons = from p in db.Pokemons
                    select new PokemonDto()
                    {
                        Id = p.Id,
                        Name = p.Name,
                        OwnerName = p.Owner.OwnerName
                    };
        return pokemons;
    }
    
    // GET api/Pokemons/3
    [ResponseType(typeof(PokemonDetailDto))]
    public async Task<IHttpActionResult> GetPokemon(int id)
    {
        var pokemon = await db.Pokemons
                            .Include(p => p.Owner)
                            .Select(b =>
                            new PokemonDetailDto()
                            {
                                Id = p.Id,
                                Name = p.Name,
                                Category = p.Category,
                                BirthDate = p.BirthDate,
                                OwnerName = p.Owner.OwnerName
                            })
                            .SingleOrDefaultAsync(p => p.Id == id);
        if (pokemon == null)
        {
            return NotFound();
        }
        return Ok(pokemon);
    }`;
    const codeSQL = `SELECT 
    [Extent1].[Id] AS [Id], 
    [Extent1].[Name] AS [Name], 
    [Extent2].[OwnerName] AS [OwnerName]
    FROM  [dbo].[Pokemons] AS [Extent1]
    INNER JOIN [dbo].[Owners] AS [Extent2] ON [Extent1].[OwnerId] = [Extent2].[Id]`;
    const codePost = `[ResponseType(typeof(PokemonDto))]
    public async Task<IHttpActionResult> AddPokemon(Pokemon pokemon)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }
    
        db.Pokemons.Add(pokemon);
        await db.SaveChangesAsync();
    
        // New code:
        // Load owner name
        db.Entry(Pokemon).Reference(x => x.Owner).Load();
    
        var dto = new PokemonDto()
        {
            Id = Pokemon.Id,
            Name = Pokemon.Name,
            OwnerName = Pokemon.Owner.Name
        };
    
        return CreatedAtRoute("DefaultApi", new {id = Pokemon.Id}, dto);
    }`
    const [copy1, setCopy1] = useState(false)
    const [copy2, setCopy2] = useState(false)
    const [copy3, setCopy3] = useState(false)
    const [copy4, setCopy4] = useState(false)
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
                                        <path d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5" stroke-width="1.5"
                                            stroke-linecap="round" strokeLinejoin="round"></path>
                                    </svg></button>
                                    <article>
                                        <header className="flex flex-col">
                                            <h1
                                                className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                                                Create Data Transfer Objects (DTOs) with C#</h1><time
                                                    className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"><span
                                                        className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span><span
                                                            className="ml-3">December 12, 2023</span></time>
                                        </header>
                                        <div className="mt-8 leading-7 font-sans space-y-7 text-base text-zinc-600 dark:text-zinc-400" data-mdx-content="true">
                                            <p>Currently, the client may access the database entities using our web API. Data that corresponds to your database tables directly is sent to the client. But that’s not necessarily a smart move. There are moments when you wish to send a customer data in a different format. As an illustration, you may wish to: </p>
                                            <ol>
                                                <li>● Take out any recurring references (prior part).</li>
                                                <li>● Keep some properties hidden from clients that aren’t supposed to see them.</li>
                                                <li>● Leave out some characteristics to minimize the size of the payload.</li>
                                                <li>● Object graphs with nested objects should be flattened to improve client convenience.</li>
                                                <li>● Steer clear of "over-posting" weaknesses. (For more on over-posting, see Model Validation.)</li>
                                                <li>● Your database layer and service layer should be separated.</li>
                                            </ol>

                                            <p>You can define a data transfer object (DTO) to do this.
                                                DTO is an object that specifies how data will be delivered over a network.
                                                Let’s see how that works with the Pokemon entity. In the Models folder, add two DTO classes:</p>
                                            <div className="max-w-xs px-2.5 lg:max-w-none">

                                                <div className="max-w-2xl min-w-[25rem] bg-[#3a404d] rounded-md overflow-hidden">
                                                    <div className="bg-[#202224] flex justify-between px-4 text-white text-xs items-center">
                                                        <p className="text-sm">C#</p>
                                                        {copy1 ? (<button className="py-1 inline-flex items-center gap-1">
                                                            Copied!
                                                        </button>) : (<button className="py-1 inline-flex items-center gap-1" onClick={() => {
                                                            navigator.clipboard.writeText(codeModels)
                                                            setCopy1(true)
                                                            setTimeout(() => {
                                                                setCopy1(false)
                                                            }, 3000);
                                                        }}>
                                                            Copy
                                                        </button>)}
                                                    </div>
                                                    <SyntaxHighlighter
                                                        language="c#"
                                                        style={atomOneDark}
                                                        customStyle={{
                                                            padding: "25px"
                                                        }}
                                                        wrapLongLines={true}
                                                    >
                                                        {codeModels}
                                                    </SyntaxHighlighter>
                                                </div>
                                            </div>
                                            <p>With the exception of <code className="bg-gray-800 rounded">OwnerName</code>, which is a string that will store the owner name, the <code className="bg-gray-800 rounded">PokemonDetailDto</code> class has all of the attributes from the <code className="bg-gray-800 rounded">Pokemon model</code>. A subset of <code className="bg-gray-800 rounded">PokemonDetailDto</code> characteristics are present in the <code className="bg-gray-800 rounded">PokemonDto</code> class.</p>
                                            <p>Next, add DTO-returning versions of the two GET methods to the <code className="bg-gray-800 rounded">PokemonsController</code> class. The LINQ Select statement will be utilized to transform <code className="bg-gray-800 rounded">Pokemon</code> entities into DTOs.</p>
                                            <div className="max-w-xs px-2.5 lg:max-w-none">

                                                <div className="max-w-2xl min-w-[25rem] bg-[#3a404d] rounded-md overflow-hidden">
                                                    <div className="bg-[#202224] flex justify-between px-4 text-white text-xs items-center">
                                                        <p className="text-sm">C#</p>
                                                        {copy2 ? (<button className="py-1 inline-flex items-center gap-1">
                                                            Copied!
                                                        </button>) : (<button className="py-1 inline-flex items-center gap-1" onClick={() => {
                                                            navigator.clipboard.writeText(codeController)
                                                            setCopy2(true)
                                                            setTimeout(() => {
                                                                setCopy2(false)
                                                            }, 3000);
                                                        }}>
                                                            Copy
                                                        </button>)}
                                                    </div>
                                                    <SyntaxHighlighter
                                                        language="c#"
                                                        style={atomOneDark}
                                                        customStyle={{
                                                            padding: "25px"
                                                        }}
                                                        wrapLongLines={true}
                                                    >
                                                        {codeController}
                                                    </SyntaxHighlighter>
                                                </div>
                                            </div>
                                            <p>This is the SQL that the updated <code className="bg-gray-800 rounded">GetPokemons</code> method produced. The EF converts the LINQ Select into a SQL SELECT query, as you can see.</p>
                                            <div className="max-w-xs px-2.5 lg:max-w-none">

                                                <div className="max-w-2xl min-w-[25rem] bg-[#3a404d] rounded-md overflow-hidden">
                                                    <div className="bg-[#202224] flex justify-between px-4 text-white text-xs items-center">
                                                        <p className="text-sm">SQL</p>
                                                        {copy3 ? (<button className="py-1 inline-flex items-center gap-1">
                                                            Copied!
                                                        </button>) : (<button className="py-1 inline-flex items-center gap-1" onClick={() => {
                                                            navigator.clipboard.writeText(codeSQL)
                                                            setCopy3(true)
                                                            setTimeout(() => {
                                                                setCopy3(false)
                                                            }, 3000);
                                                        }}>
                                                            Copy
                                                        </button>)}
                                                    </div>
                                                    <SyntaxHighlighter
                                                        language="sql"
                                                        style={atomOneDark}
                                                        customStyle={{
                                                            padding: "25px"
                                                        }}
                                                        wrapLongLines={true}
                                                    >
                                                        {codeSQL}
                                                    </SyntaxHighlighter>
                                                </div>
                                            </div>
                                            <p>Finally, modify the <code className="bg-gray-800 rounded">AddPokemon</code> method to return a DTO.</p>
                                            <div className="max-w-xs px-2.5 lg:max-w-none">

                                                <div className="max-w-2xl min-w-[25rem] bg-[#3a404d] rounded-md overflow-hidden">
                                                    <div className="bg-[#202224] flex justify-between px-4 text-white text-xs items-center">
                                                        <p className="text-sm">C#</p>
                                                        {copy4 ? (<button className="py-1 inline-flex items-center gap-1">
                                                            Copied!
                                                        </button>) : (<button className="py-1 inline-flex items-center gap-1" onClick={() => {
                                                            navigator.clipboard.writeText(codePost)
                                                            setCopy4(true)
                                                            setTimeout(() => {
                                                                setCopy4(false)
                                                            }, 3000);
                                                        }}>
                                                            Copy
                                                        </button>)}
                                                    </div>
                                                    <SyntaxHighlighter
                                                        language="c#"
                                                        style={atomOneDark}
                                                        customStyle={{
                                                            padding: "25px"
                                                        }}
                                                        wrapLongLines={true}
                                                    >
                                                        {codePost}
                                                    </SyntaxHighlighter>
                                                </div>
                                            </div>
                                            <p>In this tutorial, we’re converting to DTOs manually in code. We can use support libraries like <Link className="underline" href={'https://automapper.org/'} target="_blank">AutoMapper</Link> to automatically handle the conversion</p>
                                            <p>This article is researched and based on instructions on Microsoft’s documentation page.</p>
                                        </div>
                                    </article>
                                    <form
                                        className="mt-20 rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                                        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                                            <svg
                                                viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" aria-hidden="true" className="h-6 w-6 flex-none">
                                                <path
                                                    d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                                                    className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500">
                                                </path>
                                                <path d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
                                                    className="stroke-zinc-400 dark:stroke-zinc-500">
                                                </path>
                                            </svg>
                                            <span className="ml-3">Stay up to date</span></h2>
                                        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Get notified when I publish
                                            something new, and unsubscribe at any time.</p>
                                        <div className="mt-6 flex"><input placeholder="Email address" aria-label="Email address"
                                            required
                                            className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
                                            type="email" />
                                            {/* <Link href={"/thank-you"}> */}
                                            <button
                                                className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 ml-4 flex-none"
                                                type="button">
                                                Join
                                            </button>
                                            {/* </Link> */}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}