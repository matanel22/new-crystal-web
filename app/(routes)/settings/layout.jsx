import SettingsSideBar from "@/components/settings/SettingsSideBar";

import React from "react";

export default function SettingsLayout({ children }) {
  return (
    <div className="h-full flex w-full px-4 py-1  ">
      <div className="w-full gap-6 flex ">
        <SettingsSideBar />
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
