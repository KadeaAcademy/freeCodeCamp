import React from 'react';
import { Panel, Table } from '@freecodecamp/react-bootstrap';
import { EnrollmentStat } from '../../redux/prop-types';

export interface MaxEnrollmentPanelProps {
  maxMonth: EnrollmentStat | undefined;
}

const MaxEnrollmentPanel = ({ maxMonth }: MaxEnrollmentPanelProps) => {
  return (
    <Panel
      header="Mois avec le plus d'inscriptions"
      className='custom-panel-max'
    >
      <Table responsive>
        <tbody>
          <tr>
            <td className='text-center p-4'>
              <div className='flex items-center justify-center gap-2 text-white'>
                <svg
                  className='w-6 h-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  width={80}
                  height={80}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
                  />
                </svg>
                <strong className='text-white'>
                  {`Mois avec le plus d'inscriptions`}
                </strong>
              </div>
            </td>
          </tr>
          <tr>
            <td className='text-white'>
              {maxMonth
                ? new Date(maxMonth.period).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long'
                  })
                : 'Pas de résultats'}
            </td>
            <td className='text-white'>{maxMonth ? maxMonth.count : 0}</td>
          </tr>
        </tbody>
      </Table>
    </Panel>
  );
};

export default MaxEnrollmentPanel;
