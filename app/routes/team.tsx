import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import {useRouteData} from 'remix'
import type {LoaderFunction} from 'remix'
import type {LinksFunction} from 'remix'
import styles from '../styles/team.css'

export let links: LinksFunction = () => {
  return [{rel: 'stylesheet', href: styles}]
}

interface Member {
  id: string
  login: string
}

export let loader: LoaderFunction = () => {
  // you can point to whatever org you want, ofc
  return fetch('https://api.github.com/orgs/reacttraining/members')
}

export default function Team() {
  let data = useRouteData<Member[]>()

  if (!data || data.length < 1) return <div>Loading...</div>

  return (
    <div>
      <h2>Team</h2>
      <ul>
        {data?.map(member => (
          <li key={member.id}>
            <Link to={member.login}>{member.login}</Link>
          </li>
        ))}
      </ul>
      <hr />
      <Outlet />
    </div>
  )
}
