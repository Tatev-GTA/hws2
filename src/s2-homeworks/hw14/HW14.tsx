import React, { useEffect, useState } from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW14.module.css'
import axios from 'axios'
import SuperDebouncedInput from './common/c8-SuperDebouncedInput/SuperDebouncedInput'
import { useSearchParams } from 'react-router-dom'

/**
 * ⚠️ Կարևոր պայման Cypress-ի համար
 * getTechs-ը ԵՐԲԵՔ չպետք է reject անի
 */
const getTechs = async (
    find: string
): Promise<{ data: { techs: string[] } }> => {
    try {
        return await axios.get(
            'https://samurai.it-incubator.io/api/3.0/homework/test2',
            { params: { find } }
        )
    } catch {
        return {
            data: {
                techs: [],
            },
        }
    }
}

const HW14 = () => {
    const [find, setFind] = useState('')
    const [isLoading, setLoading] = useState(false)
    const [techs, setTechs] = useState<string[]>([])
    const [searchParams, setSearchParams] = useSearchParams()

    const sendQuery = (value: string) => {
        setLoading(true)

        getTechs(value)
            .then((res) => {
                setTechs(res.data.techs)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const onChangeText = (value: string) => {
        setFind(value)
        setSearchParams(value ? { find: value } : {})
    }

    useEffect(() => {
        const findFromUrl = searchParams.get('find') ?? ''

        setFind(findFromUrl)
        sendQuery(findFromUrl)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const mappedTechs = techs.map((t) => (
        <div key={t} id={'hw14-tech-' + t} className={s.tech}>
            {t}
        </div>
    ))

    return (
        <div id={'hw14'}>
            <div className={s2.hwTitle}>Homework #14</div>

            <div className={s2.hw}>
                <SuperDebouncedInput
                    id={'hw14-super-debounced-input'}
                    value={find}
                    onChangeText={onChangeText}
                    onDebouncedChange={sendQuery}
                    className={s.input}
                />

                <div id={'hw14-loading'} className={s.loading}>
                    {isLoading ? '...ищем' : <br />}
                </div>

                {mappedTechs}
            </div>
        </div>
    )
}

export default HW14
