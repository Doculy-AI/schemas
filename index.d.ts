import type { JSONSchema7 } from 'json-schema';

// Common schemas
export const baseSchema: JSONSchema7;
export const stateSchema: JSONSchema7;
export const bufferDistanceSchema: JSONSchema7;

// Importer schemas map
export const importerSchemas: Record<string, JSONSchema7>;

// Individual importer schemas
export const censusSchema: JSONSchema7;
export const arcgisSchema: JSONSchema7;
export const transitSchema: JSONSchema7;
