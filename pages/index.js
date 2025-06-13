import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow-sm z-10 py-4">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold">Unplugged Focus</div>
          <Link href="#starter"><a className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Get Started</a></Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-5xl font-extrabold mb-4">Escape the Dopamine Trap in Just 5 Days</h1>
          <p className="text-xl mb-8 text-gray-700">A mobile-first, Gen Z-approved program designed for the fastest brain reset possible.</p>
          <Link href="#starter">
            <a className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-lg text-lg hover:bg-indigo-700">Start for $9 →</a>
          </Link>
          <p className="mt-4 text-gray-500">Join over <strong>500+ people</strong> who’ve already reset!</p>
        </div>
      </section>

      {/* Course Cards */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid gap-8 grid-cols-1 md:grid-cols-3">
          {[
            { id: 'starter', title: 'Starter Pack', price: '$9', copy: 'Quick-start detox + Notion tracker', link: '/starter-pack', img: 'https://images.unsplash.com/photo-1589571894960-20bbe2828af7' },
            { id: 'toolkit', title: 'Focus Toolkit', price: '$49', copy: 'Full reset, AI prompts & extras', link: '/toolkit', img: 'https://images.unsplash.com/photo-1612831455543-878b8fdf4037' },
            { id: 'fast-track', title: 'NeuroHacker', price: '$499', copy: 'Coaching, Discord & premium drops', link: '/fast-track', img: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6' },
          ].map(({id, title, price, copy, link, img}) => (
            <div key={id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-6 flex flex-col">
              <div className="relative h-40 mb-4">
                <Image src={img} layout="fill" objectFit="cover" className="rounded-md" alt={title} />
              </div>
              <h2 className="text-2xl font-semibold mb-2">{title}</h2>
              <p className="text-gray-600 mb-4 flex-grow">{copy}</p>
              <div className="flex items-center justify-between">
                <strong className="text-lg">{price}</strong>
                <Link href={link}><a className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Buy Now</a></Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-4">Trusted by Students Everywhere</h3>
          <div className="space-y-6">
            {/* Repeat 3 testimonial cards */}
            {['Alex', 'Jordan', 'Taylor'].map(name => (
              <div key={name} className="bg-gray-50 rounded-lg p-6 shadow-inner">
                <p className="italic">“This 5-day detox reset changed how I *feel* on my device. Game-changer.”</p>
                <div className="mt-4 flex items-center justify-center space-x-3">
                  <Image src="https://randomuser.me/api/portraits/lego/1.jpg" width={48} height={48} className="rounded-full" alt={name} />
                  <span className="font-semibold">{name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="fixed bottom-4 w-full px-6">
        <div className="max-w-6xl mx-auto bg-indigo-600 text-white rounded-lg p-4 flex justify-between items-center shadow-lg">
          <span>Start your reset today — only $9</span>
          <a href="#starter" className="px-6 py-2 bg-white text-indigo-600 rounded-lg">Let’s Go →</a>
        </div>
      </footer>
    </div>
  );
}
