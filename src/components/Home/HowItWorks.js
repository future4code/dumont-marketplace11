import React from 'react'
import styled from 'styled-components'
import choices from '../../img/choices.svg'
import pick from '../../img/pick.svg'
import theOne from '../../img/theOne.svg'


const ImgP = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ContainerElements = styled.div`
    display: flex;
    justify-content: space-around;
`
class HowItWorks extends React.Component {
    render() {
        return (
            <div id={this.props.how}>
                <h1 >Como funciona?</h1>
                <ContainerElements>
                    <ImgP>
                        <img src={pick} />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel molestie erat.
                        Nam luctus ac tellus ut vestibulum. Phasellus lectus libero, congue ac malesuada vitae, pulvinar at velit.</p>
                    </ImgP>
                    <ImgP>
                        <img src={choices} />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel molestie erat.
                        Nam luctus ac tellus ut vestibulum. Phasellus lectus libero, congue ac malesuada vitae, pulvinar at velit.</p>
                    </ImgP>
                    <ImgP>
                        <img src={theOne} />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel molestie erat.
                        Nam luctus ac tellus ut vestibulum. Phasellus lectus libero, congue ac malesuada vitae, pulvinar at velit.</p>
                    </ImgP>
                </ContainerElements>
            </div>

        )
    }
}
export default HowItWorks