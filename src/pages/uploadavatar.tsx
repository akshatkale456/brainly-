import { useState, useRef } from "react";
import axios from "axios";
import { Avatar } from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export const UploadAvatar = () => {
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);
            setPreview(URL.createObjectURL(selectedFile));
            setMessage(null);
        }
    };

    const handleUpload = async () => {
        if (!file) {
            setMessage({ type: 'error', text: 'Please select an image first.' });
            return;
        }

        const token = localStorage.getItem("Authorization");
        if (!token) {
            setMessage({ type: 'error', text: 'You are not fully authenticated. Please sign in.' });
            return;
        }

        setLoading(true);
        setMessage(null);
        
        try {
            const formData = new FormData();
            formData.append("profilePic", file);

            const res = await axios.post("http://localhost:3000/api/upload-profile-pic", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': token
                }
            });

            if (res.data.success) {
                setMessage({ type: 'success', text: 'Profile picture uploaded successfully!' });
                
                // Refresh the page so the app re-fetches the user model across the site
                setTimeout(() => window.location.reload(), 1500);
            }
        } catch (error: any) {
            console.error("Upload error:", error);
            setMessage({ type: 'error', text: error.response?.data?.message || 'Upload failed.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center h-full min-h-[80vh] p-6 bg-neutral-main relative">
             <div className="bg-neutral-800 border border-neutral-700 rounded-3xl p-8 max-w-md w-full flex flex-col items-center gap-6 shadow-2xl relative overflow-hidden">
                 
                 <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-primary/30 to-secondary/10"></div>
                 
                 <div className="relative z-10 mt-6">
                     <div 
                         className="relative group cursor-pointer transition-transform hover:scale-105" 
                         onClick={() => fileInputRef.current?.click()}
                     >
                         <Avatar 
                             src={preview || undefined} 
                             sx={{ width: 140, height: 140, border: '6px solid #262626', bgcolor: '#404040' }}
                         />
                         <div className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                             <PhotoCameraIcon sx={{ color: 'white', fontSize: 36 }} />
                         </div>
                     </div>
                     <input 
                         type="file" 
                         ref={fileInputRef} 
                         hidden 
                         accept="image/*" 
                         onChange={handleFileChange} 
                     />
                 </div>

                 <div className="text-center z-10 w-full mt-2">
                     <h2 className="text-2xl font-bold text-white mb-2">Update Avatar</h2>
                     <p className="text-sm text-zinc-400 mb-8">Choose a beautiful new profile picture to personalize your dashboard.</p>

                     {message && (
                         <div className={`p-4 rounded-xl text-sm mb-6 ${message.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                             {message.text}
                         </div>
                     )}

                     <button 
                         onClick={handleUpload}
                         disabled={!file || loading}
                         className="w-full py-3.5 rounded-xl bg-primary hover:bg-secondary disabled:bg-neutral-800 disabled:text-neutral-500 disabled:cursor-not-allowed text-white font-bold transition-colors flex items-center justify-center gap-2 shadow-lg"
                     >
                         {loading ? (
                             <span className="animate-pulse">Saving Profile...</span>
                         ) : (
                             <>
                                 <CloudUploadIcon /> Upload Image
                             </>
                         )}
                     </button>
                 </div>
             </div>
        </div>
    );
};
