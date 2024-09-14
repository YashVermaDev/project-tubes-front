 import InputField from "../components/InputField"
 import Button from "../components/Button"
 
 export default function(){
return(
    <>
    <div className="flex items-center justify-center bg-white">
        <div className="border rounded-md w-[40%] shadow1 bg-white px-5 py-8 ">
            <form action="#">
                <InputField name="email" type="email" label="Email" />   
                <InputField name="password" type="password" label="password" />   
                <Button type="submit" value="submit" onSubmit="console.log(this)" classes="ms-auto w-full"/>
            </form>
        </div>
    </div>
    </>
)
}