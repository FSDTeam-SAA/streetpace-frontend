import React from 'react'
import ContactInfo from './_components/contactInfo'
import ContactForm from './_components/contactForm'
import GoogleMap from './_components/googleMap'

export default function page() {
    return (
        <main className='lg:pt-16'>
            <ContactInfo />
            <ContactForm />
            <GoogleMap />
        </main>
    )
}
