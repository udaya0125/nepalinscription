import React from 'react';

const preservations = [
    {
        id: 1,
        title: "𝐎𝐥𝐝 𝐁𝐨𝐨𝐤𝐬 𝐍𝐞𝐰 𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐢𝐞𝐬: 𝟑𝐃 𝐕𝐢𝐬𝐮𝐚𝐥𝐢𝐳𝐚𝐭𝐢𝐨𝐧 𝐨𝐟 𝐚𝐧 𝐀𝐧𝐜𝐢𝐞𝐧𝐭 𝐌𝐚𝐧𝐮𝐬𝐜𝐫𝐢𝐩𝐭",
        link: "https://www.youtube.com/watch?v=UARlmvi_AHI",
        author: "Bidur Bhattarai",

    },
    {
        id: 2,
        title: "𝐇𝐚̄𝐤𝐮𝐬𝐚𝐩𝐡𝐮̄ (‘𝐁𝐥𝐚𝐜𝐤 𝐁𝐨𝐨𝐤’): 𝐃𝐞𝐚𝐭𝐡 𝐑𝐢𝐭𝐮𝐚𝐥, (𝐑𝐞)𝐮𝐬𝐞 𝐚𝐧𝐝 𝐂𝐨𝐧𝐬𝐞𝐫𝐯𝐚𝐭𝐢𝐨𝐧",
        link: "https://www.youtube.com/watch?v=hmncC_j8R8w",
        author: "Bidur Bhattarai",

    },
    {
        id: 3,
        title: "𝐑𝐨𝐥𝐥𝐞𝐝 𝐏𝐚𝐥𝐦-𝐥𝐞𝐚𝐟 𝐃𝐨𝐜𝐮𝐦𝐞𝐧𝐭𝐬 𝐨𝐟 𝐭𝐡𝐞 𝐌𝐚𝐥𝐥𝐚 𝐏𝐞𝐫𝐢𝐨𝐝: 𝐇𝐮𝐦𝐢𝐝𝐢𝐟𝐢𝐜𝐚𝐭𝐢𝐨𝐧, (𝐔𝐧)𝐫𝐨𝐥𝐥𝐢𝐧𝐠 𝐚𝐧𝐝 𝐃𝐢𝐠𝐢𝐭𝐢𝐳𝐚𝐭𝐢𝐨𝐧 𝐓𝐞𝐜𝐡𝐧𝐢𝐪𝐮𝐞𝐬",
        link: "https://www.youtube.com/watch?v=1ThLDbN_5dI"
        , author: "Bidur Bhattarai",
    },
    {
        id: 4,
        title: "𝐓𝐡𝐞 𝐒𝐢𝐥𝐯𝐞𝐫 𝐃𝐡𝐚̄𝐫𝐚𝐧̣𝐢̄ 𝐌𝐚𝐧𝐮𝐬𝐜𝐫𝐢𝐩𝐭 𝐚𝐧𝐝 𝐢𝐭𝐬 𝐏𝐫𝐞𝐬𝐞𝐫𝐯𝐚𝐭𝐢𝐨𝐧",
        link: "https://www.youtube.com/watch?v=T3tpep5iPuA",
        author: "Bidur Bhattarai",

    },
    {
        id: 5,
        title: "𝐃𝐢𝐠𝐢𝐭𝐢𝐳𝐚𝐭𝐢𝐨𝐧 𝐨𝐟 𝐀𝐧𝐜𝐢𝐞𝐧𝐭 𝐌𝐚𝐧𝐮𝐬𝐜𝐫𝐢𝐩𝐭𝐬 𝐚𝐧𝐝 𝐇𝐢𝐬𝐭𝐨𝐫𝐢𝐜𝐚𝐥 𝐃𝐨𝐜𝐮𝐦𝐞𝐧𝐭𝐬",
        link: "https://www.youtube.com/watch?v=0XpANGxFL7A",
        author: "Bidur Bhattarai",
    },
    {
        id: 6,
        title: "𝐃𝐢𝐟𝐟𝐞𝐫𝐞𝐧𝐭 𝐒𝐢𝐳𝐞𝐬 𝐚𝐧𝐝 𝐓𝐲𝐩𝐞𝐬 𝐨𝐟 𝐏𝐡𝐚𝐬𝐞 (𝐀𝐫𝐜𝐡𝐢𝐯𝐚𝐥) 𝐁𝐨𝐱𝐞𝐬 𝐟𝐨𝐫 𝐏𝐫𝐞𝐬𝐞𝐫𝐯𝐚𝐭𝐢𝐨𝐧 𝐨𝐟 𝐀𝐧𝐜𝐢𝐞𝐧𝐭 𝐌𝐚𝐧𝐮𝐬𝐜𝐫𝐢𝐩𝐭𝐬 𝐚𝐧𝐝 𝐇𝐢𝐬𝐭𝐨𝐫𝐢𝐜𝐚𝐥 𝐃𝐨𝐜𝐮𝐦𝐞𝐧𝐭𝐬",
        link: "https://www.youtube.com/watch?v=FSMpb6QFsHg",
        author: "Bidur Bhattarai",
    },
    {
        id: 7,
        title: "𝐀 𝐑𝐨𝐲𝐚𝐥 𝐏𝐨𝐥𝐲𝐩𝐡𝐨𝐧𝐲 𝐨𝐟 𝐒𝐜𝐫𝐢𝐩𝐭𝐬 𝐚𝐧𝐝 𝐋𝐚𝐧𝐠𝐮𝐚𝐠𝐞𝐬: 𝐓𝐡𝐞 𝐇𝐚𝐧𝐮𝐦𝐚𝐧𝐝𝐡𝐨𝐤𝐚 𝐏𝐚𝐥𝐚𝐜𝐞 𝐈𝐧𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧 𝐢𝐧 𝐊𝐚𝐭𝐡𝐦𝐚𝐧𝐝𝐮",
        link: "https://www.youtube.com/watch?v=Ec9bZsFVqLs",
        author: "Bidur Bhattarai",
    },
    {
        id: 8,
        title: "𝐇𝐨𝐰 𝐭𝐨 𝐖𝐫𝐚𝐩 𝐑𝐨𝐥𝐥𝐞𝐝 𝐏𝐚𝐥𝐦-𝐥𝐞𝐚𝐟 𝐃𝐨𝐜𝐮𝐦𝐞𝐧𝐭𝐬 𝐢𝐧 𝐋𝐨𝐤𝐭𝐚 𝐏𝐚𝐩𝐞𝐫 𝐭𝐨 𝐏𝐫𝐨𝐭𝐞𝐜𝐭 𝐓𝐡𝐞𝐦?",
        link: "https://www.youtube.com/watch?v=lcso_vfe3ps",
        author: "Bidur Bhattarai",
    },
    {
        id: 9,
        title: "𝐂𝐨𝐧𝐬𝐞𝐫𝐯𝐚𝐭𝐢𝐨𝐧 𝐨𝐟 𝐑𝐨𝐥𝐥𝐞𝐝 𝐏𝐚𝐥𝐦-𝐥𝐞𝐚𝐟 𝐃𝐨𝐜𝐮𝐦𝐞𝐧𝐭𝐬 𝐨𝐟 𝐭𝐡𝐞 𝐌𝐚𝐥𝐥𝐚 𝐏𝐞𝐫𝐢𝐨𝐝: 𝐀 𝐒𝐭𝐞𝐩-𝐛𝐲-𝐬𝐭𝐞𝐩 𝐎𝐯𝐞𝐫𝐯𝐢𝐞𝐰",
        link: "https://www.youtube.com/watch?v=1qgx6kLh5vE",
        author: "Bidur Bhattarai",
    },
    {
        id: 10,
        title: "𝗧𝗵𝗲 ‘𝗚𝗼𝗹𝗱𝗲𝗻’ 𝙋𝙖𝙣̃𝙘𝙖𝙧𝙖𝙠𝙨̣𝙖̄ 𝗠𝗮𝗻𝘂𝘀𝗰𝗿𝗶𝗽𝘁 𝗮𝗻𝗱 𝗶𝘁𝘀 𝗣𝗿𝗲𝘀𝗲𝗿𝘃𝗮𝘁𝗶𝗼𝗻",
        link: "https://www.youtube.com/watch?v=0tmmz0Js40E",
        author: "Bidur Bhattarai",
    },
];

