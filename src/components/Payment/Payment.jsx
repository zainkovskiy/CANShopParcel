import React, { useEffect } from "react";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const spanStyle = {
  margin: '1rem 0px 0px 0px',
  fontFamily: 'montserrat',
  fontWight: 400,
  letterSpacing: '0.8px',
  display: 'block',
}

export default function Payment() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  return (
    <>
      <div className="subtitle">
        Способ оплаты
        <Button
          onClick={() => navigate('/brand_store')}
          variant="text"
          size='small'
        >
          Назад
        </Button>
      </div>
      <span style={spanStyle}>Оплата производится либо в размере кредитного лимита по должности, в соответствии с приказом. Либо безналичным перечислением на расчетный счет поставщика</span>
    </>
  )
}