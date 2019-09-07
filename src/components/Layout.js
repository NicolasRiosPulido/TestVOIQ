import React from "react";

import Header from "./general/Header";
import Footer from "./general/Footer";

function Layout(props) {
	return (
		<div className="cuerpo">
			<Header />
			<div className="contenido">{props.children}</div>
			<Footer />
		</div>
	);
}

export default Layout;
