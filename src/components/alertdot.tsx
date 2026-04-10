const variants ={
     green : "bg-green-500 shadow-[0_0_10px_rgba(0,255,0,0.5)]",
     red : "bg-red-500 shadow-[0_0_10px_rgba(255,0,0,0.5)]",
     yellow :"bg-yellow-500 shadow-[0_0_10px_rgba(255,255,0,0.5)]",
}
export const Alerttdot =(propps:{variants:keyof typeof variants})=>{
     return <div>
         <div className={`w-3 h-3 ${variants[propps.variants]} rounded-full `} >
         </div>
     </div>}