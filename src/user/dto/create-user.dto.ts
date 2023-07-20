export class CreateUserDto {
  public id: number;
  public name: string;
  public lastname: string;
  public username: string;
  public password: string;
  public email: string;
  public created_at: Date;
}
