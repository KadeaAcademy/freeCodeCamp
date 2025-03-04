import { EnrollmentStat, Member } from '../../redux/prop-types';

interface StatsMap {
  [key: string]: {
    count: number;
    year: number;
    month: number;
  };
}

export const calculateEnrollmentStats = (
  members: Member[] | undefined,
  dateRange: number
): EnrollmentStat[] => {
  const stats: StatsMap = {};
  const now = new Date();
  const rangeStart = new Date();
  rangeStart.setMonth(now.getMonth() - dateRange);

  members?.forEach(member => {
    const createDate = new Date(member.createAt);

    if (createDate >= rangeStart) {
      const period = `${createDate.getFullYear()}-${createDate.getMonth() + 1}`;
      stats[period] = stats[period] || {
        count: 0,
        year: createDate.getFullYear(),
        month: createDate.getMonth()
      };
      stats[period].count += 1;
    }
  });

  // Convert to sorted array
  return Object.entries(stats)
    .map(([period, { count, year, month }]) => ({
      period,
      count,
      year,
      month
    }))
    .sort(
      (a, b) => new Date(a.period).getTime() - new Date(b.period).getTime()
    );
};
