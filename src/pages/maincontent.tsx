
import { Hero } from "../components/hero"
import { Base } from "../components/base"
import { Nav } from "../components/nav"

import { Trigger } from "../components/trigger"
import { Footer } from "../components/footer"

export function Maincontent() {
  return <div className="bg-black min-h-screen w-full" >
    <div className="relative">
 <Nav />
      <Hero />
      <Base />
      <Trigger />
      <Footer />
    </div>
  </div>
}