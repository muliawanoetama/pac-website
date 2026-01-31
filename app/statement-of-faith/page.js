import Link from 'next/link';
import { ArrowRight, BookOpen, Cross, Heart, Users, Droplets, Crown } from 'lucide-react';

export const metadata = {
  title: 'Statement of Faith | Providence Anglican Church',
  description: 'Our core beliefs and doctrines at Providence Anglican Church - grounded in Scripture, affirmed by the historic creeds, and expressed in the Anglican tradition.',
};

const beliefs = [
  {
    icon: BookOpen,
    title: 'Holy Scripture',
    description: 'We believe the Holy Scriptures of the Old and New Testaments to be the inspired Word of God, the authoritative and sufficient rule for faith and practice.',
  },
  {
    icon: Crown,
    title: 'The Holy Trinity',
    description: 'We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit—co-equal in nature, power, and glory.',
  },
  {
    icon: Cross,
    title: 'Jesus Christ',
    description: 'We believe in the deity and humanity of our Lord Jesus Christ, His virgin birth, sinless life, atoning death, bodily resurrection, and glorious return.',
  },
  {
    icon: Heart,
    title: 'Salvation by Grace',
    description: 'We believe that salvation is by grace alone, through faith alone, in Christ alone. We are justified by faith and called to live in holiness.',
  },
  {
    icon: Users,
    title: 'The Church',
    description: 'We believe in the one, holy, catholic, and apostolic Church, the body of Christ on earth, called to worship God and proclaim the Gospel to all nations.',
  },
  {
    icon: Droplets,
    title: 'The Sacraments',
    description: 'We celebrate the sacraments of Baptism and Holy Communion as outward signs of inward grace, instituted by Christ for our strengthening and growth.',
  },
];

export default function StatementOfFaith() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-church-red/95 to-church-red/80" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <p className="text-church-gold uppercase tracking-widest text-sm font-medium mb-4">
              Our Beliefs
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Statement of Faith
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Grounded in Scripture, affirmed by the historic creeds, and expressed in the Anglican tradition
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-church-gold uppercase tracking-widest text-sm font-medium mb-4">
              Foundation of Our Faith
            </p>
            <h2 className="section-heading">What We Believe</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              As an Anglican church, we affirm the historic Christian faith as summarized in the
              Apostles' Creed and the Nicene Creed. Our beliefs are rooted in Holy Scripture and
              expressed through the Book of Common Prayer and the Thirty-Nine Articles of Religion.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We hold to the doctrine of the Protestant Reformation while treasuring the ancient
              traditions of the universal Church. Here are the core beliefs that unite us:
            </p>
          </div>
        </div>
      </section>

      {/* Beliefs Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beliefs.map((belief, index) => {
              const Icon = belief.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-church-red rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">{belief.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{belief.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Creeds Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-church-gold uppercase tracking-widest text-sm font-medium mb-4">
                Historic Affirmations
              </p>
              <h2 className="section-heading">The Creeds We Confess</h2>
            </div>

            {/* Apostles' Creed */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 lg:p-12 mb-8">
              <h3 className="font-serif text-2xl font-bold text-church-red mb-6 text-center">
                The Apostles' Creed
              </h3>
              <div className="prose prose-lg max-w-none text-gray-700 text-center">
                <p className="leading-relaxed">
                  I believe in God, the Father almighty,<br />
                  creator of heaven and earth.<br /><br />
                  I believe in Jesus Christ, his only Son, our Lord,<br />
                  who was conceived by the Holy Spirit,<br />
                  born of the Virgin Mary,<br />
                  suffered under Pontius Pilate,<br />
                  was crucified, died, and was buried;<br />
                  he descended to the dead.<br />
                  On the third day he rose again;<br />
                  he ascended into heaven,<br />
                  he is seated at the right hand of the Father,<br />
                  and he will come to judge the living and the dead.<br /><br />
                  I believe in the Holy Spirit,<br />
                  the holy catholic Church,<br />
                  the communion of saints,<br />
                  the forgiveness of sins,<br />
                  the resurrection of the body,<br />
                  and the life everlasting. Amen.
                </p>
              </div>
            </div>

            {/* Nicene Creed */}
            <div className="bg-gradient-to-br from-church-red to-church-red/90 rounded-2xl p-8 lg:p-12 text-white">
              <h3 className="font-serif text-2xl font-bold text-church-gold mb-6 text-center">
                The Nicene Creed
              </h3>
              <div className="prose prose-lg prose-invert max-w-none text-center">
                <p className="leading-relaxed text-white/90">
                  We believe in one God, the Father, the Almighty,<br />
                  maker of heaven and earth, of all that is, seen and unseen.<br /><br />
                  We believe in one Lord, Jesus Christ, the only Son of God,<br />
                  eternally begotten of the Father, God from God, Light from Light,<br />
                  true God from true God, begotten, not made,<br />
                  of one Being with the Father; through him all things were made.<br />
                  For us and for our salvation he came down from heaven,<br />
                  was incarnate from the Holy Spirit and the Virgin Mary,<br />
                  and was made man. For our sake he was crucified under Pontius Pilate;<br />
                  he suffered death and was buried.<br />
                  On the third day he rose again in accordance with the Scriptures;<br />
                  he ascended into heaven and is seated at the right hand of the Father.<br />
                  He will come again in glory to judge the living and the dead,<br />
                  and his kingdom will have no end.<br /><br />
                  We believe in the Holy Spirit, the Lord, the giver of life,<br />
                  who proceeds from the Father and the Son,<br />
                  who with the Father and the Son is worshiped and glorified,<br />
                  who has spoken through the prophets.<br />
                  We believe in one holy catholic and apostolic Church.<br />
                  We acknowledge one baptism for the forgiveness of sins.<br />
                  We look for the resurrection of the dead,<br />
                  and the life of the world to come. Amen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
            Want to Learn More?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            We'd love to discuss our beliefs with you and answer any questions you may have.
            Join us for a service or get in touch with our leadership team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get In Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/leadership" className="btn-secondary">
              Meet Our Leaders
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
