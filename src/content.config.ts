// import { defineCollection, z } from "astro:content";
// import { file } from "astro/loaders";

// const taxonomy = defineCollection({
//   loader: file("src/data/mdd.json", {
//     parser: (text) => JSON.parse(text).data,
//   }),
//   schema: z.object({
//     id: z.number(),
//     sciName: z.string(),
//     mainCommonName: z.string(),
//     otherCommonNames: z.string(),
//     phylosort: z.number(),
//     subclass: z.string(),
//     infraclass: z.string(),
//     magnorder: z.string(),
//     superorder: z.string(),
//     taxonOrder: z.string(),
//     suborder: z.string(),
//     infraorder: z.string(),
//     parvorder: z.string(),
//     superfamily: z.string(),
//     family: z.string(),
//     subfamily: z.string(),
//     tribe: z.string(),
//     genus: z.string(),
//     subgenus: z.string(),
//     specificEpithet: z.string(),
//     authoritySpeciesAuthor: z.string(),
//     authoritySpeciesYear: z.number(),
//     authorityParentheses: z.number(),
//     originalNameCombination: z.string(),
//     authoritySpeciesCitation: z.string(),
//     authoritySpeciesLink: z.string(),
//     typeVoucher: z.string(),
//     typeKind: z.string(),
//     typeVoucherURIs: z.string(),
//     typeLocality: z.string(),
//     typeLocalityLatitude: z.string(),
//     typeLocalityLongitude: z.string(),
//     nominalNames: z.string(),
//     taxonomyNotes: z.string(),
//     taxonomyNotesCitation: z.string(),
//     distributionNotes: z.string(),
//     distributionNotesCitation: z.string(),
//     subregionDistribution: z.string(),
//     countryDistribution: z.string(),
//     continentDistribution: z.string(),
//     biogeographicRealm: z.string(),
//     iucnStatus: z.string(),
//     extinct: z.number(),
//     domestic: z.number(),
//     flagged: z.number(),
//     CMW_sciName: z.string(),
//     diffSinceCMW: z.number(),
//     MSW3_matchtype: z.string(),
//     MSW3_sciName: z.string(),
//     diffSinceMSW3: z.number(),
//   }),
// });

// const synonyms = defineCollection({
//   loader: file("src/data/mdd.json", {
//     parser: (text) => JSON.parse(text).synonyms,
//   }),
//   schema: z.object({
//     synId: z.number(),
//     hespId: z.number(),
//     speciesId: z.number(),
//     species: z.string(),
//     rootName: z.string(),
//     author: z.string(),
//     year: z.number(),
//     authorityParentheses: z.number(),
//     nomenclatureStatus: z.string(),
//     validity: z.string(),
//     originalCombination: z.string(),
//     originalRank: z.string(),
//     authorityCitation: z.string(),
//     uncheckedAuthorityCitation: z.string(),
//     sourcedUnverifiedCitations: z.string(),
//     citationGroup: z.string(),
//     citationKind: z.string(),
//     authorityPage: z.string(),
//     authorityLink: z.string(),
//     authorityPageLink: z.string(),
//     uncheckedAuthorityPageLink: z.string(),
//     oldTypeLocality: z.string(),
//     originalTypeLocality: z.string(),
//     uncheckedTypeLocality: z.string(),
//     emendedTypeLocality: z.string(),
//     typeLatitude: z.string(),
//     typeLongitude: z.string(),
//     typeCountry: z.string(),
//     typeSubregion: z.string(),
//     typeSubregion2: z.string(),
//     holotype: z.string(),
//     typeKind: z.string(),
//     typeSpecimenLink: z.string(),
//     taxonOrder: z.string(),
//     family: z.string(),
//     genus: z.string(),
//     specificEpithet: z.string(),
//     subspecificEpithet: z.string(),
//     variantOf: z.string(),
//     seniorHomonym: z.string(),
//     variantNameCitations: z.string(),
//     nameUsages: z.string(),
//     comments: z.string(),
//   }),
// });

// export const collections = { taxonomy, synonyms };
