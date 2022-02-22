import LocalizedStrings, { LocalizedStringsMethods } from "localized-strings";
import fi from "./fi.json";

/**
 * Localized strings
 */
export interface Localized extends LocalizedStringsMethods {

  /**
   * App title translation
   */
  appTitle: string;

  /**
   * Translations related to generic words
   */
  generic: {
    cancel: string;
    delete: string;
    edit: string;
    logout: string;
    notImplemented: string;
    save: string;
  };

  /**
   * Translations related to error handling
   */
  errorHandling: {
    title: string;
  };

  /**
   * Translations related to navigation
   */
  header: {
    overview: string;
    deliveries: string;
    contracts: string;
    news: string;
    databank: string;
    help: string;
    account: string;
  };
}

/**
 * Initialized localized strings
 */
const strings: Localized = new LocalizedStrings({ fi: fi });

export default strings;