import Image from "next/image";

export default function UnpluggedFocusLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900 p-6">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-12">
          <Image
            src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"
            alt="Focus illustration"
            width={1200}
            height={400}
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">🧠 Unplugged Focus</h1>
        <p className="text-xl text-gray-700 mb-10">Your brain is cooked. Let’s reset it — dopamine detox style. 5 days, Gen Z-approved.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-6 border hover:shadow-2xl transition hover:scale-105">
            <Image
              src="https://images.unsplash.com/photo-1589571894960-20bbe2828af7"
              alt="Starter Pack"
              width={400}
              height={200}
              className="rounded-xl mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">🚀 Starter Pack</h2>
            <p className="mb-4">Quick-start detox guide + aesthetic Notion tracker.</p>
            <p className="font-bold text-lg">$9</p>
            <button className="mt-4 px-4 py-2 rounded-2xl bg-black text-white hover:bg-gray-800">Get the Pack 🧃</button>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6 border hover:shadow-2xl transition hover:scale-105">
            <Image
              src="https://images.unsplash.com/photo-1612831455543-878b8fdf4037"
              alt="Focus Toolkit"
              width={400}
              height={200}
              className="rounded-xl mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">📦 Focus Toolkit</h2>
            <p className="mb-4">Full reset plan, AI prompts, daily check-ins, and cool extras.</p>
            <p className="font-bold text-lg">$49</p>
            <button className="mt-4 px-4 py-2 rounded-2xl bg-black text-white hover:bg-gray-800">Level Up 🔋</button>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6 border hover:shadow-2xl transition hover:scale-105">
            <Image
              src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6"
              alt="Fast-Track"
              width={400}
              height={200}
              className="rounded-xl mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">👑 NeuroHacker Fast-Track</h2>
            <p className="mb-4">Everything + 1:1 coaching, private Discord, & premium drops.</p>
            <p className="font-bold text-lg">$499</p>
            <button className="mt-4 px-4 py-2 rounded-2xl bg-black text-white hover:bg-gray-800">Go Beast Mode ⚡</button>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-inner mb-12">
          <h3 className="text-3xl font-bold mb-4">Why This Slaps:</h3>
          <ul className="list-disc list-inside text-left max-w-xl mx-auto text-lg text-gray-700">
            <li className="mb-2">📱 Designed for chaos brains & scroll fatigue</li>
            <li className="mb-2">🤖 Uses AI to help you rewire your habits — fast</li>
            <li className="mb-2">✨ No fluff. No lectures. Just a 5-day brain reset that hits</li>
          </ul>
        </div>

        <div className="mt-12">
          <p className="text-xl font-semibold mb-4">Join the dopamine rebellion 🧬</p>
          <button className="px-6 py-3 rounded-2xl bg-black text-white text-xl hover:bg-gray-800">Let’s Detox 🧼</button>
          <p className="text-sm text-gray-500 mt-3 italic">💬 243 people reset their brains this week</p>
        </div>
      </div>
    </div>
  );
}
