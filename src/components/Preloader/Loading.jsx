import React from "react";

function Loading() {
  return (
    <div className="loader-container w-full md:h-screen text-gray-300 bg-[#0a192f] ">
      <div className="text-center">
        <div role="status">
          <div class="flex justify-center items-center h-screen">
            <div class="relative inline-flex">
              <div class="w-8 h-8 bg-blue-500 rounded-full"></div>
              <div class="w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-ping"></div>
              <div class="w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
            </div>
          </div>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default Loading;
