// import React from 'react'
// import { Link } from 'react-router-dom';
// import secondimage from '../../public/images/inscription/INSN00002/INSN00002_1.jpg';
// const publications = [
//   {
//     id: 1,
//     title: "INSN 00001. A Licchavi Inscription en route to Mṛgasthalī",
//     author: "Bidur Bhattarai",
//     image: "/images/inscription/INSN00001/INSN00001_1.jpg",
//     link: "/insn00001/details"
//   },
//   {
//     id: 2,
//     title: "INSN 00002. A Licchavi Inscription from Tebahal",
//     author: "Bidur Bhattarai",
//     image: "/images/inscription/INSN00002/INSN00002_1.jpg",
//     link: "/insn00002/details"
//   },
//   {
//     id: 3,
//     title: "INSN 00003. A Licchavi Inscription from Swayambhu",
//     author: "Bidur Bhattarai",
//     image: "/images/inscription/INSN00003/INSN 00003_2.jpg",
//     link: "/insn00003/details"
//   }
// ];

// const usefulLinks = [
//   "Manuscript cultures",
//   "Studies in Manuscript Cultures",
//   "Studies in Manuscript Cultures",
//   "Studies in Manuscript Cultures",
//   "Studies in Manuscript Cultures"
// ];

// const Inscriptions = () => {
//   return (
//     <>
//       <div className="relative h-[50vh] mt-12  flex items-center justify-center">
//         {/* Background image */}
//         <img
//           src="images/inscription/main.jpg"
//           alt="Inscriptions"
//           className="absolute inset-0 w-full h-full object-cover"
//         />

//         {/* Optional dark overlay */}
//         <div className="absolute inset-0 bg-black/40"></div>

//         {/* Centered text */}
//         <h1 className="relative z-10 text-5xl text-white font-semibold">
//           Inscriptions
//         </h1>
//       </div>

//       <div className="max-w-6xl px-4 mx-auto py-24">
//         <div className="">

//           <div className="sm:col-span-3">
//             <h2 className='text-3xl mb-4'>INSCRIPTIONS</h2>
//             <p className='text-lg'>
//               Explore Rich and Diverse Collections of Inscriptions from Nepal
//             </p>

//             {publications.map((pub) => (

//               <Link to={pub.link} onClick={()=>window.scrollTo(0,0)}>
//               <div key={pub.id} className="grid grid-col-1 sm:grid-cols-5 mt-12 gap-12">
//                 <div className="sm:col-span-2">
//                   <img src={pub.image} className='w-full h-64 ' alt={pub.title} />
//                 </div>
//                 <div className="sm:col-span-3">
//                   <h2 className='text-xl font-medium'>
//                     {pub.title}

//                   </h2>
//                 </div>
//               </div></Link>
//             ))}
//           </div>

//           <div className="sm:col-span-2">
//             {/* <h2 className='text-xl font-semibold'>Other Useful Links</h2>
//             <div className="mt-4">
//               {usefulLinks.map((link, index) => (
//                 <h2 key={index} className='text-xl border-b border-[#282118] py-4'>
//                   {link}
//                 </h2>
//               ))}
//             </div> */}
//           </div>

//         </div>
//       </div>
//     </>
//   );
// };

// export default Inscriptions;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const Inscriptions = () => {
//   const [inscriptions, setInscriptions] = useState([]);
//   const imgurl = import.meta.env.VITE_IMAGE_PATH;

//   useEffect(() => {
//     const fetchInscription = async () => {
//       try {
//         const response = await axios.get(
//           "https://inscriptionbackend.saitsolution.com.np/api/inscriptions",
//         );
//         const data = response.data;
//         // console.log("API Response:", data);

//         let fetchedData = [];

//         if (data && data.results) {
//           fetchedData = data.results;
//         } else if (data && data.data) {
//           fetchedData = data.data;
//         } else if (Array.isArray(data)) {
//           fetchedData = data;
//         } else {
//           console.error("Unexpected data structure:", data);
//           fetchedData = [];
//         }

//         // Filter only published inscriptions
//         const publishedInscriptions = fetchedData.filter(
//           (item) => item.status === "published"
//         );

//         // Sort by ID in ascending order (oldest first)
//         const sortedData = publishedInscriptions.sort((a, b) => a.id - b.id);
//         setInscriptions(sortedData);
//       } catch (error) {
//         console.error("fetching error", error);
//         setInscriptions([]);
//       }
//     };
//     fetchInscription();
//   }, []);

