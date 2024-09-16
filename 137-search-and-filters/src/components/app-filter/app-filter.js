import "./app-filter.css";

const AppFilter = ({onFilterSelect, filter}) => {

    const btnsData = [
        {label: 'Усі співпрацівники', filterName: 'all', },
        {label: 'На підвищення', filterName: 'rise', },
        {label: 'З/П більше 1000', filterName: 'moreThan1000', },
    ]

    const btns = btnsData.map(({label, filterName}) => {
        const active = filter === filterName;
        const clazz = active ? 'btn-light' : 'btn-outline-light'; 
        
        return (
            <button 
            className={`btn ${clazz}`}
            onClick = {() => onFilterSelect(filterName)}
            key = {filterName}>
            {label}
        </button>
        )
    })
    

    return (
        <div className="btn-group">
            {btns}
        </div>
    )
}

export default AppFilter;