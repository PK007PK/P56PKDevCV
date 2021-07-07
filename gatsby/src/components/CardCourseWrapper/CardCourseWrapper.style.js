import styled from 'styled-components';

export const CardCourseWrapperStyles = styled.div`
    margin-top: var(--spacingMedium);

    & > *:not(:last-child) {
        margin-bottom: var(--spacingRegular);
    }
`;
