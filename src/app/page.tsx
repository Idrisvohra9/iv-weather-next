import OuterComponent from "./components/OuterComponent";
import dynamic from "next/dynamic";
const CurrentLocation = dynamic(() => import("./components/CurrentLocation"), {ssr: false});
export default async function Page() {
  return (
    <OuterComponent>
      <CurrentLocation/>
    </OuterComponent>
  )
}
