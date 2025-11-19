import styled from 'styled-components';

type Props = {
    description: string;
    buttonNameForSolid: string;
    buttonNameForOutlined: string;
};

export function BlockWithButtons({description, buttonNameForSolid, buttonNameForOutlined}: Props) {

    const handleClickButton = (description: string) => {
        alert(description);
    }
    return (
        <div style={{
            display: 'flex',
            columnGap: "12px"
        }}>
            {/*<input aria-placeholder={"ввод текста"}/>*/}
            <Button solid onClick={() => handleClickButton(description)}>{buttonNameForSolid}</Button>
            <Button onClick={() => handleClickButton("Save")}>{buttonNameForOutlined}</Button>
        </div>
    )
        ;
};

const Button = styled.button<{ solid?: boolean }>`
    border: ${props => props.solid ? '2px solid rgba(78, 113, 254, 1)' : '2px solid rgba(78, 113, 254, 1)'};
    background-color: ${props => props.solid ? 'rgba(78, 113, 254, 1)' : 'rgba(255, 255, 255, 1)'};
    color: ${props => props.solid ? 'rgba(255, 255, 255, 1)' : 'rgba(78, 113, 254, 1)'};

    width: 86px;
    height: 30px;
    border-radius: 5px;

    font-size: 10px;
    font-weight: 700;

    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background-color: ${props => props.solid ? 'rgba(255, 255, 255, 1)' : 'rgba(78, 113, 254, 1)'};
        color: ${props => props.solid ? 'rgba(78, 113, 254, 1)' : 'rgba(255, 255, 255, 1)'};
        transform: scale(1.05);
    }
`;


