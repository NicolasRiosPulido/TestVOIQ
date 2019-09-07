import React from "react";

import { connect } from "react-redux";

import Spinner from "../general/Spinner";
import Error from "../general/Error";

class Tabla extends React.Component {
	ponerFilas = () =>
		this.props.agentesReducer.agenteA.map(cliente => (
			<tr key={cliente.id}>
				<td>{cliente.agent}</td>
				<td>{cliente.name}</td>
				<td>{cliente.zip}</td>
			</tr>
		));
	render() {
		if (this.props.agentesReducer.error) {
			return <Error error={this.props.agentesReducer.error} />;
		}
		if (this.props.agentesReducer.cargando) {
			return <Spinner />;
		}
		return (
			<div className="tablac">
				<table className="Tabla">
					<thead>
						<tr>
							<th>Agent</th>
							<th>Contact Name</th>
							<th>Zip Code</th>
						</tr>
					</thead>
					<tbody>{this.ponerFilas()}</tbody>
				</table>
			</div>
		);
	}
}

const mapStateToProps = ({ agentesReducer }) => {
	return { agentesReducer };
};
export default connect(mapStateToProps)(Tabla);
