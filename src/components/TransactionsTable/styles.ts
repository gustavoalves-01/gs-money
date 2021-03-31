import styled from "styled-components";

export const Container = styled.div`
    margin-top: 3rem;

    table {
        width: 100%;
        border-spacing: 0.2rem 0.5rem;

        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td{
            padding: 1rem 2rem;
            border: 0;
            background: #424242;
            color: var(--text-body);
            border-radius: 2rem;

            &:first-child {
                font-weight: 500;
                color: var(--text-title);
            }

            &.deposit {
                background-color: var(--green);
                color: #FFF;
            }

            &.withdraw {
                background-color: var(--red);
                color: #FFF;
            }
        }



    }
`;