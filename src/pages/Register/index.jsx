import InputField from "../../components/InputField"
import Button from "../../components/Button"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Spinner from "../../components/Spinner"
import { useLocation, Link } from "react-router-dom";

const Register = function () {
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(false)
    const register = () => {
        setIsLoading(true)
        navigate('/')

    }
    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-white border rounded-sm !w-[40%] shadow1 my-6 py-12 px-[80px]">
                    <div>
                        <div className="text-center">
                            <h1 className="block text-2xl font-bold text-custom-primary uppercase mb-8">Sign up</h1>
                            <p className="mt-2 text-gray-600 uppercase text-xs">
                                Already have an account?
                                <Link to="/login" className="ms-1 text-custom-primary decoration-2 hover:text-custom-primary-light hover:underline focus:outline-none focus:underline font-medium">
                                    Sign in here
                                </Link>
                            </p>
                        </div>

                        <div className="mt-5">

                            {/* <!-- Form --> */}
                            <form onSubmit={(e) => { e.preventDefault(); register() }}>
                                {/* <!-- Form Group --> */}
                                <div>
                                    <InputField name="email" type="email" label="Email address" />
                                    <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                                </div>
                                {/* <!-- End Form Group --> */}

                                {/* <!-- Form Group --> */}
                                <div>
                                    <InputField name="password" type="password" label="password" />
                                    <p className="hidden text-xs text-red-600 mt-2" id="password-error">8+ characters required</p>
                                </div>
                                {/* <!-- End Form Group --> */}

                                {/* <!-- Form Group --> */}
                                <div>
                                    <InputField name="password" type="password" label="confirm password" />
                                    <p className="hidden text-xs text-red-600 mt-2" id="confirm-password-error">Password does not match the password</p>
                                </div>
                                {/* <!-- End Form Group --> */}



                                <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-sm border border-transparent bg-custom-primary text-white hover:bg-custom-primary-light focus:outline-none disabled:opacity-50 disabled:pointer-events-none">Sign up</button>
                            </form>
                            {/* <!-- End Form --> */}
                        </div>
                    </div>
                </div >
            </div >
        </>
    );
}
export default Register;