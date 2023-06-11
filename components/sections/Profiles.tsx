import React from "react";

export default function Profiles() {
  return (
    <div className="lg:flex lg:justify-between grid-3 xl:grid-3 lg:col-span-3 gap-4 mt-5 pt-4 border-t-2 border-gray-300">
      <div className="flex items-center">
        {/* Contact 1 Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
        {/* Contact 1 */}
        <div className="ml-3">
          <p className="mb-0 font-semibold text-sm">Email</p>
          <p className="mb-0">
            <a
              href="mailto:support@resumewind.com"
              target="_blank"
              rel="noreferrer"
            >
              kamal@dhimaan.in
            </a>
          </p>
        </div>
      </div>
      <div className="flex items-center">
        {/* Contact 2 Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
        {/* Contact 2 */}
        <div className="ml-3">
          <p className="mb-0 font-semibold text-sm">GitHub</p>
          <p className="mb-0">
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noreferrer"
            >
              github.com/dhimankamal
            </a>
          </p>
        </div>
      </div>
      <div className="flex items-center">
        {/* Contact 3 Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"
          />
        </svg>
        {/* Contact 3 */}
        <div className="ml-3">
          <p className="mb-0 font-semibold text-sm">Website</p>
          <p className="mb-0">
            <a href="https://resumewind.com" target="_blank" rel="noreferrer">
              resumewind.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
