import { useEffect, useState } from "react";
import throttle from "lodash.throttle";

export enum Version {
  mobile,
  desktop,
}

const getVersion = () => {
  if (typeof window !== "undefined")
    return document.body.clientWidth < 1110 ? Version.mobile : Version.desktop;
};

export const useAdaptive = (): { isMobile: boolean; isDesktop: boolean } => {
  const [version, setVersion] = useState(getVersion());
  const handleResize = throttle(() => {
    setVersion(getVersion());
  }, 100);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    isMobile: version === Version.mobile,
    isDesktop: version === Version.desktop,
  };
};
