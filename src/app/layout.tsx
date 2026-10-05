import "./globals.css";
// import all
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({children}: LayoutProps<"/">) {
    return (
        <html lang="en">
            <body className="min-h-full flex flex-col">
                <Navbar />
               <main>
                   {children}
               </main>
                <Footer />
            </body>
        </html>
    );
}
