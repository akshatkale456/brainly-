import { Sidebar } from "../components/sidebar"
import { Modal } from "../components/modal";

export const Dashboard = () => {
   return (
      <div className="p-6">
         <Modal/>
         <h1 className="text-2xl font-bold">Dashboard</h1>
         <p className="mt-4 text-gray-600">Welcome to your dashboard!</p>
      </div>
   );
};