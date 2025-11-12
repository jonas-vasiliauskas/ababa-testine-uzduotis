import { useState } from "react";
import React, { createRef, Component } from "react";

import "./App.css";

function userLogin() {
  //e.preventDefault(); // prevent page reload
  //alert("Laba diena");
  //divRef.current.style.display = "none";
 // const [isVisible, setIsVisible] = React.useState(true);
}


export default function App() {
   
    return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="pl-1 space-y-3 w-full md:w-1/5 p-8">
        <form action={userLogin} method="POST" className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2 text-blue-600 focus:ring-blue-500"
              />
              Remember me
            </label>
            <a
              href="#"
              className="text-blue-600 hover:text-green-900 transition duration-1000"
            >
              Forgot password?
            </a>
          </div>

         
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>

      <div className="md:w-4/5 w-full bg-white text-black flex flex-col items-start justify-start p-10">
          <table>
              <thead>
                  <tr>
                      <th scope="col">Režisierius</th>
                      <th scope="col">Pavadinimas orginalo kalba</th>
                      <th scope="col">Pavadinimas lietuvių kalba</th>
                      <th scope="col">Žandras</th>
                      <th scope="col">Aktoriai</th>
                      <th scope="col">Apie</th>
                      <th scope="col">Metai</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td scope="col">Vardenis Pavardenis</td>
                      <td scope="col">Name</td>
                      <td scope="col">Pavadinimas</td>
                      <td scope="col">Komedija</td>
                      <td scope="col">Aktorius 1, Aktorius 2 </td>
                      <td scope="col">---</td>
                      <td scope="col">2020</td>
                  </tr>
                      <td scope="col">Vardenė Pavardenė</td>
                      <td scope="col">Name</td>
                      <td scope="col">Pavadinimas 2</td>
                      <td scope="col">Drama</td>
                      <td scope="col">Aktorius 1, Aktorius 3, Aktorius 2 </td>
                      <td scope="col">+++</td>
                      <td scope="col">2014</td>
                  <tr>
                      <td scope="col">Vardenis Pavardenis</td>
                      <td scope="col">Name 2</td>
                      <td scope="col">Pavadinimas 2</td>
                      <td scope="col">Komedija</td>
                      <td scope="col">Aktorius 1, Aktorius 2 </td>
                      <td scope="col">***</td>
                      <td scope="col">2022</td>
                  </tr>
                  <tr>
                      <td scope="col">Vardenis Pavardenis</td>
                      <td scope="col">Name 3</td>
                      <td scope="col">Pavadinimas 3</td>
                      <td scope="col">Trileris</td>
                      <td scope="col">Aktorius 1, Aktorius 2, Aktorius 5 </td>
                      <td scope="col">///</td>
                      <td scope="col">1990</td>
                  </tr>
                  <tr>
                      <td scope="col">Vardenis Pavardenis</td>
                      <td scope="col">Name 3</td>
                      <td scope="col">Pavadinimas 3</td>
                      <td scope="col">Trileris</td>
                      <td scope="col">Aktorius 1, Aktorius 2, Aktorius 5 </td>
                      <td scope="col">###</td>
                      <td scope="col">1990</td>
                  </tr>
              </tbody>   
          </table>
      </div>
    </div>
  );
}

