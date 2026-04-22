import { motion } from "framer-motion";

const SocialIcon = ({ icon, href }: { icon: React.ReactNode, href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="w-10 h-10 rounded-full bg-zinc-900/50 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 hover:-translate-y-1 transition-all duration-300 border border-white/5 hover:border-primary/50"
  >
    {icon}
  </a>
);

export function Footer() {
    return (
        <footer className="relative w-full bg-neutral-main pt-16 pb-8 border-t border-white/5 overflow-hidden">
            {/* Subtle glow effect behind the footer */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                                P
                            </div>
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
                                ProductiveApp
                            </span>
                        </div>
                        <p className="text-zinc-400 font-light text-sm leading-relaxed mb-6">
                            Architect your intellect. Stop drowning in tabs and build a digital ecosystem that organizes your chaos.
                        </p>
                        
                        <div className="flex items-center gap-4">
                            <SocialIcon href="#" icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>} />
                            <SocialIcon href="#" icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>} />
                            <SocialIcon href="#" icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" /></svg>} />
                        </div>
                    </div>
                    
                    {/* Empty Space for Grid Balancing */}
                    <div className="hidden lg:block"></div>

                    {/* Links Column 1 */}
                    <div className="col-span-1">
                        <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                            Product
                            <div className="h-px w-6 bg-primary/50"></div>
                        </h3>
                        <ul className="flex flex-col gap-4">
                            {['Features', 'Integrations', 'Pricing', 'Changelog', 'Docs'].map(item => (
                                <li key={item}>
                                    <a href="#" className="text-zinc-400 font-medium hover:text-primary transition-colors duration-300  inline-block">
                                        {item}
                                        <span className="absolute  left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div className="col-span-1">
                        <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                            Company
                            <div className="h-px w-6 bg-primary/50"></div>
                        </h3>
                        <ul className="flex flex-col gap-4">
                            {['About Us', 'Careers', 'Blog', 'Contact', 'Partners'].map(item => (
                                <li key={item}>
 <a href="#" className="text-zinc-400 font-medium hover:text-primary transition-colors duration-300   inline-block">
                                        {item}
                                        <span className="absolute  left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-zinc-500 text-sm">
                        &copy; {new Date().getFullYear()} ProductiveApp. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <a href="#" className="text-zinc-500 hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="text-zinc-500 hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="text-zinc-500 hover:text-white transition-colors">Cookie Settings</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
