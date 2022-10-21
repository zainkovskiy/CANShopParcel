import React from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

export const OrderPlan = () => {
  const navigate = useNavigate();

  const clickBack = () => {
    navigate('/brand_store')
  }

  return(
    <div className="subtitle">
        Заказать планировку
        <Button
          onClick={clickBack}
          variant="text"
          size='small'
        >
          Назад
        </Button>
      </div>
  )
}