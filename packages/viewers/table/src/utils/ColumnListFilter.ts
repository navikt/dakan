const ColumnListFilter = (list: any[], filterText: any) => {
    const newList: any = [];
    list.filter((item: any) => {
        try {
            return (
                item.properties.column_name.toLowerCase().includes(filterText.toLowerCase()) ||
                item.properties.data_type.toLowerCase().includes(filterText.toLowerCase()) ||
                item.properties.column_description.toLowerCase().includes(filterText.toLowerCase())
            );
        } catch {
            return false;
        }
    }).forEach((searchedItems: any) => {
        newList.push(searchedItems);
    });
    return newList;
};
export default ColumnListFilter;
