import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#000080] font-sans selection:bg-[#cc0000] selection:text-white pb-12">
      {/* Header Section */}
      <header className="flex flex-col items-center pt-8 pb-4">
        <div className="flex items-end justify-center gap-4 mb-6">
          {/* Faux Logo for Wonk */}
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-[#000080]" style={{ fontFamily: 'Impact, sans-serif', transform: 'rotate(-5deg)' }}>
            Wonk
          </h1>
          <h2 className="text-4xl md:text-6xl font-serif text-[#cc0000] pb-2">
            newmedia
          </h2>
        </div>
        
        <div className="text-center font-bold text-lg md:text-xl">
          <p>Website Hosting & Design for</p>
          <p className="italic">Businesses, Non-Profits, & Individuals</p>
        </div>
      </header>

      {/* Top Divider and Quick Links */}
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        <div className="w-full h-px bg-[#000080] mb-2 mt-4"></div>
        <a href="#" className="text-xs text-[#cc0000] hover:underline">wonk defined</a>
        <div className="w-full h-px bg-[#000080] mt-2 mb-8"></div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-6">
        
        {/* Core Services Links */}
        <section className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-serif font-bold italic mb-6">
            Let us create <span className="text-[#000080]">and / or</span> host your web site!
          </h3>
          
          <div className="flex flex-col gap-6 items-center">
            <a href="#" className="text-3xl font-serif font-bold italic text-[#cc0000] underline hover:text-[#990000]">Our Services</a>
            <a href="#" className="text-3xl font-serif font-bold italic text-[#cc0000] underline hover:text-[#990000]">Sample Sites</a>
            <a href="#" className="text-3xl font-serif font-bold italic text-[#000080] underline hover:text-[#000055]">About Wonk</a>
          </div>
        </section>

        {/* Info Paragraph and Side Elements */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="md:w-1/4 flex flex-col items-center text-center">
            {/* Abstract Graphic Placeholder */}
            <div className="w-32 h-32 rounded-full bg-[#000080] flex items-center justify-center relative mb-4">
               <div className="absolute inset-2 border-2 border-dashed border-white rounded-full"></div>
               <div className="w-16 h-16 bg-white rounded-full opacity-20"></div>
               <div className="absolute top-4 right-4 w-3 h-3 bg-[#cc0000] rounded-full"></div>
               <div className="absolute bottom-6 left-6 w-2 h-2 bg-[#cc0000] rounded-full"></div>
            </div>
            <h4 className="font-bold whitespace-nowrap text-sm">Good_Work@Reasonable_Prices</h4>
          </div>

          <div className="md:w-1/2 text-center text-lg leading-relaxed text-black font-serif">
            <p>
              We are a small Massachusetts based business that <a href="#" className="text-[#cc0000] underline">hosts</a>, <a href="#" className="text-[#cc0000] underline">develops</a> and <a href="#" className="text-[#cc0000] underline">consults</a> about web sites. We are poised to offer good work at reasonable prices to other small non-profit and profit enterprises. Our aim is to provide a high level of service and capabilities to our <a href="#" className="text-[#cc0000] underline">clients</a>.
            </p>
            <p className="mt-4 text-xs italic">
              <a href="#" className="text-[#cc0000] hover:underline">(Click here for more information about our services.)</a>
            </p>
          </div>

          <div className="md:w-1/4 flex justify-center">
            <a href="#" className="text-[#cc0000] italic underline font-bold text-sm text-center">Why Can't I Send Email Now?</a>
          </div>
        </section>

        {/* Payment and Forms */}
        <section className="flex flex-col items-center mb-12">
          <div className="w-full max-w-2xl h-px bg-[#000080] mb-8"></div>
          
          <div className="border-2 border-[#000080] p-4 px-12 text-center mb-8 inline-block shadow-sm">
            <a href="#" className="text-[#cc0000] font-serif font-bold italic text-lg hover:underline flex flex-col gap-2 items-center">
              To pay Wonk newmedia &lt;click here&gt;
              <div className="flex justify-center gap-1 mt-1 opacity-80">
                <div className="w-8 h-5 bg-blue-600 rounded-sm"></div>
                <div className="w-8 h-5 bg-orange-500 rounded-sm"></div>
                <div className="w-8 h-5 bg-gray-400 rounded-sm"></div>
                <div className="w-8 h-5 bg-green-600 rounded-sm"></div>
              </div>
            </a>
          </div>

          <div className="flex flex-col gap-4 items-center text-center">
            <h4 className="text-[#cc0000] font-bold text-lg">Let <span className="italic">us</span> perform for you too.</h4>
            <a href="#" className="text-[#cc0000] italic underline hover:text-[#990000]">Why Can't I Send Email Now?</a>
            <a href="#" className="text-[#cc0000] underline hover:text-[#990000]">Configure your E-mail Account?</a>
            <a href="#" className="text-[#cc0000] underline hover:text-[#990000]">Change your FTP Password</a>
            <a href="#" className="text-[#cc0000] italic underline font-bold text-lg mt-2 hover:text-[#990000]">For more information, please send us a message!</a>
          </div>
        </section>

        {/* Footer Area */}
        <footer className="flex flex-col items-center mt-12">
          <div className="w-full max-w-3xl h-32 bg-gray-200 flex items-center justify-center text-gray-400 mb-4 border border-gray-300">
             <span className="text-xl">🖻</span>
          </div>
          
          <div className="flex gap-2 items-center mb-6 text-[10px]">
             <span className="bg-orange-500 text-white px-1 font-bold">uptime</span>
             <span className="border border-gray-400 px-1">100%</span>
             <a href="#" className="text-blue-600 underline ml-2">website monitoring</a>
          </div>

          <h3 className="text-2xl font-bold italic text-[#cc0000] mb-4">Wonk newmedia</h3>
          
          <div className="w-full max-w-lg h-8 bg-gray-300 border border-black mb-8 flex items-center justify-between px-2 text-xs font-mono relative overflow-hidden">
             <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,#000_2px,#000_4px)]"></div>
             <span className="relative z-10 text-black font-sans font-bold text-[8px]">INTERNET TRAFFIC REPORT - GLOBAL RESPONSE TIME - 11/20/2018 01:00 MST</span>
             <span className="relative z-10 bg-black text-green-500 font-bold px-1 text-sm border border-green-500">94</span>
          </div>

          <div className="w-full max-w-4xl h-px bg-gray-400 mb-4"></div>
          
          <a href="#" className="text-[#000080] italic underline mb-4 hover:text-[#000055]">Served Differently!</a>
          
          <p className="text-gray-500 italic text-xs mb-6">copyright © 1995 - 2026 , Wonk newmedia</p>
          
          <div className="text-center flex flex-col items-center">
            <span className="text-gray-500 text-[10px] italic">Sign up for your FREE PayPal Account!</span>
            <div className="flex gap-1 mt-1">
              <div className="w-12 h-6 border border-gray-400 bg-gray-100 flex items-center justify-center text-blue-800 font-bold italic text-[10px]">PayPal</div>
              <div className="w-8 h-6 bg-blue-600 rounded-sm"></div>
              <div className="w-8 h-6 bg-orange-500 rounded-sm"></div>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}
