// Make sure sw are supported
export default function swDev() {

    let swUrl = `${process.env.PUBLIC_URL}/serviceWorker.js`
    navigator.serviceWorker.register(swUrl).then((result) => console.log(result))
  
}