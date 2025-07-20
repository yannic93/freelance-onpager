"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

const CalcomFloatingButton = () => {
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
  return null;
};

export default CalcomFloatingButton; 