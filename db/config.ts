import { defineDb, defineTable, column } from 'astro:db';

const Taxonomy = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    phylosort: column.number(),
    subclass: column.text(),
    infraclass: column.text(),
    magnorder: column.text(),
    superorder: column.text(),
    taxonOrder: column.text(),
    suborder: column.text(),
    infraorder: column.text(),
    parvorder: column.text(),
    superfamily: column.text(),
    family: column.text(),
    subfamily: column.text(),
    tribe: column.text(),
    genus: column.text(),
    subgenus: column.text(),
    specificEpithet: column.text(),
    sciName: column.text(),
    authoritySpeciesAuthor: column.text(),
    authoritySpeciesYear: column.number(),
    authorityParentheses: column.number(),
    mainCommonName: column.text(),
    otherCommonNames: column.text(),
    originalNameCombination: column.text(),
    authoritySpeciesCitation: column.text(),
    authoritySpeciesLink: column.text(),
    typeVoucher: column.text(),
    typeKind: column.text(),
    typeVoucherURIs: column.text(),
    typeLocality: column.text(),
    typeLocalityLatitude: column.text(),
    typeLocalityLongitude: column.text(),
    nominalNames: column.text(),
    taxonomyNotes: column.text(),
    taxonomyNotesCitation: column.text(),
    distributionNotes: column.text(),
    distributionNotesCitation: column.text(),
    subregionDistribution: column.text(),
    countryDistribution: column.text(),
    continentDistribution: column.text(),
    biogeographicRealm: column.text(),
    iucnStatus: column.text(),
    extinct: column.text(),
    domestic: column.text(),
    flagged: column.text(),
    CMW_sciName: column.text(),
    diffSinceCMW: column.text(),
    MSW3_matchtype: column.text(),
    MSW3_sciName: column.text(),
    diffSinceMSW3: column.text()
  }
});

const Synonym = defineTable({
  columns: {
    synId: column.number(),
    hespId: column.number(),
    speciesId: column.number(),
    species: column.text(),
    rootName: column.text(),
    author: column.text(),
    year: column.text(),
    authorityParentheses: column.number(),
    nomenclatureStatus: column.text(),
    validity: column.text(),
    originalCombination: column.text(),
    originalRank: column.text(),
    authorityCitation: column.text(),
    uncheckedAuthorityCitation: column.text(),
    sourcedUnverifiedCitations: column.text(),
    citationGroup: column.text(),
    citationKind: column.text(),
    authorityPage: column.text(),
    authorityLink: column.text(),
    authorityPageLink: column.text(),
    uncheckedAuthorityPageLink: column.text(),
    oldTypeLocality: column.text(),
    originalTypeLocality: column.text(),
    uncheckedTypeLocality: column.text(),
    emendedTypeLocality: column.text(),
    typeLatitude: column.text(),
    typeLongitude: column.text(),
    typeCountry: column.text(),
    typeSubregion: column.text(),
    typeSubregion2: column.text(),
    holotype: column.text(),
    typeKind: column.text(),
    typeSpecimenLink: column.text(),
    taxonOrder: column.text(),
    family: column.text(),
    genus: column.text(),
    specificEpithet: column.text(),
    subspecificEpithet: column.text(),
    variantOf: column.text(),
    seniorHomonym: column.text(),
    variantNameCitations: column.text(),
    nameUsages: column.text(),
    comments: column.text()
  }
});

// https://astro.build/db/config
export default defineDb({
  tables: {Taxonomy, Synonym},
});