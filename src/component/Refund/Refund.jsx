import React, { useEffect } from "react";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const spanStyle = {
  margin: '1rem 0px 0px 0px',
  fontFamily: 'montserrat',
  fontWeight: 400,
  letterSpacing: '0.8px',
  display: 'block',
}

export default function Refund() {
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
      <span style={spanStyle}>После оплаты, Согласно ч.1 ст. 25 ЗоПП, Вы можете обменять непродовольственный товар, который не подошел вам по размеру, фасону, габаритам, цвету и т.д. В течение 2-х недель после покупки у вас есть право обменять продукцию на аналогичную.
      </span>
      <span style={spanStyle}>
        Согласно ч.2 ст. 25 ЗоПП, вы можете оформить возврат денег вместо обмена только в том случае, если аналогичный товар отсутствует в продаже в день обращения, и вы не хотите дожидаться его поступления.
      </span>
      <span style={spanStyle}>
        Если вы купили товар, и он оказался с дефектом, согласно ч.1 чт. 18 ЗоПП, вы имеете право: обменять его на аналогичный либо на другой с перерасчетом стоимости или аннулировать договор купли-продажи и вернуть уплаченную сумму.
        При любых спорных вопросах, просьба обращаться в Отдел Маркетинга и Рекламы
      </span>
    </>
  )
}