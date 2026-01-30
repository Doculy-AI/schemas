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
export const lodesSchema: JSONSchema7;
export const schoolsSchema: JSONSchema7;
export const spreadsheetSchema: JSONSchema7;
export const geopackageSchema: JSONSchema7;
export const geodatabaseSchema: JSONSchema7;
export const amenitySchema: JSONSchema7;
export const osmSchema: JSONSchema7;
export const crexiSchema: JSONSchema7;
export const dataAxleSchema: JSONSchema7;
export const nppesSchema: JSONSchema7;
export const foodAccessSchema: JSONSchema7;

// Helper to generate placeholder YAML from schema
export function generatePlaceholderYaml(schema: JSONSchema7): string;
