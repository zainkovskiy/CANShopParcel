import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const spanStyle = {
  margin: '1rem 0px 0px 0px',
  'font-family': 'montserrat',
  'font-weight': 400,
  'letter-spacing': '0.8px',
  display: 'block',
}

export default function Limits() {
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
        Лимиты
        <Button
          onClick={() => navigate('/brand_store')}
          variant="text"
          size='small'
        >
          Назад
        </Button>
      </div>
      <ol className="footer__list">
        Риэлтор
        <li>Риэлтору и партнерам предоставляется кредитный лимит 5000 руб. в месяц в рамках которого доступны покупки без предоплаты. Если лимит превышен необходимо возместить затраты в кассу РКЦ, чтобы продолжить покупки.
        </li>
        <li>
          Так же доступна оплата в магазине в момент покупки**.
        </li>
        <li>
          Расходы должны быть компенсированы из ближайшего вознаграждения риэлтора
        </li>
      </ol>
      <ol className="footer__list">
        Стажер
        <li>Для стажеров выделены квоты на продукцию, но кредитный лимит не предусмотрен.
        </li>
        <li>
          Стажер вправе заказать дополнительный материал сверх квоты за свой счет.
        </li>
        <li>
          Перенос остатка на следующие периоды не предусмотрен
        </li>
      </ol>
      <span style={spanStyle}>*Инструктивное письмо №08-22Н от 04.03.2022 г.</span>
      <span style={spanStyle}>** На данный момент функция «Оплата в магазине в момент покупки» находится в разработке</span>
      <TableContainer component={Paper} style={{ margin: '1rem 0 0 0' }}>
        <Table sx={{ minWidth: '70%' }} stickyHeader aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ 'fontWeight': 700 }}>№</TableCell>
              <TableCell style={{ 'fontWeight': 700 }}>Статьи расхода</TableCell>
              <TableCell style={{ 'fontWeight': 700 }}>Период нормирования</TableCell>
              <TableCell style={{ 'fontWeight': 700 }}>Цена/шт.</TableCell>
              <TableCell style={{ 'fontWeight': 700 }}>Размер лимита</TableCell>
              <TableCell style={{ 'fontWeight': 700 }}>Сумма лимита</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell style={{ 'fontWeight': 600 }} colSpan={6}>Лимиты для риэлтора:</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Бейдж Агента (75*100 мм)</TableCell>
              <TableCell>Квартал</TableCell>
              <TableCell>15руб.</TableCell>
              <TableCell>1шт.</TableCell>
              <TableCell>15руб.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>Лента Агента (20*900 мм)</TableCell>
              <TableCell>Квартал</TableCell>
              <TableCell>90руб.</TableCell>
              <TableCell>1шт.</TableCell>
              <TableCell>90руб.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ 'fontWeight': 600 }} colSpan={6}>Лимиты для стажера:</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>Бейдж Агента (75*100 мм)</TableCell>
              <TableCell>На весь период стажировки</TableCell>
              <TableCell>15руб.</TableCell>
              <TableCell>1шт.</TableCell>
              <TableCell>15руб.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>4</TableCell>
              <TableCell>Лента Агента (20*900 мм)</TableCell>
              <TableCell>На весь период стажировки</TableCell>
              <TableCell>68руб.</TableCell>
              <TableCell>1шт.</TableCell>
              <TableCell>68руб.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>5</TableCell>
              <TableCell>Дневник стажера (А5)</TableCell>
              <TableCell>На весь период стажировки</TableCell>
              <TableCell>75руб.</TableCell>
              <TableCell>1шт.</TableCell>
              <TableCell>75руб.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>6</TableCell>
              <TableCell>Баннер</TableCell>
              <TableCell>Месяц</TableCell>
              <TableCell>до 344руб.</TableCell>
              <TableCell>2шт.</TableCell>
              <TableCell>до 688руб.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ 'fontWeight': 600 }} colSpan={6}>Лимиты для БЭК, ДЭД офиса:</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>7</TableCell>
              <TableCell>Бейдж Агента (75*100 мм)</TableCell>
              <TableCell>Квартал</TableCell>
              <TableCell>15руб.</TableCell>
              <TableCell>1шт.</TableCell>
              <TableCell>10руб.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>8</TableCell>
              <TableCell>Лента Агента (20*900 мм)</TableCell>
              <TableCell>Квартал</TableCell>
              <TableCell>90руб.</TableCell>
              <TableCell>1шт.</TableCell>
              <TableCell>10руб.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>9</TableCell>
              <TableCell>Ежедневник</TableCell>
              <TableCell>Год</TableCell>
              <TableCell>300руб.</TableCell>
              <TableCell>1шт.</TableCell>
              <TableCell>300руб.</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}