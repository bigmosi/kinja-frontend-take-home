// @flow
import * as React from 'react'
import styled from 'styled-components'

import type { Kinja$User } from '../api/profile'

import { UserItem } from './User'
import { users } from '../data/users';

type Props = {
    users: Array<Kinja$User>
}

export function OrderList() {

    return (
        <div>
            {
            users.sort((a, b) => a.name.localeCompare(b.name)).map(user => (
               <div>
                 <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.role}</p>
               </div>
            ))}
        </div>
    )
}