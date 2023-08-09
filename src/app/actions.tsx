"use server";

import { prisma } from "@/db";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function createRegister(
  data: FormData,
  gender: string,
  have_surgery: string,
  have_allergy: string,
  have_chronic_ill: string,
  treatment_along: string,
  kidney_disease: string,
  kidney_stage: string,
  dialysis_type: string,
  dialysis_access: string
) {
  if (gender === "") {
    console.log("Please select a gender");
  } else if (have_surgery === "") {
    console.log("Please select if you have had surgery");
  } else if (have_allergy === "") {
    console.log("Please select if you have any allergy");
  } else if (have_chronic_ill === "") {
    console.log("Please select if you have any chronic illness");
  } else if (treatment_along === "") {
    console.log("Please select if you are in treatment along with dialysis");
  } else if (kidney_disease === "") {
    console.log("Please select your kidney disease");
  } else if (kidney_stage === "") {
    console.log("Please select your kidney stage");
  } else if (dialysis_type === "") {
    console.log("Please select your dialysis type");
  } else if (dialysis_access === "") {
    console.log("Please select your dialysis access");
  } else {
    const email = data.get("user_mail")?.valueOf();
    const password = data.get("user_password")?.valueOf();
    const name = data.get("user_name")?.valueOf();
    const age = Number(data.get("age")?.valueOf());
    const weight = Number(data.get("weight")?.valueOf());
    const height = Number(data.get("height")?.valueOf());
    const prev_med_conditions = data.get("prev_med_conditions")?.valueOf();
    const emergency_contact = data.get("emergency_contact")?.valueOf();
    const surgery_kind = data.get("surgery_kind")?.valueOf();
    const allergy = data.get("allergy")?.valueOf();
    const chronic_ill = data.get("chronic_ill")?.valueOf();
    const medication = data.get("medication")?.valueOf();
    const date_diagnosis_raw = data.get("date_diagnosis")?.valueOf();
    const date_diagnosis = new Date(date_diagnosis_raw as string);
    const date_treatment_raw = data.get("date_treatment")?.valueOf();
    const date_treatment = new Date(date_treatment_raw as string);
    const other_treatment = data.get("other_treatment")?.valueOf();
    const date_dialysis_start_raw = data.get("date_dialysis_start")?.valueOf();
    const date_dialysis_start = new Date(date_dialysis_start_raw as string);
    const dialysis_per_week = Number(data.get("dialysis_per_week")?.valueOf());
    const hours_per_session = Number(data.get("hours_per_session")?.valueOf());
    const center_treatment = data.get("center_treatment")?.valueOf();

    const user_data = {
      email,
      password,
      name,
      age,
      gender,
      weight,
      height,
      emergency_contact,
      prev_med_conditions,
      have_surgery,
      surgery_kind,
      have_allergy,
      allergy,
      have_chronic_ill,
      chronic_ill,
      medication,
      date_diagnosis: date_diagnosis.toISOString(),
      date_treatment: date_treatment.toISOString(),
      treatment_along,
      other_treatment,
      kidney_disease,
      kidney_stage,
      dialysis_type,
      date_dialysis_start: date_dialysis_start.toISOString(),
      dialysis_per_week,
      hours_per_session,
      dialysis_access,
      center_treatment,
    };

    const final_data = {
      data: user_data,
    };
    await prisma.user.create(final_data as any);
    redirect("/")
  }
}

export async function createControl(data: FormData, have_symtomps_after_dial: string, have_disease_after_dial: string, have_blood_test: string) {
  if (have_symtomps_after_dial === "") {
    console.log("Please select if you have any symptoms after dialysis");
  } else if (have_disease_after_dial === "") {
    console.log("Please select if you have any disease after dialysis");
  } else if (have_blood_test === "") {
    console.log("Please select if you have any blood test");
  } else {
    
    const user_id = cookies().get("user_id")?.value;

    const date_last_dialysis_raw = data.get("date_last_dialysis")?.valueOf();
    const date_last_dialysis = new Date(date_last_dialysis_raw as string);
    const symtomps_after_dial = data.get("symtomps_after_dial")?.valueOf();
    const disease_after_dial = data.get("disease_after_dial")?.valueOf();
    const syst_press = Number(data.get("syst_press")?.valueOf());
    const dias_press = Number(data.get("dias_press")?.valueOf());
    const oxi_sat = Number(data.get("oxi_sat")?.valueOf());
    const kt_v = Number(data.get("kt_v")?.valueOf());
    const urr = Number(data.get("urr")?.valueOf());
    const sodium = Number(data.get("sodium")?.valueOf());
    const bun = Number(data.get("bun")?.valueOf());
    const creatinine = Number(data.get("creatinine")?.valueOf());
    const ferritin = Number(data.get("ferritin")?.valueOf());
    const iron_saturation = Number(data.get("iron_saturation")?.valueOf());

    const control_data = {
      user_id,
      date_last_dialysis: date_last_dialysis.toISOString(),
      have_symtomps_after_dial,
      symtomps_after_dial,
      have_disease_after_dial,
      disease_after_dial,
      syst_press,
      dias_press,
      oxi_sat,
      kt_v,
      urr,
      sodium,
      bun,
      creatinine,
      ferritin,
      iron_saturation,
      //have_blood_test,
    };

    const final_data = {
      data: control_data,
    };

    console.log(final_data)
    await prisma.control.create(final_data as any);
    redirect("/")
  }
}

export async function handleLogin(data: FormData) {
  const email = data.get("user_mail")?.valueOf();
  const password = data.get("user_password")?.valueOf();

  const user = await prisma.user.findMany({
    where: {
      email: email,
    },
  });

  if (user[0]?.password === password) {
    cookies().set("user_id", user[0]?.id);
    redirect("/home");
  } else {
    console.log("Wrong password");
  }
}