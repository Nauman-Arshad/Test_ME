/* eslint-disable no-undef */

// This file would be appended to `sw.js` in build bundle
// Please check https://www.gatsbyjs.org/packages/gatsby-plugin-offline/ for more info

const requestNotificationPermission = async () => {
  const permission = await Notification.requestPermission()
  // value of permission can be 'granted', 'default', 'denied'
  if (permission !== "granted") {
    throw new Error("Permission not granted for Notification")
  }
}

// function registerServiceWorker() {
//   if ("serviceWorker" in navigator) {
//     navigator.serviceWorker
//       .register("/src/service-worker.ts")
//       .then(registration => {
//         console.log(
//           `Service Worker registration complete, scope: '${registration.scope}'`
//         )
//         requestNotificationPermission().then(r => console.log(r))
//       })
//       .catch(error =>
//         console.log(`Service Worker registration failed with error: '${error}'`)
//       )
//   } else {
//     console.log("service worker is not supported")
//   }
// }

// registerServiceWorker()

self.addEventListener("install", function() {
  console.log("Install!")
})

self.addEventListener("activate", function() {
  console.log("Activate!")
})

self.addEventListener("fetch", function(event) {
  console.log("Fetch!", event)
})

self.addEventListener("push", function(event) {
  console.log("Push!", event)
  requestNotificationPermission().then(() => {
    self.registration.showNotification("push notification works!")
  })
})
