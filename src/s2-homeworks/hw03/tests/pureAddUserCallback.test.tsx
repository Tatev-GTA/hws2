import React from 'react'
import {pureAddUserCallback} from '../HW3'

let initialState: any[]
let setName: React.Dispatch<React.SetStateAction<any[]>>

beforeEach(() => {
    initialState = []
    setName = jest.fn((value) => {
        if (typeof value === 'function') {
            initialState = value(initialState)
        } else {
            initialState = value
        }
    })
})

test('name 1', () => {
    pureAddUserCallback('name', setName, initialState)
    expect(initialState.length).toBe(1)
    expect(initialState[0].name).toBe('name')
    expect(!!initialState[0]._id).toBe(true)
})