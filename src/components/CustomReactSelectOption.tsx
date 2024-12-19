import { useEffect } from 'react';
import { components, MenuProps, OptionProps } from 'react-select';

type Props<T> = OptionProps<T, false>;

const CustomReactSelectOption = <T = void>(props: Props<T>) => {
    // useEffect(() => {
    //     console.log('CustomReactSelectOption', props.innerProps);
    // }, []);

    // return <span
    //     ref={props.innerRef}
    //     {...props.innerProps}
    //     onMouseMove={undefined}
    //     onMouseOver={undefined}
    //     className="flex flex-1 w-full h-full hover:bg-gray-100 p-2"
    // >
    //     {/* {JSON.stringify(Object.keys(props), null, 2)} */}
    //     {props.children}
    // </span>

    return (
        <components.Option
            {...props}
            className="hover:bg-black/5"
            data-lpignore="true"
            innerRef={props.innerRef}
            innerProps={{
                ...props.innerProps,
                onMouseMove: undefined,
                onMouseOver: undefined,
            }}
        >
            {props.children}
        </components.Option>
    );
};

export default CustomReactSelectOption;
