const Footer = () => {
    return (
      <footer className="bg-white text-gray-800 py-10">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Top section with two parts */}
          <div className="flex justify-between items-center">
            <div className="text-xl">
              <p>Overtuigd van de nummer 1 in Noord Holland</p>
            </div>
            <div className="text-4xl font-bold">
              <p>GMK</p>
            </div>
          </div>
  
          <div className="border-t border-gray-300 my-6"></div>
  
          {/* Footer content */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <p className="text-lg font-semibold">GMK Dakonderhoud B.V.</p>
              <p>Leidsekade 57, 1016 CX Amsterdam</p>
            </div>
  
            <div>
              <p className="text-lg font-semibold">Contact</p>
              <p>
                <a href="mailto:info@dakonderhoudgmk.nl" className="text-blue-400">
                  info@dakonderhoudgmk.nl
                </a>
              </p>
              <p>(020) 26 12 257</p>
            </div>
  
            <div>
              <p className="text-lg font-semibold">Legal</p>
              <p>
                <a href="/privacy" className="text-blue-400">Privacy verklaring</a>
              </p>
              <p>
                <a href="/terms" className="text-blue-400">Algemene Voorwaarden</a>
              </p>
            </div>
  
            <div className="text-sm text-center lg:text-left">
              <p>&#169; MMXXIV GMK Dakonderhoud B.V.</p>
              <p>Concept by Nakatori Amsterdam</p>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  