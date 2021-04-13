import tw, { css, theme } from 'twin.macro';
import { StyledButtonProps } from '.';

const padding = (props: StyledButtonProps) => {
  const defaultPadding = props.tertiary ? theme`spacing.3` : theme`spacing.5`;
  if (props.loading && !props.icon) {
    /** if button is loading, and button doesnt have icon, we want to make the padding smaller to avoid button width to change */
    /**            defaultPadding  -       icon size      +  icon right margin   / 2 */
    return `calc(${defaultPadding} - (${theme`spacing.4`} + ${theme`spacing.2`}) / 2)`;
  }
  return defaultPadding;
};

export const buttonStyle = css<StyledButtonProps>`
  ${tw`
    flex
    font-bold
    items-center
    justify-center
    leading-none
    rounded
    text-base

    focus:outline-none
    focus:shadow-outline

    disabled:cursor-not-allowed
  `}

  height: ${props => (props.tertiary ? 34 : 46)}px;
  padding: 0 ${props => padding(props)};
  width: fit-content;

  svg {
    ${tw`mr-2`}
    width: ${theme`spacing.4`};
    height: ${theme`spacing.4`};
  }

  .loader svg {
    stroke: currentColor;
  }

  /** Loading styles */
  ${props =>
    props.loading &&
    `
    opacity: 0.5;
  `}

  /** Primary styles */
  ${props =>
    props.primary &&
    tw`
    bg-primary-2
    text-white

    hover:bg-secondary-1
    disabled:bg-gray-3
    disabled:text-gray-7
  `}
  ${props =>
    props.loading &&
    props.primary &&
    tw`
    disabled:bg-primary-2
    disabled:text-white
  `}

  /** Secondary styles */
  ${props =>
    props.secondary &&
    tw`
    bg-white
    border-2
    border-primary-2
    text-primary-2

    hover:border-secondary-1
    hover:text-secondary-1

    disabled:border-gray-3
    disabled:text-gray-7
  `}
  ${props =>
    props.loading &&
    props.secondary &&
    tw`
    disabled:border-primary-2
    disabled:text-primary-2
  `}

  /** Tertiary styles */
  ${props =>
    props.tertiary &&
    tw`
    font-normal
    m-1
    text-sm
    text-primary-2

    hover:bg-gray-3
    hover:text-secondary-1

    disabled:bg-transparent
    disabled:text-gray-7
  `}
  ${props =>
    props.loading &&
    props.tertiary &&
    tw`
    disabled:text-primary-2
  `}
`;
