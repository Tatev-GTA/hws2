import React, {useState} from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'

/*
* 1 - описать типы AffairPriorityType, AffairType
* 2 - указать нужный тип для defaultAffairs
* 3 - дописать типы и логику функции filterAffairs и проверить её тестами
* 4 - выполнить пункт 3 для функции deleteAffair
* 5 - указать нужный тип в useState с affairs
* 6 - дописать тип и логику функции deleteAffairCallback
* 7 - в файле Affairs.tsx дописать типизацию пропсов
* 8 - в файле Affairs.tsx дописать логику функций setAll, setHigh, setMiddle, setLow
* 9 - в файле Affair.tsx дописать типизацию пропсов
* 10 - в файле Affair.tsx дописать функции deleteCallback и использовать
* 11 - в файле Affair.tsx отобразить приходящие данные
* */

// types
export type AffairPriorityType = 'high' | 'middle' | 'low' // Исправлено: конкретные строковые литералы
export type AffairType = {
    _id: number // Исправлено: _id является числом
    name: string // Исправлено: name является строкой
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [ // Исправлено: указан тип AffairType[]
    {_id: 1, name: 'React', priority: 'high'}, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions (чистые вспомогательные функции)
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => { // Исправлены типы
    if (filter === 'all') {
        return affairs; // Если фильтр 'all', возвращаем все дела
    } else {
        // Иначе фильтруем дела по их приоритету
        return affairs.filter(affair => affair.priority === filter);
    }
}

export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => { // Исправлены типы
    // Возвращаем новый массив дел, исключая то, у которого _id совпадает с переданным
    return affairs.filter(affair => affair._id !== _id);
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs) // Исправлено: указан тип AffairType[]
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)

    const deleteAffairCallback = (_id: number) => { // Исправлен тип
        // Вызываем функцию deleteAffair для получения нового массива дел без удаленного элемента
        const newAffairs = deleteAffair(affairs, _id);
        // Обновляем состояние дел
        setAffairs(newAffairs);
    }

    return (
        <div id={'hw2'}>
            <div className={s2.hwTitle}>Домашняя работа #2</div> {/* Перевел заголовок */}
            <div className={s2.hw}>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                    filter={filter}
                />
            </div>
        </div>
    )
}

export default HW2