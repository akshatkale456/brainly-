
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom"
import axios from "axios";


import { useRef } from "react";
import { signinSchema } from "../schemas";

export const Signin = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleSignin = async () => {
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        const validationResult = signinSchema.safeParse({ email, password });

        if (!validationResult.success) {
            alert(validationResult.error.issues[0].message);
            return;
        }


        try {
            await axios.post("/api/UserManagement/AuthenticateUser/Login", {
                email,
                password
            })
            alert("signin succesfull")



        } catch (e) {
            alert("signin failed")
        }
    };

    return (
        <div className='flex justify-center items-center min-h-screen bg-neutral-950 p-4 relative'>
            <Link to="/" className="absolute top-6 left-6 text-neutral-400 hover:text-white transition-colors flex items-center gap-2">
                ← Back to Home
            </Link>
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden p-8 md:p-10">
                <h2 className="text-3xl font-bold text-neutral-900 mb-2">Welcome Back</h2>
                <p className="text-neutral-500 mb-8">Please sign in to your account.</p>

                <div className="space-y-6">
                    <div className="space-y-4">
                        <TextField
                            inputRef={emailRef}
                            label="Email Address"
                            variant="outlined"
                            fullWidth
                            type="email"
                            placeholder="john.doe@example.com"
                        />
                        <TextField
                            inputRef={passwordRef}
                            label="Password"
                            variant="outlined"
                            fullWidth
                            type="password"
                            placeholder="••••••••"
                        />
                    </div>

                    <div className="pt-2">
                        <Button
                            onClick={handleSignin}
                            variant="contained"
                            color="primary"
                            className="w-full"
                            size="large"
                            sx={{ paddingY: 1.5, borderRadius: 2, textTransform: 'none', fontSize: '1rem' }}
                        >
                            Sign In
                        </Button>
                    </div>

                    <div className="text-center text-sm text-neutral-500">
                        Don't have an account? <Link to="/signup"
                            className="text-blue-600 cursor-pointer font-medium hover:underline">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
