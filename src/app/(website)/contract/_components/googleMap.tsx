import React from 'react'

export default function GoogleMap() {
    return (
        <section className='w-full'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.525675987538!2d1.0086327926512593!3d51.08030546890207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dec3d28c12fc5b%3A0xe991700534e61e81!2sStreetspace%20Group!5e0!3m2!1sen!2sbd!4v1744362794654!5m2!1sen!2sbd"
                width={100}
                height={5000}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className='w-full md:h-[480px] h-[300px]'
            />
        </section>
    )
}
