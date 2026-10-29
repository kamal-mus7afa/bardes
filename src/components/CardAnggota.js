import React from 'react'
import '../styles/Anggota.css'

const CardAnggota = ({ imgsrc, title, ketua }) => {
  return (
    <div className='card-anggota'>
        <img src={imgsrc} alt={title} />
        <h2 className='anggota-title'>{title}</h2>
        <div className='anggota-jabatan'>
            <p>{ketua}</p>
        </div>
    </div>
  )
}

export default CardAnggota
