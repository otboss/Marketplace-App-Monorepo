using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;

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

    public ConfigController(IActionDescriptorCollectionProvider provider, ILogger<ConfigController> logger)
    {
        _logger = logger;
    }

    // [HttpGet(Name = "GetRoutes")]
    // public IEnumerable<string> GetRoutes()
    // {
    //     return RouteData.Routers.OfType<RouteCollection>().All();
    // }
    private readonly IActionDescriptorCollectionProvider _provider;

    [HttpGet("routes")]
    public IActionResult GetRoutes() {
        // TODO: Correct this ROUTE
        var routes = _provider.ActionDescriptors.Items .Where(ad => ad.AttributeRouteInfo != null) .Select(x => new { Action = null != x && null != x.RouteValues && null != x.RouteValues["action"] ? x.RouteValues["action"] : "n/a", Controller = null != x && null != x.RouteValues && null != x.RouteValues["controller"] ? x.RouteValues["controller"] : "n/a", Name = x.AttributeRouteInfo.Name ?? "n/a", Template = x.AttributeRouteInfo.Template ?? "n/a" }).ToList();
        return Ok(routes);
    }    
}
