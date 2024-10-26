import React from 'react'
import './css/main.css'

const main = () => {
  return (
  <div className='container'>
    <div className='top_nav'>
         <h3 style={{ marginLeft: '1em' }}>당신을 위한</h3>
        <h4><span class="seoul">서울</span> 추천 카페</h4>
        <button className='other-location btn'>
        다른 지역 선택
        </button>
        <button className='current-location btn'>
        현 위치로 설정
        </button>
    </div>
  </div>
  )
}

export default main