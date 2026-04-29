import { Card } from "./card"
import { Youtube } from "../assets/youtube"
import TwitterIcon from '@mui/icons-material/Twitter';
import PushPinIcon from '@mui/icons-material/PushPin';
import { motion } from "motion/react"


const parenveiw = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.7
      }
   }
}
const childveiw = {
   hidden: { opacity: 0, y: -10 },
   visible: { opacity: 1, y: 0 },
}
export function Base() {
   return <div className="w-full overflow-x-hidden">
      <div>
         <div className="flex flex-col md:flex-row px-6 py-10 md:px-40 md:py-40 items-center md:items-start">
            <div className="font-bold text-3xl md:text-5xl text-white text-center md:text-left mb-6 md:mb-0 md:pl-32">
               Made for hustler ,<br />to prove themself
            </div>
            <div className="font-light text-sm md:text-md text-zinc-300 px-4 md:pl-50 text-center md:text-left">
               Stop worrying about what you might have forgotten.<br />
               Capture every idea and task in a single click. <br />Clear your mental space for the work that matters,<br /> And finally experience the joy of getting things done.

            </div>
         </div>
         <motion.div
            variants={parenveiw}
            className="flex flex-col md:flex-row gap-6 mx-5 md:mx-60 justify-between items-center"
            initial="hidden"
            whileInView="visible" // <--- This triggers the stagger on scroll!
            viewport={{ once: false, amount: 0.3 }}>
            <motion.div variants={childveiw} className="w-full flex justify-center perspective-1000">
               <Card title="YouTube Library" string="Save and organize your favorite YouTube videos and tutorials in one place." stock={0} img={<Youtube />} />
            </motion.div>

            <motion.div variants={childveiw} className="w-full flex justify-center perspective-1000">
               <Card title="Twitter Bookmarks" string="Bookmark important Twitter threads and posts so you never lose them." stock={0} img={<TwitterIcon className="w-6 h-6" sx={{ fontSize: 32 }} />} />
            </motion.div>

            <motion.div variants={childveiw} className="w-full flex justify-center perspective-1000">
               <Card title="Live Pinning" string="Our app offers Live Pin functionality to keep your most important tasks accessible right now." stock={0} img={<PushPinIcon className="w-6 h-6" sx={{ fontSize: 32 }} />} />
            </motion.div>
         </motion.div>


      </div>
      <div >
         hii
      </div>
   </div>
}
