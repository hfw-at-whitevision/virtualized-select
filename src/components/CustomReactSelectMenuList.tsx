import { MenuListProps } from 'react-select';

type Props<T> = MenuListProps<T, false>;

const CustomReactSelectMenuList = <T = void>(props: Props<T>) => {
    return props.children;
};

export default CustomReactSelectMenuList;
