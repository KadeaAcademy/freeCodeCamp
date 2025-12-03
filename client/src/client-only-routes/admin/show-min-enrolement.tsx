import React from 'react';
import { Panel, Table } from '@freecodecamp/react-bootstrap';
import { EnrollmentStat } from '../../redux/prop-types';

interface MinEnrollmentPanelProps {
  minMonth: EnrollmentStat | undefined;
}

const MinEnrollmentPanel = ({ minMonth }: MinEnrollmentPanelProps) => {
  return (
    <Panel
      header="Mois avec le moins d'inscriptions de la période"
      className='custom-panel-min'
    >
      <Table responsive>
        <tbody>
          <tr className='highlight-row'>
            <td className='text-center p-4 flex items-center text-white'>
              <svg
                className='w-6 h-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                width={70}
                height={70}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4'
                />
              </svg>
              <strong className='text-white'>
                {`Mois avec le moins d'inscriptions`}
              </strong>
            </td>
          </tr>
          <tr className='highlight-row'>
            <td className='text-white'>
              {minMonth
                ? new Date(minMonth.period).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long'
                  })
                : 'Pas de résultats'}
            </td>
            <td className='text-white'>{minMonth ? minMonth.count : 0}</td>
          </tr>
        </tbody>
      </Table>
    </Panel>
  );
};

export default MinEnrollmentPanel;
