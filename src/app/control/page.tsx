"use client";
import Link from "next/link";
import SelectGroup from "@/components/SelectGroup";
import { useState, useRef } from "react";
import { createControl } from "../actions";

interface ControlValues {
  date_last_dialysis: string;
  have_symtomps_after_dial: string;
  symtomps_after_dial: string;
  have_disease_after_dial: string;
  disease_after_dial: string;

  syst_press: number;
  dias_press: number;
  oxi_sat: number;

  kt_v: number;
  urr: number;
  sodium: number;
  bun: number;
  creatinine: number;
  ferritin: number;
  iron_saturation: number;
}

export default function Page() {
  const [have_symtomps_after_dial, setHave_symtomps_after_dial] = useState("");
  const [have_disease_after_dial, setHave_disease_after_dial] = useState("");
  const [have_blood_test, setHave_blood_test] = useState("");

  const symptomsRef = useRef<HTMLInputElement>(null);
  const diseaseRef = useRef<HTMLInputElement>(null);
  const bloodTestRef = useRef<HTMLInputElement>(null);

  const answerToBoolean = (answer: string) => {
    if (answer === "yes") return true;
    else return false;
  };

  return (
    <>
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Control</h1>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/"
        >
          Logout
        </Link>
      </header>
      <form action={(formData) =>
        createControl(formData, have_symtomps_after_dial, have_disease_after_dial, have_blood_test)
      }>
        <div className="relative z-0 w-full mb-6 group my-10">
          <input
            type="date"
            name="date_last_dialysis"
            id="date_last_dialysis"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="date_last_dialysis"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-10 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10"
          >
            When was the last time you had a dialysis session?
          </label>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6 ">
          <div className="relative z-0 w-full mb-6 group flex items-center justify-between">
            <label
              htmlFor=" have_symtomps_after_dial"
              className="text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-0 scale-100 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 mr-4"
            >
              After your last dialysis session, have you experienced any
              symptoms, pain, cramps, or any anomaly you weren&apos;t feeling
              before?
            </label>
            <div className="flex justify-center my-2">
              <SelectGroup
                answerRef={symptomsRef}
                answer={have_symtomps_after_dial}
                setAnswer={setHave_symtomps_after_dial}
                orientation="row"
                options={["yes", "no"]}
              ></SelectGroup>
            </div>
          </div>
          <div className={`relative z-0 w-full mb-6 group ${have_symtomps_after_dial === "yes" ? "":"invisible"}`}>
            <input
              ref={symptomsRef}
              type="text"
              min="1"
              name="symtomps_after_dial"
              id="symtomps_after_dial"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              disabled={!answerToBoolean(have_symtomps_after_dial)}
            />
            <label
              htmlFor="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              What did you experience?
            </label>
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6 ">
          <div className="relative z-0 w-full mb-6 group flex items-center justify-between">
            <label
              htmlFor="have_disease_after_dial"
              className="text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-0 scale-100 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 mr-4"
            >
              Have you gotten sick after your last dialysis session?
            </label>
            <div className="flex justify-center my-2">
              <SelectGroup
                answerRef={diseaseRef}
                answer={have_disease_after_dial}
                setAnswer={setHave_disease_after_dial}
                orientation="row"
                options={["yes", "no"]}
              ></SelectGroup>
            </div>
          </div>
          <div className={`relative z-0 w-full mb-6 group ${have_disease_after_dial === "yes" ? "":"invisible"}`}>
            <input
              ref={diseaseRef}
              type="text"
              min="2"
              name="disease_after_dial"
              id="disease_after_dial"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              disabled={!answerToBoolean(have_disease_after_dial)}
            />
            <label
              htmlFor="disease_after_dial"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              What disease did you get?
            </label>
          </div>
        </div>

        <h1 className="text-xl my-6">
          Laboratory results and periodic control information
        </h1>
        <h1 className="text-m my-2">
          According to the results after your last dialysis session, what values
          of the following parameters were obtained?
        </h1>
        <h1 className="text-m my-4">Blood Pressure</h1>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              min="0"
              step="0.01"
              name="syst_press"
              id="syst_press"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="syst_press"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Systolic
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              min="0"
              step="0.01"
              name="dias_press"
              id="dias_press"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="dias_press"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Diastolic
            </label>
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              min="0"
              max="100"
              step="1"
              name="oxi_sat"
              id="oxi_sat"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="oxi_sat"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Oxygen saturation levels (%)
            </label>
          </div>
        </div>
        <h1 className="text-xl my-6">Laboratory results</h1>
        <h1 className="text-m my-4">
          This section shows some of the parameters that are crucial for
          evaluating the effectiveness of the dialysis treatment you&apos;re
          receiving. After the dialysis session, check on these values, and if
          you are unable to find them, ask your healthcare team to ensure
          quality of the treatment.
        </h1>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              min="0"
              step="0.01"
              name="kt_v"
              id="kt_v"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="kt_v"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Kt/V
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              min="0"
              step="0.01"
              name="urr"
              id="urr"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="urr"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Urea Reduction Ratio (URR) (%)
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              min="0"
              step="0.01"
              name="sodium"
              id="sodium"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="sodium"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Sodium levels (mEq/L)
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group flex items-center justify-between">
            <label
              htmlFor="have_blood_test"
              className="text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-0 scale-100 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 mr-4"
            >
              Do you have a document with your latest blood test?
            </label>
            <SelectGroup
              answerRef={bloodTestRef}
              answer={have_blood_test}
              setAnswer={setHave_blood_test}
              orientation="row"
              options={["yes", "no"]}
            ></SelectGroup>
          </div>
        </div>

        <div className={`relative z-0 w-full mb-6 group ${have_blood_test === "yes" ? "":"invisible"}`}>
          <input
            ref={bloodTestRef}
            type="file"
            accept="application/pdf"
            name="blood_test_pdf"
            id="blood_test_pdf"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent className-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            disabled={!answerToBoolean(have_blood_test)}
          />
          <label
            htmlFor="blood_test_pdf"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            If yes, please upload it to improve the monitoring over your health
            (.pdf)
          </label>
        </div>

        <h1 className="text-m my-4">
          According to the values in your blood test, what are the values for
          the following parameters?
        </h1>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              min="0"
              step="0.01"
              name="bun"
              id="bun"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="bun"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Blood Urea Nitrogen (BUN) (mg/dL)
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              min="0"
              step="0.01"
              name="creatinine"
              id="creatinine"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="creatinine"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Creatinine levels (mg/dL)
            </label>
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              min="0"
              step="0.01"
              name="ferritin"
              id="ferritin"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="ferritin"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Ferritin (micrograms/dL)
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              min="0"
              step="0.01"
              name="iron_saturation"
              id="iron_saturation"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="iron_saturation"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Iron Saturation (%)
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  );
}
