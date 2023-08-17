export const handler = (sort, filterOrigin, pokemons) =>{
    let info = [...pokemons]
    if(sort === 'A-Z'){
        info.sort((a,b) => a.name.localeCompare(b.name))
    }
    if(sort === 'Z-A'){
        info.sort((a,b) => b.name.localeCompare(a.name))
    }
    if(sort === 'M'){
        info.sort((a,b) => a.attack - b.attack)
    }
    if(sort ==='m'){
        info.sort((a,b) => b.attack - a.attack)
    }
    if(filterOrigin === 'Db'){
        info = info.filter(el => {
            el.hasOwnProperty('createdInDb')
        })
    }
    if(filterOrigin ==='Api'){
        info = info.filter(el => {
            (typeof el.id === 'number')
        })
    }
    return info
}