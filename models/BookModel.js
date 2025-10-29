import pool from './db.js';

export const getBooks = async () =>{
    const[row]=await pool.query("SELECT * FROM tblbook");
    return row;
}
/*
export const insertBook = async (DataTransferItemList, author) => {
    const [result] = await pool.query(
        "INSERT INTO book(title, author) VALUES(?,?)",[title, author]
    )
}
    */