// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import mov1 from '../../public/images/inscription/mov2.mp4'
// import backgroundimage from '../../public/images/inscription/inscription9.jpg';
// import videoposter from '../../public/images/inscription/inscription4.jpg'

// import 'swiper/css';
// import 'swiper/css/navigation';

// const images = [
//     '/images/inscription/INSN00001/INSN00001_1.jpg',
//     '/images/inscription/INSN00001/INSN00001_2.jpg',
//     '/images/inscription/INSN00001/INSN00001_3.jpg',
//     '/images/inscription/INSN00001/INSN00001_4.jpg',
//     '/images/inscription/INSN00001/INSN00001_5.jpg',
//     '/images/inscription/INSN00001/INSN00001_6.jpg',
//     '/images/inscription/INSN00001/INSN00001_7.jpg',
//     '/images/inscription/INSN00001/INSN00001_8.jpg',
//     '/images/inscription/INSN00001/INSN00001_9.jpg',
//     '/images/inscription/INSN00001/INSN00001_10.jpg',
//     '/images/inscription/INSN00001/INSN00001_11.jpg',
// ];


// const tabs = [
//     'Description',
//     'Background',
//     'Text',
//     'Translation',
//     ' References',
//     'Glossary',
// ];


// const INSN00001 = () => {
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
//                     className="w-full h-full object-cover"
//                 />

//                 {/* Dark overlay */}
//                 <div className="absolute inset-0 bg-black/40"></div>

//                 {/* Heading */}
//                 <p className="absolute inset-0 flex items-center justify-center text-3xl sm:text-5xl text-white text-center px-4">
//                     A Licchavi Inscription en route to Mṛgasthalī
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
//                             poster={videoposter}
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
//                                 A Licchavi Inscription en route to Mṛgasthalī <br />
//                                 Inscriptions of Nepal ID: INSN 00001 <br />
//                                 Material: Stone, on the pedestal of Śivaliṅga <br />
//                                 Place: En route to Mṛgasthalī from Pashupati, Kathmandu <br />
//                                 Date: 467 vaiśākhaśuklapūrṇimā<br />
//                                 Reign: Rāmadeva<br />
//                                 Script: Licchavi<br />
//                                 Language: Sanskrit<br />
//                                 Dimensions: 18 (L) x 44.5 cm (W) (writing part)     </p>
//                         )}

//                         {activeTab === 'Background' && (
//                             <p>
//                                 Discovered en route to Mṛgasthalī, the inscription dates to the Licchavi period and reflects
//                                 royal patronage. It is a significant epigraphic source that sheds light on the country&#39;s early
//                                 religious and cultural history.
//                             </p>
//                         )}

//                         {activeTab === 'Text' && <p>
//                             (1) oṃ svasti saṃvat 467 vaiśākhe śukladivapaurṇṇamāssyāṃ bhaṭṭārakamahārāja <br />
//                             (2) śrīrāmadevasya sāgraṃ varṣaśataṃ samājñāpayati mahārājamahāsāmanta<br />
//                             (3) śrīkramalīlaḥ kuśalīḥ bhagavataḥ nātheśvarāya mānamatyā dattaṃ deva<br />
//                             (4) grāmoddeśe śālagaṃbikṣetrapiṇḍaka mā 28 tatra deśe khuḍḍasvāminaḥ<br />
//                             (5) dattam mā 2

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
//                                 <li>
//                                     Naraharinātha, Yogī (VS 2010), <span className='italic'> Saṃskṛta-sandeśa,</span> 1.7.
//                                 </li>
//                                 <li>Regmi, D.R. (1983), <span className='italic'>Inscriptions of Ancient Nepal.</span> Vols. 1–3. New Delhi: Abhinav Publications.</li>
//                                 <li>Ṭaṇḍana, Govinda (VS 1953–56), <span className='italic'>Paśupatikṣetrako sāṃskṛtika adhyayana. </span> Parts 1–2.
//                                     Kāṭhamāḍauṃ: Śrījharendraśamaśera Ja.Ba.Rā […].</li>
//                                 <li>
//                                     Vajrācārya, Dhanavajra (VS 2030), <span className='italic'> Licchavikālakā abhilekha.</span> Kāṭhamāṇḍauṃ:
//                                     Nepāla ra eśiyālī adhyayana saṃsthāna.
//                                 </li>

//                                 <li>
//                                     Vajrācārya, Dhanavajra and Jñānamaṇi Nepāla (VS 2011), <span className='italic'> Saṃskṛta-sandeśa,</span> 2.1–3.
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

// export default INSN00001;

import React from 'react'

const INSN00001 = () => {
  return (
    <div>
      
    </div>
  )
}

export default INSN00001
