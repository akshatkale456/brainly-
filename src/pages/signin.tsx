import { Link } from "react-router-dom"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { useRef, useState } from "react";
import { signinSchema } from "../schemas";
import { Loading } from "../components/loading";
import { API_URL } from "../config";

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
            const response = await axios.post(`${API_URL}/signin`, {
                email,
                password
            });
            if (response.data?.token) {
                localStorage.setItem("Authorization", response.data.token)
            }
            navigate("/youtube")
            setLoading(false);
        } catch (e) {
            setLoading(false);
            alert("signin failed" + e);
        }
    };

    return (
        <div className='flex justify-center items-center min-h-screen bg-surface-0 p-4 relative'>
            {loading && <Loading />}
            <Link to="/" className="absolute top-6 left-6 text-zinc-400 hover:text-white transition-colors flex items-center gap-2 label-caps text-xs">
                ← Back to Home
            </Link>
            <div className="tech-card shadow-2xl w-full max-w-md overflow-hidden p-8 md:p-10">
                <h2 className="headline-lg text-3xl text-on-surface mb-2">Welcome Back</h2>
                <p className="body-sm text-zinc-400 mb-8">Please sign in to your technical account.</p>

                <div className="space-y-6">
                    <div className="space-y-4">
                        <div className="space-y-2 mb-3">
                            <Label htmlFor="signin-email" className="label-caps text-zinc-400">Email Address</Label>
                            <Input
                                id="signin-email"
                                ref={emailRef}
                                className="bg-surface-2 border-ui-border h-11"
                                type="email"
                                placeholder="john.doe@example.com"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="signin-password" className="label-caps text-zinc-400">Password</Label>
                            <Input
                                id="signin-password"
                                ref={passwordRef}
                                className="bg-surface-2 border-ui-border h-11"
                                type="password"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <div className="pt-2">
                        <Button
                            onClick={handleSignin}
                            className="btn-primary w-full h-12 shadow-lg cursor-pointer"
                        >
                            Sign In
                        </Button>
                    </div>

                    <div className="text-center body-sm text-zinc-400">
                        Don't have an account? <Link to="/signup"
                            className="text-secondary cursor-pointer font-semibold hover:underline">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
