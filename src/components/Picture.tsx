import styled from 'styled-components';

type Props = {
    src: string;
    alt: string;
};

export function Picture({ src, alt }: Props) {
    return <CardStyle src={src} alt={alt} />;
}

const CardStyle = styled.img`
    width: 100%;
    max-width: 280px;
    
    height: auto;
    max-height: 170px;
   
    border-radius: 10px;
    object-fit: cover;
`;

