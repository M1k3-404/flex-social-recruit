import { sql } from "@vercel/postgres";
import { Console, error } from "console";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const FormSchema = z.object({
    applicationId: z.string(),
    name: z.string({
        required_error: "Name is required",
    }),
    email: z.string({
        required_error: "Email is required",
    }),
    phone: z.string({
        required_error: "Phone is required",
    }),
    linkedin: z.string({
        required_error: "LinkedIn is required",
    }),
    portfolio: z.string().optional(),
    resume: z.string({
        required_error: "Resume is required",
    }),
})

export type State = {
    errors?: {
        applicationId?: string[];
        name?: string[];
        email?: string[];
        phone?: string[];
        linkedin?: string[];
        portfolio?: string[];
        resume?: string[];
    };
    message?: string | null;
};

const CreateApplication = FormSchema.omit({ applicationId: true });

export async function createApplication( formData: FormData) {
    const validateFields = CreateApplication.safeParse( {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        linkedin: formData.get('linkedin'),
        portfolio: formData.get('portfolio'),
        resume: formData.get('resume'),
    })

    if (!validateFields.success) {
        return {
            errors: validateFields.error.flatten().fieldErrors,
            message: "Missing Fields. Failed to Create Application"
        }
    }

    console.log(validateFields.data);
    const { name, email, phone, linkedin, portfolio, resume } = validateFields.data;

    try {
        await sql`
        INSERT INTO applications (name, email, phone, linkedin, portfolio, resume)
        VALUES (${name}, ${email}, ${phone}, ${linkedin}, ${portfolio}, ${resume})
        `;
        console.log("Application Created Successfully");
    } catch (error) {
        return {
            message: "Failed to Create Application"
        }
    };

    revalidatePath("/applications");
}

export async function sendApplications(data: FormData) {
    console.log(data.get("name"));
    console.log(data.get("email"));
    console.log(data.get("phone"));
    console.log(data.get("linkedin"));
    console.log(data.get("portfolio"));
    console.log(data.get("resume"));

    const fieldsData = {
        name: data.get("name"),
        email: data.get("email"),
        phone: data.get("phone"),
        linkedin: data.get("linkedin"),
        portfolio: data.get("portfolio"),
        resume: data.get("resume"),
    }
    console.log(fieldsData);

    const { name, email, phone, linkedin, portfolio, resume } = fieldsData;
    console.log(name, email, phone, linkedin, portfolio, resume);

    try {
        await sql`
        INSERT INTO applications (name, email, phone, linkedin, portfolio, resume)
        VALUES (${name}, ${email}, ${phone}, ${linkedin}, ${portfolio}, ${resume})
        `;
        console.log("Application Created Successfully");
    } catch (error) {
        console.error(error);
        alert("Failed to Create Application");
    }
}