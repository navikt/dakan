import ColumnListFilter from '../utils/ColumnListFilter';

describe('Test for filtering column list', () => {
    let testColumnList;

    beforeAll(() => {
        testColumnList = [
            {
                properties: {
                    column_name: 'Age',
                    column_description: 'age age',
                    data_type: 'nUmBer',
                },
            },
            {
                properties: {
                    column_name: 'nAme',
                    column_description: 'firstname lastName',
                    data_type: 'STRING',
                },
            },
            {
                properties: {
                    column_name: 'birthday',
                    column_description: 'date-month-year',
                    data_type: 'date',
                },
            },
            {
                properties: {
                    column_name: 'gender',
                    column_description: 'gender age',
                    data_type: 'string',
                },
            },
        ];
    });

    it('Test if filter is case insensitive', () => {
        const actual = ColumnListFilter(testColumnList, 'NAME');
        const expected = [testColumnList[1]];

        expect(actual).toEqual(expected);
    });

    it('Test if filter checks data type', () => {
        const actual = ColumnListFilter(testColumnList, 'number');
        const expected = [testColumnList[0]];

        expect(actual).toEqual(expected);
    });

    it('Test if filter checks column description', () => {
        const actual = ColumnListFilter(testColumnList, 'date-month-year');
        const expected = [testColumnList[2]];

        expect(actual).toEqual(expected);
    });

    it('Test if filter can handle wrong list format', () => {
        const testColumnListWrongFormat = [
            {
                test: 'test',
                prod: {
                    prop: {
                        test: 'test',
                    },
                },
            },
        ];
        const actual = ColumnListFilter(testColumnListWrongFormat, 'date-month-year');
        const expected = [];

        expect(actual).toEqual(expected);
    });
});
