import React from 'react';
function Header(){
  return(
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span class="font-semibold text-xl text-black tracking-tight">Azog book Store</span>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center text-black px-3 py-2 border rounded text-teal-200 border-teal-400 hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title className="text-black">Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm text-right lg:flex-grow">
      <a href="#" class="block mt-4 text-right lg:inline-block lg:mt-0 text-teal-200 mr-4">
        Comics
      </a>
      <a href="#" class="block text-right mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-4">
        Website
      </a>
      <a href="#" class=" text-right block mt-4 lg:inline-block lg:mt-0 text-teal-200">
        Contact
      </a>
      &nbsp;
      &nbsp;
      &nbsp;
      <a href="#responsive-header" class=" text-right block mt-4 lg:inline-block lg:mt-0 text-teal-200">
        Metaverse
      </a>
    </div>

  </div>
</nav>
  );
}

export default Header;
