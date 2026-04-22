
import { Hero } from "../components/hero"
import { Base } from "../components/base"
import { Nav } from "../components/nav"
import { Loading } from "../components/loading"
import { PinSection } from "../components/scrollpin"
import { Cardanimatelines } from "../components/cardline"


import { Footer } from "../components/footer"

export function Maincontent() {
  return <div className="bg-neutral-main min-h-screen w-full" >
    <div className="relative">
 <Nav />
      <Hero />
      <Base />
<PinSection/>
<Cardanimatelines/>

      
      <Footer />

    </div>
  </div>
}
