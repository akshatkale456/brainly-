import { motion } from "framer-motion";
import { Brainlogo } from "../assets/brain";
import { Link } from "react-router-dom";

const SocialIcon = ({ icon, href }: { icon: React.ReactNode, href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="w-10 h-10 rounded-full bg-zinc-900/50 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 hover:-translate-y-1 transition-all duration-300 border border-white/10 hover:border-white/20"
  >
    {icon}
  </a>
);

export function Footer() {
  return (
    <footer className="relative w-full bg-zinc-950 pt-20 pb-12 border-t border-white/10 overflow-hidden text-white font-sans">
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group w-fit">
              <div>
                <div >
                  <Brainlogo />
                </div>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white group-hover:text-zinc-200 transition-colors">
                Brainly
              </span>
            </Link>
            <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed mb-6 max-w-sm">
              Architect your intellect. Stop drowning in tabs and build a digital ecosystem that organizes your chaos and scales with your team&apos;s ambition.
            </p>
            
            <div className="flex items-center gap-4">
              <SocialIcon href="#" icon={<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>} />
              <SocialIcon href="#" icon={<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>} />
              <SocialIcon href="#" icon={<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>} />
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="col-span-1">
            <h3 className="text-white font-mono text-xs uppercase tracking-[0.2em] font-semibold mb-6 flex items-center gap-2">
              Product
            </h3>
            <ul className="flex flex-col gap-3.5">
              {['Features', 'Rooms', 'Live Pins', 'Shared Todos', 'Changelog', 'Docs'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-zinc-400 text-sm font-normal hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="col-span-1">
            <h3 className="text-white font-mono text-xs uppercase tracking-[0.2em] font-semibold mb-6 flex items-center gap-2">
              Company
            </h3>
            <ul className="flex flex-col gap-3.5">
              {['About Us', 'Careers', 'Blog', 'Contact', 'Privacy Policy', 'Terms'].map(item => (
                <li key={item}>
                  <a href="#" className="text-zinc-400 text-sm font-normal hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 font-mono text-xs tracking-wider">
            &copy; {new Date().getFullYear()} Brainly, Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs font-mono text-zinc-500">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Security</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
