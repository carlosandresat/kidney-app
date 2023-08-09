"use client";

import Link from "next/link";
import SelectGroup from "@/components/SelectGroup";
import { useState, useRef } from "react";
import { createRegister } from "../actions";

export default function Page() {
  const [gender, setGender] = useState("");
  const [have_surgery, setHave_surgery] = useState("");
  const [have_allergy, setHave_allergy] = useState("");
  const [have_chronic_ill, setHave_chronic_ill] = useState("");
  const [treatment_along, setTreatment_along] = useState("");
  const [kidney_disease, setKidney_disease] = useState("");
  const [kidney_stage, setKidney_stage] = useState("");
  const [dialysis_type, setDialysis_type] = useState("");
  const [dialysis_access, setDialysis_access] = useState("");

  const surgeryRef = useRef<HTMLInputElement>(null);
  const allergyRef = useRef<HTMLInputElement>(null);
  const chronicRef = useRef<HTMLInputElement>(null);
  const treatmentRef = useRef<HTMLInputElement>(null);

  const answerToBoolean = (answer: string) => {
    if (answer === "yes") return true;
    else return false;
  };

  const isLastOptionSelected = (answer: string, options: string[]) => {
    if (answer === options[options.length - 1]) return true;
    else return false;
  };

  const boolOptions = ["yes", "no"]
  const genderOptions = ["female", "male", "other"]
  const treatmentOptions = ["future transplant", "special medication", "other treatment"]
  const kidneyDiseaseOptions = [
    "Chronic Kidney Disease (CKD)",
    "Acute Kidney Injury (AKI)",
    "Polycystic Kidney Disease (PKD)",
    "Glomerulonephritis",
    "Kidney Stones",
    "Urinary Tract Infections (UTIs)",
    "Diabetic Nephropathy",
    "Hypertensive Nephropathy",
    "Interstitial Nephritis",
    "Nephrotic Syndrome",
    "Renal Artery Stenosis",
    "Alport Syndrome",
    "Lupus Nephritis",
    "Amyloidosis",
  ]
  const kidneyStageOptions = [
    "Stage 1: Kidney damage with normal or high GFR (GFR > 90 mL/min)",
    "Stage 2: Mildly reduced GFR (GFR = 60-89 mL/min)",
    "Stage 3: Moderately reduced GFR (GFR = 30-59 mL/min)",
    "Stage 4: Severely reduced GFR (GFR = 15-29 mL/min)",
    "Stage 5: End-stage renal disease (ESRD) (GFR < 15 mL/min)",
  ]

  //const cleanAnswer = (answerRef:object) => {
  //  const element = answerRef.current;
  //  element.value = ""
  //}

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Register</h1>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href=".."
        >
          Back
        </Link>
      </header>
      <form
        action={(formData) =>
          createRegister(
            formData,
            gender,
            have_surgery,
            have_allergy,
            have_chronic_ill,
            treatment_along,
            kidney_disease,
            kidney_stage,
            dialysis_type,
            dialysis_access
          )
        }
      >
        <h1 className="text-xl my-6">User Access</h1>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
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
          <div className="relative z-0 w-full mb-6 group">
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
        </div>

        <h1 className="text-xl my-6">Personal Information</h1>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="user_name"
            id="user_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent className-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="user_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              min="1"
              name="age"
              id="age"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="age"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Age
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <label
              htmlFor="gender"
              className="text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 mr-4"
            >
              Gender
            </label>
            <SelectGroup
              answer={gender}
              setAnswer={setGender}
              orientation="row"
              options={["female", "male", "other"]}
            ></SelectGroup>
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              min="0"
              step="0.01"
              name="weight"
              id="weight"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="weight"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Weight (kg)
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              min="0"
              step="0.01"
              name="height"
              id="height"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="height"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Height (m)
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="tel"
            pattern="([+][0-9]{2})?[0-9]{10}"
            name="emergency_contact"
            id="emergency_contact"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="emergency_contact"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Emergency contact (Phone)
          </label>
        </div>

        <h1 className="text-xl my-6">Medical History</h1>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="prev_med_conditions"
            id="prev_med_conditions"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="prev_med_conditions"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Previous medical conditions
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group flex items-center justify-between">
            <label
              htmlFor="have_surgery"
              className="text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-0 scale-100 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 mr-4"
            >
              Does the patient has a previous surgical history/ Have you had any
              surgery before?
            </label>
            <SelectGroup
              answerRef={surgeryRef}
              answer={have_surgery}
              setAnswer={setHave_surgery}
              orientation="row"
              options={["yes", "no"]}
            ></SelectGroup>
          </div>
          <div className={`relative z-0 w-full mb-6 group ${have_surgery === "yes" ? "":"invisible"}`} >
            <input
              ref={surgeryRef}
              type="text"
              name="surgery_kind"
              id="surgery_kind"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              disabled={!answerToBoolean(have_surgery)}
            />
            <label
              htmlFor="surgery_kind"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              What kind of Surgery?
            </label>
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group flex items-center justify-between">
            <label
              htmlFor="have_allergy"
              className="text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-0 scale-100 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 mr-4"
            >
              Does the patient have any allergy?
            </label>
            <SelectGroup
              answerRef={allergyRef}
              answer={have_allergy}
              setAnswer={setHave_allergy}
              orientation="row"
              options={["yes", "no"]}
            ></SelectGroup>
          </div>
          <div className={`relative z-0 w-full mb-6 group ${have_allergy === "yes" ? "":"invisible"}`}>
            <input
              ref={allergyRef}
              type="text"
              name="allergy"
              id="allergy"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              disabled={!answerToBoolean(have_allergy)}
            />
            <label
              htmlFor="allergy"
              className={`peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
            >
              What allergies does the patient have?
            </label>
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6 ">
          <div className="relative z-0 w-full mb-6 group flex items-center justify-between">
            <label
              htmlFor="have_chronic_ill"
              className="text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-0 scale-100 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 mr-4"
            >
              Does the patient has any chronic illnesses:
            </label>
            <div className="flex justify-center my-2">
              <SelectGroup
                answerRef={chronicRef}
                answer={have_chronic_ill}
                setAnswer={setHave_chronic_ill}
                orientation="row"
                options={["yes", "no"]}
              ></SelectGroup>
            </div>
          </div>
          <div className={`relative z-0 w-full mb-6 group ${have_chronic_ill === "yes" ? "":"invisible"}`}>
            <input
              ref={chronicRef}
              type="text"
              name="chronic_ill"
              id="chronic_ill"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              disabled={!answerToBoolean(have_chronic_ill)}
            />
            <label
              htmlFor="chronic_ill"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              What illnesses the patient has?
            </label>
          </div>
        </div>
        
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="medication"
            id="medication"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="medication"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Medications currently being taken
          </label>
        </div>

        <h1 className="text-xl my-6">Kidney Disease Information</h1>

        <div className="grid md:grid-cols-2 md:gap-6 mt-10">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="date"
              name="date_diagnosis"
              id="date_diagnosis"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="date_diagnosis"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-10 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10"
            >
              Date of diagnosis (When did the patient found out they needed
              treatment?)
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="date"
              name="date_treatment"
              id="date_treatment"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="date_treatment"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-10 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10"
            >
              Beginning of treatment (When did the patient begin treatment?)
            </label>
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6 ">
          <div className="relative z-0 w-full mb-6 group">
            <label
              htmlFor="treatment_along"
              className="text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 mr-4"
            >
              Type of treatment besides Dyalisis: the patient has been
              prescribed dyalisis along with
            </label>
            <div className="flex justify-center my-2">
              <SelectGroup
                answerRef={treatmentRef}
                answer={treatment_along}
                setAnswer={setTreatment_along}
                orientation="col"
                options={treatmentOptions}
              ></SelectGroup>
            </div>
          </div>
          <div className={`relative z-0 w-full mb-6 group ${treatment_along === "other treatment" ? "":"invisible"}`}>
            <input
              ref={treatmentRef}
              type="text"
              name="other_treatment"
              id="other_treatment"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              disabled={!isLastOptionSelected(treatment_along, treatmentOptions)}
            />
            <label
              htmlFor="other_treatment"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Specify treatment
            </label>
          </div>
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <label
            htmlFor="kidney_disease"
            className="text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 mr-4"
          >
            What is the cause/type of kidney disease diagnosed? Choose among the
            following:
          </label>
          <div className="flex justify-center my-2">
            <SelectGroup
              answer={kidney_disease}
              setAnswer={setKidney_disease}
              orientation="col"
              options={kidneyDiseaseOptions}
            ></SelectGroup>
          </div>
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <label
            htmlFor="floating_company"
            className="text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 mr-4"
          >
            Stage of kidney disease: To choose only one from the following
          </label>
          <div className="flex justify-center my-2">
            <SelectGroup
              answer={kidney_stage}
              setAnswer={setKidney_stage}
              orientation="col"
              options={kidneyStageOptions}
            ></SelectGroup>
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6 items-center">
          <div className="relative z-0 w-full mb-6 group flex items-center">
            <label
              htmlFor="dialysis_type"
              className="text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-0 scale-100 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 mr-4"
            >
              What type of Dialysis Treatment has been prescribed
            </label>
            <SelectGroup
              answer={dialysis_type}
              setAnswer={setDialysis_type}
              orientation="row"
              options={["hemodialysis", "peritoneal dialysis"]}
            ></SelectGroup>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="date"
              name="date_dialysis_start"
              id="date_dialysis_start"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="date_dialysis_start"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              When did the dialysis treatment started?
            </label>
          </div>
        </div>

        <h1 className="text-xl my-6">Dialysis Schedule</h1>
        <div className="grid md:grid-cols-2 md:gap-6 items-center">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              min="1"
              step="1"
              name="dialysis_per_week"
              id="dialysis_per_week"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 focus:py-2.5 placeholder-shown:py-5 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="dialysis_per_week"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-10 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10"
            >
              How many times per week the dialysis treatment has been
              prescribed?
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              min="0"
              step="1"
              name="hours_per_session"
              id="hours_per_session"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 focus:py-2.5 placeholder-shown:py-5 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="hours_per_session"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              How long do sessions often last? (hours)
            </label>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 md:gap-6 mt-4">
          <div className="relative z-0 w-full mb-6 group">
            <label
              htmlFor="dialysis_access"
              className="text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 mr-4"
            >
              Dialysis access type
            </label>
            <div className="flex justify-center my-2">
              <SelectGroup
                answer={dialysis_access}
                setAnswer={setDialysis_access}
                orientation={"col"}
                options={[
                  "Arteriovenous Fistula (AVF)",
                  "Arteriovenous Graft (AVG)",
                  "Central Venous Catheter (CVC)",
                ]}
              ></SelectGroup>
            </div>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="center_treatment"
              id="center_treatment"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 focus:py-2.5 placeholder-shown:py-5 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="center_treatment"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-10 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10"
            >
              Dialysis center or healthcare facility where treatment is received
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
