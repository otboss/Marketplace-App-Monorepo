using Microsoft.AspNetCore.Mvc;
using marketplace_api.Model;

namespace  marketplace_api.Controllers;


[ApiController]
[Route("api/[controller]")]
public class ProductController : ControllerBase
{

    // private readonly ILogger<ItemController> _logger;

    [HttpGet("search")]
    public IEnumerable<Product> SearchProducts([FromQuery(Name = "query")] string query, [FromQuery(Name = "category")] string? category){
        return Enumerable.Range(1, 5).Select(index => new Product
        {
            // Date = DateTime.Now.AddDays(index),
            // TemperatureC = Random.Shared.Next(-20, 55),
            // Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            ID = "",
            Title = "",
            Rating = 5,
            Cost = 100,
        })
        .ToArray();
    }


}