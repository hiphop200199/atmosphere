import React from 'react'

const Aside = (props) => {
    
  return (
    <aside className={`${props.classType}-aside`}>
    <h3 className={`${props.classType}-h3`}>寫網頁的心路歷程.</h3>
    <p className={`${props.classType}-p`}>我的職涯一路走過來沒有那麼順利，中間陸續換了幾個工作，但是始終都覺得沒辦法好好發揮自己的才能。
    一直到後來有一次跟著醫院團隊去衛生所服務，自己用很簡陋的邏輯寫了掛號費計算機後，才意識到我其實對寫程式有興趣呢.繞了一大圈回來碰資訊，想想也好，一路以來不斷的碰壁，也很想要找到一個可以好好投入、好好發揮的領域。</p>
  </aside>
  )
}
Aside.defaultProps={
    classType:"clean"
}
export default Aside
