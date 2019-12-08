export default function({ $axios, redirect }) {
  $axios.onError(error => {
    redirect('/404')
  })
}
