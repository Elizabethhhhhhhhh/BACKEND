import pool from './db.js';

export const getBook = async () =>{
    const[row]= await pool.query("SELECT * FROM tblbook");
    return row;
}
/*
export const insertBook = async (title, author) => {
    const [result] = await pool.query(
        "INSERT INTO tblbook(title, author) VALUES(?,?)",[title, author]
    )
}*/