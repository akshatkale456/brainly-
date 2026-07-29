import { Hero } from "../components/hero";
import { Base } from "../components/base";
import { Nav } from "../components/nav";
import { Gridspancomponenet, CtaSection,  Cta2Section} from "../components/infolanding";

import { Footer } from "../components/footer";

export function Maincontent() {
  return (
    <div className="bg-zinc-950 min-h-screen w-full text-white relative overflow-x-hidden selection:bg-white selection:text-black font-sans">
      <Nav />
      <Hero />
      <Base />
      <Gridspancomponenet />
      
      <CtaSection />
      
      <Footer />
    </div>
  );
}
