import { ComponentProps } from "react";
import { Link as PdfLink } from "@react-pdf/renderer";

export function Link(props: ComponentProps<typeof PdfLink>) {
    return (
        <PdfLink
            {...props}
            style={{
                color: "black",
                textDecoration: "none",
                ...props.style,
            }}
        />
    );
}
