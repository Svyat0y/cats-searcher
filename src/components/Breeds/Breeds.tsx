import React, {useEffect} from 'react'
import {Route, Routes, useSearchParams} from 'react-router-dom'

import {useAppDispatch} from '../../redux/store'

import {SearchedItems, SingleBreedInfo} from '../index'
import BreedLayout from './BreedLayout'
import {setActiveBtn} from '../../redux/voting/slice'
import {setOrder, setToLimit, setToValue} from '../../redux/Breeds/slice'
import {fetchSearch} from '../../redux/Search/asyncActions'


const Breeds = () => {
    const dispatch = useAppDispatch()
    const [searchParams, setSearchParams] = useSearchParams()


    useEffect(() => {
        dispatch(setActiveBtn('Breeds'))
    })
    useEffect(() => {
        if (location.search) {
            const valueParam: any = searchParams.get('q')
            const limitParam: any = searchParams.get('limit')
            const orderParam: any = searchParams.get('order')
            dispatch(setToValue(valueParam))
            dispatch(setToLimit(limitParam))
            dispatch(setOrder(orderParam))
            dispatch(fetchSearch())
        }
    }, [location.search])


    return (
        <>
            <Routes>
                <Route path='/' element={<BreedLayout/>}>
                    <Route path='' element={<SearchedItems dispatch={dispatch}/>}/>
                    <Route path='description' element={<SingleBreedInfo/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default Breeds