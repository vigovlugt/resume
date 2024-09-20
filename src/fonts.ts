import { Font } from "@react-pdf/renderer";

function getUrl(file: string) {
    return import.meta.env ? `/fonts/${file}` : `./public/fonts/${file}`;
}

export function registerFonts() {
    Font.register({
        family: "Latin Modern Roman",
        fonts: [
            {
                src: getUrl("lmroman10-regular.otf"),
            },
            {
                src: getUrl("lmroman10-bold.otf"),
                fontWeight: "bold",
            },
            {
                src: getUrl("lmroman10-italic.otf"),
                fontStyle: "italic",
            },
        ],
    });

    Font.register({
        family: "Consolas",
        fonts: [
            {
                src: getUrl("consolas.otf"),
            },
        ],
    });
}
