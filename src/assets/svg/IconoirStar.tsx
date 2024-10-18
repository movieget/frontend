import type { SVGProps } from "react";

interface IconoirStarProps extends SVGProps<SVGSVGElement> {
  fill?: string; // fill을 optional prop으로 추가
}

export function IconoirStar({
  fill = "transparent",
  ...props
}: IconoirStarProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={fill}
        stroke="#E08403"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m8.587 8.236l2.598-5.232a.911.911 0 0 1 1.63 0l2.598 5.232l5.808.844a.902.902 0 0 1 .503 1.542l-4.202 4.07l.992 5.75c.127.738-.653 1.3-1.32.952L12 18.678l-5.195 2.716c-.666.349-1.446-.214-1.319-.953l.992-5.75l-4.202-4.07a.902.902 0 0 1 .503-1.54z"
      ></path>
    </svg>
  );
}
