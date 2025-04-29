import { FinanceOverview } from "@/components/finance/finance-overview";

const FinancePage = () => {
  return (
    <div className="w-full flex flex-col p-4 gap-4">
      <FinanceOverview />
    </div>
  );
};

export default FinancePage;
