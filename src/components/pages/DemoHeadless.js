import React from "react";

export default function DemoHeadless() {
  return (
    <React.Fragment>
      <div className="pt-24">
        <nav
          aria-label="primary"
          className="relative z-20 flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row"
        >
          <div className="relative group">
            <button className="flex flex-row items-center w-full px-4 py-4 mt-2 text-base font-bold text-left uppercase bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
              <span>First Dropdown</span>
            </button>
            <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
              <div className="px-2 pt-2 pb-4  bg-gray-200 shadow-lg">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <p>dropdown content here</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <button className="flex flex-row items-center w-full px-4 py-4 mt-2 text-base font-bold text-left uppercase bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
              <span>Second Dropdown</span>
            </button>
            <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
              <div className="px-2 pt-2 pb-4  bg-gray-200 shadow-lg">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <p>dropdown content here</p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}
