import { AutoSizer, CellMeasurer, CellMeasurerCache, List, ListRowRenderer } from 'react-virtualized';
import { MenuListProps } from 'react-select';
import { useMemo } from 'react';

type Props<T> = MenuListProps<T, false>;

const rowHeight = 30;

const VirtualizedSelectMenuList = <T = void>(props: Props<T>) => {
    const { options, maxHeight, getValue, children } = props;
    const [selectedOption] = getValue();
    const initialIndex = options.findIndex((option) => option?.value === selectedOption?.value);

    const cellCache = useMemo(() => {
        return new CellMeasurerCache({
            fixedWidth: true,
            defaultHeight: rowHeight,
        })
    }, [])

    const rowRenderer: ListRowRenderer = ({ index, key, style, parent }) => {
        return (
            <CellMeasurer cache={cellCache} key={key} columnIndex={0} rowIndex={index} parent={parent}>
                <div key={key} style={style}>
                    {Array.isArray(children) ? children[index] : children}
                </div>
            </CellMeasurer>
        );
    };

    return (
        <AutoSizer disableHeight>
            {({ width }) => (
                <List
                    width={width}
                    height={maxHeight}
                    deferredMeasurementCache={cellCache}
                    rowRenderer={rowRenderer}
                    rowCount={Array.isArray(children) ? children.length : 1}
                    rowHeight={cellCache.rowHeight}
                    overscanRowCount={10}
                    scrollToIndex={initialIndex}
                    {...props}
                />
            )}
        </AutoSizer>
    );
};

export default VirtualizedSelectMenuList;
