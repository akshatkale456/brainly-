
import { Link } from "react-router-dom";

import { useRef } from "react";
import { resetPasswordSchema } from "../schemas";

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
        <div className='flex justify-center items-center min-h-screen bg-neutral-main p-4'>
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden p-8 md:p-10">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-neutral-900 mb-2">Reset Password</h2>
                    <p className="text-neutral-500 text-sm">
                        Enter the email address associated with your account and we'll send you a link to reset your password.
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="space-y-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-semibold text-neutral-700">Email Address</label>
                            <input
                                ref={emailRef}
                                type="email"
                                placeholder="john.doe@example.com"
                                className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-neutral-900 placeholder-neutral-400"
                            />
                        </div>
                    </div>

                    <div className="pt-2">
                        <button
                            onClick={handleReset}
                            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium text-base rounded-lg transition-colors shadow-sm cursor-pointer"
                        >
                            Send Reset Link
                        </button>
                    </div>

                    <div className="text-center text-sm text-neutral-500">
                        Remember your password? <Link to="/signin" className="text-blue-600 cursor-pointer font-medium hover:underline">Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
