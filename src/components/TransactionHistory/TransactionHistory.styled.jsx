import styled from '@emotion/styled';

const Table = styled.table`
    position: absolute;
    top: 0;
    left: 50%;
    background-color: #ffffff;
    table-layout: fixed;
    width: 300px;
    border-collapse: collapse;
    box-shadow: 1px 1px 4px #565656;
    opacity: 0;
    visibility: none;
    pointer-events: none;
    transform: translate(-50%, -50%) scale(0);

    th,
    td {
        padding: 10px;
        height: 20px;
    }
`;

const Thead = styled.thead`
    th {
        text-align: left;
        color: #fff;
        background-color: #706d97;

        &:last-child {
            text-align: right;
        }
    }
`;

const Tbody = styled.tbody`
    tr:nth-child(odd) {
        background-color: #eee;
    }

    td {
        min-width: 250px;
        color: #696969;
        border-bottom: 1px solid #eee;

        &:first-child {
            width: 150px;
            min-width: 0;
        }

        &:last-child {
            width: 80px;
            min-width: 0;
            text-align: right;
        }
    }
`;

export { Table, Thead, Tbody };
