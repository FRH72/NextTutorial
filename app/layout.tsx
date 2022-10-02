import React, { ReactNode } from 'react'

export default function RootLayout({children}:{children:ReactNode}){
    return(
        <div>
            <p>This is Root Layout</p>
            {children}
        </div>
    )
}