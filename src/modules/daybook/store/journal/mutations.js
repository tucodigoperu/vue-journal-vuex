

export const setEntries = (state, entries) =>{
    state.entries = [...state.entries, ...entries]
    state.isloading = false
}

export const updateEntries = (state, entry) =>{

    const idx = state.entries.map(e => e.id).indexOf(entry.id)
    state.entries[idx] = entry

}

export const addEntries = (state, entry) =>{

    state.entries = [entry, ...state.entries]

}

export const deteleEntrie = (state, id) =>{
    //Filtra el id borrado
    state.entries = state.entries.filter(entry=>entry.id !== id)

}


