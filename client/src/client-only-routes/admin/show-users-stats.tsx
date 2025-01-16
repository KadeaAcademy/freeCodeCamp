import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Table,
  FormGroup,
  ControlLabel,
  FormControl
  // InputGroup
} from '@freecodecamp/react-bootstrap';
import { CurrentSuperBlock } from '../../redux/prop-types';

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
}

interface Props {
  members: Member[] | undefined;
}

export function AllUserStates({ members }: Props) {
  const [enrollmentStats, setEnrollmentStats] = useState<EnrollmentStat[]>([]);
  const [dateRange, setDateRange] = useState<number>(3); // Plage de dates en mois

  // Fonction pour calculer les statistiques d'inscription par période de date
  const calculateEnrollmentStats = () => {
    const stats: { [key: string]: number } = {};
    const now = new Date();
    const rangeStart = new Date();
    rangeStart.setMonth(now.getMonth() - dateRange);

    members?.forEach(member => {
      const createDate = new Date(member.createAt);
      if (createDate >= rangeStart) {
        const period = `${createDate.getFullYear()}-${
          createDate.getMonth() + 1
        }`; // Mois humain (1-12)
        stats[period] = (stats[period] || 0) + 1;
      }
    });

    // Convertir en tableau trié par date
    const statsArray: EnrollmentStat[] = Object.entries(stats)
      .map(([period, count]) => ({ period, count }))
      .sort(
        (a, b) => new Date(a.period).getTime() - new Date(b.period).getTime()
      );

    setEnrollmentStats(statsArray);
  };

  useEffect(() => {
    calculateEnrollmentStats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [members, dateRange]);

  // Options de plage de dates
  const renderDateRangeOptions = () => (
    <FormGroup className='mb-3'>
      <ControlLabel>{`Plage d'inscriptions`}</ControlLabel>
      <FormControl
        componentClass='select'
        value={dateRange}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setDateRange(Number(e.target.value))
        }
        className='standard-radius-5'
      >
        <option value={3}>3 mois</option>
        <option value={6}>6 mois</option>
        <option value={12}>12 mois</option>
        <option value={24}>24 mois</option>
      </FormControl>
    </FormGroup>
  );

  return (
    <>
      <Row>
        <Col md={6} sm={12} xs={12}>
          {renderDateRangeOptions()}
        </Col>
      </Row>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Table responsive hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>{`Nombre d'inscriptions`}</th>
              </tr>
            </thead>
            <tbody>
              {enrollmentStats.map(stat => (
                <tr key={stat.period}>
                  <td>
                    {new Date(stat.period).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long'
                    })}
                  </td>
                  <td>{stat.count}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
}
