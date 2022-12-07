// @flow
import * as React from 'react'
import styled from 'styled-components'

import type { Kinja$User } from '../api/profile'

import { UserItem } from './User'

type Props = {
    users: Array<Kinja$User>
}

export function UserOrder({ users }: Props): Array<React$Element<typeof UserItem>> {

    return (
        <div>
            {users.map(user => <UserItem {...user} />)}
        </div>
    )
}