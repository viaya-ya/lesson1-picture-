import styled from 'styled-components';

type Props = {
    description: string;
};

export function Description({description}: Props) {
    return (
        <Des>
            {description}
        </Des>
    );
};

const Des = styled.p`
    width: 100%;
    height: 40px; 

    display: -webkit-box;              /* включаем flex-поведение для текста */
    -webkit-box-orient: vertical;      /* направление колонками */
    -webkit-line-clamp: 2;             /* показываем максимум 2 строки */

    overflow: hidden;                 
    text-overflow: ellipsis;           

    font-size: 12px;
    font-weight: 500;
    
    line-height: 20px;
    
    color: rgba(171, 179, 186, 1);
`;
