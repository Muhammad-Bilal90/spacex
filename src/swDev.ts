export default function swDev(){
    let swDev = `${process.env.PUBLIC_URL}/sw.ts`
    navigator.serviceWorker.register(swDev).then((result) => {
        console.log('Result', result);
    })
    .catch((error) => {
        console.log('Error', error);
    })
}