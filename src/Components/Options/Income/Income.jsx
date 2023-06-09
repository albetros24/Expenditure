import React, { useEffect } from "react";
import Form from "./Form";
import { useGlobalContext } from "../../context/globalContext";
import IncomeItem from "./Incomeitem";

function Income() {
  const { addIncome, incomes, getIncomes, deleteIncome, totalIncome } =
    useGlobalContext();
  useEffect(() => {
    getIncomes();
    console.log(incomes);
  }, []);
  return (
    <div className="income">
      <h1>Income 22</h1>
      <div className="income-content">
        <div className="form-container">
          <Form />
        </div>
        <div className="incomes">
          {incomes.map((income) => {
            const { _id, title, amount, date, category, description, type } =
              income;
            return (
              <IncomeItem
                key={_id}
                id={_id}
                title={title}
                description={description}
                amount={amount}
                date={date}
                type={type}
                category={category}
                indicatorColor="var(--color-green)"
                deleteItem={deleteIncome}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Income;
