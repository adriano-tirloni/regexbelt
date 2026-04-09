/**
 * Matches a Brazilian PIX EMV payload containing the BCB identifier
 * (br.gov.bcb.pix) with numeric prefix and CRC suffix
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '00020126580014br.gov.bcb.pix0136123e4567-e12b-12d1-a456-4266141740006304A13B'
 * @example ❌ '00020126580014com.example.pix0136123e45676304A13B'
 */
export const pixKey =
  /^\d{14,20}[Bb][Rr]\.[Gg][Oo][Vv]\.[Bb][Cc][Bb]\.[Pp][Ii][Xx].+6304[\dA-Fa-f]{4}$/;
