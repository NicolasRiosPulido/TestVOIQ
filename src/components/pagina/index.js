import React from "react";
import "../../css/pagina.css";
import * as agenteAction from "../../actions/agenteAction";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Tabla from "./Tabla";
import Grafica from "./Grafica";

const { traerAgente } = agenteAction;

class ComponentePrincipal extends React.Component {
	constructor(props) {
		super(props);
		this.state = { ag1: "0", ag2: "0", numa: 0, numb: 0 };
	}
	SubmitHandler = async event => {
		event.preventDefault();
		let agenteA = document.getElementById("agenteA").value;
		let agenteB = document.getElementById("agenteB").value;
		await this.props.traerAgente(agenteA, agenteB);
		let ag1P = (parseInt(this.props.agentesReducer.numAgent.agete1) / 10) * 100;
		let ag2P = (parseInt(this.props.agentesReducer.numAgent.agete2) / 10) * 100;
		this.setState({
			ag1: `${ag1P}`,
			ag2: `${ag2P}`,
			numa: this.props.agentesReducer.numAgent.agete1,
			numb: this.props.agentesReducer.numAgent.agete2
		});
	};
	manegoCambios = event => {
		let valor = event.currentTarget.value;
		if (valor.length > 1) {
			event.preventDefault();
		}
	};
	render() {
		return (
			<div className="pagina">
				<div className="form">
					<Form onSubmit={this.SubmitHandler}>
						<div className="contenedorAgentes">
							<Form.Group controlId="agenteA">
								<Form.Label>Agent 1:</Form.Label>
								<Form.Control
									type="text"
									required
									onKeyPress={this.manegoCambios}
									placeholder="Enter the first two digits of the postal code"
								/>
							</Form.Group>
							<Form.Group controlId="agenteB">
								<Form.Label>Agent 2:</Form.Label>
								<Form.Control
									type="text"
									required
									onKeyPress={this.manegoCambios}
									placeholder="Enter the first two digits of the postal code"
								/>
							</Form.Group>
						</div>
						<Button
							variant="success"
							type="submit"
							size="lg"
							block
							style={{ marginTop: 30 }}
						>
							MATCH
						</Button>
					</Form>
				</div>
				<Tabla />
				<Grafica
					agentA={`${this.state.ag1}%`}
					agentB={`${this.state.ag2}%`}
					numA={this.state.numa}
					numB={this.state.numb}
				/>
			</div>
		);
	}
}

const mapStateToProps = ({ agentesReducer }) => {
	return { agentesReducer };
};
const mapDispatchToProps = {
	traerAgente
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ComponentePrincipal);
