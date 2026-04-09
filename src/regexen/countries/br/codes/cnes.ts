/**
 * Matches a Brazilian CNES (Cadastro Nacional de Estabelecimentos de Saude) code as 7 digits
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '1234567'
 * @example ❌ '123456'
 */
export const cnes = /^\d{7}$/;
