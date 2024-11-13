import InputField from "../components/InputField"
import Button from "../components/Button"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Spinner from "../components/Spinner"
import { useLocation, Link } from "react-router-dom";

const Login = function () {
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(false)
    const reRoute = () => {
        setIsLoading(true)
        navigate('/')

    }
    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <div className="border rounded-sm !w-[40%] shadow1 bg-white my-6 px-[80px] py-[50px]">
                    <header className="text-center mb-8">
                        <h1 className="block text-2xl font-bold text-custom-primary uppercase mb-8">Sign in</h1>
                        <p className="mt-2 text-xs uppercase text-gray-600 ">
                            Don't have an account yet?
                            <Link to="/register" className="ms-1 text-custom-primary decoration-2 hover:text-custom-primary-light hover:underline focus:outline-none focus:underline font-medium">
                                Sign up here
                            </Link>
                        </p>
                    </header>
                    <form onSubmit={(e) => { e.preventDefault(); reRoute() }}>
                        <div className="flex flex-col mb-4">
                            <InputField name="email" type="email" label="Email" />
                            <InputField name="password" type="password" label="password" />
                            <Link to="/reset-password" className="text-xs  font-medium text-custom-primary self-end mb-5 hover:text-custom-primary-light hover:border-b border-custom-primary-light">Forgot password?</Link>
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
export default Login;