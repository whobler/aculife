import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
          <g transform="rotate(-20 12 12)">
            {/* Leaf body - elongated teardrop shape */}
            <path
              d="M6 12C6 12 7 9 10 7.5C13 6 16 6.5 18 8C19 9 19.5 10.5 19 12.5C18.5 14.5 17 16.5 14.5 17.5C12 18.5 9 18 7 16.5C5.5 15.5 5.5 13.5 6 12Z"
              fill="white"
              stroke="white"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Central vein */}
            <path
              d="M6.5 12.5C6.5 12.5 9 10 12 9C15 8 17.5 9 18.5 10"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              className="text-primary opacity-30"
            />
            {/* Side veins */}
            <path
              d="M10 10L9 12M13 9.5L12.5 11.5M15.5 10L15 12.5"
              stroke="currentColor"
              strokeWidth="0.8"
              strokeLinecap="round"
              className="text-primary opacity-20"
            />
          </g>
        </svg>
      </div>
      <span className="text-xl font-semibold">
        <span className="text-foreground">acu</span>
        <span className="text-primary">Life</span>
      </span>
    </Link>
  )
}
