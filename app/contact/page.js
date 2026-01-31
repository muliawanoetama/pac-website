'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, you would send this data to your backend
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-church-red/95 to-church-red/80" />

                <div className="container-custom relative z-10">
                    <div className="max-w-3xl">
                        <p className="text-church-gold uppercase tracking-widest text-sm font-medium mb-4">
                            Reach Out
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                            Contact Us
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed">
                            We'd love to hear from you. Get in touch or plan your visit today.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-16 bg-white">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-24 relative z-20">
                        <div className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                            <div className="w-12 h-12 rounded-lg bg-church-red flex items-center justify-center mb-4">
                                <MapPin className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">Address</h3>
                            <p className="text-gray-900 font-medium">PAC Pluit</p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Greenbay Apartment Public Facilities<br />
                                Tower A Level GF Unit FF02B<br />
                                Jl. Pluit Karang Ayu<br />
                                Pluit, Jakarta 14450
                            </p>
                            <p className="text-gray-900 font-medium">PAC Menteng</p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Kapel PGI Cikini<br />
                                Jakarta
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                            <div className="w-12 h-12 rounded-lg bg-church-red flex items-center justify-center mb-4">
                                <Phone className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">Phone</h3>
                            <a
                                href="tel:+6281288103714"
                                className="text-church-red hover:underline block mb-2"
                            >
                                +62 857-2124-9622
                            </a>
                            <p className="text-gray-600 text-sm">Call or WhatsApp us anytime</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                            <div className="w-12 h-12 rounded-lg bg-church-red flex items-center justify-center mb-4">
                                <Clock className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">Service Time</h3>
                            <p className="text-gray-900 font-medium">PAC Pluit</p>
                            <p className="text-church-red font-bold">English Service – 10:00 AM</p>
                            <p className="text-church-red font-bold">Farsi Service – 01:00 PM</p>
                            <p className="text-church-red font-bold">Indonesian Service – 06:00 PM</p>
                            <p className="text-gray-900 font-medium">PAC Menteng</p>
                            <p className="text-church-red font-bold">Indonesian Service – 01:00 PM</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                            <h3 className="font-serif text-lg font-bold text-gray-900 mb-4">Social Media</h3>

                            <div className="space-y-4">
                                {/* Facebook Links */}
                                <div>
                                    <p className="text-gray-900 text-sm font-semibold mb-1 flex items-center gap-2">
                                        Facebook
                                    </p>
                                    <a
                                        href="https://www.facebook.com/providenceanglicanchurch/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-church-red hover:underline block text-sm mb-1"
                                    >
                                        @providenceanglicanchurch
                                    </a>
                                    <a
                                        href="https://www.facebook.com/anglican.providence/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-church-red hover:underline block text-sm"
                                    >
                                        @anglican.providence
                                    </a>
                                </div>

                                {/* Divider */}
                                <div className="border-t border-gray-100"></div>

                                {/* Instagram Link */}
                                <div>
                                    <p className="text-gray-900 text-sm font-semibold mb-1 flex items-center gap-2">
                                        Instagram
                                    </p>
                                    <a
                                        href="https://www.instagram.com/pac_church.id/?hl=en"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-church-red hover:underline block text-sm"
                                    >
                                        @pac_church.id
                                    </a>
                                </div>

                                {/* Divider */}
                                <div className="border-t border-gray-100"></div>

                                {/* Youtube Link */}
                                <div>
                                    <p className="text-gray-900 text-sm font-semibold mb-1 flex items-center gap-2">
                                        Youtube
                                    </p>
                                    <a
                                        href="https://www.youtube.com/channel/UCxesQb9TKq8BoiwABokmusg"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-church-red hover:underline block text-sm"
                                    >
                                        @providenceanglicanchurch2393
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form & Map */}
            <section className="py-20 lg:py-28 bg-gray-50">
                <div className="container-custom">
                    {/* Map */}
                    <div>
                        <p className="text-church-gold uppercase tracking-widest text-sm font-medium mb-4">
                            Find Us
                        </p>
                        <h2 className="section-heading">Our Location</h2>
                        <p className="text-gray-600 text-lg mb-8">
                            PAC Pluit
                        </p>
                        <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3967.1656048744885!2d106.7779255!3d-6.108392!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1dbeca5a6a07%3A0x3375ec4f3557e272!2sApartemen%20Green%20Bay%20Pluit%2C%20Tower%20A%20(Akasia)!5e0!3m2!1sen!2sid!4v1769267265530!5m2!1sen!2sid"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Church Location"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
