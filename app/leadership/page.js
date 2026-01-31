import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';

export const metadata = {
    title: 'Leadership | Providence Anglican Church',
    description: 'Meet the leadership team at Providence Anglican Church - dedicated servants committed to shepherding our congregation in Jakarta.',
};

const clergy = [
    {
        name: 'The Revd. Hermawan',
        role: 'Priest in Charge',
        image: '',
        bio: '',
    },
    {
        name: 'Pastor Edrees',
        role: 'Pastor Farsi Congregation',
        image: '',
        bio: '',
    },
];

const vestry = [
    {
        name: 'Eric Listyo',
        role: 'People’s Warden',
        image: '',
    },
];

const ministryLeaders = [
    { name: '', role: '' },
];

export default function Leadership() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-church-red/95 to-church-red/80" />

                <div className="container-custom relative z-10">
                    <div className="max-w-3xl">
                        <p className="text-church-gold uppercase tracking-widest text-sm font-medium mb-4">
                            Our Team
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                            Church Leadership
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed">
                            Meet the dedicated servants who shepherd our congregation
                        </p>
                    </div>
                </div>
            </section>

            {/* Clergy Section */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <p className="text-church-gold uppercase tracking-widest text-sm font-medium mb-4">
                            Ordained Ministry
                        </p>
                        <h2 className="section-heading">Our Clergy</h2>
                        <p className="section-subheading">
                            Called to preach the Word, administer the Sacraments, and shepherd the flock
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {clergy.map((person, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src={person.image}
                                        alt={person.name}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-8">
                                    <h3 className="font-serif text-2xl font-bold text-gray-900 mb-1">{person.name}</h3>
                                    <p className="text-church-red font-medium mb-4">{person.role}</p>
                                    <p className="text-gray-600 leading-relaxed">{person.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vestry Section */}
            <section className="py-20 lg:py-28 bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <p className="text-church-gold uppercase tracking-widest text-sm font-medium mb-4">
                            Lay Leadership
                        </p>
                        <h2 className="section-heading">The Vestry</h2>
                        <p className="section-subheading">
                            Elected members who assist in the governance and administration of our parish
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {vestry.map((person, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                            >
                                <div className="aspect-square overflow-hidden">
                                    <img
                                        src={person.image}
                                        alt={person.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="font-serif text-lg font-bold text-gray-900 mb-1">{person.name}</h3>
                                    <p className="text-church-red text-sm font-medium">{person.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ministry Leaders Section */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <p className="text-church-gold uppercase tracking-widest text-sm font-medium mb-4">
                            Ministry Teams
                        </p>
                        <h2 className="section-heading">Ministry Leaders</h2>
                        <p className="section-subheading">
                            Faithful servants leading various ministries in our church
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {ministryLeaders.map((person, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-church-red hover:text-white transition-colors duration-300 group"
                            >
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-church-red/10 group-hover:bg-white/20 flex items-center justify-center transition-colors duration-300">
                                    <span className="text-2xl font-serif font-bold text-church-red group-hover:text-white transition-colors duration-300">
                                        {person.name.charAt(0)}
                                    </span>
                                </div>
                                <h3 className="font-serif text-lg font-bold mb-1">{person.name}</h3>
                                <p className="text-sm text-gray-600 group-hover:text-white/80 transition-colors duration-300">
                                    {person.role}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-20 lg:py-28 bg-gray-50">
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                        Get in Touch with Our Team
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                        Have questions? Want to meet with one of our pastors? We'd love to hear from you.
                    </p>
                    <Link href="/contact" className="btn-primary">
                        <Mail className="mr-2 w-5 h-5" />
                        Contact Us
                    </Link>
                </div>
            </section>
        </>
    );
}
