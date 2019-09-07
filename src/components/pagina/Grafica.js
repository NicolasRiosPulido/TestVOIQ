import React from "react";

function Grafica(props) {
	return (
		<div className="graficac">
			<div className="contenedorGrafica">
				<div className="contenedorBarras">
					<div className="agente1" style={{ height: `${props.agentA}` }}>
						<h4 className="numAgente">{props.numA}</h4>
					</div>
					<div className="agente2" style={{ height: `${props.agentB}` }}>
						<h4 className="numAgente">{props.numB}</h4>
					</div>
				</div>
				<div className="titulos">
					<h4>Agent 1</h4>
					<h4>Agent 2</h4>
				</div>
			</div>
		</div>
	);
}

export default Grafica;
