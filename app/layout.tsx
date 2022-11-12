import Globals from "./Globals";

export default function RootLayout({ children }) {
    return (
        <html>
            <head />
            <body>
                <Globals />
                <div className="page-content">
					{children}
				</div>
				<br />
            </body>
        </html>
    );
}
