import React, { useState } from 'react';
import { useMountedState } from 'react-use';
import styled, { StyledComponentProps } from 'styled-components';

import { buttonStyle } from './styles';

export interface StyledButtonProps {
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}

export type ButtonProps<
  C extends string | React.ComponentType
> = StyledComponentProps<C, any, StyledButtonProps, never> & {
  onClick?: React.DOMAttributes<C>['onClick'];
  id?: string;
  as?: C;
  children?: React.ReactNode;
};

export const StyledButton = styled.button
  .withConfig({
    shouldForwardProp: prop =>
      !['primary', 'secondary', 'tertiary', 'loading'].includes(prop),
  })
  .attrs<StyledButtonProps>(props => {
    const iconToDisplay =
      (props.loading && <div>loader</div>) || props.icon;
    const children = (
      <>
        {iconToDisplay}
        {props.children}
      </>
    );
    return {
      disabled: props.disabled || props.loading,
      children,
    };
  })`
  ${buttonStyle}
`;

export const Button = <C extends string | React.ComponentType = 'button'>({
  onClick,
  ...props
}: ButtonProps<C>): React.ReactElement => {
  const isMounted = useMountedState();
  const [loading, setLoading] = useState(false);
  const handleClick = async (event: React.MouseEvent<C, MouseEvent>) => {
    // Global config to disable button until `onClick` function resolved
    if (onClick) {
      setLoading(true);
      try {
        await onClick(event);
      } finally {
        if (isMounted()) {
          setLoading(false);
        }
      }
    }
  };
  return (
    <StyledButton
      {...props}
      onClick={handleClick}
      loading={loading || props.loading}
    />
  );
};
