
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Logo } from "./logo."
import { Button } from "./button"
import { Link } from "react-router-dom"

export function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return <div className="fixed top-0 z-50 w-full bg-black border-b border-white/10">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
            <div className="relative z-50">
                <Logo />
            </div>


            <div className="hidden md:flex flex-wrap justify-center gap-6 text-white">
                <Link to="/" className="cursor-pointer tracking-tight relative hover:text-gray-300 transition-colors duration-300 font-sans-serif">
                    HOME
                </Link>
                <div className="cursor-pointer tracking-tight font-roboto relative hover:text-gray-300 transition-colors duration-300">
                    ABOUTUS
                </div>
                <div className="cursor-pointer tracking-tight font-roboto relative hover:text-gray-300 transition-colors duration-300">
                    CONTACT
                </div>
                <div className="cursor-pointer tracking-tight font-roboto relative hover:text-gray-300 transition-colors duration-300">
                    FAQ
                </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
                <div className="">
                    <Link to="/signin" className="font-roboto font-bold text-md underline-offset-1 text-white hover:text-gray-300">sign in</Link>
                </div>
                <div>
                    <Link to="/signup">
                        <Button variant="small" text="signup" />
                    </Link>
                </div>
            </div>


            <div className="md:hidden relative z-50 text-white cursor-pointer" onClick={toggleSidebar}>
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                )}
            </div>


            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleSidebar}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed right-0 top-0 h-full w-64 bg-black border-l border-white/10 z-50 flex flex-col pt-24 pl-8 gap-8 shadow-2xl md:hidden"
                        >
                            <div className="flex flex-col gap-6 text-white text-lg font-roboto">
                                <Link to="/" className="cursor-pointer hover:text-gray-300" onClick={toggleSidebar}>HOME</Link>
                                <div className="cursor-pointer hover:text-gray-300" onClick={toggleSidebar}>ABOUTUS</div>
                                <div className="cursor-pointer hover:text-gray-300" onClick={toggleSidebar}>CONTACT</div>
                                <div className="cursor-pointer hover:text-gray-300" onClick={toggleSidebar}>FAQ</div>
                                <Link to="/signin" className="cursor-pointer hover:text-gray-300" onClick={toggleSidebar}>signin</Link>
                                <Link to="/signup" className="cursor-pointer hover:text-gray-300" onClick={toggleSidebar}>signup</Link>


                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    </div>
}