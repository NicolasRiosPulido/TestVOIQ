import {
	TRAER_AGENTE,
	NUM_AGENTES,
	CARGANDO,
	ERROR
} from "../types/agentes_type";

const INITIAL_STATE = {
	agenteA: [],
	numAgent: {},
	cargando: false,
	error: ""
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TRAER_AGENTE:
			return {
				...state,
				agenteA: action.payload,
				cargando: false,
				error: ""
			};
		case NUM_AGENTES:
			return {
				...state,
				numAgent: action.payload,
				cargando: false,
				error: ""
			};
		case CARGANDO:
			return {
				...state,
				cargando: true
			};

		case ERROR:
			return {
				...state,
				cargando: false,
				error: action.payload
			};
		default:
			return state;
	}
};
