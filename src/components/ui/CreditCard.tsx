"use client";

export default function CreditCard() {
  return (
    <div className="relative w-[380px] h-[220px] mx-auto my-10 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-700 text-white p-6 flex flex-col justify-between">
      {/* Shiny overlay */}
      <div className="absolute inset-0 before:absolute before:top-0 before:left-[-75%] before:w-[50%] before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:skew-x-[-25deg] before:animate-shine pointer-events-none"></div>

      {/* Top section */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold tracking-wider">Access Bank</h1>
        <img
          src="/chip.png"
          alt="chip"
          className="w-10 opacity-90"
        />
      </div>

      {/* Middle section */}
      <div>
        <h2 className="text-2xl tracking-widest font-mono">1234 5678 9012 3456</h2>
      </div>

      {/* Bottom section */}
      <div className="flex justify-between items-center text-sm">
        <div>
          <p className="uppercase text-xs opacity-70">Account Holder</p>
          <p className="tracking-wide font-semibold">The Encounter City</p>
        </div>
        <div className="text-right">
          <p className="uppercase text-xs opacity-70">Valid Thru</p>
          <p className="tracking-wide font-semibold">Kingdom Come</p>
        </div>
      </div>
    </div>
  );
}
