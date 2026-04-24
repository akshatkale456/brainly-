
import { TextField } from "@mui/material";
import { Link } from "react-router-dom"
import axios from "axios";
import { useNavigate } from "react-router-dom";


import { useRef, useState } from "react";
import { signinSchema } from "../schemas";
import { Loading } from "../components/loading";

export const Signin = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleSignin = async () => {
        setLoading(true);
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        const validationResult = signinSchema.safeParse({ email, password });

        if (!validationResult.success) {
            setLoading(false);
            alert(validationResult.error.issues[0].message);
            return;
        }

        try {
             const response = await axios.post("http://localhost:3000/api/signin", {
                email,
                password
            });
            if(response.data?.token){
                localStorage.setItem("Authorization",response.data.token)
            }
            navigate("/youtube")
            setLoading(false);
            // alert("signin succesfull");
        } catch (e) {
            setLoading(false);
            alert("signin failed" + e);
        }
    };

    return (
        <div className='flex justify-center items-center min-h-screen bg-neutral-main p-4 relative'>
            {loading && <Loading />}
            <Link to="/" className="absolute top-6 left-6 text-neutral-400 hover:text-white transition-colors flex items-center gap-2">
                ← Back to Home
            </Link>
            <div className="bg-neutral-main border border-neutral-800 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden p-8 md:p-10">
                <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
                <p className="text-neutral-400 mb-8">Please sign in to your account.</p>

                <div className="space-y-6">
                    <div className="space-y-4">
                        <TextField
                        sx={{
                            marginBottom:"12px", 
                            "& .MuiOutlinedInput-root": { color: "white", "& fieldset": { borderColor: "#525252" }, "&:hover fieldset": { borderColor: "#a3a3a3" } }, 
                            "& .MuiInputLabel-root": { color: "#a3a3a3" }
                        }}
                            inputRef={emailRef}
                            label="Email Address"
                            variant="outlined"
                            fullWidth
                            type="email"
                            placeholder="john.doe@example.com"
                        />
                        <TextField
                        sx={{
                            "& .MuiOutlinedInput-root": { color: "white", "& fieldset": { borderColor: "#525252" }, "&:hover fieldset": { borderColor: "#a3a3a3" } }, 
                            "& .MuiInputLabel-root": { color: "#a3a3a3" }
                        }}
                            inputRef={passwordRef}
                            label="Password"
                            variant="outlined"
                            fullWidth
                            type="password"
                            placeholder="••••••••"
                        />
                    </div>

                    <div className="pt-2">
                        <button
                            onClick={handleSignin}
                            className="w-full px-6 py-3 rounded-xl font-bold text-white bg-primary hover:bg-secondary shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                        >
                            Sign In
                        </button>
                    </div>

                    <div className="text-center text-sm text-neutral-400">
                        Don't have an account? <Link to="/signup"
                            className="text-secondary cursor-pointer font-medium hover:underline">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
