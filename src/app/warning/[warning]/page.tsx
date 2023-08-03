import React from 'react'
import InnerComponent from "../../components/warning/InnerComponent";
import OuterComponent from "../../components/warning/OuterComponent";


export function generateMetadata({ params }: { params: { warning: string } }) {
    return {
        title: `Weather warnings of ${params.warning}`
    }
}
export default async function Page({ params }: { params: { warning: string } }) {
  return (
    <OuterComponent>
        <InnerComponent warning={params.warning}/>
    </OuterComponent>
  )
}
