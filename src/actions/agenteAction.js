import axios from "axios";

import {
	TRAER_AGENTE,
	CARGANDO,
	ERROR,
	NUM_AGENTES
} from "../types/agentes_type";

export const traerAgente = (agenteA, agenteB) => async dispatch => {
	dispatch({ type: CARGANDO });

	try {
		const respuesta = await axios.post(
			`http://registro.taxtek.co/zip_code/core.php?service=get_clients&agent_zip_code_1=${agenteA}&agent_zip_code_2=${agenteB}`
		);
		dispatch({
			type: TRAER_AGENTE,
			payload: respuesta.data.info
		});
		dispatch({
			type: NUM_AGENTES,
			payload: {
				agete1: respuesta.data.agent_clients_count_1,
				agete2: respuesta.data.agent_clients_count_2
			}
		});
	} catch (error) {
		dispatch({
			type: ERROR,
			payload: "Error 404 por favor intente mas tarde"
		});
	}
};
