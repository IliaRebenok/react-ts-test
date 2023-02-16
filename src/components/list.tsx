import React from 'react'

interface IProps {
    wish: {
        itemName: string,
        amount?: number,
        pictureUrl?: string,
        info?: string,
    }[]
}

const List: React.FC<IProps> = ({ wish }) => {

    const renderList = (): JSX.Element[]  => {
        return wish.map((item) => { 
            return (
                <li key={item.itemName} className='list'>
                    <div className='titile'>
                        <img className='image' src={item.pictureUrl} />
                        <h2>{item.itemName}</h2>
                    </div>
                    <span className='amount'>{item.amount} will be plenty</span>
                    <span className='info'>{item.info}</span>
                </li>
            )
        })
    }

    return (
        <ul>
            {renderList()}
        </ul>
    )
}

export default List;