const Loader = () => {
 return (
  <div role="status" className="fixed inset-0 flex items-center justify-center bg-white">
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="200" height="200" style={{ shapeRendering: "auto", display: "block", background: "transparent" }} xmlnsXlink="http://www.w3.org/1999/xlink">
    <g>
     <circle fill="#e15b64" r="10" cy="50" cx="84">
      <animate begin="0s" keySplines="0 0.5 0.5 1" values="10;0" keyTimes="0;1" calcMode="spline" dur="0.8620689655172413s" repeatCount="indefinite" attributeName="r"></animate>
      <animate begin="0s" values="#e15b64;#abbd81;#f8b26a;#f47e60;#e15b64" keyTimes="0;0.25;0.5;0.75;1" calcMode="discrete" dur="3.4482758620689653s" repeatCount="indefinite" attributeName="fill"></animate>
     </circle>
     <circle fill="#e15b64" r="10" cy="50" cx="16">
      <animate begin="0s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="0;0;10;10;10" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="3.4482758620689653s" repeatCount="indefinite" attributeName="r"></animate>
      <animate begin="0s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="16;16;16;50;84" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="3.4482758620689653s" repeatCount="indefinite" attributeName="cx"></animate>
     </circle>
     <circle fill="#f47e60" r="10" cy="50" cx="50">
      <animate
       begin="-0.8620689655172413s"
       keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
       values="0;0;10;10;10"
       keyTimes="0;0.25;0.5;0.75;1"
       calcMode="spline"
       dur="3.4482758620689653s"
       repeatCount="indefinite"
       attributeName="r"
      ></animate>
      <animate
       begin="-0.8620689655172413s"
       keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
       values="16;16;16;50;84"
       keyTimes="0;0.25;0.5;0.75;1"
       calcMode="spline"
       dur="3.4482758620689653s"
       repeatCount="indefinite"
       attributeName="cx"
      ></animate>
     </circle>
     <circle fill="#f8b26a" r="10" cy="50" cx="84">
      <animate
       begin="-1.7241379310344827s"
       keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
       values="0;0;10;10;10"
       keyTimes="0;0.25;0.5;0.75;1"
       calcMode="spline"
       dur="3.4482758620689653s"
       repeatCount="indefinite"
       attributeName="r"
      ></animate>
      <animate
       begin="-1.7241379310344827s"
       keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
       values="16;16;16;50;84"
       keyTimes="0;0.25;0.5;0.75;1"
       calcMode="spline"
       dur="3.4482758620689653s"
       repeatCount="indefinite"
       attributeName="cx"
      ></animate>
     </circle>
     <circle fill="#abbd81" r="10" cy="50" cx="16">
      <animate
       begin="-2.5862068965517238s"
       keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
       values="0;0;10;10;10"
       keyTimes="0;0.25;0.5;0.75;1"
       calcMode="spline"
       dur="3.4482758620689653s"
       repeatCount="indefinite"
       attributeName="r"
      ></animate>
      <animate
       begin="-2.5862068965517238s"
       keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
       values="16;16;16;50;84"
       keyTimes="0;0.25;0.5;0.75;1"
       calcMode="spline"
       dur="3.4482758620689653s"
       repeatCount="indefinite"
       attributeName="cx"
      ></animate>
     </circle>
    </g>
   </svg>
   <span className="sr-only">Loading...</span>
  </div>
 );
};

export default Loader;
