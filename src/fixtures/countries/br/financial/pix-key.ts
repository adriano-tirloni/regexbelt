/** Valid PIX EMV payloads containing BCB identifier */
export const validPixKey = {
  /** Standard PIX EMV payload with UUID key */
  standard: '00020126580014br.gov.bcb.pix0136123e4567-e12b-12d1-a456-4266141740006304A13B',
  /** PIX EMV payload with uppercase BCB domain */
  uppercase: '00020126580014BR.GOV.BCB.PIX0136123e4567-e12b-12d1-a456-4266141740006304A13B',
  /** PIX EMV payload with mixed case domain */
  mixedCase: '00020126580014Br.Gov.Bcb.Pix0136123e4567-e12b-12d1-a456-4266141740006304a1b2',
};

/** Invalid PIX EMV payload strings */
export const invalidPixKey = {
  /** Missing BCB domain — uses different provider */
  missingBcbDomain: '00020126580014com.example.pix0136123e45676304A13B',
  /** Missing CRC suffix */
  missingCrc: '00020126580014br.gov.bcb.pix0136123e4567',
  /** Numeric prefix too short */
  shortPrefix: '0002br.gov.bcb.pix6304A13B',
  /** Missing content between domain and CRC */
  emptyPayload: '00020126580014br.gov.bcb.pix6304A13B',
};
