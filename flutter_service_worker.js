'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js": "017938a22dfb85e454d461a17309e6b7",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.json": "521c645ebcd0858422f546814ff3ff57",
"assets/outputs/gif/mobile.gif": "201990cae68f3d8d16a35a22500ab358",
"assets/outputs/gif/desktop.gif": "52e4daec50892bd8b4da1d3f4dfa1f05",
"assets/assets/svg/guy.svg": "384b0cd380b8ce087e170fe5b3dc7f6b",
"assets/assets/svg/person.svg": "00abbb5ba3e0acac159c8a7a664b7750",
"assets/assets/images/technology/flutter.png": "47e4c5ea380dc3b9241ee7b4f8b65c20",
"assets/assets/images/technology/swift.png": "6740f74615e8d2b6558d7d31fc7edb1e",
"assets/assets/images/technology/scenekit.jpeg": "dab8749c82628f14b8e5865b6a852cc3",
"assets/assets/images/technology/python.png": "6606c48fbf49fc629449aa11170b8c1c",
"assets/assets/images/technology/javascript.png": "2e5de0a7d635b437db088d43f847d39c",
"assets/assets/images/technology/c++.png": "8949bfc86fc10ef1505994eb643e940b",
"assets/assets/images/technology/razorpay.png": "368b761622d88029de7be2aadff6b7d3",
"assets/assets/images/technology/php.png": "b187e3b1985b0aa738093d97ce028ab6",
"assets/assets/images/technology/firebase.png": "d139ba1e59d9bcc1ed86617547dd51ee",
"assets/assets/images/technology/flask.png": "8615243e0ddaab150399cf0eca65a5ff",
"assets/assets/images/social/medium.png": "276ae11521896bd9a529e02aad79ff71",
"assets/assets/images/social/linkedin-logo.png": "95e6c045dd5f8ea3ed14fc2de308d115",
"assets/assets/images/social/instagram.png": "db9e28760b4c72ee51d5c2c7b0772823",
"assets/assets/images/social/github.png": "46fd5ca3c4a5cbcad97fd9b11d845f48",
"assets/assets/images/social/email.png": "7a97194d3c075caa1a2f2fb89f793d4e",
"assets/assets/images/blog.png": "383501168390c3833d9c81843c33d566",
"assets/assets/images/develop.png": "723c47f15273f7013cacb03032b547c2",
"assets/assets/images/projects/5.jpeg": "99aa5e4c06f65c1d5ad86c9db51e57bd",
"assets/assets/images/projects/6.jpeg": "563048f821e840ebdbc7000e9c6b834a",
"assets/assets/images/projects/3.jpeg": "c9f588e4843b5cf7c6e614b4a17ee46c",
"assets/assets/images/projects/7.png": "b097bb748c0e7496f6a298d57097b1c2",
"assets/assets/images/projects/2.jpeg": "8d95c6eb176a94d08d65b66cb5fab03e",
"assets/assets/images/projects/8.png": "11a55df0433d11236c3f22fa6af1492d",
"assets/assets/images/projects/1.jpeg": "323240fb1b1bf14fa7b4ed4d28abbca4",
"assets/assets/images/projects/4.jpeg": "cce4265499da546fa4f19dafda74a277",
"assets/assets/images/learn.png": "7827c9e2366da4aaeec20a4342b76953",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "895127e0f1b5ab9bac0024f4a6e26917",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/fonts/MaterialIcons-Regular.otf": "d3dc1729f4cf4e213bfb2526516c8559",
"assets/NOTICES": "46ecbeb3ff16061fc0820a91b133b596",
"assets/AssetManifest.bin.json": "cb8e14266e9e56ab49518038a50e52ba",
"assets/AssetManifest.bin": "eadb4f937eb7b786aa65d8b680ccfc8e",
".git/logs/HEAD": "1c1ae79e8d531b871f4cf1f9eff941c7",
".git/logs/refs/heads/main": "1c1ae79e8d531b871f4cf1f9eff941c7",
".git/logs/refs/remotes/origin/main": "19f651f19962c3793e5d0eb8c7332253",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/56/19e930a8ec28c1cda6e027b4d4c0aad4e3a97e": "d2088b1dc73a40561667c5538d1ecf76",
".git/objects/59/3526c00b2772374a1667b84da2b451aed60309": "dbc210caf214d13f70d4ce90e0392adf",
".git/objects/59/8b85290acdf086fec115a3e08543f93cbb3f44": "457466e0e7b460bd2a4162b3870af5de",
".git/objects/84/56187555acae425b359ebed6986681de6e5103": "b552cf5461b79e7179e60bba13af0887",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/66/f145a0e170795cc87abecb7b8f519b29d508d6": "2f3aea726da0a1f570f8697ff0504e38",
".git/objects/f0/12db336820d28b542a643e868a7573225a83cb": "d94f0a8f23812a9c84087768ea65a5d1",
".git/objects/fa/0db75cec7c6bd9848cd73bb1a38a4c6451213e": "b48ab3d514a6d21ddc116afe9a48fef9",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/2a/a53490ed2f89f464a9afc61b978143de48d1b8": "565e6f4aee75d3cd87b9482b5b43c4a7",
".git/objects/ff/498f7f50c252a6e2318bf0e3e3f1a808c482ba": "897e7e1426013b0385a028e53e079b77",
".git/objects/ff/66b6d0816027dd8cdbcca173517e1ec5646229": "2861d15fea982c56dd160bd964e266ed",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/05/b00e53394086d7786daa39508480ec904e6359": "a7e216e03e99053f257f0b863734fa3e",
".git/objects/79/9a0753b7f5050126532477109181ff303d5b2e": "8d4895e29420021c244182e787e663ff",
".git/objects/d2/1951bd8620c1216d8287f4a896112034a168ae": "653cf59384735e56ce502468d463557b",
".git/objects/10/c2f1a421fdb9d2848f11df70652de2bb564c41": "fb09a985eb66c46fe26c3e5c8e84cc1e",
".git/objects/6e/d50c5ee26130b527169c7c5843bdb45eba5be2": "a89c2e42e3ef228d259f63951c00bb27",
".git/objects/f9/ec6cfdeaa1574e102f9a4042b52008ebdab25a": "179ac8b43e1a507181c98bd795540559",
".git/objects/fc/87c084cf90b4379cdf60714306d805e51fe314": "f2d962024ccacf5ce40c782f9ed0da5f",
".git/objects/2b/b32940209e2f70a9ee67e64656ecc1ae2909f9": "5ffc91dc62da7de65e8cd80e08f9bbe7",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/1b/ab5df1dbb1fd04fdf38d5f6bac1a5429fc0d7f": "8a72e58d44d30e740397d1c2097bdd68",
".git/objects/69/4bbd6b140949af8eb78928ee44859e1c87642f": "d831ed0b0848c1d1e3574622aed1c0ba",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/96/8b6278b57bff24a35327c119690632bd591440": "8918c19de5249f36f8681e61bc2c109a",
".git/objects/a2/9196d44e38cddb250876b124263d4dae31f15e": "7ef27627d6cf1a3f45117cf7591657d7",
".git/objects/ea/cb34726bc9202eff4d2ae15786ea6351cc3f89": "c8236a888d291277f8559c9b6fafb1e1",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/75/10509a900ccd6d95dcc4f8ed8400258b8f677e": "50e32c3680266d7d1ffc6a58fb3df078",
".git/objects/e6/dd6315ab3f43ae9cb3185f7cea413f63d5cc57": "e9614cde43eb8f0ae2d0213340fa1b53",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/1e/b04d053a75a780a6eac05cca8134198a2542c5": "d799727e64cadd484cda1bd263891ab4",
".git/objects/73/5c0778e9c58c5b015e40b8f4101a612809a58b": "a81683b0ce1ce7d8e1141443633b7ac5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/df/44d2d17a2599216bf473b4411ead9515749739": "08f7e4e34dbfd0e487039f48bccbd475",
".git/objects/d1/a14509fa2a4c23dfa1e6191c16b0f2573f7994": "af38b1e8c89ea66ad8d87088c757ef6f",
".git/objects/28/69664e9a04614c21c1629a9617583371796ff1": "ffbd23777f344b930742c357cd7bce8a",
".git/objects/6f/3f8c5643c6e7767eb52c23457a7777deca4392": "0d039ee3a0b51dde19ef07ad9bcc5e09",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/e2/6d9f229cc601eb4ce015ebf5b0752e54f5d445": "81083116610090ade216b6205b5f29e6",
".git/objects/5e/42c3617da86606dcce2b6ece3b5f06a552d4f7": "5f1c0366715299bfe29033d9c857e1ef",
".git/objects/0e/063d42575b1bc0c5fffe67f7c76f0fe1d749a3": "645340836facf1c50b7fc5dbed40fe95",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/5b/5c54f1a14dd62c99c103ec06904fc6c79a153d": "3a9a2435b7090514e1a4b634a723c812",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/7b/d78dff16448d5d5b1a3a9c19b37770a69cfa42": "30a5898c93fdca8ff7c926dc7fb28fa3",
".git/objects/7f/57e75b31bea9e3c4b2fe49865816a940436754": "337ee080671c8d0918d2214e6fa14d7e",
".git/objects/7f/d8e6e9d1908077057036340a46428425e2fe47": "aca04c187d8d288c091d37d780f60f26",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d3/d87a98fe916b5ae3cb4e3fffd3ca8a78d0a6d8": "5f86d8c754cf4ddd7dac9741fe9bd0e5",
".git/objects/a4/fd6dae3344ebd2da5848e89c3bb0a40231c4f0": "6b42497e954fc7206240aa5f140d4d5d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/54/6a017a1300a172cdcb87939fcf9c70c23dbf1d": "fc187e11de572a198ec08e1ab1ad0abe",
".git/objects/b4/7ab2c1566ed1ed042e896876fdf1749dd1facf": "f3febea7f54ca8e06c88bd9104d42a02",
".git/objects/f4/eaefaf7b26631339afba18ec96cf5d5fcd051e": "bbe6f7343564d184e643e013dfa33461",
".git/objects/8f/191c036d61f8ba0fd618093d88870151b28d77": "9ebf5783991e695f22b9efd2bda00342",
".git/objects/f1/4ea961115b8d98509991ecc3010181a7c85cb1": "03b3a6aecfa68223ccba6f334ecb7fd2",
".git/objects/40/0c2e401c127d1ef09bc979ecb5a321b9cfed27": "515af0364fe21cf75ab67de46a177125",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/ab/abb0deaaf71a54f8001da1a414cc8124d6869c": "11b47a74207123ccc8b395570c817cbf",
".git/objects/eb/a953d129fe2605f94d8fa026954606f3cc84ae": "a4db739ad30a182b891311746e6184a4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/1c/c5584fc4593068c69657fe110f8dff2bda6236": "c2618374afac860a9ab45d5144315000",
".git/objects/26/d1dc924afbeb6a2594b149166e33a7dc572b1e": "d3cd18a6077e6e7d072824ed48478c48",
".git/objects/e3/7baafd24a324a502b15e78f008d53d3ed3b3c3": "6e6fcfb0537ffacc7538a6f429978c74",
".git/objects/dc/930ca3cce47227c3e0d6f1ad501d7d88b65677": "1967a5e172d153517769744ae7a4291e",
".git/objects/60/670959b3ea2b3dae3b3052199dd024257d5208": "f6d0a357786d5a942ab29c5a45cfe690",
".git/objects/21/2d0ad933c96ada41013096af4db49931ef6f02": "27e54044668afdf6195cf52531a8a195",
".git/objects/89/e5a62511e721eb85c6414ada9eee99c30cd5b0": "770b1f4ff942336d579ed0d9deb2be8e",
".git/objects/ac/cf7a0c834ea2372fae39360f7870745b89e9d2": "8d0eb37909fc8631d595104d16284a62",
".git/objects/33/52a8c7dadd0657b54272e0c4befe7506c65a0d": "04abaab5bd0cc7b86e9b492dd91eb3fe",
".git/objects/8b/57635d1c80c14d63397191b5fb990eaffdea83": "b404786ef71c45e3731ba7507563d80a",
".git/objects/8b/80c332f781f7b09abc5c7a57a8257a21f8795b": "bdb805691f945fed606b896acf5f78e4",
".git/objects/8b/d5c1508b092fba33a0968f23795907a4010852": "2dfe35cc2d24400399dabe2948f3e421",
".git/objects/16/14d9b8352b2a31c2836e961e59c018193ac6d0": "cb7407006e2cf0f4e566bf00c1a3ecc7",
".git/objects/30/cfcfa29ab1e113a9356e0026d9c83b8a577e0e": "27d0526383e9ac113cd5bb8073c2a251",
".git/objects/95/e0ef2afdd2977e180365de1e6198bc86474b94": "060113a860a61f664ca9b61161a6b07a",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/f7/c81b4a058c95b4f5fa2d67fc62973b4f789f6c": "dfa32ce2450bb3fae31727ce5219655d",
".git/objects/b8/4753824530efc7a4577aceb7959cf770840f16": "cc50c11c0ece3870ff2c43f8485680c0",
".git/objects/94/471771dd7d111feb8115797776d8a6d02812fe": "55eebb5dff252c0348a739d101a03f73",
".git/objects/80/e07e74d4aa056fc080a04c8fb8d42cd9b64250": "b27e751dfc2ffd99250c2dfeb3b4bf87",
".git/objects/9e/bf2e7255d84ba946aec42305e7e2e629eb0e79": "8933ead2fdf01e20714d28736e5b5eac",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/a3/51099c8a76c5827650b95769134a190a84995f": "4cd8bd79f7545dd1f1d1777db966b8cb",
".git/objects/52/3428f2bb674ef0057eaa4755ba1e41ffe572d1": "f83f35c7b869c56e8b31c95ed5a9e10f",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/52/6bd5d3e3d05a7654baa069ea52b1b5ff69f817": "727998df55d735ec4e2c352f1b3399c5",
".git/objects/52/c47d8fe8f7e462763878d68d4af66a5960e1bf": "8cbee84d48223fcdfb4235da065d45c5",
".git/objects/bc/e293bbc5a4df8bea5ce0e5c2f016e6dc6a22a5": "d667ddd45e76e3070679d730521277c2",
".git/objects/ce/10fe6c53c686337d6a5e2769475fcc8517a7cb": "0c88201d58a6248136dea1b61947afd9",
".git/objects/0a/30ea4636967b3c3c78fabdc1d52eef3b4b857e": "26dbec9df260680b6dbf72355bba2d97",
".git/objects/76/df332c1e9758967119ea795f473684fb6bbcfc": "bfa296f6229f3c80c550e6c89defce10",
".git/objects/36/2da60a92c235f1b0dba27fcc541c32c3049339": "4fdc7288aad8c2c6a5ca218e1b29a81d",
".git/objects/c0/2c485600021f32bb3b2c636a0a8880907bcc22": "abfc0a14c4bf884ef74f967e1a92ba60",
".git/objects/9f/795beec83650dc1b34112743289c6a549a1b61": "5d9ca24f5b6a9e55a5c9fddc29f240a8",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/17/5b96f41048ee497bcde2678d0021f5c5c89adf": "2a1a7c6cb6d3e39b7a95d114f8790120",
".git/objects/2e/de00db2db8c8e2e511b107725e79bbd5f8cf48": "49e1b7858cc34e6468c1a80dcb86dc08",
".git/objects/e4/043f2b65c2cfb0632543ac09aa0af1bfd63636": "a90641795b27b715dfea21fd866afee5",
".git/objects/fe/e5cd112838a1a6891c1bfc162a44692119126a": "24d9f7b22da7f840396c2b7ae1179a47",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/ca6b2d2735a832763b82887a9866c2cd531a75": "77201e366037db58a41d2c4d599c0812",
".git/objects/23/f55af15abda0feddcdecd3afc398cec793957f": "5a09852bc189628a3e2e12e964f9740e",
".git/objects/23/85658d4589c07d9049061cc793716d71e9da1a": "d580917309c9a364c747cf324587b0e2",
".git/objects/5c/2f41c735e7a663b7a5b2072eda3307190b3b5a": "99f2e65bf5b2a502bc15747026311092",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/refs/heads/main": "a0858582981216ee52630fcd01fb4c54",
".git/refs/remotes/origin/main": "a0858582981216ee52630fcd01fb4c54",
".git/index": "9befd11a98b77123eb04906f6b067158",
".git/config": "63c614d6a10b4dad53aab1fc7897cf57",
".git/COMMIT_EDITMSG": "c9e7b8bfda47eb241e784556a588379c",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "22f89010599e88f26d016eac13c97dc6",
"flutter_bootstrap.js": "7cb228a222c3e9bd6f84caef3fc28726",
"index.html": "de21465f1706cb9e7f8b9c0dfdfe44e8",
"/": "de21465f1706cb9e7f8b9c0dfdfe44e8",
"version.json": "9b818ca9511483c901bed1545384376c",
"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
