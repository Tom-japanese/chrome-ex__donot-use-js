/* ==================================================

==================================================  */
// data = {
//   'primaryUrl': 'http://*',
//   setting: 'block'
// };

// chrome.contentSettings.javascript.get(data, function(state) {
//   console.log(state);
// });

// chrome.contentSettings.javascript.set(data, function(state) {
//   console.log(state);
// });
// ブラウザのjavascriptのstateを取得できる
chrome.contentSettings.javascript.get({
  primaryUrl: 'https://*/*"' //---Not working '<all_urls>' or 'https://*/*"'
}, function (details) {
  console.log(details)
});
// ブラウザのjavascriptの値を変更できる
chrome.contentSettings.javascript.set({
  'primaryPattern': '<all_urls>',
  'setting': 'allow'
}, function (details) {
  console.log(details)
});


