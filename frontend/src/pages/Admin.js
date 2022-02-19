import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import AdminMenu from '../components/AdminMenu'
import AccountMenu from '../components/AccountMenu'

const Admin = () => {
    const accessToken = useSelector((store) => store.user.accessToken)

    const navigate = useNavigate()


    useEffect(() => {
        if (!accessToken) {
            navigate('/login')
        }
    }, [accessToken, navigate])

    return (
        <Wrapper>
            <AccountMenuContainer>
                <AccountMenu />
            </AccountMenuContainer>
            <AdminMenu />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const AccountMenuContainer = styled.div`
    display: flex;
    justify-content: center;
`

export default Admin