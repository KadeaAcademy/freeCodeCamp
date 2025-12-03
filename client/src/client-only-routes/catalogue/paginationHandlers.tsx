import { Dispatch, SetStateAction } from 'react';

interface UsePaginationHandlersParams {
  currentPage: number;
  totalPages: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  setIsDataOnLoading?: Dispatch<SetStateAction<boolean>>;
}

const usePaginationHandlers = ({
  currentPage,
  totalPages,
  setCurrentPage,
  setIsDataOnLoading
}: UsePaginationHandlersParams) => {
  const onNavigateForward = () => {
    if (currentPage < totalPages && currentPage > 0) {
      setCurrentPage(currentPage + 1);
      if (setIsDataOnLoading) setIsDataOnLoading(false);
    }
  };

  const onNavigueteBackward = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      if (setIsDataOnLoading) setIsDataOnLoading(false);
    }
  };

  const onNavigateToPage = (page: number) => {
    setCurrentPage(page);
  };

  return {
    onNavigateForward,
    onNavigueteBackward,
    onNavigateToPage
  };
};

export default usePaginationHandlers;
