import Link from "next/link";
import { cookies } from "next/headers";
import { prisma } from "@/db";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function Page() {
  const user_id = cookies().get("user_id");
  const { name } = (await prisma.user.findUnique({
    where: { id: user_id?.value },
  })) as { name: string };
  const controls = await prisma.control.findMany({
    where: { user_id: user_id?.value },
    orderBy: { date_last_dialysis: "desc" },
  });
  //console.log(controls);

  

  const toLocalDate = (date: string, locales: string) => {
    const options:object = {year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString(locales, options);
  };

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Your controls: {name}</h1>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/home"
        >
          Back
        </Link>
      </header>
<div className="">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[120px]">Date</TableHead>
            
            <TableHead> Symtomps</TableHead>
            <TableHead>Disease</TableHead>
            <TableHead>Systolic Pressure</TableHead>
            <TableHead>Diastolic Pressure</TableHead>
            <TableHead>Oxigen saturation</TableHead>
            <TableHead>kt/V Preasure</TableHead>
            <TableHead>URR</TableHead>
            <TableHead>Sodium</TableHead>
            <TableHead>BUN</TableHead>
            <TableHead>Creatinine</TableHead>
            <TableHead>Ferritin</TableHead>
            <TableHead>Iron Saturation</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            controls.map((control) => (
              <TableRow key={control.id}>
                <TableCell className="font-medium">{toLocalDate(control.date_last_dialysis, "en-US")}</TableCell>
                
                <TableCell>{control.symtomps_after_dial}</TableCell>
                
                <TableCell>{control.disease_after_dial}</TableCell>
                <TableCell className="text-right">{control.syst_press}</TableCell>
                <TableCell>{control.dias_press}</TableCell>
                <TableCell>{control.oxi_sat}</TableCell>
                <TableCell>{control.kt_v}</TableCell>
                <TableCell>{control.urr}</TableCell>
                <TableCell>{control.sodium}</TableCell>
                <TableCell>{control.bun}</TableCell>
                <TableCell>{control.creatinine}</TableCell>
                <TableCell>{control.ferritin}</TableCell>
                <TableCell>{control.iron_saturation}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
      </div>
    </>
  );
}
