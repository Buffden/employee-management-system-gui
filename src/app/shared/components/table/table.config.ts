import { overlayType } from "../../models/dialog";
import { ColumnType, TableConfig,  } from "../../models/table";

// TBE later in feature as a feature

export const defaultTableConfig: TableConfig = {
    tableTitle: 'Default Table Title',
    viewController: overlayType.NODATA,
    additionController: overlayType.NODATA,
    editController: overlayType.NODATA,
    detailsCardTitle: '',
    additionCardTitle: '',
    editCardTitle: '',
    columns: [
        { key: 'Col1', header: 'col1', sortable: true, type: ColumnType.TEXT },
        { key: 'Col2', header: 'col2', sortable: true, type: ColumnType.TEXT },
        { key: 'Col3', header: 'col3', sortable: false, type: ColumnType.TEXT },
        { key: 'Col4', header: 'col4', sortable: true, type: ColumnType.NUMBER },
        { key: 'Col5', header: 'col5', sortable: true, type: ColumnType.NUMBER },
    ]
};