import React from 'react'
import skull from "./skull.png";
import Image from 'next/image';
export default function InnerComponent({ warning }: { warning: string }) {
    return (
        <div>
            <div className="container-warning">
                <div className="box">
                    <span className="title">{warning}</span>
                    <div>
                        <strong>Inensity</strong>
                        <Image src={skull} alt="" width={230} height={230}/>
                        <h2>When  01/28</h2>
                        <h2>Where  01/28</h2>
                    </div>
                </div>
            </div >
        </div >
    )
}
