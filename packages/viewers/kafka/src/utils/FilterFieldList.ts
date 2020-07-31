const FilterFieldList = (list: any[], filterText: string) => {
  const newList: any = [];
  list
    .filter((item: any) => {
      try {
        return item.properties.field_name
          .toLowerCase()
          .includes(filterText.toLowerCase());
      } catch (error) {
        return false;
      }
    })
    .forEach((searchedItem: any) => {
      newList.push(searchedItem);
    });
  return newList;
};

export default FilterFieldList;
