import React, { useState, useEffect } from 'react';
import { Row, Col } from '@freecodecamp/react-bootstrap';
import { EnrollmentStat, Member } from '../../redux/prop-types';
import ShowMonthEnrollementMember from './show-month-enrollement-member';
import EnrollmentStatsPanel from './show-enrolement-stats';
import MaxEnrollmentPanel from './show-max-enrollement';
import MinEnrollmentPanel from './show-min-enrolement';
import YearFilter from './show-year-enrolement-filter';
import DateRangeFilter from './show-month-range-filter';
import { calculateEnrollmentStats } from './calculate-enrolement-state';

// Types

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
    const stats = calculateEnrollmentStats(members, dateRange);
    setEnrollmentStats(stats);

    const currentMonthMembers =
      members?.filter(member => {
        const createDate = new Date(member.createAt);
        console.log('currentMonth', currentMonth);

        return (
          createDate.getMonth() === currentMonth &&
          createDate.getFullYear() === dateNow.getFullYear()
        );
      }) || [];

    setMonthEnrolementMember(currentMonthMembers);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [members, dateRange, currentMonth]);

  const { minMonth, maxMonth } = getMonthWithExtremeEnrollments();

  return (
    <>
      <Row className='mb-4 flex gap-2rem align-center '>
        <div className='filter-card'>
          <DateRangeFilter
            dateRange={dateRange}
            onDateRangeChange={setDateRange}
          />
        </div>
        <div className='filter-card'>
          <YearFilter
            filteredYear={filteredYear}
            onYearChange={setFilteredYear}
            startYear={2022}
            numberOfYears={4}
          />
        </div>
        <div className=''>
          <Row className='mt-4 max-w-50 flex gap-2rem '>
            <div>
              <Col>
                <MinEnrollmentPanel minMonth={minMonth} />
              </Col>
            </div>

            <div>
              <Col>
                <MaxEnrollmentPanel maxMonth={maxMonth} />
              </Col>
            </div>
          </Row>
        </div>
      </Row>

      <div>
        <Row>
          <div className='flex items-center gap-2 w-[10rem] ml-4'>
            <EnrollmentStatsPanel
              stats={filterStatsByYear(filteredYear)}
              calculateTotal={calculateTotalEnrollments}
            />
            <ShowMonthEnrollementMember members={monthEnrolementMember} />
          </div>
        </Row>
      </div>
    </>
  );
}
