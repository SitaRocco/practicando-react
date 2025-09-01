import React from 'react';

function Footer() {
    return(
    <footer className="bg-gradient-to-r from-emerald-100 to-emerald-300" id="footer">
    <div className="mx-auto max-w-7xl py-8 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        
        <div className="mt-8 md:mb-8 flex justify-center space-x-6 md:order-3 ">
            
            


            <a href="https://www.linkedin.com/in/rocio-castillo-soto/" target="-blank" className="text-zinc-700 hover:text-indigo-400">
                <span className="sr-only">LinkedIn</span>
                
  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 
  4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 
  3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.82-2.2 
  3.75-2.2 4 0 4.75 2.63 4.75 6V24h-4v-7.5c0-1.8-.03-4.1-2.5-4.1-2.5 
  0-2.9 1.9-2.9 3.9V24h-4V8z"/>
</svg>


            </a>
        </div>
        <div className="mt-8  md:order-1 md:mt-0 ">
            <p className="text-center text-base  text-zinc-700">
                &copy; 2025. Rocío Castillo
            </p>
        </div>
    </div>
</footer>
    );
}

export default Footer;