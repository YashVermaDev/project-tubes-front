import Login from "./login"
import InputField from "../components/InputField"


export default function base() {
  return (
    <>
      <div id="container" className="flex">
        <aside className="w-[20%] bg-white px-2">
          <div className="logo w-full mb-4">
            <a href="#" className="mb-0 inline-block mx-auto">
              <img src="./images/logo.png" alt="logo" className="w-full h-[70px]" />
            </a>
          </div>
          <ul>
            <li className="mb-3  ">
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">stories</a>
            </li>
          </ul>
        </aside>
        <main className="w-[80%] px-2">
          <header id="header" className="md:mb-4 mb-3bg-gray ">
            <div className="flex justify-between w-full py-4">
              <div className="w-2/3 flex">
                <div className="form w-full">
                  <form>
                    <div className="flex ">
                      <input
                        type="text"
                        name="searchBar"
                        placeholder="Search "
                        className=" text-md w-full border border-2 rounded-[50px] rounded-e-none py-3 px-2 py-2 ps-4 pe-[40px] "
                      />
                      <button
                        type="submit"
                        onSubmit="search()"
                        className="inline-flex content-center items-center border border-2 border-l-0 rounded-[50px] rounded-s-none px-4 hover:bg-blue hover:text-white"
                      >
                        <i className="inline-block w-[20px]">
                          <svg fill="null" viewBox="0 0 488.4 488.4">
                            <g strokeWidth="0"></g>
                            <g strokeLinecap="round" strokeLinejoin="round"></g>
                            <g>
                              <g>
                                <g>
                                  <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"></path>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="w-auto flex items-center">
                <div className="profile w-[40px] h-[40px] rounded-full">
                  <img src="./images/profile.svg" alt="profile-img" />
                </div>
              </div>
            </div>
          </header>
          <div id="content">
            <div className="w-full">
              <header className=" bg-gray">
                <h1 className="text-xl !me-0">hello world</h1>
              </header>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum alias quas maiores
                atque minima aspernatur optio rem minus, a eaque.
              </p>
            </div>
            <Login/>
          </div>
        </main>
      </div>
    </>
  )
}
