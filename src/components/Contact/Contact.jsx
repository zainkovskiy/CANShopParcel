import React, { useEffect } from "react";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

import './Contact.css';

export default function Contact() {
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
        Контакты
        <Button
          onClick={() => navigate('/brand_store')}
          variant="text"
          size='small'
        >
          Назад
        </Button>
      </div>
      <div className="contact">
        {/* <p className="contact__title">КАРТОЧКА ПРЕДПРИЯТИЯ
        <span>ООО «Каталог Недвижимости»</span>
        </p> */}
        <p className="contact__row">Наименование предприятия<span>Общество с ограниченной ответственностью «Каталог Недвижимости»</span></p>
        <p className="contact__row">Краткое название<span>ООО «Каталог Недвижимости»</span></p>
        <p className="contact__row">Юридический адрес<span>630017, г. Новосибирск, ул. Бориса Богаткова, д.171/2, этаж 1</span></p>
        <p className="contact__row">Телефон <span></span></p>
        <p className="contact__row">Электронный адрес<span></span></p>
        <p className="contact__row">ИНН/КПП<span>5405000248 / 540501001</span></p>
        <p className="contact__row">ОГРН<span>1175476048516</span></p>
        <p className="contact__row">Банковские реквизиты<span>Филиал «Центральный» Банка ВТБ (ПАО) в г. Москве
          р/с № 40702810116030001846
          Корсчет  30101810145250000411
          БИК 044525411
        </span></p>
        <p className="contact__row">ОКОГУ<span>4210014</span></p>
        <p className="contact__row">ОКАТО<span>50401379000</span></p>
        <p className="contact__row">ОКТМО<span>50701000001</span></p>
        <p className="contact__row">ОКВЭД<span>68.31.3, 68.31.5, 64.92.3, 69.10, 68.31.4 </span></p>
        <p className="contact__row">Директор<span>Тимошков Андрей Сергеевич </span></p>
        <p className="contact__row">Полномочия директора<span>На основании Устава</span></p>
        <p className="contact__row">ОКПО<span>15495987</span></p>
        <p className="contact__row">ОКФС<span>16</span></p>
      </div>
    </>
  )
}