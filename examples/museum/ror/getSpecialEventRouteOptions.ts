import { ErrorSchema } from '../tbr/schemas_Error.js';
import { SpecialEventSchema } from '../tbr/schemas_SpecialEvent.js';

export const getSpecialEventRouteOptions = {
	url: '/special-events/:eventId',
	method: 'GET',
	operationId: 'getSpecialEvent',
	tags: ['Events'],
	schema: {
		params: { type: 'object', properties: { eventId: { type: 'string', format: 'uuid' } }, required: ['eventId'] },
		response: {
			'200': { content: { 'application/json': { schema: SpecialEventSchema } } },
			'400': { content: { 'application/problem+json': { schema: ErrorSchema } } },
			'404': { content: { 'application/problem+json': { schema: ErrorSchema } } },
		},
	},
};
