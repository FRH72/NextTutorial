import React, { ReactNode } from 'react'

export default function DashboardLayout({children}:{children:ReactNode}){
    return(
        <div>
            <p>This is Internal Dashboard Group Layout</p>
            {children}
        </div>
    )
}