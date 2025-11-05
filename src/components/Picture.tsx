import styled from 'styled-components';

type Props = {
    src: string;
    alt: string;
};

export function Picture({ src, alt }: Props) {
    return <CardStyle src={src} alt={alt} />;
}

const CardStyle = styled.img`
    width: 280px;
    height: 170px;
    
    max-width: 280px;
    min-width: 280px;
    
    max-height: 170px;
    min-height: 170px;

    border-radius: 10px;
`;
