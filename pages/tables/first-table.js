import React from 'react';
import Table from '../../components/table/table';

export default function App() {
  const columns = React.useMemo(() => [
    {
      Header: 'License',
      accessor: 'license',
    },
    {
      Header: 'Invoice',
      accessor: 'invoice',
    },
    {
      Header: 'Purchase Date',
      accessor: 'purchaseDate',
    },
  ]);

  const data = React.useMemo(() => [
    {
      license: '2PC-XCG',
      invoice: 85556,
      purchaseDate: '02/04/2009',
    },
    {
      license: '47R-177',
      invoice: 19418,
      purchaseDate: '07/12/2005',
    },
    {
      license: '496-D35',
      invoice: 19710,
      purchaseDate: '08/10/2005',
    },
  ]);

  return <Table columns={columns} data={data} />;
}
