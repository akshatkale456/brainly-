
import { useRef, useState } from 'react';
import { Button } from "@mui/material";
import axios from "axios";
import { signupSchema } from "../schemas";
import { Link } from "react-router-dom";
import { Loading } from '../components/loading';
import { useNavigate } from 'react-router-dom';
import { set } from 'zod';

export const Signup = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);

    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);

    async function signup() {
        setLoading(true);
        const firstName = firstNameRef.current?.value;
        const lastName = lastNameRef.current?.value;
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;
        const confirmPassword = confirmPasswordRef.current?.value;



        const validationResult = signupSchema.safeParse({
            firstName,
            lastName,
            email,
            password,
            confirmPassword,

        });

        if (!validationResult.success) {
            
            setLoading(false)
            alert(validationResult.error.issues[0].message);
            return;
        }

        try {
            await axios.post("http://localhost:3000/api/signup", {
                firstName,
                lastName,
                email,
                password,
                 confirmPassword

            });
            
            setLoading(false);
            navigate("/signin")
            alert("Signup successful!");
        } catch (e: any) {
            console.error("Signup error details:", e.response?.data);
            console.error("Signup status:", e.response?.status);
           setTimeout(() => {
            setLoading(false)
           }, 3000); ;
            // alert("Signup failed");
        }
    }

    return (
        <div className='flex flex-col justify-center items-center min-h-screen bg-neutral-main p-4 md:p-6 relative'>
            {loading && <Loading />}
            <div className="w-full max-w-2xl mb-6">
                <Link to="/" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 w-max">
                    ← Back to Home
                </Link>
            </div>
            <div className="bg-neutral-main border border-neutral-800 rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden">
                <div className="p-8 md:p-10">
                    <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
                    <p className="text-neutral-400 mb-8">Please fill in your details to get started.</p>

                    <div className="space-y-6">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-neutral-300">First Name</label>
                                <input
                                    ref={firstNameRef}
                                    className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-neutral-800 text-white focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all duration-200"
                                    type="text"
                                    placeholder="John"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-neutral-300">Last Name</label>
                                <input
                                    ref={lastNameRef}
                                    className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-neutral-800 text-white focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all duration-200"
                                    type="text"
                                    placeholder="Doe"
                                />
                            </div>
                        </div>

                        {/* User Credentials */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-neutral-300">Email Address</label>
                            <input
                                ref={emailRef}
                                className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-neutral-800 text-white focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all duration-200"
                                type="email"
                                placeholder="john.doe@example.com"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-neutral-300">Password</label>
                                <input
                                    ref={passwordRef}
                                    className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-neutral-800 text-white focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all duration-200"
                                    type="password"
                                    placeholder="••••••••"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-neutral-300">Confirm Password</label>
                                <input
                                    ref={confirmPasswordRef}
                                    className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-neutral-800 text-white focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all duration-200"
                                    type="password"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        {/* Address Section */}

                    </div>


                    <div className="pt-6">
                        <button 
                            onClick={signup}
                            className="w-full px-6 py-3 rounded-xl font-bold text-white bg-primary hover:bg-secondary shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
