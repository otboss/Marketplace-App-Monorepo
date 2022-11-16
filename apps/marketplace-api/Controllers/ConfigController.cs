using Microsoft.AspNetCore.Mvc;

namespace marketplace_api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ConfigController : ControllerBase
{
    private static readonly string[] Categories = new[]
    {
        "Apparel",
        "Appliances",
        "Beauty",
        "Computers",
        "Electronics",
    };

    private readonly ILogger<ConfigController> _logger;

    public ConfigController(ILogger<ConfigController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetConfig")]
    public IEnumerable<string> Get()
    {
        // return Enumerable.Range(1, 5).Select(index => new Categories
        // {
        //     Date = DateTime.Now.AddDays(index),
        //     TemperatureC = Random.Shared.Next(-20, 55),
        //     Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        // })
        // .ToArray();
        return Categories;
    }
}
