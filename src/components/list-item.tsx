import { View, Text } from "@react-pdf/renderer";

export function ListItem({ children }: { children?: React.ReactNode }) {
    return (
        <View style={{ flexDirection: "row" }}>
            <View style={{ height: "100%" }}>
                <Text>{"\u2022" + " "}</Text>
            </View>
            <Text style={{ width: "100%" }}>{children}</Text>
        </View>
    );
}
