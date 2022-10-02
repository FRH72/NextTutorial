import React, { ReactNode } from 'react'

export default function ProfileLayout({children}:{children:ReactNode}){
    return(
        <div>
            <p>This is Internal Profile Layout</p>
            {children}
        </div>
    )
}