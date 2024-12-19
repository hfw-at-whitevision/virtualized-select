import Select from 'react-select'
import CustomReactSelectInput from './CustomReactSelectInput';
import CustomReactSelectMenu from './CustomReactSelectMenu';
import CustomReactSelectOption from './CustomReactSelectOption';
import CustomReactSelectMenuList from './CustomReactSelectMenuList';
import VirtualizedSelectMenuList from './VirtualizedReactSelectMenuList';

export default function DocumentLookupField(props) {
    return (
        <Select
            isClearable
            components={{
                Input: CustomReactSelectInput,
                Menu: CustomReactSelectMenu,
                MenuList: VirtualizedSelectMenuList,
                Option: CustomReactSelectOption,
            }}
            {...props}
        />
    );
}