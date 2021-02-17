
import React from 'react'

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            { // performance concern because anon funcs are called everytime this comp is rendered
                items.filter((item, idx) => idx < 4).map((item) => (
                    <div key={item.id}>{item.name}</div>
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;
