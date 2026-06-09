// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import mov1 from '../../public/images/inscription/INSN00003/inscription003.mp4';
// import vidposter from '../../public/images/inscription/INSN00003/banner.jpeg'
// import Poster from '../../public/images/inscription/INSN00003/INSN 00003_2.jpg'
// const About = () => {
//     const navigate = useNavigate();

//     const handleNavigate = (path) => {
//         navigate(path);
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     };

//     return (
//         <>
//             <div
//                 className="my-12 hidden md:flex h-[100vh] justify-center items-center"
//                 style={{ backgroundImage: "url('images/Scroll2.png')", backgroundPosition: "center", backgroundSize: "cover" }}
//             >
//                 <div className="max-w-3xl mx-auto px-4 text-center space-y-6 py-12">
//                     <h2 className='text-4xl font-semibold sm:text-5xl'>Inscriptions of Nepal</h2>
//                     <p className='text-lg font-medium mb-12 leading-[38px]'>
//                         Inscriptions stand among the earliest known forms of writing in human civilisation. These
//                         serve as enduring records and invaluable gateways to understanding language, history,
//                         culture, and more. In Nepal, countless inscriptions have been produced in various epochs,
//                         appearing on monuments, temples, monasteries, water spouts, shelters, and other historical
//                         sites. However, natural and human-made disasters have endangered many of these objects or have displaced them from their
//                         original locations. This project aims to document and study these significant artefacts,
//                         contributing to the preservation and promotion of the country’s rich written heritage.
//                     </p>
//                 </div>
//             </div>

//             <div
//                 className="my-12 md:hidden h-auto py-24 flex justify-center items-center"
//                 style={{ backgroundImage: "url('images/bg3.png')", backgroundPosition: "top", backgroundSize: "cover" }}
//             >
//                 <div className="max-w-3xl mx-auto px-4 text-center space-y-6 py-12">
//                     <h2 className='text-4xl font-semibold sm:text-5xl'>Inscriptions of Nepal</h2>
//                     <p className='text-lg font-medium leading-[38px]'>
//                         Inscriptions stand among the earliest known forms of writing in human civilisation. These
//                         serve as enduring records and invaluable gateways to understanding language, history,
//                         culture, and more. In Nepal, countless inscriptions have been produced in various epochs,
//                         appearing on monuments, temples, monasteries, water spouts, shelters, and other historical
//                         sites. However, natural and human-made disasters have endangered many of these objects or have displaced them from their
//                         original locations. This project aims to document and study these significant artefacts,
//                         contributing to the preservation and promotion of the country’s rich written heritage.
//                     </p>
//                 </div>
//             </div>

//             <div className="max-w-6xl mx-auto px-4 pt-12 pb-24">
//                 <h2 className='text-4xl sm:text-5xl font-medium mt-6'>Newly added INSCRIPTIONS</h2>

//                 <div className="mt-12 border-2 border-[#99541b] p-4 rounded-md">
//                     {/* Grid with main image and video in separate columns */}
//                     <div className="grid sm:grid-cols-2 my-4 gap-6">

//                         {/* Image Column */}
//                      <div className=" w-full h-[50vh] ">
//                             <img
//                                 src={Poster}
//                                 alt=""
//                                 className="w-full h-full object-contain"
//                             />

//                         </div>

//                         {/* Video Column */}
//                         <div className="w-full ">
//                             <video
//                                 src={mov1}
//                                 controls
//                                 poster={vidposter}
//                                 className="w-full h-full object-fill shadow-md"
//                             />
//                         </div>

//                     </div>

//                     <Link to="/insn00003/details" onClick={()=>window.scrollTo(0,0)}>
//                         <p className='text-2xl font-medium'>A Licchavi Inscription from Swayambhu</p>
//                     </Link>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default About;

// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const About = () => {
//   const navigate = useNavigate();

//   const handleNavigate = (path) => {
//     navigate(path);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const [inscriptions, setInscriptions] = useState([]);
//   const [latestInscription, setLatestInscription] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const imgurl = import.meta.env.VITE_IMAGE_PATH;

