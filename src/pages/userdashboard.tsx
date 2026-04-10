import { Mediumcard } from "../components/dashcard";
import { Alerttdot } from "../components/alertdot";

export const Dashboard = () => {
   return (
      <div className="p-6 md:p-10 ">
       

         <div className="flex  gap-4 pr-">
            <Mediumcard heading="prior task" icon={<Alerttdot variants= "green" />} variant="small" />
              <Mediumcard heading="prior task" icon={<Alerttdot variants= "green" />} variant="small" /> 
               <Mediumcard heading="prior task" icon={<Alerttdot variants= "green" />} variant="small" />
         </div>
      </div>
   );
};
