import styled from '@emotion/styled';

const Section = styled.section`
    position: absolute;
    top: 0;
    left: 50%;
    background-color: #ffffff;
    margin: 50px auto;
    width: 300px;
    box-shadow: 1px 1px 4px #565656;
    border-radius: 16px;
    overflow: hidden;
    height: fit-content;
    opacity: 0;
    visibility: none;
    pointer-events: none;
    transform: translate(-50%, -50%) scale(0);
`;

const SectionTitle = styled.h2`
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    color: #2e2e2e;
`;

const StatsList = styled.ul`
    display: flex;
`;

const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    width: calc(100% / 5);
    text-align: center;
    padding: 5px;
    font-size: 20px;
    ${statsBackgroundColor}
`;

const StatsText = styled.span`
    filter: invert(1);
`;

function statsBackgroundColor({ id }) {
    const color = getRandomHexColor();

    return `
                background-color: ${color}; 
                color: ${color};
        `;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

export { Section, SectionTitle, StatsList, StatsItem, StatsText };
