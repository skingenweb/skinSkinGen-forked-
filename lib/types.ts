import type { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
};


export type SlideData = {
    title: string;
    description: string;
    src: string;
    type: "video" | "image";
    ctaText: string;
    ctaLink: string;
    textColor: string;
    button: "primary" | "secondary";
    logo:string
  };