import Link from 'next/link';
import { ArrowRight, Music, BookOpen, Heart, Users, Baby, Coffee, HandHeart, Mic } from 'lucide-react';

export const metadata = {
    title: 'Get Involved | Providence Anglican Church',
    description: 'Discover ways to connect, serve, and grow at Providence Anglican Church. Find your place in our community.',
};

const ministries = [
    {
        icon: Music,
        title: 'Divine Worship (PAC Pluit)',
        description: '<ul><li>English Service – <span class="time">10:00 AM</span></li><li>Farsi Service – <span class="time">01:00 PM</span></li><li>Indonesian Service – <span class="time">06:00 PM</span></li></ul>',
        commitment: 'Every Sunday',
    },
    {
        icon: Music,
        title: 'Divine Worship (PAC Menteng)',
        description: '<ul><li>Indonesian Service – <span class="time">01:00 PM</span></li></ul>',
        commitment: 'Every Sunday',
    },
    {
        icon: Music,
        title: 'Divine Worship (PAC Manado)',
        description: '<ul><li>Indonesian Service – <span class="time">10:00 AM</span></li></ul>',
        commitment: 'Every Sunday',
    },
    {
        icon: BookOpen,
        title: 'English Prayer Meeting',
        description: '<ul><li>Join us on Zoom – <span class="time">07:00 PM</span></li></ul>',
        commitment: 'Every Wednesday',
    },
    {
        icon: Users,
        title: 'Children’s Program',
        description: '<ul><li>Weekly activities at PAC Pluit – <span class="time">09:30 AM</span></li></ul>',
        commitment: 'Every Saturday',
    },
    {
        icon: Baby,
        title: 'Children’s Sunday School',
        description: '<ul><li>Nurturing faith at PAC Pluit – <span class="time">10:30 AM</span></li></ul>',
        commitment: 'Every Sunday',
    },
    {
        icon: Coffee,
        title: 'Women’s Fellowship',
        description: 'A monthly gathering for community, prayer, and shared encouragement.',
        commitment: 'Monthly',
    },
];

export default function GetInvolved() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-church-red/95 to-church-red/80" />

                <div className="container-custom relative z-10">
                    <div className="max-w-3xl">
                        <p className="text-church-gold uppercase tracking-widest text-sm font-medium mb-4">
                            Find Your Place
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                            Get Involved
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed">
                            Discover meaningful ways to connect, grow, and serve in our church family
                        </p>
                    </div>
                </div>
            </section>

            {/* Ministries Grid */}
            <section className="py-20 lg:py-28 bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <p className="text-church-gold uppercase tracking-widest text-sm font-medium mb-4">
                            Serve with Us
                        </p>
                        <h2 className="section-heading">Ministry Opportunities</h2>
                        <p className="section-subheading">
                            Use your gifts and talents to serve God and our community
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {ministries.map((ministry, index) => {
                            const Icon = ministry.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-church-red/10 group-hover:bg-church-red flex items-center justify-center mb-4 transition-colors duration-300">
                                        <Icon className="w-6 h-6 text-church-red group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">{ministry.title}</h3>
                                    <p className="text-gray-600 text-sm mb-4" dangerouslySetInnerHTML={{ __html: ministry.description }}></p>
                                    <p className="text-xs text-church-red font-medium">{ministry.commitment}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Newcomers */}
            <section className="py-20 lg:py-28 bg-gradient-to-br from-church-red to-church-red/90 text-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-church-gold uppercase tracking-widest text-sm font-medium mb-4">
                            First Time Here?
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
                            Welcome to Providence
                        </h2>
                        <p className="text-xl text-white/90 leading-relaxed mb-10">
                            We're so glad you're considering visiting us! Here's what you can expect on a Sunday morning.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <h3 className="font-serif text-xl font-bold text-church-gold mb-3">Arrive</h3>
                                <p className="text-white/80">
                                    Come as you are! Our service starts at 10:00 AM. Arrive a few minutes early
                                    and our greeters will help you find your way.
                                </p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <h3 className="font-serif text-xl font-bold text-church-gold mb-3">Worship</h3>
                                <p className="text-white/80">
                                    Our service includes hymns, prayers, Scripture readings, and a sermon.
                                    We follow a traditional Anglican liturgy.
                                </p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <h3 className="font-serif text-xl font-bold text-church-gold mb-3">Connect</h3>
                                <p className="text-white/80">
                                    After the service, join us for coffee and fellowship. We'd love to meet you
                                    and answer any questions you have.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 lg:py-28 bg-gray-50">
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                        Ready to Take the Next Step?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                        Whether you want to learn more about our church, join a small group,
                        or serve in a ministry, we're here to help you connect.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="btn-primary">
                            Contact Us
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                        <Link href="/about" className="btn-secondary">
                            Learn More About Us
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
