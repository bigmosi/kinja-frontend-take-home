// @flow
import * as React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import './UserList.css';

import type { Kinja$User } from '../api/profile'

import { UserItem } from './User'

type Props = {
    users: Array<Kinja$User>
}

export function UserList({ users }: Props): Array<React$Element<typeof UserItem>> {
    const [query, setQuery] = React.useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(5);

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUser =  users.slice(indexOfFirstUser, indexOfLastUser);

    const paginate = ({selected}) => {
        setCurrentPage(selected + 1);
    }

    return (
        <div>
            {users.length}
            <input type="search" value={query} placeholder="Search by role..." onChange={(e) => {setQuery(e.target.value)}} />
            {currentUser.filter((user) => {
                if (query === "") {
                    return user;
                } else if (user.role.toLowerCase().includes(query.toLowerCase())) {
                    return user;
                }
            }).map(user => <UserItem {...user} />)}
<ReactPaginate
                  onPageChange={paginate}
                  pageCount={Math.ceil(users.length / usersPerPage)}
                  previousLabel={'Prev'}
                  nextLabel={'Next'}
                  containerClassName={'pagination'}
                  pageLinkClassName={'page-number'}
                  previousLinkClassName={'page-number'}
                  nextLinkClassName={'page-number'}
                  activeLinkClassName={'active'}
               />        </div>
    )
}