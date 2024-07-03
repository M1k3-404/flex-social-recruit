"use client"

import { createApplication, sendApplications } from "@/lib/actions";
import { useFormState } from "react-dom";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "@nextui-org/react";
import { useState } from "react";

export default function Form() {
//     const initialState = { message: null, error: {}};
//     const [state, dispatch] = useFormState(createApplication, initialState);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [portfolio, setPortfolio] = useState("");
    const [resume, setResume] = useState("");

    const onSubmit = () => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("linkedin", linkedin);
        formData.append("portfolio", portfolio);
        formData.append("resume", resume);

        createApplication(formData);
    }

    return (
        <form>
            {/* Applicant Name */}
            <div className="grid w-full items-center gap-2 mb-10">
                <div>
                    <Label htmlFor="name" className="text-sm">1. Full Name (First & Last)</Label>
                    <Input id="name" name="name" type="text" step="0.01" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} aria-describedby="name-error" />
                </div>

                {/* <div id="name-error" aria-live="polite" aria-atomic="true">
                    {state?.errors?.name &&
                        state.errors.name.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                            </p>
                    ))}
                </div> */}
            </div>

            {/* Applicant Email */}
            <div className="grid w-full items-center gap-2 mb-10">
                <div>
                    <Label htmlFor="email" className="text-sm">2. Email Address</Label>
                    <Input id="email" name="email" type="email" placeholder="Enter your email address" onChange={(e) => setEmail(e.target.value)} aria-describedby="email-error" />
                </div>

                {/* <div id="email-error" aria-live="polite" aria-atomic="true">
                    {state?.errors?.email &&
                        state.errors.email.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                            </p>
                    ))}
                </div> */}
            </div>

            {/* Applicant Phone */}
            <div className="grid w-full items-center gap-2 mb-10">
                <div>
                    <Label htmlFor="phone" className="text-sm">3. Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="Enter your phone number" onChange={(e) => setPhone(e.target.value)} aria-describedby="phone-error" />
                </div>

                {/* <div id="phone-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.phone &&
                        state.errors.phone.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                            </p>
                    ))}
                </div> */}
            </div>

            {/* Applicant LinkedIn */}
            <div className="grid w-full items-center gap-2 mb-10">
                <div>
                    <Label htmlFor="linkedin" className="text-sm">4. LinkedIn Profile</Label>
                    <Input id="linkedin" name="linkedin" type="string" placeholder="Enter your LinkedIn profile link" onChange={(e) => setLinkedin(e.target.value)} aria-describedby="linkedin-error" />
                </div>

                {/* <div id="linkedin-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.linkedin &&
                        state.errors.linkedin.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                            </p>
                    ))}
                </div> */}
            </div>

            {/* Applicant Portfolio */}
            <div className="grid w-full items-center gap-2 mb-10">
                <div>
                    <Label htmlFor="portfolio" className="text-sm">5. Portfolio <span className="text-white/60 italic font-light">(optional)</span></Label>
                    <Input id="portfolio" name="portfolio" type="string" placeholder="Enter your portfolio link" onChange={(e) => setPortfolio(e.target.value)} aria-describedby="portfolio-error" />
                </div>

                {/* <div id="portfolio-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.portfolio &&
                        state.errors.portfolio.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                            </p>
                    ))}
                </div> */}
            </div>

            {/* Applicant Resume */}
            <div className="grid w-full items-center gap-2 mb-10">
                <div>
                    <Label htmlFor="resume" className="text-sm">6. Resume (PDF)</Label>
                    <Input id="resume" name="resume" type="string" placeholder="Provide a link to your resume" onChange={(e) => setResume(e.target.value)} aria-describedby="resume-error" />
                </div>

                {/* <div id="resume-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.resume &&
                        state.errors.resume.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                            </p>
                    ))}
                </div> */}
            </div>

            <div className="flex justify-end items-end mb-4">
                <Button type="submit" onClick={onSubmit}>
                    Submit Application
                </Button>
            </div>
        </form>
    )
}