const usefulLinks = [
    "Manuscript cultures",
    "Studies in Manuscript Cultures",
    "Studies in Manuscript Cultures",
    "Studies in Manuscript Cultures",
    "Studies in Manuscript Cultures"
];

// Function to extract video ID from YouTube URL
const getYouTubeID = (url) => {
    const regex = /v=([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
};

const Preservation = () => {
    return (
        <>
            <div className="relative h-[50vh] mt-12 sm:mt-36 flex items-center justify-center">
                <img
                    src="images/img10.jpg"
                    alt="preservation"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <h1 className="relative z-10 text-5xl text-white font-semibold">
                   Inscriptions
                </h1>
            </div>

            <div className="max-w-5xl px-4 mx-auto py-24">
                <div className="">

                    <div className="sm:col-span-3">
                        <h2 className='text-3xl mb-4'>Written Cultural Heritage of Nepal: Preservation and Documentation</h2>
                        <p className='text-lg'>
                            Nepal is home to exceptionally diverse manuscript collections, featuring various scripts, languages, and topics. Initiated and produced by Dr Bidur Bhattarai, this series presents the activities carried out for the preservation of Nepal’s written cultural heritage, highlighting their diversity and uniqueness in writing, supports, materials, forms, and texts, along with practical guidance for manuscript and historical document conservation.
                        </p>

                        {preservations.map((pub) => {
                            const videoID = getYouTubeID(pub.link);
                            const thumbnail = `https://img.youtube.com/vi/${videoID}/hqdefault.jpg`;
                            return (
                                <a href={pub.link} target="_blank" rel="noopener noreferrer">

                                    <div key={pub.id} className="grid grid-col-1 sm:grid-cols-5 mt-12 gap-12">
                                        <div className="sm:col-span-2">
                                            <img src={thumbnail} className='w-full  object-cover cursor-pointer' alt={pub.title} />

                                        </div>
                                        <div className="sm:col-span-3">
                                            <h2 className='text-xl font-medium'>
                                                {pub.id}. {pub.title}
                                            </h2>
                                            <p className='text-sm mt-4'>By {pub.author}</p>
                                            <p className='text-md mt-4'> Episode - {pub.id}</p>
                                        </div>
                                    </div>
                                </a>
                            );
                        })}
                    </div>

                    <div className="sm:col-span-2">
                        {/* <h2 className='text-xl font-semibold'>Other Useful Links</h2>
                        <div className="mt-4">
                            {usefulLinks.map((link, index) => (
                                <h2 key={index} className='text-xl border-b border-[#282118] py-4'>
                                    {link}
                                </h2>
                            ))}
                        </div> */}
                    </div>

                </div>
            </div>
        </>
    );
};

export default Preservation;
