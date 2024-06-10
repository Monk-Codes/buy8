import { useEffect } from "react";

const Dialogs = ({ open, handler, children, className }) => {
 useEffect(() => {
  const handleKeyDown = (event) => {
   if (event.key === "Escape") {
    handler();
   }
  };

  if (open) {
   document.addEventListener("keydown", handleKeyDown);
  } else {
   document.removeEventListener("keydown", handleKeyDown);
  }

  return () => {
   document.removeEventListener("keydown", handleKeyDown);
  };
 }, [open, handler]);

 if (!open) return null;

 return (
  <div className={`fixed inset-0 flex items-center justify-center z-50 ${className}`}>
   <div className="fixed inset-0 bg-black opacity-50" onClick={handler}></div>
   <div className="relative bg-white rounded-lg shadow-lg p-6 z-10">{children}</div>
  </div>
 );
};

export default Dialogs;
