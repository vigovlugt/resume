import { Circle, Path, Svg } from "@react-pdf/renderer";

export function MapPin() {
    return (
        <Svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLineCap="round"
            strokeLinejoin="round"
        >
            <Path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
            <Circle cx="12" cy="10" r="3" />
        </Svg>
    );
}
