import { useRef, useState } from 'react';
import axios from "axios";
import { signupSchema } from "../schemas";
import { Link, useNavigate } from "react-router-dom";
import { Loading } from '../components/loading';
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { API_URL } from "../config";
export const Signup = () => {
    const navigate = useNavigate();
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
            setLoading(false);
            alert(validationResult.error.issues[0].message);
            return;
        }

        try {
            await axios.post(`${API_URL}/signup`, {
                firstName,
                lastName,
                email,
                password,
                confirmPassword
            });
            
            setLoading(false);
            navigate("/signin");
            alert("Signup successful!");
        } catch (e: any) {
            console.error("Signup error details:", e.response?.data);
            console.error("Signup status:", e.response?.status);
            setTimeout(() => {
                setLoading(false);
            }, 3000);
        }
    }

    return (
        <div className='flex flex-col justify-center items-center min-h-screen bg-surface-0 p-4 md:p-6 relative'>
            {loading && <Loading />}
            <div className="w-full max-w-2xl mb-6">
                <Link to="/" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 w-max label-caps text-xs">
                    ← Back to Home
                </Link>
            </div>
            <div className="tech-card shadow-2xl w-full max-w-2xl overflow-hidden p-8 md:p-10">
                <h2 className="headline-lg text-3xl text-on-surface mb-2">Create Account</h2>
                <p className="body-sm text-zinc-400 mb-8">Please fill in your details to establish your technical knowledge workspace.</p>

                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="signup-firstname" className="label-caps text-zinc-400">First Name</Label>
                            <Input
                                id="signup-firstname"
                                ref={firstNameRef}
                                className="bg-surface-2 border-ui-border h-11"
                                type="text"
                                placeholder="John"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="signup-lastname" className="label-caps text-zinc-400">Last Name</Label>
                            <Input
                                id="signup-lastname"
                                ref={lastNameRef}
                                className="bg-surface-2 border-ui-border h-11"
                                type="text"
                                placeholder="Doe"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="signup-email" className="label-caps text-zinc-400">Email Address</Label>
                        <Input
                            id="signup-email"
                            ref={emailRef}
                            className="bg-surface-2 border-ui-border h-11"
                            type="email"
                            placeholder="john.doe@example.com"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="signup-password" className="label-caps text-zinc-400">Password</Label>
                            <Input
                                id="signup-password"
                                ref={passwordRef}
                                className="bg-surface-2 border-ui-border h-11"
                                type="password"
                                placeholder="••••••••"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="signup-confirmpassword" className="label-caps text-zinc-400">Confirm Password</Label>
                            <Input
                                id="signup-confirmpassword"
                                ref={confirmPasswordRef}
                                className="bg-surface-2 border-ui-border h-11"
                                type="password"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <div className="pt-6">
                        <Button 
                            disableAnim={true}
                            onClick={signup}
                            className="btn-primary w-full h-12 shadow-lg cursor-pointer !rounded-md"
                        >
                            Sign Up
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
