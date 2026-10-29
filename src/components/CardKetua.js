import React from 'react'
import '../styles/Anggota.css'

const CardKetua = ({ img, name, jabatan, featured = false }) => {
  return (
    <div className={`card-pilar${featured ? ' card-pilar--featured' : ''}`}>
        <img src={img} alt={name} />
        <h2 className='anggota-title'>{name}</h2>
        <div className='anggota-jabatan'>
            <p>{jabatan}</p>
        </div>
    </div>
  )
}

export default CardKetua
