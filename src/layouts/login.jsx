import InputField from "../components/InputField"
import Button from "../components/Button"

const Login = function () {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <div className="border rounded-sm !w-[40%] shadow1 bg-white px-[80px] py-[80px]">
                    <form action="#">
                        <InputField name="email" type="email" label="Email" />
                        <InputField name="password" type="password" label="password" />
                        <Button type="submit" value="submit" onSubmit="console.log(this)" classes="ms-auto w-full" />
                    </form>
                </div>
            </div>
        </>
    );
}
export default Login;