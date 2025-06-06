import { type Static, Type } from '@sinclair/typebox';

export const PetBodySchema = Type.Object({
	id: Type.Optional(Type.Number({ format: 'int64' })),
	name: Type.String(),
	category: Type.Optional(
		Type.Object({ id: Type.Optional(Type.Number({ format: 'int64' })), name: Type.Optional(Type.String()) }),
	),
	photoUrls: Type.Array(Type.String()),
	tags: Type.Optional(
		Type.Array(
			Type.Object({ id: Type.Optional(Type.Number({ format: 'int64' })), name: Type.Optional(Type.String()) }),
		),
	),
	status: Type.Optional(Type.Union([Type.Literal('available'), Type.Literal('pending'), Type.Literal('sold')])),
	nullableValue: Type.Optional(Type.String({ nullable: true })),
});
export type PetBody = Static<typeof PetBodySchema>;