//   useEffect(() => {
//     const fetchInscription = async () => {
//       try {
//         const response = await axios.get(
//           "https://inscriptionbackend.saitsolution.com.np/api/inscriptions",
//         );
//         const data = response.data;

//         let inscriptionData = [];

//         if (data && data.results) {
//           inscriptionData = data.results;
//         } else if (data && data.data) {
//           inscriptionData = data.data;
//         } else if (Array.isArray(data)) {
//           inscriptionData = data;
//         } else {
//           console.error("Unexpected data structure:", data);
//           inscriptionData = [];
//         }

//         // Filter only published inscriptions
//         const publishedInscriptions = inscriptionData.filter(
//           (item) => item.status === "published",
//         );

//         if (publishedInscriptions.length === 0) {
//           setInscriptions([]);
//           setLatestInscription(null);
//           setLoading(false);
//           return;
//         }

//         // Sort published inscriptions by date
//         const sortedInscriptions = publishedInscriptions.sort((a, b) => {
//           const dateA = new Date(
//             a.created_at ||
//               a.date_added ||
//               a.createdAt ||
//               a.timestamp ||
//               a.date_published ||
//               a.published_at,
//           );
//           const dateB = new Date(
//             b.created_at ||
//               b.date_added ||
//               b.createdAt ||
//               b.timestamp ||
//               b.date_published ||
//               b.published_at,
//           );
//           return dateB - dateA;
//         });

//         setInscriptions(sortedInscriptions);

//         if (sortedInscriptions.length > 0) {
//           setLatestInscription(sortedInscriptions[0]);
//         }
//       } catch (error) {
//         console.error("fetching error", error);
//         setInscriptions([]);
//         setLatestInscription(null);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchInscription();
//   }, []);

//   console.log("Latest Inscription:", inscriptions);

//   // Show loading state or no data message
//   if (loading) {
//     return (
//       <div className="max-w-6xl mx-auto px-4 pt-12 pb-24 text-center">
//         <p>Loading inscriptions...</p>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div
//         className=" hidden md:flex  justify-center items-center"
//         // 
//         >
//         <div className="max-w-3xl mx-auto px-4 text-center space-y-6 py-12">
//           <h2 className="text-4xl font-semibold sm:text-5xl">
//             Inscriptions of Nepal
//           </h2>
//           <h2 className="text-lg font-medium leading-[38px] ">
//             DOCUMENTATION | STUDY | PRESERVATION
//           </h2>
//           <p className="text-lg font-medium leading-[38px]">
//             Inscriptions stand among the earliest known forms of writing in
//             human civilisation. These serve as enduring records and invaluable
//             gateways to understanding language, history, culture, and more. In
//             Nepal, countless inscriptions have been produced in various epochs,
//             appearing on monuments, temples, monasteries, water spouts,
//             shelters, and other historical sites. However, natural and
//             human-made disasters have endangered many of these objects or have
//             displaced them from their original locations. This project aims to
//             document and study these significant artefacts, contributing to the
//             preservation and promotion of the country's rich written heritage.
//           </p>
//         </div>
//       </div>

//       <div
//         className="my-12 md:hidden h-auto py-24 flex justify-center items-center"
//         style={{
//           backgroundImage: "url('images/bg3.png')",
//           backgroundPosition: "top",
//           backgroundSize: "cover",
//         }}>
//         <div className="max-w-3xl mx-auto px-4 text-center space-y-6 py-12">
//           <h2 className="text-4xl font-semibold sm:text-5xl">
//             Inscriptions of Nepal
//           </h2>
//           <h2 className="text-lg font-medium leading-[38px] ">
//             DOCUMENTATION | STUDY | PRESERVATION
//           </h2>
//           <p className="text-lg font-medium leading-[38px]">
//             Inscriptions stand among the earliest known forms of writing in
//             human civilisation. These serve as enduring records and invaluable
//             gateways to understanding language, history, culture, and more. In
//             Nepal, countless inscriptions have been produced in various epochs,
//             appearing on monuments, temples, monasteries, water spouts,
//             shelters, and other historical sites. However, natural and
//             human-made disasters have endangered many of these objects or have
//             displaced them from their original locations. This project aims to
//             document and study these significant artefacts, contributing to the
//             preservation and promotion of the country's rich written heritage.
//           </p>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto px-4 pt-12 pb-24">
//         <button
//           onClick={() => handleNavigate("/inscriptions")}
//           className="cursor-pointer hover:opacity-80 transition-opacity">
//           <h2 className="text-4xl sm:text-5xl font-medium mt-6 text-red-600">
//             Newly added INSCRIPTIONS
//           </h2>
//         </button>

