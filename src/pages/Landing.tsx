
import { Hero } from "../components/hero"
import { Base } from "../components/base"
import { Nav } from "../components/nav"
import { Gridspancomponenet} from "../components/infolanding"
import { PinSection } from "../components/scrollpin"




import { Footer } from "../components/footer"

export function Maincontent() {
  return <div className="bg-neutral-main min-h-screen w-full" >
    <div className="relative">
 <Nav />
      <Hero />
      <Base />
<PinSection/>

<Gridspancomponenet/>

      
      <Footer />

    </div>
  </div>
}
