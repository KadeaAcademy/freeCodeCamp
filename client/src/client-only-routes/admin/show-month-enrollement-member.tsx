import React, { useState } from 'react';
import { Panel, Table } from '@freecodecamp/react-bootstrap';
import { Member } from '../../redux/prop-types';

interface MonthlyEnrollmentStatsProps {
  members: Member[];
  showDetailedView?: boolean;
}

const MonthlyEnrollmentStats = ({
  members,
  showDetailedView = false
}: MonthlyEnrollmentStatsProps) => {
  const [showDetails, setShowDetails] = useState(showDetailedView);

  const currentDate = new Date().toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long'
  });

  return (
    <Panel header="Statistiques d'inscriptions" className='custom-panel'>
      <Table responsive className='stats-table'>
        <thead>
          <tr>
            <th className='px-6 py-4'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2 m-2 p-2'>
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
                  <span className='p-6 m-4'>{`Inscriptions  ${currentDate}`}</span>
                </div>
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className='colorsDetails px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-black-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                >
                  {showDetails ? 'Masquer' : 'Voir les détails'}
                </button>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          <tr className='bg-gray-900 text-white font-bold'>
            <td className='px-6 py-4 text-bold'>
              {members.length === 0
                ? "Pas d'inscriptions pour ce mois"
                : members.length}
            </td>
          </tr>
          {showDetails && members.length > 0 && (
            <>
              {members.map(member => (
                <tr key={member.id.toString()} className='hover:bg-gray-50'>
                  <td className='px-6 py-4'>
                    <div className='flex justify-between items-center'>
                      <div>
                        <p className='text-sm font-medium text-gray-900'>
                          {member.name}
                        </p>
                        <p className='text-sm text-gray-500'>{member.email}</p>
                      </div>
                      <div className='text-sm text-gray-500'>
                        {new Date(member.createAt).toLocaleDateString('fr-FR')}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </Table>
    </Panel>
  );
};

export default MonthlyEnrollmentStats;
