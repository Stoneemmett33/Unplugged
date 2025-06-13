export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Unplugged Focus</h1>
        <p className="text-xl mb-8">Escape the dopamine trap. Reclaim your mind. Start in 5 days.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="rounded-2xl shadow-lg p-6 border">
            <h2 className="text-2xl font-semibold mb-2">Starter Pack</h2>
            <p className="mb-4">12-page guide + Notion habit tracker.</p>
            <p className="font-bold text-lg">$9</p>
            <button className="mt-4 px-4 py-2 rounded-2xl bg-black text-white hover:bg-gray-800">Get Now</button>
          </div>
          <div className="rounded-2xl shadow-lg p-6 border">
            <h2 className="text-2xl font-semibold mb-2">Focus Toolkit</h2>
            <p className="mb-4">Detox guide, AI prompts, 5-day reset plan, bonus PDFs.</p>
            <p className="font-bold text-lg">$49</p>
            <button className="mt-4 px-4 py-2 rounded-2xl bg-black text-white hover:bg-gray-800">Buy Now</button>
          </div>
          <div className="rounded-2xl shadow-lg p-6 border">
            <h2 className="text-2xl font-semibold mb-2">NeuroHacker Fast-Track</h2>
            <p className="mb-4">Everything + 1:1 coaching call, Discord access, exclusive drops.</p>
            <p className="font-bold text-lg">$499</p>
            <button className="mt-4 px-4 py-2 rounded-2xl bg-black text-white hover:bg-gray-800">Join Now</button>
          </div>
        </div>

        <div className="bg-gray-100 rounded-2xl p-6 shadow-inner">
          <h3 className="text-2xl font-semibold mb-2">What You'll Learn</h3>
          <ul className="list-disc list-inside text-left max-w-xl mx-auto">
            <li>Break screen addiction with a science-backed detox plan</li>
            <li>Use AI-generated prompts to rebuild focus and clarity</li>
            <li>Develop rituals that reset your dopamine system and productivity</li>
          </ul>
        </div>

        <div className="mt-12">
          <p className="text-lg font-medium">Start now. Your mind deserves it.</p>
          <button className="mt-4 px-6 py-3 rounded-2xl bg-black text-white text-xl hover:bg-gray-800">Download Starter Pack</button>
        </div>
      </div>
    </div>
  );
}
