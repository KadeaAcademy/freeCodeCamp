import React from 'react';
import { Panel, Table } from '@freecodecamp/react-bootstrap';
import { EnrollmentStat } from '../../redux/prop-types';

interface EnrollmentStatsPanelProps {
  stats: EnrollmentStat[];
  calculateTotal: () => number;
}

const EnrollmentStatsPanel = ({
  stats,
  calculateTotal
}: EnrollmentStatsPanelProps) => {
  return (
    <Panel header="Statistiques d'inscriptions" className='custom-panel'>
      <Table responsive className='stats-table'>
        <thead>
          <tr className='bg-gray-900 text-white'>
            <th className='px-6 py-4'>
              <div className='flex items-center gap-2'>
                <svg
                  className='w-5 h-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  width={40}
                  height={40}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                  />
                </svg>
                <span>Date</span>
              </div>
            </th>
            <th className='px-6 py-4'>
              <div className='flex items-center gap-2'>
                <svg
                  className='w-5 h-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  width={40}
                  height={40}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
                <span>{`Nombre d'inscriptions`}</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {stats.map(stat => (
            <tr
              key={stat.period}
              className='hover:bg-gray-50 transition-colors duration-200'
            >
              <td className='px-6 py-4 text-sm text-gray-900'>
                {new Date(stat.period).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long'
                })}
              </td>
              <td className='px-6 py-4 text-sm font-medium text-gray-900'>
                {stat.count}
              </td>
            </tr>
          ))}
          <tr className='bg-gray-900 text-white font-bold'>
            <td className='px-6 py-4'>Total</td>
            <td className='px-6 py-4'>{calculateTotal()}</td>
          </tr>
        </tbody>
      </Table>
    </Panel>
  );
};

export default EnrollmentStatsPanel;
