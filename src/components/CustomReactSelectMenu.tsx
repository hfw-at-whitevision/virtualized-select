import { components, MenuProps } from 'react-select';

type Props<T> = MenuProps<T, false>;

const CustomReactSelectMenu = <T = void>(props: Props<T>) => {
    // return props.children;
    return (
        <components.Menu data-lpignore="true" {...props}>
            {props.children}
        </components.Menu>
    );
};

export default CustomReactSelectMenu;
