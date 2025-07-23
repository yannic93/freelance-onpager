"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { useClockCard } from "../contexts/DarkModeContext";

const CalcomFloatingButton = () => {
  const { isClockCardOpen } = useClockCard();

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("floatingButton", {
        calLink: "yannicn/30min",
        config: { layout: "month_view" },
        buttonText: "Call vereinbaren",
        buttonPosition: "bottom-left",
      });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  // Hide Cal.com widget when ClockCard is open using CSS
  useEffect(() => {
    const hideCalWidget = () => {
      // Find Cal.com floating button elements
      const calElements = document.querySelectorAll('[data-cal-link="yannicn/30min"]');
      calElements.forEach((element) => {
        if (isClockCardOpen) {
          (element as HTMLElement).style.display = 'none';
        } else {
          (element as HTMLElement).style.display = '';
        }
      });
    };

    // Add a small delay to ensure Cal.com is loaded
    const timeoutId = setTimeout(hideCalWidget, 500);
    return () => clearTimeout(timeoutId);
  }, [isClockCardOpen]);

  return null;
};

export default CalcomFloatingButton; 