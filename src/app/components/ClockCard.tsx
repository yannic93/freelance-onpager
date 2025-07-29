"use client";
import React, { useEffect, useState } from "react";
import { useDarkMode, useClockCard } from "../contexts/DarkModeContext";

function getTimeInZone(timeZone: string) {
  return new Date(
    new Date().toLocaleString("en-US", { timeZone })
  );
}

function getTimeDiffHours(tz1: string, tz2: string) {
  const now = new Date();
  const t1 = new Date(now.toLocaleString("en-US", { timeZone: tz1 }));
  const t2 = new Date(now.toLocaleString("en-US", { timeZone: tz2 }));
  return Math.round((t2.getTime() - t1.getTime()) / (1000 * 60 * 60));
}

const ClockCard = () => {
  const [userTz, setUserTz] = useState<string>("Europe/Berlin");
  const [userTime, setUserTime] = useState<Date | null>(null);
  const [berlinTime, setBerlinTime] = useState<Date | null>(null);
  const [diff, setDiff] = useState<number | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const { isDarkMode } = useDarkMode();
  const { setIsClockCardOpen } = useClockCard();
  
  // Z-index: 99999 ensures overlay above Cal.com floating button on mobile

  useEffect(() => {
    // Mobile: standardmäßig eingeklappt
    if (typeof window !== 'undefined' && window.innerWidth < 640) {
      setOpen(false);
    }
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setUserTz(tz);
    setUserTime(getTimeInZone(tz));
    setBerlinTime(getTimeInZone("Europe/Berlin"));
    setDiff(getTimeDiffHours(tz, "Europe/Berlin"));
    const interval = setInterval(() => {
      setUserTime(getTimeInZone(tz));
      setBerlinTime(getTimeInZone("Europe/Berlin"));
      setDiff(getTimeDiffHours(tz, "Europe/Berlin"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Update context when open state changes
  useEffect(() => {
    setIsClockCardOpen(open);
  }, [open, setIsClockCardOpen]);

  const format = (d: Date) => d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  let diffText = "";
  if (diff === null) diffText = "-";
  else if (diff === 0) diffText = "Gleiche Zeit";
  else if (diff > 0) diffText = `Du bist ${diff}h voraus`;
  else if (diff < 0) diffText = `Du bist ${-diff}h zurück`;

  return (
    <div className={`fixed bottom-6 right-6 ${open ? 'z-[999999]' : 'z-[99999]'}`}>
      {/* Collapsed Button */}
      {!open && (
        <button
          aria-label="Zeitzonen-Vergleich öffnen"
          onClick={() => setOpen(true)}
          className={`rounded-full shadow-2xl border border-[#cda967]/30 w-14 h-14 flex items-center justify-center transition-colors duration-200 focus:outline-none ${isDarkMode ? 'bg-[#1a1a1a] hover:bg-[#2a2a2a]' : 'bg-white hover:bg-[#f5efe6]'}`}
          style={{ fontFamily: 'inherit' }}
        >
          <svg className="w-7 h-7 text-[#cda967]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
        </button>
      )}
      {/* Expanded Card */}
      <div
        className={`transition-all duration-300 ease-in-out ${open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'} origin-bottom-right`}
        style={{ display: open ? 'block' : 'none' }}
      >
        <div className={`relative max-w-xs w-[90vw] sm:w-72 border border-[#cda967]/30 shadow-2xl rounded-2xl px-5 py-4 flex flex-col gap-2 items-start backdrop-blur-md transition-colors duration-300`} style={{
          backgroundColor: `${isDarkMode ? 'var(--card-bg)' : 'var(--card-bg)'}/90`,
          fontFamily: 'inherit'
        }}>
          {/* Close Button */}
          <button
            aria-label="Zeitzonen-Vergleich schließen"
            onClick={() => setOpen(false)}
            className={`absolute top-2 right-2 p-1 rounded-full transition-colors ${isDarkMode ? 'hover:bg-[#2a2a2a]' : 'hover:bg-[#f5efe6]'}`}
          >
            <svg className="w-5 h-5 text-[#cda967]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6"/></svg>
          </button>
          <div className="text-xs font-semibold text-[#cda967] mb-1">Zeitzonen-Vergleich</div>
          <div className="w-full">
            <div className="flex items-center w-full text-sm mb-1">
              <span className={`font-medium min-w-[80px] ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>Deine Zeit</span>
              <span className="flex-1 flex justify-end">
                <span className={`font-mono tabular-nums text-right w-[90px] block ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>{userTime ? format(userTime) : "--:--:--"}</span>
              </span>
              <span className="text-[11px] text-gray-400 font-normal ml-2 whitespace-nowrap">{userTz}</span>
            </div>
            <div className="flex items-center w-full text-sm">
              <span className={`font-medium min-w-[80px] ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>Yannic</span>
              <span className="flex-1 flex justify-end">
                <span className={`font-mono tabular-nums text-right w-[90px] block ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>{berlinTime ? format(berlinTime) : "--:--:--"}</span>
              </span>
              <span className="text-[11px] text-gray-400 font-normal ml-2 whitespace-nowrap">Europe/Freiburg</span>
            </div>
          </div>
          <div className="mt-1 text-xs text-[#cda967] font-semibold">{diffText}</div>
        </div>
      </div>
    </div>
  );
};

export default ClockCard; 