//         {latestInscription ? (
//           <div className="mt-12 border-2 border-[#99541b] p-4 rounded-md">
//             {/* Grid with main image and video in separate columns */}
//             <div className="grid sm:grid-cols-2 my-4 gap-6">
//               {/* Clickable Image Column */}
//               <Link
//                 to={`/${latestInscription.slug}/details`}
//                 onClick={() => window.scrollTo(0, 0)}
//                 className="block w-full cursor-pointer hover:opacity-90 transition-opacity">
//                 <div className="w-full">
//                   {latestInscription?.images?.length > 0 ? (
//                     <img
//                       src={`${imgurl}/${latestInscription.images[0].image_path}`}
//                       alt={
//                         latestInscription.title ||
//                         latestInscription.name ||
//                         "Latest Inscription"
//                       }
//                       className="w-full h-full object-contain"
//                     />
//                   ) : (
//                     <div className="w-full h-full bg-gray-200 flex items-center justify-center">
//                       <p>No Image Available</p>
//                     </div>
//                   )}
//                 </div>
//               </Link>

//               {/* Video Column */}
//               <div className="w-full">
//                 {latestInscription.video ? (
//                   <video
//                     src={latestInscription.video}
//                     controls
//                     poster={`${imgurl}/${latestInscription.video_banner}`}
//                     className="w-full h-full object-fill shadow-md"
//                   />
//                 ) : (
//                   <div className="w-full h-full bg-gray-200 flex items-center justify-center">
//                     <p>No Video Available</p>
//                   </div>
//                 )}
//               </div>
//             </div>

//             <Link
//               to={`/${latestInscription.slug}/details`}
//               onClick={() => window.scrollTo(0, 0)}
//               className="block hover:opacity-80 transition-opacity">
//               <p className="text-2xl font-medium">
//                 {/* {latestInscription.inscription_number &&
//                   `${latestInscription.inscription_number}. `} */}
//                 {latestInscription.title}
//               </p>
//             </Link>
//           </div>
//         ) : (
//           <div className="mt-12 border-2 border-[#99541b] p-4 rounded-md text-center">
//             <p className="text-xl">No published inscriptions found</p>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default About;


