import styled from 'styled-components';
import {Picture} from "./Picture.tsx";
import {Title} from "./Title.tsx";
import {Description} from "./Description.tsx";
import {BlockWithButtons} from "./BlockWithButtons.tsx";

type Props = {
    src: string;
    alt: string;
    title: string;
    description: string;
    buttonNameForSolid: string;
    buttonNameForOutlined: string;
};

export function Card({src, alt, title, description, buttonNameForOutlined, buttonNameForSolid}: Props) {
    return (
        <CardStyle>
            <Picture src={src} alt={alt}/>

            <Content>
                <Title title={title}/>
                <Description description={description}/>
                <BlockWithButtons buttonNameForSolid={buttonNameForSolid}
                                  buttonNameForOutlined={buttonNameForOutlined}
                                  description={description}/>
            </Content>

        </CardStyle>
    );
};

const Content = styled.article`
    padding-left: 10px;

    display: flex;
    flex-direction: column;
    row-gap: 20px;

`;
const CardStyle = styled.article`
    width: 300px;
    height: 350px;

    overflow: hidden;

    display: flex;
    flex-direction: column;
    row-gap: 20px;

    padding: 10px;

    border-radius: 15px;
    background-color: #FFFFFF;

    box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);

    &:hover {
        transform: scale(1.03);
        box-shadow: 0 8px 30px 8px rgba(78, 113, 254, 0.25); /* лёгкое свечение синим */
    }
`;