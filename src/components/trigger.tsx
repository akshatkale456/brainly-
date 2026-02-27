import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function Trigger() {
  const container = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(boxRef.current, {
      x: 20,
      opacity: 1,
      duration:1,

      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 80%",     // "When the top of the trigger hits 80% of the viewport"
        end: "top 20%",       // "When the top of the trigger hits 30% of the viewport"

        markers: true,
        scrub: true        // Adds visual guides for development
      }
    });
  }, { scope: container });

  return (
    <div ref={container} className="min-h-[50vh] bg-white flex justify-center items-center pt-16 pb-16 ">
      <div ref={boxRef} className="box  p-8 font-bold font-Roboto md:text-3xl sm:text-2xl md:w-140 sm: w-70 h-80  bg-black shadow-xl opacity-1 rounded-xl  flex items-center justify-center text-white">
        Capture ideas. Conquer goals.<br/>
           Bridge the gap between code and collaboration for seamless project delivery.
      </div>
    </div>
  );
}