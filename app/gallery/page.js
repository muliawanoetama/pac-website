import { Camera } from 'lucide-react';

export const metadata = {
  title: 'Gallery | Providence Anglican Church',
  description: 'Moments and memories from our church life in Jakarta.',
};

const galleryItems = [
  {
    title: "Christmas Gathering",
    description: "Christmas gathering '16",
    image: ""
  },
  {
    title: "Bible Study",
    description: "Bible study hosted by Eric & Vinny",
    image: ""
  },
  {
    title: "Outreach",
    description: "Lovely kids an outreach led by Jess",
    image: ""
  },
  {
    title: "Praise & Worship",
    description: "",
    image: ""
  },
];

export default function Gallery() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1490730141103-6ac27d02047f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-church-navy/95 to-church-navy/80" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <p className="text-church-gold uppercase tracking-widest text-sm font-medium mb-4">
              Our Community
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Gallery
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Snapshots of our life together in worship, fellowship, and service.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-serif text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.description}</p>
                </div>
                <div className="p-4 bg-white border-t border-gray-100 lg:hidden">
                   <h3 className="text-gray-900 font-serif font-bold">{item.title}</h3>
                   <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-church-gold text-white">
        <div className="container-custom text-center">
           <Camera className="w-12 h-12 mx-auto mb-6 opacity-80" />
           <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Want to see more?</h2>
           <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
             Follow us on Facebook to stay updated with our latest events and moments.
           </p>
           <a 
             href="https://www.facebook.com/providenceanglicanjakarta/" 
             target="_blank" 
             rel="noopener noreferrer"
             className="inline-block bg-church-navy text-white px-8 py-3 rounded-md font-semibold hover:bg-navy-700 transition-colors"
           >
             Visit our Facebook Page
           </a>
        </div>
      </section>
    </>
  );
}
