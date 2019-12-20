export default function({ $axios, redirect }) {

    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status);
        console.error('Erreur axios ' + code);
        if (code == 500) {
            console.log("?")
            redirect('/404')
        }

    })

    $axios.onRequest((config) => {
        config.headers.common['access-token'] = "API-TOKEN"
    })

}