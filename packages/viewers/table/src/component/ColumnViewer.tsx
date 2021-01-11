import * as React from 'react';
import {Block} from 'baseui/block';
import {Table} from 'baseui/table-semantic';
import {LabeledContent, Tagging, GetValue, CapitalizeString} from '@dakan/ui';
import {LabelLarge, LabelMedium} from 'baseui/typography';
import {useStyletron} from 'baseui';
import env from '@beam-australia/react-env';

import ToggleDetails from './ToggleDetails';
import {useNodeEdges} from '@dakan/hooks';

const server = env('SERVER');

const ColumnViewer = (prop: any) => {
    const {columnData, tagOptions, isEditMode} = prop;

    const [tags, loading, error, setTags] = useNodeEdges(columnData.id, 'hasColumnTag');

    const [, theme] = useStyletron();

    if (error) {
        console.log(error);
    }

    const getData = () => {
        const items = [
            {item: 'data_type', label: 'Type'},
            {item: 'sens', label: 'Personopplysninger'},
        ];

        return items.map((entry: any, index: number) => {
            let value = GetValue(() => columnData.properties[entry.item])
            if (entry.label === 'Personopplysninger'){
                if(value === 0) {
                    value = 'False'
                } else if (value === 1) {
                    value = 'True'
                } else {
                    value = 'Ikke vurdert'
                }
            }

            return (
                <Block key={`item_${index}`} top="relative">
                    <LabeledContent description={entry.label} list>
                        {CapitalizeString(value)}
                    </LabeledContent>
                </Block>
            );
        });
    };

    const isDataEmpty = (list: any) => {
        const listLength = list.length
        let numberOfEmptyData = 0
        list.forEach((data: any) => {
            if (data[1] === "Ingen data"){
                numberOfEmptyData += 1 
            }
        })
        if (listLength === numberOfEmptyData) return true 
        else {
            return false
        }
    }


    const getDataQuality = () => {
        let items = [
            ['Antall rader', GetValue(() => columnData.properties.standard_metrics.standard_rows)],
            ['Antall null-verdier', GetValue(() => columnData.properties.standard_metrics.standard_nulls)],
            [
                'Andel null-verdier (%)',
                GetValue(() => columnData.properties.standard_metrics.standard_nulls_pct.toFixed(2)),
            ],
            ['Antall unike verdier', GetValue(() => columnData.properties.standard_metrics.standard_unique)],
            [
                'Andel unike verdier (%)',
                GetValue(() => columnData.properties.standard_metrics.standard_unique_pct.toFixed(2)),
            ],
        ];

        return (
            <Block>
                <Table
                    columns={['Beskrivelse', 'Verdi']}
                    data={items}
                    overrides={{TableHeadCell: {style: {display: 'none'}}}}
                />
            </Block>
        );
    };

    const getNumberMetrics = () => {
        let quantileMetrics = [
            ['Minimumsverdi', GetValue(() => columnData.properties.number_metrics.num_min.toFixed(2))],
            ['5 prosentil', GetValue(() => columnData.properties.number_metrics.num_p5.toFixed(2))],
            ['25 prosentil', GetValue(() => columnData.properties.number_metrics.num_p25.toFixed(2))],
            ['Median', GetValue(() => columnData.properties.number_metrics.num_median.toFixed(2))],
            ['75 prosentil', GetValue(() => columnData.properties.number_metrics.num_p75.toFixed(2))],
            ['95 prosentil', GetValue(() => columnData.properties.number_metrics.num_p95.toFixed(2))],
            ['Maksimumsverdi', GetValue(() => columnData.properties.number_metrics.num_max.toFixed(2))],
            ['Intervall', GetValue(() => columnData.properties.number_metrics.num_range.toFixed(2))],
            ['Interkvartil intervall', GetValue(() => columnData.properties.number_metrics.num_iqr.toFixed(2))],
        ];

        if (isDataEmpty(quantileMetrics)){
            quantileMetrics = []
        }

        let descriptiveMetrics = [
            ['Standardavvik', GetValue(() => columnData.properties.number_metrics.num_std.toFixed(2))],
            ['Variasjonskoeffisient', GetValue(() => columnData.properties.number_metrics.num_cov.toFixed(2))],
            ['Kurtose', GetValue(() => columnData.properties.number_metrics.num_kurtosis.toFixed(2))],
            ['Gjennomsnitt', GetValue(() => columnData.properties.number_metrics.num_mean.toFixed(2))],
            ['Median absolutt deviasjon', GetValue(() => columnData.properties.number_metrics.num_mad.toFixed(2))],
            ['Skjevhet', GetValue(() => columnData.properties.number_metrics.num_skewness.toFixed(2))],
            ['Sum', GetValue(() => columnData.properties.number_metrics.num_sum)],
            ['Antall 0', GetValue(() => columnData.properties.number_metrics.num_zero)],
        ];

        if (isDataEmpty(descriptiveMetrics)){
            descriptiveMetrics = []
        }

        return (
            <Block display={['block', 'flex']}>
               {quantileMetrics.length > 0 && ( <Block width={'100%'}>
                    <Table columns={['Kvantil Metrikker', '']} data={quantileMetrics} />
                </Block>)}
                {descriptiveMetrics.length > 0 && (<Block width={'100%'}>
                    <Table columns={['Deskriptive Metrikker', '']} data={descriptiveMetrics} />
                </Block>)}
            </Block>
        );
    };

    const getDataTypeMetrics = () => {
        let dataTypeItems: any = [];

        if (columnData.properties.data_type.toLowerCase() === 'number') {
            return getNumberMetrics();
        }
        if (columnData.properties.data_type.toLowerCase() === 'date') {
            dataTypeItems = [
                ['Minimum', GetValue(() => columnData.properties.date_metrics.date_min)],
                ['Median', GetValue(() => columnData.properties.date_metrics.date_median)],
                ['Maximum', GetValue(() => columnData.properties.date_metrics.date_max)],
            ];
        }
        if (columnData.properties.data_type.toLowerCase() === 'varchar2') {
            dataTypeItems = [
                ['Minimum antall tegn', GetValue(() => columnData.properties.varchar2_metrics.var2_min)],
                ['Median antall tegn', GetValue(() => columnData.properties.varchar2_metrics.var2_median)],
                ['Maximum antall tegn', GetValue(() => columnData.properties.varchar2_metrics.var2_max)],
                [
                    'Gjennomsnittlig antall tegn',
                    GetValue(() => columnData.properties.varchar2_metrics.var2_mean.toFixed(2)),
                ],
                ['Varianse antall tegn', GetValue(() => columnData.properties.varchar2_metrics.var2_var.toFixed(2))],
            ];
        }

        if(isDataEmpty(dataTypeItems)){
            dataTypeItems = []
        }

        return (
            <Block>
                {dataTypeItems.length > 0  && (
                    <Table columns={[`${columnData.properties.data_type} Metrikker`, '']} data={dataTypeItems} />
                )}
            </Block>
        );
    };

    const getMetaData = () => {
        let metaData: any = [];
        if (columnData.properties.sampling) {
            metaData = [
                ['Dato kjørt', GetValue(() => columnData.properties.run_date)],
                ['Sampling', 'Sant'],
                ['Sample størrelse', GetValue(() => columnData.properties.stan_sample_size)],
                ['Sample andel', GetValue(() => columnData.properties.stan_sample_pct)],
            ];
        } else {
            metaData = [
                ['Dato kjørt', GetValue(() => columnData.properties.run_date)],
                ['Sampling', 'Usant'],
            ];
        }

        if(isDataEmpty(metaData)){
            metaData = []
        }

        return <Block>{metaData && metaData.length > 0 && <Table columns={['', '']} data={metaData} />}</Block>;
    };

    const getCountTable = () => {
        const countTable = GetValue(() => columnData.properties.count_table, []);

        return (
            <Block>
                {countTable && countTable.length >= 1 && <Table columns={['Verdi', 'Antall']} data={countTable} />}
            </Block>
        );
    };

    return (
        <React.Fragment>
            <Block $style={{borderBottom: '1px solid', wordBreak: 'break-all'}} marginBottom="1em">
                {columnData.properties && (
                    <Block $style={{overflowWrap: 'break-word'}} marginTop="scale800">
                        <Block marginBottom="scale800">
                            <LabelLarge $style={{marginTop: '0px'}}>
                                <b>{columnData.properties.column_name}</b>
                            </LabelLarge>
                        </Block>
                        <Block marginBottom="scale600" $style={{...theme.typography.font300}}>
                            <LabelMedium>
                                <b>Beskrivelse</b>
                            </LabelMedium>
                            {GetValue(() => columnData.properties.column_description, '')}
                        </Block>
                        <Block display={['block', 'block', 'flex']}>
                            <Block marginTop="scale800" marginBottom="scale600" flex="1">
                                <Block>{getData()}</Block>
                            </Block>
                            <Block
                                marginLeft={['none', 'none', 'scale1000']}
                                flex="1"
                                marginTop="scale600"
                                marginBottom="scale600"
                                justifyContent="center"
                            >
                                {getDataQuality()}
                            </Block>
                            <Block
                                marginLeft={['none', 'none', 'scale1000']}
                                flex="1"
                                marginTop="scale600"
                                marginBottom="scale600"
                            >
                                <Tagging
                                    header="Opplysningstype"
                                    isLoading={loading}
                                    dataId={columnData.id}
                                    tagOptions={tagOptions}
                                    serverUrl={server}
                                    dataTags={tags}
                                    setDataTags={setTags}
                                    edgeLabel="hasColumnTag"
                                    tagLabel="name"
                                    placeholder="Søk og legg til opplysningstype"
                                    isEditMode={isEditMode}
                                />
                            </Block>
                        </Block>

                        <Block marginTop={'12px'} marginBottom={'12px'}>
                            <ToggleDetails
                                dataTypeMetrics={getDataTypeMetrics()}
                                plotlyChart={GetValue(() => columnData.properties.hist, '')}
                                metaData={getMetaData()}
                                countTable={getCountTable()}
                            />
                        </Block>
                    </Block>
                )}
            </Block>
        </React.Fragment>
    );
};

export default ColumnViewer;
