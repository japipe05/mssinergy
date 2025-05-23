"use client";
import Link from "next/link";
import React from "react";
import * as QuicklinksData from "./Data";
import { useTranslation } from "react-i18next";
import '../../../../../../utils/i18n';
const Quicklinks = () => {
  const { t } = useTranslation();
  return (
    <div className="p-5 lg:border-s border-border dark:border-darkborder">
      <h5 className="text-xl font-semibold mb-4 text-dark dark:text-white">
        {t("Normativa")}
      </h5>
      <ul>
        {QuicklinksData.pageLinks.map((links, index) => (
          <li className="mb-4" key={index}>
            <Link
              href={links.href}
              className="text-sm font-semibold text-link dark:text-darkmuted hover:text-primary dark:hover:text-primary"
            >
              {t(links.title)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quicklinks;
