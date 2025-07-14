"use client";

import React, { useState } from "react";
import Sidebar from "./Sidebar";

const LayoutWithHeaderSidebar = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-teal-800 text-white p-4 flex justify-between items-center shadow-md z-10">
        <div className="flex items-center">
          <button
            className="mr-4"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <h1 className="text-xl font-bold">PAC IPNU IPPNU Bulu</h1>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div
          className={`${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } fixed top-0 bottom-0 bg-gray-100 shadow-lg transition-transform duration-300 ease-in-out z-20 w-64 overflow-y-auto`}
        >
          <Sidebar />
        </div>

        {/* Overlay when sidebar is open */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-10"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}

        {/* Main content area */}
        <main
          className={`flex-1 overflow-y-auto transition-all duration-300 ease-in-out`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default LayoutWithHeaderSidebar;
