// import Form from "@/components/application-form";
import { Button, ScrollShadow } from "@nextui-org/react";
import Link from "next/link";
// import { ChangeEvent, useState } from "react";
import { HiArrowLeft } from "react-icons/hi";

export default function Page() {

    return (
        <div className="h-screen flex items-center justify-between">
            <div className="lg:w-[50%] w-[90%] h-[90%] bg-[#1d1d1d] rounded-lg mx-auto p-4">
                <div className="w-full flex justify-start items-center pt-2 pb-4 border-b border-white/25">
                    <Button
                        isIconOnly
                        as={Link}
                        href="/"
                        size="sm"
                        className="rounded-lg bg-[#2d2d2d] text-white hover:bg-white hover:text-[#1d1d1d] p-2"
                    >
                        <HiArrowLeft size={24} />
                    </Button>

                    <p className="text-white text-xl font-medium ml-3">Application Process</p>
                </div>

                <ScrollShadow hideScrollBar size={20} className="w-full h-[92%] pt-6">
                    <p className="sm:text-sm text-xs font-light text-justify mb-6">
                        Applicants interested in this opportunity should begin by carefully reviewing the job specification to ensure a strong fit for their qualifications and experience. Once you have a thorough understanding of the role's requirements and responsibilities, please proceed to our application form. We encourage you to take your time completing the form and to provide detailed information relevant to the position.
                    </p>
                    <p className="font-medium">Interview Process</p>
                    <p className="text-sm font-light text-justify mb-6">
                        After reviewing applications, we will invite qualified candidates to interview. Following a successful interview, shortlisted applicants will then complete a technical assessment to gauge their abilities relevant to the position. The final selection will be made based on the combined performance throughout the application, interview, and technical test.
                    </p>

                    <Button
                        as={Link}
                        href="https://forms.gle/5YJ6ubECxSVQF92K8"
                        size="sm"
                        className="w-full mt-4"
                    >
                        Apply Now
                    </Button>
                </ScrollShadow>
            </div>
        </div>
    )
}