//   const getPosterImageIndex = (inscription) => {
//     if (inscription?.inscription_number === "INSN 00003") {
//       return 1; // Use index 1 for INSN 00003
//     }
//     return 0; // Default to index 0
//   };

//   return (
//     <>
//       <div className="relative h-[50vh] mt-12 flex items-center justify-center">
//         {/* Background image */}
//         <img
//           src="images/inscription/main.jpg"
//           alt="Inscriptions"
//           className="absolute inset-0 w-full h-full object-cover"
//         />

//         {/* Optional dark overlay */}
//         <div className="absolute inset-0 bg-black/40"></div>

//         {/* Centered text */}
//         <h1 className="relative z-10 text-5xl text-white font-semibold">
//           Inscriptions
//         </h1>
//       </div>

//       <div className="max-w-6xl px-4 mx-auto py-24">
//         <div className="">
//           <div className="sm:col-span-3">
//             <h2 className="text-3xl mb-4">INSCRIPTIONS</h2>
//             {/* <p className="text-lg">
//               Explore Rich and Diverse Collections of Inscriptions from Nepal
//             </p> */}
//             <p className="text-lg">
//               Access and assess a newly developed database featuring high-quality resolution images and videos documenting ancient and historical epigraphic records from Nepal.
//             </p>

//             {inscriptions.length === 0 ? (
//               <div className="mt-12 text-center py-12">
//                 <p className="text-xl text-gray-600">
//                   No published inscriptions available at the moment.
//                 </p>
//               </div>
//             ) : (
//               inscriptions.map((pub) => (
//                 <Link
//                   key={pub.id}
//                   to={`/${pub.slug}/details`}
//                   onClick={() => window.scrollTo(0, 0)}
//                 >
//                   <div className="grid grid-col-1 sm:grid-cols-5 mt-12 gap-12  p-4 rounded-lg transition-colors duration-200">
//                     <div className="sm:col-span-2">
//                       {pub.images && pub.images.length > 0 ? (
//                         <img
//                           src={`${imgurl}/${pub.images[getPosterImageIndex(pub)]?.image_path}`}
//                           className="w-full h-64 object-cover"
//                           alt={pub.title}
//                           onError={(e) => {
//                             e.target.src = "images/inscription/placeholder.jpg";
//                           }}
//                         />
//                       ) : (
//                         <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg">
//                           <span className="text-gray-500">No Image</span>
//                         </div>
//                       )}
//                     </div>
//                     <div className="sm:col-span-3">
//                       <h2 className="text-xl font-medium">
//                         {pub.inscription_number}. {pub.title}
//                       </h2>
//                       {/* <p className="text-gray-600 mb-2">
//                         Status:{" "}
//                         <span className="font-semibold capitalize">
//                           {pub.status}
//                         </span>
//                       </p> */}
//                       {pub.author && (
//                         <p className="text-gray-600">Author: {pub.author}</p>
//                       )}
//                       {pub.location && (
//                         <p className="text-gray-600">Location: {pub.location}</p>
//                       )}
//                     </div>
//                   </div>
//                 </Link>
//               ))
//             )}
//           </div>

