import { motion } from "motion/react"
import { Button } from "./button"
import { Arrow } from "../assets/arrow"
import { Link } from "react-router-dom"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'

export function Hero() {
    return <div className="px-4 py-10 md:pl-65 md:pt-40">
        <div className="bg-linear-to-b from-secondary/20 via-neutral-main/90 to-neutral-main min-h-[50vh] md:h-128 w-full max-w-5xl rounded-4xl border border-secondary/20 pt-10 md:pt-40 px-6 md:px-0 relative flex flex-col shadow-[0_0_50px_rgba(168,85,247,0.15)] backdrop-blur-xs">

            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: "easeInOut" }}
                className="font-bold md:pl-22 pt-0 text-4xl md:text-6xl bg-gradient-to-r from-white to-primary bg-clip-text text-transparent text-center md:text-left">
                Clear your head Focus your day

                <div className="text-sm md:text-lg pt-5 md:pl-25 font-medium leading-6 text-zinc-300">
                    Bridge the gap between code and collaboration for seamless project delivery.<br className="hidden md:block" />
                    Keep your team aligned, your code consistent, and your workflow moving.
                </div>

            </motion.div>
            <div className="mt-12 w-full flex flex-col sm:flex-row justify-center items-center gap-6">
                <Link to="/signup">
                    <Button variant="small" text="startnow" icon={<Arrow />} />
                </Link>
                <Link to="/signup">
                    <motion.button 
                        initial={{ backgroundColor: "white", boxShadow: "0px 4px 6px rgba(255, 255, 255, 0.1)" }}
                        whileHover={{ scale: 1.05, y: -2, boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.2)" }} 
                        transition={{ type: "spring", duration: 0.5, ease: "easeIn", stiffness: 300, damping: 15 }}
                        className="flex items-center justify-center gap-2 bg-white text-zinc-900 font-bold text-md px-6 py-2.5 rounded-full shadow-lg w-full sm:w-auto"
                    >
                        <span>Join now</span>
                        <ArrowOutwardIcon fontSize="small" />
                    </motion.button>
                </Link>
            </div>
        </div>

    </div>
}
