import pool from './db.js';

export const getStudent = async () =>{
    const[row]=await pool.query("SELECT * FROM tblstudents");
    return row;
}
/*
export const insertBook = async (title, author) => {
    const [result] = await pool.query(
        "INSERT INTO tblbook(title, author) VALUES(?,?)",[title, author]
    )
}*/