//           <div className="sm:col-span-2">
//             {/* <h2 className='text-xl font-semibold'>Other Useful Links</h2>
//             <div className="mt-4">
//               {usefulLinks.map((link, index) => (
//                 <h2 key={index} className='text-xl border-b border-[#282118] py-4'>
//                   {link}
//                 </h2>
//               ))}
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Inscriptions;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Inscriptions = () => {
  const [inscriptions, setInscriptions] = useState([]);
  const [filtered, setFiltered] = useState([]);

  // ✅ ONLY SORT STATE (filters removed)
  const [dateSort, setDateSort] = useState("oldest");

  const imgurl = import.meta.env.VITE_IMAGE_PATH;

  // FETCH DATA
  useEffect(() => {
    const fetchInscription = async () => {
      try {
        const response = await axios.get(
          "https://inscriptionbackend.saitsolution.com.np/api/inscriptions",
        );

        const data = response.data;
        let fetchedData = [];

        if (data?.results) fetchedData = data.results;
        else if (data?.data) fetchedData = data.data;
        else if (Array.isArray(data)) fetchedData = data;

        const published = fetchedData.filter(
          (item) => item.status === "published",
        );

        setInscriptions(published);
      } catch (error) {
        console.error("fetch error", error);
      }
    };

    fetchInscription();
  }, []);

  // ✅ SORT ONLY (NO FILTERING)
  useEffect(() => {
    let data = [...inscriptions];

    if (dateSort === "latest") {
      data.sort((a, b) => b.id - a.id);
    } else {
      data.sort((a, b) => a.id - b.id);
    }

    setFiltered(data);
  }, [dateSort, inscriptions]);

  const getPosterImageIndex = (inscription) => {
    if (inscription?.inscription_number === "INSN 00003") return 1;
    return 0;
  };

  return (
    <>
      {/* HERO */}
      <div className="relative h-[50vh] mt-12 flex items-center justify-center">
        <img
          src="images/inscription/main.jpg"
          alt="Inscriptions"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-16 left-6 z-10 text-white p-3 flex items-center gap-2 text-base leading-6 tracking-wide">
          <Link to="/" className="hover:underline">
            Home
          </Link>

          <span>/</span>

          <span className="opacity-80"> Inscriptions</span>
        </div>
        <h1 className="relative z-10 text-5xl text-white font-semibold">
          Inscriptions
        </h1>
      </div>

      <div className="max-w-6xl px-4 mx-auto py-24">
        <h2 className="text-3xl mb-4">INSCRIPTIONS</h2>
        {/* <p className="text-lg mb-8">
          Access and assess a newly developed database featuring high-resolution
          images and videos documenting ancient and historical epigraphic
          records from Nepal.
        </p> */}
        <p className="text-lg mb-8">
          Inscriptions constitute some of the earliest extant forms of writing
          in human civilisation, a claim that holds equally true for Nepal and
          its history. These artefacts serve as enduring records and provide
          invaluable insights into language, history, religion, and social
          practices. Across Nepal, inscriptions have been produced throughout
          all major historical periods and appear on a wide range of sites,
          including monuments, temples, monasteries, water spouts, shelters, and
          other architectural structures. However, many of these materials are
          increasingly at risk due to both natural processes and human-made
          factors, leading to their deterioration, displacement, or loss of
          original context. In response to these challenges, this initiative
          undertakes the systematic documentation and study of Nepal’s
          epigraphic heritage through extensive fieldwork. The research involves
          on-site surveys and the collection of primary data, including
          high-resolution images and video recordings of inscriptions in situ. A
          central component of the project is the development and dissemination
          of a digital database that provides structured access to these
          materials. This resource is designed to offer detailed visual
          documentation and metadata for a wide corpus of ancient and historical
          inscriptions from Nepal to the scholarly community and the general
          public. 
        </p>
        <p className="text-lg mb-8">
          Our database continues to expand through the ongoing addition
          of new materials. Visit and explore the collection documenting ancient
          and historical epigraphic records from Nepal!</p>

        {/* FILTERS (DEMO ONLY) */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {/* LANGUAGE DEMO */}
          <select className="border p-3 rounded">
            <option>All Languages</option>
            <option>Newari</option>
            <option>Sanskrit</option>
            <option>Nepali</option>
          </select>

          {/* SCRIPT DEMO */}
          <select className="border p-3 rounded">
            <option>All Scripts</option>
            <option>Licchavi</option>
          </select>

          {/* DATE SORT (WORKING) */}
          <select
            className="border p-3 rounded"
            value={dateSort}
            onChange={(e) => setDateSort(e.target.value)}>
            <option value="oldest">Oldest</option>
            <option value="latest">Latest</option>
          </select>
        </div>

        {/* LIST */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">No inscriptions found.</p>
          </div>
        ) : (
          filtered.map((pub) => (
            <Link
              key={pub.id}
              to={`/${pub.slug}/details`}
              onClick={() => window.scrollTo(0, 0)}>
              <div className="grid  hover:text-blue-700 sm:grid-cols-5 mt-12 gap-12 p-4 rounded-lg transition">
                {/* IMAGE */}
                <div className="sm:col-span-2">
                  {pub.images?.length > 0 ? (
                    <img
                      src={`${imgurl}/${pub.images[getPosterImageIndex(pub)]?.image_path}`}
                      className="w-full h-64 object-cover"
                      alt={pub.title}
                      onError={(e) =>
                        (e.target.src = "images/inscription/placeholder.jpg")
                      }
                    />
                  ) : (
                    <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                      No Image
                    </div>
                  )}
                </div>

                {/* CONTENT */}
                <div className="sm:col-span-3">
                  <h2 className="text-xl font-medium">
                    {pub.inscription_number}. {pub.title}
                  </h2>

                  {pub.author && (
                    <p className="text-gray-600">Author: {pub.author}</p>
                  )}

                  {pub.location && (
                    <p className="text-gray-600">Location: {pub.location}</p>
                  )}

                  {pub.language && (
                    <p className="text-gray-600">Language: {pub.language}</p>
                  )}
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Inscriptions;
