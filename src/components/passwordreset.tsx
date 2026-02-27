
import { TextField, Button } from "@mui/material";
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
        <div className='flex justify-center items-center min-h-screen bg-neutral-950 p-4'>
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden p-8 md:p-10">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-neutral-900 mb-2">Reset Password</h2>
                    <p className="text-neutral-500 text-sm">
                        Enter the email address associated with your account and we'll send you a link to reset your password.
                    </p>
                </div>

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
                    </div>

                    <div className="pt-2">
                        <Button
                            onClick={handleReset}
                            variant="contained"
                            color="primary"
                            className="w-full"
                            size="large"
                            sx={{ paddingY: 1.5, borderRadius: 2, textTransform: 'none', fontSize: '1rem' }}
                        >
                            Send Reset Link
                        </Button>
                    </div>

                    <div className="text-center text-sm text-neutral-500">
                        Remember your password? <Link to="/signin" className="text-blue-600 cursor-pointer font-medium hover:underline">Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
