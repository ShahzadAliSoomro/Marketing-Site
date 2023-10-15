"use server"

import { db } from "@/database/drizzle"
import { getInTouchTable } from "@/model/gitintouch-form"




export const handleContactUs = async (formData: FormData) => {
    const fullName = formData.get("fullName")
    const emailAdress = formData.get("email")
    const company = formData.get("company")
    const message = formData.get("message")

    try {
        await db.insert(getInTouchTable).values({
            // @ts-ignore
            fullName,
            email: emailAdress,
            company,
            message
        }).returning()

        console.log("Form Submitted successfully")
    } catch (error) {
        console.log(`Error while submitting the form : ${error}`)
    }
}