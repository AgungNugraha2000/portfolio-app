import React from "react";
import foto from "./assets/baru.png";
import react from "./assets/react.png";
import tail from "./assets/tail.png";
import wind from "./assets/css.png";
import project2 from "./assets/p2.png";
import project3 from "./assets/p3.png";
import email from "./assets/email.png";
import instagram from "./assets/instagram.png";
import linkedin from "./assets/linkedin.png";
import node from "./assets/node.png";
import spring from "./assets/spring.png";
import bootstrap from "./assets/bootstrap.png";
import docker from "./assets/docker.png";

function App() {
  return (
    <div className="bg-[#1F1A1A]">
      {/* navbar */}
      <nav className="bg-[#080808] w-full fixed py-5">
        <div className="flex justify-between items-center">
          <div className="ml-28">
            <a href="#home" className="text-white font-bold text-2xl">
              Agung Nugraha
            </a>
          </div>
          <div>
            <ul className="flex gap-20 mr-28">
              <li>
                <a
                  href="#skills-link"
                  className="text-white font-semibold text-xl hover:text-[#0F6423] hover:cursor-pointer"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#project-link"
                  className="text-white font-semibold text-xl hover:text-[#0F6423] hover:cursor-pointer"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact-link"
                  className="text-white font-semibold text-xl hover:text-[#0F6423] hover:cursor-pointer"
                >
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* main */}
      <main
        className="flex justify-evenly w-[full] h-[626px] bg-black"
        id="home"
      >
        <div className="pt-[9rem]">
          <img
            src={foto}
            alt="foto"
            className="rounded-full w-[300px] h-[300px]"
          />
          {/* <p>Front End Developer</p> */}
        </div>
        <div className="w-[40rem] pt-[11rem]">
          <h2 className="text-white font-semibold text-2xl">
            Hi, i'm Agung Nugraha
          </h2>
          <br />
          <h2 className="text-white font-semibold text-2xl">
            Informatics graduate at Indraprasta PGRI University, I have an
            interest in web programming as a front end, back end or full stack
            developer. I have attended a bootcamp to sharpen my logic and
            database as a backend or fullstack, and I have also attended an
            online course to deepen my front end syntax/code.
          </h2>
        </div>
      </main>

      {/* section */}
      <section className="mt-24" id="skills-link">
        <h1 className="text-white ml-28 text-3xl font-bold">Skills</h1>
        <div className="flex justify-evenly mt-10 flex-wrap">
          <div className="bg-black w-[280px] h-[380px] rounded-xl">
            <img src={react} alt="react" className="pt-8" />
            <p className="text-white font-semibold text-2xl pt-6 text-center">
              Pengalaman Menggunakan React JS Selama 1 Tahun
            </p>
          </div>
          <div className="bg-white w-[280px] h-[380px] rounded-xl">
            <img src={node} alt="tail" className="w-[12rem] mx-10 pt-12" />
            <p className="text-black font-semibold text-2xl pt-10 text-center">
              Pengalaman Menggunakan Node JS (express) Selama 8 Bulan
            </p>
          </div>
          <div className="bg-[#fff] w-[280px] h-[380px] rounded-xl">
            <img src={spring} alt="php" className="w-[13rem] mx-9 pt-16" />
            <p className="text-balck font-semibold text-2xl pt-20 text-center">
              Pengalaman Menggunakan Java Spring Boot Selama 4 Bulan
            </p>
          </div>
        </div>

        <div className="flex justify-evenly mt-10 flex-wrap">
          <div className="bg-white w-[280px] h-[380px] rounded-xl">
            <img
              src={bootstrap}
              alt="react"
              className="pt-12 w-[10rem] mx-auto"
            />
            <p className="text-black font-semibold text-2xl pt-14 text-center">
              Pengalaman Menggunakan Bootstrap Selama 8 Bulan
            </p>
          </div>
          <div className="bg-white w-[280px] h-[380px] rounded-xl">
            <img src={tail} alt="tail" className="w-[12rem] mx-10" />
            <img src={wind} alt="wind" className="pr-9" />
            <p className="text-black font-semibold text-2xl pt-6 text-center">
              Pengalaman Menggunakan Tailwind CSS Selama 10 Bulan
            </p>
          </div>
          <div className="bg-[#232531] w-[280px] h-[380px] rounded-xl">
            <img src={docker} alt="php" className="w-[14rem] mx-9 pt-16" />
            <p className="text-white font-semibold text-2xl pt-12 text-center">
              Pengalaman Menggunakan Docker Selama 3 Bulan
            </p>
          </div>
        </div>
      </section>

      {/* project */}
      <div className="mt-28" id="project-link">
        <h1 className="text-white ml-28 text-3xl font-bold">Projects</h1>
        <div>
          <div className="mt-12 mx-36">
            <img
              src={project3}
              alt="project 1"
              className="w-[1000px] h-[800px] mx-32 hover:cursor-pointer"
            />
            <div className="flex justify-center gap-24 mt-5">
              <p className="text-white text-2xl font-semibold">React JS</p>
              <p className="text-white text-2xl font-semibold">Bootstrap</p>
              <p className="text-white text-2xl font-semibold">
                Node JS (Express)
              </p>
              <p className="text-white text-2xl font-semibold">Rest API</p>
            </div>
          </div>
          <div className="mt-24 mx-36">
            <img
              src={project2}
              alt="project 1"
              className="w-[1000px] h-[800px] mx-32 hover:cursor-pointer"
            />
            <div className="flex justify-center gap-24 mt-5">
              <p className="text-white text-2xl font-semibold">React JS</p>
              <p className="text-white text-2xl font-semibold">Tailwind CSS</p>
            </div>
          </div>
        </div>
      </div>

      {/* contacts */}
      <footer
        className="bg-gradient-to-b from-[#1F1A1A] to-black pb-12 mt-28"
        id="contact-link"
      >
        <div className="ml-16">
          <div>
            <h1 className="text-white text-2xl font-bold">Join with sharing</h1>
          </div>
          <p className="text-white text-xl">
            For business inquiry please send email to{" "}
            <span className="underline hover:cursor-pointer">
              agungnugraha1894@gmail.com
            </span>
          </p>
          <div className="flex gap-8 mt-8">
            <a
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={email}
                alt="email"
                className="w-8 hover:cursor-pointer hover:transition hover:ease-in-out hover:scale-125 hover:duration-300"
              />
            </a>
            <a
              href="https://www.instagram.com/nugrahaagung10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagram}
                alt="instagram"
                className="w-8 hover:cursor-pointer hover:transition hover:ease-in-out hover:scale-125 hover:duration-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/agungnugrahaa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                alt="linkedin"
                className="w-8 hover:cursor-pointer hover:transition hover:ease-in-out hover:scale-125 hover:duration-300"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
