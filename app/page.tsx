import Image from "next/image";
import DashboardPage from "./dashboard/page";
import { redirect } from "next/navigation";

export default function Home() {


  return (
    <div onLoad={redirect("/dashboard")}>
      <h1>Loading Plate Scanner</h1>
    </div>
  );
}
