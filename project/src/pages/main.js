import React from 'react'
import './css/main.css'

const main = () => {
  return (
    <>
<div className='main'>
   <div className='search'>
      <input
          className='caffeeInput'
          placeholder='찾으시는 카페의 이름을 입력해주세요.'
      />
      <button className='search-btn' type='button' aria-label='검색하기 버튼'>
      <img src='/image/searchbtn1.png' alt='검색이미지' />
      </button>
    </div>
</div>

{/* item 소개 메인페이지 */}
<div style={{position:'relative'}}>
  <div className='slide-btn1'>
    <img src='/image/다음버튼.png' alt='이전버튼'/>
  </div>
   <div className='contents'>
      <div className='content-header'>
        <div>#서울(100)</div>
        <div>
          <button>
            <span>자세히보기</span>
          </button>
        </div>
      </div>
      <div>
        <div className='content-main'>

        </div>
        <div className='content-explanation'>
          <p>아메리카노</p>
        </div>
      </div>
    </div>
    <div className='slide-btn2'>
    <img src='/image/다음버튼.png' alt='다음버튼'/>
    </div>
  </div>
</>
  )
}

export default main