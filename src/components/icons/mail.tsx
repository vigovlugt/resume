import { Path, Rect, Svg } from "@react-pdf/renderer";

export function Mail() {
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
            <Rect width="20" height="16" x="2" y="4" rx="2" />
            <Path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </Svg>
    );
}
