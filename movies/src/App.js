import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import _ from 'lodash'
import './css/style.css'

import Filter from './Filter'
import Movie from './Movie'

const filter = (movies, term) => {
    let filterTerm = '^(?=.*' + _.trim(term).split(/\s+/).join(')(?=.*') + ').*$'
    let pattern = RegExp(filterTerm, 'i')

    return _.filter(movies, movie => 
            pattern.test(_.join([movie.year, movie.director, movie.title], ' ')))
}

const App = () => {
    const movies = useSelector(state => state.movies, _.isEqual)
    const filterTerm = useSelector(state => state.filterTerm, _.isEqual)
    const dispatch = useDispatch()

    const updateFilterTerm = term => 
        dispatch({ type: 'UPDATE_FILTER_TERM', filterTerm: term })

    return <main>
        <Filter term={ filterTerm } updateFilterTerm={ updateFilterTerm } />
        { _.map(filter(movies, filterTerm), movie => <Movie key={ movie.rank } data={ movie } />) }
    </main>
}

export default App
