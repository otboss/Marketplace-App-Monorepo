using Microsoft.AspNetCore.Mvc;
using marketplace_api.Model;
using marketplace_api.Dto;
using System.Net.Http;
using System.Text;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;

namespace  marketplace_api.Controllers;


[ApiController]
[Route("api/[controller]")]
public class SessionController : ControllerBase
{

    private readonly ILogger<SessionController> _logger;


    private bool validate(){
        return false;
    }

    [HttpPost("signIn")]
    public AuthToken SignIn(string email, string password){


        // TODO: Check login

        // TODO: Get user first and last name from database

        string firstName = "";
        string lastName = "";

        var expiration = DateTime.UtcNow.AddMinutes(Constants.JWT_TOKEN_VALIDITY_MINS);
        var tokenKey = Encoding.ASCII.GetBytes(Model.Constants.JWT_SECRET);
        var securityTokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new System.Security.Claims.ClaimsIdentity(new List<System.Security.Claims.Claim> {
                new System.Security.Claims.Claim("email", "test@gmail.com"),
                new System.Security.Claims.Claim("firstName", firstName),
                new System.Security.Claims.Claim("accountVerified", "false"),
                new System.Security.Claims.Claim("lastName", lastName)
            }),
            Expires = expiration,
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(tokenKey), SecurityAlgorithms.HmacSha256Signature)
        };

        var jwtHandler = new JwtSecurityTokenHandler();
        var securityToken = jwtHandler.CreateToken(securityTokenDescriptor);
        string token = jwtHandler.WriteToken(securityToken);

        AuthToken response = new AuthToken(
            token,
            expiration.Ticks / TimeSpan.TicksPerMillisecond
        );

        return response;
    }

    [HttpPost("signUp")]
    public AuthToken CreateAccount(string email, string password){

        // TODO: Save credential to database

        AuthToken response = new AuthToken("", 1);
        Response.StatusCode = StatusCodes.Status201Created;
        return response;
    }

    [HttpPost("signOut")]
    public HttpResponseMessage SignOut(string token){

        // TODO: Remove token hash from database

        HttpResponseMessage response = new HttpResponseMessage();
        return response;
    }

    [HttpPost("forgotPassword")]
    public HttpResponseMessage ForgotPassword(string token){
        HttpResponseMessage response = new HttpResponseMessage();
        return response;
    }

}