import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const About = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [inscriptions, setInscriptions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const imgurl = import.meta.env.VITE_IMAGE_PATH;

  useEffect(() => {
    const fetchInscription = async () => {
      try {
        const response = await axios.get(
          "https://inscriptionbackend.saitsolution.com.np/api/inscriptions",
        );
        const data = response.data;

        let inscriptionData = [];
        if (data && data.results) {
          inscriptionData = data.results;
        } else if (data && data.data) {
          inscriptionData = data.data;
        } else if (Array.isArray(data)) {
          inscriptionData = data;
        } else {
          inscriptionData = [];
        }

        const publishedInscriptions = inscriptionData.filter(
          (item) => item.status === "published",
        );

        const sortedInscriptions = publishedInscriptions.sort((a, b) => {
          const dateA = new Date(
            a.created_at || a.date_added || a.createdAt || a.timestamp || a.date_published || a.published_at,
          );
          const dateB = new Date(
            b.created_at || b.date_added || b.createdAt || b.timestamp || b.date_published || b.published_at,
          );
          return dateB - dateA;
        });

        setInscriptions(sortedInscriptions);
      } catch (error) {
        console.error("fetching error", error);
        setInscriptions([]);
      } finally {
        setLoading(false);
      }
    };
    fetchInscription();
  }, []);

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (inscriptions.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % inscriptions.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [inscriptions.length]);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 pt-12 pb-24 text-center">
        <p>Loading inscriptions...</p>
      </div>
    );
  }

  const current = inscriptions[currentIndex];

  return (
    <>
      <div className="hidden md:flex justify-center items-center">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6 py-12">
          <h2 className="text-4xl font-semibold sm:text-5xl">
            Inscriptions of Nepal
          </h2>
          <h2 className="text-lg font-medium leading-[38px]">
            DOCUMENTATION | STUDY | PRESERVATION
          </h2>
          <p className="text-lg font-medium leading-[38px]">
            Inscriptions stand among the earliest known forms of writing in
            human civilisation. These serve as enduring records and invaluable
            gateways to understanding language, history, culture, and more. In
            Nepal, countless inscriptions have been produced in various epochs,
            appearing on monuments, temples, monasteries, water spouts,
            shelters, and other historical sites. However, natural and
            human-made disasters have endangered many of these objects or have
            displaced them from their original locations. This project aims to
            document and study these significant artefacts, contributing to the
            preservation and promotion of the country's rich written heritage.
          </p>
        </div>
      </div>

      <div
        className="my-12 md:hidden h-auto py-24 flex justify-center items-center"
        style={{
          backgroundImage: "url('images/bg3.png')",
          backgroundPosition: "top",
          backgroundSize: "cover",
        }}>
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6 py-12">
          <h2 className="text-4xl font-semibold sm:text-5xl">
            Inscriptions of Nepal
          </h2>
          <h2 className="text-lg font-medium leading-[38px]">
            DOCUMENTATION | STUDY | PRESERVATION
          </h2>
          <p className="text-lg font-medium leading-[38px]">
            Inscriptions stand among the earliest known forms of writing in
            human civilisation. These serve as enduring records and invaluable
            gateways to understanding language, history, culture, and more. In
            Nepal, countless inscriptions have been produced in various epochs,
            appearing on monuments, temples, monasteries, water spouts,
            shelters, and other historical sites. However, natural and
            human-made disasters have endangered many of these objects or have
            displaced them from their original locations. This project aims to
            document and study these significant artefacts, contributing to the
            preservation and promotion of the country's rich written heritage.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-12 pb-24">
        <button
          onClick={() => handleNavigate("/inscriptions")}
          className="cursor-pointer hover:opacity-80 transition-opacity">
          <h2 className="text-4xl sm:text-5xl font-medium mt-6 text-red-600">
            Newly added INSCRIPTIONS
          </h2>
        </button>

        {current ? (
          <div className="mt-12 border-2 border-[#99541b] p-4 rounded-md">
            {/* Entire card is a link */}
            <Link
              to={`/${current.slug}/details`}
              onClick={() => window.scrollTo(0, 0)}
              className="block cursor-pointer hover:opacity-95 transition-opacity"
            >
              <div className="grid sm:grid-cols-2 my-4 gap-6">
                {/* Image Column */}
                <div className="w-full">
                  {current?.images?.length > 0 ? (
                    <img
                      src={`${imgurl}/${current.images[0].image_path}`}
                      alt={current.title || current.name || "Inscription"}
                      className="w-full h-96 object-cover object-center"
                    />
                  ) : (
                    <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                      <p>No Image Available</p>
                    </div>
                  )}
                </div>

                {/* Video Column — stop propagation so controls work */}
                <div
                  className="w-full"
                >
                  {current.video ? (
                    <video
                      src={current.video}
                      controls
                      poster={`${imgurl}/${current.video_banner}`}
                      className="w-full h-full object-fill shadow-md"
                    />
                  ) : (
                    <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                      <p>No Video Available</p>
                    </div>
                  )}
                </div>
              </div>

              <p className="text-2xl font-medium hover:opacity-80 transition-opacity">
                {current.title}
              </p>
            </Link>

            {/* Dot indicators */}
            {inscriptions.length > 1 && (
              <div className="flex justify-center gap-2 mt-4">
                {inscriptions.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      i === currentIndex ? "bg-[#99541b]" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="mt-12 border-2 border-[#99541b] p-4 rounded-md text-center">
            <p className="text-xl">No published inscriptions found</p>
          </div>
        )}
      </div>
    </>
  );
};

export default About;