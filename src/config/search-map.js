const searchMap = {
    // county names
    'Fairfield County': 'dfc-fairfieldc',
    'Greenville County': 'dfc-greenvillec',
    'Kershaw County': 'dfc-kershawc',
    'Lexington County': 'dfc-lexc',
    'Newberry County': 'dfc-newberryc',
    'Richland County': 'dfc-richlandc',
    'Spartanburg County': 'dfc-spartanburgc',

    // city names
    Ballentine: ['dfc-ballentine', 'dfc-richlandc'],
    Blythewood: ['dfc-blythewood', 'dfc-richlandc'],
    Gadsden: ['dfc-gadsden', 'dfc-richlandc'],
    Cayce: ['dfc-cayce', 'dfc-lexc'],
    Columbia: ['dfc-columbia', 'dfc-richlandc'],
    Hopkins: ['dfc-hopkins', 'dfc-richlandc'],
    'Forest Acres': ['dfc-fa', 'dfc-richlandc'],
    'Arcadia Lakes': ['dfc-al', 'dfc-richlandc'],
    Eastover: ['dfc-eastover', 'dfc-richlandc'],
    'West Columbia': ['dfc-wc', 'dfc-lexc'],
    Lexington: ['dfc-lexington', 'dfc-lexc'],
    'Seven Oaks': ['dfc-so', 'dfc-lexc'],
    'Oak Grove': ['dfc-og', 'dfc-lexc'],
    'Red Bank': ['dfc-rb', 'dfc-lexc'],
    'White Knoll': ['dfc-wk', 'dfc-lexc'],
    Chapin: ['dfc-chapin', 'dfc-lexc'],
    Irmo: ['dfc-irmo', 'dfc-lexc'],
    'Batesburg Leesville': ['dfc-bl', 'dfc-lexc'],
    'State Park': ['dfc-sp', 'dfc-richlandc'],
    'White Rock': ['dfc-wr', 'dfc-richlandc'],
    Pelion: ['dfc-pelion', 'dfc-lexc'],
    Swansea: ['dfc-swansea', 'dfc-lexc'],
    Bethune: ['dfc-bethune', 'dfc-kershawc'],
    Camden: ['dfc-camden', 'dfc-kershawc'],
    Cassatt: ['dfc-cassatt', 'dfc-kershawc'],
    Elgin: ['dfc-elgin', 'dfc-kershawc'],
    'Liberty Hill': ['dfc-lh', 'dfc-kershawc'],
    Lugoff: ['dfc-lugoff', 'dfc-kershawc'],
    Westville: ['dfc-westville', 'dfc-kershawc'],
    Blair: ['dfc-blair', 'dfc-fairfieldc'],
    Jenkinsville: ['dfc-jenkinsville', 'dfc-fairfieldc'],
    Monticello: ['dfc-monticello', 'dfc-fairfieldc'],
    Ridgeway: ['dfc-ridgeway', 'dfc-fairfieldc'],
    Rion: ['dfc-rion', 'dfc-fairfieldc'],
    'White Oak': ['dfc-wo', 'dfc-fairfieldc'],
    Winnsboro: ['dfc-winnsboro', 'dfc-fairfieldc'],
    Chappells: ['dfc-chappells', 'dfc-newberryc'],
    'Little Mountain': ['dfc-lm', 'dfc-newberryc'],
    Newberry: ['dfc-newberry', 'dfc-newberryc'],
    Peak: ['dfc-peak', 'dfc-newberryc'],
    Pomaria: ['dfc-pomaria', 'dfc-newberryc'],
    Prosperity: ['dfc-prosperity', 'dfc-newberryc'],
    Silverstreet: ['dfc-silverstreet', 'dfc-newberryc'],
    Whitmire: ['dfc-whitmire', 'dfc-newberryc'],
    Kinards: ['dfc-kinards', 'dfc-newberryc'],
    Greenville: ['dfc-greenville', 'dfc-greenvillec'],
    Cleveland: ['dfc-cleveland', 'dfc-greenvillec'],
    Conestee: ['dfc-conestee', 'dfc-greenvillec'],
    'Fountain Inn': ['dfc-fi', 'dfc-greenvillec'],
    Greer: ['dfc-greer', 'dfc-greenvillec'],
    Marietta: ['dfc-marietta', 'dfc-greenvillec'],
    Mauldin: ['dfc-mauldin', 'dfc-greenvillec'],
    Piedmont: ['dfc-piedmont', 'dfc-greenvillec'],
    Simpsonville: ['dfc-simpsonville', 'dfc-greenvillec'],
    Slater: ['dfc-slater', 'dfc-greenvillec'],
    Taylors: ['dfc-taylors', 'dfc-greenvillec'],
    Tigerville: ['dfc-tigerville', 'dfc-greenvillec'],
    'Travelers Rest': ['dfc-tr', 'dfc-greenvillec'],
    Spartanburg: ['dfc-spartanburg', 'dfc-spartanburgc'],
    'Boiling Springs': ['dfc-bs', 'dfc-spartanburgc'],
    Arcadia: ['dfc-arcadia', 'dfc-spartanburgc'],
    Campobello: ['dfc-campobello', 'dfc-spartanburgc'],
    Chesnee: ['dfc-chesnee', 'dfc-spartanburgc'],
    Clifton: ['dfc-clifton', 'dfc-spartanburgc'],
    Converse: ['dfc-converse', 'dfc-spartanburgc'],
    Cowpens: ['dfc-cowpens', 'dfc-spartanburgc'],
    'Cross Anchor': ['dfc-ca', 'dfc-spartanburgc'],
    Drayton: ['dfc-drayton', 'dfc-spartanburgc'],
    Duncan: ['dfc-duncan', 'dfc-spartanburgc'],
    Enoree: ['dfc-fairforest', 'dfc-spartanburgc'],
    Fingerville: ['dfc-fingerville', 'dfc-spartanburgc'],
    Glendale: ['dfc-glendale', 'dfc-spartanburgc'],
    Gramling: ['dfc-gramling', 'dfc-spartanburgc'],
    Inman: ['dfc-inman', 'dfc-spartanburgc'],
    Landrum: ['dfc-landrum', 'dfc-spartanburgc'],
    Lyman: ['dfc-lyman', 'dfc-spartanburgc'],
    Mayo: ['dfc-mayo', 'dfc-spartanburgc'],
    Moore: ['dfc-moore', 'dfc-spartanburgc'],
    Pacolet: ['dfc-pacolet', 'dfc-spartanburgc'],
    'Pacolet Mills': ['dfc-pm', 'dfc-spartanburgc'],
    'Glenn Springs': ['dfc-gs', 'dfc-spartanburgc'],
    Pauline: ['dfc-pauline', 'dfc-spartanburgc'],
    Reidville: ['dfc-readville', 'dfc-spartanburgc'],
    Roebuck: ['dfc-roebuck', 'dfc-spartanburgc'],
    Startex: ['dfc-startex', 'dfc-spartanburgc'],
    Una: ['dfc-una', 'dfc-spartanburgc'],
    Wellford: ['dfc-wellford', 'dfc-spartanburgc'],
    'White Stone': ['dfc-ws', 'dfc-spartanburgc'],
    Woodruff: ['dfc-woodruff', 'dfc-spartanburgc'],

    // zipcodes
    29002: ['dfc-ballentine', 'dfc-richlandc'],
    29016: ['dfc-blythewood', 'dfc-richlandc'],
    29052: ['dfc-gadsden', 'dfc-richlandc'],
    29061: ['dfc-hopkins', 'dfc-richlandc'],
    29063: ['dfc-irmo', 'dfc-richlandc'],
    29147: ['dfc-sp', 'dfc-richlandc'],
    29177: ['dfc-wr', 'dfc-richlandc'],
    29201: ['dfc-columbia', 'dfc-richlandc'],
    29202: ['dfc-columbia', 'dfc-richlandc'],
    29203: ['dfc-columbia', 'dfc-richlandc'],
    29204: ['dfc-fa', 'dfc-richlandc'],
    29205: ['dfc-columbia', 'dfc-richlandc'],
    29206: ['dfc-fa', 'dfc-richlandc'],
    29207: ['dfc-columbia', 'dfc-richlandc'],
    29209: ['dfc-columbia', 'dfc-richlandc'],
    29210: ['dfc-columbia', 'dfc-richlandc'],
    29211: ['dfc-columbia', 'dfc-richlandc'],
    29221: ['dfc-columbia', 'dfc-richlandc'],
    29222: ['dfc-columbia', 'dfc-richlandc'],
    29223: ['dfc-columbia', 'dfc-richlandc'],
    29224: ['dfc-columbia', 'dfc-richlandc'],
    29229: ['dfc-columbia', 'dfc-richlandc'],
    29230: ['dfc-columbia', 'dfc-richlandc'],
    29240: ['dfc-columbia', 'dfc-richlandc'],
    29250: ['dfc-columbia', 'dfc-richlandc'],
    29260: ['dfc-columbia', 'dfc-richlandc'],
    29290: ['dfc-columbia', 'dfc-richlandc'],
    29292: ['dfc-columbia', 'dfc-richlandc'],
    29006: ['dfc-bl', 'dfc-lexc'],
    29033: ['dfc-cayce', 'dfc-lexc'],
    29036: ['dfc-chapin', 'dfc-lexc'],
    29053: ['dfc-gaston', 'dfc-lexc'],
    29054: ['dfc-gilbert', 'dfc-lexc'],
    29070: ['dfc-bl', 'dfc-lexc'],
    29071: ['dfc-lexington', 'dfc-lexc'],
    29072: ['dfc-lexington', 'dfc-lexc'],
    29073: ['dfc-lexington', 'dfc-lexc'],
    29123: ['dfc-pelion', 'dfc-lexc'],
    29160: ['dfc-swansea', 'dfc-lexc'],
    29169: ['dfc-wc', 'dfc-lexc'],
    29170: ['dfc-wc', 'dfc-lexc'],
    29171: ['dfc-wc', 'dfc-lexc'],
    29172: ['dfc-wc', 'dfc-lexc'],
    29212: ['dfc-columbia', 'dfc-lexc'],
    29228: ['dfc-columbia', 'dfc-lexc'],
    29009: ['dfc-bethune', 'dfc-kershawc'],
    29020: ['dfc-camden', 'dfc-kershawc'],
    29032: ['dfc-Cassatt', 'dfc-kershawc'],
    29045: ['dfc-Elgin', 'dfc-kershawc'],
    29074: ['dfc-lh', 'dfc-kershawc'],
    29078: ['dfc-lugoff', 'dfc-kershawc'],
    29175: ['dfc-westville', 'dfc-kershawc'],
    29015: ['dfc-blair', 'dfc-fairfieldc'],
    29065: ['dfc-jenkinsville', 'dfc-fairfieldc'],
    29106: ['dfc-monticello', 'dfc-fairfieldc'],
    29130: ['dfc-ridgeway', 'dfc-fairfieldc'],
    29132: ['dfc-rion', 'dfc-fairfieldc'],
    29176: ['dfc-wo', 'dfc-fairfieldc'],
    29180: ['dfc-winnsboro', 'dfc-fairfieldc'],
    29037: ['dfc-chappells', 'dfc-newberryc'],
    29075: ['dfc-lm', 'dfc-newberryc'],
    29108: ['dfc-Newberry', 'dfc-newberryc'],
    29122: ['dfc-peak', 'dfc-newberryc'],
    29126: ['dfc-pomaria', 'dfc-newberryc'],
    29127: ['dfc-prosperity', 'dfc-newberryc'],
    29145: ['dfc-silverstreet', 'dfc-newberryc'],
    29178: ['dfc-whitmire', 'dfc-newberryc'],
    29355: ['dfc-kinards', 'dfc-newberryc'],
    29601: ['dfc-greenville', 'dfc-greenvillec'],
    29602: ['dfc-greenville', 'dfc-greenvillec'],
    29603: ['dfc-greenville', 'dfc-greenvillec'],
    29604: ['dfc-greenville', 'dfc-greenvillec'],
    29605: ['dfc-greenville', 'dfc-greenvillec'],
    29606: ['dfc-greenville', 'dfc-greenvillec'],
    29607: ['dfc-greenville', 'dfc-greenvillec'],
    29608: ['dfc-greenville', 'dfc-greenvillec'],
    29609: ['dfc-greenville', 'dfc-greenvillec'],
    29610: ['dfc-greenville', 'dfc-greenvillec'],
    29611: ['dfc-greenville', 'dfc-greenvillec'],
    29612: ['dfc-greenville', 'dfc-greenvillec'],
    29615: ['dfc-greenville', 'dfc-greenvillec'],
    29616: ['dfc-greenville', 'dfc-greenvillec'],
    29617: ['dfc-greenville', 'dfc-greenvillec'],
    29635: ['dfc-cleveland', 'dfc-greenvillec'],
    29636: ['dfc-conestee', 'dfc-greenvillec'],
    29644: ['dfc-fi', 'dfc-greenvillec'],
    29650: ['dfc-greer', 'dfc-greenvillec'],
    29651: ['dfc-greer', 'dfc-greenvillec'],
    29652: ['dfc-greer', 'dfc-greenvillec'],
    29661: ['dfc-marietta', 'dfc-greenvillec'],
    29662: ['dfc-mauldin', 'dfc-greenvillec'],
    29673: ['dfc-piedmont', 'dfc-greenvillec'],
    29680: ['dfc-simpsonville', 'dfc-greenvillec'],
    29681: ['dfc-simppsonville', 'dfc-greenvillec'],
    29683: ['dfc-slater', 'dfc-greenvillec'],
    29687: ['dfc-taylors', 'dfc-greenvillec'],
    29688: ['dfc-tigerville', 'dfc-greenvillec'],
    29690: ['dfc-tr', 'dfc-greenvillec'],
    29301: ['dfc-spartanburg', 'dfc-spartanburgc'],
    29302: ['dfc-spartanburg', 'dfc-spartanburgc'],
    29303: ['dfc-spartanburg', 'dfc-spartanburgc'],
    29304: ['dfc-spartanburg', 'dfc-spartanburgc'],
    29305: ['dfc-spartanburg', 'dfc-spartanburgc'],
    29306: ['dfc-spartanburg', 'dfc-spartanburgc'],
    29307: ['dfc-spartanburg', 'dfc-spartanburgc'],
    29316: ['dfc-bs', 'dfc-spartanburgc'],
    29318: ['dfc-spartanburg', 'dfc-spartanburgc'],
    29320: ['dfc-arcadia', 'dfc-spartanburgc'],
    29322: ['dfc-campobello', 'dfc-spartanburgc'],
    29323: ['dfc-chesnee', 'dfc-spartanburgc'],
    29324: ['dfc-clifton', 'dfc-spartanburgc'],
    29329: ['dfc-converse', 'dfc-spartanburgc'],
    29330: ['dfc-cowpens', 'dfc-spartanburgc'],
    29331: ['dfc-ca', 'dfc-spartanburgc'],
    29333: ['dfc-drayton', 'dfc-spartanburgc'],
    29334: ['dfc-duncan', 'dfc-spartanburgc'],
    29335: ['dfc-enoree', 'dfc-spartanburgc'],
    29336: ['dfc-fairforest', 'dfc-spartanburgc'],
    29338: ['dfc-fingerville', 'dfc-spartanburgc'],
    29346: ['dfc-glendale', 'dfc-spartanburgc'],
    29348: ['dfc-gramling', 'dfc-spartanburgc'],
    29349: ['dfc-inman', 'dfc-spartanburgc'],
    29356: ['dfc-landrum', 'dfc-spartanburgc'],
    29365: ['dfc-lyman', 'dfc-spartanburgc'],
    29368: ['dfc-mayo', 'dfc-spartanburgc'],
    29369: ['dfc-moore', 'dfc-spartanburgc'],
    29372: ['dfc-pacolet', 'dfc-spartanburgc'],
    29373: ['dfc-pm', 'dfc-spartanburgc'],
    29374: ['dfc-gs', 'dfc-spartanburgc'],
    29375: ['dfc-reidville', 'dfc-spartanburgc'],
    29376: ['dfc-roebuck', 'dfc-spartanburgc'],
    29377: ['dfc-startex', 'dfc-spartanburgc'],
    29378: ['dfc-una', 'dfc-spartanburgc'],
    29385: ['dfc-wellford', 'dfc-spartanburgc'],
    29386: ['dfc-ws', 'dfc-spartanburgc'],
    29388: ['dfc-woodruff', 'dfc-spartanburgc'],
};

export default searchMap;
