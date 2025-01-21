import React from 'react'

function FolioCard({ data }) {
  const listItems = data.list.map((item) =>
    <li>{item}</li>);
  return (
    <div class="item-content">
      <div class="item-name">{data.project}</div>
      <div class="item-pic">
        <img class="pic" src={data.thumnil} alt={data.name} />
      </div>
      <div class="item-detail">
        <ul>
          {listItems}
        </ul>
        <a class="moredetail" href={data.hf}>More detail . . . </a>
      </div>
    </div>
  )
}


export default FolioCard