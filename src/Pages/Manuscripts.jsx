import React from 'react';

const publications = [
    {
        id: 1,
        title: "Preserving the Written Artefacts of the Tribhuvan University Central Library in Kirtipur",
        author: "Bidur Bhattarai",
        link: "https://www.youtube.com/watch?v=Wuhj3q1tSWg"
    },
    {
        id: 2,
        title: "A Brief Introduction to a Nepalese Rolled Palm-leaf Document",
        author: "Bidur Bhattarai",
        link: "https://www.youtube.com/watch?v=P1cfZxhyxEI"
    },
    {
        id: 3,
        title: "A Brief Introduction to a Nepalese Buddhist 'nīlapatra' Manuscript",
        author: "Bidur Bhattarai",
        link: "https://www.youtube.com/watch?v=j_wEYHo-h3c"
    },
    {
        id: 4,
        title: "Preserving the Written Artefacts of the Āśā Saphūkuthi (Āśā Archives) in Kathmandu",
        author: "Bidur Bhattarai",
        link: "https://www.youtube.com/watch?v=QIKyUOcO4xs"
    },
    {
        id: 5,
        title: "Traditional Techniques of Protecting Clay Seals in Nepalese Rolled Palm-Leaf Documents",
        author: "Bidur Bhattarai",
        link: "https://www.youtube.com/watch?v=Sw7f8XsuGck"
    },
    {
        id: 6,
        title: "A Nepalese Buddhist Tantric Mini-Manuscript",
        author: "Bidur Bhattarai",
        link: "https://www.youtube.com/watch?v=MeV1kJNM-IQ"
    },
    {
        id: 7,
        title: "A Nepalese Buddhist Manuscript from Lhasa",
        author: "Bidur Bhattarai",
        link: "https://www.youtube.com/watch?v=rWNi0sQUsNo"
    },
    {
        id: 8,
        title: "Preservation of a Buddhist Nīlapatra Aṣṭasāhasrikā Prajñāpāramitā Manuscript",
        author: "Bidur Bhattarai",
        link: "https://www.youtube.com/watch?v=DT8sGzcqG8A"
    },
    {
        id: 9,
        title: "Snakeskin in Manuscripts: For Protection or Other Reasons?",
        author: "Bidur Bhattarai",
        link: "https://www.youtube.com/watch?v=kct2dPh43E4"
    },
    {
        id: 10,
        title: "Preserving the Manuscript Collection at the Central Department of Nepalbhasa at Tribhuvan University",
        author: "Bidur Bhattarai",
        link: "https://www.youtube.com/watch?v=gddAS78J5EQ"
    },
    {
        id: 11,
        title: "How to Clean Manuscripts",
        author: "Bidur Bhattarai",
        link: "https://www.youtube.com/watch?v=GnH8CZQUaDg"
    },
    {
        id: 12,
        title: "How to Wrap Manuscripts in Lokta Paper",
        author: "Bidur Bhattarai",
        link: "https://www.youtube.com/watch?v=BjFVx5srsmc"
    },
    {
        id: 13,
        title: "How to Wrap Manuscripts in Cotton Cloth",
        author: "Bidur Bhattarai",
        link: "https://www.youtube.com/watch?v=u410E1MEJWA"
    },
    {
        id: 14,
        title: "A Large Kundalini Yogapurusa Manuscript from Nepal and its Preservation",
        author: "Bidur Bhattarai",
        link: "https://www.youtube.com/watch?v=IM7RdYU20gg"
    },
    {
        id: 15,
        title: "Preserving the Manuscript Collection of the Bhatta Family",
        author: "Bidur Bhattarai",
        link: "https://www.youtube.com/watch?v=c6gewc-e-mo"
    },
];

const usefulLinks = [
    "Manuscript cultures",
    "Studies in Manuscript Cultures",
    "Studies in Manuscript Cultures",
    "Studies in Manuscript Cultures",
    "Studies in Manuscript Cultures"
];

// Function to extract YouTube ID
const getYouTubeID = (url) => {
    const regex = /v=([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
};

const Manuscripts = () => {
    return (
        <>
            <div className="relative h-[50vh] mt-12 sm:mt-36 flex items-center justify-center">
                <img
                    src="images/img10.jpg"
                    alt="Manuscripts"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <h1 className="relative z-10 text-5xl text-white font-semibold">
                    Manuscripts and Artefacts
                </h1>
            </div>

            <div className="max-w-5xl px-4 mx-auto py-24">
                <div className="">

                    <div className="sm:col-span-3">
                        <h2 className='text-3xl mb-4'>Written Manuscripts and Artefacts of Nepal</h2>
                        <p className='text-lg'>
                            Written Manuscripts and Artefacts of Nepal – Preservation and Documentation’, a series of short films, offers a brief and accessible introduction to Nepalese written artefacts, exploring their diversity and uniqueness in terms of writing, supports, materials, forms, and texts. All episodes are available in Nepalese with English subtitles. Non-English terms are transliterated as faithfully as possible and presented as they appear in the original document, so that their original spelling can be appreciated. The series is initiated and produced by Bidur Bhattarai,
                        </p>
                        {publications.map((pub) => {
                            const videoID = getYouTubeID(pub.link);
                            const thumbnail = videoID ? `https://img.youtube.com/vi/${videoID}/hqdefault.jpg` : pub.image;
                            return (
                                <a
                                    key={pub.id}
                                    href={pub.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <div className="grid grid-col-1 sm:grid-cols-5 mt-12 gap-12">
                                        <div className="sm:col-span-2">
                                            <img
                                                src={thumbnail}
                                                className="w-full object-cover cursor-pointer"
                                                alt={pub.title}
                                            />
                                        </div>
                                        <div className="sm:col-span-3">
                                            <h2 className="text-xl font-medium">
                                                {pub.id}. {pub.title}
                                            </h2>
                                            <p className="text-sm mt-2">By {pub.author}</p>
                                            <p className="text-sm mt-4">Episode - {pub.id}</p>
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

export default Manuscripts;
