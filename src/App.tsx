/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-white text-slate-900 selection:bg-rose-600 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}
