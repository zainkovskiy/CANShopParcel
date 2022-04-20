import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';

export default function Dilivery() {
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
        Доставка
        <Button
          onClick={() => navigate('/brand_store')}
          variant="text"
          size='small'
        >
          Назад
        </Button>
        </div>
        <ul className="footer__list">
        Сроки изготовления и отгрузки товаров: 
          <li>Бейдж - 4 р.д.</li>
          <li>Визитка - 4 р.д.</li>
          <li>Пленка на авто - 4 р.д.</li>
          <li>Баннер - 5 р.д.</li>
        </ul>
    </>
  )
}