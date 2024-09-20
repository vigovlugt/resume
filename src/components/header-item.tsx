import { View, Text } from "@react-pdf/renderer";
import { Link } from "./link";

export function HeaderItem({
    children,
    icon,
    src,
}: {
    children?: React.ReactNode;
    icon: React.ReactNode;
    src?: string;
}) {
    return (
        <View style={{ flexDirection: "row", gap: 4 }}>
            <View style={{ justifyContent: "center" }}>{icon}</View>
            {src ? <Link src={src}>{children}</Link> : <Text>{children}</Text>}
        </View>
    );
}
