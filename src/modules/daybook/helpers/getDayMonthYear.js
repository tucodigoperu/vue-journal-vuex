const monthsArr = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const daysArr   = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']

const getDayMonthYear = (dateString) =>{

    const date = new Date(dateString)

    return {
        day: date.getDate(),
        month : monthsArr[date.getMonth()],
        yearDay: `${date.getFullYear()}, ${daysArr[date.getDay()]}`
    }

}

export default getDayMonthYear