export class auditactivities{
	constructor(
    public id: number,
    public id_audit: number,
    public begin: any,
    public end: any,
    public name: string,
    public numerals_iso: string,
    public numerals_meci: string,
    public id_user_auditor: number){}
}
