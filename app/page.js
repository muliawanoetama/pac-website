import Link from 'next/link';
import { ArrowRight, MapPin, Clock, Users, BookOpen, Heart, Church } from 'lucide-react';

export const metadata = {
  title: 'Providence Anglican Church | Jakarta, Indonesia',
  description: 'A warm and welcoming center of orthodoxy in Jakarta, Indonesia. Join us for Sunday services in Pluit and Menteng.',
};

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        // backgroundImage: `url('https://images.unsplash.com/photo-1548625149-fc4a29cf7092?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
                        backgroundImage: `url('https://images.unsplash.com/photo-1672940048964-a56f156d0f39?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                    }}
                />
                <div className="gradient-overlay" />

                {/* Decorative Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-church-red/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-church-navy/10 rounded-full blur-3xl" />

                    {/* Geometric accent elements inspired by logo */}
                    <div className="absolute top-0 right-0 w-40 h-40 border-8 border-church-red/20 opacity-50" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 border-8 border-church-navy/20 opacity-50" />
                </div>

                {/* Content */}
                <div className="relative z-10 container-custom text-center text-white px-4 py-32">
                    <div className="animate-fadeInUp">
                        <p className="text-church-navy uppercase tracking-[0.3em] text-sm font-medium mb-6">
                            Welcome to
                        </p>
                        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            Providence<br />
                            <span className="text-church-red">Anglican Church</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-serif italic text-white/90 mb-4">
                            "Catholic, Evangelical & Reformed"
                        </p>
                        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
                            A warm and welcoming center of orthodoxy in Jakarta, Indonesia.
                            Join us as we show forth God's wonders in wonderful Indonesia.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/about" className="btn-gold">
                                Learn More About Us
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <Link href="/contact" className="btn-secondary border-white text-church-red hover:bg-white hover:text-church-red">
                                Plan Your Visit
                            </Link>
                        </div>
                    </div>

                    {/* Service Time Card */}
                    <div className="mt-16 animate-fadeInUp animation-delay-400">
                        <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-church-red/30">
                            <Clock className="w-5 h-5 text-church-red mr-3" />
                            <span className="text-white">Join us Sundays at <strong>Pluit and Menteng</strong></span>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
                        <div className="w-1 h-2 bg-white/70 rounded-full animate-pulse" />
                    </div>
                </div>
            </section>

            {/* Welcome Section */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="order-2 lg:order-1">
                            <p className="text-church-red uppercase tracking-widest text-sm font-medium mb-4">
                                Welcome Home
                            </p>
                            <h2 className="section-heading">
                                Experience the Love of Christ in Community
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                At Providence Anglican Church, we are a family united by our faith in Jesus Christ.
                                Whether you're exploring Christianity for the first time or looking for a church home,
                                you'll find a warm welcome here.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                As part of the worldwide Anglican Communion and the Diocese of Singapore, we embrace
                                the rich heritage of historic Christianity while engaging meaningfully with our
                                Indonesian context.
                            </p>
                            <Link href="/about" className="btn-primary">
                                Discover Our Story
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                        <div className="order-1 lg:order-2 relative">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1438032005730-c779502df39b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Church community gathering"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-church-red text-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                                <p className="font-serif text-lg italic">
                                    "God as our sustainer and provider"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Believe Section */}
            <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <p className="text-church-red uppercase tracking-widest text-sm font-medium mb-4">
                            Our Foundation
                        </p>
                        <h2 className="section-heading">What We Stand For</h2>
                        <p className="section-subheading">
                            Our name reflects our identity and mission as a church
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Providence */}
                        <div className="card p-8 text-center group">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-church-red/10 flex items-center justify-center group-hover:bg-church-red transition-colors duration-300">
                                <Heart className="w-8 h-8 text-church-red group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Providence</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We believe in God as our sustainer and provider. His providence guides our church
                                and every aspect of our lives. We trust in His sovereign care for all creation.
                            </p>
                        </div>

                        {/* Anglican */}
                        <div className="card p-8 text-center group">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-church-red/10 flex items-center justify-center group-hover:bg-church-red transition-colors duration-300">
                                <Church className="w-8 h-8 text-church-red group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Anglican</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We are part of the worldwide Anglican Communion, connected to the Diocese of Singapore.
                                We embrace the historic faith expressed in Scripture, Creeds, and the Book of Common Prayer.
                            </p>
                        </div>

                        {/* Church */}
                        <div className="card p-8 text-center group">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-church-red/10 flex items-center justify-center group-hover:bg-church-red transition-colors duration-300">
                                <Users className="w-8 h-8 text-church-red group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Church</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We are God's chosen people, called together in community. As the body of Christ,
                                we gather to worship, grow in faith, and serve our neighbors in love.
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/statement-of-faith" className="btn-secondary">
                            Read Our Statement of Faith
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Service Times & Location */}
            <section className="py-20 lg:py-28 bg-church-red text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                </div>

                <div className="container-custom relative z-10">
                    <div className="text-center mb-16">
                        <p className="text-church-navy uppercase tracking-widest text-sm font-medium mb-4">
                            Join Us
                        </p>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                            Worship With Us
                        </h2>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto">
                            We would love to welcome you this Sunday
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <div className="flex items-start space-x-4">
                                <div className="w-14 h-14 rounded-full bg-church-navy flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-serif text-2xl font-bold mb-2">Service Time</h3>
                                    <p className="text-2xl font-bold text-white mb-2">Sundays</p>
                                    <p className="text-xl">PAC Pluit</p>
                                    <p className="text-gray-200">
                                        English Service – 10:00 AM<br />
                                        Farsi Service – 01:00 PM<br />
                                        Indonesian Service – 06:00 PM
                                    </p>
                                    <p className="text-xl">PAC Menteng</p>
                                    <p className="text-gray-200">
                                        Indonesian Service – 01:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <div className="flex items-start space-x-4">
                                <div className="w-14 h-14 rounded-full bg-church-navy flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-serif text-2xl font-bold mb-2">Location</h3>
                                    <p className="text-white/90 font-medium">PAC Pluit</p>
                                    <p className="text-gray-200 leading-relaxed">
                                        Greenbay Apartment Public Facilities<br />
                                        Tower A Level GF Unit FF02B<br />
                                        Jl. Pluit Karang Ayu<br />
                                        Pluit, Jakarta 14450
                                    </p>
                                    <p className="text-white/90 font-medium">PAC Menteng</p>
                                    <p className="text-gray-200 leading-relaxed">
                                        Kapel PGI Cikini<br />
                                        Jakarta
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/contact" className="btn-gold">
                            Get Directions
                            <MapPin className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Get Involved CTA */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="container-custom">
                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 lg:p-16 text-white text-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-20">
                            <img
                                src="https://images.unsplash.com/photo-1523803326055-9729b9e02e5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
                                Ready to Get Involved?
                            </h2>
                            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                                There are many ways to connect, serve, and grow at Providence Anglican Church.
                                We'd love to help you find your place in our community.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/get-involved" className="btn-gold">
                                    Explore Opportunities
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                                <Link href="/contact" className="btn-secondary border-white text-gray-900 hover:bg-white hover:text-gray-900">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
