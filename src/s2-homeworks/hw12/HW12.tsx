import React, {useEffect} from 'react'
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import {useDispatch, useSelector} from 'react-redux'
import {changeThemeId} from './bll/themeReducer'
import {AppStoreType} from '../hw10/bll/store' // Предполагается, что AppStoreType определен в этом пути

/*
* 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер (Выполнено в предыдущем шаге)
* 2 - получить themeId из редакса
* 3 - дописать тип и логику функции change
* 4 - передать пропсы в SuperSelect
*/

const themes = [
    {id: 1, value: 'light'},
    {id: 2, value: 'blue'},
    {id: 3, value: 'dark'},
]

const HW12 = () => {
    // 2. Получить themeId из редакса
    // useSelector используется для извлечения данных из Redux store.
    // Предполагается, что themeId хранится в state.theme.themeId
    const themeId = useSelector<AppStoreType, number>(state => state.theme.themeId)
    const dispatch = useDispatch() // Получаем диспетчер для отправки экшенов

    // 3. Дописать тип и логику функции change
    // Эта функция вызывается SuperSelect при изменении опции и получает новый themeId.
    const change = (id: number) => {
        dispatch(changeThemeId(id)) // Отправляем action для изменения themeId в Redux
    }

    // Этот useEffect отвечает за применение темы,
    // устанавливая атрибут data-theme на <html> элемент.
    useEffect(() => {
        document.documentElement.dataset.theme = themeId + ''
    }, [themeId])

    return (
        <div id={'hw12'}>
            <div id={'hw12-text'} className={s2.hwTitle}>
                Homework #12
            </div>

            <div className={s2.hw}>
                {/* 4. Передать пропсы в SuperSelect для реализации переключения тем */}
                <SuperSelect
                    id={'hw12-select-theme'} // ID-ն ճիշտ է դրված
                    className={s.select}
                    options={themes}
                    value={themeId}
                    onChangeOption={change}
                />
            </div>
        </div>
    )
}

export default HW12