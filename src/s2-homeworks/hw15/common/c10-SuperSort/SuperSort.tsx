import React from 'react'
import Down from '../../../../assets/icons/down-arrow.svg'
import Up from '../../../../assets/icons/up-arrow.svg'
import None from '../../../../assets/icons/content-none.svg'

// добавить в проект иконки и импортировать
const downIcon = Down
const upIcon = Up
const noneIcon = None

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    // исправить
    if (sort === '') {
        return down
    } else if (sort === down) {
        return up
    } else {
        return ''
    }

}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            <img
                id={id + '-icon-' + sort}
                src={icon}
            />

        </span>
    )
}

export default SuperSort