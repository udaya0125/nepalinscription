// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import mov1 from '../../public/images/inscription/INSN00002/INSN00002_vid.mp4';
// import backgroundimage from '../../public/images/inscription/INSN00002/INSN00002_1.jpg'
// import 'swiper/css';
// import 'swiper/css/navigation';
// import imageone from '../../public/images/inscription/INSN00002/INSN00002_1.jpg'
// import imagetwo from '../../public/images/inscription/INSN00002/INSN00002_2.jpg'
// import imagethree from '../../public/images/inscription/INSN00002/INSN00002_3.jpg'
// import imagefour from '../../public/images/inscription/INSN00002/INSN00002_4.jpg'
// import imagefive from '../../public/images/inscription/INSN00002/INSN00002_5.jpg'
// import imagesix from '../../public/images/inscription/INSN00002/INSN00002_6.jpg'
// import posterimage from '../../public/images/inscription/INSN00002/INSN00002_1.jpg'

// const images = [
//     imageone,
//     imagetwo,
//     imagethree,
//     imagefour,
//     imagefive,
//     imagesix
// ];

// const tabs = [
//     'Description',
//     'Background',
//     'Text',
//     'Translation',
//     ' References',
//     'Glossary',
// ];

// const INSN00002 = () => {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const [activeTab, setActiveTab] = useState('Description');

//     return (
//         <>
//             {/* Hero */}
//             <div className="relative h-[50vh] mt-12 w-full">
//                 {/* Background Image */}
//                 <img
//                     src={backgroundimage}
//                     alt="Licchavi Inscription"
//                     className="w-full h-full object-cover object-top"
//                 />

//                 {/* Dark overlay */}
//                 <div className="absolute inset-0 bg-black/40"></div>

//                 {/* Heading */}
//                 <p className="absolute inset-0 flex items-center justify-center text-3xl sm:text-5xl text-white text-center px-4">
//                     A Licchavi Inscription from Tebahal
//                 </p>
//             </div>


//             {/* Slider */}
//             <div className="max-w-7xl px-4 mx-auto py-16">
//                 <Swiper
//                     modules={[Navigation]}
//                     navigation
//                     spaceBetween={16}
//                     slidesPerView={2}
//                     breakpoints={{
//                         640: { slidesPerView: 2 },
//                         768: { slidesPerView: 4 },
//                         1024: { slidesPerView: 4 },
//                     }}
//                 >
//                     {images.map((img, index) => (
//                         <SwiperSlide key={index}>
//                             <img
//                                 src={img}
//                                 onClick={() => setActiveIndex(index)}
//                                 className={`w-full h-48 object-cover cursor-pointer transition border-4 ${activeIndex === index ? 'border-black' : 'border-transparent'
//                                     }`}
//                                 alt=""
//                             />
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>

//             {/* Main Image and Video */}
//             <div className="max-w-7xl mx-auto px-4 pb-12">
//                 <div className="grid sm:grid-cols-2 gap-8">
//                     {/* Image */}
//                     <div className="w-full">
//                         <div className="relative w-full ">
//                             <img
//                                 src={images[activeIndex]}
//                                 alt=""
//                                 className="w-full h-full object-contain shadow-lg"
//                             />
//                             <div className="absolute top-4 right-4 bg-black/70 text-white text-sm px-4 py-2 rounded-full">
//                                 {activeIndex + 1} / {images.length}
//                             </div>
//                         </div>
//                     </div>

//                     {/* Video */}
//                     <div className="w-full ">
//                         <video
//                             src={mov1}
//                             controls
//                             poster={posterimage}
//                             className="w-full h-full object-fill shadow-md"
//                         />
//                     </div>

//                 </div>

//                 {/* Tabs */}
//                 <div className="max-w-5xl mx-auto mt-12">
//                     <div className="flex flex-wrap gap-8 border-b">
//                         {tabs.map((tab) => (
//                             <button
//                                 key={tab}
//                                 onClick={() => setActiveTab(tab)}
//                                 className={`text-md font-bold transition ${activeTab === tab
//                                     ? 'bg-black text-white px-4 py-2 rounded'
//                                     : 'text-black hover:text-black'
//                                     }`}
//                             >
//                                 {tab}
//                             </button>
//                         ))}
//                     </div>

//                     {/* Tab Content */}
//                     <div className="py-10 text-black font-medium leading-relaxed text-md sm:text-lg">
//                         {activeTab === 'Description' && (
//                             <p>
//                                 A Licchavi Inscription from Tebahal <br />
//                                 Inscriptions of Nepal ID: INSN 00002 <br />
//                                 Material: Stone (on <span className='italic'>jaladroṇī</span>, its surface now painted white) <br />
//                                 Place: Tebahal (Pracaṇḍaviravihāra, Rājakīrtivihāra, Bandhudattavihāra), Kathmandu <br />
//                                 Date: Licchavi period (based on palaeographical features) <br />
//                                 Script: Licchavi<br />
//                                 Language: Sanskrit<br />
//                                 Dimensions: 3 (L) x 24 (W) cm (writing area)    </p>
//                         )}

//                         {activeTab === 'Background' && (
//                             <p>
//                                 Discovered at Tebahal in Kathmandu, the inscription attests that a Buddhist monk of the
//                                 Śākya lineage named Priyapāla, during the Licchavi period, patronised the construction of a
//                                 water reservoir for the welfare of the community, for the sake of virtuous merit. It has been inscribed on a <span className='italic'>jaladroṇī</span> located on the southern wall of the Śaṅkaṭā temple, its surface now painted
//                                 white.
//                             </p>
//                         )}

//                         {activeTab === 'Text' && <p>
//                             (1) ratnatrayam bhagavad āryyam udāravarṇṇam uddiśya satvaparibhoganimittam etau <br />
//                             (2) kūpañ jaladravaṇikāñ ca śubhāya pitroḥ śākyo yatirvihitavān priyapālanāmā<br />

//                         </p>}

//                         {activeTab === 'Translation' && <p>In preparation.</p>}
//                         {activeTab === ' References' && (
//                             <ul className="space-y-0 text-black
//                    list-disc pl-5 
//                    sm:list-none sm:pl-0">
//                                 <li>
//                                     Gnoli, Raniero (1956), <span className='italic'> Nepalese Inscriptions in Gupta Characters.</span> Parts 1–2.
//                                     Roma: Istituto Italiano per IL Medio ed Estremo Oriente.
//                                 </li>
//                                 <li>
//                                     Jośī, Harirāma (VS 2030), <span className='italic'>Nepālako prācīna abhilekha.</span> Kāṭhamāṇḍauṃ: Nepāla rājakīya prajñā-pratiṣṭhāna.
//                                 </li>
//                                 <li>Regmi, D.R. (1983), <span className='italic'>Inscriptions of Ancient Nepal.</span> Vols. 1–3. New Delhi: Abhinav Publications.</li>
//                                 <li>
//                                     Suvedī, Ghanaśyāma et al. (VS 2011), <span className='italic'>Saṃskṛta-sandeśa</span>, 2.1–3.
//                                 </li>
//                                 <li>
//                                     Vajrācārya, Dhanavajra (VS 2030), <span className='italic'> Licchavikālakā abhilekha.</span> Kāṭhamāṇḍauṃ:
//                                     Nepāla ra eśiyālī adhyayana saṃsthāna.
//                                 </li>
//                             </ul>
//                         )}


//                         {activeTab === 'Glossary' && <p>Key terms explained here.</p>}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default INSN00002;


import React from 'react'

const INSN00002 = () => {
  return (
    <div>
      
    </div>
  )
}

export default INSN00002
