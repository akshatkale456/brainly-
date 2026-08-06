import { useRef, useState } from "react"
import axios from "axios"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Label } from "../components/ui/label"
import { Upload as UploadIcon, User as UserIcon } from "lucide-react"
import { Link } from "react-router-dom"
import { API_URL } from "../config"

export const Uploadavatar = () => {
    const token = localStorage.getItem("Authorization")
    const avatarref = useRef<HTMLInputElement>(null)
    const [error, seterror] = useState("")
    const [success, setSuccess] = useState("")
    const [loading, setLoading] = useState(false)

    async function uploadavatar() {
        seterror("")
        setSuccess("")
        const selectedfile = avatarref.current?.files?.[0]

        if (selectedfile === undefined) {
            return seterror("Please select an image file to upload.")
        }
        if (
            selectedfile.type === "image/webp" ||
            selectedfile.type === "image/heic" ||
            selectedfile.type === "image/gif"
        ) {
            return seterror("Unsupported format. Please upload JPEG or PNG images.")
        }

        setLoading(true)
        const formData = new FormData()
        formData.append("avatar", selectedfile)

        try {
            await axios.post(`${API_URL}/upload`, formData, {
                headers: {
                    authorization: token
                }
            })
            setSuccess("Avatar uploaded successfully!")
            if (avatarref.current) avatarref.current.value = ""
        } catch (err: any) {
            seterror("Upload failed: " + (err.response?.data?.message || err.message))
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-surface-0 p-6 flex flex-col justify-center items-center relative">
            <Link to="/dashboard" className="absolute top-6 left-6 text-zinc-400 hover:text-white transition-colors flex items-center gap-2 label-caps text-xs">
                ← Back to Dashboard
            </Link>

            <div className="tech-card shadow-2xl w-full max-w-md overflow-hidden p-8 space-y-6">
                <div className="flex flex-col items-center text-center space-y-2">
                    <div className="w-16 h-16 rounded-2xl bg-surface-2 border border-ui-border flex items-center justify-center text-zinc-400 mb-2 shadow-inner">
                        <UserIcon className="w-8 h-8" />
                    </div>
                    <h2 className="headline-lg text-2xl text-on-surface">Profile Avatar</h2>
                    <p className="body-sm text-zinc-400">Upload a new profile picture for your technical workspace account.</p>
                </div>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="avatar-file" className="label-caps text-zinc-400">Select Image File</Label>
                        <Input
                            id="avatar-file"
                            ref={avatarref}
                            type="file"
                            accept="image/png, image/jpeg, image/jpg"
                            className="bg-surface-2 border-ui-border h-12 pt-2 cursor-pointer text-zinc-300"
                        />
                    </div>

                    {error && (
                        <div className="body-sm text-xs font-semibold p-3 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20">
                            {error}
                        </div>
                    )}
                    {success && (
                        <div className="body-sm text-xs font-semibold p-3 rounded-xl bg-green-500/10 text-green-400 border border-green-500/20">
                            {success}
                        </div>
                    )}

                    <Button
                        onClick={uploadavatar}
                        disabled={loading}
                        className="btn-primary w-full h-12 shadow-lg cursor-pointer flex items-center justify-center gap-2"
                    >
                        <UploadIcon className="w-4 h-4" />
                        <span>{loading ? "Uploading..." : "Upload Avatar"}</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}