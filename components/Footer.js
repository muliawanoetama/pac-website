import Link from 'next/link';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Clock } from 'lucide-react';

const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Statement of Faith', href: '/statement-of-faith' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'Get Involved', href: '/get-involved' },
    { name: 'Contact', href: '/contact' },
];

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
            {/* Main Footer */}
            <div className="container-custom py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Church Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-church-red flex items-center justify-center">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="w-7 h-7 text-white"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                >
                                    <path d="M12 2v20M7 7h10M5 12h14" strokeLinecap="round" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-serif font-bold text-xl">Providence</h3>
                                <p className="text-sm text-gray-400">Anglican Church</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            A warm and welcoming center of orthodoxy in Jakarta, Indonesia.
                            Part of the worldwide Anglican Communion and Diocese of Singapore.
                        </p>
                        <p className="text-church-navy font-serif italic text-sm bg-gradient-to-r from-church-red to-church-navy bg-clip-text text-transparent">
                            "Catholic, Evangelical & Reformed"
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-serif font-bold text-lg mb-6 text-church-red">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-px bg-church-red transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Service Times */}
                    <div>
                        <h4 className="font-serif font-bold text-lg mb-6 text-church-red">Service Times</h4>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <Clock className="w-5 h-5 text-church-red flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-medium text-white">Sunday Service</p>
                                    <p className="text-gray-300 font-medium">PAC Pluit</p>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        English Service – 10:00 AM<br/>
                                        Farsi Service – 01:00 PM<br/>
                                        Indonesian Service – 06:00 PM
                                    </p>
                                    <p className="text-gray-300 font-medium">PAC Menteng</p>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Indonesian Service – 01:00 PM
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-church-red flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-medium text-white">Location</p>
                                    <p className="text-gray-300 font-medium">PAC Pluit</p>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Greenbay Apartment Public Facilities<br />
                                        Tower A Level GF Unit FF02B<br />
                                        Jl. Pluit Karang Ayu<br />
                                        Pluit, Jakarta 14450
                                    </p>
                                    <p className="text-gray-300 font-medium">PAC Menteng</p>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Kapel PGI Cikini<br />
                                        Jakarta
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-serif font-bold text-lg mb-6 text-church-red">Contact Us</h4>
                        <div className="space-y-4">
                            <a
                                href="tel:+6285721249622"
                                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 group"
                            >
                                <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-church-red flex items-center justify-center transition-colors duration-300">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <span className="text-sm">+62 857-2124-9622</span>
                            </a>
                            <a
                                href="mailto:info@providenceanglican.org"
                                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 group"
                            >
                                <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-church-red flex items-center justify-center transition-colors duration-300">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <span className="text-sm">providenceanglicanchurch@gmail.com</span>
                            </a>
                            <a
                                href="https://www.facebook.com/providenceanglicanchurch"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 group"
                            >
                                <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-church-red flex items-center justify-center transition-colors duration-300">
                                    <Facebook className="w-4 h-4" />
                                </div>
                                <span className="text-sm">@providenceanglicanchurch</span>
                            </a>
                            <a
                                href="https://www.facebook.com/anglican.providence"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 group"
                            >
                                <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-church-red flex items-center justify-center transition-colors duration-300">
                                    <Facebook className="w-4 h-4" />
                                </div>
                                <span className="text-sm">@anglican.providence</span>
                            </a>
                            <a
                                href="https://www.instagram.com/pac_church.id/?hl=en"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 group"
                            >
                                <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-church-red flex items-center justify-center transition-colors duration-300">
                                    <Instagram className="w-4 h-4" />
                                </div>
                                <span className="text-sm">@pac_church.id</span>
                            </a>
                            <a
                                href="https://www.youtube.com/channel/UCxesQb9TKq8BoiwABokmusg"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 group"
                            >
                                <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-church-red flex items-center justify-center transition-colors duration-300">
                                    <Youtube className="w-4 h-4" />
                                </div>
                                <span className="text-sm">@providenceanglicanchurch2393</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container-custom py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-500 text-sm">
                            &copy; {new Date().getFullYear()} Providence Anglican Church. All rights reserved.
                        </p>
                        <p className="text-gray-500 text-sm">

                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
