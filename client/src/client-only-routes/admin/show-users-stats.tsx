import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Table,
  FormGroup,
  ControlLabel,
  FormControl,
  Panel
} from '@freecodecamp/react-bootstrap';
import { CurrentSuperBlock } from '../../redux/prop-types';
import ShowMonthEnrollementMember from './show-month-enrollement-member';

// Types
type Member = {
  id: string;
  email: string;
  name: string;
  gender: string;
  currentsSuperBlock: CurrentSuperBlock[];
  groups: string[];
  createAt: string;
  phone: string;
  whatsapp: string;
  location: string;
  role: string;
};

interface EnrollmentStat {
  period: string;
  count: number;
  year: number;
  month: number;
}

interface Props {
  members: Member[] | undefined;
}

export function AllUserStates({ members }: Props) {
  const [enrollmentStats, setEnrollmentStats] = useState<EnrollmentStat[]>([]);
  const [dateRange, setDateRange] = useState<number>(3); // Plage de dates en mois
  const [filteredYear, setFilteredYear] = useState<number>(
    new Date().getFullYear()
  );

  const [monthEnrolementMember, setMonthEnrolementMember] = useState<Member[]>(
    []
  );

  const dateNow = new Date();
  const currentMonth = dateNow.getMonth();

  // Fonction pour calculer les statistiques d'inscription par période de date
  const calculateEnrollmentStats = () => {
    const stats: {
      [key: string]: { count: number; year: number; month: number };
    } = {};
    const now = new Date();
    const rangeStart = new Date();
    rangeStart.setMonth(now.getMonth() - dateRange);

    members?.forEach(member => {
      const createDate = new Date(member.createAt);

      if (createDate >= rangeStart) {
        const period = `${createDate.getFullYear()}-${
          createDate.getMonth() + 1
        }`;
        stats[period] = stats[period] || {
          count: 0,
          year: createDate.getFullYear(),
          month: createDate.getMonth()
        };
        stats[period].count += 1;
      }
    });

    // Convertir en tableau trié par date
    const statsArray: EnrollmentStat[] = Object.entries(stats)
      .map(([period, { count, year, month }]) => ({
        period,
        count,
        year,
        month
      }))
      .sort(
        (a, b) => new Date(a.period).getTime() - new Date(b.period).getTime()
      );

    setEnrollmentStats(statsArray);
  };

  // Filtrer les statistiques par année
  const filterStatsByYear = (year: number) => {
    return enrollmentStats.filter(stat => stat.year === year);
  };

  // Calculer la somme des inscriptions pour une plage
  const calculateTotalEnrollments = () => {
    return enrollmentStats.reduce((total, stat) => total + stat.count, 0);
  };

  // Trouver le mois avec le plus et le moins d'inscriptions
  const getMonthWithExtremeEnrollments = () => {
    const min = Math.min(...enrollmentStats.map(stat => stat.count));
    const max = Math.max(...enrollmentStats.map(stat => stat.count));

    const minMonth = enrollmentStats.find(stat => stat.count === min);
    const maxMonth = enrollmentStats.find(stat => stat.count === max);

    return { minMonth, maxMonth };
  };

  useEffect(() => {
    calculateEnrollmentStats();

    const currentMonthMembers =
      members?.filter(member => {
        const createDate = new Date(member.createAt);
        console.log('currentMonth', currentMonth);

        return createDate.getMonth() === currentMonth;
      }) || [];

    setMonthEnrolementMember(currentMonthMembers);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [members, dateRange, currentMonth]);

  // Options de plage de dates
  const renderDateRangeOptions = () => (
    <FormGroup className='mb-3 flex flex-col '>
      <div className='flex items-center'>
        <svg
          className='filter-icon'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          width={100}
          height={100}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
          />
        </svg>
        <ControlLabel class='colore-withe-text'>{`Plage d'inscriptions mensuelle`}</ControlLabel>
      </div>
      <FormControl
        componentClass='select'
        value={dateRange}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setDateRange(Number(e.target.value))
        }
        className='standard-radius-5 '
      >
        <option value={3}>3 mois</option>
        <option value={6}>6 mois</option>
        <option value={12}>12 mois</option>
        <option value={24}>24 mois</option>
      </FormControl>
    </FormGroup>
  );

  // Options d'année pour filtrer les inscriptions
  const renderYearFilter = () => (
    <FormGroup className='mb-3 '>
      <div className='flex items-center'>
        <svg
          className='filter-icon'
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
            d='M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z'
          />
        </svg>

        <ControlLabel>Filtrer par année</ControlLabel>
      </div>
      <FormControl
        componentClass='select'
        value={filteredYear}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setFilteredYear(Number(e.target.value))
        }
        className='standard-radius-5'
      >
        {Array.from({ length: 4 }, (_, i) => 2022 + i).map(year => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </FormControl>
    </FormGroup>
  );

  const { minMonth, maxMonth } = getMonthWithExtremeEnrollments();

  return (
    <>
      <Row className='mb-4 flex gap-2rem align-center '>
        <div className='filter-card'>{renderDateRangeOptions()}</div>
        <div className='filter-card'>{renderYearFilter()}</div>
        <div className=''>
          <Row className='mt-4 max-w-50 flex gap-2rem '>
            <div>
              <Col>
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
                          <strong className='text-white'>{`Mois avec le moins d'inscriptions`}</strong>
                        </td>
                      </tr>
                      <tr className='highlight-row'>
                        <td className='text-white'>
                          {minMonth
                            ? new Date(minMonth.period).toLocaleDateString(
                                'fr-FR',
                                {
                                  year: 'numeric',
                                  month: 'long'
                                }
                              )
                            : 'Pas de résultats'}
                        </td>
                        <td className='text-white'>
                          {minMonth ? minMonth.count : 0}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Panel>
              </Col>
            </div>

            <div>
              <Col>
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
                            <strong className='text-white'>{`Mois avec le plus d'inscriptions`}</strong>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className='text-white'>
                          {maxMonth
                            ? new Date(maxMonth.period).toLocaleDateString(
                                'fr-FR',
                                {
                                  year: 'numeric',
                                  month: 'long'
                                }
                              )
                            : 'Pas de résultats'}
                        </td>
                        <td className='text-white'>
                          {maxMonth ? maxMonth.count : 0}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Panel>
              </Col>
            </div>
          </Row>
        </div>
      </Row>

      <div>
        <Row>
          <div className='flex items-center gap-2 w-[10rem] ml-4'>
            <Panel
              header="Statistiques d'inscriptions"
              className='custom-panel'
            >
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
                          width={50}
                          height={50}
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
                          width={50}
                          height={50}
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
                  {filterStatsByYear(filteredYear).map(stat => (
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
                    <td className='px-6 py-4'>{calculateTotalEnrollments()}</td>
                  </tr>
                </tbody>
              </Table>
            </Panel>
            <ShowMonthEnrollementMember members={monthEnrolementMember} />
          </div>
        </Row>
      </div>
    </>
  );
}
