import React, {useState} from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW13.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import axios, {AxiosError} from 'axios' // Իմպորտավորում ենք AxiosError-ը տիպավորման համար
import success200 from './images/200.svg'
import error400 from './images/400.svg'
import error500 from './images/500.svg'
import errorUnknown from './images/error.svg'

const HW13 = () => {
    const [code, setCode] = useState('')
    const [text, setText] = useState('')
    const [info, setInfo] = useState('')
    const [image, setImage] = useState('')
    const [isLoading, setIsLoading] = useState(false) // Վիճակ՝ կոճակները անջատելու համար

    const send = (x?: boolean | null) => () => {
        const url =
            x === null
                ? 'https://xxxxxx.ccc' // Իմիտացիա անկոռեկտ հասցեի
                : 'https://samurai.it-incubator.io/api/3.0/homework/test'

        setCode('')
        setImage('')
        setText('')
        setInfo('...loading')
        setIsLoading(true) // Միացնել բեռնումը

        axios
            .post(url, {success: x})
            .then((res) => {
                // 1. Հաջող պատասխան (200 OK)
                setCode('Код 200!')
                setImage(success200)
                setText(res.data.errorText)
                setInfo(res.data.info)
            })
            .catch((e: AxiosError) => {
                // 1. Սխալի մշակում
                const error = e.response

                if (error) {
                    // 400 կամ 500 սխալներ (API-ի պատասխանը)
                    const status = error.status
                    const data = error.data as any

                    setCode(`Ошибка ${status}!`)
                    setText(data.errorText || 'Server responded with an error.') // Օգտագործում ենք errorText բեքենդից
                    setInfo(data.info || e.message)

                    if (status === 500) {
                        setImage(error500)
                    } else if (status === 400) {
                        setImage(error400)
                    } else {
                        setImage(errorUnknown) // Անհայտ API սխալ
                    }

                } else {
                    // Network Error կամ անկոռեկտ URL (օրինակ՝ 'https://xxxxxx.ccc')
                    setCode('Error!')
                    setText(`Network Error\n${e.name}`)
                    setImage(errorUnknown)
                    setInfo(e.message) // Ցույց տալ ամբողջական սխալի հաղորդագրությունը
                }
            })
            .finally(() => {
                // 2. Անջատել բեռնումը, անկախ արդյունքից
                setIsLoading(false)
            })
    }

    return (
        <div id={'hw13'}>
            <div className={s2.hwTitle}>Homework #13</div>

            <div className={s2.hw}>
                <div className={s.buttonsContainer}>
                    <SuperButton
                        id={'hw13-send-true'}
                        onClick={send(true)}
                        xType={'secondary'}
                        disabled={isLoading} // Կոճակը անջատված է բեռնման ժամանակ
                    >
                        Send true
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-false'}
                        onClick={send(false)}
                        xType={'secondary'}
                        disabled={isLoading} // Կոճակը անջատված է բեռնման ժամանակ
                    >
                        Send false
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-undefined'}
                        onClick={send(undefined)}
                        xType={'secondary'}
                        disabled={isLoading} // Կոճակը անջատված է բեռնման ժամանակ
                    >
                        Send undefined
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-null'}
                        onClick={send(null)}
                        xType={'secondary'}
                        disabled={isLoading} // Կոճակը անջատված է բեռնման ժամանակ
                    >
                        Send null
                    </SuperButton>
                </div>

                <div className={s.responseContainer}>
                    <div className={s.imageContainer}>
                        {image && <img src={image} className={s.image} alt="status"/>}
                    </div>

                    <div className={s.textContainer}>
                        <div id={'hw13-code'} className={s.code}>
                            {isLoading ? '...loading' : code}
                        </div>
                        <div id={'hw13-text'} className={s.text}>
                            {text}
                        </div>
                        <div id={'hw13-info'} className={s.info}>
                            {info}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW13