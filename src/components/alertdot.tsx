const variants ={
     green : "bg-green-500 shadow-[0_0_10px_rgba(0,255,0,0.5)]",
     red : "bg-red-500 shadow-[0_0_10px_rgba(255,0,0,0.5)]",
     yellow :"bg-yellow-500 shadow-[0_0_10px_rgba(255,255,0,0.5)]",
     primary : "bg-primary shadow-[0_0_8px_rgba(168,85,247,0.8)]"
}

interface AlerttdotProps {
    variants: keyof typeof variants;
    pulse?: boolean;
    className?: string;
}

export const Alerttdot = (props: AlerttdotProps) => {
     return (
         <div className={props.className}>
             <div className={`w-3 h-3 ${variants[props.variants]} rounded-full ${props.pulse ? 'animate-pulse' : ''}`} >
             </div>
         </div>
     );
}