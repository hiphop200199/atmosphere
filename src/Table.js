import React from 'react'

const Table = (props) => {

  return (
    <table className={`${props.classType}-table`}>
      <thead>
        <tr className={`${props.classType}-tr-header`}>
          <th className={`${props.classType}-th`}>樣式名稱</th>
          <th className={`${props.classType}-th`}>樣式前綴</th>
          <th className={`${props.classType}-th`}>主要色調</th>
        </tr>
      </thead>
      <tbody>
        <tr className={`${props.classType}-tr-data`}>
          <td className={`${props.classType}-td`}>簡約專業</td>
          <td className={`${props.classType}-td`}>clean</td>
          <td className={`${props.classType}-td`}>白、鐵灰</td>
        </tr>
        <tr className={`${props.classType}-tr-data`}>
          <td className={`${props.classType}-td`}>繽紛春天</td>
          <td className={`${props.classType}-td`}>spring</td>
          <td className={`${props.classType}-td`}>粉紅、粉藍</td>
        </tr>
        <tr className={`${props.classType}-tr-data`}>
          <td className={`${props.classType}-td`}>未來科技</td>
          <td className={`${props.classType}-td`}>tech</td>
          <td className={`${props.classType}-td`}>黑、白</td>
        </tr>
        <tr className={`${props.classType}-tr-data`}>
          <td className={`${props.classType}-td`}>溫暖焦糖</td>
          <td className={`${props.classType}-td`}>caramel</td>
          <td className={`${props.classType}-td`}>棕色</td>
        </tr>
        <tr className={`${props.classType}-tr-data`}>
          <td className={`${props.classType}-td`}>火山熔岩</td>
          <td className={`${props.classType}-td`}>lava</td>
          <td className={`${props.classType}-td`}>墨藍、鉻黃</td>
        </tr>
        <tr className={`${props.classType}-tr-data`}>
          <td className={`${props.classType}-td`}>海洋之心</td>
          <td className={`${props.classType}-td`}>sea</td>
          <td className={`${props.classType}-td`}>藍</td>
        </tr>
        <tr className={`${props.classType}-tr-data`}>
          <td className={`${props.classType}-td`}>發芽茁壯</td>
          <td className={`${props.classType}-td`}>flourish</td>
          <td className={`${props.classType}-td`}>綠</td>
        </tr>
        </tbody>
        <tfoot></tfoot>
    </table>
  )
}
Table.defaultProps={
    classType:"clean"
}
export default Table
