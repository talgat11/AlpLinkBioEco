// import { InMemoryDbService } from 'angular-in-memory-web-api';
// import {Articles} from './articles';
//
// export class InMemoryDataService implements InMemoryDbService {
//   createDb() {
//     const articles = [
//     {
//         "numElement": "437",
//         "numInstitute": null,
//         "datePost": "2018-06-06 14:53:42",
//         "title": "\u00e9v\u00e9nements avec accents \u00e0 testerff",
//         "text": "<p>te<\/p>",
//         "image": null,
//         "date": null,
//         "link": null,
//         "numCategory": "5",
//         "resume": "<p>tes<\/p>",
//         "important": "0",
//         "activate": "1",
//         "pdf": null,
//         "journal": null,
//         "category": "Events",
//         "institute": null,
//         "institutes": [
//             "CSALP",
//             "HIT",
//             "PICC",
//             "Plastipolis"
//         ]
//     },
//     {
//         "numElement": "438",
//         "numInstitute": null,
//         "datePost": "2018-04-25 10:28:36",
//         "title": "Test2",
//         "text": "<p>gfdgdf<\/p>",
//         "image": "http:\/\/interreg.humantech.institute\/images\/5UO3i8yIkFkZvSoGSeyAz9QcwucsSLzYFn2YwAGQ.png",
//         "date": null,
//         "link": "https:\/\/www.fdsk.ch",
//         "numCategory": "5",
//         "resume": "<p>gffdgdfg<\/p>",
//         "important": "0",
//         "activate": "1",
//         "pdf": null,
//         "journal": "gg",
//         "category": "Events",
//         "institute": null,
//         "institutes": [
//             "CABW",
//             "CCB",
//             "CSALP",
//             "LGCA",
//             "TZH"
//         ]
//     },
//     {
//         "numElement": "439",
//         "numInstitute": null,
//         "datePost": "2018-04-25 10:27:23",
//         "title": "Test",
//         "text": "<p>fds<\/p>",
//         "image": "http:\/\/interreg.humantech.institute\/images\/pUF8XOKTzzH2cYqn6TLFWDMUma7NUJhjDXrAMbul.png",
//         "date": null,
//         "link": null,
//         "numCategory": "1",
//         "resume": "<p>fds<\/p>",
//         "important": "0",
//         "activate": "1",
//         "pdf": null,
//         "journal": null,
//         "category": "Results",
//         "institute": null,
//         "institutes": [
//             "CABW",
//             "CSALP"
//         ]
//     }
//     ];
//     return {articles};
//   }
//
//   genId(articles: Articles[]): number {
//     return articles.length > 0 ? Math.max(...articles.map(articles => articles.numElement)) + 1 : 1;
//   }
//
// }
