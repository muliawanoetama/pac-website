import Link from 'next/link';
import { ArrowRight, BookOpen, Heart, Users, Globe, Church } from 'lucide-react';

export const metadata = {
    title: 'About Us | Providence Anglican Church',
    description: 'Learn about Providence Anglican Church - a warm and welcoming center of orthodoxy in Indonesia.',
};

export default function About() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1478147427282-58a87a120781?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-church-red/95 to-church-red/80" />

                <div className="container-custom relative z-10">
                    <div className="max-w-3xl">
                        <p className="text-church-gold uppercase tracking-widest text-sm font-medium mb-4">
                            Our Story
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                            About Providence Anglican Church
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed">
                            A community united in faith, serving Christ in the heart of Indonesia
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Identity Section */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="text-church-gold uppercase tracking-widest text-sm font-medium mb-4">
                                Who We Are
                            </p>
                            <h2 className="section-heading">A Warm & Welcoming Center of Orthodoxy</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Providence Anglican Church is strategically positioned in Jakarta to show forth
                                God's wonders in wonderful Indonesia. We are a community committed to the historic
                                Christian faith as expressed in the Anglican tradition.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Our name reflects three foundational aspects of our identity:
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 rounded-full bg-church-red/10 flex items-center justify-center flex-shrink-0">
                                        <Heart className="w-5 h-5 text-church-red" />
                                    </div>
                                    <div>
                                        <h4 className="font-serif font-bold text-lg text-gray-900">Providence</h4>
                                        <p className="text-gray-600">God as our sustainer and provider, guiding all things by His sovereign care.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 rounded-full bg-church-red/10 flex items-center justify-center flex-shrink-0">
                                        <Globe className="w-5 h-5 text-church-red" />
                                    </div>
                                    <div>
                                        <h4 className="font-serif font-bold text-lg text-gray-900">Anglican</h4>
                                        <p className="text-gray-600">Part of the worldwide Anglican Communion.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 rounded-full bg-church-red/10 flex items-center justify-center flex-shrink-0">
                                        <Users className="w-5 h-5 text-church-red" />
                                    </div>
                                    <div>
                                        <h4 className="font-serif font-bold text-lg text-gray-900">Church</h4>
                                        <p className="text-gray-600">God's chosen people, gathered to worship and serve together in love.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1445445290350-18a3b86e0b5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Church interior"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-8 -right-8 bg-church-gold p-6 rounded-xl shadow-xl hidden lg:block">
                                <p className="font-serif text-2xl font-bold text-church-red">
                                    Catholic,<br />Evangelical<br />& Reformed
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Tagline Section */}
            <section className="py-20 lg:py-28 bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <p className="text-church-gold uppercase tracking-widest text-sm font-medium mb-4">
                            Our Identity
                        </p>
                        <h2 className="section-heading">Catholic, Evangelical & Reformed</h2>
                        <p className="section-subheading">
                            Three words that describe the character of our faith and worship
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="w-12 h-12 bg-church-red rounded-lg flex items-center justify-center mb-6">
                                <Church className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Catholic</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We embrace the universal ("catholic") faith handed down through the centuries.
                                We treasure the creeds, liturgy, and traditions that connect us to Christians
                                throughout history and around the world.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="w-12 h-12 bg-church-red rounded-lg flex items-center justify-center mb-6">
                                <BookOpen className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Evangelical</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We are committed to the Gospel (the "evangel") of Jesus Christ. We believe in
                                the authority of Scripture, salvation by grace through faith, and the call to
                                share the good news with all people.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="w-12 h-12 bg-church-red rounded-lg flex items-center justify-center mb-6">
                                <Heart className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Reformed</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We stand in the tradition of the Protestant Reformation, affirming that the
                                church must always be reforming according to God's Word. We hold to the
                                doctrines of grace and the sovereignty of God.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 lg:py-28 bg-church-red text-white">
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
                        We'd Love to Meet You
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                        Whether you're exploring faith or looking for a church home, you're welcome here.
                        Join us this Sunday and experience the warmth of our community.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="btn-gold">
                            Plan Your Visit
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                        <Link href="/leadership" className="btn-secondary border-white text-church-red hover:bg-white hover:text-church-red">
                            Meet Our Leaders
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
