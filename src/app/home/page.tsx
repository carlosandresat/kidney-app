import Link from "next/link";
import { cookies } from "next/headers";
import { prisma } from "@/db";
import SyncLineChart from "@/components/ui/charts";
import { toLocalDate } from "@/lib/utils";

export default async function Page() {
  const user_id = cookies().get("user_id");
  const { name } = (await prisma.user.findUnique({
    where: { id: user_id?.value },
  })) as { name: string };
  const controls = await prisma.control.findMany({
    where: { user_id: user_id?.value },
    orderBy: { date_last_dialysis: "asc" },
  });
  //console.log(controls);

  //select date, systolic_pressure, diastolic_pressure, oxigen_saturation, kt_v_preasure, urr, sodium, bun, creatinine, ferritin from control where user_id = 1 order by date desc limit 10;
  const data = controls.map((control) => {
    const raw_date = control.date_last_dialysis;
    const date = toLocalDate(raw_date, "en-US");

    return {
      name: date,
      syst_press: control.syst_press,
      dias_press: control.dias_press,
      oxi_sat: control.oxi_sat,
      kt_v: control.kt_v,
      urr: control.urr,
      sodium: control.sodium,
      bun: control.bun,
      creatinine: control.creatinine,
      ferritin: control.ferritin,
      iron_saturation: control.iron_saturation,
    };
  });

  console.log(data)


  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Welcome {name}</h1>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/"
        >
          Logout
        </Link>
      </header>

      <div className="flex flex-col sm:flex-row gap-4 mb-4">
      <Link
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        href="/control"
      >
        Add control
      </Link>
      <Link
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        href="/controls"
      >
        See controls
      </Link>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
      <div className="flex flex-col gap-4 mb-4">
        <h2 className="text-xl">Number of controls</h2>
        <p className="text-2xl">{controls.length}</p>
      </div>
      </div>

      <SyncLineChart data={data as object[]}/>

    </>
  );
}
