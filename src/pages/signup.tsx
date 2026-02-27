
import { useRef } from 'react';
import { Button } from "@mui/material";
import axios from "axios";
import { signupSchema } from "../schemas";
import { Link } from "react-router-dom";

export const Signup = () => {
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);

    async function signup() {
        const firstName = firstNameRef.current?.value;
        const lastName = lastNameRef.current?.value;
        const EmailID = emailRef.current?.value;
        const password = passwordRef.current?.value;
        const confirmPassword = confirmPasswordRef.current?.value;



        const validationResult = signupSchema.safeParse({
            firstName,
            lastName,
            EmailID,
            password,
            confirmPassword,

        });

        if (!validationResult.success) {
            alert(validationResult.error.issues[0].message);
            return;
        }

        try {
            await axios.post("https://localhost:7052/api/UserManagement/UserRegistration", {
                firstName,
                lastName,
                EmailID,
                password,

            });
            alert("Signup successful!");
        } catch (e: any) {
            console.error("Signup error details:", e.response?.data);
            console.error("Signup status:", e.response?.status);
            alert("Signup failed");
        }
    }

    return (
        <div className='flex justify-center items-center min-h-screen bg-black p-4 relative'>
            <Link to="/" className="absolute top-6 left-6 text-neutral-400 hover:text-white transition-colors flex items-center gap-2">
                ← Back to Home
            </Link>
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mt-20 overflow-hidden">
                <div className="p-8 md:p-10">
                    <h2 className="text-3xl font-bold text-neutral-900 mb-2">Create Account</h2>
                    <p className="text-neutral-500 mb-8">Please fill in your details to get started.</p>

                    <div className="space-y-6">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-neutral-700">First Name</label>
                                <input
                                    ref={firstNameRef}
                                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                                    type="text"
                                    placeholder="John"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-neutral-700">Last Name</label>
                                <input
                                    ref={lastNameRef}
                                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                                    type="text"
                                    placeholder="Doe"
                                />
                            </div>
                        </div>

                        {/* User Credentials */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-neutral-700">Email Address</label>
                            <input
                                ref={emailRef}
                                className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                                type="email"
                                placeholder="john.doe@example.com"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-neutral-700">Password</label>
                                <input
                                    ref={passwordRef}
                                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                                    type="password"
                                    placeholder="••••••••"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-neutral-700">Confirm Password</label>
                                <input
                                    ref={confirmPasswordRef}
                                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                                    type="password"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        {/* Address Section */}

                    </div>


                    <div className="pt-6">
                        <Button variant="contained" color="primary" className='w-full' onClick={signup}>
                            signup
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    )
}
