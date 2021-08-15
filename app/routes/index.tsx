import type {LinksFunction} from 'remix'
import type {LoaderFunction} from 'remix'
import {useRouteData} from 'remix'

import stylesUrl from '../styles/index.css'

export let links: LinksFunction = () => {
  return [{rel: 'stylesheet', href: stylesUrl}]
}

export let loader: LoaderFunction = async () => {
  return {message: 'this is awesome 😎'}
}

export default function Index() {
  let data = useRouteData()

  return (
    <div style={{textAlign: 'center', padding: 20}}>
      <h2>Welcome to Remix!</h2>
      <p>
        <a href="https://remix.run/dashboard/docs">Check out the docs</a> to get
        started.
      </p>
      <p>Message from the loader: {data.message}</p>
    </div>
  )
}

export function meta() {
  return {
    title: 'Index',
    description: 'View the latest gists from the public',
  }
}
