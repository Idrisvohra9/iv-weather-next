import React from 'react'
import InnerComponent from "../../components/warning/InnerComponent";
import OuterComponent from "../../components/warning/OuterComponent";
import { getWeatherWarning } from '@/app/api/methods';


export function generateMetadata({ params }: { params: { warning: string } }) {
  return {
    title: `Weather warnings of ${params.warning}`
  }
}
export default async function Page({ params, searchParams }: { params: { warning: string }, searchParams: { locationName: string } }) {
  const location = searchParams.locationName || "Ahmedabad";
  const alertData = await getWeatherWarning(location, params.warning);
  return (
    <OuterComponent>
      <InnerComponent warning={params.warning} location={location} alertData={alertData}/>
    </OuterComponent>
  )
}
