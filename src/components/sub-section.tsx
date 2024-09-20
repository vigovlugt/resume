import { View, TextProps, Text } from "@react-pdf/renderer";
import { ComponentProps, PropsWithChildren } from "react";

export function SubSection(props: ComponentProps<typeof View>) {
    return <View {...props} />;
}

export function SubSectionHeading(props: ComponentProps<typeof View>) {
    return (
        <View
            {...props}
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                ...props.style,
            }}
        />
    );
}

export function SubSectionTitle(props: PropsWithChildren<TextProps>) {
    return (
        <Text
            {...props}
            style={{
                fontSize: 10,
                fontWeight: "bold",
                ...props.style,
            }}
        />
    );
}

export function SubSectionDate(props: PropsWithChildren<TextProps>) {
    return (
        <Text
            {...props}
            style={{
                fontSize: 10,
                fontStyle: "italic",
                ...props.style,
            }}
        />
    );
}

export function SubSectionSubtitle(props: PropsWithChildren<TextProps>) {
    return (
        <Text
            {...props}
            style={{
                fontSize: 10,
                fontStyle: "italic",
                ...props.style,
            }}
        />
    );
}

export function SubSectionBody(props: ComponentProps<typeof View>) {
    return <View {...props} />;
}
