import { Mediumcard } from "../components/dashcard";
import { Alerttdot } from "../components/alertdot";

export const Dashboard = () => {
   return (
      <div className="p-6 md:p-10 max-w-7xl mx-auto">
         <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-zinc-300">Here's an overview of your workspace today.</p>
         </div>

         <div>
            <Mediumcard heading="prior task" icon={<Alerttdot variants= "green" />} variant="large" />
         </div>
      </div>
   );
};
