import { components, InputProps } from 'react-select';

type Props<T> = InputProps<T, false>;

const CustomReactSelectInput = <T = void>(props: Props<T>) => {
    return (
        <components.Input data-lpignore="true" {...props} />
    );
};

export default CustomReactSelectInput;
