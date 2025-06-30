import React, { useRef} from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';
import { GoLocation } from 'react-icons/go';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


const Contact = () => {
    const form = useRef();

    

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_irw0seq', 'template_3mplz5t', form.current, {
                publicKey: 'ZWokhYQOgNTp8aCrY',
            })
            .then(
                (res) => {
                    if (res.text === 'OK') {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Message Sent Successfully',
                            text: 'Thank you for reaching out. I will get back to you shortly.',
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    }
                },
                () => {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Message not Sent',
                        text: 'Please try again.',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            );
    };

    return (
        <div className='container mx-auto px-4 py-12' data-aos="fade-up">
            <div className='flex flex-col sm:flex-row items-center gap-4 mb-8'>
                <p className='text-4xl font-bold text-primary whitespace-nowrap'>
                    &#60; Contact Me / &#62;
                </p>
                <div className='flex-1 w-full h-[1px] border border-primary/50' />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-md'>
                <div className='space-y-6 text-gray-200' data-aos="fade-right">
                    <h3 className='text-2xl font-semibold text-primary'>Get in Touch</h3>
                    <p>Feel free to reach out to me for collaborations, project discussions, or just to say hello.</p>
                    <div className='space-y-2 text-lg'>
                        <p className='flex items-center gap-1'>
                            <MdEmail />
                            <a
                                href='mailto:sazidahamed04@gmail.com'
                                className='text-primary'
                                title='Send email'
                            >
                                sazidahamed04@gmail.com
                            </a>
                        </p>
                        <p className='flex items-center gap-1'>
                            <MdPhone />
                            <a
                                href='tel:+8801701290529'
                                className='text-primary'
                                title='Call phone'
                            >
                                +880 1701-290529
                            </a>
                        </p>
                        <p className='flex items-center gap-1'>
                            <GoLocation />
                            <span>Dhaka, Bangladesh</span>
                        </p>
                    </div>
                </div>

                <form
                    className='space-y-4'
                    ref={form}
                    onSubmit={sendEmail}
                    data-aos="fade-left"
                >
                    <div>
                        <label className='block text-white font-medium'>Name</label>
                        <input
                            type='text'
                            name='user_name'
                            placeholder='Your Name'
                            className='w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary'
                            required
                        />
                    </div>

                    <div>
                        <label className='block text-white font-medium'>Email</label>
                        <input
                            type='email'
                            name='user_email'
                            placeholder='you@example.com'
                            className='w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary'
                            required
                        />
                    </div>

                    <div>
                        <label className='block text-white font-medium'>Message</label>
                        <textarea
                            name='message'
                            placeholder='Your message...'
                            rows='5'
                            className='w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary'
                            required
                        ></textarea>
                    </div>

                    <button
                        type='submit'
                        className='bg-primary text-white py-2 px-6 rounded-lg hover:bg-primary/80 transition'
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
