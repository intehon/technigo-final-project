import React from 'react'
import styled from 'styled-components'


const Chambre = () => {
    return (     
        <Wrapper>
                <TextContainer>
                    <h4>Chambre Séparée</h4>
                    <p>During evenings our former furniture store is transformed into a gastronomic fairy tale room at Mosebacke Torg! This spectacular room is designed by Uglycute and connected to Woodstockholm Bistro through a secret passage. All furnishings are handmade and specifically designed for the room. Woodstockholm’s separate dining room offers a tasting menu of 7-8 dishes, prepared by your designated chef for the evening and accompanied by the wines our sommerlier choose for you. Groups of up to 14 people can book the room. Welcome to a unique experience!</p>
                    <p>Inquiries/bookings: <Link href="reservations@woodstockholm.com">reservations@woodstockholm.com</Link></p>
                </TextContainer>
            </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    @media (min-width: 576px) {
    width: 576px;
     }
    @media (min-width: 768px) {
    width: 768px;
    }
`

const TextContainer = styled.div`
    padding: 8px;
    letter-spacing: 1px;
`

const Link = styled.a`
    color: #c91c81;
    text-decoration: none;
    &:hover {
        color: #e40086;
    }
`

export default Chambre