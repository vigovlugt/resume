import { PDFViewer } from "@react-pdf/renderer";
import { Resume } from "./resume";
import { registerFonts } from "./fonts";
registerFonts();

function App() {
    return (
        <PDFViewer
            style={{
                width: "100%",
                height: "100%",
                border: 0,
                margin: 0,
                padding: 0,
            }}
        >
            <Resume />
        </PDFViewer>
    );
}

export default App;
