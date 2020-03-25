import styled, { css } from 'styled-components';

export default styled('p')`
    ${({ size }) => size && css`
    font-size: ${size}px;
    `};
    ${({ color }) => color && css`
    color: ${color};
    `};
    ${({ weight }) => weight && css`
    font-weight: ${weight};
    `};
    font-family: 'Oxygen', sans-serif;
`;




