import React from 'react'
import Cabecalho from './components/cabecalho/Cabecalho'
import Hero from './components/hero/Hero'
import Offering from './components/offering/Offering'
import Certified from './components/certifieds/Certified'
import DesafioEmpresa from './components/DesafioEmpresa/DesafioEmpresa'

const Main = () => {
  return (
    <>
      <Cabecalho />
      <section id="hero">
        <Hero />
      </section>
      <section id='desafioempresa'>
        <DesafioEmpresa />
      </section>
      <section id="offering">
        <Offering />
      </section>
      <section id='certified'>
        <Certified />
      </section>
    </>
  )
}

export default Main
