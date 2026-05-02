import { CheckCircle2, KeyRound, Save } from "lucide-react"
import { useEffect, useState } from "react"

export default function Header({ matchLoaded }) {

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-bg/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-4">
          <div className="font-rajdhani text-3xl font-bold tracking-normal">
            <span aria-hidden="true">🏏 </span>
            <span className="text-accent">IPL</span>
            <span className="text-white"> Companion</span>
          </div>
          {matchLoaded ? (
            <div className="flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-bold text-red-200">
              <span className="live-pulse h-2 w-2 rounded-full bg-red-500" />
              LIVE
            </div>
          ) : null}
        </div>


      </div>
    </header>
  )
}
