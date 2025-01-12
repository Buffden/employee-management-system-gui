import { TableConfig } from "../../models/table";

// TBE later in feature as a feature

export const defaultTableConfig: TableConfig = {
    columns: [
        { key: 'Col1', header: 'col1', sortable: true, type: 'string' },
        { key: 'Col2', header: 'col2', sortable: true, type: 'string' },
        { key: 'Col3', header: 'col3', sortable: false, type: 'string' },
        { key: 'Col4', header: 'col4', sortable: true, type: 'number' },
        { key: 'Col5', header: 'col5', sortable: true, type: 'number' },
    ]
};