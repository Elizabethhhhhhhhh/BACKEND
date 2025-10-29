import pool from './db.js';

export const getStudent = async () =>{
    const[row]=await pool.query("SELECT * FROM tblstudent");
    return row;
}
/*
export const insertBook = async (DataTransferItemList, author) => {
    const [result] = await pool.query(
        "INSERT INTO book(title, author) VALUES(?,?)",[title, author]
    )
}
*/