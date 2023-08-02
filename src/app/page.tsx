
import Link from "next/link";
import {useState} from 'react';
import { prisma } from "@/db";




export default async function Home() {

  const randomInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  const randomDate = new Date(`2022-${randomInterval(1, 12)}-${randomInterval(1, 29)}`)


  //await prisma.user.create({ data: { email: "nombre.apellido@yachaytech.edu.ec", password: "password", name: "Nombre Apellido", age: 23, gender: "male", weight: 64.5, height: 1.68, emergency_contact: "0987654321", prev_med_conditions: "hipertension", have_surgery: "no", have_allergy: "yes", allergy: "penicilin", have_chronic_ill: "no", medication: "paracetamol", date_diagnosis: randomDate.toISOString(), date_treatment: randomDate.toISOString(), treatment_along: "future transplant", kidney_disease: "policystic kidney disease (PKD)", kidney_stage: "stage 2: mildly reduced GFR", dialysis_type: "hemodialysis", date_dialysis_start: randomDate.toISOString(), dialysis_per_week: 2, hours_per_session: 2, dialysis_access: "central", center_treatment: "center random"}})
  await prisma.control.create({ data: {user_id: "eeb77d63-60a2-417f-b54f-fdb0a18f7832", date_last_dialysis: randomDate.toISOString(), have_symtomps_after_dial: "yes", symtomps_after_dial:"weight gain",have_disease_after_dial: "no", syst_press: randomInterval(80, 150), dias_press: randomInterval(60, 100), oxi_sat: randomInterval(1, 100), kt_v: randomInterval(8, 20)/10, urr: randomInterval(40, 90), sodium: randomInterval(40,100), bun: randomInterval(40, 100), creatinine: randomInterval(2, 15)/10, ferritin: randomInterval(24, 336), iron_saturation: randomInterval(100, 1000)/10}})
  //const users = await prisma.control.findMany()
  //console.log(users)

  //const [email, setEmail] = useState("")
  //const [password, setPassword] = useState("")

  //const queryString = window.location.search;
  //const userSettings = new URLSearchParams(queryString);

  //const handleLogin = () => console.log(userSettings.get('user_mail'))

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Kidney app</h1>
          <Link
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
            href="/register"
          >
            Register
          </Link>
       
      </header>
      <form>
        <div className="flex flex-col items-center  pt-20">
          <div className="relative z-0 w-60 mb-6 group">
            <input
              type="email"
              name="user_mail"
              id="user_mail"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent className-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="user_mail"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
          </div>
          <div className="relative z-0 w-60 mb-6 group">
            <input
              type="password"
              name="user_password"
              id="user_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent className-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="user_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
        
        <Link href={{
          pathname: "/control",
          query: {
            email: 'hola'
          }
        }
          
          }>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Enter
        </button>
        </Link>
        
        </div>
      </form>
    </>
  );
}
