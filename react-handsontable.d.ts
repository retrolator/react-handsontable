/**
 * Created by reverse engineering https://github.com/handsontable/react-handsontable/blob/master/src/
 */

import * as React from 'react';
import Handsontable from 'handsontable'
//// <reference types="handsontable" />


declare class HotTable extends React.Component<HotTableProps /*Handsontable.Options*/, any>
{
    hotInstance:Handsontable;
    updateHot(newSettings:Handsontable.Options);
}

declare interface HotTableProps extends Handsontable.Options/*, React.HTMLProps<HotTable>*/ {
    /**
     * id of the div where the hotInstance will use as a container. If it's not specified, div will be created with autogenerated Id
     * https://github.com/handsontable/react-handsontable/blob/master/src/react-handsontable.jsx
     * 
     * @type {string}
     * @memberof HotTableProps
     */
    root?: string;
    settings?: Handsontable.Options;
    [key: string]: any;
}

export default HotTable;
