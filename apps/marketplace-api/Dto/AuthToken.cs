namespace marketplace_api.Dto;


public class AuthToken {
    public string token { get; }
    public long expires { get; }

    public AuthToken(
        string token,
        long expires
    )
    {
        this.token = token;
        this.expires = expires;
    }
}