import { useEffect } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }) => {
  const mount = document.createElement("div");
  document.body.appendChild(mount);
  mount.setAttribute("id", "toast-root");

  const el = document.createElement("div");
  el.setAttribute("id", "notification-wrapper");

  useEffect(() => {
    mount.appendChild(el);
    return () => {
      mount.removeChild(el);
      document.getElementById("toast-root").remove();
    };
  }, [el, mount]);

  return createPortal(children, el);
};

export { Portal };
