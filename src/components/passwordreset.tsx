import { Link } from "react-router-dom";
import { useRef } from "react";
import { resetPasswordSchema } from "../schemas";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

export const PasswordReset = () => {
    const emailRef = useRef<HTMLInputElement>(null);

    const handleReset = () => {
        const email = emailRef.current?.value;
        const validationResult = resetPasswordSchema.safeParse({ email });

        if (!validationResult.success) {
            alert(validationResult.error.issues[0].message);
            return;
        }

        alert("Password reset link sent!");
        console.log("Reset email:", validationResult.data.email);
    };

    return (
        <div className='flex justify-center items-center min-h-screen bg-surface-0 p-4'>
            <div className="bg-surface-1 border border-ui-border rounded-2xl shadow-2xl w-full max-w-md overflow-hidden p-8 md:p-10">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white mb-2 font-heading">Reset Password</h2>
                    <p className="text-zinc-400 text-sm">
                        Enter the email address associated with your account and we'll send you a link to reset your password.
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="space-y-4">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="reset-email">Email Address</Label>
                            <Input
                                id="reset-email"
                                ref={emailRef}
                                type="email"
                                placeholder="john.doe@example.com"
                                className="bg-surface-2 border-zinc-700 h-11"
                            />
                        </div>
                    </div>

                    <div className="pt-2">
                        <Button
                            onClick={handleReset}
                            className="w-full h-12 rounded-xl font-bold text-on-primary bg-primary hover:bg-secondary hover:text-on-secondary shadow-lg cursor-pointer transition-all duration-200"
                        >
                            Send Reset Link
                        </Button>
                    </div>

                    <div className="text-center text-sm text-zinc-400">
                        Remember your password? <Link to="/signin" className="text-secondary cursor-pointer font-medium hover:underline">Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
