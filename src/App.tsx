import "./App.css";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import javaScriptSvg from "./images/javascript.svg";
import typecriptsvg from "./images/typescript.svg";
import htmlsvg from "./images/html.svg";
import csssvg from "./images/css.svg";
import angularsvg from "./images/angular.svg";
import reactsvg from "./images/react.svg";
import gitSvg from "./images/git.svg";
import vsCodesvg from "./images/vscode.svg";
import npmSvg from "./images/npm.svg";
import armandoImage from "./images/profile_Image.png";
import darkLogo from "./images/angular-reactDark.png";
import lightLogo from "./images/angular-reactLight.png";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  function test() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  function openResume() {
    const resumeUrl =
      "https://drive.google.com/file/d/1eB905FerCw3vgwGWQKd5TFhLoVkuf2Ak/view?usp=drive_link";
    window.open(resumeUrl, "_blank");
  }

  return (
    <>
      <div className={!darkMode ? "dark" : ""}>
        <div className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
          <section className="min-h-screen">
            <nav className="py-10 mb-12 flex justify-between dark:text-white sticky top-0 z-50">
              <img
                src={darkMode ? darkLogo : lightLogo}
                alt="background"
                style={{
                  objectFit: "cover",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
                onClick={test}
              />

              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill
                    onClick={toggleDarkMode}
                    className="cursor-pointer text-2xl dark:text-white text-black"
                  />
                </li>

                <li>
                  <a
                    className="bg-gradient-to-r from-gray-700 text- to-blue-950 text-white px-4 py-2 border-none rounded-md ml-8 cursor-pointer"
                    onClick={openResume}
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>

            <div className="text-center p-10 py-10">
              <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
                Armando Diaz
              </h2>

              <h3 className="text-2xl py-2 dark:text-white md:text-3xl text-gray-800">
                Front End Developer | Angular & React
              </h3>

              <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                I'm a passionate front end developer focused on creating clean
                and responsive web interfaces.<br></br>I learned Angular through
                my internship and am currently diving into React to expand my
                front end skills.
              </p>

              <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                <FaGithub
                  className="cursor-pointer hover:text-blue-950 dark:hover:text-blue-500"
                  onClick={() =>
                    window.open("https://github.com/ArmandoDiazGit", "_blank")
                  }
                />
                <AiFillLinkedin
                  className="cursor-pointer hover:text-blue-500"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/armando-diaz-750041204/",
                      "_blank"
                    )
                  }
                />
              </div>
              <div className="mx-auto bg-gradient-to-b from-blue-950 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96 dark:from-gray-700">
                <img
                  src={armandoImage}
                  alt="Armando Diaz"
                  className="object-cover w-full h-full contain-layout"
                />
              </div>
            </div>
          </section>

          <section>
            <div>
              <h3 className="text-3xl py-1 dark:text-white text-gray-800 text-center">
                Tech Stack
              </h3>
              <div className="border-b-4 border-indigo-500"></div>
            </div>

            <div className="lg:flex gap-10">
              <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
                <div className="grid grid-cols-4 gap-4">
                  <img src={javaScriptSvg} width={60} height={60} />
                  <img src={typecriptsvg} width={60} height={60} />
                  <img src={htmlsvg} width={60} height={60} />
                  <img src={csssvg} width={60} height={60} />
                </div>

                <h3 className="text-lg font-medium pt-8 pb-2  ">Languages</h3>
                <p className="py-2">
                  I enjoy writing clean and efficient code, and I'm always
                  learning better ways to use these languages in modern frontend
                  development.
                </p>
                <h4 className="py-4 text-teal-600">Languages I use</h4>
                <ul className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                  <li className="text-gray-800 py-1">JavaScript</li>
                  <li className="text-gray-800 py-1">TypeScript</li>
                  <li className="text-gray-800 py-1">HTML</li>
                  <li className="text-gray-800 py-1">CSS</li>
                </ul>
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                <div className="grid grid-cols-2 gap-2 justify-items-center">
                  <img src={angularsvg} width={60} height={60} />
                  <img src={reactsvg} width={60} height={60} />
                </div>

                <h3 className="text-lg font-medium pt-8 pb-2 ">Frameworks</h3>
                <p className="py-2">
                  Angular gave me a strong foundation during my internship, and
                  I'm now building React projects to become more versatile and
                  adapt to different project needs.
                </p>
                <h4 className="py-4 text-teal-600">Frameworks I use</h4>
                <ul className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                  <li className="text-gray-800 py-1">Angular</li>
                  <li className="text-gray-800 py-1">React</li>
                </ul>
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                <div className="grid grid-cols-3 gap-3 justify-items-center">
                  <img src={gitSvg} width={60} height={60} />
                  <img src={vsCodesvg} width={60} height={60} />
                  <img src={npmSvg} width={60} height={60} />
                </div>

                <h3 className="text-lg font-medium pt-8 pb-2 ">Tools</h3>
                <p className="py-2">
                  I use Git for version control, Figma for UI collaboration, and
                  VS Code as my primary coding environment to streamline
                  development.
                </p>
                <h4 className="py-4 text-teal-600">Design Tools I use</h4>
                <p className="text-gray-800 py-1">Git</p>
                <p className="text-gray-800 py-1">Figma</p>
                <p className="text-gray-800 py-1">VS Code</p>
                <p className="text-gray-800 py-1">npm</p>
              </div>
            </div>
          </section>

          <section className="py-10">
            <div>
              <h3 className="text-3xl py-1 dark:text-white text-gray-800 text-center">
                Projects
              </h3>
              <div className="border-b-4 border-indigo-500"></div>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="flex flex-row gap-10">
                <div className="basis-128">
                  <div className="flex-1 hover:scale-105 transition-transform duration-300 shadow-lg justify-items-center dark:bg-white rounded-xl">
                    <div className="grid">
                      <img
                        src={angularsvg}
                        width={100}
                        height={100}
                        className="rounded-lg object-cover"
                      />
                    </div>

                    <h3 className="text-lg font-medium pt-8 pb-2 ">
                      Appointment App
                    </h3>
                    <p className="py-2 text-center">
                      A lightweight web application demonstrating basic CRUD
                      operations, developed with Angular for efficient
                      appointment scheduling and management.
                    </p>
                    <div className="flex justify-center gap-4 py-4">
                      <button
                        className="bg-gradient-to-r from-blue-950 to-blue-500 text-white px-4 py-2 border-none rounded-md cursor-pointer"
                        onClick={() =>
                          window.open(
                            "https://github.com/ArmandoDiazGit/angular-appointment-app",
                            "_blank"
                          )
                        }
                      >
                        View on GitHub
                      </button>
                    </div>
                  </div>
                </div>

                <div className="basis-128">
                  <div className="flex-1 hover:scale-105 transition-transform duration-300 shadow-lg justify-items-center dark:bg-white rounded-xl">
                    <div className="grid">
                      <img
                        src={reactsvg}
                        width={100}
                        height={100}
                        className="rounded-lg object-cover"
                      />
                    </div>

                    <h3 className="text-lg font-medium pt-8 pb-2 ">
                      React Pizza App
                    </h3>
                    <p className="py-2 text-center">
                      A fun and responsive pizza ordering website built with
                      React to showcase my latest front end skills. It features
                      a dynamic menu, cart functionality, and a clean, user
                      friendly interface.
                    </p>
                    <div className="flex justify-center gap-4 py-4">
                      <button
                        className="bg-gradient-to-r from-blue-950 to-blue-500 text-white px-4 py-2 border-none rounded-md cursor-pointer"
                        onClick={() =>
                          window.open(
                            "https://github.com/ArmandoDiazGit/react-pizza-app",
                            "_blank"
                          )
                        }
                      >
                        View on GitHub
                      </button>
                    </div>
                  </div>
                </div>

                <div className="basis-128">
                  <div className="flex-1 hover:scale-105 transition-transform duration-300 shadow-lg justify-items-center dark:bg-white rounded-xl">
                    <div className="grid">
                      <img
                        src={reactsvg}
                        width={100}
                        height={100}
                        className="rounded-lg object-cover"
                      />
                    </div>

                    <h3 className="text-lg font-medium pt-8 pb-2 ">
                      Movie Database App
                    </h3>
                    <p className="py-2 text-center">
                      Movie Database App is a simple web application that allows
                      users to search, browse, and explore information about
                      movies. Users can view movie details such as title,
                      release date, genre, and ratings, all fetched dynamically
                      from a public movie API. It's a clean, responsive app
                      designed to showcase front end development skills.
                    </p>
                    <div className="flex justify-center gap-4 py-4">
                      <button
                        className="bg-gradient-to-r from-blue-950 to-blue-500 text-white px-4 py-2 border-none rounded-md cursor-pointer"
                        onClick={() =>
                          window.open(
                            "https://github.com/ArmandoDiazGit/react-movie-app",
                            "_blank"
                          )
                        }
                      >
                        View on GitHub
                      </button>
                    </div>
                  </div>
                </div>

                <div className="basis-128">
                  <div className="flex-1 hover:scale-105 transition-transform duration-300 shadow-lg justify-items-center dark:bg-white rounded-xl">
                    <div className="grid">
                      <img
                        src={angularsvg}
                        width={100}
                        height={100}
                        className="rounded-lg object-cover"
                      />
                    </div>

                    <h3 className="text-lg font-medium pt-8 pb-2 ">
                      Weather App
                    </h3>
                    <p className="py-2 text-center">
                      Modern weather app in Angular combining Bootstrap’s grid
                      with Angular Material components. Delivers current
                      weather, extended forecasts, and saved locations via a
                      lightweight API integration.
                    </p>
                    <div className="flex justify-center gap-4 py-4">
                      <button
                        className="bg-gradient-to-r from-blue-950 to-blue-500 text-white px-4 py-2 border-none rounded-md cursor-pointer"
                        onClick={() =>
                          window.open(
                            "https://github.com/ArmandoDiazGit/weather-app",
                            "_blank"
                          )
                        }
                      >
                        View on GitHub
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
