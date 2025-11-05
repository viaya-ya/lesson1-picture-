import styled from 'styled-components';

type Props = {
    title: string;
};

export function Title({title}: Props) {
    return (
       <Name>
           {title}
       </Name>
    );
};

const Name = styled.h3`
    height: 20px;
    width: 100%;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    
    font-size:16px;
    font-weight:700;
    
    color: #000000;
`