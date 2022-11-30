import React, { useState, useEffect } from 'react'
import './test.scss'

const Test = () => {
  const [name, setName] = useState()
  const [link, setLink] = useState()
  const [description, setDescription] = useState()
  const [formData, setFormData] = useState()
  console.log(name)
  console.log(link)
  console.log(description)
  console.log(formData)

  const headerOnChange = (e) => {
    const { value } = e.target
    setName(value)
    setFormData({ ...formData, name: value })
  }

  const bodyOnChange = (e) => {
    const { value } = e.target
    setDescription(value)
    setFormData({ ...formData, description: value })
  }

  const linkOnchange = (e) => {
    const { value } = e.target
    setLink(value)
    setFormData({ ...formData, link: value })
  }
  
  console.log(formData)
  const formDataSubmit = (e) => {
    e.preventDefault()
    fetch('https://dh8eclzy2h.execute-api.ap-northeast-2.amazonaws.com/pilioto_eat_bot_stage/restaurant-info', 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ formData }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 201) {
          alert('맛집 등록 완료!')
          window.location.reload()
        } else {
          alert('맛집 등록 실패 ㅠㅠ')
        }
      })
  }
  

  return (
    <>
      <main className="main">
        <div className="mainBox">
          <section className="sectionBox">
          <div className="imgBox">
            <img className="img" src="img/piloto_logo.png"></img>
            <h1 className="title">맛집 등록</h1>
          </div>
            <div className="headerBox">
              <input onChange={headerOnChange} className="headerInput" />
              <label className="headerLabel">맛집 이름</label>
            </div>
            <div className="headerBox">
              <input onChange={bodyOnChange} className="headerInput" />
              <label className="headerLabel">설명</label>
            </div>
            <div className="headerBox">
              <input onChange={linkOnchange} className="headerInput" />
              <label className="headerLabel">링크</label>
            </div>
            <button onClick={formDataSubmit} className="testClick">
              등록하기
            </button>
          </section>
        </div>
      </main>
    </>
  )
}

export default Test
