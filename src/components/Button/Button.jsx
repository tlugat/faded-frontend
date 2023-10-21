import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Text from '@components/Text';
import { Button as AriaButton } from 'react-aria-components';

const Button = ({ children, startIcon, endIcon, isLoading, ...props }) => {
    const isDisabled = props.isDisabled || isLoading;
    return (
        <ButtonStyled {...props} isDisabled={isDisabled}>
            {startIcon}
            {children && <ButtonText as="span">{children}</ButtonText>}
            {endIcon}
            {/* TODO: Add loading icon */}
        </ButtonStyled>
    );
};

const sizes = {
    medium: css`
        padding: calc(0.625rem - 1px) calc(1rem - 1px);
    `,
    mediumIcon: css`
        padding: calc(0.625rem - 1px);
    `,
    small: css`
        padding: calc(0.375rem - 1px) calc(0.75rem - 1px);
    `,
    smallIcon: css`
        padding: calc(0.375rem - 1px);
    `,
};

const variantLookup = {
    primary: css`
        background-color: var(--primary);
        color: var(--white);
    `,
    secondary: css`
        background-color: transparent;
        color: var(--primary);
        border: 1px solid var(--primary);
    `,
    ghost: css`
        background: none;
        border: 1px solid transparent;
    `,
};
const ButtonText = styled(Text)`
    color: inherit;
    font-weight: inherit;
`;
const ButtonStyled = styled(AriaButton)`
    display: flex;
    column-gap: 0.5rem;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    cursor: pointer;
    text-decoration: none;
    border: 1px solid transparent;
    background-color: var(${(props) => props.backgroundColor});
    color: var(${(props) => props.color});
    border-radius: var(--r-s);
    transition-duration: 200ms;
    transition-property: opacity, background-color, color;
    font-weight: var(--fw-semibold);

    ${(props) => sizes[props.size]}
    ${(props) => variantLookup[props.variant]}

    &[data-disabled] {
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
    }
`;

Button.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'full', 'smallIcon', 'mediumIcon']),
    startIcon: PropTypes.node,
    endIcon: PropTypes.node,
    variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
    children: PropTypes.node,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    isDisabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    color: '--white',
    backgroundColor: '--primary',
    variant: 'primary',
    size: 'medium',
};

export default Button;
