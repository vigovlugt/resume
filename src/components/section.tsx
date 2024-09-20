import { View, TextProps, Text } from "@react-pdf/renderer";
import { ComponentProps, PropsWithChildren } from "react";

export function Section(props: ComponentProps<typeof View>) {
    return <View {...props} />;
}

export function SectionHeading(props: PropsWithChildren<TextProps>) {
    return (
        <Text
            {...props}
            style={{
                fontSize: 11,
                fontWeight: "bold",
                borderBottom: 1,
                ...props.style,
            }}
        />
    );
}

export function SectionBody(props: ComponentProps<typeof View>) {
    return (
        <View
            {...props}
            style={{
                paddingLeft: 10,
                gap: 5,
                ...props.style,
            }}
        />
    );
}
