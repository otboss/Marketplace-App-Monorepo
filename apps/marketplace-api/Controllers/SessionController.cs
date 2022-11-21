using Microsoft.AspNetCore.Mvc;
using marketplace_api.Model;
using marketplace_api.Dto;
using System.Net.Http;
namespace  marketplace_api.Controllers;


[ApiController]
[Route("api/[controller]")]
public class SessionController : ControllerBase
{

    // private readonly ILogger<SessionController> _logger;


    // [HttpGet("d", Name = "GetCloudFormations")]
    // public IEnumerable<WeatherForecast> Getd()
    // {
    //     return Enumerable.Range(1, 5).Select(index => new WeatherForecast
    //     {
    //         Date = DateTime.Now.AddDays(index),
    //         TemperatureC = Random.Shared.Next(-20, 55),
    //         Summary = Summaries[Random.Shared.Next(Summaries.Length)]
    //     })
    //     .ToArray();
    // }

    // [HttpPost(Name = "GetCloudFormations")]
    // public Session 

    private bool validate(){
        return false;
    }

    [HttpPost("signIn")]
    public HttpResponseMessage SignIn(string email, string password){
        HttpResponseMessage response = new HttpResponseMessage();
        // response.AppendHeader("Access-Control-Allow-Origin", "*");
        // response.Headers.Append("Access-Control-Allow-Origin", "*");
        Response.Headers.Add("Access-Control-Allow-Origin", "*");
        // HttpContext.Response.Headers.Add("Access-Control-Allow-Origin", "*");        
        return response;
    }

    [HttpPost("signUp")]
    public HttpResponseMessage CreateAccount(string email, string password){
        HttpResponseMessage response = new HttpResponseMessage();
        return response;
    }

    [HttpPost("signOut")]
    public HttpResponseMessage SignOut(string token){
        HttpResponseMessage response = new HttpResponseMessage();
        return response;
    }

    [HttpPost("forgotPassword")]
    public HttpResponseMessage ForgotPassword(string token){
        HttpResponseMessage response = new HttpResponseMessage();
        return response;
    }

}