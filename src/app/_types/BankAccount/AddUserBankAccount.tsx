export type AddUserBankAccount = {
    userId: number,
    bankId: number,
    accountType: string;
    accountNumber: string;
    accountOwnerDNI: string;
    accountOwnerDNIType: string,
    accountOwnerName: string
}