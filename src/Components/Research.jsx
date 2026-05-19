import React from 'react';

const Research = () => {
    return (
        <div className="w-full border border-[#282118] sm:py-0 py-20 mb-24">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 relative p-4 sm:p-16">
                    <img
                        src="images/bg.jpeg"
                        alt="Research Image"
                        className="w-full h-[70vh] object-cover "
                    />
                    <div className="hidden md:block absolute top-0 right-0 h-full w-[0.5px] bg-[#282118] "></div>
                </div>

                <div className="md:hidden w-full h-full bg-[#282118] "></div>

                <div className="w-full md:w-1/2 flex flex-col justify-center p-4 sm:p-24 max-w-2xl ">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#282118] mb-4">
                        Latest Research
                    </h2>
                    <div className="flex flex-wrap gap-4">
                        <p className="text-base md:text-lg font-semibold text-[#282118]">
                            Preserving the Written Artefacts of the Tribhuvan University Central Library in Kantipur
                        </p>
                        <p className="text-base md:text-lg font-semibold text-[#282118]">
                            A Brief Introduction to a Nepalese Rolled Palmleaf Document
                        </p>
                        <p className="text-base md:text-lg font-semibold text-[#282118]">
                            A Brief Introduction to a Nepalese Buddhist nilpatra Manuscript
                        </p>
                         <p className="text-base md:text-lg font-semibold text-[#282118]">
                            Preserving the Written Artefacts of the Tribhuvan University Central Library in Kantipur
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Research;