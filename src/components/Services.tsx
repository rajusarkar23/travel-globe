"use client";

import { BriefcaseMedical, Camera, CarTaxiFront, ChefHat, ShieldCheck, UtilityPole } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "SAFETY",
        description: "We provide extreme safety of our visitors while they are on the safari.",
        icons: <ShieldCheck />
    },
   
    {
        title: "GOOD FOOD",
        description: "We provide the best kind of regional food to satisfy your delicacy.",
        icons: <ChefHat/>
    },
    {
        title: "DOCTOR ON CALL",
        description: "24 X 7 Doctors’ service is available through phone call.",
        icons: <BriefcaseMedical />
    },
    {
        title: "SIGHT SEEING",
        description: "We assure our visitors the best view of all the nearest tourist spots.",
        icons: <Camera />
    },
    {
        title: "TRANSPORT",
        description: "We provide the best transport for our visitors so that they can enjoy their trip.",
        icons: <CarTaxiFront />
    },
    {
        title: "ELECTRICITY",
        description: "We provide 24 X 7 electricity to all of our customers.",
        icons: <UtilityPole />
    },
];

export default function BestServices() {
    return (
        <div className="mx-auto max-w-4xl px-4 flex flex-col items-center bg-white border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 mt-8 mb-8">
            {/* Centered Heading */}
            <h1 className="text-3xl font-bold text-blue-500 text-center decoration-blue-500 decoration-2 underline underline-offset-8 mb-8">
                Best in class services
            </h1>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white border border-green-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                    >
                        <h2 className="text-xl font-semibold text-green-600 mb-2 text-center">
                            {service.title}
                        </h2>
                        <div className="flex justify-center">
                            {service.icons}
                        </div>
                        <p className="text-gray-700">{service.description}</p>
                        <div>
                            {
                                service.title === "SAFETY" ? (<Link href={"/"} className="font-semibold text-blue-500 flex underline underline-offset-4">View our safety checks.</Link>) : (<></>)
                            }
                            {
                                service.title === "GOOD FOOD" ? (<Link href={"/"} className="font-semibold text-blue-500 flex underline underline-offset-4">View our foods.</Link>) : (<></>)
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}