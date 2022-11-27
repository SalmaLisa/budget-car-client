import { useQuery } from '@tanstack/react-query';
import React from 'react';
import DashboardLoader from '../../shared/DashboardLoader';


const ReportedItems = () => {
  const { data: reportedItems = [] ,isLoading} = useQuery({
    queryKey:['reportedItems'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/reportedItems')
      const data = res.json()
      return data
    }
  })
  console.log(reportedItems)
  if (isLoading) {
    return <DashboardLoader></DashboardLoader>
  }

  return (
    <div>
      
    </div>
  );
};

export default ReportedItems;