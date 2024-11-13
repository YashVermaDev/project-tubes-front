import InputField from "../../components/InputField"
import Button from "../../components/Button"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Spinner from "../../components/Spinner"
import { useLocation, Link } from "react-router-dom";

const ResetPassword = function () {
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(false)
    const resetPassword = () => {
        setIsLoading(true)
        navigate('/')
    }
    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <div className="border rounded-sm !w-[40%] shadow1 bg-white my-6 px-[80px] py-[50px]">
                    <header className="mb-8">
                        <div className="flex justify-center text-center">
                            <h1 className="text-center text-custom-primary text-[20px]">Reset Password</h1>
                        </div>
                    </header>
                    <form onSubmit={(e) => { e.preventDefault(); resetPassword() }}>
                        <div className="flex flex-col mb-4">
                            <InputField name="email" type="email" label="Email" />

                        </div>
                        <footer>
                            {isLoading ?
                                <span className="w-full bg-custom-primary inline-block py-2">
                                    <Spinner color="white" />
                                </span>
                                : <Button value="submit" className="btn btn-primary w-full" />
                            }
                        </footer>
                    </form>
                </div>
            </div>
        </>
    );
}
export default ResetPassword;