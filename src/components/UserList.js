// @flow
import * as React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

import type { Kinja$User } from '../api/profile'

import { UserItem } from './User'

type Props = {
    users: Array<Kinja$User>
}

export function UserList({ users }: Props): Array<React$Element<typeof UserItem>> {
    const [query, setQuery] = React.useState("");

    return (
        <div>
            {users.length}
            <input type="search" value={query} placeholder="Search by role..." onChange={(e) => {setQuery(e.target.value)}} />
            {users.filter((user) => {
                if (query === "") {
                    return user;
                } else if (user.role.toLowerCase().includes(query.toLowerCase())) {
                    return user;
                }
            }).map(user => <UserItem {...user} />)}
        </div>
    )
}