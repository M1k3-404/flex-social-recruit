"use client"

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button, ScrollShadow } from "@nextui-org/react";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { HiArrowLeft } from "react-icons/hi";

export default function Page() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [portfolio, setPortfolio] = useState("");
    const [resume, setResume] = useState<File | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        setResume(file);
    }

    const handleSubmit = () => {
        console.log({ name, email, phone, linkedin, portfolio, resume });
    }

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
                    <div className="grid w-full items-center gap-2 mb-10">
                        <Label htmlFor="name" className="text-sm">1. Full Name (First & Last)</Label>
                        <Input required type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="grid w-full items-center gap-2 mb-10">
                        <Label htmlFor="name" className="text-sm">2. Email Address</Label>
                        <Input required type="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="grid w-full items-center gap-2 mb-10">
                        <Label htmlFor="name" className="text-sm">3. Phone Number</Label>
                        <Input required type="tel" placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>

                    <div className="grid w-full items-center gap-2 mb-10">
                        <Label htmlFor="name" className="text-sm">4. LinkedIn Profile</Label>
                        <Input required type="url" placeholder="Enter your LinkedIn profile link" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
                    </div>

                    <div className="grid w-full items-center gap-2 mb-10">
                        <Label htmlFor="name" className="text-sm">5. Portfolio <span className="text-white/60 italic font-light">(optional)</span></Label>
                        <Input type="url" placeholder="Enter your portfolio link" value={portfolio} onChange={(e) => setPortfolio(e.target.value)} />
                    </div>

                    <div className="grid w-full items-center gap-2 mb-10">
                        <Label htmlFor="name" className="text-sm">6. Resume (PDF)</Label>
                        <Input required type="file" accept=".pdf" className="cursor-pointer" onChange={handleFileChange} />
                    </div>

                    <div className="flex justify-end items-end mb-4">
                        <Button onClick={handleSubmit}>
                            Submit Application
                        </Button>
                    </div>
                </ScrollShadow>
            </div>
        </div>
    )
}