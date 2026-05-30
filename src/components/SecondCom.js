function SecondCom(pros) {
        return (
        <p onClick={()=>pros.deleteRow(pros.input.row_column)}>
           {pros.input.row_desc}
        </p>
        )
}

export default SecondCom