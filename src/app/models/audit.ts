export class audit{
	constructor(
    public id: number,
    public id_program: number,
    public name: string,
    public objective: string,
    public id_user_manager: number,
    public id_user_responsible: number,
    public date_begin: any,
    public date_end: any,
    public scope: string,
    public name_process: string,
    public criteria: string,
    public observations: string,
    public approved: string,
    public global: string,
    public numerals: string,
    public meci: string,
    public closed: string){}
}
