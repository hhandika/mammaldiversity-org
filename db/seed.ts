import { db, Synonym, Taxonomy } from "astro:db";

// // https://astro.build/db/seed
export default async function seed() {
  await db.insert(Taxonomy).values([
    {
      id: 1000001,
      sciName: "Ornithorhynchus_anatinus",
      mainCommonName: "Platypus",
      otherCommonNames: "Duck-billed Platypus",
      phylosort: 1,
      subclass: "Yinotheria",
      infraclass: "Australosphenida",
      magnorder: "NA",
      superorder: "NA",
      taxonOrder: "Monotremata",
      suborder: "NA",
      infraorder: "NA",
      parvorder: "NA",
      superfamily: "NA",
      family: "Ornithorhynchidae",
      subfamily: "NA",
      tribe: "NA",
      genus: "Ornithorhynchus",
      subgenus: "NA",
      specificEpithet: "anatinus",
      authoritySpeciesAuthor: "G. K. Shaw",
      authoritySpeciesYear: 1799,
      authorityParentheses: 1,
      originalNameCombination: "Platypus anatinus",
      authoritySpeciesCitation:
        "Shaw, G.K. 1799-06. [Fascicle CXVIII]. Pp. pl. 385–pl. 388 in Shaw, G.K. 1798-1799. The Naturalist's Miscellany: or, coloured figures of natural objects; drawn and described immediately from nature. Vol. 10. Nodder, London, not continuously paginated pp.",
      authoritySpeciesLink: "https://www.biodiversitylibrary.org/page/59339864",
      typeVoucher: "BMNH:Mamm:1979.2184",
      typeKind: "holotype",
      typeVoucherURIs:
        "https://data.nhm.ac.uk/object/76a5b996-a277-43e8-8ab0-dd9914731301",
      typeLocality:
        '"In Australasia." Restricted to "New Holland (= Sydney), New South Wales, Australia" or the "coastal region of New South Wales" by numerous authors, although this type locality appears to have been erroneously restricted.',
      typeLocalityLatitude: "",
      typeLocalityLongitude: "",
      nominalNames:
        "anatinus (G. K. Shaw, 1799)|novaehollandiae de Lacépède, 1800|paradoxus Blumenbach, 1800 [nomen novum]|fuscus Péron, 1807|rufus Péron, 1807|brevirostris W. Ogilby, 1832|crispus W. MacGillivray, 1832|laevis W. MacGillivray, 1832|agilis De Vis, 1885|phoxinus O. Thomas, 1923|triton O. Thomas, 1923",
      taxonomyNotes: "NA",
      taxonomyNotesCitation: "NA",
      distributionNotes:
        "E Australia from NE Queensland through W New South Wales and Victoria, including King I and Tasmania. Distribution is primarily continuous within some catchments but dicontinuous or poorly known in others. Extinct in the Adelaide Hills and Mount Lofty Ranges in South Australia and may be extinct in various catchments throughout the rest of their distribution (Hawke et al., 2019). Introduced to E Kangaroo I.",
      distributionNotesCitation:
        "Hawke, T., Bino, G., & Kingsford, R. T. (2019). A silent demise: historical insights into population changes of the iconic platypus (Ornithorhynchus anatinus). Global Ecology and Conservation, 20, e00720.",
      subregionDistribution: "Australia(QLD,NSW,VIC,TAS)",
      countryDistribution: "Australia",
      continentDistribution: "Oceania",
      biogeographicRealm: "Australasia",
      iucnStatus: "NT",
      extinct: "0",
      domestic: 0,
      flagged: 0,
      CMW_sciName: "Ornithorhynchus_anatinus",
      diffSinceCMW: 0,
      MSW3_matchtype: "sciname match",
      MSW3_sciName: "Ornithorhynchus_anatinus",
      diffSinceMSW3: 0,
    },
    {
      id: 1000002,
      sciName: "Tachyglossus_aculeatus",
      mainCommonName: "Short-beaked Echidna",
      otherCommonNames:
        "Australian Echidna|Short-nosed Echidna|Spiny Anteater|Bristly Echidna|Kangaroo Island Echidna",
      phylosort: 1,
      subclass: "Yinotheria",
      infraclass: "Australosphenida",
      magnorder: "NA",
      superorder: "NA",
      taxonOrder: "Monotremata",
      suborder: "NA",
      infraorder: "NA",
      parvorder: "NA",
      superfamily: "NA",
      family: "Tachyglossidae",
      subfamily: "NA",
      tribe: "NA",
      genus: "Tachyglossus",
      subgenus: "NA",
      specificEpithet: "aculeatus",
      authoritySpeciesAuthor: "G. K. Shaw",
      authoritySpeciesYear: 1792,
      authorityParentheses: 1,
      originalNameCombination: "Myrmecophaga aculeata",
      authoritySpeciesCitation:
        "Shaw, G.K. 1792-07. [Fascicle XXXVI]. Pp. pl. 108–pl. 110 in Shaw, G.K. 1791-1792. The Naturalist's Miscellany: or, coloured figures of natural objects; drawn and described immediately from nature. Vol. 3. Nodder, London, not continuously paginated pp.",
      authoritySpeciesLink: "https://www.biodiversitylibrary.org/page/59564684",
      typeVoucher: "",
      typeKind: "",
      typeVoucherURIs: "",
      typeLocality: " “New Holland [= Sydney]”, New South Wales, Australia.",
      typeLocalityLatitude: "",
      typeLocalityLongitude: "",
      nominalNames:
        "aculeatus (G. K. Shaw, 1792)|novaehollandiae (de Lacépède, 1799)|hystrix (Home, 1802) [nomen novum]|histrix (É. Geoffroy Saint-Hilaire, 1803) [preoccupied]|setosus (É. Geoffroy Saint-Hilaire, 1803)|breviaculeatus (Tiedemann, 1808)|longiaculeatus (Tiedemann, 1808) [nomen novum]|myrmecophagus (Goldfuss, 1809)|longirostrus (Perry, 1810)|australiensis (Lesson, 1827)|eracinius (Mudie, 1829)|australis (Lesson, 1838)|histrix (G. R. Waterhouse, 1838) [incorrect subsequent spelling]|brevicaudata (J. E. Gray, 1865) [not used as valid]|corealis (Krefft, 1872)|orientalis (Krefft, 1872)|lawesii E. P. Ramsay, 1877|acanthion (R. Collett, 1885)|typicus (O. Thomas, 1885) [nomen novum]|multiaculeatus (W. Rothschild, 1905)|ineptus O. Thomas, 1906|hobartensis (Kowarzik, 1909) [nomen nudum]|sydneiensis (Kowarzik, 1909) [nomen novum]",
      taxonomyNotes: "NA",
      taxonomyNotesCitation: "NA",
      distributionNotes:
        "Continental Australia, including Tasmania, Groote Eylandt, and Bigge, Mua (Hitchcock et al., 2014), Dunk, Magnetic, Fraser, North Stradbroke, King, Flinders, and Kangaroo Is, and coastal and highland regions of SE and E New Guinea (including Markham Valley), both C and S Papua New Guinea and SE Papua Province, Indonesia.",
      distributionNotesCitation:
        "Hitchcock, G., Conaty, S., Fell, D., Gordon, G., Reis, T., & Stanton, D. (2014). Range extension of the short-beaked echidna Tachyglossus aculeatus (Monotremata: Tachyglossidae) and the northern brown bandicootIsoodon macrourus (Marsupialia: Peramelidae) in Queensland: Mua (Moa Island), Torres Strait. Memoirs of the Queensland Museum, 59, 1-7.",
      subregionDistribution:
        "Australia(SA,TAS,NT,NSW,WA,VIC,ACT,QLD)|Indonesia(PP)",
      countryDistribution: "Australia|Indonesia|Papua New Guinea",
      continentDistribution: "Oceania",
      biogeographicRealm: "Australasia",
      iucnStatus: "LC",
      extinct: 0,
      domestic: 0,
      flagged: 0,
      CMW_sciName: "Tachyglossus_aculeatus",
      diffSinceCMW: 0,
      MSW3_matchtype: "sciname match",
      MSW3_sciName: "Tachyglossus_aculeatus",
      diffSinceMSW3: 0,
    },
  ]);

  await db.insert(Synonym).values([
    {
      synId: 100014422,
      hespId: 2765,
      speciesId: 1000001,
      species: "Ornithorhynchus anatinus",
      rootName: "triton",
      author: "O. Thomas",
      year: 1923,
      authorityParentheses: 0,
      nomenclatureStatus: "available",
      validity: "synonym",
      originalCombination: "Ornithorhynchus anatinus triton",
      originalRank: "subspecies",
      authorityCitation:
        "Thomas, O. 1923-01-01. The Godman Exploration Fund: List of mammals from North Queensland collected by Mr. T. V. Sherrin. Annals and Magazine of Natural History (9)11(61):170-178.",
      uncheckedAuthorityCitation: "NA",
      sourcedUnverifiedCitations: "NA",
      citationGroup: "Annals and Magazine of Natural History",
      citationKind: "electronic",
      authorityPage: "178",
      authorityLink: "https://www.biodiversitylibrary.org/page/34355412",
      authorityPageLink: "https://www.biodiversitylibrary.org/page/34355420",
      uncheckedAuthorityPageLink: "NA",
      oldTypeLocality:
        "the Victorian side of the Murray River, opposite Deniliquin, S.W. New South Wales, Australia.",
      originalTypeLocality:
        "Type from the Victorian side of the Murray River, opposite Deniliquin, S.W. New South Wales.",
      uncheckedTypeLocality:
        '"Victoria side of the Murray River, opposite Deniliquin, South West New South Wales" (Natural History Museum, 2014) | "Victorian side of the Murray River, opposite Deniliquin, SW New South Wales, Australia." (Jackson & Groves, 2015)',
      emendedTypeLocality: "NA",
      typeLatitude: "NA",
      typeLongitude: "NA",
      typeCountry: "Australia",
      typeSubregion: "New South Wales",
      typeSubregion2: "NA",
      holotype: "BMNH:Mamm:1884.5.15.1",
      typeKind: "holotype",
      typeSpecimenLink:
        "https://data.nhm.ac.uk/object/299b7065-52ad-41c9-bcca-9dee8934ccd8",
      taxonOrder: "Monotremata",
      family: "Ornithorhynchidae",
      genus: "Ornithorhynchus",
      specificEpithet: "anatinus",
      subspecificEpithet: "NA",
      variantOf: "NA",
      seniorHomonym: "NA",
      variantNameCitations: "NA",
      nameUsages:
        "Groves (2005) (information at https://hesperomys.com/a/8560)",
      comments: "NA",
    },
    {
      synId: 100014421,
      hespId: 2763,
      speciesId: 1000001,
      species: "Ornithorhynchus anatinus",
      rootName: "phoxinus",
      author: "O. Thomas",
      year: 1923,
      authorityParentheses: 0,
      nomenclatureStatus: "available",
      validity: "synonym",
      originalCombination: "Ornithorhynchus anatinus phoxinus",
      originalRank: "subspecies",
      authorityCitation:
        "Thomas, O. 1923-01-01. The Godman Exploration Fund: List of mammals from North Queensland collected by Mr. T. V. Sherrin. Annals and Magazine of Natural History (9)11(61):170-178.",
      uncheckedAuthorityCitation: "NA",
      sourcedUnverifiedCitations: "NA",
      citationGroup: "Annals and Magazine of Natural History",
      citationKind: "electronic",
      authorityPage: "176",
      authorityLink: "https://www.biodiversitylibrary.org/page/34355412",
      authorityPageLink: "https://www.biodiversitylibrary.org/page/34355418",
      uncheckedAuthorityPageLink: "NA",
      oldTypeLocality:
        "Dinner Creek, Ravenshoe, 2900'[ft], Queensland, Australia.",
      originalTypeLocality: "Dinner Creek, Ravenshoe. 2900'.",
      uncheckedTypeLocality:
        '"Dinner Creek, North Queensland" (Natural History Museum, 2014) | "Dinner Creek, Ravenshoe, Queensland, Australia. 2900 feet." (Jackson & Groves, 2015)',
      emendedTypeLocality: "NA",
      typeLatitude: "NA",
      typeLongitude: "NA",
      typeCountry: "Australia",
      typeSubregion: "Queensland",
      typeSubregion2: "NA",
      holotype: "BMNH:Mamm:1922.12.18.60",
      typeKind: "holotype",
      typeSpecimenLink:
        "https://data.nhm.ac.uk/object/73ccf339-d80d-4a2d-8ac9-d878fbea9f95",
      taxonOrder: "Monotremata",
      family: "Ornithorhynchidae",
      genus: "Ornithorhynchus",
      specificEpithet: "anatinus",
      subspecificEpithet: "NA",
      variantOf: "NA",
      seniorHomonym: "NA",
      variantNameCitations: "NA",
      nameUsages:
        "Groves (2005) (information at https://hesperomys.com/a/8560)",
      comments: "NA",
    },
  ]);
}
