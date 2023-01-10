export class SignUpController {
  public handle(_httpRequest: any): any {
    return {
      statusCode: 400,
      body: new Error('Missing param: name'),
    };
  }
}
