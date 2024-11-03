import InputField from "../components/InputField"
import Button from "../components/Button"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Spinner from "../components/Spinner"

const Login = function () {
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(false)
    const reRoute = () => {
        setIsLoading(true)
        // navigate('/')

    }
    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <div className="border rounded-sm !w-[40%] shadow1 bg-white my-6 px-[80px] py-[50px]">
                    <figure className="flex justify-center mb-5">
                        <img src="./images/logo.png" alt="logo" />
                    </figure>
                    <form onSubmit={(e) => { e.preventDefault(); reRoute() }}>
                        <InputField name="email" type="email" label="Email" />
                        <InputField name="password" type="password" label="password" />
                        <footer className="pt-4">

                            {isLoading ? <span className="w-full bg-custom-primary inline-block py-2"><Spinner color="white" /></span> : <Button value="submit" className="btn btn-primary w-full" />}
                        </footer>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Login;